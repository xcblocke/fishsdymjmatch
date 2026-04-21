"use strict";
cc._RF.push(module, '37edegOAFZMeK0cHATttFSi', 'TaskModel');
// subpackages/l_task/Scripts/model/TaskModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
var TaskData_1 = require("../TaskData");
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var DataReader_1 = require("../../../../Scripts/framework/data/DataReader");
var ConfigType_1 = require("../../../../Scripts/gamePlay/base/data/ConfigType");
var Model_1 = require("../../../../Scripts/framework/data/Model");
var DGameUnlock_1 = require("../../../../Scripts/gamePlay/dot/DGameUnlock");
var DGameGetItem_1 = require("../../../../Scripts/gamePlay/dot/DGameGetItem");
var TaskUtils_1 = require("../TaskUtils");
var CardUtil_1 = require("../../../../Scripts/gamePlay/user/CardUtil");
var GameInteraction_1 = require("../../../../Scripts/GameInteraction/GameInteraction");
var IUserData_1 = require("../../../../Scripts/user/IUserData");
var GameUtils_1 = require("../../../../Scripts/core/simulator/util/GameUtils");
var TaskModel = /** @class */ (function (_super) {
    __extends(TaskModel, _super);
    function TaskModel() {
        var _this = _super.call(this) || this;
        _this.STAGE_WEIGHTS = [0.18, 0.6, 1];
        _this._firstRandomFlag = 0;
        _this._stageBoxIds = [];
        _this._dictGroupTask = new Map();
        _this._isInitialized = false;
        _this.hasFinishStage = false;
        _this.cacheBannerInfo = null;
        _this.taskProgressChangesInGame = new Map();
        _this.bannerDataForAnimation = null;
        _this._openFrom = TaskData_1.ETaskUIType.Home;
        TaskUtils_1.TaskUtils.isLocalEmpty(_this.localData.isFirstHomeShow) && (_this.localData.isFirstHomeShow = false);
        TaskUtils_1.TaskUtils.isLocalEmpty(_this.localData.isFirstTaskIntervention) && (_this.localData.isFirstTaskIntervention = false);
        TaskUtils_1.TaskUtils.isLocalEmpty(_this.localData.lastTime) && (_this.localData.lastTime = 0);
        TaskUtils_1.TaskUtils.isLocalEmpty(_this.localData.taskStage) && (_this.localData.taskStage = 1);
        TaskUtils_1.TaskUtils.isLocalEmpty(_this.localData.pendingClearCount) && _this.clearPendingClearCount();
        TaskUtils_1.TaskUtils.isLocalEmpty(_this.localData.listTaskType) && (_this.localData.listTaskType = []);
        TaskUtils_1.TaskUtils.isLocalEmpty(_this.localData.dictStageState) && (_this.localData.dictStageState = {});
        TaskUtils_1.TaskUtils.isLocalEmpty(_this.localData.dictTaskProgress) && (_this.localData.dictTaskProgress = {});
        return _this;
    }
    TaskModel.prototype.setStageStateData = function (t, e) {
        this.localData.dictStageState[t] = e;
        this.localData.dictStageState = this.localData.dictStageState;
    };
    TaskModel.prototype.setTaskProgressData = function (t, e) {
        this.localData.dictTaskProgress[t] = e;
        this.localData.dictTaskProgress = this.localData.dictTaskProgress;
    };
    TaskModel.prototype.setTaskTypeList = function (t) {
        this.localData.listTaskType = t;
        this.localData.listTaskType = this.localData.listTaskType;
    };
    TaskModel.prototype.initialize = function () {
        if (!this._isInitialized)
            try {
                this.preInitTasks();
                if (0 === Object.keys(this.localData.dictStageState).length) {
                    this.initTasks();
                }
                else {
                    TaskUtils_1.TaskUtils.checkDataIntegrity(this.localData) && this.initTasks();
                }
                this.updateTaskProgressBaseline();
                this._isInitialized = true;
            }
            catch (t) { }
    };
    TaskModel.prototype.isInitialized = function () {
        return this._isInitialized;
    };
    TaskModel.prototype.preInitTasks = function () {
        var t, e;
        this._dictGroupTask.clear();
        var a = DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.task, "TaskPhase", 1);
        if (0 !== a.length)
            try {
                for (var o = __values(a), i = o.next(); !i.done; i = o.next()) {
                    var r = i.value;
                    if (1 === r.RandomFlag) {
                        this._dictGroupTask.has(r.TaskType) || this._dictGroupTask.set(r.TaskType, []);
                        this._dictGroupTask.get(r.TaskType).push(r.TaskKey);
                    }
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    i && !i.done && (e = o.return) && e.call(o);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
    };
    TaskModel.prototype.getTaskData = function () {
        return this.localData;
    };
    TaskModel.prototype.configure = function (t) {
        void 0 !== t.openCondition && (this._taskOpenCondition = t.openCondition);
        void 0 !== t.firstRandomFlag && (this._firstRandomFlag = t.firstRandomFlag);
        void 0 !== t.stageBoxIds && (this._stageBoxIds = __spreadArrays(t.stageBoxIds));
    };
    TaskModel.prototype.openCondition = function () {
        return this._taskOpenCondition || {
            level: 0,
            day: 0
        };
    };
    TaskModel.prototype.isTaskOpen = function () {
        if (!this._taskOpenCondition)
            return false;
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId(), e = UserModel_1.default.getInstance().getGameActiveDays() || 1, a = this._taskOpenCondition, o = 0 === a.level || t > a.level, i = 0 === a.day || e >= a.day, r = o && i;
        r && DGameUnlock_1.DotGameUnlock.dotByType(DGameUnlock_1.EFuncUnlockType.Task);
        return r;
    };
    TaskModel.prototype.checkAndInitTask = function () {
        if (this.resetTaskData()) {
            this.autoReceiveReward();
            this.initTasks();
            this.localData.isFirstTaskIntervention || (this.cacheBannerInfo = null);
        }
        else {
            this.refreshTaskState();
            this.updateTaskProgressBaseline();
        }
    };
    TaskModel.prototype.resetTaskData = function () {
        var t = Date.now(), e = this.localData.lastTime;
        return !TaskUtils_1.TaskUtils.isSameDay(e, t);
    };
    TaskModel.prototype.initTasks = function () {
        if (!(this._dictGroupTask.size < 3)) {
            this.localData.lastTime = Date.now();
            this.localData.taskStage = 1;
            for (var t = {}, e = 1; e <= 3; e++)
                t[e] = TaskData_1.createDefaultTaskStage();
            this.localData.dictStageState = t;
            this.localData.dictStageState = this.localData.dictStageState;
            this.clearCache();
            var a = this.initTasksFirstOpen();
            a || (a = this.initTasksNormal());
            if (a) {
                this.refreshTaskState();
                this.updateTaskProgressBaseline();
            }
        }
    };
    TaskModel.prototype.validateFirstTaskCondition = function () {
        if (this.localData.isFirstTaskIntervention)
            return null;
        var t = DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.task, "RandomFlag", this._firstRandomFlag).filter(function (t) {
            return 1 === t.TaskPhase;
        });
        return 0 === t.length ? null : t;
    };
    TaskModel.prototype.calculateExcludedTypes = function (t) {
        var e = __spreadArrays(t);
        if (t.includes(TaskData_1.ETaskType.FinishLevel)) {
            e.push(TaskData_1.ETaskType.FinishXLevel);
        }
        else {
            t.includes(TaskData_1.ETaskType.FinishXLevel) && e.push(TaskData_1.ETaskType.FinishLevel);
        }
        return e;
    };
    TaskModel.prototype.selectTaskTypes = function (t) {
        var e = Array.from(new Set(t.map(function (t) {
            return t.TaskType;
        }))).slice(0, 3), a = Array.from(this._dictGroupTask.keys()), o = this.calculateExcludedTypes(e), i = a.filter(function (t) {
            return !o.includes(t);
        }), r = Math.max(0, 3 - e.length);
        TaskUtils_1.TaskUtils.shuffleArray(i);
        var n = i.slice(0, r), s = __spreadArrays(e, n);
        if (s.length < 3) {
            console.error("[TaskModel] 首次任务类型不足3个：固定" + e.length + "个，随机" + n.length + "个");
            return [];
        }
        return s;
    };
    TaskModel.prototype.buildTaskInfo = function (t, e) {
        var a = [], o = [], i = [], r = e;
        a.push(r.TaskKey);
        o.push(0);
        i.push(r.TaskValue2);
        for (;;) {
            var n = this.getNextTask(r);
            if (!n)
                break;
            a.push(n.TaskKey);
            o.push(i[i.length - 1]);
            i.push(n.TaskValue2);
            r = n;
        }
        var s = 0;
        t === TaskData_1.ETaskType.FinishXLevel && (s = UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1);
        var l = -1;
        t === TaskData_1.ETaskType.ClearMahjong && (l = TaskUtils_1.TaskUtils.randomSelectTargetValue(e));
        return {
            taskId: a,
            taskProgress: s,
            taskMin: o,
            taskMax: i,
            targetValue: l
        };
    };
    TaskModel.prototype.buildTaskInfosForTypes = function (t, e) {
        var a, o, i = new Map(), r = Array.from(new Set(e.map(function (t) {
            return t.TaskType;
        }))), s = function s(t) {
            var a = null;
            if (r.includes(t)) {
                var o = e.filter(function (e) {
                    return e.TaskType === t;
                });
                o.length > 0 && (a = o[0]);
            }
            else {
                var n = l._dictGroupTask.get(t);
                if (n && n.length > 0) {
                    TaskUtils_1.TaskUtils.shuffleArray(n);
                    a = l.getTaskConfig(n[0]);
                }
            }
            if (!a)
                return "continue";
            var s = l.buildTaskInfo(t, a);
            i.set(t, s);
        }, l = this;
        try {
            for (var c = __values(t), p = c.next(); !p.done; p = c.next())
                s(p.value);
        }
        catch (t) {
            a = {
                error: t
            };
        }
        finally {
            try {
                p && !p.done && (o = c.return) && o.call(c);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        return i;
    };
    TaskModel.prototype.saveTaskInfos = function (t) {
        var e = Array.from(t.keys());
        this.setTaskTypeList(e);
        var a = {};
        t.forEach(function (t, e) {
            a[e] = t;
        });
        this.localData.dictTaskProgress = a;
        this.localData.dictTaskProgress = this.localData.dictTaskProgress;
    };
    TaskModel.prototype.initTasksFirstOpen = function () {
        var t = this.validateFirstTaskCondition();
        if (!t)
            return false;
        var e = this.selectTaskTypes(t);
        if (e.length < 3)
            return false;
        var a = this.buildTaskInfosForTypes(e, t);
        if (a.size < 3)
            return false;
        this.saveTaskInfos(a);
        this.localData.isFirstTaskIntervention = true;
        return true;
    };
    TaskModel.prototype.buildRandomTaskInfos = function (t) {
        var e, a, o = new Map();
        try {
            for (var i = __values(t), r = i.next(); !r.done; r = i.next()) {
                var s = r.value, l = this._dictGroupTask.get(s);
                if (l && 0 !== l.length) {
                    TaskUtils_1.TaskUtils.shuffleArray(l);
                    var c = this.getTaskConfig(l[0]);
                    if (c) {
                        var p = this.buildTaskInfo(s, c);
                        o.set(s, p);
                    }
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                r && !r.done && (a = i.return) && a.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o;
    };
    TaskModel.prototype.initTasksNormal = function () {
        var t = Array.from(this._dictGroupTask.keys());
        TaskUtils_1.TaskUtils.shuffleArray(t);
        var e = [t[0], t[1], t[2]], a = this.buildRandomTaskInfos(e);
        if (a.size < 3)
            return false;
        this.saveTaskInfos(a);
        return true;
    };
    TaskModel.prototype.refreshTaskState = function () {
        var t = false, e = this.localData.taskStage, a = this.localData.dictStageState[e], o = false;
        for (var i in this.localData.dictTaskProgress) {
            var r = parseInt(i), n = this.localData.dictTaskProgress[r];
            if (!a.taskCompleteList.includes(r)) {
                var s = false;
                if (r === TaskData_1.ETaskType.FinishXLevel) {
                    var l = UserModel_1.default.getInstance().getMainGameData().getLevelId();
                    n.taskProgress = l - 1;
                    s = true;
                }
                if (n.taskProgress >= n.taskMax[e - 1]) {
                    t = true;
                    if (!a.taskCompleteList.includes(r)) {
                        a.taskCompleteList.push(r);
                        o = true;
                    }
                    n.taskProgress = n.taskMax[e - 1];
                    s = true;
                    this.cacheBannerInfo = {
                        taskType: r,
                        taskId: n.taskId[e - 1],
                        minValue: n.taskMin[e - 1],
                        maxValue: n.taskMax[e - 1]
                    };
                }
                s && this.setTaskProgressData(r, n);
            }
        }
        o && this.setStageStateData(e, a);
        t && this.checkStageComplete();
    };
    TaskModel.prototype.isTaskRangeMatch = function (t) {
        var e = this.localData.dictTaskProgress[t];
        if (!e)
            return false;
        var a = this.localData.taskStage, o = e.taskId[a - 1], i = this.getTaskConfig(o);
        if (!i || !i.TaskRange)
            return true;
        var r = UserModel_1.default.getInstance().getCurrentGameType(), n = i.TaskRange;
        if (!Array.isArray(n) || 0 === n.length)
            return false;
        var s = TaskUtils_1.TaskUtils.gameTypeToNumber(r);
        return n.includes(s);
    };
    TaskModel.prototype.updateTaskProgress = function (t, e) {
        var a = this.localData.dictTaskProgress[t];
        if (!a)
            return false;
        if (!this.isTaskRangeMatch(t))
            return false;
        var o = this.localData.taskStage, i = this.localData.dictStageState[o];
        if (o >= 3 && (null == i ? void 0 : i.stageState) === TaskData_1.ETaskStageState.Finish)
            return false;
        if (i.taskCompleteList.includes(t))
            return false;
        var r = a.taskProgress;
        this.taskProgressChangesInGame.has(t) || this.taskProgressChangesInGame.set(t, r);
        if (t === TaskData_1.ETaskType.FinishXLevel) {
            a.taskProgress = e;
        }
        else {
            a.taskProgress += e;
        }
        var n = false, s = false, l = a.taskMax[o - 1];
        if (a.taskProgress >= l) {
            n = true;
            if (!i.taskCompleteList.includes(t)) {
                i.taskCompleteList.push(t);
                s = true;
            }
            a.taskProgress = l;
            this.cacheBannerInfo = {
                taskType: t,
                taskId: a.taskId[o - 1],
                minValue: a.taskMin[o - 1],
                maxValue: l
            };
        }
        var p = a.taskProgress !== r;
        this.setTaskProgressData(t, a);
        s && this.setStageStateData(o, i);
        n && this.checkStageComplete();
        return p;
    };
    TaskModel.prototype.addPendingClearCount = function (t, e) {
        this.localData.pendingClearCount || this.clearPendingClearCount();
        var a = TaskUtils_1.TaskUtils.gameTypeToNumber(e);
        if (0 !== a) {
            this.localData.pendingClearCount[a] = (this.localData.pendingClearCount[a] || 0) + t;
            this.localData.pendingClearCount = this.localData.pendingClearCount;
        }
    };
    TaskModel.prototype.commitPendingClearCount = function (t) {
        this.localData.pendingClearCount || this.clearPendingClearCount();
        var e = TaskUtils_1.TaskUtils.gameTypeToNumber(t);
        if (0 !== e) {
            var a = this.localData.pendingClearCount[e] || 0;
            a > 0 && this.updateTaskProgress(TaskData_1.ETaskType.ClearMahjong, a);
            this.clearPendingClearCount();
        }
    };
    TaskModel.prototype.clearPendingClearCount = function () {
        this.localData.pendingClearCount = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        };
        this.localData.pendingClearCount = this.localData.pendingClearCount;
    };
    TaskModel.prototype.clearTaskProgressChanges = function () {
        this.taskProgressChangesInGame.clear();
    };
    TaskModel.prototype.updateTaskProgressBaseline = function () {
        for (var t in this.localData.dictTaskProgress) {
            var e = parseInt(t), a = this.getTaskInfo(e);
            a && a.taskProgress > 0 && this.taskProgressChangesInGame.set(e, a.taskProgress);
        }
    };
    TaskModel.prototype.getPendingClearCount = function (t) {
        if (!this.localData.pendingClearCount)
            return 0;
        var e = TaskUtils_1.TaskUtils.gameTypeToNumber(t);
        return 0 === e ? 0 : this.localData.pendingClearCount[e] || 0;
    };
    TaskModel.prototype.checkStageComplete = function () {
        var t = this.localData.taskStage, e = this.localData.dictStageState[t];
        if (e.stageState === TaskData_1.ETaskStageState.Doing && 3 === e.taskCompleteList.length) {
            e.stageState = TaskData_1.ETaskStageState.Wait;
            this.hasFinishStage = true;
            this.setStageStateData(t, e);
        }
    };
    TaskModel.prototype.autoReceiveReward = function (t) {
        if (t === void 0) { t = true; }
        for (var e = false, a = 1; a <= 3; a++) {
            var o = this.localData.dictStageState[a];
            if (o && o.stageState === TaskData_1.ETaskStageState.Wait) {
                e = true;
                this.triggerStageReward(a);
                o.stageState = TaskData_1.ETaskStageState.Finish;
                this.setStageStateData(a, o);
                this.localData.taskStage++;
                this.localData.taskStage > 3 && (this.localData.taskStage = 3);
                this.hasFinishStage = false;
            }
        }
        if (e) {
            this.clearCache();
            this.updateTaskProgressBaseline();
        }
    };
    TaskModel.prototype.triggerStageReward = function (t, e) {
        if (e === void 0) { e = 1; }
        var a = UserModel_1.default.getInstance().isInGameView(), o = this.getStageBoxData(t);
        if (o && o.Counts)
            for (var i = o.Items || [], r = o.Counts || [], n = e > 1 ? GameTypeEnums_1.EGetItemReasonId.DailyTaskAd : GameTypeEnums_1.EGetItemReasonId.DailyTask, s = e > 1 ? "每日任务奖励_看广告翻倍_完成阶段" + t : "每日任务奖励_完成阶段" + t, l = 0; l < i.length; l++) {
                var c = i[l], d = r[l];
                if (!(d <= 0)) {
                    e > 1 && (d *= e - 1);
                    if (a) {
                        var f = UserModel_1.default.getInstance().getCurrentGameType(), h = {
                            inputType: GameUtils_1.default.getInputAddPropType(f),
                            propType: IUserData_1.ItemTypeKey[c],
                            num: d,
                            reasonId: n,
                            reasonInfo: s
                        };
                        GameInteraction_1.GameInteraction.input(h);
                    }
                    else
                        this.addItem(c, d, n, s);
                }
            }
    };
    TaskModel.prototype.addItem = function (t, e, a, o) {
        var i, r, n = UserModel_1.default.getInstance().getCurrentGameData();
        if (t === IUserData_1.EItemType.Shuffle) {
            n.changeShuffleNums(e);
            r = n.getShuffleNums();
            i = GameTypeEnums_1.EItemId.Shuffle;
        }
        else if (t === IUserData_1.EItemType.Hint) {
            n.changeHitTipsNums(e);
            r = n.getHitTipsNums();
            i = GameTypeEnums_1.EItemId.Hint;
        }
        else {
            if (t !== IUserData_1.EItemType.Undo)
                return;
            n.changeRevertNums(e);
            r = n.getRevertNums();
            i = GameTypeEnums_1.EItemId.Revert;
        }
        DGameGetItem_1.DotGameGetItem.dotGetItem(n, {
            itemId: i,
            number: e,
            afterNum: r,
            reasonId: a,
            reasonInfo: o
        });
    };
    TaskModel.prototype.nextStage = function (t) {
        var e = this.localData.dictStageState[t];
        if (e && e.stageState === TaskData_1.ETaskStageState.Wait) {
            e.stageState = TaskData_1.ETaskStageState.Finish;
            this.setStageStateData(t, e);
            this.localData.taskStage++;
            this.localData.taskStage > 3 && (this.localData.taskStage = 3);
            this.clearCache();
            this.refreshTaskState();
            this.updateTaskProgressBaseline();
            this.dispatchEvent("updateTaskRedDot");
        }
    };
    TaskModel.prototype.getTaskConfig = function (t) {
        return DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.task, t) || null;
    };
    TaskModel.prototype.getNextTask = function (t) {
        return -1 === t.TaskQuest ? null : this.getTaskConfig(t.TaskQuest);
    };
    TaskModel.prototype.getStageBoxId = function (t) {
        return this._stageBoxIds[t - 1] || null;
    };
    TaskModel.prototype.getStageBoxData = function (t) {
        var e = this.getStageBoxId(t);
        if (!e)
            return null;
        try {
            return DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.reward_config, e) || null;
        }
        catch (t) {
            return null;
        }
    };
    TaskModel.prototype.getCurrentStage = function () {
        return this.localData.taskStage;
    };
    TaskModel.prototype.getStageData = function (t) {
        return this.localData.dictStageState[t] || null;
    };
    TaskModel.prototype.getTaskInfo = function (t) {
        return this.localData.dictTaskProgress[t] || null;
    };
    TaskModel.prototype.getTaskSort = function (t) {
        var e = this, a = __spreadArrays(this.localData.listTaskType), o = t || this.getCurrentStage(), i = this.getStageData(o);
        if (!i)
            return a;
        a.sort(function (t, a) {
            var r = i.taskCompleteList.includes(t) ? 1 : 0, n = i.taskCompleteList.includes(a) ? 1 : 0;
            if (r !== n)
                return r - n;
            var s = e.localData.dictTaskProgress[t], l = e.localData.dictTaskProgress[a];
            if (!s || !l)
                return e.localData.listTaskType.indexOf(t) - e.localData.listTaskType.indexOf(a);
            var c = o - 1;
            return (s.taskId[c] || s.taskId[0] || 0) - (l.taskId[c] || l.taskId[0] || 0);
        });
        return a;
    };
    TaskModel.prototype.hasRedPoint = function () {
        return this.hasWaitingReward();
    };
    TaskModel.prototype.hasWaitingReward = function () {
        var t = this.getCurrentStage(), e = this.getStageData(t);
        return (null == e ? void 0 : e.stageState) === TaskData_1.ETaskStageState.Wait;
    };
    TaskModel.prototype.getCardResNameByCardId = function (t) {
        var e, a = CardUtil_1.default.getConfigName();
        return null === (e = DataReader_1.DataReader.getTypeList(a, "cardId", t)[0]) || void 0 === e ? void 0 : e.resName;
    };
    TaskModel.prototype.updateFirstHomeShow = function () {
        this.localData.isFirstHomeShow = true;
    };
    TaskModel.prototype.isFirstHomeShow = function () {
        return this.localData.isFirstHomeShow;
    };
    TaskModel.prototype.clearCache = function () {
        this.hasFinishStage = false;
        this.cacheBannerInfo = null;
        this.clearTaskProgressChanges();
    };
    TaskModel.prototype.isItemInTaskValue1 = function (t, e) {
        var a = this.getTaskInfo(t);
        if (!a || !a.taskId || 0 === a.taskId.length)
            return false;
        var o = this.getCurrentStage() - 1, i = a.taskId[o] || a.taskId[0], r = this.getTaskConfig(i);
        return !(!r || !r.TaskValue1) && r.TaskValue1.includes(e);
    };
    TaskModel.prototype.setOpenFrom = function (t) {
        this._openFrom = t;
    };
    TaskModel.prototype.getOpenFrom = function () {
        return this._openFrom;
    };
    TaskModel.prototype.isAllTasksCompleted = function () {
        var t = this.getCurrentStage(), e = this.getStageData(t);
        return t >= 3 && (null == e ? void 0 : e.stageState) === TaskData_1.ETaskStageState.Finish;
    };
    TaskModel.prototype.getTaskTargetCardId = function (t) {
        var e = this.getTaskInfo(t);
        return e && e.targetValue ? e.targetValue : 1;
    };
    TaskModel.prototype.getTaskCardResName = function () {
        var t, e = mj.getClassByName("TaskTrait");
        if (!(null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.eventEnabled))
            return "";
        var a = this.getTaskTargetCardId(TaskData_1.ETaskType.ClearMahjong);
        return this.getCardResNameByCardId(a);
    };
    __decorate([
        mj.traitEvent("TaskModel_resetTask")
    ], TaskModel.prototype, "resetTaskData", null);
    __decorate([
        mj.traitEvent("TaskModel_randomTask")
    ], TaskModel.prototype, "buildRandomTaskInfos", null);
    __decorate([
        mj.traitEvent("TaskModel_updateProg")
    ], TaskModel.prototype, "updateTaskProgress", null);
    __decorate([
        mj.traitEvent("TaskModel_sort")
    ], TaskModel.prototype, "getTaskSort", null);
    __decorate([
        mj.traitEvent("TaskModel_hasRedPoint")
    ], TaskModel.prototype, "hasRedPoint", null);
    TaskModel = __decorate([
        mj.class("TaskModel")
    ], TaskModel);
    return TaskModel;
}(Model_1.default));
exports.TaskModel = TaskModel;

cc._RF.pop();
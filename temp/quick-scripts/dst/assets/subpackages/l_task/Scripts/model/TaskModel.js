
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/model/TaskModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9tb2RlbC9UYXNrTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBOEY7QUFDOUYsMkZBQXNHO0FBQ3RHLHlFQUFvRTtBQUNwRSw0RUFBMkU7QUFDM0UsZ0ZBQStFO0FBQy9FLGtFQUE2RDtBQUM3RCw0RUFBOEY7QUFDOUYsOEVBQStFO0FBQy9FLDBDQUF5QztBQUN6Qyx1RUFBa0U7QUFDbEUsdUZBQXNGO0FBQ3RGLGdFQUE0RTtBQUM1RSwrRUFBMEU7QUFFMUU7SUFBK0IsNkJBQUs7SUFXbEM7UUFBQSxZQUNFLGlCQUFPLFNBU1I7UUFwQkQsbUJBQWEsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0Isc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMzQixvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QiwrQkFBeUIsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLDRCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5QixlQUFTLEdBQUcsc0JBQVcsQ0FBQyxJQUFJLENBQUM7UUFHM0IscUJBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ25HLHFCQUFTLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkgscUJBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLHFCQUFTLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRixxQkFBUyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDMUYscUJBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzFGLHFCQUFTLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM5RixxQkFBUyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDOztJQUNwRyxDQUFDO0lBQ0QscUNBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztJQUNoRSxDQUFDO0lBQ0QsdUNBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsbUNBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO0lBQzVELENBQUM7SUFDRCw4QkFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQUUsSUFBSTtnQkFDNUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUMzRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ2xCO3FCQUFNO29CQUNMLHFCQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDbEU7Z0JBQ0QsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQzVCO1lBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtJQUNoQixDQUFDO0lBQ0QsaUNBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsZ0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsdUJBQVUsQ0FBQyxXQUFXLENBQUMsdUJBQVUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO1lBQUUsSUFBSTtnQkFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQy9FLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNyRDtpQkFDRjthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxHQUFHO29CQUNGLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUM7YUFDSDtvQkFBUztnQkFDUixJQUFJO29CQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdDO3dCQUFTO29CQUNSLElBQUksQ0FBQzt3QkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCO2FBQ0Y7SUFDSCxDQUFDO0lBQ0QsK0JBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsNkJBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksa0JBQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNELGlDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsSUFBSTtZQUNoQyxLQUFLLEVBQUUsQ0FBQztZQUNSLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztJQUNKLENBQUM7SUFDRCw4QkFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0I7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUM1RCxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsRUFDcEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFDM0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNoQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQzdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxJQUFJLDJCQUFhLENBQUMsU0FBUyxDQUFDLDZCQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsb0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3pFO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUNoQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDOUIsT0FBTyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsNkJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsaUNBQXNCLEVBQUUsQ0FBQztZQUNyRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7WUFDOUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2xDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7SUFDRCw4Q0FBMEIsR0FBMUI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDeEQsSUFBSSxDQUFDLEdBQUcsdUJBQVUsQ0FBQyxXQUFXLENBQUMsdUJBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDckcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCwwQ0FBc0IsR0FBdEIsVUFBdUIsQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQU8sQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsb0JBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEM7YUFBTTtZQUNMLENBQUMsQ0FBQyxRQUFRLENBQUMsb0JBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckU7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxtQ0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDaEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUMxQyxDQUFDLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUNsQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDdEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLEVBQ0YsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMscUJBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ25CLENBQUMsa0JBQU8sQ0FBQyxFQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2hGLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxpQ0FBYSxHQUFiLFVBQWMsQ0FBQyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUNSLENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLEVBQUUsRUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JCLFNBQVM7WUFDUCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxDQUFDO2dCQUFFLE1BQU07WUFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNQO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxLQUFLLG9CQUFTLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLEtBQUssb0JBQVMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLE9BQU87WUFDTCxNQUFNLEVBQUUsQ0FBQztZQUNULFlBQVksRUFBRSxDQUFDO1lBQ2YsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsQ0FBQztZQUNWLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztJQUNKLENBQUM7SUFDRCwwQ0FBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUNiLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ0osQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDYixJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO29CQUMxQixPQUFPLENBQUMsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3JCLHFCQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0I7YUFDRjtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUFFLE9BQU8sVUFBVSxDQUFDO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUM7UUFDWCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRTtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELGlDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7SUFDcEUsQ0FBQztJQUNELHNDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHdDQUFvQixHQUFwQixVQUFxQixDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUN2QixxQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLEVBQUU7d0JBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNiO2lCQUNGO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELG1DQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvQyxxQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELG9DQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxHQUFHLEtBQUssRUFDWCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQzVCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFDcEMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNaLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM3QyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQ2pCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssb0JBQVMsQ0FBQyxZQUFZLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQy9ELENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDVjtnQkFDRCxJQUFJLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ3RDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ25DLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLENBQUMsR0FBRyxJQUFJLENBQUM7cUJBQ1Y7b0JBQ0QsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDVCxJQUFJLENBQUMsZUFBZSxHQUFHO3dCQUNyQixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QixRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMxQixRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUMzQixDQUFDO2lCQUNIO2dCQUNELENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0Y7UUFDRCxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNELG9DQUFnQixHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDOUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNuQixDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEVBQ2xELENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQ0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQzlCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLDBCQUFlLENBQUMsTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzNGLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLEtBQUssb0JBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNMLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUNYLENBQUMsR0FBRyxLQUFLLEVBQ1QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLEVBQUU7WUFDdkIsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNULElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ1Y7WUFDRCxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHO2dCQUNyQixRQUFRLEVBQUUsQ0FBQztnQkFDWCxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixRQUFRLEVBQUUsQ0FBQzthQUNaLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELHdDQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxHQUFHLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFDRCwyQ0FBdUIsR0FBdkIsVUFBd0IsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxHQUFHLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBQ0QsMENBQXNCLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRztZQUNqQyxDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztJQUN0RSxDQUFDO0lBQ0QsNENBQXdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFDRCw4Q0FBMEIsR0FBMUI7UUFDRSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0MsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUNqQixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xGO0lBQ0gsQ0FBQztJQUNELHdDQUFvQixHQUFwQixVQUFxQixDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQjtZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDRCxzQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDOUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxDQUFDLFVBQVUsS0FBSywwQkFBZSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUM3RSxDQUFDLENBQUMsVUFBVSxHQUFHLDBCQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBQ0QscUNBQWlCLEdBQWpCLFVBQWtCLENBQVE7UUFBUixrQkFBQSxFQUFBLFFBQVE7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEtBQUssMEJBQWUsQ0FBQyxJQUFJLEVBQUU7Z0JBQzlDLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQUMsVUFBVSxHQUFHLDBCQUFlLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7YUFDN0I7U0FDRjtRQUNELElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUNELHNDQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBSztRQUFMLGtCQUFBLEVBQUEsS0FBSztRQUN6QixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUM1QyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTtZQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGdDQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNOLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtvQkFDYixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLEVBQUU7d0JBQ0wsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxFQUNsRCxDQUFDLEdBQUc7NEJBQ0YsU0FBUyxFQUFFLG1CQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDOzRCQUMzQyxRQUFRLEVBQUUsdUJBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLEdBQUcsRUFBRSxDQUFDOzRCQUNOLFFBQVEsRUFBRSxDQUFDOzRCQUNYLFVBQVUsRUFBRSxDQUFDO3lCQUNkLENBQUM7d0JBQ0osaUNBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzFCOzt3QkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNqQzthQUNGO0lBQ0gsQ0FBQztJQUNELDJCQUFPLEdBQVAsVUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLHFCQUFTLENBQUMsT0FBTyxFQUFFO1lBQzNCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsR0FBRyx1QkFBTyxDQUFDLE9BQU8sQ0FBQztTQUNyQjthQUFNLElBQUksQ0FBQyxLQUFLLHFCQUFTLENBQUMsSUFBSSxFQUFFO1lBQy9CLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsR0FBRyx1QkFBTyxDQUFDLElBQUksQ0FBQztTQUNsQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUsscUJBQVMsQ0FBQyxJQUFJO2dCQUFFLE9BQU87WUFDakMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxHQUFHLHVCQUFPLENBQUMsTUFBTSxDQUFDO1NBQ3BCO1FBQ0QsNkJBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQzNCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxRQUFRLEVBQUUsQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsNkJBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxLQUFLLDBCQUFlLENBQUMsSUFBSSxFQUFFO1lBQzlDLENBQUMsQ0FBQyxVQUFVLEdBQUcsMEJBQWUsQ0FBQyxNQUFNLENBQUM7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBQ0QsaUNBQWEsR0FBYixVQUFjLENBQUM7UUFDYixPQUFPLHVCQUFVLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUN6RCxDQUFDO0lBQ0QsK0JBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELGlDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQUNELG1DQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNwQixJQUFJO1lBQ0YsT0FBTyx1QkFBVSxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7U0FDakU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBQ0QsbUNBQWUsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUNELGdDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUNELCtCQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNwRCxDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQ1YsQ0FBQyxrQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUNwQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFDL0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzVDLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUNyQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0UsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwrQkFBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUM1QixDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSywwQkFBZSxDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDO0lBQ0QsMENBQXNCLEdBQXRCLFVBQXVCLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLGtCQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0IsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsdUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDdkcsQ0FBQztJQUNELHVDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBQ0QsbUNBQWUsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUM7SUFDeEMsQ0FBQztJQUNELDhCQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsc0NBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLEVBQ2hDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQzlCLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCwrQkFBVyxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCwrQkFBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCx1Q0FBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQzVCLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssMEJBQWUsQ0FBQyxNQUFNLENBQUM7SUFDbEYsQ0FBQztJQUNELHVDQUFtQixHQUFuQixVQUFvQixDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxzQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNoSCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6RCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBeGZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztrREFLcEM7SUErSUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO3lEQThCckM7SUE0REQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO3VEQXNDckM7SUErSkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO2dEQWtCL0I7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7Z0RBR3RDO0lBbGpCVSxTQUFTO1FBRHJCLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO09BQ1QsU0FBUyxDQXNtQnJCO0lBQUQsZ0JBQUM7Q0F0bUJELEFBc21CQyxDQXRtQjhCLGVBQUssR0FzbUJuQztBQXRtQlksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVGFza1VJVHlwZSwgY3JlYXRlRGVmYXVsdFRhc2tTdGFnZSwgRVRhc2tUeXBlLCBFVGFza1N0YWdlU3RhdGUgfSBmcm9tICcuLi9UYXNrRGF0YSc7XG5pbXBvcnQgeyBFR2V0SXRlbVJlYXNvbklkLCBFSXRlbUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9EYXRhUmVhZGVyJztcbmltcG9ydCB7IENvbmZpZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbmltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL01vZGVsJztcbmltcG9ydCB7IERvdEdhbWVVbmxvY2ssIEVGdW5jVW5sb2NrVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lVW5sb2NrJztcbmltcG9ydCB7IERvdEdhbWVHZXRJdGVtIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVHZXRJdGVtJztcbmltcG9ydCB7IFRhc2tVdGlscyB9IGZyb20gJy4uL1Rhc2tVdGlscyc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBJdGVtVHlwZUtleSwgRUl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy91c2VyL0lVc2VyRGF0YSc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuQG1qLmNsYXNzKFwiVGFza01vZGVsXCIpXG5leHBvcnQgY2xhc3MgVGFza01vZGVsIGV4dGVuZHMgTW9kZWwge1xuICBTVEFHRV9XRUlHSFRTID0gWzAuMTgsIDAuNiwgMV07XG4gIF9maXJzdFJhbmRvbUZsYWcgPSAwO1xuICBfc3RhZ2VCb3hJZHMgPSBbXTtcbiAgX2RpY3RHcm91cFRhc2sgPSBuZXcgTWFwKCk7XG4gIF9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gIGhhc0ZpbmlzaFN0YWdlID0gZmFsc2U7XG4gIGNhY2hlQmFubmVySW5mbyA9IG51bGw7XG4gIHRhc2tQcm9ncmVzc0NoYW5nZXNJbkdhbWUgPSBuZXcgTWFwKCk7XG4gIGJhbm5lckRhdGFGb3JBbmltYXRpb24gPSBudWxsO1xuICBfb3BlbkZyb20gPSBFVGFza1VJVHlwZS5Ib21lO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIFRhc2tVdGlscy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuaXNGaXJzdEhvbWVTaG93KSAmJiAodGhpcy5sb2NhbERhdGEuaXNGaXJzdEhvbWVTaG93ID0gZmFsc2UpO1xuICAgIFRhc2tVdGlscy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuaXNGaXJzdFRhc2tJbnRlcnZlbnRpb24pICYmICh0aGlzLmxvY2FsRGF0YS5pc0ZpcnN0VGFza0ludGVydmVudGlvbiA9IGZhbHNlKTtcbiAgICBUYXNrVXRpbHMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RUaW1lKSAmJiAodGhpcy5sb2NhbERhdGEubGFzdFRpbWUgPSAwKTtcbiAgICBUYXNrVXRpbHMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnRhc2tTdGFnZSkgJiYgKHRoaXMubG9jYWxEYXRhLnRhc2tTdGFnZSA9IDEpO1xuICAgIFRhc2tVdGlscy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucGVuZGluZ0NsZWFyQ291bnQpICYmIHRoaXMuY2xlYXJQZW5kaW5nQ2xlYXJDb3VudCgpO1xuICAgIFRhc2tVdGlscy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGlzdFRhc2tUeXBlKSAmJiAodGhpcy5sb2NhbERhdGEubGlzdFRhc2tUeXBlID0gW10pO1xuICAgIFRhc2tVdGlscy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuZGljdFN0YWdlU3RhdGUpICYmICh0aGlzLmxvY2FsRGF0YS5kaWN0U3RhZ2VTdGF0ZSA9IHt9KTtcbiAgICBUYXNrVXRpbHMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmRpY3RUYXNrUHJvZ3Jlc3MpICYmICh0aGlzLmxvY2FsRGF0YS5kaWN0VGFza1Byb2dyZXNzID0ge30pO1xuICB9XG4gIHNldFN0YWdlU3RhdGVEYXRhKHQsIGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5kaWN0U3RhZ2VTdGF0ZVt0XSA9IGU7XG4gICAgdGhpcy5sb2NhbERhdGEuZGljdFN0YWdlU3RhdGUgPSB0aGlzLmxvY2FsRGF0YS5kaWN0U3RhZ2VTdGF0ZTtcbiAgfVxuICBzZXRUYXNrUHJvZ3Jlc3NEYXRhKHQsIGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5kaWN0VGFza1Byb2dyZXNzW3RdID0gZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5kaWN0VGFza1Byb2dyZXNzID0gdGhpcy5sb2NhbERhdGEuZGljdFRhc2tQcm9ncmVzcztcbiAgfVxuICBzZXRUYXNrVHlwZUxpc3QodCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmxpc3RUYXNrVHlwZSA9IHQ7XG4gICAgdGhpcy5sb2NhbERhdGEubGlzdFRhc2tUeXBlID0gdGhpcy5sb2NhbERhdGEubGlzdFRhc2tUeXBlO1xuICB9XG4gIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0luaXRpYWxpemVkKSB0cnkge1xuICAgICAgdGhpcy5wcmVJbml0VGFza3MoKTtcbiAgICAgIGlmICgwID09PSBPYmplY3Qua2V5cyh0aGlzLmxvY2FsRGF0YS5kaWN0U3RhZ2VTdGF0ZSkubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaW5pdFRhc2tzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBUYXNrVXRpbHMuY2hlY2tEYXRhSW50ZWdyaXR5KHRoaXMubG9jYWxEYXRhKSAmJiB0aGlzLmluaXRUYXNrcygpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVUYXNrUHJvZ3Jlc3NCYXNlbGluZSgpO1xuICAgICAgdGhpcy5faXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfSBjYXRjaCAodCkge31cbiAgfVxuICBpc0luaXRpYWxpemVkKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0luaXRpYWxpemVkO1xuICB9XG4gIHByZUluaXRUYXNrcygpIHtcbiAgICB2YXIgdCwgZTtcbiAgICB0aGlzLl9kaWN0R3JvdXBUYXNrLmNsZWFyKCk7XG4gICAgdmFyIGEgPSBEYXRhUmVhZGVyLmdldFR5cGVMaXN0KENvbmZpZ1R5cGUudGFzaywgXCJUYXNrUGhhc2VcIiwgMSk7XG4gICAgaWYgKDAgIT09IGEubGVuZ3RoKSB0cnkge1xuICAgICAgZm9yICh2YXIgbyA9IF9fdmFsdWVzKGEpLCBpID0gby5uZXh0KCk7ICFpLmRvbmU7IGkgPSBvLm5leHQoKSkge1xuICAgICAgICB2YXIgciA9IGkudmFsdWU7XG4gICAgICAgIGlmICgxID09PSByLlJhbmRvbUZsYWcpIHtcbiAgICAgICAgICB0aGlzLl9kaWN0R3JvdXBUYXNrLmhhcyhyLlRhc2tUeXBlKSB8fCB0aGlzLl9kaWN0R3JvdXBUYXNrLnNldChyLlRhc2tUeXBlLCBbXSk7XG4gICAgICAgICAgdGhpcy5fZGljdEdyb3VwVGFzay5nZXQoci5UYXNrVHlwZSkucHVzaChyLlRhc2tLZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGkgJiYgIWkuZG9uZSAmJiAoZSA9IG8ucmV0dXJuKSAmJiBlLmNhbGwobyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0VGFza0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhO1xuICB9XG4gIGNvbmZpZ3VyZSh0KSB7XG4gICAgdm9pZCAwICE9PSB0Lm9wZW5Db25kaXRpb24gJiYgKHRoaXMuX3Rhc2tPcGVuQ29uZGl0aW9uID0gdC5vcGVuQ29uZGl0aW9uKTtcbiAgICB2b2lkIDAgIT09IHQuZmlyc3RSYW5kb21GbGFnICYmICh0aGlzLl9maXJzdFJhbmRvbUZsYWcgPSB0LmZpcnN0UmFuZG9tRmxhZyk7XG4gICAgdm9pZCAwICE9PSB0LnN0YWdlQm94SWRzICYmICh0aGlzLl9zdGFnZUJveElkcyA9IFsuLi50LnN0YWdlQm94SWRzXSk7XG4gIH1cbiAgb3BlbkNvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza09wZW5Db25kaXRpb24gfHwge1xuICAgICAgbGV2ZWw6IDAsXG4gICAgICBkYXk6IDBcbiAgICB9O1xuICB9XG4gIGlzVGFza09wZW4oKSB7XG4gICAgaWYgKCF0aGlzLl90YXNrT3BlbkNvbmRpdGlvbikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpLFxuICAgICAgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVBY3RpdmVEYXlzKCkgfHwgMSxcbiAgICAgIGEgPSB0aGlzLl90YXNrT3BlbkNvbmRpdGlvbixcbiAgICAgIG8gPSAwID09PSBhLmxldmVsIHx8IHQgPiBhLmxldmVsLFxuICAgICAgaSA9IDAgPT09IGEuZGF5IHx8IGUgPj0gYS5kYXksXG4gICAgICByID0gbyAmJiBpO1xuICAgIHIgJiYgRG90R2FtZVVubG9jay5kb3RCeVR5cGUoRUZ1bmNVbmxvY2tUeXBlLlRhc2spO1xuICAgIHJldHVybiByO1xuICB9XG4gIGNoZWNrQW5kSW5pdFRhc2soKSB7XG4gICAgaWYgKHRoaXMucmVzZXRUYXNrRGF0YSgpKSB7XG4gICAgICB0aGlzLmF1dG9SZWNlaXZlUmV3YXJkKCk7XG4gICAgICB0aGlzLmluaXRUYXNrcygpO1xuICAgICAgdGhpcy5sb2NhbERhdGEuaXNGaXJzdFRhc2tJbnRlcnZlbnRpb24gfHwgKHRoaXMuY2FjaGVCYW5uZXJJbmZvID0gbnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmcmVzaFRhc2tTdGF0ZSgpO1xuICAgICAgdGhpcy51cGRhdGVUYXNrUHJvZ3Jlc3NCYXNlbGluZSgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tNb2RlbF9yZXNldFRhc2tcIilcbiAgcmVzZXRUYXNrRGF0YSgpIHtcbiAgICB2YXIgdCA9IERhdGUubm93KCksXG4gICAgICBlID0gdGhpcy5sb2NhbERhdGEubGFzdFRpbWU7XG4gICAgcmV0dXJuICFUYXNrVXRpbHMuaXNTYW1lRGF5KGUsIHQpO1xuICB9XG4gIGluaXRUYXNrcygpIHtcbiAgICBpZiAoISh0aGlzLl9kaWN0R3JvdXBUYXNrLnNpemUgPCAzKSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5sb2NhbERhdGEudGFza1N0YWdlID0gMTtcbiAgICAgIGZvciAodmFyIHQgPSB7fSwgZSA9IDE7IGUgPD0gMzsgZSsrKSB0W2VdID0gY3JlYXRlRGVmYXVsdFRhc2tTdGFnZSgpO1xuICAgICAgdGhpcy5sb2NhbERhdGEuZGljdFN0YWdlU3RhdGUgPSB0O1xuICAgICAgdGhpcy5sb2NhbERhdGEuZGljdFN0YWdlU3RhdGUgPSB0aGlzLmxvY2FsRGF0YS5kaWN0U3RhZ2VTdGF0ZTtcbiAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICAgICAgdmFyIGEgPSB0aGlzLmluaXRUYXNrc0ZpcnN0T3BlbigpO1xuICAgICAgYSB8fCAoYSA9IHRoaXMuaW5pdFRhc2tzTm9ybWFsKCkpO1xuICAgICAgaWYgKGEpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoVGFza1N0YXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlVGFza1Byb2dyZXNzQmFzZWxpbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFsaWRhdGVGaXJzdFRhc2tDb25kaXRpb24oKSB7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLmlzRmlyc3RUYXNrSW50ZXJ2ZW50aW9uKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdCA9IERhdGFSZWFkZXIuZ2V0VHlwZUxpc3QoQ29uZmlnVHlwZS50YXNrLCBcIlJhbmRvbUZsYWdcIiwgdGhpcy5fZmlyc3RSYW5kb21GbGFnKS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiAxID09PSB0LlRhc2tQaGFzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gMCA9PT0gdC5sZW5ndGggPyBudWxsIDogdDtcbiAgfVxuICBjYWxjdWxhdGVFeGNsdWRlZFR5cGVzKHQpIHtcbiAgICB2YXIgZSA9IFsuLi50XTtcbiAgICBpZiAodC5pbmNsdWRlcyhFVGFza1R5cGUuRmluaXNoTGV2ZWwpKSB7XG4gICAgICBlLnB1c2goRVRhc2tUeXBlLkZpbmlzaFhMZXZlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQuaW5jbHVkZXMoRVRhc2tUeXBlLkZpbmlzaFhMZXZlbCkgJiYgZS5wdXNoKEVUYXNrVHlwZS5GaW5pc2hMZXZlbCk7XG4gICAgfVxuICAgIHJldHVybiBlO1xuICB9XG4gIHNlbGVjdFRhc2tUeXBlcyh0KSB7XG4gICAgdmFyIGUgPSBBcnJheS5mcm9tKG5ldyBTZXQodC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQuVGFza1R5cGU7XG4gICAgICB9KSkpLnNsaWNlKDAsIDMpLFxuICAgICAgYSA9IEFycmF5LmZyb20odGhpcy5fZGljdEdyb3VwVGFzay5rZXlzKCkpLFxuICAgICAgbyA9IHRoaXMuY2FsY3VsYXRlRXhjbHVkZWRUeXBlcyhlKSxcbiAgICAgIGkgPSBhLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gIW8uaW5jbHVkZXModCk7XG4gICAgICB9KSxcbiAgICAgIHIgPSBNYXRoLm1heCgwLCAzIC0gZS5sZW5ndGgpO1xuICAgIFRhc2tVdGlscy5zaHVmZmxlQXJyYXkoaSk7XG4gICAgdmFyIG4gPSBpLnNsaWNlKDAsIHIpLFxuICAgICAgcyA9IFsuLi5lLCAuLi5uXTtcbiAgICBpZiAocy5sZW5ndGggPCAzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1Rhc2tNb2RlbF0g6aaW5qyh5Lu75Yqh57G75Z6L5LiN6LazM+S4qu+8muWbuuWumlwiICsgZS5sZW5ndGggKyBcIuS4qu+8jOmaj+aculwiICsgbi5sZW5ndGggKyBcIuS4qlwiKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgYnVpbGRUYXNrSW5mbyh0LCBlKSB7XG4gICAgdmFyIGEgPSBbXSxcbiAgICAgIG8gPSBbXSxcbiAgICAgIGkgPSBbXSxcbiAgICAgIHIgPSBlO1xuICAgIGEucHVzaChyLlRhc2tLZXkpO1xuICAgIG8ucHVzaCgwKTtcbiAgICBpLnB1c2goci5UYXNrVmFsdWUyKTtcbiAgICBmb3IgKDs7KSB7XG4gICAgICB2YXIgbiA9IHRoaXMuZ2V0TmV4dFRhc2socik7XG4gICAgICBpZiAoIW4pIGJyZWFrO1xuICAgICAgYS5wdXNoKG4uVGFza0tleSk7XG4gICAgICBvLnB1c2goaVtpLmxlbmd0aCAtIDFdKTtcbiAgICAgIGkucHVzaChuLlRhc2tWYWx1ZTIpO1xuICAgICAgciA9IG47XG4gICAgfVxuICAgIHZhciBzID0gMDtcbiAgICB0ID09PSBFVGFza1R5cGUuRmluaXNoWExldmVsICYmIChzID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpIC0gMSk7XG4gICAgdmFyIGwgPSAtMTtcbiAgICB0ID09PSBFVGFza1R5cGUuQ2xlYXJNYWhqb25nICYmIChsID0gVGFza1V0aWxzLnJhbmRvbVNlbGVjdFRhcmdldFZhbHVlKGUpKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGFza0lkOiBhLFxuICAgICAgdGFza1Byb2dyZXNzOiBzLFxuICAgICAgdGFza01pbjogbyxcbiAgICAgIHRhc2tNYXg6IGksXG4gICAgICB0YXJnZXRWYWx1ZTogbFxuICAgIH07XG4gIH1cbiAgYnVpbGRUYXNrSW5mb3NGb3JUeXBlcyh0LCBlKSB7XG4gICAgdmFyIGEsXG4gICAgICBvLFxuICAgICAgaSA9IG5ldyBNYXAoKSxcbiAgICAgIHIgPSBBcnJheS5mcm9tKG5ldyBTZXQoZS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQuVGFza1R5cGU7XG4gICAgICB9KSkpLFxuICAgICAgcyA9IGZ1bmN0aW9uIHModCkge1xuICAgICAgICB2YXIgYSA9IG51bGw7XG4gICAgICAgIGlmIChyLmluY2x1ZGVzKHQpKSB7XG4gICAgICAgICAgdmFyIG8gPSBlLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUuVGFza1R5cGUgPT09IHQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgby5sZW5ndGggPiAwICYmIChhID0gb1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG4gPSBsLl9kaWN0R3JvdXBUYXNrLmdldCh0KTtcbiAgICAgICAgICBpZiAobiAmJiBuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIFRhc2tVdGlscy5zaHVmZmxlQXJyYXkobik7XG4gICAgICAgICAgICBhID0gbC5nZXRUYXNrQ29uZmlnKG5bMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWEpIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgIHZhciBzID0gbC5idWlsZFRhc2tJbmZvKHQsIGEpO1xuICAgICAgICBpLnNldCh0LCBzKTtcbiAgICAgIH0sXG4gICAgICBsID0gdGhpcztcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKHQpLCBwID0gYy5uZXh0KCk7ICFwLmRvbmU7IHAgPSBjLm5leHQoKSkgcyhwLnZhbHVlKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBhID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcCAmJiAhcC5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaTtcbiAgfVxuICBzYXZlVGFza0luZm9zKHQpIHtcbiAgICB2YXIgZSA9IEFycmF5LmZyb20odC5rZXlzKCkpO1xuICAgIHRoaXMuc2V0VGFza1R5cGVMaXN0KGUpO1xuICAgIHZhciBhID0ge307XG4gICAgdC5mb3JFYWNoKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICBhW2VdID0gdDtcbiAgICB9KTtcbiAgICB0aGlzLmxvY2FsRGF0YS5kaWN0VGFza1Byb2dyZXNzID0gYTtcbiAgICB0aGlzLmxvY2FsRGF0YS5kaWN0VGFza1Byb2dyZXNzID0gdGhpcy5sb2NhbERhdGEuZGljdFRhc2tQcm9ncmVzcztcbiAgfVxuICBpbml0VGFza3NGaXJzdE9wZW4oKSB7XG4gICAgdmFyIHQgPSB0aGlzLnZhbGlkYXRlRmlyc3RUYXNrQ29uZGl0aW9uKCk7XG4gICAgaWYgKCF0KSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGUgPSB0aGlzLnNlbGVjdFRhc2tUeXBlcyh0KTtcbiAgICBpZiAoZS5sZW5ndGggPCAzKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGEgPSB0aGlzLmJ1aWxkVGFza0luZm9zRm9yVHlwZXMoZSwgdCk7XG4gICAgaWYgKGEuc2l6ZSA8IDMpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLnNhdmVUYXNrSW5mb3MoYSk7XG4gICAgdGhpcy5sb2NhbERhdGEuaXNGaXJzdFRhc2tJbnRlcnZlbnRpb24gPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGFza01vZGVsX3JhbmRvbVRhc2tcIilcbiAgYnVpbGRSYW5kb21UYXNrSW5mb3ModCkge1xuICAgIHZhciBlLFxuICAgICAgYSxcbiAgICAgIG8gPSBuZXcgTWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyh0KSwgciA9IGkubmV4dCgpOyAhci5kb25lOyByID0gaS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSByLnZhbHVlLFxuICAgICAgICAgIGwgPSB0aGlzLl9kaWN0R3JvdXBUYXNrLmdldChzKTtcbiAgICAgICAgaWYgKGwgJiYgMCAhPT0gbC5sZW5ndGgpIHtcbiAgICAgICAgICBUYXNrVXRpbHMuc2h1ZmZsZUFycmF5KGwpO1xuICAgICAgICAgIHZhciBjID0gdGhpcy5nZXRUYXNrQ29uZmlnKGxbMF0pO1xuICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHRoaXMuYnVpbGRUYXNrSW5mbyhzLCBjKTtcbiAgICAgICAgICAgIG8uc2V0KHMsIHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICByICYmICFyLmRvbmUgJiYgKGEgPSBpLnJldHVybikgJiYgYS5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvO1xuICB9XG4gIGluaXRUYXNrc05vcm1hbCgpIHtcbiAgICB2YXIgdCA9IEFycmF5LmZyb20odGhpcy5fZGljdEdyb3VwVGFzay5rZXlzKCkpO1xuICAgIFRhc2tVdGlscy5zaHVmZmxlQXJyYXkodCk7XG4gICAgdmFyIGUgPSBbdFswXSwgdFsxXSwgdFsyXV0sXG4gICAgICBhID0gdGhpcy5idWlsZFJhbmRvbVRhc2tJbmZvcyhlKTtcbiAgICBpZiAoYS5zaXplIDwgMykgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuc2F2ZVRhc2tJbmZvcyhhKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWZyZXNoVGFza1N0YXRlKCkge1xuICAgIHZhciB0ID0gZmFsc2UsXG4gICAgICBlID0gdGhpcy5sb2NhbERhdGEudGFza1N0YWdlLFxuICAgICAgYSA9IHRoaXMubG9jYWxEYXRhLmRpY3RTdGFnZVN0YXRlW2VdLFxuICAgICAgbyA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5sb2NhbERhdGEuZGljdFRhc2tQcm9ncmVzcykge1xuICAgICAgdmFyIHIgPSBwYXJzZUludChpKSxcbiAgICAgICAgbiA9IHRoaXMubG9jYWxEYXRhLmRpY3RUYXNrUHJvZ3Jlc3Nbcl07XG4gICAgICBpZiAoIWEudGFza0NvbXBsZXRlTGlzdC5pbmNsdWRlcyhyKSkge1xuICAgICAgICB2YXIgcyA9IGZhbHNlO1xuICAgICAgICBpZiAociA9PT0gRVRhc2tUeXBlLkZpbmlzaFhMZXZlbCkge1xuICAgICAgICAgIHZhciBsID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpO1xuICAgICAgICAgIG4udGFza1Byb2dyZXNzID0gbCAtIDE7XG4gICAgICAgICAgcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4udGFza1Byb2dyZXNzID49IG4udGFza01heFtlIC0gMV0pIHtcbiAgICAgICAgICB0ID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoIWEudGFza0NvbXBsZXRlTGlzdC5pbmNsdWRlcyhyKSkge1xuICAgICAgICAgICAgYS50YXNrQ29tcGxldGVMaXN0LnB1c2gocik7XG4gICAgICAgICAgICBvID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbi50YXNrUHJvZ3Jlc3MgPSBuLnRhc2tNYXhbZSAtIDFdO1xuICAgICAgICAgIHMgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2FjaGVCYW5uZXJJbmZvID0ge1xuICAgICAgICAgICAgdGFza1R5cGU6IHIsXG4gICAgICAgICAgICB0YXNrSWQ6IG4udGFza0lkW2UgLSAxXSxcbiAgICAgICAgICAgIG1pblZhbHVlOiBuLnRhc2tNaW5bZSAtIDFdLFxuICAgICAgICAgICAgbWF4VmFsdWU6IG4udGFza01heFtlIC0gMV1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHMgJiYgdGhpcy5zZXRUYXNrUHJvZ3Jlc3NEYXRhKHIsIG4pO1xuICAgICAgfVxuICAgIH1cbiAgICBvICYmIHRoaXMuc2V0U3RhZ2VTdGF0ZURhdGEoZSwgYSk7XG4gICAgdCAmJiB0aGlzLmNoZWNrU3RhZ2VDb21wbGV0ZSgpO1xuICB9XG4gIGlzVGFza1JhbmdlTWF0Y2godCkge1xuICAgIHZhciBlID0gdGhpcy5sb2NhbERhdGEuZGljdFRhc2tQcm9ncmVzc1t0XTtcbiAgICBpZiAoIWUpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgYSA9IHRoaXMubG9jYWxEYXRhLnRhc2tTdGFnZSxcbiAgICAgIG8gPSBlLnRhc2tJZFthIC0gMV0sXG4gICAgICBpID0gdGhpcy5nZXRUYXNrQ29uZmlnKG8pO1xuICAgIGlmICghaSB8fCAhaS5UYXNrUmFuZ2UpIHJldHVybiB0cnVlO1xuICAgIHZhciByID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICBuID0gaS5UYXNrUmFuZ2U7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG4pIHx8IDAgPT09IG4ubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHMgPSBUYXNrVXRpbHMuZ2FtZVR5cGVUb051bWJlcihyKTtcbiAgICByZXR1cm4gbi5pbmNsdWRlcyhzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tNb2RlbF91cGRhdGVQcm9nXCIpXG4gIHVwZGF0ZVRhc2tQcm9ncmVzcyh0LCBlKSB7XG4gICAgdmFyIGEgPSB0aGlzLmxvY2FsRGF0YS5kaWN0VGFza1Byb2dyZXNzW3RdO1xuICAgIGlmICghYSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghdGhpcy5pc1Rhc2tSYW5nZU1hdGNoKHQpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG8gPSB0aGlzLmxvY2FsRGF0YS50YXNrU3RhZ2UsXG4gICAgICBpID0gdGhpcy5sb2NhbERhdGEuZGljdFN0YWdlU3RhdGVbb107XG4gICAgaWYgKG8gPj0gMyAmJiAobnVsbCA9PSBpID8gdm9pZCAwIDogaS5zdGFnZVN0YXRlKSA9PT0gRVRhc2tTdGFnZVN0YXRlLkZpbmlzaCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChpLnRhc2tDb21wbGV0ZUxpc3QuaW5jbHVkZXModCkpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgciA9IGEudGFza1Byb2dyZXNzO1xuICAgIHRoaXMudGFza1Byb2dyZXNzQ2hhbmdlc0luR2FtZS5oYXModCkgfHwgdGhpcy50YXNrUHJvZ3Jlc3NDaGFuZ2VzSW5HYW1lLnNldCh0LCByKTtcbiAgICBpZiAodCA9PT0gRVRhc2tUeXBlLkZpbmlzaFhMZXZlbCkge1xuICAgICAgYS50YXNrUHJvZ3Jlc3MgPSBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhLnRhc2tQcm9ncmVzcyArPSBlO1xuICAgIH1cbiAgICB2YXIgbiA9IGZhbHNlLFxuICAgICAgcyA9IGZhbHNlLFxuICAgICAgbCA9IGEudGFza01heFtvIC0gMV07XG4gICAgaWYgKGEudGFza1Byb2dyZXNzID49IGwpIHtcbiAgICAgIG4gPSB0cnVlO1xuICAgICAgaWYgKCFpLnRhc2tDb21wbGV0ZUxpc3QuaW5jbHVkZXModCkpIHtcbiAgICAgICAgaS50YXNrQ29tcGxldGVMaXN0LnB1c2godCk7XG4gICAgICAgIHMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgYS50YXNrUHJvZ3Jlc3MgPSBsO1xuICAgICAgdGhpcy5jYWNoZUJhbm5lckluZm8gPSB7XG4gICAgICAgIHRhc2tUeXBlOiB0LFxuICAgICAgICB0YXNrSWQ6IGEudGFza0lkW28gLSAxXSxcbiAgICAgICAgbWluVmFsdWU6IGEudGFza01pbltvIC0gMV0sXG4gICAgICAgIG1heFZhbHVlOiBsXG4gICAgICB9O1xuICAgIH1cbiAgICB2YXIgcCA9IGEudGFza1Byb2dyZXNzICE9PSByO1xuICAgIHRoaXMuc2V0VGFza1Byb2dyZXNzRGF0YSh0LCBhKTtcbiAgICBzICYmIHRoaXMuc2V0U3RhZ2VTdGF0ZURhdGEobywgaSk7XG4gICAgbiAmJiB0aGlzLmNoZWNrU3RhZ2VDb21wbGV0ZSgpO1xuICAgIHJldHVybiBwO1xuICB9XG4gIGFkZFBlbmRpbmdDbGVhckNvdW50KHQsIGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5wZW5kaW5nQ2xlYXJDb3VudCB8fCB0aGlzLmNsZWFyUGVuZGluZ0NsZWFyQ291bnQoKTtcbiAgICB2YXIgYSA9IFRhc2tVdGlscy5nYW1lVHlwZVRvTnVtYmVyKGUpO1xuICAgIGlmICgwICE9PSBhKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5wZW5kaW5nQ2xlYXJDb3VudFthXSA9ICh0aGlzLmxvY2FsRGF0YS5wZW5kaW5nQ2xlYXJDb3VudFthXSB8fCAwKSArIHQ7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5wZW5kaW5nQ2xlYXJDb3VudCA9IHRoaXMubG9jYWxEYXRhLnBlbmRpbmdDbGVhckNvdW50O1xuICAgIH1cbiAgfVxuICBjb21taXRQZW5kaW5nQ2xlYXJDb3VudCh0KSB7XG4gICAgdGhpcy5sb2NhbERhdGEucGVuZGluZ0NsZWFyQ291bnQgfHwgdGhpcy5jbGVhclBlbmRpbmdDbGVhckNvdW50KCk7XG4gICAgdmFyIGUgPSBUYXNrVXRpbHMuZ2FtZVR5cGVUb051bWJlcih0KTtcbiAgICBpZiAoMCAhPT0gZSkge1xuICAgICAgdmFyIGEgPSB0aGlzLmxvY2FsRGF0YS5wZW5kaW5nQ2xlYXJDb3VudFtlXSB8fCAwO1xuICAgICAgYSA+IDAgJiYgdGhpcy51cGRhdGVUYXNrUHJvZ3Jlc3MoRVRhc2tUeXBlLkNsZWFyTWFoam9uZywgYSk7XG4gICAgICB0aGlzLmNsZWFyUGVuZGluZ0NsZWFyQ291bnQoKTtcbiAgICB9XG4gIH1cbiAgY2xlYXJQZW5kaW5nQ2xlYXJDb3VudCgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5wZW5kaW5nQ2xlYXJDb3VudCA9IHtcbiAgICAgIDE6IDAsXG4gICAgICAyOiAwLFxuICAgICAgMzogMCxcbiAgICAgIDQ6IDAsXG4gICAgICA1OiAwXG4gICAgfTtcbiAgICB0aGlzLmxvY2FsRGF0YS5wZW5kaW5nQ2xlYXJDb3VudCA9IHRoaXMubG9jYWxEYXRhLnBlbmRpbmdDbGVhckNvdW50O1xuICB9XG4gIGNsZWFyVGFza1Byb2dyZXNzQ2hhbmdlcygpIHtcbiAgICB0aGlzLnRhc2tQcm9ncmVzc0NoYW5nZXNJbkdhbWUuY2xlYXIoKTtcbiAgfVxuICB1cGRhdGVUYXNrUHJvZ3Jlc3NCYXNlbGluZSgpIHtcbiAgICBmb3IgKHZhciB0IGluIHRoaXMubG9jYWxEYXRhLmRpY3RUYXNrUHJvZ3Jlc3MpIHtcbiAgICAgIHZhciBlID0gcGFyc2VJbnQodCksXG4gICAgICAgIGEgPSB0aGlzLmdldFRhc2tJbmZvKGUpO1xuICAgICAgYSAmJiBhLnRhc2tQcm9ncmVzcyA+IDAgJiYgdGhpcy50YXNrUHJvZ3Jlc3NDaGFuZ2VzSW5HYW1lLnNldChlLCBhLnRhc2tQcm9ncmVzcyk7XG4gICAgfVxuICB9XG4gIGdldFBlbmRpbmdDbGVhckNvdW50KHQpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhLnBlbmRpbmdDbGVhckNvdW50KSByZXR1cm4gMDtcbiAgICB2YXIgZSA9IFRhc2tVdGlscy5nYW1lVHlwZVRvTnVtYmVyKHQpO1xuICAgIHJldHVybiAwID09PSBlID8gMCA6IHRoaXMubG9jYWxEYXRhLnBlbmRpbmdDbGVhckNvdW50W2VdIHx8IDA7XG4gIH1cbiAgY2hlY2tTdGFnZUNvbXBsZXRlKCkge1xuICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEudGFza1N0YWdlLFxuICAgICAgZSA9IHRoaXMubG9jYWxEYXRhLmRpY3RTdGFnZVN0YXRlW3RdO1xuICAgIGlmIChlLnN0YWdlU3RhdGUgPT09IEVUYXNrU3RhZ2VTdGF0ZS5Eb2luZyAmJiAzID09PSBlLnRhc2tDb21wbGV0ZUxpc3QubGVuZ3RoKSB7XG4gICAgICBlLnN0YWdlU3RhdGUgPSBFVGFza1N0YWdlU3RhdGUuV2FpdDtcbiAgICAgIHRoaXMuaGFzRmluaXNoU3RhZ2UgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRTdGFnZVN0YXRlRGF0YSh0LCBlKTtcbiAgICB9XG4gIH1cbiAgYXV0b1JlY2VpdmVSZXdhcmQodCA9IHRydWUpIHtcbiAgICBmb3IgKHZhciBlID0gZmFsc2UsIGEgPSAxOyBhIDw9IDM7IGErKykge1xuICAgICAgdmFyIG8gPSB0aGlzLmxvY2FsRGF0YS5kaWN0U3RhZ2VTdGF0ZVthXTtcbiAgICAgIGlmIChvICYmIG8uc3RhZ2VTdGF0ZSA9PT0gRVRhc2tTdGFnZVN0YXRlLldhaXQpIHtcbiAgICAgICAgZSA9IHRydWU7XG4gICAgICAgIHRoaXMudHJpZ2dlclN0YWdlUmV3YXJkKGEpO1xuICAgICAgICBvLnN0YWdlU3RhdGUgPSBFVGFza1N0YWdlU3RhdGUuRmluaXNoO1xuICAgICAgICB0aGlzLnNldFN0YWdlU3RhdGVEYXRhKGEsIG8pO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS50YXNrU3RhZ2UrKztcbiAgICAgICAgdGhpcy5sb2NhbERhdGEudGFza1N0YWdlID4gMyAmJiAodGhpcy5sb2NhbERhdGEudGFza1N0YWdlID0gMyk7XG4gICAgICAgIHRoaXMuaGFzRmluaXNoU3RhZ2UgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICAgICAgdGhpcy51cGRhdGVUYXNrUHJvZ3Jlc3NCYXNlbGluZSgpO1xuICAgIH1cbiAgfVxuICB0cmlnZ2VyU3RhZ2VSZXdhcmQodCwgZSA9IDEpIHtcbiAgICB2YXIgYSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzSW5HYW1lVmlldygpLFxuICAgICAgbyA9IHRoaXMuZ2V0U3RhZ2VCb3hEYXRhKHQpO1xuICAgIGlmIChvICYmIG8uQ291bnRzKSBmb3IgKHZhciBpID0gby5JdGVtcyB8fCBbXSwgciA9IG8uQ291bnRzIHx8IFtdLCBuID0gZSA+IDEgPyBFR2V0SXRlbVJlYXNvbklkLkRhaWx5VGFza0FkIDogRUdldEl0ZW1SZWFzb25JZC5EYWlseVRhc2ssIHMgPSBlID4gMSA/IFwi5q+P5pel5Lu75Yqh5aWW5YqxX+eci+W5v+WRiue/u+WAjV/lrozmiJDpmLbmrrVcIiArIHQgOiBcIuavj+aXpeS7u+WKoeWlluWKsV/lrozmiJDpmLbmrrVcIiArIHQsIGwgPSAwOyBsIDwgaS5sZW5ndGg7IGwrKykge1xuICAgICAgdmFyIGMgPSBpW2xdLFxuICAgICAgICBkID0gcltsXTtcbiAgICAgIGlmICghKGQgPD0gMCkpIHtcbiAgICAgICAgZSA+IDEgJiYgKGQgKj0gZSAtIDEpO1xuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgIHZhciBmID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICAgICAgICBoID0ge1xuICAgICAgICAgICAgICBpbnB1dFR5cGU6IEdhbWVVdGlscy5nZXRJbnB1dEFkZFByb3BUeXBlKGYpLFxuICAgICAgICAgICAgICBwcm9wVHlwZTogSXRlbVR5cGVLZXlbY10sXG4gICAgICAgICAgICAgIG51bTogZCxcbiAgICAgICAgICAgICAgcmVhc29uSWQ6IG4sXG4gICAgICAgICAgICAgIHJlYXNvbkluZm86IHNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KGgpO1xuICAgICAgICB9IGVsc2UgdGhpcy5hZGRJdGVtKGMsIGQsIG4sIHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhZGRJdGVtKHQsIGUsIGEsIG8pIHtcbiAgICB2YXIgaSxcbiAgICAgIHIsXG4gICAgICBuID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCk7XG4gICAgaWYgKHQgPT09IEVJdGVtVHlwZS5TaHVmZmxlKSB7XG4gICAgICBuLmNoYW5nZVNodWZmbGVOdW1zKGUpO1xuICAgICAgciA9IG4uZ2V0U2h1ZmZsZU51bXMoKTtcbiAgICAgIGkgPSBFSXRlbUlkLlNodWZmbGU7XG4gICAgfSBlbHNlIGlmICh0ID09PSBFSXRlbVR5cGUuSGludCkge1xuICAgICAgbi5jaGFuZ2VIaXRUaXBzTnVtcyhlKTtcbiAgICAgIHIgPSBuLmdldEhpdFRpcHNOdW1zKCk7XG4gICAgICBpID0gRUl0ZW1JZC5IaW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodCAhPT0gRUl0ZW1UeXBlLlVuZG8pIHJldHVybjtcbiAgICAgIG4uY2hhbmdlUmV2ZXJ0TnVtcyhlKTtcbiAgICAgIHIgPSBuLmdldFJldmVydE51bXMoKTtcbiAgICAgIGkgPSBFSXRlbUlkLlJldmVydDtcbiAgICB9XG4gICAgRG90R2FtZUdldEl0ZW0uZG90R2V0SXRlbShuLCB7XG4gICAgICBpdGVtSWQ6IGksXG4gICAgICBudW1iZXI6IGUsXG4gICAgICBhZnRlck51bTogcixcbiAgICAgIHJlYXNvbklkOiBhLFxuICAgICAgcmVhc29uSW5mbzogb1xuICAgIH0pO1xuICB9XG4gIG5leHRTdGFnZSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS5kaWN0U3RhZ2VTdGF0ZVt0XTtcbiAgICBpZiAoZSAmJiBlLnN0YWdlU3RhdGUgPT09IEVUYXNrU3RhZ2VTdGF0ZS5XYWl0KSB7XG4gICAgICBlLnN0YWdlU3RhdGUgPSBFVGFza1N0YWdlU3RhdGUuRmluaXNoO1xuICAgICAgdGhpcy5zZXRTdGFnZVN0YXRlRGF0YSh0LCBlKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnRhc2tTdGFnZSsrO1xuICAgICAgdGhpcy5sb2NhbERhdGEudGFza1N0YWdlID4gMyAmJiAodGhpcy5sb2NhbERhdGEudGFza1N0YWdlID0gMyk7XG4gICAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICAgIHRoaXMucmVmcmVzaFRhc2tTdGF0ZSgpO1xuICAgICAgdGhpcy51cGRhdGVUYXNrUHJvZ3Jlc3NCYXNlbGluZSgpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFwidXBkYXRlVGFza1JlZERvdFwiKTtcbiAgICB9XG4gIH1cbiAgZ2V0VGFza0NvbmZpZyh0KSB7XG4gICAgcmV0dXJuIERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS50YXNrLCB0KSB8fCBudWxsO1xuICB9XG4gIGdldE5leHRUYXNrKHQpIHtcbiAgICByZXR1cm4gLTEgPT09IHQuVGFza1F1ZXN0ID8gbnVsbCA6IHRoaXMuZ2V0VGFza0NvbmZpZyh0LlRhc2tRdWVzdCk7XG4gIH1cbiAgZ2V0U3RhZ2VCb3hJZCh0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YWdlQm94SWRzW3QgLSAxXSB8fCBudWxsO1xuICB9XG4gIGdldFN0YWdlQm94RGF0YSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldFN0YWdlQm94SWQodCk7XG4gICAgaWYgKCFlKSByZXR1cm4gbnVsbDtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5yZXdhcmRfY29uZmlnLCBlKSB8fCBudWxsO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBnZXRDdXJyZW50U3RhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnRhc2tTdGFnZTtcbiAgfVxuICBnZXRTdGFnZURhdGEodCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5kaWN0U3RhZ2VTdGF0ZVt0XSB8fCBudWxsO1xuICB9XG4gIGdldFRhc2tJbmZvKHQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuZGljdFRhc2tQcm9ncmVzc1t0XSB8fCBudWxsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGFza01vZGVsX3NvcnRcIilcbiAgZ2V0VGFza1NvcnQodCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIGEgPSBbLi4udGhpcy5sb2NhbERhdGEubGlzdFRhc2tUeXBlXSxcbiAgICAgIG8gPSB0IHx8IHRoaXMuZ2V0Q3VycmVudFN0YWdlKCksXG4gICAgICBpID0gdGhpcy5nZXRTdGFnZURhdGEobyk7XG4gICAgaWYgKCFpKSByZXR1cm4gYTtcbiAgICBhLnNvcnQoZnVuY3Rpb24gKHQsIGEpIHtcbiAgICAgIHZhciByID0gaS50YXNrQ29tcGxldGVMaXN0LmluY2x1ZGVzKHQpID8gMSA6IDAsXG4gICAgICAgIG4gPSBpLnRhc2tDb21wbGV0ZUxpc3QuaW5jbHVkZXMoYSkgPyAxIDogMDtcbiAgICAgIGlmIChyICE9PSBuKSByZXR1cm4gciAtIG47XG4gICAgICB2YXIgcyA9IGUubG9jYWxEYXRhLmRpY3RUYXNrUHJvZ3Jlc3NbdF0sXG4gICAgICAgIGwgPSBlLmxvY2FsRGF0YS5kaWN0VGFza1Byb2dyZXNzW2FdO1xuICAgICAgaWYgKCFzIHx8ICFsKSByZXR1cm4gZS5sb2NhbERhdGEubGlzdFRhc2tUeXBlLmluZGV4T2YodCkgLSBlLmxvY2FsRGF0YS5saXN0VGFza1R5cGUuaW5kZXhPZihhKTtcbiAgICAgIHZhciBjID0gbyAtIDE7XG4gICAgICByZXR1cm4gKHMudGFza0lkW2NdIHx8IHMudGFza0lkWzBdIHx8IDApIC0gKGwudGFza0lkW2NdIHx8IGwudGFza0lkWzBdIHx8IDApO1xuICAgIH0pO1xuICAgIHJldHVybiBhO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGFza01vZGVsX2hhc1JlZFBvaW50XCIpXG4gIGhhc1JlZFBvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmhhc1dhaXRpbmdSZXdhcmQoKTtcbiAgfVxuICBoYXNXYWl0aW5nUmV3YXJkKCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRDdXJyZW50U3RhZ2UoKSxcbiAgICAgIGUgPSB0aGlzLmdldFN0YWdlRGF0YSh0KTtcbiAgICByZXR1cm4gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuc3RhZ2VTdGF0ZSkgPT09IEVUYXNrU3RhZ2VTdGF0ZS5XYWl0O1xuICB9XG4gIGdldENhcmRSZXNOYW1lQnlDYXJkSWQodCkge1xuICAgIHZhciBlLFxuICAgICAgYSA9IENhcmRVdGlsLmdldENvbmZpZ05hbWUoKTtcbiAgICByZXR1cm4gbnVsbCA9PT0gKGUgPSBEYXRhUmVhZGVyLmdldFR5cGVMaXN0KGEsIFwiY2FyZElkXCIsIHQpWzBdKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnJlc05hbWU7XG4gIH1cbiAgdXBkYXRlRmlyc3RIb21lU2hvdygpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5pc0ZpcnN0SG9tZVNob3cgPSB0cnVlO1xuICB9XG4gIGlzRmlyc3RIb21lU2hvdygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuaXNGaXJzdEhvbWVTaG93O1xuICB9XG4gIGNsZWFyQ2FjaGUoKSB7XG4gICAgdGhpcy5oYXNGaW5pc2hTdGFnZSA9IGZhbHNlO1xuICAgIHRoaXMuY2FjaGVCYW5uZXJJbmZvID0gbnVsbDtcbiAgICB0aGlzLmNsZWFyVGFza1Byb2dyZXNzQ2hhbmdlcygpO1xuICB9XG4gIGlzSXRlbUluVGFza1ZhbHVlMSh0LCBlKSB7XG4gICAgdmFyIGEgPSB0aGlzLmdldFRhc2tJbmZvKHQpO1xuICAgIGlmICghYSB8fCAhYS50YXNrSWQgfHwgMCA9PT0gYS50YXNrSWQubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG8gPSB0aGlzLmdldEN1cnJlbnRTdGFnZSgpIC0gMSxcbiAgICAgIGkgPSBhLnRhc2tJZFtvXSB8fCBhLnRhc2tJZFswXSxcbiAgICAgIHIgPSB0aGlzLmdldFRhc2tDb25maWcoaSk7XG4gICAgcmV0dXJuICEoIXIgfHwgIXIuVGFza1ZhbHVlMSkgJiYgci5UYXNrVmFsdWUxLmluY2x1ZGVzKGUpO1xuICB9XG4gIHNldE9wZW5Gcm9tKHQpIHtcbiAgICB0aGlzLl9vcGVuRnJvbSA9IHQ7XG4gIH1cbiAgZ2V0T3BlbkZyb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW5Gcm9tO1xuICB9XG4gIGlzQWxsVGFza3NDb21wbGV0ZWQoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldEN1cnJlbnRTdGFnZSgpLFxuICAgICAgZSA9IHRoaXMuZ2V0U3RhZ2VEYXRhKHQpO1xuICAgIHJldHVybiB0ID49IDMgJiYgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuc3RhZ2VTdGF0ZSkgPT09IEVUYXNrU3RhZ2VTdGF0ZS5GaW5pc2g7XG4gIH1cbiAgZ2V0VGFza1RhcmdldENhcmRJZCh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldFRhc2tJbmZvKHQpO1xuICAgIHJldHVybiBlICYmIGUudGFyZ2V0VmFsdWUgPyBlLnRhcmdldFZhbHVlIDogMTtcbiAgfVxuICBnZXRUYXNrQ2FyZFJlc05hbWUoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJUYXNrVHJhaXRcIik7XG4gICAgaWYgKCEobnVsbCA9PT0gKHQgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZXZlbnRFbmFibGVkKSkgcmV0dXJuIFwiXCI7XG4gICAgdmFyIGEgPSB0aGlzLmdldFRhc2tUYXJnZXRDYXJkSWQoRVRhc2tUeXBlLkNsZWFyTWFoam9uZyk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FyZFJlc05hbWVCeUNhcmRJZChhKTtcbiAgfVxufSJdfQ==
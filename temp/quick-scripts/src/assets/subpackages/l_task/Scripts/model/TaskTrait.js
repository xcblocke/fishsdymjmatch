"use strict";
cc._RF.push(module, 'fc048nNIhFEoLbNDG4CvW6V', 'TaskTrait');
// subpackages/l_task/Scripts/model/TaskTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../../Scripts/framework/trait/Trait");
var HallTaskBtn_1 = require("./HallTaskBtn");
var TaskModel_1 = require("./TaskModel");
var TaskData_1 = require("../TaskData");
var GameEvent_1 = require("../../../../Scripts/simulator/constant/GameEvent");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var GameUtils_1 = require("../../../../Scripts/core/simulator/util/GameUtils");
var TaskTrait = /** @class */ (function (_super) {
    __extends(TaskTrait, _super);
    function TaskTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        _this._isTaskButtonCreated = false;
        _this._hallParentNode = null;
        _this._hallTaskBtnInstance = null;
        return _this;
    }
    TaskTrait_1 = TaskTrait;
    TaskTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
        mj.EventManager.on(GameEvent_1.EGameEvent.TileMapObject_OnClear, this.onTileMapObjectClear, this);
        this.registerEvent([{
                event: "HallCtl_initRes"
            }, {
                event: "GameData_chgRevert"
            }, {
                event: "Tile2WinVw_popNextView",
                priority: 60
            }]);
    };
    TaskTrait.prototype.onHallCtl_initRes = function (t, e) {
        e();
        t.ins.addPreloadRes("Prefab", ["mainRes:prefabs/task/HallTaskBtn"]);
    };
    TaskTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t.updateTaskRedDot = this.updateRedDot.bind(this);
        return _t;
    };
    TaskTrait.prototype.getStageRewards = function () {
        return this._config.stageRewards || [];
    };
    TaskTrait.prototype.getOpenCondition = function () {
        return this._config.openCondition || {};
    };
    TaskTrait.prototype.getFirstRandomFlag = function () {
        var t;
        return null !== (t = this._config.firstRandomFlag) && void 0 !== t ? t : 0;
    };
    TaskTrait.prototype.initTask = function () {
        var t, e, a = TaskModel_1.TaskModel.getInstance();
        if (!a.isInitialized()) {
            var o = this.getStageRewards(), i = this.getOpenCondition(), r = this.getFirstRandomFlag();
            if (3 !== o.length)
                return;
            a.configure({
                openCondition: {
                    level: null !== (t = null == i ? void 0 : i.level) && void 0 !== t ? t : 10,
                    day: null !== (e = null == i ? void 0 : i.day) && void 0 !== e ? e : 0
                },
                firstRandomFlag: null != r ? r : 0,
                stageBoxIds: o
            });
            a.initialize();
        }
    };
    TaskTrait.prototype.onHallVw_initBtns = function (t, e) {
        var a;
        this._hallParentNode = null === (a = t.ins) || void 0 === a ? void 0 : a.node;
        this.initTask();
        TaskModel_1.TaskModel.getInstance().checkAndInitTask();
        if (this.canShowTaskButton()) {
            this.createHallButton(this._hallParentNode);
            TaskModel_1.TaskModel.getInstance().autoReceiveReward();
        }
        e();
    };
    TaskTrait.prototype.canShowTaskButton = function () {
        return TaskModel_1.TaskModel.getInstance().isTaskOpen();
    };
    TaskTrait.prototype.updateItemTaskProgress = function (t, e) {
        if (e === void 0) { e = 1; }
        if (TaskModel_1.TaskModel.getInstance().isTaskOpen()) {
            var a = TaskModel_1.TaskModel.getInstance();
            a.isItemInTaskValue1(TaskData_1.ETaskType.UseItem, t) && a.updateTaskProgress(TaskData_1.ETaskType.UseItem, e);
        }
    };
    TaskTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.initTask();
        this.canShowTaskButton() && !this._isTaskButtonCreated && this._hallParentNode && this.createHallButton(this._hallParentNode);
        this._hallTaskBtnInstance && this.updateHallButtonShow();
        e();
    };
    TaskTrait.prototype.createHallButton = function (t) {
        var e = this;
        if (cc.isValid(t)) {
            this._isTaskButtonCreated = true;
            HallTaskBtn_1.default.createUI().then(function (a) {
                if (cc.isValid(a) && cc.isValid(t)) {
                    t.addChild(a);
                    e._hallTaskBtnInstance = a.getComponent(HallTaskBtn_1.default);
                    e.updateHallButtonShow();
                }
            }).catch(function (t) {
                e._isTaskButtonCreated = false;
                console.error("[" + TaskTrait_1.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallTaskBtn按钮加载失败"));
            });
        }
    };
    TaskTrait.prototype.updateHallButtonShow = function () {
        if (cc.isValid(this._hallTaskBtnInstance)) {
            this.updateRedDot();
            this._hallTaskBtnInstance.updateLock();
        }
    };
    TaskTrait.prototype.updateRedDot = function () {
        if (cc.isValid(this._hallTaskBtnInstance)) {
            var t = TaskModel_1.TaskModel.getInstance().hasRedPoint();
            this._hallTaskBtnInstance.updateRedDot(t);
        }
    };
    TaskTrait.prototype.onGameData_chgShuffle = function (t, e) {
        var o;
        try {
            if (!TaskModel_1.TaskModel.getInstance().isTaskOpen()) {
                e();
                return;
            }
            if ((null === (o = t.args) || void 0 === o ? void 0 : o[0]) >= 0) {
                e();
                return;
            }
            var i = TaskModel_1.TaskModel.getInstance();
            if (!i.isItemInTaskValue1(TaskData_1.ETaskType.UseItem, 1001)) {
                e();
                return;
            }
            i.updateTaskProgress(TaskData_1.ETaskType.UseItem, 1);
            e();
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] 洗牌道具任务更新失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskTrait.prototype.onGameData_chgHitTips = function (t, e) {
        var o;
        try {
            if (!TaskModel_1.TaskModel.getInstance().isTaskOpen()) {
                e();
                return;
            }
            if ((null === (o = t.args) || void 0 === o ? void 0 : o[0]) >= 0) {
                e();
                return;
            }
            var i = TaskModel_1.TaskModel.getInstance();
            if (!i.isItemInTaskValue1(TaskData_1.ETaskType.UseItem, 1002)) {
                e();
                return;
            }
            i.updateTaskProgress(TaskData_1.ETaskType.UseItem, 1);
            e();
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] 提示道具任务更新失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskTrait.prototype.onGameData_chgRevert = function (t, e) {
        var o;
        try {
            if (!TaskModel_1.TaskModel.getInstance().isTaskOpen()) {
                e();
                return;
            }
            if ((null === (o = t.args) || void 0 === o ? void 0 : o[0]) >= 0) {
                e();
                return;
            }
            var i = TaskModel_1.TaskModel.getInstance();
            if (!i.isItemInTaskValue1(TaskData_1.ETaskType.UseItem, 1003)) {
                e();
                return;
            }
            i.updateTaskProgress(TaskData_1.ETaskType.UseItem, 1);
            e();
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] 撤销道具任务更新失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskTrait.prototype.onTileMapObjectClear = function (t) {
        try {
            this.initTask();
            if (!TaskModel_1.TaskModel.getInstance().isTaskOpen())
                return;
            if (!Array.isArray(t) || 0 === t.length)
                return;
            var e = TaskModel_1.TaskModel.getInstance(), o = e.getTaskInfo(TaskData_1.ETaskType.ClearMahjong);
            if (!o || void 0 === o.targetValue)
                return;
            if (!e.isTaskRangeMatch(TaskData_1.ETaskType.ClearMahjong))
                return;
            var i = o.targetValue;
            if (!t.some(function (t) {
                return t && t.cardId === i;
            }))
                return;
            var r = UserModel_1.default.getInstance().getCurrentGameType();
            e.addPendingClearCount(1, r);
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] 麻将消除任务累积失败: " + (null == t ? void 0 : t.message));
        }
    };
    TaskTrait.prototype.handleWinPopNextView = function (t, e) {
        this.initTask();
        try {
            if (!TaskModel_1.TaskModel.getInstance().isTaskOpen()) {
                e();
                return true;
            }
            TaskModel_1.TaskModel.getInstance().checkAndInitTask();
            var o = TaskModel_1.TaskModel.getInstance(), i = UserModel_1.default.getInstance().getMainGameData().getLevelId();
            o.updateTaskProgress(TaskData_1.ETaskType.FinishXLevel, i - 1);
            o.updateTaskProgress(TaskData_1.ETaskType.FinishLevel, 1);
            var r = UserModel_1.default.getInstance().getCurrentGameType();
            o.commitPendingClearCount(r);
            t.args[0] = t.args[0] || {};
            var n = t.args[0], s = this.prepareBannerData(), p = o.hasFinishStage;
            o.bannerDataForAnimation = s;
            p && (t.args[0].hasTaskReward = true);
            o.hasFinishStage = false;
            o.cacheBannerInfo = null;
            o.updateTaskProgressBaseline();
            if (!s && !p) {
                e();
                return true;
            }
            if (s) {
                this.showTaskBanner(n, e, s, p);
                return false;
            }
            if (p) {
                this.showTask(e);
                return false;
            }
            e();
            return true;
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] 胜利界面弹窗处理失败: " + (null == t ? void 0 : t.message));
            e();
            return true;
        }
    };
    TaskTrait.prototype.checkNeedBlock = function () {
        return GameUtils_1.default.isRatingDialogReady();
    };
    TaskTrait.prototype.onWinVw_popNextView = function (t, e) {
        try {
            this.handleWinPopNextView(t, e);
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] 主线模式胜利界面处理异常: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskTrait.prototype.prepareBannerData = function () {
        try {
            var t = TaskModel_1.TaskModel.getInstance().getStageData(3);
            return (null == t ? void 0 : t.stageState) === TaskData_1.ETaskStageState.Finish ? null : this.getCompletedTask() || this.getProgressChangedTask();
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] 准备Banner数据失败: " + (null == t ? void 0 : t.message));
            return null;
        }
    };
    TaskTrait.prototype.getCompletedTask = function () {
        var t, e;
        try {
            var o = TaskModel_1.TaskModel.getInstance(), i = o.cacheBannerInfo, r = new Map(o.taskProgressChangesInGame);
            if (!i)
                return null;
            var n = i;
            if (n.taskType === TaskData_1.ETaskType.FinishXLevel && UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1 !== n.maxValue)
                return null;
            var s = o.getTaskConfig(n.taskId), p = null !== (t = r.get(n.taskType)) && void 0 !== t ? t : n.minValue;
            return n.minValue === n.maxValue ? null : {
                taskType: n.taskType,
                taskId: n.taskId,
                taskDesc: (null == s ? void 0 : s.TaskDes) || "任务" + n.taskType,
                currentProgress: n.maxValue,
                targetProgress: n.maxValue,
                isCompleted: true,
                targetCardId: (null === (e = o.getTaskInfo(n.taskType)) || void 0 === e ? void 0 : e.targetValue) || 0,
                oldProgress: p
            };
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] 获取已完成任务Banner失败: " + (null == t ? void 0 : t.message));
            return null;
        }
    };
    TaskTrait.prototype.getProgressChangedTask = function () {
        try {
            var t = TaskModel_1.TaskModel.getInstance(), e = t.getCurrentStage(), o = new Map(t.taskProgressChangesInGame);
            if (0 === o.size)
                return null;
            var i = t.getStageData(e), r = Array.from(o.keys()).filter(function (t) {
                return !(null == i ? void 0 : i.taskCompleteList.includes(t)) && t !== TaskData_1.ETaskType.FinishXLevel;
            });
            if (0 === r.length)
                return null;
            for (var n = 0; n < r.length; n++) {
                var s = r[n], p = t.getTaskInfo(s);
                if (p && p.taskId && 0 !== p.taskId.length) {
                    var u = o.get(s) || 0, d = p.taskProgress;
                    if (u !== d) {
                        var f = e - 1, h = p.taskId[f] || p.taskId[0], g = p.taskMax[f] || 0, T = t.getTaskConfig(h);
                        if (T) {
                            var y = p.taskProgress >= g;
                            return {
                                taskType: s,
                                taskId: h,
                                taskDesc: T.TaskDes || "任务" + s,
                                currentProgress: d,
                                targetProgress: g,
                                isCompleted: y,
                                targetCardId: p.targetValue || 0,
                                oldProgress: u
                            };
                        }
                    }
                }
            }
            return null;
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] 获取进度变化任务Banner失败: " + (null == t ? void 0 : t.message));
            return null;
        }
    };
    TaskTrait.prototype.onTLWinVw_popNextView = function (t, e) {
        try {
            this.handleWinPopNextView(t, e);
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] 旅行模式胜利界面处理异常: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskTrait.prototype.onDCWinVw_popNextView = function (t, e) {
        try {
            this.handleWinPopNextView(t, e);
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] 每日挑战胜利界面处理异常: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskTrait.prototype.onTile2WinVw_popNextView = function (t, e) {
        try {
            this.handleWinPopNextView(t, e);
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] tile2模式胜利界面处理异常: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        try {
            var o = TaskModel_1.TaskModel.getInstance();
            o.clearPendingClearCount();
            o.cacheBannerInfo = null;
            e();
        }
        catch (t) {
            console.error("[" + TaskTrait_1.traitKey + "] 重新开始游戏处理失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskTrait.prototype.showTask = function (t, e) {
        if (e === void 0) { e = false; }
        this.pushController("TaskController", {
            from: TaskData_1.ETaskUIType.Result,
            isGlobal: e
        }, function (e) {
            if (cc.isValid(e)) {
                var a = e.onUIDestroy.bind(e);
                e.onUIDestroy = function () {
                    a();
                    t();
                };
            }
            else
                t();
        });
    };
    TaskTrait.prototype.showTaskBanner = function (t, e, a, o) {
        var i = this;
        this.pushController("TaskBannerController", {
            data: a,
            isShowAction: false,
            noBlock: !this.checkNeedBlock(),
            bgStyle: {
                blackOpacity: 0
            }
        }, function (t) {
            if (cc.isValid(t)) {
                var a = t.onUIDestroy.bind(t);
                t.onUIDestroy = function () {
                    a();
                    if (o) {
                        i.showTask(e);
                    }
                    else {
                        e();
                    }
                };
            }
            else if (o) {
                i.showTask(e);
            }
            else {
                e();
            }
        });
    };
    var TaskTrait_1;
    TaskTrait.traitKey = "Task";
    TaskTrait.nextTimeOut = -1;
    __decorate([
        mj.traitEvent("TaskTrait_getStageRews")
    ], TaskTrait.prototype, "getStageRewards", null);
    __decorate([
        mj.traitEvent("TaskTrait_getOpenCond")
    ], TaskTrait.prototype, "getOpenCondition", null);
    __decorate([
        mj.traitEvent("TaskTrait_getFstRndFlg")
    ], TaskTrait.prototype, "getFirstRandomFlag", null);
    __decorate([
        mj.traitEvent("TaskTrait_canShowTaskBtn")
    ], TaskTrait.prototype, "canShowTaskButton", null);
    __decorate([
        mj.traitEvent("TaskTrait_checkNeedBlock")
    ], TaskTrait.prototype, "checkNeedBlock", null);
    __decorate([
        mj.traitEvent("TaskTrait_getProgChg")
    ], TaskTrait.prototype, "getProgressChangedTask", null);
    __decorate([
        mj.traitEvent("TaskTrait_showTask")
    ], TaskTrait.prototype, "showTask", null);
    __decorate([
        mj.traitEvent("TaskTrait_showBanner")
    ], TaskTrait.prototype, "showTaskBanner", null);
    TaskTrait = TaskTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskTrait")
    ], TaskTrait);
    return TaskTrait;
}(Trait_1.default));
exports.default = TaskTrait;

cc._RF.pop();
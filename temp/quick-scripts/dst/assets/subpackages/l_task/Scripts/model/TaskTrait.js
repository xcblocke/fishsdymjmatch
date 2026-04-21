
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/model/TaskTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9tb2RlbC9UYXNrVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUE4RDtBQUM5RCw2Q0FBd0M7QUFDeEMseUNBQXdDO0FBQ3hDLHdDQUFzRTtBQUN0RSw4RUFBOEU7QUFDOUUseUVBQW9FO0FBQ3BFLCtFQUEwRTtBQUcxRTtJQUF1Qyw2QkFBSztJQUE1QztRQUFBLHFFQWthQztRQWphQyxhQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsMEJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLDBCQUFvQixHQUFHLElBQUksQ0FBQzs7SUE4WjlCLENBQUM7a0JBbGFvQixTQUFTO0lBTzVCLDBCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDckMsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsc0JBQVUsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQixLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLG9CQUFvQjthQUM1QixFQUFFO2dCQUNELEtBQUssRUFBRSx3QkFBd0I7Z0JBQy9CLFFBQVEsRUFBRSxFQUFFO2FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0QscUNBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFBRSxDQUFDO1FBQ0osQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFD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QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztxREFHdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7dURBSXZDO0lBaUNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQztzREFHekM7SUE2S0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO21EQUd6QztJQTZDRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7MkRBNENyQztJQXFDRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7NkNBY25DO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO21EQTJCckM7SUFqYWtCLFNBQVM7UUFGN0IsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztPQUNELFNBQVMsQ0FrYTdCO0lBQUQsZ0JBQUM7Q0FsYUQsQUFrYUMsQ0FsYXNDLGVBQUssR0FrYTNDO2tCQWxhb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgSGFsbFRhc2tCdG4gZnJvbSAnLi9IYWxsVGFza0J0bic7XG5pbXBvcnQgeyBUYXNrTW9kZWwgfSBmcm9tICcuL1Rhc2tNb2RlbCc7XG5pbXBvcnQgeyBFVGFza1R5cGUsIEVUYXNrU3RhZ2VTdGF0ZSwgRVRhc2tVSVR5cGUgfSBmcm9tICcuLi9UYXNrRGF0YSc7XG5pbXBvcnQgeyBFR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUV2ZW50JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUYXNrVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IHt9O1xuICBfaXNUYXNrQnV0dG9uQ3JlYXRlZCA9IGZhbHNlO1xuICBfaGFsbFBhcmVudE5vZGUgPSBudWxsO1xuICBfaGFsbFRhc2tCdG5JbnN0YW5jZSA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGFza1wiO1xuICBzdGF0aWMgbmV4dFRpbWVPdXQgPSAtMTtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX3RyYWl0RGF0YSB8fCB7fTtcbiAgICBtai5FdmVudE1hbmFnZXIub24oRUdhbWVFdmVudC5UaWxlTWFwT2JqZWN0X09uQ2xlYXIsIHRoaXMub25UaWxlTWFwT2JqZWN0Q2xlYXIsIHRoaXMpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudChbe1xuICAgICAgZXZlbnQ6IFwiSGFsbEN0bF9pbml0UmVzXCJcbiAgICB9LCB7XG4gICAgICBldmVudDogXCJHYW1lRGF0YV9jaGdSZXZlcnRcIlxuICAgIH0sIHtcbiAgICAgIGV2ZW50OiBcIlRpbGUyV2luVndfcG9wTmV4dFZpZXdcIixcbiAgICAgIHByaW9yaXR5OiA2MFxuICAgIH1dKTtcbiAgfVxuICBvbkhhbGxDdGxfaW5pdFJlcyh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHQuaW5zLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgW1wibWFpblJlczpwcmVmYWJzL3Rhc2svSGFsbFRhc2tCdG5cIl0pO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90ID0ge307XG4gICAgX3QudXBkYXRlVGFza1JlZERvdCA9IHRoaXMudXBkYXRlUmVkRG90LmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGFza1RyYWl0X2dldFN0YWdlUmV3c1wiKVxuICBnZXRTdGFnZVJld2FyZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zdGFnZVJld2FyZHMgfHwgW107XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrVHJhaXRfZ2V0T3BlbkNvbmRcIilcbiAgZ2V0T3BlbkNvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLm9wZW5Db25kaXRpb24gfHwge307XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrVHJhaXRfZ2V0RnN0Um5kRmxnXCIpXG4gIGdldEZpcnN0UmFuZG9tRmxhZygpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLl9jb25maWcuZmlyc3RSYW5kb21GbGFnKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMDtcbiAgfVxuICBpbml0VGFzaygpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUsXG4gICAgICBhID0gVGFza01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKCFhLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgdmFyIG8gPSB0aGlzLmdldFN0YWdlUmV3YXJkcygpLFxuICAgICAgICBpID0gdGhpcy5nZXRPcGVuQ29uZGl0aW9uKCksXG4gICAgICAgIHIgPSB0aGlzLmdldEZpcnN0UmFuZG9tRmxhZygpO1xuICAgICAgaWYgKDMgIT09IG8ubGVuZ3RoKSByZXR1cm47XG4gICAgICBhLmNvbmZpZ3VyZSh7XG4gICAgICAgIG9wZW5Db25kaXRpb246IHtcbiAgICAgICAgICBsZXZlbDogbnVsbCAhPT0gKHQgPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLmxldmVsKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMTAsXG4gICAgICAgICAgZGF5OiBudWxsICE9PSAoZSA9IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuZGF5KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMFxuICAgICAgICB9LFxuICAgICAgICBmaXJzdFJhbmRvbUZsYWc6IG51bGwgIT0gciA/IHIgOiAwLFxuICAgICAgICBzdGFnZUJveElkczogb1xuICAgICAgfSk7XG4gICAgICBhLmluaXRpYWxpemUoKTtcbiAgICB9XG4gIH1cbiAgb25IYWxsVndfaW5pdEJ0bnModCwgZSkge1xuICAgIHZhciBhO1xuICAgIHRoaXMuX2hhbGxQYXJlbnROb2RlID0gbnVsbCA9PT0gKGEgPSB0LmlucykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5ub2RlO1xuICAgIHRoaXMuaW5pdFRhc2soKTtcbiAgICBUYXNrTW9kZWwuZ2V0SW5zdGFuY2UoKS5jaGVja0FuZEluaXRUYXNrKCk7XG4gICAgaWYgKHRoaXMuY2FuU2hvd1Rhc2tCdXR0b24oKSkge1xuICAgICAgdGhpcy5jcmVhdGVIYWxsQnV0dG9uKHRoaXMuX2hhbGxQYXJlbnROb2RlKTtcbiAgICAgIFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpLmF1dG9SZWNlaXZlUmV3YXJkKCk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tUcmFpdF9jYW5TaG93VGFza0J0blwiKVxuICBjYW5TaG93VGFza0J1dHRvbigpIHtcbiAgICByZXR1cm4gVGFza01vZGVsLmdldEluc3RhbmNlKCkuaXNUYXNrT3BlbigpO1xuICB9XG4gIHVwZGF0ZUl0ZW1UYXNrUHJvZ3Jlc3ModCwgZSA9IDEpIHtcbiAgICBpZiAoVGFza01vZGVsLmdldEluc3RhbmNlKCkuaXNUYXNrT3BlbigpKSB7XG4gICAgICB2YXIgYSA9IFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgYS5pc0l0ZW1JblRhc2tWYWx1ZTEoRVRhc2tUeXBlLlVzZUl0ZW0sIHQpICYmIGEudXBkYXRlVGFza1Byb2dyZXNzKEVUYXNrVHlwZS5Vc2VJdGVtLCBlKTtcbiAgICB9XG4gIH1cbiAgb25IYWxsVndfdXBkYXRlVUkodCwgZSkge1xuICAgIHRoaXMuaW5pdFRhc2soKTtcbiAgICB0aGlzLmNhblNob3dUYXNrQnV0dG9uKCkgJiYgIXRoaXMuX2lzVGFza0J1dHRvbkNyZWF0ZWQgJiYgdGhpcy5faGFsbFBhcmVudE5vZGUgJiYgdGhpcy5jcmVhdGVIYWxsQnV0dG9uKHRoaXMuX2hhbGxQYXJlbnROb2RlKTtcbiAgICB0aGlzLl9oYWxsVGFza0J0bkluc3RhbmNlICYmIHRoaXMudXBkYXRlSGFsbEJ1dHRvblNob3coKTtcbiAgICBlKCk7XG4gIH1cbiAgY3JlYXRlSGFsbEJ1dHRvbih0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB0aGlzLl9pc1Rhc2tCdXR0b25DcmVhdGVkID0gdHJ1ZTtcbiAgICAgIEhhbGxUYXNrQnRuLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAoYSkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChhKSAmJiBjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgICAgdC5hZGRDaGlsZChhKTtcbiAgICAgICAgICBlLl9oYWxsVGFza0J0bkluc3RhbmNlID0gYS5nZXRDb21wb25lbnQoSGFsbFRhc2tCdG4pO1xuICAgICAgICAgIGUudXBkYXRlSGFsbEJ1dHRvblNob3coKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZS5faXNUYXNrQnV0dG9uQ3JlYXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgVGFza1RyYWl0LnRyYWl0S2V5ICsgXCJdIOa4uOaIj+WGheWIm+W7uuaMiemSruWksei0pTpcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIkhhbGxUYXNrQnRu5oyJ6ZKu5Yqg6L295aSx6LSlXCIpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICB1cGRhdGVIYWxsQnV0dG9uU2hvdygpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9oYWxsVGFza0J0bkluc3RhbmNlKSkge1xuICAgICAgdGhpcy51cGRhdGVSZWREb3QoKTtcbiAgICAgIHRoaXMuX2hhbGxUYXNrQnRuSW5zdGFuY2UudXBkYXRlTG9jaygpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVSZWREb3QoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5faGFsbFRhc2tCdG5JbnN0YW5jZSkpIHtcbiAgICAgIHZhciB0ID0gVGFza01vZGVsLmdldEluc3RhbmNlKCkuaGFzUmVkUG9pbnQoKTtcbiAgICAgIHRoaXMuX2hhbGxUYXNrQnRuSW5zdGFuY2UudXBkYXRlUmVkRG90KHQpO1xuICAgIH1cbiAgfVxuICBvbkdhbWVEYXRhX2NoZ1NodWZmbGUodCwgZSkge1xuICAgIHZhciBvO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIVRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpLmlzVGFza09wZW4oKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICgobnVsbCA9PT0gKG8gPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bMF0pID49IDApIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaSA9IFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgaWYgKCFpLmlzSXRlbUluVGFza1ZhbHVlMShFVGFza1R5cGUuVXNlSXRlbSwgMTAwMSkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpLnVwZGF0ZVRhc2tQcm9ncmVzcyhFVGFza1R5cGUuVXNlSXRlbSwgMSk7XG4gICAgICBlKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRhc2tUcmFpdC50cmFpdEtleSArIFwiXSDmtJfniYzpgZPlhbfku7vliqHmm7TmlrDlpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkdhbWVEYXRhX2NoZ0hpdFRpcHModCwgZSkge1xuICAgIHZhciBvO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIVRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpLmlzVGFza09wZW4oKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICgobnVsbCA9PT0gKG8gPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bMF0pID49IDApIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaSA9IFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgaWYgKCFpLmlzSXRlbUluVGFza1ZhbHVlMShFVGFza1R5cGUuVXNlSXRlbSwgMTAwMikpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpLnVwZGF0ZVRhc2tQcm9ncmVzcyhFVGFza1R5cGUuVXNlSXRlbSwgMSk7XG4gICAgICBlKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRhc2tUcmFpdC50cmFpdEtleSArIFwiXSDmj5DnpLrpgZPlhbfku7vliqHmm7TmlrDlpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkdhbWVEYXRhX2NoZ1JldmVydCh0LCBlKSB7XG4gICAgdmFyIG87XG4gICAgdHJ5IHtcbiAgICAgIGlmICghVGFza01vZGVsLmdldEluc3RhbmNlKCkuaXNUYXNrT3BlbigpKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKChudWxsID09PSAobyA9IHQuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogb1swXSkgPj0gMCkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpID0gVGFza01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgICBpZiAoIWkuaXNJdGVtSW5UYXNrVmFsdWUxKEVUYXNrVHlwZS5Vc2VJdGVtLCAxMDAzKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGkudXBkYXRlVGFza1Byb2dyZXNzKEVUYXNrVHlwZS5Vc2VJdGVtLCAxKTtcbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgVGFza1RyYWl0LnRyYWl0S2V5ICsgXCJdIOaSpOmUgOmBk+WFt+S7u+WKoeabtOaWsOWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uVGlsZU1hcE9iamVjdENsZWFyKHQpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5pbml0VGFzaygpO1xuICAgICAgaWYgKCFUYXNrTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc1Rhc2tPcGVuKCkpIHJldHVybjtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0KSB8fCAwID09PSB0Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgdmFyIGUgPSBUYXNrTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgbyA9IGUuZ2V0VGFza0luZm8oRVRhc2tUeXBlLkNsZWFyTWFoam9uZyk7XG4gICAgICBpZiAoIW8gfHwgdm9pZCAwID09PSBvLnRhcmdldFZhbHVlKSByZXR1cm47XG4gICAgICBpZiAoIWUuaXNUYXNrUmFuZ2VNYXRjaChFVGFza1R5cGUuQ2xlYXJNYWhqb25nKSkgcmV0dXJuO1xuICAgICAgdmFyIGkgPSBvLnRhcmdldFZhbHVlO1xuICAgICAgaWYgKCF0LnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgJiYgdC5jYXJkSWQgPT09IGk7XG4gICAgICB9KSkgcmV0dXJuO1xuICAgICAgdmFyIHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICAgIGUuYWRkUGVuZGluZ0NsZWFyQ291bnQoMSwgcik7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRhc2tUcmFpdC50cmFpdEtleSArIFwiXSDpurvlsIbmtojpmaTku7vliqHntK/np6/lpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVXaW5Qb3BOZXh0Vmlldyh0LCBlKSB7XG4gICAgdGhpcy5pbml0VGFzaygpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIVRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpLmlzVGFza09wZW4oKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgVGFza01vZGVsLmdldEluc3RhbmNlKCkuY2hlY2tBbmRJbml0VGFzaygpO1xuICAgICAgdmFyIG8gPSBUYXNrTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgaSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdldExldmVsSWQoKTtcbiAgICAgIG8udXBkYXRlVGFza1Byb2dyZXNzKEVUYXNrVHlwZS5GaW5pc2hYTGV2ZWwsIGkgLSAxKTtcbiAgICAgIG8udXBkYXRlVGFza1Byb2dyZXNzKEVUYXNrVHlwZS5GaW5pc2hMZXZlbCwgMSk7XG4gICAgICB2YXIgciA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgICAgby5jb21taXRQZW5kaW5nQ2xlYXJDb3VudChyKTtcbiAgICAgIHQuYXJnc1swXSA9IHQuYXJnc1swXSB8fCB7fTtcbiAgICAgIHZhciBuID0gdC5hcmdzWzBdLFxuICAgICAgICBzID0gdGhpcy5wcmVwYXJlQmFubmVyRGF0YSgpLFxuICAgICAgICBwID0gby5oYXNGaW5pc2hTdGFnZTtcbiAgICAgIG8uYmFubmVyRGF0YUZvckFuaW1hdGlvbiA9IHM7XG4gICAgICBwICYmICh0LmFyZ3NbMF0uaGFzVGFza1Jld2FyZCA9IHRydWUpO1xuICAgICAgby5oYXNGaW5pc2hTdGFnZSA9IGZhbHNlO1xuICAgICAgby5jYWNoZUJhbm5lckluZm8gPSBudWxsO1xuICAgICAgby51cGRhdGVUYXNrUHJvZ3Jlc3NCYXNlbGluZSgpO1xuICAgICAgaWYgKCFzICYmICFwKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAocykge1xuICAgICAgICB0aGlzLnNob3dUYXNrQmFubmVyKG4sIGUsIHMsIHApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAocCkge1xuICAgICAgICB0aGlzLnNob3dUYXNrKGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgVGFza1RyYWl0LnRyYWl0S2V5ICsgXCJdIOiDnOWIqeeVjOmdouW8ueeql+WkhOeQhuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrVHJhaXRfY2hlY2tOZWVkQmxvY2tcIilcbiAgY2hlY2tOZWVkQmxvY2soKSB7XG4gICAgcmV0dXJuIEdhbWVVdGlscy5pc1JhdGluZ0RpYWxvZ1JlYWR5KCk7XG4gIH1cbiAgb25XaW5Wd19wb3BOZXh0Vmlldyh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaGFuZGxlV2luUG9wTmV4dFZpZXcodCwgZSk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRhc2tUcmFpdC50cmFpdEtleSArIFwiXSDkuLvnur/mqKHlvI/og5zliKnnlYzpnaLlpITnkIblvILluLg6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBwcmVwYXJlQmFubmVyRGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHQgPSBUYXNrTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRTdGFnZURhdGEoMyk7XG4gICAgICByZXR1cm4gKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuc3RhZ2VTdGF0ZSkgPT09IEVUYXNrU3RhZ2VTdGF0ZS5GaW5pc2ggPyBudWxsIDogdGhpcy5nZXRDb21wbGV0ZWRUYXNrKCkgfHwgdGhpcy5nZXRQcm9ncmVzc0NoYW5nZWRUYXNrKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRhc2tUcmFpdC50cmFpdEtleSArIFwiXSDlh4blpIdCYW5uZXLmlbDmja7lpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGdldENvbXBsZXRlZFRhc2soKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvID0gVGFza01vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICAgIGkgPSBvLmNhY2hlQmFubmVySW5mbyxcbiAgICAgICAgciA9IG5ldyBNYXAoby50YXNrUHJvZ3Jlc3NDaGFuZ2VzSW5HYW1lKTtcbiAgICAgIGlmICghaSkgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgbiA9IGk7XG4gICAgICBpZiAobi50YXNrVHlwZSA9PT0gRVRhc2tUeXBlLkZpbmlzaFhMZXZlbCAmJiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCkgLSAxICE9PSBuLm1heFZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBzID0gby5nZXRUYXNrQ29uZmlnKG4udGFza0lkKSxcbiAgICAgICAgcCA9IG51bGwgIT09ICh0ID0gci5nZXQobi50YXNrVHlwZSkpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBuLm1pblZhbHVlO1xuICAgICAgcmV0dXJuIG4ubWluVmFsdWUgPT09IG4ubWF4VmFsdWUgPyBudWxsIDoge1xuICAgICAgICB0YXNrVHlwZTogbi50YXNrVHlwZSxcbiAgICAgICAgdGFza0lkOiBuLnRhc2tJZCxcbiAgICAgICAgdGFza0Rlc2M6IChudWxsID09IHMgPyB2b2lkIDAgOiBzLlRhc2tEZXMpIHx8IFwi5Lu75YqhXCIgKyBuLnRhc2tUeXBlLFxuICAgICAgICBjdXJyZW50UHJvZ3Jlc3M6IG4ubWF4VmFsdWUsXG4gICAgICAgIHRhcmdldFByb2dyZXNzOiBuLm1heFZhbHVlLFxuICAgICAgICBpc0NvbXBsZXRlZDogdHJ1ZSxcbiAgICAgICAgdGFyZ2V0Q2FyZElkOiAobnVsbCA9PT0gKGUgPSBvLmdldFRhc2tJbmZvKG4udGFza1R5cGUpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnRhcmdldFZhbHVlKSB8fCAwLFxuICAgICAgICBvbGRQcm9ncmVzczogcFxuICAgICAgfTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgVGFza1RyYWl0LnRyYWl0S2V5ICsgXCJdIOiOt+WPluW3suWujOaIkOS7u+WKoUJhbm5lcuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrVHJhaXRfZ2V0UHJvZ0NoZ1wiKVxuICBnZXRQcm9ncmVzc0NoYW5nZWRUYXNrKCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgdCA9IFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgICBlID0gdC5nZXRDdXJyZW50U3RhZ2UoKSxcbiAgICAgICAgbyA9IG5ldyBNYXAodC50YXNrUHJvZ3Jlc3NDaGFuZ2VzSW5HYW1lKTtcbiAgICAgIGlmICgwID09PSBvLnNpemUpIHJldHVybiBudWxsO1xuICAgICAgdmFyIGkgPSB0LmdldFN0YWdlRGF0YShlKSxcbiAgICAgICAgciA9IEFycmF5LmZyb20oby5rZXlzKCkpLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiAhKG51bGwgPT0gaSA/IHZvaWQgMCA6IGkudGFza0NvbXBsZXRlTGlzdC5pbmNsdWRlcyh0KSkgJiYgdCAhPT0gRVRhc2tUeXBlLkZpbmlzaFhMZXZlbDtcbiAgICAgICAgfSk7XG4gICAgICBpZiAoMCA9PT0gci5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCByLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIHZhciBzID0gcltuXSxcbiAgICAgICAgICBwID0gdC5nZXRUYXNrSW5mbyhzKTtcbiAgICAgICAgaWYgKHAgJiYgcC50YXNrSWQgJiYgMCAhPT0gcC50YXNrSWQubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIHUgPSBvLmdldChzKSB8fCAwLFxuICAgICAgICAgICAgZCA9IHAudGFza1Byb2dyZXNzO1xuICAgICAgICAgIGlmICh1ICE9PSBkKSB7XG4gICAgICAgICAgICB2YXIgZiA9IGUgLSAxLFxuICAgICAgICAgICAgICBoID0gcC50YXNrSWRbZl0gfHwgcC50YXNrSWRbMF0sXG4gICAgICAgICAgICAgIGcgPSBwLnRhc2tNYXhbZl0gfHwgMCxcbiAgICAgICAgICAgICAgVCA9IHQuZ2V0VGFza0NvbmZpZyhoKTtcbiAgICAgICAgICAgIGlmIChUKSB7XG4gICAgICAgICAgICAgIHZhciB5ID0gcC50YXNrUHJvZ3Jlc3MgPj0gZztcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YXNrVHlwZTogcyxcbiAgICAgICAgICAgICAgICB0YXNrSWQ6IGgsXG4gICAgICAgICAgICAgICAgdGFza0Rlc2M6IFQuVGFza0RlcyB8fCBcIuS7u+WKoVwiICsgcyxcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvZ3Jlc3M6IGQsXG4gICAgICAgICAgICAgICAgdGFyZ2V0UHJvZ3Jlc3M6IGcsXG4gICAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IHksXG4gICAgICAgICAgICAgICAgdGFyZ2V0Q2FyZElkOiBwLnRhcmdldFZhbHVlIHx8IDAsXG4gICAgICAgICAgICAgICAgb2xkUHJvZ3Jlc3M6IHVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBUYXNrVHJhaXQudHJhaXRLZXkgKyBcIl0g6I635Y+W6L+b5bqm5Y+Y5YyW5Lu75YqhQmFubmVy5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBvblRMV2luVndfcG9wTmV4dFZpZXcodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmhhbmRsZVdpblBvcE5leHRWaWV3KHQsIGUpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBUYXNrVHJhaXQudHJhaXRLZXkgKyBcIl0g5peF6KGM5qih5byP6IOc5Yip55WM6Z2i5aSE55CG5byC5bi4OiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25EQ1dpblZ3X3BvcE5leHRWaWV3KHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5oYW5kbGVXaW5Qb3BOZXh0Vmlldyh0LCBlKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgVGFza1RyYWl0LnRyYWl0S2V5ICsgXCJdIOavj+aXpeaMkeaImOiDnOWIqeeVjOmdouWkhOeQhuW8guW4uDogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uVGlsZTJXaW5Wd19wb3BOZXh0Vmlldyh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaGFuZGxlV2luUG9wTmV4dFZpZXcodCwgZSk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRhc2tUcmFpdC50cmFpdEtleSArIFwiXSB0aWxlMuaooeW8j+iDnOWIqeeVjOmdouWkhOeQhuW8guW4uDogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uR3NMaXN0ZW5lcl9vblJlcGxheUdhbWUodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbyA9IFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgby5jbGVhclBlbmRpbmdDbGVhckNvdW50KCk7XG4gICAgICBvLmNhY2hlQmFubmVySW5mbyA9IG51bGw7XG4gICAgICBlKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRhc2tUcmFpdC50cmFpdEtleSArIFwiXSDph43mlrDlvIDlp4vmuLjmiI/lpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tUcmFpdF9zaG93VGFza1wiKVxuICBzaG93VGFzayh0LCBlID0gZmFsc2UpIHtcbiAgICB0aGlzLnB1c2hDb250cm9sbGVyKFwiVGFza0NvbnRyb2xsZXJcIiwge1xuICAgICAgZnJvbTogRVRhc2tVSVR5cGUuUmVzdWx0LFxuICAgICAgaXNHbG9iYWw6IGVcbiAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgICAgdmFyIGEgPSBlLm9uVUlEZXN0cm95LmJpbmQoZSk7XG4gICAgICAgIGUub25VSURlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYSgpO1xuICAgICAgICAgIHQoKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrVHJhaXRfc2hvd0Jhbm5lclwiKVxuICBzaG93VGFza0Jhbm5lcih0LCBlLCBhLCBvKSB7XG4gICAgdmFyIGkgPSB0aGlzO1xuICAgIHRoaXMucHVzaENvbnRyb2xsZXIoXCJUYXNrQmFubmVyQ29udHJvbGxlclwiLCB7XG4gICAgICBkYXRhOiBhLFxuICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZSxcbiAgICAgIG5vQmxvY2s6ICF0aGlzLmNoZWNrTmVlZEJsb2NrKCksXG4gICAgICBiZ1N0eWxlOiB7XG4gICAgICAgIGJsYWNrT3BhY2l0eTogMFxuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICB2YXIgYSA9IHQub25VSURlc3Ryb3kuYmluZCh0KTtcbiAgICAgICAgdC5vblVJRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhKCk7XG4gICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgIGkuc2hvd1Rhc2soZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKG8pIHtcbiAgICAgICAgaS5zaG93VGFzayhlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdfQ==
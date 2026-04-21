"use strict";
cc._RF.push(module, '13760TQyKVBOb4ALItt7FRN', 'DailyTaskPushTrait');
// subpackages/l_dailyTaskPush/Scripts/DailyTaskPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var p = {
    pushHour: 20,
    opewaynum: "mbdailytask1",
    taskType: "mbdailytask01"
};
var DailyTaskPushTrait = /** @class */ (function (_super) {
    __extends(DailyTaskPushTrait, _super);
    function DailyTaskPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = p;
        _this._isPushLinkJump = false;
        _this._lastPushCheckTime = 0;
        return _this;
    }
    DailyTaskPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
        }
    };
    DailyTaskPushTrait.prototype.getConfig = function () {
        return this._config;
    };
    DailyTaskPushTrait.prototype.isBeforePushTime = function () {
        return new Date().getHours() < this._config.pushHour;
    };
    DailyTaskPushTrait.prototype.canSendPush = function () {
        return !!this.isBeforePushTime();
    };
    DailyTaskPushTrait.prototype.getTaskModel = function () {
        var t = mj.getClassByName("TaskModel");
        return null == t ? void 0 : t.getInstance();
    };
    DailyTaskPushTrait.prototype.isDailyTaskCompleted = function () {
        var t, e, i = this.getTaskModel();
        if (!i)
            return true;
        if (!i.isTaskOpen || !i.isTaskOpen())
            return false;
        var a = i.getCurrentStage(), n = (i.getTaskData().listTaskType || []).length, o = i.getStageData(a), r = (null === (t = null == o ? void 0 : o.taskCompleteList) || void 0 === t ? void 0 : t.length) || 0;
        return ((null === (e = i.localData) || void 0 === e ? void 0 : e.taskStage) || 1) >= 3 && r >= n;
    };
    DailyTaskPushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var i = PushManager_1.default.getInstance().getOpenAppOpeway();
        i && i.opewaynum === this._config.opewaynum && (this._isPushLinkJump = true);
        e();
    };
    DailyTaskPushTrait.prototype.onHallVw_onPopView = function (t, e) {
        var i;
        if (this._isPushLinkJump) {
            this._isPushLinkJump = false;
            var a = mj.getClassByName("TaskTrait");
            if (null === (i = null == a ? void 0 : a.getInstance()) || void 0 === i ? void 0 : i.eventEnabled) {
                this.showTaskMainUI(1, function (t) {
                    e({
                        isBreak: t
                    });
                });
                return;
            }
        }
        e();
    };
    DailyTaskPushTrait.prototype.onGameUI_onLoad = function (t, e) {
        var i;
        if (this._isPushLinkJump) {
            this._isPushLinkJump = false;
            var a = mj.getClassByName("TaskTrait");
            (null === (i = null == a ? void 0 : a.getInstance()) || void 0 === i ? void 0 : i.eventEnabled) && this.showTaskMainUI(2, function (t) {
                e({
                    isBreak: t
                });
            });
        }
        e();
    };
    DailyTaskPushTrait.prototype.showTaskMainUI = function (t, e) {
        ControllerManager_1.default.getInstance().pushViewByController("TaskController", {
            from: t
        });
        null == e || e(true);
    };
    DailyTaskPushTrait.prototype.onTaskModel_updateProg = function (t, e) {
        if (t.beforReturnVal) {
            var i = Date.now();
            if (Math.abs(i - this._lastPushCheckTime) < 2000)
                e();
            else {
                this._lastPushCheckTime = i;
                this.checkAndTriggerPush();
                e();
            }
        }
        else
            e();
    };
    DailyTaskPushTrait.prototype.checkAndTriggerPush = function () {
        if (this.isDailyTaskCompleted()) {
            this.removePush();
        }
        else {
            this.canSendPush() && this.sendPush();
        }
    };
    DailyTaskPushTrait.prototype.sendPush = function () {
        var t = this.getConfig(), e = PushManager_1.default.getInstance().getPushTimestamp(t.pushHour);
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: t.opewaynum,
            taskType: t.taskType,
            sendTime: e
        }, {
            keyNum: "daily"
        });
    };
    DailyTaskPushTrait.prototype.removePush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this.getConfig().opewaynum);
    };
    DailyTaskPushTrait.traitKey = "DailyTaskPush";
    __decorate([
        mj.traitEvent("DailyTaskPush_showTaskVw")
    ], DailyTaskPushTrait.prototype, "showTaskMainUI", null);
    DailyTaskPushTrait = __decorate([
        mj.trait,
        mj.class("DailyTaskPushTrait")
    ], DailyTaskPushTrait);
    return DailyTaskPushTrait;
}(Trait_1.default));
exports.default = DailyTaskPushTrait;

cc._RF.pop();
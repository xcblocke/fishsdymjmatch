"use strict";
cc._RF.push(module, '058c0x+0PpLxbuGeVX3Cg+n', 'TravelDaysPushTrait');
// subpackages/l_travelDaysPush/Scripts/TravelDaysPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var c = {
    remainDaysThreshold: 4,
    pushHour: 14,
    opewaynum: "mblxdays1",
    taskType: "mblxdays01"
};
var TravelDaysPushTrait = /** @class */ (function (_super) {
    __extends(TravelDaysPushTrait, _super);
    function TravelDaysPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = Object.assign({}, c);
        _this._lastSession = -1;
        return _this;
    }
    TravelDaysPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
            void 0 !== this._traitData.remainDaysThreshold && (this._config.remainDaysThreshold = this._traitData.remainDaysThreshold);
        }
    };
    TravelDaysPushTrait.prototype.getConfig = function () {
        return this._config;
    };
    TravelDaysPushTrait.prototype.getTravelGameModel = function () {
        var t = mj.getClassByName("TravelGameModel");
        return null == t ? void 0 : t.getInstance();
    };
    TravelDaysPushTrait.prototype.isTravelActive = function () {
        var t, e = this.getTravelGameModel();
        return e && (null === (t = e.isSessionActive) || void 0 === t ? void 0 : t.call(e)) || false;
    };
    TravelDaysPushTrait.prototype.getCurrentSession = function () {
        var t, e = this.getTravelGameModel();
        return e && (null === (t = e.getCurSession) || void 0 === t ? void 0 : t.call(e)) || -1;
    };
    TravelDaysPushTrait.prototype.getRemainDays = function () {
        var t, e = this.getTravelGameModel();
        if (!e)
            return -1;
        var r = null === (t = e.getRemainTime) || void 0 === t ? void 0 : t.call(e);
        return void 0 === r || r < 0 ? -1 : Math.ceil(r / 86400);
    };
    TravelDaysPushTrait.prototype.checkNewSession = function () {
        var t = this.getCurrentSession();
        if (t !== this._lastSession) {
            this._lastSession = t;
            return true;
        }
        return false;
    };
    TravelDaysPushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var r = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (r && r.opewaynum === this._config.opewaynum) {
            if (!this.isTravelActive()) {
                e();
                return;
            }
            JumpManager_1.default.getInstance().jumpToTravelMap();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    TravelDaysPushTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.checkAndTriggerPush();
        e();
    };
    TravelDaysPushTrait.prototype.checkAndTriggerPush = function () {
        if (this.checkNewSession())
            this.removePush();
        else if (this.isTravelActive()) {
            var t = this.getRemainDays();
            if (!(t < 0)) {
                t <= this.getConfig().remainDaysThreshold && this.sendPush();
            }
        }
    };
    TravelDaysPushTrait.prototype.sendPush = function () {
        var t = this.getConfig(), e = PushManager_1.default.getInstance().getPushTimestamp(t.pushHour);
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: t.opewaynum,
            taskType: t.taskType,
            sendTime: e
        });
    };
    TravelDaysPushTrait.prototype.removePush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this.getConfig().opewaynum);
    };
    TravelDaysPushTrait.traitKey = "TravelDaysPush";
    TravelDaysPushTrait = __decorate([
        mj.trait,
        mj.class("TravelDaysPushTrait")
    ], TravelDaysPushTrait);
    return TravelDaysPushTrait;
}(Trait_1.default));
exports.default = TravelDaysPushTrait;

cc._RF.pop();
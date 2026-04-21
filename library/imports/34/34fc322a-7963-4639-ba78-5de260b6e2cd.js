"use strict";
cc._RF.push(module, '34fc3IqeWNGObp4XeJgtuLN', 'TravelMedalPushTrait');
// subpackages/l_travelMedalPush/Scripts/TravelMedalPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var TravelMedalPushTrait = /** @class */ (function (_super) {
    __extends(TravelMedalPushTrait, _super);
    function TravelMedalPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            pushHour: 19,
            opewaynum: "mblxmedal1",
            taskType: "mblxmedal01",
            medalTriggers: [{
                    medalLevel: 7,
                    triggerLevels: [4]
                }, {
                    medalLevel: 41,
                    triggerLevels: [22, 35]
                }, {
                    medalLevel: 91,
                    triggerLevels: [65, 84]
                }]
        };
        return _this;
    }
    TravelMedalPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
            void 0 !== this._traitData.medalTriggers && (this._config.medalTriggers = this._traitData.medalTriggers);
        }
    };
    TravelMedalPushTrait.prototype.getTravelGameData = function () {
        var e = mj.getClassByName("TravelGameData");
        return null == e ? void 0 : e.getInstance();
    };
    TravelMedalPushTrait.prototype.getCurrentLevel = function () {
        var e, t = this.getTravelGameData();
        return (null === (e = null == t ? void 0 : t.getLevelId) || void 0 === e ? void 0 : e.call(t)) || 0;
    };
    TravelMedalPushTrait.prototype.getPushTimestamp = function () {
        var e = new Date(), t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), this._config.pushHour, 0, 0, 0);
        e.getTime() > t.getTime() && t.setDate(t.getDate() + 1);
        return t.getTime();
    };
    TravelMedalPushTrait.prototype.checkTriggerLevel = function (e) {
        var t, r;
        try {
            for (var a = __values(this._config.medalTriggers), n = a.next(); !n.done; n = a.next()) {
                var i = n.value;
                if (i.triggerLevels.includes(e))
                    return i.medalLevel;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                n && !n.done && (r = a.return) && r.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return 0;
    };
    TravelMedalPushTrait.prototype.checkMedalLevel = function (e) {
        var t, r;
        try {
            for (var a = __values(this._config.medalTriggers), n = a.next(); !n.done; n = a.next()) {
                var i = n.value;
                if (i.medalLevel === e)
                    return i.medalLevel;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                n && !n.done && (r = a.return) && r.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return 0;
    };
    TravelMedalPushTrait.prototype.sendPush = function (e) {
        var t = this.getPushTimestamp();
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: this._config.opewaynum,
            taskType: this._config.taskType,
            sendTime: t
        }, {
            keyNum: e.toString()
        });
    };
    TravelMedalPushTrait.prototype.cancelPush = function () {
        PushManager_1.default.getInstance().sendGamePushRemoved(this._config.opewaynum);
    };
    TravelMedalPushTrait.prototype.onTLWinCtrl_viewShow = function (e, t) {
        if (this._config) {
            var r = this.getCurrentLevel() - 1;
            if (this.checkMedalLevel(r) > 0) {
                this.cancelPush();
                t();
            }
            else {
                var a = this.checkTriggerLevel(r);
                a > 0 && this.sendPush(a);
                t();
            }
        }
        else
            t();
    };
    TravelMedalPushTrait.prototype.onLoginM_enterGame = function (e, t) {
        var r = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (r && r.opewaynum === this._config.opewaynum) {
            if (!JumpManager_1.default.getInstance().jumpToTravelGame()) {
                t();
                return;
            }
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    TravelMedalPushTrait.traitKey = "TravelMedalPush";
    TravelMedalPushTrait = __decorate([
        mj.trait,
        mj.class("TravelMedalPushTrait")
    ], TravelMedalPushTrait);
    return TravelMedalPushTrait;
}(Trait_1.default));
exports.default = TravelMedalPushTrait;

cc._RF.pop();
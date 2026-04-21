"use strict";
cc._RF.push(module, '4d75fpaeTpFhpjq11KD4kEa', 'DailyChallengePushTrait');
// subpackages/l_dailyChallengePush/Scripts/DailyChallengePushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var DailyChallengePushTrait = /** @class */ (function (_super) {
    __extends(DailyChallengePushTrait, _super);
    function DailyChallengePushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pushHour = 21;
        _this._opewaynum = "mjdailytz1";
        _this._taskType = "mjdailytz01";
        _this._isDailyUnlocked = false;
        return _this;
    }
    DailyChallengePushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._taskType = this._traitData.StrategyCode);
        }
    };
    DailyChallengePushTrait.prototype.getDailyModel = function () {
        var t = mj.getClassByName("DailyModel");
        return null == t ? void 0 : t.getInstance();
    };
    DailyChallengePushTrait.prototype.getDailyTrait = function () {
        var t = mj.getClassByName("DailyTrait");
        return null == t ? void 0 : t.getInstance();
    };
    DailyChallengePushTrait.prototype.isDailyChallengeUnlocked = function () {
        var t, e;
        return null !== (e = null === (t = this.getDailyModel()) || void 0 === t ? void 0 : t.isOpen()) && void 0 !== e && e;
    };
    DailyChallengePushTrait.prototype.isTodayChallengeCompleted = function () {
        var t = this.getDailyModel();
        if (!t)
            return true;
        var e = t.getToday();
        return !((null == e ? void 0 : e.id) && (null == e ? void 0 : e.day)) || 3 === t.getDayStatus(e.id, e.day);
    };
    DailyChallengePushTrait.prototype.canSendPush = function () {
        if (!this.isDailyChallengeUnlocked())
            return false;
        this._isDailyUnlocked = true;
        return !(new Date().getHours() >= this._pushHour || this.isTodayChallengeCompleted());
    };
    DailyChallengePushTrait.prototype.onPushMgr_init = function (t, e) {
        this._isDailyUnlocked = this.isDailyChallengeUnlocked();
        this.tryTriggerPush();
        e();
    };
    DailyChallengePushTrait.prototype.onHallVw_updateUI = function (t, e) {
        this._isDailyUnlocked || this.tryTriggerPush();
        e();
    };
    DailyChallengePushTrait.prototype.onWinVw_showWinVw = function (t, e) {
        if (this._isDailyUnlocked)
            e();
        else {
            var i = this.getDailyTrait();
            if (null == i ? void 0 : i.isOpenDaily()) {
                this._isDailyUnlocked = true;
                this.tryTriggerPush();
            }
            e();
        }
    };
    DailyChallengePushTrait.prototype.onDCWinVw_showWinVw = function (t, e) {
        this.isTodayChallengeCompleted() && PushManager_1.default.getInstance().sendGamePushRemoved(this._opewaynum);
        e();
    };
    DailyChallengePushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var i = PushManager_1.default.getInstance().getOpenAppOpeway();
        if ((null == i ? void 0 : i.opewaynum) !== this._opewaynum)
            e();
        else {
            JumpManager_1.default.getInstance().jumpToDailyChallenge();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
    };
    DailyChallengePushTrait.prototype.tryTriggerPush = function () {
        if (this.canSendPush()) {
            var t = PushManager_1.default.getInstance().getPushTimestamp(this._pushHour);
            PushManager_1.default.getInstance().sendGamePush({
                opewaynum: this._opewaynum,
                taskType: this._taskType,
                sendTime: t
            }, {
                keyNum: "today"
            });
        }
    };
    DailyChallengePushTrait.traitKey = "DailyChallengePush";
    DailyChallengePushTrait = __decorate([
        mj.trait,
        mj.class("DailyChallengePushTrait")
    ], DailyChallengePushTrait);
    return DailyChallengePushTrait;
}(Trait_1.default));
exports.default = DailyChallengePushTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'a16e4Bo0GtAhoNUnUwxU+Gp', 'GoldRankPushTrait');
// subpackages/l_goldRankPush/Scripts/GoldRankPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var Config_1 = require("../../../Scripts/Config");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var c = {
    pushHour: 17,
    opewaynum: "mbgqgoldrank1",
    taskType: "mbgqgoldrank01"
};
var GoldRankPushTrait = /** @class */ (function (_super) {
    __extends(GoldRankPushTrait, _super);
    function GoldRankPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = c;
        return _this;
    }
    GoldRankPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
        }
    };
    GoldRankPushTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
        return _t;
    };
    GoldRankPushTrait.prototype.onGameHide = function () {
        this.checkAndTriggerPush();
    };
    GoldRankPushTrait.prototype.getConfig = function () {
        return this._config;
    };
    GoldRankPushTrait.prototype.getRankModel = function () {
        var t = mj.getClassByName("RankModel");
        return null == t ? void 0 : t.getInstance();
    };
    GoldRankPushTrait.prototype.hasParticipatedInActivity = function () {
        var t = this.getRankModel();
        return !!t && !(!t.hasOpeningActivity || !t.hasOpeningActivity());
    };
    GoldRankPushTrait.prototype.isActivityEnded = function () {
        var t = this.getRankModel();
        return !t || !!t.isNowActivityFinished && t.isNowActivityFinished();
    };
    GoldRankPushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var i = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (i && i.opewaynum === this._config.opewaynum) {
            JumpManager_1.default.getInstance().jumpToGame();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    GoldRankPushTrait.prototype.onPushMgr_init = function (t, e) {
        this.checkAndTriggerPush();
        e();
    };
    GoldRankPushTrait.prototype.checkAndTriggerPush = function () {
        this.isActivityEnded() || this.hasParticipatedInActivity() && this.sendPush();
    };
    GoldRankPushTrait.prototype.sendPush = function () {
        var t = this.getConfig(), e = PushManager_1.default.getInstance().getPushTimestamp(t.pushHour);
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: t.opewaynum,
            taskType: t.taskType,
            sendTime: e
        }, {
            keyNum: "participated"
        });
    };
    GoldRankPushTrait.traitKey = "GoldRankPush";
    GoldRankPushTrait = __decorate([
        mj.trait,
        mj.class("GoldRankPushTrait")
    ], GoldRankPushTrait);
    return GoldRankPushTrait;
}(Trait_1.default));
exports.default = GoldRankPushTrait;

cc._RF.pop();
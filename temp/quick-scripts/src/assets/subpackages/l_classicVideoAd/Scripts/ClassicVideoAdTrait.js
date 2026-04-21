"use strict";
cc._RF.push(module, '09c78S/xl5FyZKB9XCDR4f1', 'ClassicVideoAdTrait');
// subpackages/l_classicVideoAd/Scripts/ClassicVideoAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var Config_1 = require("../../../Scripts/Config");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var ClassicVideoAdTrait = /** @class */ (function (_super) {
    __extends(ClassicVideoAdTrait, _super);
    function ClassicVideoAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._playDuration = 300;
        _this._retryStartTime = 120;
        return _this;
    }
    ClassicVideoAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData;
        this._playDuration = (null == e ? void 0 : e.playDuration) || 300;
        this._retryStartTime = (null == e ? void 0 : e.retryStartTime) || 120;
        mj.EventManager.on(Config_1.EVT_TIME_STAT_UPDATE, this.onTimeUpdate, this);
        void 0 !== this.localData.remainingTime && null !== this.localData.remainingTime && "" !== this.localData.remainingTime || (this.localData.remainingTime = this._playDuration);
        void 0 !== this.localData.waitingForNextBatch && null !== this.localData.waitingForNextBatch && "" !== this.localData.waitingForNextBatch || (this.localData.waitingForNextBatch = false);
        void 0 !== this.localData.uiShownAndPending && null !== this.localData.uiShownAndPending && "" !== this.localData.uiShownAndPending || (this.localData.uiShownAndPending = false);
        this.localData.remainingTime = this._playDuration;
        this.localData.waitingForNextBatch = false;
    };
    ClassicVideoAdTrait.prototype.isClassicMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic;
    };
    ClassicVideoAdTrait.prototype.resetTimer = function (t) {
        this.localData.remainingTime = t;
        this.localData.waitingForNextBatch = false;
        this.localData = this.localData;
    };
    ClassicVideoAdTrait.prototype.onTimeUpdate = function (t) {
        if (this.isClassicMode() && !this.localData.waitingForNextBatch) {
            this.localData.remainingTime -= t;
            this.localData = this.localData;
            if (this.localData.remainingTime <= 0) {
                this.localData.waitingForNextBatch = true;
                this.localData = this.localData;
            }
        }
    };
    ClassicVideoAdTrait.prototype.showRewardButton = function () {
        this.localData.uiShownAndPending = true;
        ControllerManager_1.default.getInstance().pushViewByController("ClassicVideoAdController", {
            bgStyle: {
                blackOpacity: 200
            }
        });
    };
    ClassicVideoAdTrait.prototype.onClickWatch = function () {
        var t = this;
        this.localData.uiShownAndPending = false;
        DGameAdShowStage_1.DotGameAdShowStage.dot(true, "classicInGame");
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.InGameMotivation_GameContinue_Classic, {
            onSuccess: function () {
                t.resetTimer(t._playDuration);
            },
            onFailed: function () {
                t.resetTimer(t._playDuration);
            }
        }, "classic_in_game", {
            adTimeType: "classicInGameAd"
        });
    };
    ClassicVideoAdTrait.prototype.onClickRefuse = function () {
        this.localData.uiShownAndPending = false;
        this.resetTimer(this._playDuration);
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.ClassicFail,
            skipBeforeFailEffect: true
        });
    };
    ClassicVideoAdTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        e();
        this.isClassicMode();
    };
    ClassicVideoAdTrait.prototype.onEntAniFiBhv_start = function (t, e) {
        if (this.isClassicMode() && this.localData.uiShownAndPending) {
            this.localData.uiShownAndPending = false;
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.ClassicFail,
                skipBeforeFailEffect: true,
                skipInterAd: true
            });
        }
        e();
    };
    ClassicVideoAdTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        e();
        this.isClassicMode();
    };
    ClassicVideoAdTrait.prototype.onGsListener_onNewGame = function (t, e) {
        e();
        this.isClassicMode() && this.resetTimer(this._playDuration);
    };
    ClassicVideoAdTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        e();
        this.isClassicMode() && this.resetTimer(this._playDuration);
    };
    ClassicVideoAdTrait.prototype.onChgBatchAnimBhv_finish = function (t, e) {
        if (this.isClassicMode()) {
            if (this.localData.waitingForNextBatch) {
                this.localData.waitingForNextBatch = false;
                this.localData = this.localData;
                var i = AdManager_1.default.getInstance().checkVideoAdIsReady(), a = CommonUtils_1.isNetworkAvailable();
                if (!i && !a) {
                    this.resetTimer(this._retryStartTime);
                    e();
                    return;
                }
                this.showRewardButton();
            }
            e();
        }
        else
            e();
    };
    ClassicVideoAdTrait.traitKey = "ClassicVideoAd";
    ClassicVideoAdTrait = __decorate([
        mj.trait,
        mj.class("ClassicVideoAdTrait")
    ], ClassicVideoAdTrait);
    return ClassicVideoAdTrait;
}(Trait_1.default));
exports.default = ClassicVideoAdTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '206a3Rd8ilA1beMTW3YY8Pr', 'ClassicVideo61Trait');
// subpackages/l_classicVideoAd/Scripts/ClassicVideo61Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var Config_1 = require("../../../Scripts/Config");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var ClassicVideo61Trait = /** @class */ (function (_super) {
    __extends(ClassicVideo61Trait, _super);
    function ClassicVideo61Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._playDuration = 150;
        _this._retryStartTime = 60;
        _this._maxCloseCount = 1;
        _this._initialMultiplier = 1;
        _this._multiplierIncrement = 0.2;
        _this._maxMultiplier = 10;
        return _this;
    }
    ClassicVideo61Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData;
        this._playDuration = (null == e ? void 0 : e.playDuration) || 150;
        this._retryStartTime = (null == e ? void 0 : e.retryStartTime) || 60;
        this._maxCloseCount = (null == e ? void 0 : e.maxCloseCount) || 0;
        this._initialMultiplier = (null == e ? void 0 : e.initialMultiplier) || 1.2;
        this._multiplierIncrement = (null == e ? void 0 : e.multiplierIncrement) || 0.2;
        this._maxMultiplier = (null == e ? void 0 : e.maxMultiplier) || 10;
        mj.EventManager.on(Config_1.EVT_TIME_STAT_UPDATE, this.onTimeUpdate, this);
        this.initializeLocalData();
        this.localData.remainingTime = this._playDuration;
        this.localData.waitingForNextBatch = false;
    };
    ClassicVideo61Trait.prototype.initializeLocalData = function () {
        void 0 !== this.localData.remainingTime && null !== this.localData.remainingTime && "" !== this.localData.remainingTime || (this.localData.remainingTime = this._playDuration);
        void 0 !== this.localData.waitingForNextBatch && null !== this.localData.waitingForNextBatch && "" !== this.localData.waitingForNextBatch || (this.localData.waitingForNextBatch = false);
        void 0 !== this.localData.closeCountInGame && null !== this.localData.closeCountInGame && "" !== this.localData.closeCountInGame || (this.localData.closeCountInGame = this._maxCloseCount);
        void 0 !== this.localData.currentMultiplier && null !== this.localData.currentMultiplier && "" !== this.localData.currentMultiplier || (this.localData.currentMultiplier = this._initialMultiplier);
        void 0 !== this.localData.batchBreakComboCount && null !== this.localData.batchBreakComboCount && "" !== this.localData.batchBreakComboCount || (this.localData.batchBreakComboCount = 0);
        void 0 !== this.localData.uiShownAndPending && null !== this.localData.uiShownAndPending && "" !== this.localData.uiShownAndPending || (this.localData.uiShownAndPending = false);
    };
    ClassicVideo61Trait.prototype.isClassicMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic;
    };
    ClassicVideo61Trait.prototype.resetTimer = function (t) {
        this.localData.remainingTime = t;
        this.localData.waitingForNextBatch = false;
    };
    ClassicVideo61Trait.prototype.onTimeUpdate = function (t) {
        if (this.isClassicMode() && !this.localData.waitingForNextBatch) {
            this.localData.remainingTime -= t;
            this.localData.remainingTime <= 0 && (this.localData.waitingForNextBatch = true);
        }
    };
    ClassicVideo61Trait.prototype.showRewardButton = function () {
        this.localData.uiShownAndPending = true;
        ControllerManager_1.default.getInstance().pushViewByController("ClassicVideoAdController", {
            bgStyle: {
                blackOpacity: 200
            }
        });
    };
    ClassicVideo61Trait.prototype.onClickWatch = function () {
        var t = this;
        this.localData.uiShownAndPending = false;
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "classicInGame61");
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.InGameMotivation_GameContinue_Classic, {
            onSuccess: function () {
                t.onVideoAdSuccess();
                t.localData.batchBreakComboCount = 0;
            },
            onFailed: function () {
                t.resetTimer(t._playDuration);
                t.localData.batchBreakComboCount = 0;
            }
        }, "classic_in_game_61", {
            adTimeType: "classicInGameAd61"
        });
    };
    ClassicVideo61Trait.prototype.onVideoAdSuccess = function () {
        this.localData.batchBreakComboCount <= 1 && (this.localData.currentMultiplier = Math.min(this.localData.currentMultiplier + this._multiplierIncrement, this._maxMultiplier));
        this.resetTimer(this._playDuration);
    };
    ClassicVideo61Trait.prototype.onClickRefuse = function () {
        this.localData.uiShownAndPending = false;
        this.localData.batchBreakComboCount = 0;
        if (this.localData.closeCountInGame > 0) {
            this.localData.closeCountInGame--;
            this.resetTimer(this._playDuration);
        }
        else {
            this.resetTimer(this._playDuration);
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.ClassicFail,
                skipBeforeFailEffect: true
            });
        }
    };
    ClassicVideo61Trait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        e();
        this.isClassicMode();
    };
    ClassicVideo61Trait.prototype.onEntAniFiBhv_start = function (t, e) {
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
    ClassicVideo61Trait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        e();
        this.isClassicMode();
    };
    ClassicVideo61Trait.prototype.onGsListener_onNewGame = function (t, e) {
        e();
        if (this.isClassicMode()) {
            this.localData.remainingTime = this._playDuration;
            this.localData.waitingForNextBatch = false;
            this.localData.closeCountInGame = this._maxCloseCount;
            this.localData.currentMultiplier = this._initialMultiplier;
            this.localData.batchBreakComboCount = 0;
        }
    };
    ClassicVideo61Trait.prototype.onGsListener_onReplayGame = function (t, e) {
        if (this.isClassicMode()) {
            this.localData.remainingTime = this._playDuration;
            this.localData.waitingForNextBatch = false;
            this.localData.closeCountInGame = this._maxCloseCount;
            this.localData.currentMultiplier = this._initialMultiplier;
            this.localData.batchBreakComboCount = 0;
        }
        e();
    };
    ClassicVideo61Trait.prototype.onChgBatchAnimBhv_finish = function (t, e) {
        if (this.isClassicMode()) {
            if (this.localData.waitingForNextBatch) {
                this.localData.waitingForNextBatch = false;
                this.showRewardButton();
            }
            else
                this.localData.batchBreakComboCount = 0;
            e();
        }
        else
            e();
    };
    ClassicVideo61Trait.prototype.onComboMdf_breakCombo = function (t, e) {
        e();
        this.isClassicMode() && this.localData.batchBreakComboCount++;
    };
    ClassicVideo61Trait.prototype.onScoreMod_applyMultiplier = function (t, e) {
        var i;
        if (this.isClassicMode()) {
            if (this.localData.currentMultiplier > 1) {
                var a = (null === (i = t.args) || void 0 === i ? void 0 : i[0]) || 0;
                e({
                    returnVal: Math.floor(a * this.localData.currentMultiplier)
                });
            }
            else
                e();
        }
        else
            e();
    };
    ClassicVideo61Trait.prototype.onClcVideoAdVw_load = function (t, e) {
        e();
        if (this.isClassicMode()) {
            var i = t.ins;
            i && "function" == typeof i.updateDisplay && i.updateDisplay({
                hasCloseCount: this.localData.closeCountInGame > 0,
                currentMultiplier: this.localData.currentMultiplier + this._multiplierIncrement,
                showSpecialTitle: this.localData.batchBreakComboCount <= 1
            });
        }
    };
    ClassicVideo61Trait.prototype.onClcVideoAdVw_clickWatch = function (t, e) {
        if (this.isClassicMode()) {
            ControllerManager_1.default.getInstance().closeViewByName("ClassicVideoAdController");
            this.onClickWatch();
            e();
        }
        else
            e();
    };
    ClassicVideo61Trait.prototype.onClcVideoAdVw_clickRefuse = function (t, e) {
        if (this.isClassicMode()) {
            ControllerManager_1.default.getInstance().closeViewByName("ClassicVideoAdController");
            this.onClickRefuse();
            e();
        }
        else
            e();
    };
    ClassicVideo61Trait.traitKey = "ClassicVideo61";
    ClassicVideo61Trait = __decorate([
        mj.trait,
        mj.class("ClassicVideo61Trait")
    ], ClassicVideo61Trait);
    return ClassicVideo61Trait;
}(Trait_1.default));
exports.default = ClassicVideo61Trait;

cc._RF.pop();
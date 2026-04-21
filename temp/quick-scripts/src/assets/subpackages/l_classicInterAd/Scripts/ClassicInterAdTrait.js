"use strict";
cc._RF.push(module, 'b5f691AiDdJoaP21cUrmMGj', 'ClassicInterAdTrait');
// subpackages/l_classicInterAd/Scripts/ClassicInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var Config_1 = require("../../../Scripts/Config");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var ClassicInterAdTrait = /** @class */ (function (_super) {
    __extends(ClassicInterAdTrait, _super);
    function ClassicInterAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._playDuration = 300;
        _this._retryStartTime = 120;
        return _this;
    }
    ClassicInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this.traitData;
        this._playDuration = (null == e ? void 0 : e.playDuration) || 300;
        this._retryStartTime = (null == e ? void 0 : e.retryStartTime) || 120;
        mj.EventManager.on(Config_1.EVT_TIME_STAT_UPDATE, this.onTimeUpdate, this);
        this.localData.remainingTime = this._playDuration;
        this.localData.waitingForNextBatch = false;
    };
    ClassicInterAdTrait.prototype.isClassicMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic;
    };
    ClassicInterAdTrait.prototype.resetTimer = function (t) {
        this.localData.remainingTime = t;
        this.localData.waitingForNextBatch = false;
    };
    ClassicInterAdTrait.prototype.onTimeUpdate = function (t) {
        if (this.isClassicMode() && !this.localData.waitingForNextBatch) {
            this.localData.remainingTime -= t;
            if (this.localData.remainingTime <= 0) {
                this.localData.waitingForNextBatch = true;
                this.localData = this.localData;
            }
        }
    };
    ClassicInterAdTrait.prototype.playAd = function () {
        var t = this;
        this._playDuration, this.localData.remainingTime;
        DGameAdShowStage_1.DotGameAdShowStage.dot(true, "endlessInGame");
        AdManager_1.default.getInstance().playInterAd(DGameAdShow_1.EAdPosition.InGameInsertScreen_PauseContinue, {
            onSuccess: function () {
                t.resetTimer(t._playDuration);
            },
            onFailed: function () {
                t.resetTimer(t._playDuration);
            }
        }, "endless_in_game", {
            adTimeType: "endlessInGameAd"
        });
    };
    ClassicInterAdTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        e();
        this.isClassicMode();
    };
    ClassicInterAdTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        e();
        this.isClassicMode();
    };
    ClassicInterAdTrait.prototype.onGsListener_onNewGame = function (t, e) {
        e();
        this.isClassicMode() && this.resetTimer(this._playDuration);
    };
    ClassicInterAdTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        e();
        this.isClassicMode() && this.resetTimer(this._playDuration);
    };
    ClassicInterAdTrait.prototype.onChgBatchAnimBhv_finish = function (t, e) {
        if (this.isClassicMode()) {
            if (this.localData.waitingForNextBatch) {
                this.localData.waitingForNextBatch = false;
                this.localData = this.localData;
                var i = AdManager_1.default.getInstance().checkInterAdIsReady(), a = CommonUtils_1.isNetworkAvailable();
                if (!i && !a) {
                    this.resetTimer(this._retryStartTime);
                    e();
                    return;
                }
                this.playAd();
            }
            e();
        }
        else
            e();
    };
    ClassicInterAdTrait.traitKey = "ClassicInterAd";
    ClassicInterAdTrait = __decorate([
        mj.trait,
        mj.class("ClassicInterAdTrait")
    ], ClassicInterAdTrait);
    return ClassicInterAdTrait;
}(Trait_1.default));
exports.default = ClassicInterAdTrait;

cc._RF.pop();
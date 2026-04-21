"use strict";
cc._RF.push(module, '8b74fSiKNtFUa8RUpsU7jFR', 'BannerLimitTrait');
// subpackages/l_bannerLimit/Scripts/BannerLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var BannerLimitTrait = /** @class */ (function (_super) {
    __extends(BannerLimitTrait, _super);
    function BannerLimitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BannerLimitTrait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._config = {
            maxGameCount: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.maxGameCount) && void 0 !== r ? r : 15,
            resetHour: null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.resetHour) && void 0 !== i ? i : 5
        };
        this.isLocalEmpty(this.localData.cycleStartTime) && (this.localData.cycleStartTime = 0);
        this.isLocalEmpty(this.localData.gameEndCount) && (this.localData.gameEndCount = 0);
        this.checkAndResetCycle();
    };
    BannerLimitTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    BannerLimitTrait.prototype.getLogicCycleStart = function (t) {
        var e = new Date(t);
        e.getHours() < this._config.resetHour && e.setDate(e.getDate() - 1);
        e.setHours(this._config.resetHour, 0, 0, 0);
        return e.getTime();
    };
    BannerLimitTrait.prototype.checkAndResetCycle = function () {
        var t = Date.now(), e = this.getLogicCycleStart(t);
        if (e !== this.localData.cycleStartTime) {
            this.localData.cycleStartTime = e;
            this.localData.gameEndCount = 0;
            return true;
        }
        return false;
    };
    BannerLimitTrait.prototype.isLimitReached = function () {
        return this.localData.gameEndCount >= this._config.maxGameCount;
    };
    BannerLimitTrait.prototype.onDGameEnd_adjust = function (t, e) {
        this.checkAndResetCycle();
        this.localData.gameEndCount += 1;
        this.localData.gameEndCount === this._config.maxGameCount && AdManager_1.default.getInstance().hideBanner();
        e();
    };
    BannerLimitTrait.prototype.onAdMgr_showBanner = function (t, e) {
        this.checkAndResetCycle();
        if (this.isLimitReached()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    BannerLimitTrait.traitKey = "BannerLimit";
    BannerLimitTrait = __decorate([
        mj.trait,
        mj.class("BannerLimitTrait")
    ], BannerLimitTrait);
    return BannerLimitTrait;
}(Trait_1.default));
exports.default = BannerLimitTrait;

cc._RF.pop();
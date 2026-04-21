"use strict";
cc._RF.push(module, '063cdeEtXRCc42F/TA0M6E6', 'FirstInterstitialTimingTrait');
// subpackages/l_firstInterTiming/Scripts/FirstInterstitialTimingTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FirstInterstitialTimingTrait = /** @class */ (function (_super) {
    __extends(FirstInterstitialTimingTrait, _super);
    function FirstInterstitialTimingTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mode = 1;
        _this._levelThreshold = 11;
        _this._timeThreshold = 21;
        return _this;
    }
    FirstInterstitialTimingTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    FirstInterstitialTimingTrait.prototype.onLoad = function () {
        var e, r, i;
        _super.prototype.onLoad.call(this);
        this.isLocalEmpty(this.localData.hasPlayedFirstInter) && (this.localData.hasPlayedFirstInter = false);
        this._mode = void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.mode) ? this._traitData.mode : 1;
        this._levelThreshold = void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.levelThreshold) ? this._traitData.levelThreshold : 11;
        this._timeThreshold = void 0 !== (null === (i = this._traitData) || void 0 === i ? void 0 : i.timeThreshold) ? this._traitData.timeThreshold : 21;
        this._mode;
    };
    FirstInterstitialTimingTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.localData.hasPlayedFirstInter)
                e();
            else if (this.checkConditions())
                e();
            else {
                this.getCurrentLevel(), this.getTotalPlayTimeMinutes();
                e({
                    returnVal: false,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
        }
        else
            e();
    };
    FirstInterstitialTimingTrait.prototype.onAdMgr_interAdClose = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.localData.hasPlayedFirstInter || (this.localData.hasPlayedFirstInter = true);
            e();
        }
        else
            e();
    };
    FirstInterstitialTimingTrait.prototype.checkConditions = function () {
        var t = this.getCurrentLevel(), e = this.getTotalPlayTimeMinutes(), r = t >= this._levelThreshold, i = e >= this._timeThreshold;
        return 1 === this._mode ? r && i : r || i;
    };
    FirstInterstitialTimingTrait.prototype.getCurrentLevel = function () {
        var t = UserModel_1.default.getInstance().normalData;
        return t && t.getCurrentLevelId ? t.getCurrentLevelId() : 0;
    };
    FirstInterstitialTimingTrait.prototype.getTotalPlayTimeMinutes = function () {
        return UserModel_1.default.getInstance().getAppUseSecondsTime() / 60;
    };
    FirstInterstitialTimingTrait.prototype.getHasPlayedFirstInter = function () {
        return this.localData.hasPlayedFirstInter || false;
    };
    FirstInterstitialTimingTrait.traitKey = "FirstInterstitialTiming";
    FirstInterstitialTimingTrait = __decorate([
        mj.trait,
        mj.class("FirstInterstitialTimingTrait")
    ], FirstInterstitialTimingTrait);
    return FirstInterstitialTimingTrait;
}(Trait_1.default));
exports.default = FirstInterstitialTimingTrait;

cc._RF.pop();
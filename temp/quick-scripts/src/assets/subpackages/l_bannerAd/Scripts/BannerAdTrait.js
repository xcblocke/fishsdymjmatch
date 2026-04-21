"use strict";
cc._RF.push(module, 'bb106e/cPJASItJU0QNEDV4', 'BannerAdTrait');
// subpackages/l_bannerAd/Scripts/BannerAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var BannerAdTrait = /** @class */ (function (_super) {
    __extends(BannerAdTrait, _super);
    function BannerAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInGamePlaying = false;
        _this._isNewVersion = false;
        _this._isInBoard = false;
        _this._hideBannerCount = 0;
        return _this;
    }
    BannerAdTrait.prototype.onLoad = function () {
        var t, n;
        _super.prototype.onLoad.call(this);
        this._isNewVersion = null !== (n = null === (t = this._traitData) || void 0 === t ? void 0 : t.isNewVersion) && void 0 !== n && n;
        this._isNewVersion;
    };
    BannerAdTrait.prototype.onMainGameCtrl_vwLoad = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion) {
                this._isInBoard = true;
                AdManager_1.default.getInstance().showBanner();
            }
            else {
                this.isInGamePlaying = true;
                AdManager_1.default.getInstance().showBanner();
            }
            t();
        }
        else
            t();
    };
    BannerAdTrait.prototype.onMainGameCtrl_uiDes = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion) {
                this._isInBoard = false;
                this._hideBannerCount > 0 && (this._hideBannerCount = 0);
            }
            else
                this.isInGamePlaying = false;
            AdManager_1.default.getInstance().hideBanner();
            t();
        }
        else
            t();
    };
    BannerAdTrait.prototype.onWinVw_showWinVw = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = false;
                AdManager_1.default.getInstance().hideBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onWinVw_destroy = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = true;
                AdManager_1.default.getInstance().showBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onFailVw_show = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = false;
                AdManager_1.default.getInstance().hideBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onFailVw_destroy = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = true;
                AdManager_1.default.getInstance().showBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onTLWinVw_showTLWinVw = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = false;
                AdManager_1.default.getInstance().hideBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onTLWinVw_destroy = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = true;
                AdManager_1.default.getInstance().showBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onDCWinVw_showWinVw = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = false;
                AdManager_1.default.getInstance().hideBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onDailyView_onPlayClick = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying = true;
                AdManager_1.default.getInstance().showBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onRankBonusVw_show = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                AdManager_1.default.getInstance().hideBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onRankBonusVw_destroy = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                AdManager_1.default.getInstance().showBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onTaskView_initUI = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                AdManager_1.default.getInstance().hideBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onTaskView_onDestroy = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion)
                t();
            else {
                this.isInGamePlaying && AdManager_1.default.getInstance().showBanner();
                t();
            }
        }
        else
            t();
    };
    BannerAdTrait.prototype.onBannerAd_NeedHideBanner = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion) {
                if (this._isInBoard) {
                    this._hideBannerCount++;
                    AdManager_1.default.getInstance().hideBanner();
                    t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    BannerAdTrait.prototype.onBannerAd_NeedShowBanner = function (e, t) {
        var n = this;
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._isNewVersion) {
                if (this._isInBoard) {
                    this._hideBannerCount > 0 && this._hideBannerCount--;
                    0 === this._hideBannerCount && this._isInBoard && setTimeout(function () {
                        0 === n._hideBannerCount && n._isInBoard && AdManager_1.default.getInstance().showBanner();
                    }, 500);
                    t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    BannerAdTrait.traitKey = "BannerAd";
    BannerAdTrait = __decorate([
        mj.trait,
        mj.class("BannerAdTrait")
    ], BannerAdTrait);
    return BannerAdTrait;
}(Trait_1.default));
exports.default = BannerAdTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '4504cI2GIpF36ZG64NBc1GD', 'BannerDelayTrait');
// subpackages/l_bannerDelay/Scripts/BannerDelayTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var BannerDelayTrait = /** @class */ (function (_super) {
    __extends(BannerDelayTrait, _super);
    function BannerDelayTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._delayTimeDone = false;
        _this._shouldShowBanner = false;
        return _this;
    }
    BannerDelayTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._config = {
            delayTime: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.delayTime) && void 0 !== r ? r : 10
        };
        this.startDelayTimer();
    };
    BannerDelayTrait.prototype.startDelayTimer = function () {
        var t = this, e = 1000 * this._config.delayTime;
        setTimeout(function () {
            t._delayTimeDone = true;
            t._shouldShowBanner && AdManager_1.default.getInstance().showBanner();
        }, e);
    };
    BannerDelayTrait.prototype.onAdMgr_showBanner = function (t, e) {
        this._shouldShowBanner = true;
        if (this._delayTimeDone) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    BannerDelayTrait.prototype.onAdMgr_hideBanner = function (t, e) {
        this._shouldShowBanner = false;
        e();
    };
    BannerDelayTrait.traitKey = "BannerDelay";
    BannerDelayTrait = __decorate([
        mj.trait,
        mj.class("BannerDelayTrait")
    ], BannerDelayTrait);
    return BannerDelayTrait;
}(Trait_1.default));
exports.default = BannerDelayTrait;

cc._RF.pop();
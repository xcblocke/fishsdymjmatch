"use strict";
cc._RF.push(module, '33dd6EENtZNQIn9ZMvc+iqA', 'HardLevelBannerView');
// subpackages/r_hardLevelBanner/Scripts/HardLevelBannerView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var HardLevelBannerView = /** @class */ (function (_super) {
    __extends(HardLevelBannerView, _super);
    function HardLevelBannerView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._bannerBg = null;
        _this._lblText = null;
        _this._duration = 2.5;
        return _this;
    }
    HardLevelBannerView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.node.opacity = 0;
    };
    HardLevelBannerView.prototype.showBanner = function (e, t, n) {
        if (n === void 0) { n = 2.5; }
        this._duration = n;
        this.setBannerText(e, t);
        this.playEnterAnimation();
    };
    HardLevelBannerView.prototype.setBannerText = function (e, t) {
        var n = "<color=#FF5F40>" + t + "%</color>", r = I18NStrings_1.default.get(e);
        r = r ? "<color=#FFD987>" + r + "</color>" : this.getDefaultText();
        r = I18NStrings_1.default.stringFormat(r, [n]);
        this._lblText.getComponent(cc.RichText).string = r;
    };
    HardLevelBannerView.prototype.getDefaultText = function () {
        return "<color=#FF5F40>{0}</color> <color=#FFD987>of players find this level challenging</color>";
    };
    HardLevelBannerView.prototype.playEnterAnimation = function () {
        var e = this;
        cc.Tween.stopAllByTarget(this.node);
        this._bannerBg && cc.isValid(this._bannerBg) && cc.Tween.stopAllByTarget(this._bannerBg);
        this._lblText && cc.isValid(this._lblText) && cc.Tween.stopAllByTarget(this._lblText);
        this.node.opacity = 255;
        this.node.setScale(1);
        this.playBannerSound();
        this.playBannerBgAnimation();
        this.playTextAnimation();
        this.scheduleOnce(function () {
            e.playExitAnimation();
        }, 0.37 + this._duration);
    };
    HardLevelBannerView.prototype.playBannerSound = function () {
        mj.audioManager && mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.HardLevelBanner);
    };
    HardLevelBannerView.prototype.playBannerBgAnimation = function () {
        if (this._bannerBg && cc.isValid(this._bannerBg)) {
            this._bannerBg.opacity = 0;
            this._bannerBg.setScale(0.6, 1);
            cc.tween(this._bannerBg).to(0.17, {
                opacity: 255,
                scaleX: 1.03
            }, {
                easing: cc.easing.quadOut
            }).to(0.1, {
                scaleX: 1
            }, {
                easing: cc.easing.quadInOut
            }).start();
        }
    };
    HardLevelBannerView.prototype.playTextAnimation = function () {
        if (this._lblText && cc.isValid(this._lblText)) {
            this._lblText.opacity = 0;
            this._lblText.setScale(0.6);
            cc.tween(this._lblText).delay(0.1).to(0.17, {
                opacity: 255,
                scale: 1.02
            }, {
                easing: cc.easing.quadOut
            }).to(0.1, {
                scale: 1
            }, {
                easing: cc.easing.quadInOut
            }).start();
        }
    };
    HardLevelBannerView.prototype.playExitAnimation = function () {
        var e = this;
        cc.isValid(this.node) && cc.tween(this.node).to(0.17, {
            opacity: 0
        }, {
            easing: cc.easing.quadIn
        }).call(function () {
            e.destroyBanner();
        }).start();
    };
    HardLevelBannerView.prototype.destroyBanner = function () {
        cc.isValid(this.node) && this.node.destroy();
    };
    HardLevelBannerView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.unscheduleAllCallbacks();
        cc.Tween.stopAllByTarget(this.node);
        this._bannerBg && cc.isValid(this._bannerBg) && cc.Tween.stopAllByTarget(this._bannerBg);
        this._lblText && cc.isValid(this._lblText) && cc.Tween.stopAllByTarget(this._lblText);
    };
    HardLevelBannerView.prefabUrl = "prefabs/HardLevelBanner";
    HardLevelBannerView.bundleName = "r_hardLevelBanner";
    __decorate([
        mj.node("bannerBg")
    ], HardLevelBannerView.prototype, "_bannerBg", void 0);
    __decorate([
        mj.node("bannerBg/lblText")
    ], HardLevelBannerView.prototype, "_lblText", void 0);
    HardLevelBannerView = __decorate([
        mj.class
    ], HardLevelBannerView);
    return HardLevelBannerView;
}(BaseUI_1.default));
exports.default = HardLevelBannerView;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'c929d/kjKRBUK//AhxskMo1', 'UILanguageLockController');
// subpackages/l_languageSelector/Scripts/UILanguageLockController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DChangeBaseSkin_1 = require("../../../Scripts/gamePlay/dot/DChangeBaseSkin");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var UILanguageLockView_1 = require("./UILanguageLockView");
var d = {
    l_lanCardRU: "t5",
    l_lanCardES: "b1",
    l_lanCardFR: "W2",
    l_lanCardJP: "W2",
    l_lanCardKO: "W2",
    l_lanCardPT: "t4",
    l_lanCardDE: "b6",
    l_lanCardCN: "W9",
    l_lanCardTW: "W9",
    l_lanCardEN: "H_zhu"
};
var p = {
    en: "EN",
    "zh-cn": "CN",
    "zh-tw": "TW",
    "zh-hk": "TW",
    ko: "KO",
    ja: "JP",
    ru: "RU",
    es: "ES",
    pt: "PT",
    de: "DE",
    fr: "FR"
};
var UILanguageLockController = /** @class */ (function (_super) {
    __extends(UILanguageLockController, _super);
    function UILanguageLockController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = UILanguageLockView_1.UILanguageLockView;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "r_changeBaseCardByLan";
        _this._skinBundleName = null;
        return _this;
    }
    UILanguageLockController.prototype.viewDidLoad = function () {
        var e;
        _super.prototype.viewDidLoad.call(this);
        var o = (null === (e = this.args) || void 0 === e ? void 0 : e.code) || "en";
        this._skinBundleName = "l_lanCard" + p[o];
        var n = d[this._skinBundleName];
        n && this._skinBundleName && this.viewDoAction("setCard", n, this._skinBundleName);
        DChangeBaseSkin_1.DotChangeBaseSkin.dotPopupView(this._skinBundleName);
    };
    UILanguageLockController.prototype.onUIDestroy = function () {
        _super.prototype.onUIDestroy.call(this);
    };
    UILanguageLockController.prototype.playAd = function () {
        var t = this, e = DGameAdShow_1.EAdPosition.OpenSkinByLanguageAd;
        DChangeBaseSkin_1.DotChangeBaseSkin.dotPopupClick(this._skinBundleName);
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "clickAdLock");
        AdManager_1.default.getInstance().checkVideoAdIsReady() && cc.isValid(this.rootView) && (this.rootView.opacity = 0);
        AdManager_1.default.getInstance().playVideoAd(e, {
            onSuccess: function () {
                t.onAdSuccess();
            },
            onFailed: function (e) {
                t.onAdFailed(e);
            }
        });
    };
    UILanguageLockController.prototype.onAdSuccess = function () {
        var t, e, o;
        if (this._skinBundleName) {
            var n = mj.getClassByName("ChangeBaseCardByLanTrait"), a = null === (t = null == n ? void 0 : n.getInstance) || void 0 === t ? void 0 : t.call(n);
            null == a || a.unlockSkin(this._skinBundleName);
            DChangeBaseSkin_1.DotChangeBaseSkin.dotSkinUnlockSuccess(this._skinBundleName);
        }
        cc.isValid(this.rootView) && this.close();
        null === (o = null === (e = this.args) || void 0 === e ? void 0 : e.onSuccess) || void 0 === o || o.call(e);
    };
    UILanguageLockController.prototype.onAdFailed = function (t) {
        if (this.rootView && cc.isValid(this.rootView))
            if (t) {
                this.rootView.opacity = 255;
                this.viewDoAction("onFail");
            }
            else
                this.close();
    };
    UILanguageLockController = __decorate([
        mj.class("UILanguageLockController")
    ], UILanguageLockController);
    return UILanguageLockController;
}(ViewController_1.default));
exports.default = UILanguageLockController;

cc._RF.pop();
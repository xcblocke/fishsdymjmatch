"use strict";
cc._RF.push(module, '69a36aX0T1LLJnLt55QHHG3', 'UILanguageLockView');
// subpackages/l_languageSelector/Scripts/UILanguageLockView.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UILanguageLockView = void 0;
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var DAdRewardEnter_1 = require("../../../Scripts/gamePlay/dot/DAdRewardEnter");
var DAdVisit_1 = require("../../../Scripts/gamePlay/dot/DAdVisit");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var UILanguageLockView = /** @class */ (function (_super) {
    __extends(UILanguageLockView, _super);
    function UILanguageLockView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._imgCard = null;
        _this._btnSure = null;
        _this._itemAdFailTips = null;
        _this._desc2 = null;
        _this._closeBtn = null;
        _this._imgLine = null;
        _this._txtClose = null;
        return _this;
    }
    UILanguageLockView.prototype.onLoad = function () {
        var e = this;
        _super.prototype.onLoad.call(this);
        this.initEvents();
        cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function () {
            e._imgLine.width = e._txtClose.width;
        });
    };
    UILanguageLockView.prototype.initEvents = function () {
        this._closeBtn && this.OnButtonClick(this._closeBtn, this.onCloseClick.bind(this));
        this._btnSure && this.OnButtonClick(this._btnSure, this.onSureClick.bind(this));
    };
    UILanguageLockView.prototype.onSureClick = function () {
        var t = DGameAdShow_1.EAdPosition.OpenSkinByLanguageAd;
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(t, true);
        DAdRewardEnter_1.DotAdRewardEnter.dot(false, t);
        this.delegate.playAd();
    };
    UILanguageLockView.prototype.onCloseClick = function () {
        var t = DGameAdShow_1.EAdPosition.OpenSkinByLanguageAd;
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(t, false);
        this.delegate.close();
    };
    UILanguageLockView.prototype.setCard = function (t, e) {
        if (this._imgCard && cc.isValid(this._imgCard.node)) {
            "l_lanCardJP" == e && (e = "mainRes");
            BaseSprite_1.default.refreshWithNode(this._imgCard.node, "atlas/cardIcon/" + t, true, true, e);
        }
    };
    UILanguageLockView.prototype.onFail = function () {
        if (cc.isValid(this._itemAdFailTips)) {
            var t = this._itemAdFailTips;
            cc.Tween.stopAllByTarget(t);
            t.active = true;
            t.y = -100;
            t.scale = 0;
            t.opacity = 0;
            cc.tween(t).to(0.166, {
                y: 0,
                scale: 1,
                opacity: 255
            }, {
                easing: cc.easing.quartOut
            }).delay(0.494).to(0.24, {
                opacity: 0
            }).call(function () {
                cc.isValid(t) && (t.active = false);
            }).start();
        }
    };
    UILanguageLockView.prefabUrl = "prefab/UILanguageLockView";
    UILanguageLockView.bundleName = "r_changeBaseCardByLan";
    __decorate([
        mj.component("imgCardBg/imgCard", cc.Sprite)
    ], UILanguageLockView.prototype, "_imgCard", void 0);
    __decorate([
        mj.node("content_node/btn_sure")
    ], UILanguageLockView.prototype, "_btnSure", void 0);
    __decorate([
        mj.node("item_adFailTips")
    ], UILanguageLockView.prototype, "_itemAdFailTips", void 0);
    __decorate([
        mj.component("item_adFailTips/desc2", cc.Label)
    ], UILanguageLockView.prototype, "_desc2", void 0);
    __decorate([
        mj.node("btn_close")
    ], UILanguageLockView.prototype, "_closeBtn", void 0);
    __decorate([
        mj.node("btn_close/img_line")
    ], UILanguageLockView.prototype, "_imgLine", void 0);
    __decorate([
        mj.node("btn_close/txt_close")
    ], UILanguageLockView.prototype, "_txtClose", void 0);
    UILanguageLockView = __decorate([
        mj.class
    ], UILanguageLockView);
    return UILanguageLockView;
}(UIView_1.default));
exports.UILanguageLockView = UILanguageLockView;

cc._RF.pop();
"use strict";
cc._RF.push(module, '0f9deMUjcRN9IaM+9a74CWn', 'I18NAdBtnLayout');
// Scripts/component/I18NAdBtnLayout.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NComponent_1 = require("./I18NComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var I18NAdBtnLayout = /** @class */ (function (_super) {
    __extends(I18NAdBtnLayout, _super);
    function I18NAdBtnLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._adIconNode = null;
        _this._label = null;
        _this.maxWidth = 200;
        _this.spacing = 24;
        _this._adIconWidth = 0;
        _this._i18nComponent = null;
        return _this;
    }
    I18NAdBtnLayout_1 = I18NAdBtnLayout;
    I18NAdBtnLayout.setupLayout = function (e, t, n, i, r) {
        if (r === void 0) { r = 24; }
        if (e) {
            var a = cc.find(t, e), l = cc.find(n, e);
            I18NAdBtnLayout_1.setupLayoutByNode(a, l, i, r);
        }
    };
    I18NAdBtnLayout.setupLayoutByNode = function (e, t, n, i) {
        if (n === void 0) { n = I18NAdBtnLayout_1.MAX_WIDTH_1; }
        if (i === void 0) { i = I18NAdBtnLayout_1.MARGIN; }
        if (e && t && cc.isValid(e) && cc.isValid(t)) {
            var r = t.getComponent(I18NAdBtnLayout_1);
            r || (r = t.addComponent(I18NAdBtnLayout_1));
            r.initComponents(e, t.getComponent(cc.Label), n, i);
        }
    };
    I18NAdBtnLayout.prototype.initComponents = function (e, t, o, n) {
        if (n === void 0) { n = 24; }
        var i, r = this;
        this._adIconNode = e;
        this._label = t;
        this.maxWidth = o;
        this.spacing = n;
        if (this._adIconNode && this._label) {
            this._adIconWidth = this._adIconNode.width;
            this._label.overflow = cc.Label.Overflow.NONE;
            var l = null === (i = this._adIconNode.parent) || void 0 === i ? void 0 : i.getComponent(cc.Layout);
            l && (l.enabled = false);
            this._i18nComponent = this._label.node.getComponent(I18NComponent_1.default);
            this._i18nComponent && this._i18nComponent.setOnUpdateTextCallback(function () {
                r.onTextUpdated();
            });
            this.node.activeInHierarchy && this.scheduleOnce(function () {
                r.updateLayout();
            }, 0);
        }
    };
    I18NAdBtnLayout.prototype.onTextUpdated = function () {
        var e = this;
        this.scheduleOnce(function () {
            e.updateLayout();
        }, 0);
    };
    I18NAdBtnLayout.prototype.updateLayout = function () {
        if (this._adIconNode && this._label) {
            var e = this._label.node.width;
            if (this._adIconWidth + this.spacing + e <= this.maxWidth) {
                this.layoutCenter(e);
            }
            else {
                this.layoutScale(e);
            }
        }
    };
    I18NAdBtnLayout.prototype.layoutCenter = function (e) {
        var t = -(this._adIconWidth + this.spacing + e) / 2;
        this._adIconNode.x = t + this._adIconWidth * this._adIconNode.anchorX;
        var o = t + this._adIconWidth + this.spacing, n = this._label.node.anchorX;
        this._label.node.x = o + e * n;
        this._label.node.scale = 1;
    };
    I18NAdBtnLayout.prototype.layoutScale = function (e) {
        var t = -this.maxWidth / 2;
        this._adIconNode.x = t + this._adIconWidth * this._adIconNode.anchorX;
        var o = (this.maxWidth - this._adIconWidth - this.spacing) / e, n = t + this._adIconWidth + this.spacing, i = e * o, r = this._label.node.anchorX;
        this._label.node.x = n + i * r;
        this._label.node.scale = o;
    };
    I18NAdBtnLayout.prototype.forceUpdate = function () {
        var e = this;
        this.scheduleOnce(function () {
            e.updateLayout();
        }, 0);
    };
    var I18NAdBtnLayout_1;
    I18NAdBtnLayout.MAX_WIDTH_1 = 564;
    I18NAdBtnLayout.MAX_WIDTH_2 = 500;
    I18NAdBtnLayout.MARGIN = 24;
    I18NAdBtnLayout = I18NAdBtnLayout_1 = __decorate([
        ccclass
    ], I18NAdBtnLayout);
    return I18NAdBtnLayout;
}(cc.Component));
exports.default = I18NAdBtnLayout;

cc._RF.pop();
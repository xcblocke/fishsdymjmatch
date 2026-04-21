"use strict";
cc._RF.push(module, 'aa4bfVJj49NoZYtTIWl06ky', 'BaseLabel');
// Scripts/gamePlay/base/ui/BaseLabel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var property = cc._decorator.property;
var BaseLabel = /** @class */ (function (_super) {
    __extends(BaseLabel, _super);
    function BaseLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isLoading = false;
        _this._loadingPath = "";
        _this._label = null;
        _this._loadInitiated = false;
        _this._loadFontEndFunc = null;
        _this._fontPath = "";
        _this._fontBundleName = void 0;
        return _this;
    }
    BaseLabel_1 = BaseLabel;
    Object.defineProperty(BaseLabel.prototype, "label", {
        get: function () {
            this._label || (this._label = this.node.getComponent(cc.Label));
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseLabel.prototype, "string", {
        get: function () {
            return this.label ? this.label.string : "";
        },
        set: function (e) {
            this.label && (this.label.string = e);
        },
        enumerable: false,
        configurable: true
    });
    BaseLabel.create = function (e, t, o, n) {
        if (o === void 0) { o = "mainRes"; }
        if (n === void 0) { n = 20; }
        var i = new cc.Node(), r = i.addComponent(this), a = i.addComponent(cc.Label);
        a.string = e;
        a.fontSize = n;
        a.lineHeight = n;
        r._label = a;
        t && r.loadFont(t, o);
        return r;
    };
    BaseLabel.refreshWithNode = function (e, t, n, i) {
        if (n === void 0) { n = "mainRes"; }
        if (i === void 0) { i = null; }
        var r = e.getComponent(BaseLabel_1);
        if (r) {
            r._loadFontEndFunc = i;
            r.loadFont(t, n);
            return r;
        }
        var a = e.getComponent(cc.Label);
        a || (a = e.addComponent(cc.Label));
        var l = e.addComponent(this);
        l._label = a;
        l._loadFontEndFunc = i;
        l.loadFont(t, n);
        return l;
    };
    BaseLabel.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._fontPath && !this._loadInitiated && this.loadFont(this._fontPath, this._fontBundleName);
    };
    BaseLabel.prototype.resetState = function (e) {
        if (this._loadingPath === e) {
            this._isLoading = false;
            this._loadingPath = "";
        }
    };
    BaseLabel.prototype.loadFont = function (e, t) {
        if (t === void 0) { t = "mainRes"; }
        var o = this;
        if (e) {
            this._fontPath = e;
            this._fontBundleName = t;
            this._loadInitiated = true;
            if (!this._isLoading || this._loadingPath !== e) {
                this._loadingPath = e;
                var n = e.includes("texture/") ? cc.BitmapFont : cc.Font, i = this.getRes(e, n, t);
                if (i && this.label) {
                    this.label.font = i;
                    this.label.useSystemFont = false;
                    this.resetState(e);
                    this.onLoadFontEnd();
                }
                else {
                    this._isLoading = true;
                    this.loadRes(e, n, t).then(function (t) {
                        o.onLoadFontAsyncEnd(t, e);
                    });
                }
            }
        }
    };
    BaseLabel.prototype.onLoadFontAsyncEnd = function (e, t) {
        if (cc.isValid(this.node)) {
            if (this._loadingPath === t)
                if (e) {
                    if (this.label) {
                        this.label.font = e;
                        this.label.useSystemFont = false;
                    }
                    this.resetState(t);
                    this.onLoadFontEnd();
                }
                else
                    this.resetState(t);
        }
        else
            this.resetState(t);
    };
    BaseLabel.prototype.onLoadFontEnd = function () {
        if (this._loadFontEndFunc) {
            this._loadFontEndFunc();
            this._loadFontEndFunc = null;
        }
    };
    BaseLabel.prototype.setSystemFont = function (e) {
        if (e === void 0) { e = "Arial"; }
        if (this.label) {
            this.label.useSystemFont = true;
            this.label.fontFamily = e;
        }
    };
    BaseLabel.prototype.setFontSize = function (e) {
        if (this.label) {
            this.label.fontSize = e;
            this.label.lineHeight = e;
        }
    };
    BaseLabel.prototype.setColor = function (e) {
        this.node && (this.node.color = e);
    };
    BaseLabel.prototype.setAlign = function (e, t) {
        if (e === void 0) { e = cc.Label.HorizontalAlign.CENTER; }
        if (t === void 0) { t = cc.Label.VerticalAlign.CENTER; }
        if (this.label) {
            this.label.horizontalAlign = e;
            this.label.verticalAlign = t;
        }
    };
    var BaseLabel_1;
    __decorate([
        property
    ], BaseLabel.prototype, "_fontPath", void 0);
    __decorate([
        property
    ], BaseLabel.prototype, "_fontBundleName", void 0);
    BaseLabel = BaseLabel_1 = __decorate([
        mj.class
    ], BaseLabel);
    return BaseLabel;
}(BaseUI_1.default));
exports.default = BaseLabel;

cc._RF.pop();
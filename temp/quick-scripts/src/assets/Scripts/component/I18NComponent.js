"use strict";
cc._RF.push(module, 'e6a65fFQGtNlZN3E71nPtfJ', 'I18NComponent');
// Scripts/component/I18NComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NStrings_1 = require("../framework/data/I18NStrings");
var LoginModel_1 = require("../gamePlay/login/model/LoginModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple;
var I18NComponent = /** @class */ (function (_super) {
    __extends(I18NComponent, _super);
    function I18NComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.translateId = "";
        _this.defaultText = "";
        _this._str = "";
        _this._label = null;
        _this._richText = null;
        _this._args = [];
        _this._origFont = null;
        _this._onUpdateTextCallback = null;
        return _this;
    }
    I18NComponent_1 = I18NComponent;
    I18NComponent.setEnableSystemFontFallback = function (e) {
        I18NComponent_1._enableSystemFontFallback = e;
    };
    I18NComponent.isEnableSystemFontFallback = function () {
        return I18NComponent_1._enableSystemFontFallback;
    };
    I18NComponent.prototype.onLoad = function () {
        this._label = this.node.getComponent(cc.Label);
        this._richText = this.node.getComponent(cc.RichText);
        this.setOrigFont();
        mj.EventManager.on("language-changed", this.updateText, this);
        this.updateText();
    };
    I18NComponent.prototype.start = function () {
        this.updateText();
    };
    I18NComponent.prototype.onDestroy = function () {
        mj.EventManager.off("language-changed", this.updateText, this);
    };
    I18NComponent.prototype.setTranslateId = function (e, t, o) {
        if (t === void 0) { t = ""; }
        if (o === void 0) { o = []; }
        this.translateId = e;
        this.defaultText = t || this.translateId;
        this._args = o || [];
        this.updateText();
    };
    I18NComponent.prototype.updateText = function () {
        if (this.enabled && (this.translateId || this.defaultText)) {
            var e = I18NStrings_1.default.get(this.translateId, this.defaultText) || "";
            e && this.applySystemFontIfNotEnglish();
            this._args && this._args.length > 0 && (e = I18NStrings_1.default.stringFormat.apply(I18NStrings_1.default, __spreadArrays([e], this._args)));
            if (e !== this._str) {
                if (this._label) {
                    this._str = e;
                    this._label.string = this._str;
                }
                if (this._richText) {
                    this._str = e;
                    this._richText.string = this._str;
                }
                this._onUpdateTextCallback && this._onUpdateTextCallback();
            }
        }
    };
    I18NComponent.prototype.setOnUpdateTextCallback = function (e) {
        this._onUpdateTextCallback = e;
    };
    I18NComponent.prototype.applySystemFontIfNotEnglish = function () {
        if (I18NComponent_1.isEnableSystemFontFallback()) {
            var e = LoginModel_1.default.getInstance().language, t = I18NComponent_1._artFontLanguages.some(function (t) {
                return e.toLowerCase().includes(t);
            });
            if (this._label) {
                this._label.useSystemFont = !t;
                t && this._origFont && (this._label.font = this._origFont);
            }
            if (this._richText) {
                this._richText.useSystemFont = !t;
                t && this._origFont && (this._richText.font = this._origFont);
            }
        }
    };
    I18NComponent.prototype.setOrigFont = function () {
        this._label && this._label.font && (this._origFont = this._label.font);
        this._richText && this._richText.font && (this._origFont = this._richText.font);
    };
    I18NComponent.prototype.useOrigFont = function () {
        this._label && this._origFont && (this._label.font = this._origFont);
        this._richText && this._origFont && (this._richText.font = this._origFont);
    };
    var I18NComponent_1;
    I18NComponent._artFontLanguages = ["en", "fr", "de", "pt", "es"];
    I18NComponent._enableSystemFontFallback = true;
    __decorate([
        property({
            tooltip: "文本ID,对应语言表里的key"
        })
    ], I18NComponent.prototype, "translateId", void 0);
    __decorate([
        property({
            tooltip: "默认文本,取不到对应语言时显示的文本,一般为英文"
        })
    ], I18NComponent.prototype, "defaultText", void 0);
    I18NComponent = I18NComponent_1 = __decorate([
        ccclass,
        disallowMultiple
    ], I18NComponent);
    return I18NComponent;
}(cc.Component));
exports.default = I18NComponent;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/component/I18NComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvbXBvbmVudC9JMThOQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBd0Q7QUFDeEQsaUVBQTREO0FBQ3RELElBQUEsS0FJRixFQUFFLENBQUMsVUFBVSxFQUhmLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FBQSxFQUNSLGdCQUFnQixzQkFDRCxDQUFDO0FBR2xCO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBdUZDO1FBbkZDLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBSWpCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFVBQUksR0FBRyxFQUFFLENBQUM7UUFDVixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQiwyQkFBcUIsR0FBRyxJQUFJLENBQUM7O0lBeUUvQixDQUFDO3NCQXZGb0IsYUFBYTtJQWlCekIseUNBQTJCLEdBQWxDLFVBQW1DLENBQUM7UUFDbEMsZUFBYSxDQUFDLHlCQUF5QixHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ00sd0NBQTBCLEdBQWpDO1FBQ0UsT0FBTyxlQUFhLENBQUMseUJBQXlCLENBQUM7SUFDakQsQ0FBQztJQUNELDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFVBQVUs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O1NBQ3BDLENBQUM7c0RBQ2U7SUFSRSxhQUFhO1FBRmpDLE9BQU87UUFDUCxnQkFBZ0I7T0FDSSxhQUFhLENBdUZqQztJQUFELG9CQUFDO0NBdkZELEFBdUZDLENBdkYwQyxFQUFFLENBQUMsU0FBUyxHQXVGdEQ7a0JBdkZvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBMb2dpbk1vZGVsIGZyb20gJy4uL2dhbWVQbGF5L2xvZ2luL21vZGVsL0xvZ2luTW9kZWwnO1xuY29uc3Qge1xuICBjY2NsYXNzLFxuICBwcm9wZXJ0eSxcbiAgZGlzYWxsb3dNdWx0aXBsZVxufSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuQGRpc2FsbG93TXVsdGlwbGVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEkxOE5Db21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoe1xuICAgIHRvb2x0aXA6IFwi5paH5pysSUQs5a+55bqU6K+t6KiA6KGo6YeM55qEa2V5XCJcbiAgfSlcbiAgdHJhbnNsYXRlSWQgPSBcIlwiO1xuICBAcHJvcGVydHkoe1xuICAgIHRvb2x0aXA6IFwi6buY6K6k5paH5pysLOWPluS4jeWIsOWvueW6lOivreiogOaXtuaYvuekuueahOaWh+acrCzkuIDoiKzkuLroi7HmlodcIlxuICB9KVxuICBkZWZhdWx0VGV4dCA9IFwiXCI7XG4gIF9zdHIgPSBcIlwiO1xuICBfbGFiZWwgPSBudWxsO1xuICBfcmljaFRleHQgPSBudWxsO1xuICBfYXJncyA9IFtdO1xuICBfb3JpZ0ZvbnQgPSBudWxsO1xuICBfb25VcGRhdGVUZXh0Q2FsbGJhY2sgPSBudWxsO1xuICBzdGF0aWMgX2FydEZvbnRMYW5ndWFnZXMgPSBbXCJlblwiLCBcImZyXCIsIFwiZGVcIiwgXCJwdFwiLCBcImVzXCJdO1xuICBzdGF0aWMgX2VuYWJsZVN5c3RlbUZvbnRGYWxsYmFjayA9IHRydWU7XG4gIHN0YXRpYyBzZXRFbmFibGVTeXN0ZW1Gb250RmFsbGJhY2soZSkge1xuICAgIEkxOE5Db21wb25lbnQuX2VuYWJsZVN5c3RlbUZvbnRGYWxsYmFjayA9IGU7XG4gIH1cbiAgc3RhdGljIGlzRW5hYmxlU3lzdGVtRm9udEZhbGxiYWNrKCkge1xuICAgIHJldHVybiBJMThOQ29tcG9uZW50Ll9lbmFibGVTeXN0ZW1Gb250RmFsbGJhY2s7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuX2xhYmVsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5fcmljaFRleHQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KTtcbiAgICB0aGlzLnNldE9yaWdGb250KCk7XG4gICAgbWouRXZlbnRNYW5hZ2VyLm9uKFwibGFuZ3VhZ2UtY2hhbmdlZFwiLCB0aGlzLnVwZGF0ZVRleHQsIHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVGV4dCgpO1xuICB9XG4gIHN0YXJ0KCkge1xuICAgIHRoaXMudXBkYXRlVGV4dCgpO1xuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBtai5FdmVudE1hbmFnZXIub2ZmKFwibGFuZ3VhZ2UtY2hhbmdlZFwiLCB0aGlzLnVwZGF0ZVRleHQsIHRoaXMpO1xuICB9XG4gIHNldFRyYW5zbGF0ZUlkKGUsIHQgPSBcIlwiLCBvID0gW10pIHtcbiAgICB0aGlzLnRyYW5zbGF0ZUlkID0gZTtcbiAgICB0aGlzLmRlZmF1bHRUZXh0ID0gdCB8fCB0aGlzLnRyYW5zbGF0ZUlkO1xuICAgIHRoaXMuX2FyZ3MgPSBvIHx8IFtdO1xuICAgIHRoaXMudXBkYXRlVGV4dCgpO1xuICB9XG4gIHVwZGF0ZVRleHQoKSB7XG4gICAgaWYgKHRoaXMuZW5hYmxlZCAmJiAodGhpcy50cmFuc2xhdGVJZCB8fCB0aGlzLmRlZmF1bHRUZXh0KSkge1xuICAgICAgdmFyIGUgPSBJMThOU3RyaW5ncy5nZXQodGhpcy50cmFuc2xhdGVJZCwgdGhpcy5kZWZhdWx0VGV4dCkgfHwgXCJcIjtcbiAgICAgIGUgJiYgdGhpcy5hcHBseVN5c3RlbUZvbnRJZk5vdEVuZ2xpc2goKTtcbiAgICAgIHRoaXMuX2FyZ3MgJiYgdGhpcy5fYXJncy5sZW5ndGggPiAwICYmIChlID0gSTE4TlN0cmluZ3Muc3RyaW5nRm9ybWF0LmFwcGx5KEkxOE5TdHJpbmdzLCBbLi4uW2VdLCAuLi50aGlzLl9hcmdzXSkpO1xuICAgICAgaWYgKGUgIT09IHRoaXMuX3N0cikge1xuICAgICAgICBpZiAodGhpcy5fbGFiZWwpIHtcbiAgICAgICAgICB0aGlzLl9zdHIgPSBlO1xuICAgICAgICAgIHRoaXMuX2xhYmVsLnN0cmluZyA9IHRoaXMuX3N0cjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcmljaFRleHQpIHtcbiAgICAgICAgICB0aGlzLl9zdHIgPSBlO1xuICAgICAgICAgIHRoaXMuX3JpY2hUZXh0LnN0cmluZyA9IHRoaXMuX3N0cjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vblVwZGF0ZVRleHRDYWxsYmFjayAmJiB0aGlzLl9vblVwZGF0ZVRleHRDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZXRPblVwZGF0ZVRleHRDYWxsYmFjayhlKSB7XG4gICAgdGhpcy5fb25VcGRhdGVUZXh0Q2FsbGJhY2sgPSBlO1xuICB9XG4gIGFwcGx5U3lzdGVtRm9udElmTm90RW5nbGlzaCgpIHtcbiAgICBpZiAoSTE4TkNvbXBvbmVudC5pc0VuYWJsZVN5c3RlbUZvbnRGYWxsYmFjaygpKSB7XG4gICAgICB2YXIgZSA9IExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5sYW5ndWFnZSxcbiAgICAgICAgdCA9IEkxOE5Db21wb25lbnQuX2FydEZvbnRMYW5ndWFnZXMuc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModCk7XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuX2xhYmVsKSB7XG4gICAgICAgIHRoaXMuX2xhYmVsLnVzZVN5c3RlbUZvbnQgPSAhdDtcbiAgICAgICAgdCAmJiB0aGlzLl9vcmlnRm9udCAmJiAodGhpcy5fbGFiZWwuZm9udCA9IHRoaXMuX29yaWdGb250KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9yaWNoVGV4dCkge1xuICAgICAgICB0aGlzLl9yaWNoVGV4dC51c2VTeXN0ZW1Gb250ID0gIXQ7XG4gICAgICAgIHQgJiYgdGhpcy5fb3JpZ0ZvbnQgJiYgKHRoaXMuX3JpY2hUZXh0LmZvbnQgPSB0aGlzLl9vcmlnRm9udCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldE9yaWdGb250KCkge1xuICAgIHRoaXMuX2xhYmVsICYmIHRoaXMuX2xhYmVsLmZvbnQgJiYgKHRoaXMuX29yaWdGb250ID0gdGhpcy5fbGFiZWwuZm9udCk7XG4gICAgdGhpcy5fcmljaFRleHQgJiYgdGhpcy5fcmljaFRleHQuZm9udCAmJiAodGhpcy5fb3JpZ0ZvbnQgPSB0aGlzLl9yaWNoVGV4dC5mb250KTtcbiAgfVxuICB1c2VPcmlnRm9udCgpIHtcbiAgICB0aGlzLl9sYWJlbCAmJiB0aGlzLl9vcmlnRm9udCAmJiAodGhpcy5fbGFiZWwuZm9udCA9IHRoaXMuX29yaWdGb250KTtcbiAgICB0aGlzLl9yaWNoVGV4dCAmJiB0aGlzLl9vcmlnRm9udCAmJiAodGhpcy5fcmljaFRleHQuZm9udCA9IHRoaXMuX29yaWdGb250KTtcbiAgfVxufSJdfQ==
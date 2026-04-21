
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/ui/BaseLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZUxhYmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFFaEQsSUFBQSxRQUFRLEdBQ04sRUFBRSxDQUFDLFVBQVUsU0FEUCxDQUNRO0FBRWxCO0lBQXVDLDZCQUFNO0lBQTdDO1FBQUEscUVBdUhDO1FBdEhDLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixzQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLHFCQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7O0lBOEczQixDQUFDO2tCQXZIb0IsU0FBUztJQVU1QixzQkFBSSw0QkFBSzthQUFUO1lBQ0UsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksNkJBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QyxDQUFDO2FBQ0QsVUFBVyxDQUFDO1lBQ1YsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUhBO0lBSU0sZ0JBQU0sR0FBYixVQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBYSxFQUFFLENBQU07UUFBckIsa0JB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ZCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7SUEvR0Q7UUFEQyxRQUFRO2dEQUNNO0lBRWY7UUFEQyxRQUFRO3NEQUNnQjtJQVROLFNBQVM7UUFEN0IsRUFBRSxDQUFDLEtBQUs7T0FDWSxTQUFTLENBdUg3QjtJQUFELGdCQUFDO0NBdkhELEFBdUhDLENBdkhzQyxnQkFBTSxHQXVINUM7a0JBdkhvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmNvbnN0IHtcbiAgcHJvcGVydHlcbn0gPSBjYy5fZGVjb3JhdG9yO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTGFiZWwgZXh0ZW5kcyBCYXNlVUkge1xuICBfaXNMb2FkaW5nID0gZmFsc2U7XG4gIF9sb2FkaW5nUGF0aCA9IFwiXCI7XG4gIF9sYWJlbCA9IG51bGw7XG4gIF9sb2FkSW5pdGlhdGVkID0gZmFsc2U7XG4gIF9sb2FkRm9udEVuZEZ1bmMgPSBudWxsO1xuICBAcHJvcGVydHlcbiAgX2ZvbnRQYXRoID0gXCJcIjtcbiAgQHByb3BlcnR5XG4gIF9mb250QnVuZGxlTmFtZSA9IHZvaWQgMDtcbiAgZ2V0IGxhYmVsKCkge1xuICAgIHRoaXMuX2xhYmVsIHx8ICh0aGlzLl9sYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpKTtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gIH1cbiAgZ2V0IHN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbCA/IHRoaXMubGFiZWwuc3RyaW5nIDogXCJcIjtcbiAgfVxuICBzZXQgc3RyaW5nKGUpIHtcbiAgICB0aGlzLmxhYmVsICYmICh0aGlzLmxhYmVsLnN0cmluZyA9IGUpO1xuICB9XG4gIHN0YXRpYyBjcmVhdGUoZSwgdCwgbyA9IFwibWFpblJlc1wiLCBuID0gMjApIHtcbiAgICB2YXIgaSA9IG5ldyBjYy5Ob2RlKCksXG4gICAgICByID0gaS5hZGRDb21wb25lbnQodGhpcyksXG4gICAgICBhID0gaS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIGEuc3RyaW5nID0gZTtcbiAgICBhLmZvbnRTaXplID0gbjtcbiAgICBhLmxpbmVIZWlnaHQgPSBuO1xuICAgIHIuX2xhYmVsID0gYTtcbiAgICB0ICYmIHIubG9hZEZvbnQodCwgbyk7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgc3RhdGljIHJlZnJlc2hXaXRoTm9kZShlLCB0LCBuID0gXCJtYWluUmVzXCIsIGkgPSBudWxsKSB7XG4gICAgdmFyIHIgPSBlLmdldENvbXBvbmVudChCYXNlTGFiZWwpO1xuICAgIGlmIChyKSB7XG4gICAgICByLl9sb2FkRm9udEVuZEZ1bmMgPSBpO1xuICAgICAgci5sb2FkRm9udCh0LCBuKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgICB2YXIgYSA9IGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICBhIHx8IChhID0gZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpKTtcbiAgICB2YXIgbCA9IGUuYWRkQ29tcG9uZW50KHRoaXMpO1xuICAgIGwuX2xhYmVsID0gYTtcbiAgICBsLl9sb2FkRm9udEVuZEZ1bmMgPSBpO1xuICAgIGwubG9hZEZvbnQodCwgbik7XG4gICAgcmV0dXJuIGw7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2ZvbnRQYXRoICYmICF0aGlzLl9sb2FkSW5pdGlhdGVkICYmIHRoaXMubG9hZEZvbnQodGhpcy5fZm9udFBhdGgsIHRoaXMuX2ZvbnRCdW5kbGVOYW1lKTtcbiAgfVxuICByZXNldFN0YXRlKGUpIHtcbiAgICBpZiAodGhpcy5fbG9hZGluZ1BhdGggPT09IGUpIHtcbiAgICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fbG9hZGluZ1BhdGggPSBcIlwiO1xuICAgIH1cbiAgfVxuICBsb2FkRm9udChlLCB0ID0gXCJtYWluUmVzXCIpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgaWYgKGUpIHtcbiAgICAgIHRoaXMuX2ZvbnRQYXRoID0gZTtcbiAgICAgIHRoaXMuX2ZvbnRCdW5kbGVOYW1lID0gdDtcbiAgICAgIHRoaXMuX2xvYWRJbml0aWF0ZWQgPSB0cnVlO1xuICAgICAgaWYgKCF0aGlzLl9pc0xvYWRpbmcgfHwgdGhpcy5fbG9hZGluZ1BhdGggIT09IGUpIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZ1BhdGggPSBlO1xuICAgICAgICB2YXIgbiA9IGUuaW5jbHVkZXMoXCJ0ZXh0dXJlL1wiKSA/IGNjLkJpdG1hcEZvbnQgOiBjYy5Gb250LFxuICAgICAgICAgIGkgPSB0aGlzLmdldFJlcyhlLCBuLCB0KTtcbiAgICAgICAgaWYgKGkgJiYgdGhpcy5sYWJlbCkge1xuICAgICAgICAgIHRoaXMubGFiZWwuZm9udCA9IGk7XG4gICAgICAgICAgdGhpcy5sYWJlbC51c2VTeXN0ZW1Gb250ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yZXNldFN0YXRlKGUpO1xuICAgICAgICAgIHRoaXMub25Mb2FkRm9udEVuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5sb2FkUmVzKGUsIG4sIHQpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIG8ub25Mb2FkRm9udEFzeW5jRW5kKHQsIGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTG9hZEZvbnRBc3luY0VuZChlLCB0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xuICAgICAgaWYgKHRoaXMuX2xvYWRpbmdQYXRoID09PSB0KSBpZiAoZSkge1xuICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICAgIHRoaXMubGFiZWwuZm9udCA9IGU7XG4gICAgICAgICAgdGhpcy5sYWJlbC51c2VTeXN0ZW1Gb250ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKHQpO1xuICAgICAgICB0aGlzLm9uTG9hZEZvbnRFbmQoKTtcbiAgICAgIH0gZWxzZSB0aGlzLnJlc2V0U3RhdGUodCk7XG4gICAgfSBlbHNlIHRoaXMucmVzZXRTdGF0ZSh0KTtcbiAgfVxuICBvbkxvYWRGb250RW5kKCkge1xuICAgIGlmICh0aGlzLl9sb2FkRm9udEVuZEZ1bmMpIHtcbiAgICAgIHRoaXMuX2xvYWRGb250RW5kRnVuYygpO1xuICAgICAgdGhpcy5fbG9hZEZvbnRFbmRGdW5jID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgc2V0U3lzdGVtRm9udChlID0gXCJBcmlhbFwiKSB7XG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwudXNlU3lzdGVtRm9udCA9IHRydWU7XG4gICAgICB0aGlzLmxhYmVsLmZvbnRGYW1pbHkgPSBlO1xuICAgIH1cbiAgfVxuICBzZXRGb250U2l6ZShlKSB7XG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwuZm9udFNpemUgPSBlO1xuICAgICAgdGhpcy5sYWJlbC5saW5lSGVpZ2h0ID0gZTtcbiAgICB9XG4gIH1cbiAgc2V0Q29sb3IoZSkge1xuICAgIHRoaXMubm9kZSAmJiAodGhpcy5ub2RlLmNvbG9yID0gZSk7XG4gIH1cbiAgc2V0QWxpZ24oZSA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVIsIHQgPSBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLkNFTlRFUikge1xuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLmxhYmVsLmhvcml6b250YWxBbGlnbiA9IGU7XG4gICAgICB0aGlzLmxhYmVsLnZlcnRpY2FsQWxpZ24gPSB0O1xuICAgIH1cbiAgfVxufSJdfQ==
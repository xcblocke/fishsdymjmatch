
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LabelAutoFit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fb525Aj1RGo5L/ZsvxEfzM', 'LabelAutoFit');
// Scripts/LabelAutoFit.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent;
var LabelAutoFit = /** @class */ (function (_super) {
    __extends(LabelAutoFit, _super);
    function LabelAutoFit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._maxWidth = 200;
        _this._maxHeight = 100;
        _this._minFontSize = 38;
        _this._maxFontSize = 56;
        _this._enableAutoFit = true;
        _this._autoLineHeight = true;
        _this._lineHeightRatio = 1.2;
        _this._label = null;
        _this._layoutDirty = true;
        _this._lastString = "";
        _this._originalLineHeight = 0;
        return _this;
    }
    Object.defineProperty(LabelAutoFit.prototype, "maxWidth", {
        get: function () {
            return this._maxWidth;
        },
        set: function (e) {
            this._maxWidth = e;
            this._doLayoutDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LabelAutoFit.prototype, "maxHeight", {
        get: function () {
            return this._maxHeight;
        },
        set: function (e) {
            this._maxHeight = e;
            this._doLayoutDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LabelAutoFit.prototype, "minFontSize", {
        get: function () {
            return this._minFontSize;
        },
        set: function (e) {
            this._minFontSize = Math.max(1, e);
            this._doLayoutDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LabelAutoFit.prototype, "maxFontSize", {
        get: function () {
            return this._maxFontSize;
        },
        set: function (e) {
            this._maxFontSize = Math.max(this._minFontSize, e);
            this._doLayoutDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LabelAutoFit.prototype, "enableAutoFit", {
        get: function () {
            return this._enableAutoFit;
        },
        set: function (e) {
            this._enableAutoFit = e;
            this._doLayoutDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LabelAutoFit.prototype, "autoLineHeight", {
        get: function () {
            return this._autoLineHeight;
        },
        set: function (e) {
            this._autoLineHeight = e;
            this._doLayoutDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LabelAutoFit.prototype, "lineHeightRatio", {
        get: function () {
            return this._lineHeightRatio;
        },
        set: function (e) {
            this._lineHeightRatio = Math.max(0.5, Math.min(3, e));
            this._doLayoutDirty();
        },
        enumerable: false,
        configurable: true
    });
    LabelAutoFit.prototype.onLoad = function () {
        this._label = this.getComponent(cc.Label);
        if (this._label) {
            this._lastString = this._label.string;
            0 === this._originalLineHeight && (this._originalLineHeight = this._label.lineHeight);
            this._label.overflow = cc.Label.Overflow.NONE;
        }
        this._setupLabelWatcher();
        this._addEventListeners();
        this._doLayoutDirty();
    };
    LabelAutoFit.prototype.onEnable = function () {
        if (!this._label) {
            this._label = this.getComponent(cc.Label);
            if (this._label) {
                this._lastString = this._label.string;
                0 === this._originalLineHeight && (this._originalLineHeight = this._label.lineHeight);
                this._label.overflow = cc.Label.Overflow.NONE;
            }
            this._setupLabelWatcher();
        }
        this._addEventListeners();
        this._doLayoutDirty();
    };
    LabelAutoFit.prototype.onDisable = function () {
        this._removeEventListeners();
    };
    LabelAutoFit.prototype.onDestroy = function () {
        this._removeEventListeners();
    };
    LabelAutoFit.prototype._doLayoutDirty = function () {
        this._layoutDirty = true;
    };
    LabelAutoFit.prototype._setupLabelWatcher = function () {
        if (this._label && !this._label._autoFitWatched) {
            this._label._autoFitWatched = true;
            var e = Object.getPrototypeOf(this._label), t = Object.getOwnPropertyDescriptor(e, "string");
            if (t && t.set) {
                var o = t.set, n = this;
                Object.defineProperty(this._label, "string", {
                    get: t.get,
                    set: function (e) {
                        o.call(this, e);
                        n._doLayoutDirty();
                    },
                    enumerable: t.enumerable,
                    configurable: t.configurable
                });
            }
        }
    };
    LabelAutoFit.prototype._addEventListeners = function () {
        this._label && cc.director.on(cc.Director.EVENT_AFTER_UPDATE, this.updateFit, this);
    };
    LabelAutoFit.prototype._removeEventListeners = function () {
        cc.director.off(cc.Director.EVENT_AFTER_UPDATE, this.updateFit, this);
    };
    LabelAutoFit.prototype.updateFit = function () {
        if (this._label && this._enableAutoFit) {
            var e = this._label.string;
            if (this._layoutDirty || e !== this._lastString) {
                this._lastString = e;
                this._layoutDirty = false;
                if (e && 0 !== e.length)
                    this._fitFontSize();
                else {
                    this._applyFontSize(this._maxFontSize);
                    this._label.node.width = 0;
                }
            }
        }
    };
    LabelAutoFit.prototype._applyFontSize = function (e) {
        this._label.fontSize = e;
        this._autoLineHeight && (this._label.lineHeight = Math.round(e * this._lineHeightRatio));
    };
    LabelAutoFit.prototype._measureText = function (e) {
        var t = this._label.fontSize, o = this._label.lineHeight;
        this._applyFontSize(e);
        this._label._forceUpdateRenderData();
        var n = this._label.node.width, i = this._label.node.height;
        this._label.fontSize = t;
        this._label.lineHeight = o;
        return {
            width: n,
            height: i
        };
    };
    LabelAutoFit.prototype._fitFontSize = function () {
        this._label.overflow = cc.Label.Overflow.NONE;
        var e = this._measureText(this._maxFontSize);
        if (e.width <= this._maxWidth && e.height <= this._maxHeight) {
            this._applyFontSize(this._maxFontSize);
            this._label.node.width = e.width;
            this._label._forceUpdateRenderData();
        }
        else {
            for (var t = this._minFontSize, o = this._maxFontSize - 1, n = t, i = 0; t <= o;) {
                var r = Math.floor((t + o) / 2), a = this._measureText(r);
                if (a.width <= this._maxWidth && a.height <= this._maxHeight) {
                    n = r;
                    i = a.width;
                    t = r + 1;
                }
                else
                    o = r - 1;
            }
            this._applyFontSize(n);
            this._label.node.width = i;
            this._label._forceUpdateRenderData();
        }
    };
    LabelAutoFit.prototype.refresh = function () {
        this._doLayoutDirty();
        this.updateFit();
    };
    LabelAutoFit.prototype.setString = function (e) {
        if (this._label) {
            this._label.string = e;
            this._doLayoutDirty();
        }
    };
    LabelAutoFit.prototype.update = function () { };
    __decorate([
        property
    ], LabelAutoFit.prototype, "_maxWidth", void 0);
    __decorate([
        property
    ], LabelAutoFit.prototype, "_maxHeight", void 0);
    __decorate([
        property
    ], LabelAutoFit.prototype, "_minFontSize", void 0);
    __decorate([
        property
    ], LabelAutoFit.prototype, "_maxFontSize", void 0);
    __decorate([
        property
    ], LabelAutoFit.prototype, "_enableAutoFit", void 0);
    __decorate([
        property
    ], LabelAutoFit.prototype, "_autoLineHeight", void 0);
    __decorate([
        property
    ], LabelAutoFit.prototype, "_lineHeightRatio", void 0);
    __decorate([
        property({
            displayName: "最大宽度",
            tooltip: "文本显示的最大宽度"
        })
    ], LabelAutoFit.prototype, "maxWidth", null);
    __decorate([
        property({
            displayName: "最大高度",
            tooltip: "文本显示的最大高度"
        })
    ], LabelAutoFit.prototype, "maxHeight", null);
    __decorate([
        property({
            displayName: "最小字号",
            tooltip: "字体的最小大小"
        })
    ], LabelAutoFit.prototype, "minFontSize", null);
    __decorate([
        property({
            displayName: "最大字号",
            tooltip: "字体的最大大小"
        })
    ], LabelAutoFit.prototype, "maxFontSize", null);
    __decorate([
        property({
            displayName: "启用自适应",
            tooltip: "是否启用字号自适应"
        })
    ], LabelAutoFit.prototype, "enableAutoFit", null);
    __decorate([
        property({
            displayName: "自动行高",
            tooltip: "是否根据字号自动调整行高"
        })
    ], LabelAutoFit.prototype, "autoLineHeight", null);
    __decorate([
        property({
            displayName: "行高比例",
            tooltip: "行高相对于字号的比例（如1.2表示行高为字号的1.2倍）",
            visible: function () {
                return this._autoLineHeight;
            }
        })
    ], LabelAutoFit.prototype, "lineHeightRatio", null);
    LabelAutoFit = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Label)
    ], LabelAutoFit);
    return LabelAutoFit;
}(cc.Component));
exports.default = LabelAutoFit;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xhYmVsQXV0b0ZpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUtGLEVBQUUsQ0FBQyxVQUFVLEVBSmYsT0FBTyxhQUFBLEVBQ1AsUUFBUSxjQUFBLEVBQ1IsaUJBQWlCLHVCQUFBLEVBQ2pCLGdCQUFnQixzQkFDRCxDQUFDO0FBSWxCO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBOE5DO1FBNU5DLGVBQVMsR0FBRyxHQUFHLENBQUM7UUFFaEIsZ0JBQVUsR0FBRyxHQUFHLENBQUM7UUFFakIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFFbEIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFFbEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFFdEIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsc0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQix5QkFBbUIsR0FBRyxDQUFDLENBQUM7O0lBNE0xQixDQUFDO0lBdk1DLHNCQUFJLGtDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzthQUNELFVBQWEsQ0FBQztZQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQVNELHNCQUFJLG1DQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQWMsQ0FBQztZQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQVNELHNCQUFJLHFDQUFXO2FBQWY7WUFDRSxPQUFP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R0Q7SUE5RmtCLFlBQVk7UUFIaEMsT0FBTztRQUNQLGlCQUFpQjtRQUNqQixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO09BQ04sWUFBWSxDQThOaEM7SUFBRCxtQkFBQztDQTlORCxBQThOQyxDQTlOeUMsRUFBRSxDQUFDLFNBQVMsR0E4TnJEO2tCQTlOb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcbiAgY2NjbGFzcyxcbiAgcHJvcGVydHksXG4gIGV4ZWN1dGVJbkVkaXRNb2RlLFxuICByZXF1aXJlQ29tcG9uZW50XG59ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkByZXF1aXJlQ29tcG9uZW50KGNjLkxhYmVsKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWxBdXRvRml0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5XG4gIF9tYXhXaWR0aCA9IDIwMDtcbiAgQHByb3BlcnR5XG4gIF9tYXhIZWlnaHQgPSAxMDA7XG4gIEBwcm9wZXJ0eVxuICBfbWluRm9udFNpemUgPSAzODtcbiAgQHByb3BlcnR5XG4gIF9tYXhGb250U2l6ZSA9IDU2O1xuICBAcHJvcGVydHlcbiAgX2VuYWJsZUF1dG9GaXQgPSB0cnVlO1xuICBAcHJvcGVydHlcbiAgX2F1dG9MaW5lSGVpZ2h0ID0gdHJ1ZTtcbiAgQHByb3BlcnR5XG4gIF9saW5lSGVpZ2h0UmF0aW8gPSAxLjI7XG4gIF9sYWJlbCA9IG51bGw7XG4gIF9sYXlvdXREaXJ0eSA9IHRydWU7XG4gIF9sYXN0U3RyaW5nID0gXCJcIjtcbiAgX29yaWdpbmFsTGluZUhlaWdodCA9IDA7XG4gIEBwcm9wZXJ0eSh7XG4gICAgZGlzcGxheU5hbWU6IFwi5pyA5aSn5a695bqmXCIsXG4gICAgdG9vbHRpcDogXCLmlofmnKzmmL7npLrnmoTmnIDlpKflrr3luqZcIlxuICB9KVxuICBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFdpZHRoO1xuICB9XG4gIHNldCBtYXhXaWR0aChlKSB7XG4gICAgdGhpcy5fbWF4V2lkdGggPSBlO1xuICAgIHRoaXMuX2RvTGF5b3V0RGlydHkoKTtcbiAgfVxuICBAcHJvcGVydHkoe1xuICAgIGRpc3BsYXlOYW1lOiBcIuacgOWkp+mrmOW6plwiLFxuICAgIHRvb2x0aXA6IFwi5paH5pys5pi+56S655qE5pyA5aSn6auY5bqmXCJcbiAgfSlcbiAgZ2V0IG1heEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4SGVpZ2h0O1xuICB9XG4gIHNldCBtYXhIZWlnaHQoZSkge1xuICAgIHRoaXMuX21heEhlaWdodCA9IGU7XG4gICAgdGhpcy5fZG9MYXlvdXREaXJ0eSgpO1xuICB9XG4gIEBwcm9wZXJ0eSh7XG4gICAgZGlzcGxheU5hbWU6IFwi5pyA5bCP5a2X5Y+3XCIsXG4gICAgdG9vbHRpcDogXCLlrZfkvZPnmoTmnIDlsI/lpKflsI9cIlxuICB9KVxuICBnZXQgbWluRm9udFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbkZvbnRTaXplO1xuICB9XG4gIHNldCBtaW5Gb250U2l6ZShlKSB7XG4gICAgdGhpcy5fbWluRm9udFNpemUgPSBNYXRoLm1heCgxLCBlKTtcbiAgICB0aGlzLl9kb0xheW91dERpcnR5KCk7XG4gIH1cbiAgQHByb3BlcnR5KHtcbiAgICBkaXNwbGF5TmFtZTogXCLmnIDlpKflrZflj7dcIixcbiAgICB0b29sdGlwOiBcIuWtl+S9k+eahOacgOWkp+Wkp+Wwj1wiXG4gIH0pXG4gIGdldCBtYXhGb250U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4Rm9udFNpemU7XG4gIH1cbiAgc2V0IG1heEZvbnRTaXplKGUpIHtcbiAgICB0aGlzLl9tYXhGb250U2l6ZSA9IE1hdGgubWF4KHRoaXMuX21pbkZvbnRTaXplLCBlKTtcbiAgICB0aGlzLl9kb0xheW91dERpcnR5KCk7XG4gIH1cbiAgQHByb3BlcnR5KHtcbiAgICBkaXNwbGF5TmFtZTogXCLlkK/nlKjoh6rpgILlupRcIixcbiAgICB0b29sdGlwOiBcIuaYr+WQpuWQr+eUqOWtl+WPt+iHqumAguW6lFwiXG4gIH0pXG4gIGdldCBlbmFibGVBdXRvRml0KCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVBdXRvRml0O1xuICB9XG4gIHNldCBlbmFibGVBdXRvRml0KGUpIHtcbiAgICB0aGlzLl9lbmFibGVBdXRvRml0ID0gZTtcbiAgICB0aGlzLl9kb0xheW91dERpcnR5KCk7XG4gIH1cbiAgQHByb3BlcnR5KHtcbiAgICBkaXNwbGF5TmFtZTogXCLoh6rliqjooYzpq5hcIixcbiAgICB0b29sdGlwOiBcIuaYr+WQpuagueaNruWtl+WPt+iHquWKqOiwg+aVtOihjOmrmFwiXG4gIH0pXG4gIGdldCBhdXRvTGluZUhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0xpbmVIZWlnaHQ7XG4gIH1cbiAgc2V0IGF1dG9MaW5lSGVpZ2h0KGUpIHtcbiAgICB0aGlzLl9hdXRvTGluZUhlaWdodCA9IGU7XG4gICAgdGhpcy5fZG9MYXlvdXREaXJ0eSgpO1xuICB9XG4gIEBwcm9wZXJ0eSh7XG4gICAgZGlzcGxheU5hbWU6IFwi6KGM6auY5q+U5L6LXCIsXG4gICAgdG9vbHRpcDogXCLooYzpq5jnm7jlr7nkuo7lrZflj7fnmoTmr5TkvovvvIjlpoIxLjLooajnpLrooYzpq5jkuLrlrZflj7fnmoQxLjLlgI3vvIlcIixcbiAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXV0b0xpbmVIZWlnaHQ7XG4gICAgfVxuICB9KVxuICBnZXQgbGluZUhlaWdodFJhdGlvKCkge1xuICAgIHJldHVybiB0aGlzLl9saW5lSGVpZ2h0UmF0aW87XG4gIH1cbiAgc2V0IGxpbmVIZWlnaHRSYXRpbyhlKSB7XG4gICAgdGhpcy5fbGluZUhlaWdodFJhdGlvID0gTWF0aC5tYXgoMC41LCBNYXRoLm1pbigzLCBlKSk7XG4gICAgdGhpcy5fZG9MYXlvdXREaXJ0eSgpO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLl9sYWJlbCA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICBpZiAodGhpcy5fbGFiZWwpIHtcbiAgICAgIHRoaXMuX2xhc3RTdHJpbmcgPSB0aGlzLl9sYWJlbC5zdHJpbmc7XG4gICAgICAwID09PSB0aGlzLl9vcmlnaW5hbExpbmVIZWlnaHQgJiYgKHRoaXMuX29yaWdpbmFsTGluZUhlaWdodCA9IHRoaXMuX2xhYmVsLmxpbmVIZWlnaHQpO1xuICAgICAgdGhpcy5fbGFiZWwub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5OT05FO1xuICAgIH1cbiAgICB0aGlzLl9zZXR1cExhYmVsV2F0Y2hlcigpO1xuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fZG9MYXlvdXREaXJ0eSgpO1xuICB9XG4gIG9uRW5hYmxlKCkge1xuICAgIGlmICghdGhpcy5fbGFiZWwpIHtcbiAgICAgIHRoaXMuX2xhYmVsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgaWYgKHRoaXMuX2xhYmVsKSB7XG4gICAgICAgIHRoaXMuX2xhc3RTdHJpbmcgPSB0aGlzLl9sYWJlbC5zdHJpbmc7XG4gICAgICAgIDAgPT09IHRoaXMuX29yaWdpbmFsTGluZUhlaWdodCAmJiAodGhpcy5fb3JpZ2luYWxMaW5lSGVpZ2h0ID0gdGhpcy5fbGFiZWwubGluZUhlaWdodCk7XG4gICAgICAgIHRoaXMuX2xhYmVsLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuTk9ORTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NldHVwTGFiZWxXYXRjaGVyKCk7XG4gICAgfVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fZG9MYXlvdXREaXJ0eSgpO1xuICB9XG4gIG9uRGlzYWJsZSgpIHtcbiAgICB0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICB9XG4gIF9kb0xheW91dERpcnR5KCkge1xuICAgIHRoaXMuX2xheW91dERpcnR5ID0gdHJ1ZTtcbiAgfVxuICBfc2V0dXBMYWJlbFdhdGNoZXIoKSB7XG4gICAgaWYgKHRoaXMuX2xhYmVsICYmICF0aGlzLl9sYWJlbC5fYXV0b0ZpdFdhdGNoZWQpIHtcbiAgICAgIHRoaXMuX2xhYmVsLl9hdXRvRml0V2F0Y2hlZCA9IHRydWU7XG4gICAgICB2YXIgZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzLl9sYWJlbCksXG4gICAgICAgIHQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIFwic3RyaW5nXCIpO1xuICAgICAgaWYgKHQgJiYgdC5zZXQpIHtcbiAgICAgICAgdmFyIG8gPSB0LnNldCxcbiAgICAgICAgICBuID0gdGhpcztcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuX2xhYmVsLCBcInN0cmluZ1wiLCB7XG4gICAgICAgICAgZ2V0OiB0LmdldCxcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBvLmNhbGwodGhpcywgZSk7XG4gICAgICAgICAgICBuLl9kb0xheW91dERpcnR5KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0LmVudW1lcmFibGUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0LmNvbmZpZ3VyYWJsZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2xhYmVsICYmIGNjLmRpcmVjdG9yLm9uKGNjLkRpcmVjdG9yLkVWRU5UX0FGVEVSX1VQREFURSwgdGhpcy51cGRhdGVGaXQsIHRoaXMpO1xuICB9XG4gIF9yZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICBjYy5kaXJlY3Rvci5vZmYoY2MuRGlyZWN0b3IuRVZFTlRfQUZURVJfVVBEQVRFLCB0aGlzLnVwZGF0ZUZpdCwgdGhpcyk7XG4gIH1cbiAgdXBkYXRlRml0KCkge1xuICAgIGlmICh0aGlzLl9sYWJlbCAmJiB0aGlzLl9lbmFibGVBdXRvRml0KSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2xhYmVsLnN0cmluZztcbiAgICAgIGlmICh0aGlzLl9sYXlvdXREaXJ0eSB8fCBlICE9PSB0aGlzLl9sYXN0U3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2xhc3RTdHJpbmcgPSBlO1xuICAgICAgICB0aGlzLl9sYXlvdXREaXJ0eSA9IGZhbHNlO1xuICAgICAgICBpZiAoZSAmJiAwICE9PSBlLmxlbmd0aCkgdGhpcy5fZml0Rm9udFNpemUoKTtlbHNlIHtcbiAgICAgICAgICB0aGlzLl9hcHBseUZvbnRTaXplKHRoaXMuX21heEZvbnRTaXplKTtcbiAgICAgICAgICB0aGlzLl9sYWJlbC5ub2RlLndpZHRoID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBfYXBwbHlGb250U2l6ZShlKSB7XG4gICAgdGhpcy5fbGFiZWwuZm9udFNpemUgPSBlO1xuICAgIHRoaXMuX2F1dG9MaW5lSGVpZ2h0ICYmICh0aGlzLl9sYWJlbC5saW5lSGVpZ2h0ID0gTWF0aC5yb3VuZChlICogdGhpcy5fbGluZUhlaWdodFJhdGlvKSk7XG4gIH1cbiAgX21lYXN1cmVUZXh0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX2xhYmVsLmZvbnRTaXplLFxuICAgICAgbyA9IHRoaXMuX2xhYmVsLmxpbmVIZWlnaHQ7XG4gICAgdGhpcy5fYXBwbHlGb250U2l6ZShlKTtcbiAgICB0aGlzLl9sYWJlbC5fZm9yY2VVcGRhdGVSZW5kZXJEYXRhKCk7XG4gICAgdmFyIG4gPSB0aGlzLl9sYWJlbC5ub2RlLndpZHRoLFxuICAgICAgaSA9IHRoaXMuX2xhYmVsLm5vZGUuaGVpZ2h0O1xuICAgIHRoaXMuX2xhYmVsLmZvbnRTaXplID0gdDtcbiAgICB0aGlzLl9sYWJlbC5saW5lSGVpZ2h0ID0gbztcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IG4sXG4gICAgICBoZWlnaHQ6IGlcbiAgICB9O1xuICB9XG4gIF9maXRGb250U2l6ZSgpIHtcbiAgICB0aGlzLl9sYWJlbC5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93Lk5PTkU7XG4gICAgdmFyIGUgPSB0aGlzLl9tZWFzdXJlVGV4dCh0aGlzLl9tYXhGb250U2l6ZSk7XG4gICAgaWYgKGUud2lkdGggPD0gdGhpcy5fbWF4V2lkdGggJiYgZS5oZWlnaHQgPD0gdGhpcy5fbWF4SGVpZ2h0KSB7XG4gICAgICB0aGlzLl9hcHBseUZvbnRTaXplKHRoaXMuX21heEZvbnRTaXplKTtcbiAgICAgIHRoaXMuX2xhYmVsLm5vZGUud2lkdGggPSBlLndpZHRoO1xuICAgICAgdGhpcy5fbGFiZWwuX2ZvcmNlVXBkYXRlUmVuZGVyRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciB0ID0gdGhpcy5fbWluRm9udFNpemUsIG8gPSB0aGlzLl9tYXhGb250U2l6ZSAtIDEsIG4gPSB0LCBpID0gMDsgdCA8PSBvOykge1xuICAgICAgICB2YXIgciA9IE1hdGguZmxvb3IoKHQgKyBvKSAvIDIpLFxuICAgICAgICAgIGEgPSB0aGlzLl9tZWFzdXJlVGV4dChyKTtcbiAgICAgICAgaWYgKGEud2lkdGggPD0gdGhpcy5fbWF4V2lkdGggJiYgYS5oZWlnaHQgPD0gdGhpcy5fbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgbiA9IHI7XG4gICAgICAgICAgaSA9IGEud2lkdGg7XG4gICAgICAgICAgdCA9IHIgKyAxO1xuICAgICAgICB9IGVsc2UgbyA9IHIgLSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXBwbHlGb250U2l6ZShuKTtcbiAgICAgIHRoaXMuX2xhYmVsLm5vZGUud2lkdGggPSBpO1xuICAgICAgdGhpcy5fbGFiZWwuX2ZvcmNlVXBkYXRlUmVuZGVyRGF0YSgpO1xuICAgIH1cbiAgfVxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuX2RvTGF5b3V0RGlydHkoKTtcbiAgICB0aGlzLnVwZGF0ZUZpdCgpO1xuICB9XG4gIHNldFN0cmluZyhlKSB7XG4gICAgaWYgKHRoaXMuX2xhYmVsKSB7XG4gICAgICB0aGlzLl9sYWJlbC5zdHJpbmcgPSBlO1xuICAgICAgdGhpcy5fZG9MYXlvdXREaXJ0eSgpO1xuICAgIH1cbiAgfVxuICB1cGRhdGUoKSB7fVxufSJdfQ==
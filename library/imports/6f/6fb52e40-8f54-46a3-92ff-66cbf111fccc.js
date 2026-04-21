"use strict";
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
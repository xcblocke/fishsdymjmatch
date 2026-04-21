"use strict";
cc._RF.push(module, 'c9f6af5intNl6QHSe43NvJk', 'ColorAssembler2D');
// Scripts/ColorAssembler2D.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent, menu = _a.menu;
var ColorAssembler2D = /** @class */ (function (_super) {
    __extends(ColorAssembler2D, _super);
    function ColorAssembler2D() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colors = [];
        _this._tempColor = new cc.Color();
        return _this;
    }
    Object.defineProperty(ColorAssembler2D.prototype, "colors", {
        get: function () {
            return this._colors;
        },
        set: function (e) {
            this._colors = e;
            this._updateColors();
        },
        enumerable: false,
        configurable: true
    });
    ColorAssembler2D.prototype.onLoad = function () {
        var e = this;
        this._updateColors();
        var t = this.getComponent(cc.RenderComponent), o = t._updateColor;
        t._updateColor = function () {
            o && o.call(t);
            e._updateColors();
        };
    };
    ColorAssembler2D.prototype.onEnable = function () { };
    ColorAssembler2D.prototype.onDisable = function () {
        this.node._renderFlag |= cc.RenderFlow.FLAG_COLOR;
    };
    ColorAssembler2D.prototype.update = function () { };
    ColorAssembler2D.prototype.lateUpdate = function () {
        this._updateColors();
    };
    ColorAssembler2D.prototype._updateColors = function () {
        var e = this.getComponent(cc.RenderComponent);
        if (e) {
            var t = e._assembler;
            if (t instanceof cc.Assembler2D) {
                var o = t._renderData.uintVDatas[0];
                if (o)
                    for (var n = this.node.color, i = this.node.opacity, r = t.floatsPerVert, a = 0, l = [2, 3, 0, 1], s = t.colorOffset, c = o.length; s < c; s += r) {
                        var u = this.colors[l[a++]];
                        if (u) {
                            cc.Color.set(this._tempColor, u.r, u.g, u.b, u.a * i / 255);
                        }
                        else {
                            cc.Color.set(this._tempColor, n.r, n.g, n.b, n.a * i / 255);
                        }
                        o[s] = this._tempColor._val;
                    }
            }
        }
    };
    __decorate([
        property
    ], ColorAssembler2D.prototype, "_colors", void 0);
    __decorate([
        property({
            type: [cc.Color]
        })
    ], ColorAssembler2D.prototype, "colors", null);
    ColorAssembler2D = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.RenderComponent),
        menu("i18n:MAIN_MENU.component.renderers/ColorAssembler2D")
    ], ColorAssembler2D);
    return ColorAssembler2D;
}(cc.Component));
exports.default = ColorAssembler2D;

cc._RF.pop();
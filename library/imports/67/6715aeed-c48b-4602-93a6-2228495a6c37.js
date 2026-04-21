"use strict";
cc._RF.push(module, '6715a7txItGApOmIihJWmw3', 'LayoutSelector');
// Scripts/process/layout/LayoutSelector.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutSelector = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameConstant_1 = require("../../core/simulator/constant/GameConstant");
var LayoutSelector = /** @class */ (function (_super) {
    __extends(LayoutSelector, _super);
    function LayoutSelector(t) {
        return _super.call(this, t) || this;
    }
    LayoutSelector.prototype.getMaxScale = function () {
        return LayoutSelector.MAX_SCALE;
    };
    LayoutSelector.prototype.getPaddingLeft = function () {
        return LayoutSelector.PADDING;
    };
    LayoutSelector.prototype.getPaddingRight = function () {
        return LayoutSelector.PADDING;
    };
    LayoutSelector.prototype.getPaddingTop = function () {
        return LayoutSelector.PADDING;
    };
    LayoutSelector.prototype.getPaddingBottom = function () {
        return LayoutSelector.PADDING;
    };
    LayoutSelector.prototype.chooseLayout = function (e) {
        var t = this.context.getCardLayoutConfig(), o = this.context.getTileMapObject(), n = o.mapRow / 2 + 1, i = 0.5 * o.mapRow + 1, r = o.mapRow % 2 == 1, a = o.layerOffsetY, l = o.mapCol / 2 + 1, s = 0.5 * o.mapCol + 1, c = o.mapCol % 2 == 1, u = o.layerOffsetX, p = t.cardSize[0] * s + t.cardSpace[0] * (l > 0 ? l - 1 : 0) + t.cardSizeRight * u;
        c && (p += t.cardSpace[0]);
        var f = t.cardSize[1] * i + t.cardSpace[1] * (n > 0 ? n - 1 : 0) + t.cardSizeBottom * a;
        r && (f += t.cardSpace[1]);
        var d = (e.contentSize.width - this.getPaddingLeft() - this.getPaddingRight()) / p, h = (e.contentSize.height - this.getPaddingTop() - this.getPaddingBottom()) / f;
        return {
            config: t,
            scale: Math.min(d, h, this.getMaxScale())
        };
    };
    LayoutSelector.prototype.getPaddingForClassic = function () {
        return {
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10
        };
    };
    LayoutSelector.prototype.chooseLayoutForClassic = function (e) {
        var t = this.context.getCardLayoutConfig(), o = this.getPaddingForClassic(), n = 2 * (e.maxCol || GameConstant_1.default.MaxTileCountX) - 2, i = 2 * (e.maxRow || GameConstant_1.default.MaxTileCountY) - 2, r = n / 2 + 1, a = 0.5 * n + 1, s = n % 2 == 1, c = i / 2 + 1, u = 0.5 * i + 1, p = i % 2 == 1, f = t.cardSize[0] * a + t.cardSpace[0] * (r > 0 ? r - 1 : 0) + 6 * t.cardSizeRight;
        s && (f += t.cardSpace[0]);
        var d = t.cardSize[1] * u + t.cardSpace[1] * (c > 0 ? c - 1 : 0) + 10 * t.cardSizeBottom;
        p && (d += t.cardSpace[1]);
        var h = (e.contentSize.width - o.paddingLeft - o.paddingRight) / f, y = (e.contentSize.height - o.paddingTop - o.paddingBottom) / d;
        return {
            config: t,
            scale: Math.min(h, y, this.getMaxScale())
        };
    };
    LayoutSelector.PADDING = 30;
    LayoutSelector.MAX_SCALE = 2;
    __decorate([
        mj.traitEvent("LayoutSel_getMaxScale")
    ], LayoutSelector.prototype, "getMaxScale", null);
    __decorate([
        mj.traitEvent("LayoutSel_getPadLeft")
    ], LayoutSelector.prototype, "getPaddingLeft", null);
    __decorate([
        mj.traitEvent("LayoutSel_getPadRight")
    ], LayoutSelector.prototype, "getPaddingRight", null);
    __decorate([
        mj.traitEvent("LayoutSel_getPadTop")
    ], LayoutSelector.prototype, "getPaddingTop", null);
    __decorate([
        mj.traitEvent("LayoutSel_getPadBottom")
    ], LayoutSelector.prototype, "getPaddingBottom", null);
    return LayoutSelector;
}(BaseCoreObject_1.BaseCoreObject));
exports.LayoutSelector = LayoutSelector;

cc._RF.pop();
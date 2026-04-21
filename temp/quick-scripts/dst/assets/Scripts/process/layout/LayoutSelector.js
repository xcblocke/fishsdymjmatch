
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/layout/LayoutSelector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvbGF5b3V0L0xheW91dFNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3RELDJFQUFzRTtBQUN0RTtJQUFvQyxrQ0FBYztJQUdoRCx3QkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUVELHVDQUFjLEdBQWQ7UUFDRSxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDRSxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDRSxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQztJQUVELHlDQUFnQixHQUFoQjtRQUNFLE9BQU8sY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUNoQyxDQUFDO0lBQ0QscUNBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQ3hDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQ25DLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ3BCLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNwQixDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcs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QyxzQkFBc0IsQ0FBQzt3REFHckM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7eURBR3RDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO3VEQUdwQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzswREFHdkM7SUFxREgscUJBQUM7Q0E5RUQsQUE4RUMsQ0E5RW1DLCtCQUFjLEdBOEVqRDtBQTlFWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuaW1wb3J0IEdhbWVDb25zdGFudCBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lQ29uc3RhbnQnO1xuZXhwb3J0IGNsYXNzIExheW91dFNlbGVjdG9yIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBzdGF0aWMgUEFERElORyA9IDMwO1xuICBzdGF0aWMgTUFYX1NDQUxFID0gMjtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTGF5b3V0U2VsX2dldE1heFNjYWxlXCIpXG4gIGdldE1heFNjYWxlKCkge1xuICAgIHJldHVybiBMYXlvdXRTZWxlY3Rvci5NQVhfU0NBTEU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJMYXlvdXRTZWxfZ2V0UGFkTGVmdFwiKVxuICBnZXRQYWRkaW5nTGVmdCgpIHtcbiAgICByZXR1cm4gTGF5b3V0U2VsZWN0b3IuUEFERElORztcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkxheW91dFNlbF9nZXRQYWRSaWdodFwiKVxuICBnZXRQYWRkaW5nUmlnaHQoKSB7XG4gICAgcmV0dXJuIExheW91dFNlbGVjdG9yLlBBRERJTkc7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJMYXlvdXRTZWxfZ2V0UGFkVG9wXCIpXG4gIGdldFBhZGRpbmdUb3AoKSB7XG4gICAgcmV0dXJuIExheW91dFNlbGVjdG9yLlBBRERJTkc7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJMYXlvdXRTZWxfZ2V0UGFkQm90dG9tXCIpXG4gIGdldFBhZGRpbmdCb3R0b20oKSB7XG4gICAgcmV0dXJuIExheW91dFNlbGVjdG9yLlBBRERJTkc7XG4gIH1cbiAgY2hvb3NlTGF5b3V0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuY29udGV4dC5nZXRDYXJkTGF5b3V0Q29uZmlnKCksXG4gICAgICBvID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIG4gPSBvLm1hcFJvdyAvIDIgKyAxLFxuICAgICAgaSA9IDAuNSAqIG8ubWFwUm93ICsgMSxcbiAgICAgIHIgPSBvLm1hcFJvdyAlIDIgPT0gMSxcbiAgICAgIGEgPSBvLmxheWVyT2Zmc2V0WSxcbiAgICAgIGwgPSBvLm1hcENvbCAvIDIgKyAxLFxuICAgICAgcyA9IDAuNSAqIG8ubWFwQ29sICsgMSxcbiAgICAgIGMgPSBvLm1hcENvbCAlIDIgPT0gMSxcbiAgICAgIHUgPSBvLmxheWVyT2Zmc2V0WCxcbiAgICAgIHAgPSB0LmNhcmRTaXplWzBdICogcyArIHQuY2FyZFNwYWNlWzBdICogKGwgPiAwID8gbCAtIDEgOiAwKSArIHQuY2FyZFNpemVSaWdodCAqIHU7XG4gICAgYyAmJiAocCArPSB0LmNhcmRTcGFjZVswXSk7XG4gICAgdmFyIGYgPSB0LmNhcmRTaXplWzFdICogaSArIHQuY2FyZFNwYWNlWzFdICogKG4gPiAwID8gbiAtIDEgOiAwKSArIHQuY2FyZFNpemVCb3R0b20gKiBhO1xuICAgIHIgJiYgKGYgKz0gdC5jYXJkU3BhY2VbMV0pO1xuICAgIHZhciBkID0gKGUuY29udGVudFNpemUud2lkdGggLSB0aGlzLmdldFBhZGRpbmdMZWZ0KCkgLSB0aGlzLmdldFBhZGRpbmdSaWdodCgpKSAvIHAsXG4gICAgICBoID0gKGUuY29udGVudFNpemUuaGVpZ2h0IC0gdGhpcy5nZXRQYWRkaW5nVG9wKCkgLSB0aGlzLmdldFBhZGRpbmdCb3R0b20oKSkgLyBmO1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHQsXG4gICAgICBzY2FsZTogTWF0aC5taW4oZCwgaCwgdGhpcy5nZXRNYXhTY2FsZSgpKVxuICAgIH07XG4gIH1cbiAgZ2V0UGFkZGluZ0ZvckNsYXNzaWMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAxMCxcbiAgICAgIHBhZGRpbmdSaWdodDogMTAsXG4gICAgICBwYWRkaW5nVG9wOiAxMCxcbiAgICAgIHBhZGRpbmdCb3R0b206IDEwXG4gICAgfTtcbiAgfVxuICBjaG9vc2VMYXlvdXRGb3JDbGFzc2ljKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuY29udGV4dC5nZXRDYXJkTGF5b3V0Q29uZmlnKCksXG4gICAgICBvID0gdGhpcy5nZXRQYWRkaW5nRm9yQ2xhc3NpYygpLFxuICAgICAgbiA9IDIgKiAoZS5tYXhDb2wgfHwgR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFgpIC0gMixcbiAgICAgIGkgPSAyICogKGUubWF4Um93IHx8IEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRZKSAtIDIsXG4gICAgICByID0gbiAvIDIgKyAxLFxuICAgICAgYSA9IDAuNSAqIG4gKyAxLFxuICAgICAgcyA9IG4gJSAyID09IDEsXG4gICAgICBjID0gaSAvIDIgKyAxLFxuICAgICAgdSA9IDAuNSAqIGkgKyAxLFxuICAgICAgcCA9IGkgJSAyID09IDEsXG4gICAgICBmID0gdC5jYXJkU2l6ZVswXSAqIGEgKyB0LmNhcmRTcGFjZVswXSAqIChyID4gMCA/IHIgLSAxIDogMCkgKyA2ICogdC5jYXJkU2l6ZVJpZ2h0O1xuICAgIHMgJiYgKGYgKz0gdC5jYXJkU3BhY2VbMF0pO1xuICAgIHZhciBkID0gdC5jYXJkU2l6ZVsxXSAqIHUgKyB0LmNhcmRTcGFjZVsxXSAqIChjID4gMCA/IGMgLSAxIDogMCkgKyAxMCAqIHQuY2FyZFNpemVCb3R0b207XG4gICAgcCAmJiAoZCArPSB0LmNhcmRTcGFjZVsxXSk7XG4gICAgdmFyIGggPSAoZS5jb250ZW50U2l6ZS53aWR0aCAtIG8ucGFkZGluZ0xlZnQgLSBvLnBhZGRpbmdSaWdodCkgLyBmLFxuICAgICAgeSA9IChlLmNvbnRlbnRTaXplLmhlaWdodCAtIG8ucGFkZGluZ1RvcCAtIG8ucGFkZGluZ0JvdHRvbSkgLyBkO1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHQsXG4gICAgICBzY2FsZTogTWF0aC5taW4oaCwgeSwgdGhpcy5nZXRNYXhTY2FsZSgpKVxuICAgIH07XG4gIH1cbn0iXX0=
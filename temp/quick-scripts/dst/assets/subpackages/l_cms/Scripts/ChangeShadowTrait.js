
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cms/Scripts/ChangeShadowTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4939dGTrMhBoblJEqpqTUxh', 'ChangeShadowTrait');
// subpackages/l_cms/Scripts/ChangeShadowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ChangeShadowTrait = /** @class */ (function (_super) {
    __extends(ChangeShadowTrait, _super);
    function ChangeShadowTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._minOpacity = 0.7;
        return _this;
    }
    ChangeShadowTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._minOpacity = this._traitData.minOpacity || 0.7;
    };
    ChangeShadowTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        for (var r, o, n, i, l = t.ins.context.getTileMapObject(), f = t.ins.context.getTileNodeMap(), u = l.maxLayerIndex, p = new Map(), y = 0; y <= u; y++) {
            var s = u - y, h = this.calculateLayerOpacity(u + 1, s, this._minOpacity), d = Math.floor(255 * h);
            p.set(y, d);
        }
        try {
            for (var _ = __values(f), v = _.next(); !v.done; v = _.next()) {
                var w = __read(v.value, 2), b = (w[0], w[1]);
                if ((null === (i = null === (n = null == b ? void 0 : b.info) || void 0 === n ? void 0 : n.tileObject) || void 0 === i ? void 0 : i.layer) && b.shadowNode) {
                    y = b.info.tileObject.layer;
                    void 0 !== (d = p.get(y)) && (b.shadowNode.opacity = d);
                }
            }
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                v && !v.done && (o = _.return) && o.call(_);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        e();
    };
    ChangeShadowTrait.prototype.calculateLayerOpacity = function (t, e, r) {
        return t <= 1 ? 1 : 0 === e ? r : e === t - 1 ? 1 : r + (1 - r) / (t - 1) * e;
    };
    ChangeShadowTrait.traitKey = "ChangeShadow";
    ChangeShadowTrait = __decorate([
        mj.trait,
        mj.class("ChangeShadowTrait")
    ], ChangeShadowTrait);
    return ChangeShadowTrait;
}(Trait_1.default));
exports.default = ChangeShadowTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Ntcy9TY3JpcHRzL0NoYW5nZVNoYWRvd1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBK0MscUNBQUs7SUFBcEQ7UUFBQSxxRUF1Q0M7UUF0Q0MsaUJBQVcsR0FBRyxHQUFHLENBQUM7O0lBc0NwQixDQUFDO0lBcENDLGtDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxnREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JKLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ1gsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzFELENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNiO1FBQ0QsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFO29CQUMxSixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO29CQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDekQ7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsaURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFwQ00sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFGZCxpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBdUNyQztJQUFELHdCQUFDO0NBdkNELEFBdUNDLENBdkM4QyxlQUFLLEdBdUNuRDtrQkF2Q29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNoYW5nZVNoYWRvd1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VTaGFkb3dUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX21pbk9wYWNpdHkgPSAwLjc7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlU2hhZG93XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9taW5PcGFjaXR5ID0gdGhpcy5fdHJhaXREYXRhLm1pbk9wYWNpdHkgfHwgMC43O1xuICB9XG4gIG9uSW5pdFZpZXdCaHZfY3J0VGxzKHQsIGUpIHtcbiAgICBmb3IgKHZhciByLCBvLCBuLCBpLCBsID0gdC5pbnMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksIGYgPSB0Lmlucy5jb250ZXh0LmdldFRpbGVOb2RlTWFwKCksIHUgPSBsLm1heExheWVySW5kZXgsIHAgPSBuZXcgTWFwKCksIHkgPSAwOyB5IDw9IHU7IHkrKykge1xuICAgICAgdmFyIHMgPSB1IC0geSxcbiAgICAgICAgaCA9IHRoaXMuY2FsY3VsYXRlTGF5ZXJPcGFjaXR5KHUgKyAxLCBzLCB0aGlzLl9taW5PcGFjaXR5KSxcbiAgICAgICAgZCA9IE1hdGguZmxvb3IoMjU1ICogaCk7XG4gICAgICBwLnNldCh5LCBkKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF8gPSBfX3ZhbHVlcyhmKSwgdiA9IF8ubmV4dCgpOyAhdi5kb25lOyB2ID0gXy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHcgPSBfX3JlYWQodi52YWx1ZSwgMiksXG4gICAgICAgICAgYiA9ICh3WzBdLCB3WzFdKTtcbiAgICAgICAgaWYgKChudWxsID09PSAoaSA9IG51bGwgPT09IChuID0gbnVsbCA9PSBiID8gdm9pZCAwIDogYi5pbmZvKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLnRpbGVPYmplY3QpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkubGF5ZXIpICYmIGIuc2hhZG93Tm9kZSkge1xuICAgICAgICAgIHkgPSBiLmluZm8udGlsZU9iamVjdC5sYXllcjtcbiAgICAgICAgICB2b2lkIDAgIT09IChkID0gcC5nZXQoeSkpICYmIChiLnNoYWRvd05vZGUub3BhY2l0eSA9IGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgciA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgJiYgIXYuZG9uZSAmJiAobyA9IF8ucmV0dXJuKSAmJiBvLmNhbGwoXyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIGNhbGN1bGF0ZUxheWVyT3BhY2l0eSh0LCBlLCByKSB7XG4gICAgcmV0dXJuIHQgPD0gMSA/IDEgOiAwID09PSBlID8gciA6IGUgPT09IHQgLSAxID8gMSA6IHIgKyAoMSAtIHIpIC8gKHQgLSAxKSAqIGU7XG4gIH1cbn0iXX0=
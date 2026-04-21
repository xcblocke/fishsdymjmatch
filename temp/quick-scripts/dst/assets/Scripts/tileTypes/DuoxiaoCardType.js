
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tileTypes/DuoxiaoCardType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66c6eDMC0BK3qlaNaVHXnpm', 'DuoxiaoCardType');
// Scripts/tileTypes/DuoxiaoCardType.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var DuoxiaoCardType = /** @class */ (function () {
    function DuoxiaoCardType() {
    }
    DuoxiaoCardType.modify = function (e) {
        var t, o, n = e.getTileMapObject(), a = n.maxLayerIndex, l = n.aliveTiles().filter(function (e) {
            return !(!e.checkIsNormal() || a - e.layer > 1);
        }), s = e.randomGenerator, c = this.getGenCountRange(), u = s.randomInt(c[0], c[1]), p = s.randomElements(l, u);
        if (p.length > 0)
            try {
                for (var f = __values(p), d = f.next(); !d.done; d = f.next()) {
                    var h = d.value, y = this.getCountRange(), m = s.randomInt(y[0], y[1]);
                    n.setDuoxiaoCount(h.id, m);
                    n.setTileType(h.id, TileTypeEnum_1.ETileType.DuoxiaoCard);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    d && !d.done && (o = f.return) && o.call(f);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
    };
    DuoxiaoCardType.getGenCountRange = function () {
        return [1, 3];
    };
    DuoxiaoCardType.getCountRange = function () {
        return [4, 6];
    };
    __decorate([
        mj.traitEvent("DuoxiaoCt_modify")
    ], DuoxiaoCardType, "modify", null);
    __decorate([
        mj.traitEvent("DuoxiaoCt_genCountRange")
    ], DuoxiaoCardType, "getGenCountRange", null);
    __decorate([
        mj.traitEvent("DuoxiaoCt_countRange")
    ], DuoxiaoCardType, "getCountRange", null);
    return DuoxiaoCardType;
}());
exports.default = DuoxiaoCardType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVUeXBlcy9EdW94aWFvQ2FyZFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUErRDtBQUMvRDtJQUFBO0lBMENBLENBQUM7SUF4Q1Esc0JBQU0sR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFDbkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxFQUNGLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUNyQixDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQzNCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsSUFBSTtnQkFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLHdCQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzVDO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtJQUNILENBQUM7SUFFTSxnQ0FBZ0IsR0FBdkI7UUFDRSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFTSw2QkFBYSxHQUFwQjtRQUNFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQXZDRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7dUNBZ0NqQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztpREFHeEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7OENBR3JDO0lBQ0gsc0JBQUM7Q0ExQ0QsQUEwQ0MsSUFBQTtrQkExQ29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER1b3hpYW9DYXJkVHlwZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiRHVveGlhb0N0X21vZGlmeVwiKVxuICBzdGF0aWMgbW9kaWZ5KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gZS5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBhID0gbi5tYXhMYXllckluZGV4LFxuICAgICAgbCA9IG4uYWxpdmVUaWxlcygpLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gISghZS5jaGVja0lzTm9ybWFsKCkgfHwgYSAtIGUubGF5ZXIgPiAxKTtcbiAgICAgIH0pLFxuICAgICAgcyA9IGUucmFuZG9tR2VuZXJhdG9yLFxuICAgICAgYyA9IHRoaXMuZ2V0R2VuQ291bnRSYW5nZSgpLFxuICAgICAgdSA9IHMucmFuZG9tSW50KGNbMF0sIGNbMV0pLFxuICAgICAgcCA9IHMucmFuZG9tRWxlbWVudHMobCwgdSk7XG4gICAgaWYgKHAubGVuZ3RoID4gMCkgdHJ5IHtcbiAgICAgIGZvciAodmFyIGYgPSBfX3ZhbHVlcyhwKSwgZCA9IGYubmV4dCgpOyAhZC5kb25lOyBkID0gZi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGggPSBkLnZhbHVlLFxuICAgICAgICAgIHkgPSB0aGlzLmdldENvdW50UmFuZ2UoKSxcbiAgICAgICAgICBtID0gcy5yYW5kb21JbnQoeVswXSwgeVsxXSk7XG4gICAgICAgIG4uc2V0RHVveGlhb0NvdW50KGguaWQsIG0pO1xuICAgICAgICBuLnNldFRpbGVUeXBlKGguaWQsIEVUaWxlVHlwZS5EdW94aWFvQ2FyZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGQgJiYgIWQuZG9uZSAmJiAobyA9IGYucmV0dXJuKSAmJiBvLmNhbGwoZik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEdW94aWFvQ3RfZ2VuQ291bnRSYW5nZVwiKVxuICBzdGF0aWMgZ2V0R2VuQ291bnRSYW5nZSgpIHtcbiAgICByZXR1cm4gWzEsIDNdO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRHVveGlhb0N0X2NvdW50UmFuZ2VcIilcbiAgc3RhdGljIGdldENvdW50UmFuZ2UoKSB7XG4gICAgcmV0dXJuIFs0LCA2XTtcbiAgfVxufSJdfQ==
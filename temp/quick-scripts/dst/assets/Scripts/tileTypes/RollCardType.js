
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tileTypes/RollCardType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd252A13jxCrJYvzHFd3648', 'RollCardType');
// Scripts/tileTypes/RollCardType.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var RollCardType = /** @class */ (function () {
    function RollCardType() {
    }
    RollCardType.getPairsCount = function (e) {
        var t = e.getTileMapObject();
        return Math.max(2, Math.floor(t.aliveTileCount() / 32));
    };
    RollCardType.modify = function (t) {
        var o = t.getTileMapObject(), n = RollCardType.getPairsCount(t), i = o.mapLayers().length / 3, s = Math.min.apply(Math, __spreadArrays(o.aliveTiles().map(function (e) {
            return e.pos.x;
        }))), c = (Math.max.apply(Math, __spreadArrays(o.aliveTiles().map(function (e) {
            return e.pos.x;
        }))) - s + 2) / 2 + s, u = o.mapLayers().length - i;
        if ((n -= f(o.mapLayers().filter(function (e) {
            return e.layerIndex >= u;
        }), 1)) > 0)
            if (i > 1) {
                var p = i;
                n -= f(o.mapLayers().filter(function (e) {
                    return e.layerIndex >= p && e.layerIndex < u;
                }), n);
            }
            else
                n -= f(o.mapLayers().filter(function (e) {
                    return e.layerIndex < u && e.layerIndex > 0;
                }), n);
        function f(e, n) {
            var i, r, s, u, p, f, d = new Array();
            try {
                for (var h = __values(e), y = h.next(); !y.done; y = h.next()) {
                    var m = y.value;
                    try {
                        for (var v = (s = void 0, __values(m.allCards)), g = v.next(); !g.done; g = v.next())
                            (E = g.value).pos.x <= c - 2 && d.push(E);
                    }
                    catch (e) {
                        s = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            g && !g.done && (u = v.return) && u.call(v);
                        }
                        finally {
                            if (s)
                                throw s.error;
                        }
                    }
                }
            }
            catch (e) {
                i = {
                    error: e
                };
            }
            finally {
                try {
                    y && !y.done && (r = h.return) && r.call(h);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            }
            if (d.length < 0)
                return 0;
            var _ = Math.min(n, d.length), T = t.randomGenerator.randomElements(d, _);
            try {
                for (var C = __values(T), b = C.next(); !b.done; b = C.next()) {
                    var E, S = (E = b.value).pos.x + (2 * (c - E.pos.x) - 2), I = o.getAliveTileByPos({
                        x: S,
                        y: E.pos.y,
                        z: E.pos.z
                    });
                    if (null != I) {
                        o.setTileType(I.id, TileTypeEnum_1.ETileType.RollCard);
                        o.setTileType(E.id, TileTypeEnum_1.ETileType.RollCard);
                    }
                }
            }
            catch (e) {
                p = {
                    error: e
                };
            }
            finally {
                try {
                    b && !b.done && (f = C.return) && f.call(C);
                }
                finally {
                    if (p)
                        throw p.error;
                }
            }
            return _;
        }
    };
    __decorate([
        mj.traitEvent("RollCardType_getPCount")
    ], RollCardType, "getPairsCount", null);
    __decorate([
        mj.traitEvent("RollCardType_modify")
    ], RollCardType, "modify", null);
    return RollCardType;
}());
exports.default = RollCardType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVUeXBlcy9Sb2xsQ2FyZFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUErRDtBQUMvRDtJQUFBO0lBK0ZBLENBQUM7SUE3RlEsMEJBQWEsR0FBcEIsVUFBcUIsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLG1CQUFNLEdBQWIsVUFBYyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEVBQzFCLENBQUMsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUNqQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQzVCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLGlCQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3pELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLEVBQUUsRUFDSixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLGlCQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQzFELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDckIsQ0FBQyxHQUFHLENB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QkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUN6QztpQkFDRjthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxHQUFHO29CQUNGLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUM7YUFDSDtvQkFBUztnQkFDUixJQUFJO29CQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdDO3dCQUFTO29CQUNSLElBQUksQ0FBQzt3QkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCO2FBQ0Y7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUM7SUFDSCxDQUFDO0lBNUZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzsyQ0FJdkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7b0NBd0ZwQztJQUNILG1CQUFDO0NBL0ZELEFBK0ZDLElBQUE7a0JBL0ZvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xsQ2FyZFR5cGUge1xuICBAbWoudHJhaXRFdmVudChcIlJvbGxDYXJkVHlwZV9nZXRQQ291bnRcIilcbiAgc3RhdGljIGdldFBhaXJzQ291bnQoZSkge1xuICAgIHZhciB0ID0gZS5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KDIsIE1hdGguZmxvb3IodC5hbGl2ZVRpbGVDb3VudCgpIC8gMzIpKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJvbGxDYXJkVHlwZV9tb2RpZnlcIilcbiAgc3RhdGljIG1vZGlmeSh0KSB7XG4gICAgdmFyIG8gPSB0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIG4gPSBSb2xsQ2FyZFR5cGUuZ2V0UGFpcnNDb3VudCh0KSxcbiAgICAgIGkgPSBvLm1hcExheWVycygpLmxlbmd0aCAvIDMsXG4gICAgICBzID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgWy4uLm8uYWxpdmVUaWxlcygpLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5wb3MueDtcbiAgICAgIH0pXSksXG4gICAgICBjID0gKE1hdGgubWF4LmFwcGx5KE1hdGgsIFsuLi5vLmFsaXZlVGlsZXMoKS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUucG9zLng7XG4gICAgICB9KV0pIC0gcyArIDIpIC8gMiArIHMsXG4gICAgICB1ID0gby5tYXBMYXllcnMoKS5sZW5ndGggLSBpO1xuICAgIGlmICgobiAtPSBmKG8ubWFwTGF5ZXJzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5sYXllckluZGV4ID49IHU7XG4gICAgfSksIDEpKSA+IDApIGlmIChpID4gMSkge1xuICAgICAgdmFyIHAgPSBpO1xuICAgICAgbiAtPSBmKG8ubWFwTGF5ZXJzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmxheWVySW5kZXggPj0gcCAmJiBlLmxheWVySW5kZXggPCB1O1xuICAgICAgfSksIG4pO1xuICAgIH0gZWxzZSBuIC09IGYoby5tYXBMYXllcnMoKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLmxheWVySW5kZXggPCB1ICYmIGUubGF5ZXJJbmRleCA+IDA7XG4gICAgfSksIG4pO1xuICAgIGZ1bmN0aW9uIGYoZSwgbikge1xuICAgICAgdmFyIGksXG4gICAgICAgIHIsXG4gICAgICAgIHMsXG4gICAgICAgIHUsXG4gICAgICAgIHAsXG4gICAgICAgIGYsXG4gICAgICAgIGQgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGggPSBfX3ZhbHVlcyhlKSwgeSA9IGgubmV4dCgpOyAheS5kb25lOyB5ID0gaC5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgbSA9IHkudmFsdWU7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIHYgPSAocyA9IHZvaWQgMCwgX192YWx1ZXMobS5hbGxDYXJkcykpLCBnID0gdi5uZXh0KCk7ICFnLmRvbmU7IGcgPSB2Lm5leHQoKSkgKEUgPSBnLnZhbHVlKS5wb3MueCA8PSBjIC0gMiAmJiBkLnB1c2goRSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcyA9IHtcbiAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGcgJiYgIWcuZG9uZSAmJiAodSA9IHYucmV0dXJuKSAmJiB1LmNhbGwodik7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICBpZiAocykgdGhyb3cgcy5lcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaSA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB5ICYmICF5LmRvbmUgJiYgKHIgPSBoLnJldHVybikgJiYgci5jYWxsKGgpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZC5sZW5ndGggPCAwKSByZXR1cm4gMDtcbiAgICAgIHZhciBfID0gTWF0aC5taW4obiwgZC5sZW5ndGgpLFxuICAgICAgICBUID0gdC5yYW5kb21HZW5lcmF0b3IucmFuZG9tRWxlbWVudHMoZCwgXyk7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBDID0gX192YWx1ZXMoVCksIGIgPSBDLm5leHQoKTsgIWIuZG9uZTsgYiA9IEMubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIEUsXG4gICAgICAgICAgICBTID0gKEUgPSBiLnZhbHVlKS5wb3MueCArICgyICogKGMgLSBFLnBvcy54KSAtIDIpLFxuICAgICAgICAgICAgSSA9IG8uZ2V0QWxpdmVUaWxlQnlQb3Moe1xuICAgICAgICAgICAgICB4OiBTLFxuICAgICAgICAgICAgICB5OiBFLnBvcy55LFxuICAgICAgICAgICAgICB6OiBFLnBvcy56XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobnVsbCAhPSBJKSB7XG4gICAgICAgICAgICBvLnNldFRpbGVUeXBlKEkuaWQsIEVUaWxlVHlwZS5Sb2xsQ2FyZCk7XG4gICAgICAgICAgICBvLnNldFRpbGVUeXBlKEUuaWQsIEVUaWxlVHlwZS5Sb2xsQ2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHAgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYiAmJiAhYi5kb25lICYmIChmID0gQy5yZXR1cm4pICYmIGYuY2FsbChDKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAocCkgdGhyb3cgcC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIF87XG4gICAgfVxuICB9XG59Il19
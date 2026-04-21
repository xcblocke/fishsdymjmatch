"use strict";
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
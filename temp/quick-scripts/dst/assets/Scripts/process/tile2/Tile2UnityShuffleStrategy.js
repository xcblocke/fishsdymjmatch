
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2UnityShuffleStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42732JG/tlJX63DKPvu6t3q', 'Tile2UnityShuffleStrategy');
// Scripts/process/tile2/Tile2UnityShuffleStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UnityShuffleStrategy = void 0;
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var TileMapSimulator_1 = require("../../objects/TileMapSimulator");
var Tile2UnityShuffleStrategy = /** @class */ (function () {
    function Tile2UnityShuffleStrategy(e) {
        this._sim = null;
        this._simMapLayers = [];
        this._simTiles = [];
        this._context = null;
        this._context = e;
    }
    Tile2UnityShuffleStrategy.prototype.collectTiles = function () {
        var e, t;
        this._sim = TileMapSimulator_1.TileMapSimulator.createSim(this._context);
        this._simMapLayers = this._sim.mapLayers();
        this._simTiles = [];
        for (var o = this._context.getTileMapObject().tileObjectMap(), n = this._simMapLayers.length - 1; n >= 0; n--) {
            var a = __spreadArrays(this._simMapLayers[n].allCards);
            try {
                for (var s = (e = void 0, __values(a)), c = s.next(); !c.done; c = s.next()) {
                    var u = c.value, p = o.get(u.id);
                    if (p && p.isValid) {
                        this._simTiles.push(u);
                    }
                    else {
                        this._simMapLayers[n].removeCard(u);
                    }
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    c && !c.done && (t = s.return) && t.call(s);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        }
        return this._simTiles;
    };
    Tile2UnityShuffleStrategy.prototype.collectState = function (e) {
        return e.map(function (e) {
            return {
                id: e.id,
                cardId: e.cardId,
                type: e.type,
                typeBits: e.getTypeBits(),
                x: e.gridPosX,
                y: e.gridPosY,
                z: e.layer
            };
        });
    };
    Tile2UnityShuffleStrategy.prototype.collectConstraints = function (e) {
        var t, o, n = [], i = [];
        try {
            for (var a = __values(e), l = a.next(); !l.done; l = a.next()) {
                var s = l.value, c = {
                    id: s.id,
                    x: s.gridPosX,
                    y: s.gridPosY,
                    z: s.layer,
                    type: s.type
                };
                if (this.isFixedTile(s))
                    i.push({
                        id: c.id,
                        x: c.x,
                        y: c.y,
                        z: c.z
                    });
                else {
                    var u = this.isFixedTypeSlot(s);
                    u && u.length > 0 && n.push({
                        id: c.id,
                        x: c.x,
                        y: c.y,
                        z: c.z,
                        type: c.type,
                        types: u
                    });
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (o = a.return) && o.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return {
            fixedTypeSlots: n,
            fixedTiles: i
        };
    };
    Tile2UnityShuffleStrategy.prototype.compute = function (e, t) {
        var o, n, i, a, l, s, c, u, p, f, d, h, y, m, v = this, g = new Set();
        try {
            for (var _ = __values(t.fixedTiles), T = _.next(); !T.done; T = _.next()) {
                var C = T.value;
                g.add(C.id);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                T && !T.done && (n = _.return) && n.call(_);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        var b = new Set(g), E = function E(e) {
            var t = S._simTiles.find(function (t) {
                return t.id === e;
            });
            if (!t)
                return "continue";
            var o = S._simTiles.find(function (e) {
                return e.cardId === t.cardId && !b.has(e.id);
            });
            o && b.add(o.id);
        }, S = this;
        try {
            for (var I = __values(g), w = I.next(); !w.done; w = I.next())
                E(w.value);
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                w && !w.done && (a = I.return) && a.call(I);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        try {
            for (var B = __values(this._simTiles), x = B.next(); !x.done; x = B.next()) {
                var M = x.value;
                if (b.has(M.id)) {
                    this._simMapLayers[M.layer].removeCard(M);
                    M.isValid = false;
                }
            }
        }
        catch (e) {
            l = {
                error: e
            };
        }
        finally {
            try {
                x && !x.done && (s = B.return) && s.call(B);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        this._simTiles = this._simTiles.filter(function (e) {
            return !b.has(e.id);
        });
        var O = this.findSequence(this._simTiles);
        if (!O)
            return null;
        var D = function D(e, t, o) {
            return e + "," + t + "," + o;
        }, P = function P(e) {
            return D(e.gridPosX, e.gridPosY, e.layer);
        }, A = new Map();
        try {
            for (var R = __values(t.fixedTypeSlots), N = R.next(); !N.done; N = R.next()) {
                C = N.value;
                A.set(D(C.x, C.y, C.z), C);
            }
        }
        catch (e) {
            c = {
                error: e
            };
        }
        finally {
            try {
                N && !N.done && (u = R.return) && u.call(R);
            }
            finally {
                if (c)
                    throw c.error;
            }
        }
        for (var j = [], k = 0; k + 1 < O.length; k += 2)
            j.push({
                s1: O[k],
                s2: O[k + 1],
                tile1: "",
                tile2: "",
                isSet: false
            });
        var L = new Map();
        try {
            for (var G = __values(this._simTiles), F = G.next(); !F.done; F = G.next()) {
                M = F.value;
                if (!A.has(P(M))) {
                    L.has(M.cardId) || L.set(M.cardId, []);
                    L.get(M.cardId).push(M);
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
                F && !F.done && (f = G.return) && f.call(G);
            }
            finally {
                if (p)
                    throw p.error;
            }
        }
        L.forEach(function (e) {
            return v.randomShuffle(e);
        });
        var V = [];
        L.forEach(function (e) {
            for (var t = 0; t + 1 < e.length; t += 2)
                V.push({
                    t1: e[t],
                    t2: e[t + 1],
                    used: false
                });
        });
        this.randomShuffle(V);
        try {
            for (var U = __values(j), H = U.next(); !H.done; H = U.next())
                if (!(J = H.value).isSet) {
                    var W = V.find(function (e) {
                        return !e.used;
                    });
                    if (W) {
                        W.used = true;
                        J.tile1 = W.t1.id;
                        J.tile2 = W.t2.id;
                        J.isSet = true;
                    }
                }
        }
        catch (e) {
            d = {
                error: e
            };
        }
        finally {
            try {
                H && !H.done && (h = U.return) && h.call(U);
            }
            finally {
                if (d)
                    throw d.error;
            }
        }
        var z = [];
        try {
            for (var Y = __values(j), K = Y.next(); !K.done; K = Y.next()) {
                var J;
                if ((J = K.value).tile1 && J.tile2) {
                    z.push({
                        tileId: J.tile1,
                        x: J.s1.gridPosX,
                        y: J.s1.gridPosY,
                        z: J.s1.layer
                    });
                    z.push({
                        tileId: J.tile2,
                        x: J.s2.gridPosX,
                        y: J.s2.gridPosY,
                        z: J.s2.layer
                    });
                }
            }
        }
        catch (e) {
            y = {
                error: e
            };
        }
        finally {
            try {
                K && !K.done && (m = Y.return) && m.call(Y);
            }
            finally {
                if (y)
                    throw y.error;
            }
        }
        return z.length > 0 ? z : null;
    };
    Tile2UnityShuffleStrategy.prototype.fixFixedTypeSlots = function (e, t) {
        var o, i;
        if (0 !== t.fixedTypeSlots.length) {
            var a = function a(e, t, o) {
                return e + "," + t + "," + o;
            }, l = function l(e) {
                return a(e.gridPosX, e.gridPosY, e.layer);
            }, s = new Map(t.fixedTypeSlots.map(function (e) {
                return [a(e.x, e.y, e.z), e];
            })), c = new Map(this._simTiles.map(function (e) {
                return [e.id, e];
            })), u = function u(e, t) {
                var o = c.get(e);
                return !!o && t.every(function (e) {
                    return o.checkHasType(e);
                });
            }, p = function p(e) {
                return !s.has(l(e.s1)) && !s.has(l(e.s2));
            }, f = function f(t, o, i) {
                var a, l, s, c;
                try {
                    for (var f = __values(e), d = f.next(); !d.done; d = f.next()) {
                        var h = d.value;
                        if (h !== t && p(h)) {
                            if ((!o || u(h.tile1, o)) && (!i || u(h.tile2, i))) {
                                s = __read([h.tile1, h.tile2, t.tile1, t.tile2], 4), t.tile1 = s[0], t.tile2 = s[1], h.tile1 = s[2], h.tile2 = s[3];
                                return;
                            }
                            if ((!o || u(h.tile2, o)) && (!i || u(h.tile1, i))) {
                                c = __read([h.tile2, h.tile1, t.tile1, t.tile2], 4), t.tile1 = c[0], t.tile2 = c[1], h.tile1 = c[2], h.tile2 = c[3];
                                return;
                            }
                        }
                    }
                }
                catch (e) {
                    a = {
                        error: e
                    };
                }
                finally {
                    try {
                        d && !d.done && (l = f.return) && l.call(f);
                    }
                    finally {
                        if (a)
                            throw a.error;
                    }
                }
            };
            try {
                for (var d = __values(e), h = d.next(); !h.done; h = d.next()) {
                    var y = h.value, m = s.get(l(y.s1)), v = s.get(l(y.s2)), g = !!m && !u(y.tile1, m.types), _ = !!v && !u(y.tile2, v.types);
                    (g || _) && f(y, m.types, v.types);
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    h && !h.done && (i = d.return) && i.call(d);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
        }
    };
    Tile2UnityShuffleStrategy.prototype.applySwap = function (e) {
        var t, o, i = this._context.getTileMapObject(), a = i.tileObjectMap(), l = function l(e, t, o) {
            return e + "," + t + "," + o;
        }, s = new Map();
        try {
            for (var c = __values(a), u = c.next(); !u.done; u = c.next()) {
                var p = __read(u.value, 2), f = p[0], d = p[1];
                d.isValid && s.set(l(d.gridPosX, d.gridPosY, d.layer), f);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        for (var h = e.map(function (e) {
            var t;
            return null !== (t = s.get(l(e.x, e.y, e.z))) && void 0 !== t ? t : "";
        }), y = 0; y < e.length; y++) {
            var m = e[y].tileId, v = h[y];
            if (v !== m) {
                var g = h.indexOf(m);
                i.swapTilePositions(v, m);
                h[g] = v;
                h[y] = m;
            }
        }
    };
    Tile2UnityShuffleStrategy.prototype.hasSolution = function () {
        var e = this._context.getTileMapObject();
        e.updateCanMatchTiles();
        return e.getCanMatchCardPairNum() > 0;
    };
    Tile2UnityShuffleStrategy.prototype.isFixedTile = function (e) {
        return e.getIsInSlotBar();
    };
    Tile2UnityShuffleStrategy.prototype.isFixedTypeSlot = function (e) {
        if (e.checkHasType(TileTypeEnum_1.ETileType.RollCard))
            return [TileTypeEnum_1.ETileType.RollCard];
    };
    Tile2UnityShuffleStrategy.prototype.findSequence = function (e) {
        var t = this, o = [], n = __spreadArrays(e), a = 0, l = function l(e) {
            if (e === void 0) { e = 0; }
            var i, s;
            a = Math.max(a, e);
            if (0 === n.length)
                return true;
            var c = [];
            try {
                for (var u = __values(n), p = u.next(); !p.done; p = u.next()) {
                    var f = p.value;
                    0 === t._sim.isCardLock(f) && c.push(f);
                }
            }
            catch (e) {
                i = {
                    error: e
                };
            }
            finally {
                try {
                    p && !p.done && (s = u.return) && s.call(u);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            }
            if (c.length < 2)
                return false;
            t.randomShuffle(c);
            for (var d = 0; d < c.length; d++) {
                t.detach(c[d], n);
                o.push(c[d]);
                for (var h = d + 1; h < c.length; h++) {
                    t.detach(c[h], n);
                    o.push(c[h]);
                    if (l(e + 1))
                        return true;
                    t.attach(c[h], n);
                    o.pop();
                }
                t.attach(c[d], n);
                o.pop();
            }
            return false;
        };
        return l(0) ? o : null;
    };
    Tile2UnityShuffleStrategy.prototype.detach = function (e, t) {
        var o = t.indexOf(e);
        o > -1 && t.splice(o, 1);
        this._simMapLayers[e.layer].refreshGridState_Remove(e);
    };
    Tile2UnityShuffleStrategy.prototype.attach = function (e, t) {
        t.push(e);
        this._simMapLayers[e.layer].refreshGridState_Add(e);
    };
    Tile2UnityShuffleStrategy.prototype.randomShuffle = function (e) {
        for (var t = e.length; t > 1;) {
            var o = Math.floor(Math.random() * t--), n = e[t];
            e[t] = e[o];
            e[o] = n;
        }
    };
    return Tile2UnityShuffleStrategy;
}());
exports.Tile2UnityShuffleStrategy = Tile2UnityShuffleStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJVbml0eVNodWZmbGVTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUFrRTtBQUNsRSxtRUFBa0U7QUFDbEU7SUFLRSxtQ0FBWSxDQUFDO1FBSmIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNELGdEQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLG1DQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3RyxJQUFJLENBQUMsa0JBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxJQUFJO2dCQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7d0JBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN4Qjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDckM7aUJBQ0Y7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLENBQUMsR0FBRztvQkFDRixLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDO2FBQ0g7b0JBQVM7Z0JBQ1IsSUFBSTtvQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3Qzt3QkFBUztvQkFDUixJQUFJLENBQUM7d0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUN0QjthQUNGO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELGdEQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUN0QixPQUFPO2dCQUNMLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDUixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU07Z0JBQ2hCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtnQkFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtnQkFDekIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRO2dCQUNiLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUTtnQkFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUs7YUFDWCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsc0RBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNiLENBQUMsR0FBRztvQkFDRixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRO29CQUNiLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUTtvQkFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUs7b0JBQ1YsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO2lCQUNiLENBQUM7Z0JBQ0osSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUM5QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7d0JBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNOLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ1AsQ0FBQyxDQUFDO3FCQUFLO29CQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUMxQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7d0JBQ1IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNOLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ04sSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO3dCQUNaLEtBQUssRUFBRSxDQUFDO3FCQUNULENBQUMsQ0FBQztpQkFDSjthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPO1lBQ0wsY0FBYyxFQUFFLENBQUM7WUFDakIsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUNELDJDQUFPLEdBQVAsVUFBUSxDQUFDLEVBQUUsQ0FBQztRQUNWLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxFQUNSLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDYjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ2hCLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNsQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLENBQUM7Z0JBQUUsT0FBTyxVQUFVLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNsQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ1gsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0U7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztpQkFDbkI7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDaEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFDRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDNUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1QjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN2RCxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDUixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ1osS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLEtBQUs7YUFDYixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDMUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2hCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDdkMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6QjthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNuQixPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDL0MsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNaLElBQUksRUFBRSxLQUFLO2lCQUNaLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7b0JBQ3ZGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO3dCQUN4QixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDakIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLEVBQUU7d0JBQ0wsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7d0JBQ2QsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzt3QkFDbEIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzt3QkFDbEIsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7cUJBQ2hCO2lCQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7b0JBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ0wsTUFBTSxFQUFFLENBQUMsQ0FBQyxLQUFLO3dCQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVE7d0JBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVE7d0JBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUs7cUJBQ2QsQ0FBQyxDQUFDO29CQUNILENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ0wsTUFBTSxFQUFFLENBQUMsQ0FBQyxLQUFLO3dCQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVE7d0JBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVE7d0JBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUs7cUJBQ2QsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxxREFBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDakMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUN0QixPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxFQUNELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDLEVBQ0gsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7b0JBQy9CLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxFQUNELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNmLElBQUk7b0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFDbkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dDQUNsRCxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNwSCxPQUFPOzZCQUNSOzRCQUNELElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQ0FDbEQsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENB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QUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsMENBQU0sR0FBTixVQUFPLENBQUMsRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxpREFBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1lBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQ3JDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNWO0lBQ0gsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0F2ZUEsQUF1ZUMsSUFBQTtBQXZlWSw4REFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IFRpbGVNYXBTaW11bGF0b3IgfSBmcm9tICcuLi8uLi9vYmplY3RzL1RpbGVNYXBTaW11bGF0b3InO1xuZXhwb3J0IGNsYXNzIFRpbGUyVW5pdHlTaHVmZmxlU3RyYXRlZ3kge1xuICBfc2ltID0gbnVsbDtcbiAgX3NpbU1hcExheWVycyA9IFtdO1xuICBfc2ltVGlsZXMgPSBbXTtcbiAgX2NvbnRleHQgPSBudWxsO1xuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgdGhpcy5fY29udGV4dCA9IGU7XG4gIH1cbiAgY29sbGVjdFRpbGVzKCkge1xuICAgIHZhciBlLCB0O1xuICAgIHRoaXMuX3NpbSA9IFRpbGVNYXBTaW11bGF0b3IuY3JlYXRlU2ltKHRoaXMuX2NvbnRleHQpO1xuICAgIHRoaXMuX3NpbU1hcExheWVycyA9IHRoaXMuX3NpbS5tYXBMYXllcnMoKTtcbiAgICB0aGlzLl9zaW1UaWxlcyA9IFtdO1xuICAgIGZvciAodmFyIG8gPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS50aWxlT2JqZWN0TWFwKCksIG4gPSB0aGlzLl9zaW1NYXBMYXllcnMubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcbiAgICAgIHZhciBhID0gWy4uLnRoaXMuX3NpbU1hcExheWVyc1tuXS5hbGxDYXJkc107XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBzID0gKGUgPSB2b2lkIDAsIF9fdmFsdWVzKGEpKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgdSA9IGMudmFsdWUsXG4gICAgICAgICAgICBwID0gby5nZXQodS5pZCk7XG4gICAgICAgICAgaWYgKHAgJiYgcC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLl9zaW1UaWxlcy5wdXNoKHUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zaW1NYXBMYXllcnNbbl0ucmVtb3ZlQ2FyZCh1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgZSA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjICYmICFjLmRvbmUgJiYgKHQgPSBzLnJldHVybikgJiYgdC5jYWxsKHMpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zaW1UaWxlcztcbiAgfVxuICBjb2xsZWN0U3RhdGUoZSkge1xuICAgIHJldHVybiBlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGUuaWQsXG4gICAgICAgIGNhcmRJZDogZS5jYXJkSWQsXG4gICAgICAgIHR5cGU6IGUudHlwZSxcbiAgICAgICAgdHlwZUJpdHM6IGUuZ2V0VHlwZUJpdHMoKSxcbiAgICAgICAgeDogZS5ncmlkUG9zWCxcbiAgICAgICAgeTogZS5ncmlkUG9zWSxcbiAgICAgICAgejogZS5sYXllclxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBjb2xsZWN0Q29uc3RyYWludHMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBbXSxcbiAgICAgIGkgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYSA9IF9fdmFsdWVzKGUpLCBsID0gYS5uZXh0KCk7ICFsLmRvbmU7IGwgPSBhLm5leHQoKSkge1xuICAgICAgICB2YXIgcyA9IGwudmFsdWUsXG4gICAgICAgICAgYyA9IHtcbiAgICAgICAgICAgIGlkOiBzLmlkLFxuICAgICAgICAgICAgeDogcy5ncmlkUG9zWCxcbiAgICAgICAgICAgIHk6IHMuZ3JpZFBvc1ksXG4gICAgICAgICAgICB6OiBzLmxheWVyLFxuICAgICAgICAgICAgdHlwZTogcy50eXBlXG4gICAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuaXNGaXhlZFRpbGUocykpIGkucHVzaCh7XG4gICAgICAgICAgaWQ6IGMuaWQsXG4gICAgICAgICAgeDogYy54LFxuICAgICAgICAgIHk6IGMueSxcbiAgICAgICAgICB6OiBjLnpcbiAgICAgICAgfSk7ZWxzZSB7XG4gICAgICAgICAgdmFyIHUgPSB0aGlzLmlzRml4ZWRUeXBlU2xvdChzKTtcbiAgICAgICAgICB1ICYmIHUubGVuZ3RoID4gMCAmJiBuLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGMuaWQsXG4gICAgICAgICAgICB4OiBjLngsXG4gICAgICAgICAgICB5OiBjLnksXG4gICAgICAgICAgICB6OiBjLnosXG4gICAgICAgICAgICB0eXBlOiBjLnR5cGUsXG4gICAgICAgICAgICB0eXBlczogdVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGwgJiYgIWwuZG9uZSAmJiAobyA9IGEucmV0dXJuKSAmJiBvLmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpeGVkVHlwZVNsb3RzOiBuLFxuICAgICAgZml4ZWRUaWxlczogaVxuICAgIH07XG4gIH1cbiAgY29tcHV0ZShlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICBsLFxuICAgICAgcyxcbiAgICAgIGMsXG4gICAgICB1LFxuICAgICAgcCxcbiAgICAgIGYsXG4gICAgICBkLFxuICAgICAgaCxcbiAgICAgIHksXG4gICAgICBtLFxuICAgICAgdiA9IHRoaXMsXG4gICAgICBnID0gbmV3IFNldCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfID0gX192YWx1ZXModC5maXhlZFRpbGVzKSwgVCA9IF8ubmV4dCgpOyAhVC5kb25lOyBUID0gXy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIEMgPSBULnZhbHVlO1xuICAgICAgICBnLmFkZChDLmlkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgVCAmJiAhVC5kb25lICYmIChuID0gXy5yZXR1cm4pICYmIG4uY2FsbChfKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgYiA9IG5ldyBTZXQoZyksXG4gICAgICBFID0gZnVuY3Rpb24gRShlKSB7XG4gICAgICAgIHZhciB0ID0gUy5fc2ltVGlsZXMuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LmlkID09PSBlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF0KSByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICB2YXIgbyA9IFMuX3NpbVRpbGVzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5jYXJkSWQgPT09IHQuY2FyZElkICYmICFiLmhhcyhlLmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG8gJiYgYi5hZGQoby5pZCk7XG4gICAgICB9LFxuICAgICAgUyA9IHRoaXM7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIEkgPSBfX3ZhbHVlcyhnKSwgdyA9IEkubmV4dCgpOyAhdy5kb25lOyB3ID0gSS5uZXh0KCkpIEUody52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHcgJiYgIXcuZG9uZSAmJiAoYSA9IEkucmV0dXJuKSAmJiBhLmNhbGwoSSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIEIgPSBfX3ZhbHVlcyh0aGlzLl9zaW1UaWxlcyksIHggPSBCLm5leHQoKTsgIXguZG9uZTsgeCA9IEIubmV4dCgpKSB7XG4gICAgICAgIHZhciBNID0geC52YWx1ZTtcbiAgICAgICAgaWYgKGIuaGFzKE0uaWQpKSB7XG4gICAgICAgICAgdGhpcy5fc2ltTWFwTGF5ZXJzW00ubGF5ZXJdLnJlbW92ZUNhcmQoTSk7XG4gICAgICAgICAgTS5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgeCAmJiAheC5kb25lICYmIChzID0gQi5yZXR1cm4pICYmIHMuY2FsbChCKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChsKSB0aHJvdyBsLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zaW1UaWxlcyA9IHRoaXMuX3NpbVRpbGVzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuICFiLmhhcyhlLmlkKTtcbiAgICB9KTtcbiAgICB2YXIgTyA9IHRoaXMuZmluZFNlcXVlbmNlKHRoaXMuX3NpbVRpbGVzKTtcbiAgICBpZiAoIU8pIHJldHVybiBudWxsO1xuICAgIHZhciBEID0gZnVuY3Rpb24gRChlLCB0LCBvKSB7XG4gICAgICAgIHJldHVybiBlICsgXCIsXCIgKyB0ICsgXCIsXCIgKyBvO1xuICAgICAgfSxcbiAgICAgIFAgPSBmdW5jdGlvbiBQKGUpIHtcbiAgICAgICAgcmV0dXJuIEQoZS5ncmlkUG9zWCwgZS5ncmlkUG9zWSwgZS5sYXllcik7XG4gICAgICB9LFxuICAgICAgQSA9IG5ldyBNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgUiA9IF9fdmFsdWVzKHQuZml4ZWRUeXBlU2xvdHMpLCBOID0gUi5uZXh0KCk7ICFOLmRvbmU7IE4gPSBSLm5leHQoKSkge1xuICAgICAgICBDID0gTi52YWx1ZTtcbiAgICAgICAgQS5zZXQoRChDLngsIEMueSwgQy56KSwgQyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIE4gJiYgIU4uZG9uZSAmJiAodSA9IFIucmV0dXJuKSAmJiB1LmNhbGwoUik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYykgdGhyb3cgYy5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaiA9IFtdLCBrID0gMDsgayArIDEgPCBPLmxlbmd0aDsgayArPSAyKSBqLnB1c2goe1xuICAgICAgczE6IE9ba10sXG4gICAgICBzMjogT1trICsgMV0sXG4gICAgICB0aWxlMTogXCJcIixcbiAgICAgIHRpbGUyOiBcIlwiLFxuICAgICAgaXNTZXQ6IGZhbHNlXG4gICAgfSk7XG4gICAgdmFyIEwgPSBuZXcgTWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIEcgPSBfX3ZhbHVlcyh0aGlzLl9zaW1UaWxlcyksIEYgPSBHLm5leHQoKTsgIUYuZG9uZTsgRiA9IEcubmV4dCgpKSB7XG4gICAgICAgIE0gPSBGLnZhbHVlO1xuICAgICAgICBpZiAoIUEuaGFzKFAoTSkpKSB7XG4gICAgICAgICAgTC5oYXMoTS5jYXJkSWQpIHx8IEwuc2V0KE0uY2FyZElkLCBbXSk7XG4gICAgICAgICAgTC5nZXQoTS5jYXJkSWQpLnB1c2goTSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBwID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgRiAmJiAhRi5kb25lICYmIChmID0gRy5yZXR1cm4pICYmIGYuY2FsbChHKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChwKSB0aHJvdyBwLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBMLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiB2LnJhbmRvbVNodWZmbGUoZSk7XG4gICAgfSk7XG4gICAgdmFyIFYgPSBbXTtcbiAgICBMLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGZvciAodmFyIHQgPSAwOyB0ICsgMSA8IGUubGVuZ3RoOyB0ICs9IDIpIFYucHVzaCh7XG4gICAgICAgIHQxOiBlW3RdLFxuICAgICAgICB0MjogZVt0ICsgMV0sXG4gICAgICAgIHVzZWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnJhbmRvbVNodWZmbGUoVik7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIFUgPSBfX3ZhbHVlcyhqKSwgSCA9IFUubmV4dCgpOyAhSC5kb25lOyBIID0gVS5uZXh0KCkpIGlmICghKEogPSBILnZhbHVlKS5pc1NldCkge1xuICAgICAgICB2YXIgVyA9IFYuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiAhZS51c2VkO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFcpIHtcbiAgICAgICAgICBXLnVzZWQgPSB0cnVlO1xuICAgICAgICAgIEoudGlsZTEgPSBXLnQxLmlkO1xuICAgICAgICAgIEoudGlsZTIgPSBXLnQyLmlkO1xuICAgICAgICAgIEouaXNTZXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIEggJiYgIUguZG9uZSAmJiAoaCA9IFUucmV0dXJuKSAmJiBoLmNhbGwoVSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZCkgdGhyb3cgZC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHogPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgWSA9IF9fdmFsdWVzKGopLCBLID0gWS5uZXh0KCk7ICFLLmRvbmU7IEsgPSBZLm5leHQoKSkge1xuICAgICAgICB2YXIgSjtcbiAgICAgICAgaWYgKChKID0gSy52YWx1ZSkudGlsZTEgJiYgSi50aWxlMikge1xuICAgICAgICAgIHoucHVzaCh7XG4gICAgICAgICAgICB0aWxlSWQ6IEoudGlsZTEsXG4gICAgICAgICAgICB4OiBKLnMxLmdyaWRQb3NYLFxuICAgICAgICAgICAgeTogSi5zMS5ncmlkUG9zWSxcbiAgICAgICAgICAgIHo6IEouczEubGF5ZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB6LnB1c2goe1xuICAgICAgICAgICAgdGlsZUlkOiBKLnRpbGUyLFxuICAgICAgICAgICAgeDogSi5zMi5ncmlkUG9zWCxcbiAgICAgICAgICAgIHk6IEouczIuZ3JpZFBvc1ksXG4gICAgICAgICAgICB6OiBKLnMyLmxheWVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB5ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgSyAmJiAhSy5kb25lICYmIChtID0gWS5yZXR1cm4pICYmIG0uY2FsbChZKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh5KSB0aHJvdyB5LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gei5sZW5ndGggPiAwID8geiA6IG51bGw7XG4gIH1cbiAgZml4Rml4ZWRUeXBlU2xvdHMoZSwgdCkge1xuICAgIHZhciBvLCBpO1xuICAgIGlmICgwICE9PSB0LmZpeGVkVHlwZVNsb3RzLmxlbmd0aCkge1xuICAgICAgdmFyIGEgPSBmdW5jdGlvbiBhKGUsIHQsIG8pIHtcbiAgICAgICAgICByZXR1cm4gZSArIFwiLFwiICsgdCArIFwiLFwiICsgbztcbiAgICAgICAgfSxcbiAgICAgICAgbCA9IGZ1bmN0aW9uIGwoZSkge1xuICAgICAgICAgIHJldHVybiBhKGUuZ3JpZFBvc1gsIGUuZ3JpZFBvc1ksIGUubGF5ZXIpO1xuICAgICAgICB9LFxuICAgICAgICBzID0gbmV3IE1hcCh0LmZpeGVkVHlwZVNsb3RzLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBbYShlLngsIGUueSwgZS56KSwgZV07XG4gICAgICAgIH0pKSxcbiAgICAgICAgYyA9IG5ldyBNYXAodGhpcy5fc2ltVGlsZXMubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIFtlLmlkLCBlXTtcbiAgICAgICAgfSkpLFxuICAgICAgICB1ID0gZnVuY3Rpb24gdShlLCB0KSB7XG4gICAgICAgICAgdmFyIG8gPSBjLmdldChlKTtcbiAgICAgICAgICByZXR1cm4gISFvICYmIHQuZXZlcnkoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBvLmNoZWNrSGFzVHlwZShlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcCA9IGZ1bmN0aW9uIHAoZSkge1xuICAgICAgICAgIHJldHVybiAhcy5oYXMobChlLnMxKSkgJiYgIXMuaGFzKGwoZS5zMikpO1xuICAgICAgICB9LFxuICAgICAgICBmID0gZnVuY3Rpb24gZih0LCBvLCBpKSB7XG4gICAgICAgICAgdmFyIGEsIGwsIHMsIGM7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGYgPSBfX3ZhbHVlcyhlKSwgZCA9IGYubmV4dCgpOyAhZC5kb25lOyBkID0gZi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgdmFyIGggPSBkLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoaCAhPT0gdCAmJiBwKGgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCghbyB8fCB1KGgudGlsZTEsIG8pKSAmJiAoIWkgfHwgdShoLnRpbGUyLCBpKSkpIHtcbiAgICAgICAgICAgICAgICAgIHMgPSBfX3JlYWQoW2gudGlsZTEsIGgudGlsZTIsIHQudGlsZTEsIHQudGlsZTJdLCA0KSwgdC50aWxlMSA9IHNbMF0sIHQudGlsZTIgPSBzWzFdLCBoLnRpbGUxID0gc1syXSwgaC50aWxlMiA9IHNbM107XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoIW8gfHwgdShoLnRpbGUyLCBvKSkgJiYgKCFpIHx8IHUoaC50aWxlMSwgaSkpKSB7XG4gICAgICAgICAgICAgICAgICBjID0gX19yZWFkKFtoLnRpbGUyLCBoLnRpbGUxLCB0LnRpbGUxLCB0LnRpbGUyXSwgNCksIHQudGlsZTEgPSBjWzBdLCB0LnRpbGUyID0gY1sxXSwgaC50aWxlMSA9IGNbMl0sIGgudGlsZTIgPSBjWzNdO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGEgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBkICYmICFkLmRvbmUgJiYgKGwgPSBmLnJldHVybikgJiYgbC5jYWxsKGYpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKGEpIHRocm93IGEuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgZCA9IF9fdmFsdWVzKGUpLCBoID0gZC5uZXh0KCk7ICFoLmRvbmU7IGggPSBkLm5leHQoKSkge1xuICAgICAgICAgIHZhciB5ID0gaC52YWx1ZSxcbiAgICAgICAgICAgIG0gPSBzLmdldChsKHkuczEpKSxcbiAgICAgICAgICAgIHYgPSBzLmdldChsKHkuczIpKSxcbiAgICAgICAgICAgIGcgPSAhIW0gJiYgIXUoeS50aWxlMSwgbS50eXBlcyksXG4gICAgICAgICAgICBfID0gISF2ICYmICF1KHkudGlsZTIsIHYudHlwZXMpO1xuICAgICAgICAgIChnIHx8IF8pICYmIGYoeSwgbS50eXBlcywgdi50eXBlcyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBoICYmICFoLmRvbmUgJiYgKGkgPSBkLnJldHVybikgJiYgaS5jYWxsKGQpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFwcGx5U3dhcChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgaSA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgYSA9IGkudGlsZU9iamVjdE1hcCgpLFxuICAgICAgbCA9IGZ1bmN0aW9uIGwoZSwgdCwgbykge1xuICAgICAgICByZXR1cm4gZSArIFwiLFwiICsgdCArIFwiLFwiICsgbztcbiAgICAgIH0sXG4gICAgICBzID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXMoYSksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBwID0gX19yZWFkKHUudmFsdWUsIDIpLFxuICAgICAgICAgIGYgPSBwWzBdLFxuICAgICAgICAgIGQgPSBwWzFdO1xuICAgICAgICBkLmlzVmFsaWQgJiYgcy5zZXQobChkLmdyaWRQb3NYLCBkLmdyaWRQb3NZLCBkLmxheWVyKSwgZik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHUgJiYgIXUuZG9uZSAmJiAobyA9IGMucmV0dXJuKSAmJiBvLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaCA9IGUubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSBzLmdldChsKGUueCwgZS55LCBlLnopKSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IFwiXCI7XG4gICAgICB9KSwgeSA9IDA7IHkgPCBlLmxlbmd0aDsgeSsrKSB7XG4gICAgICB2YXIgbSA9IGVbeV0udGlsZUlkLFxuICAgICAgICB2ID0gaFt5XTtcbiAgICAgIGlmICh2ICE9PSBtKSB7XG4gICAgICAgIHZhciBnID0gaC5pbmRleE9mKG0pO1xuICAgICAgICBpLnN3YXBUaWxlUG9zaXRpb25zKHYsIG0pO1xuICAgICAgICBoW2ddID0gdjtcbiAgICAgICAgaFt5XSA9IG07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGhhc1NvbHV0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgZS51cGRhdGVDYW5NYXRjaFRpbGVzKCk7XG4gICAgcmV0dXJuIGUuZ2V0Q2FuTWF0Y2hDYXJkUGFpck51bSgpID4gMDtcbiAgfVxuICBpc0ZpeGVkVGlsZShlKSB7XG4gICAgcmV0dXJuIGUuZ2V0SXNJblNsb3RCYXIoKTtcbiAgfVxuICBpc0ZpeGVkVHlwZVNsb3QoZSkge1xuICAgIGlmIChlLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuUm9sbENhcmQpKSByZXR1cm4gW0VUaWxlVHlwZS5Sb2xsQ2FyZF07XG4gIH1cbiAgZmluZFNlcXVlbmNlKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBvID0gW10sXG4gICAgICBuID0gWy4uLmVdLFxuICAgICAgYSA9IDAsXG4gICAgICBsID0gZnVuY3Rpb24gbChlID0gMCkge1xuICAgICAgICB2YXIgaSwgcztcbiAgICAgICAgYSA9IE1hdGgubWF4KGEsIGUpO1xuICAgICAgICBpZiAoMCA9PT0gbi5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICB2YXIgYyA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyhuKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBmID0gcC52YWx1ZTtcbiAgICAgICAgICAgIDAgPT09IHQuX3NpbS5pc0NhcmRMb2NrKGYpICYmIGMucHVzaChmKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwICYmICFwLmRvbmUgJiYgKHMgPSB1LnJldHVybikgJiYgcy5jYWxsKHUpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMubGVuZ3RoIDwgMikgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0LnJhbmRvbVNodWZmbGUoYyk7XG4gICAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgYy5sZW5ndGg7IGQrKykge1xuICAgICAgICAgIHQuZGV0YWNoKGNbZF0sIG4pO1xuICAgICAgICAgIG8ucHVzaChjW2RdKTtcbiAgICAgICAgICBmb3IgKHZhciBoID0gZCArIDE7IGggPCBjLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICB0LmRldGFjaChjW2hdLCBuKTtcbiAgICAgICAgICAgIG8ucHVzaChjW2hdKTtcbiAgICAgICAgICAgIGlmIChsKGUgKyAxKSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB0LmF0dGFjaChjW2hdLCBuKTtcbiAgICAgICAgICAgIG8ucG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHQuYXR0YWNoKGNbZF0sIG4pO1xuICAgICAgICAgIG8ucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICByZXR1cm4gbCgwKSA/IG8gOiBudWxsO1xuICB9XG4gIGRldGFjaChlLCB0KSB7XG4gICAgdmFyIG8gPSB0LmluZGV4T2YoZSk7XG4gICAgbyA+IC0xICYmIHQuc3BsaWNlKG8sIDEpO1xuICAgIHRoaXMuX3NpbU1hcExheWVyc1tlLmxheWVyXS5yZWZyZXNoR3JpZFN0YXRlX1JlbW92ZShlKTtcbiAgfVxuICBhdHRhY2goZSwgdCkge1xuICAgIHQucHVzaChlKTtcbiAgICB0aGlzLl9zaW1NYXBMYXllcnNbZS5sYXllcl0ucmVmcmVzaEdyaWRTdGF0ZV9BZGQoZSk7XG4gIH1cbiAgcmFuZG9tU2h1ZmZsZShlKSB7XG4gICAgZm9yICh2YXIgdCA9IGUubGVuZ3RoOyB0ID4gMTspIHtcbiAgICAgIHZhciBvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdC0tKSxcbiAgICAgICAgbiA9IGVbdF07XG4gICAgICBlW3RdID0gZVtvXTtcbiAgICAgIGVbb10gPSBuO1xuICAgIH1cbiAgfVxufSJdfQ==
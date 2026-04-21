
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2HitTipsChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '801dbH0u3hICZqiiMm7Y/AH', 'Tile2HitTipsChecker');
// Scripts/process/tile2/Tile2HitTipsChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2HitTipsChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var TileMapSimulator_1 = require("../../objects/TileMapSimulator");
var Tile2HitTipsChecker = /** @class */ (function (_super) {
    __extends(Tile2HitTipsChecker, _super);
    function Tile2HitTipsChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2HitTipsChecker.prototype.computeTile2Hint = function () {
        var e = this._context.getTileMapObject(), t = this._context.getGameData(), o = t.slotBarIds || [], n = o.length;
        e.updateCanMatchTiles();
        var i = this.getBoardTiles(e), r = this.getSlotCardIds(o);
        if (n > 0 && n <= 3) {
            var a = this.findSingleMatchHolder(i, r, e);
            if (a) {
                var l = this.findSlotTileId(e, o, a.cardId);
                return {
                    clearId1: a.id,
                    clearId2: l || a.id
                };
            }
        }
        var s = this.getBoardPairs(e, i);
        if (n <= 2 && s.length > 0) {
            var c = this.pickBestPair(s);
            c.map(function (e) {
                return e.id;
            }).join(",");
            if (c)
                return {
                    clearId1: c[0].id,
                    clearId2: c[1].id
                };
        }
        if (n > 0 && n <= 2 && 0 === s.length && (u = this.findRevealMatchHolder(i, r, e, t.slotBarCount, n))) {
            l = this.findSlotTileId(e, o, u.target.cardId);
            return {
                clearId1: u.target.id,
                clearId2: l || u.target.id,
                flipId: u.flip.id
            };
        }
        if (n <= 1 && 0 === s.length) {
            var u;
            if (u = this.findRevealFormPair(i, e, t.slotBarCount, n))
                return {
                    clearId1: u.b1.id,
                    clearId2: u.b2.id,
                    flipId: u.flip.id
                };
        }
        return null;
    };
    Tile2HitTipsChecker.prototype.hasMatchHolder = function () {
        var e, t, o = this._context.getGameData(), n = this._context.getTileMapObject(), i = o.slotBarIds || [];
        if (0 === i.length)
            return true;
        var a = n.getAllCardTiles().filter(function (e) {
            return !(null == e || !e.isValid || e.getIsInSlotBar() || 0 !== n.isCardLock(e));
        });
        if (0 === a.length)
            return false;
        var l = this.getSlotCardIds(i);
        if (0 === l.size)
            return false;
        try {
            for (var s = __values(a), c = s.next(); !c.done; c = s.next()) {
                var u = c.value;
                if (l.has(u.cardId))
                    return true;
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
        return false;
    };
    Tile2HitTipsChecker.prototype.getBoardTiles = function (e) {
        var t = this;
        return e.getAllCardTiles().filter(function (o) {
            return !o.getIsInSlotBar() && !t.isRollLockCard(o, e);
        });
    };
    Tile2HitTipsChecker.prototype.isRollLockCard = function (e, t) {
        return e.checkHasType(TileTypeEnum_1.ETileType.RollCard) && 0 !== t.isCardLock(e);
    };
    Tile2HitTipsChecker.prototype.getSlotCardIds = function (e) {
        var t, o, n = this._context.getTileMapObject(), i = new Set();
        try {
            for (var a = __values(e), l = a.next(); !l.done; l = a.next()) {
                var s = l.value, c = n.getTileObjectByPosId(s);
                (null == c ? void 0 : c.isValid) && i.add(c.cardId);
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
        return i;
    };
    Tile2HitTipsChecker.prototype.findSlotTileId = function (e, t, o) {
        var n, i;
        try {
            for (var a = __values(t), l = a.next(); !l.done; l = a.next()) {
                var s = l.value, c = e.getTileObjectByPosId(s);
                if ((null == c ? void 0 : c.isValid) && c.cardId === o)
                    return c.id;
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (i = a.return) && i.call(a);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        return null;
    };
    Tile2HitTipsChecker.prototype.getBoardPairs = function (e, t) {
        var o, n, i, a, s = [], c = new Set(t.map(function (e) {
            return e.id;
        })), u = new Set(), p = function p(e, t) {
            var o = [e.id, t.id].sort().join("|");
            if (!u.has(o)) {
                u.add(o);
                s.push([e, t]);
            }
        }, f = function f(e) {
            return c.has(e.id);
        }, d = function d(t) {
            return 0 !== e.isCardLock(t);
        };
        e.getCanMatchTiles().forEach(function (e) {
            var t = e.filter(function (e) {
                return f(e);
            });
            if (t.length >= 2)
                for (var o = 0; o + 1 < t.length; o += 2)
                    p(t[o], t[o + 1]);
        });
        try {
            for (var h = __values(t), y = h.next(); !y.done; y = h.next()) {
                var m = y.value;
                if (m.isValid && f(m) && d(m)) {
                    var v = this.getAllCoverCards(m, e), g = this.dedupTiles(e.getAdjacentLeftCards(m)), _ = this.dedupTiles(e.getAdjacentRightCards(m));
                    if (!(g.length > 0 && _.length > 0 && v.length > 0))
                        if (g.length > 0 && _.length > 0)
                            try {
                                for (var T = (i = void 0, __values(__spreadArrays(g, _))), C = T.next(); !C.done; C = T.next()) {
                                    var b = C.value;
                                    if (f(b) && b.cardId === m.cardId && !d(b)) {
                                        var E = 1 === g.length && g[0].id === b.id, S = 1 === _.length && _[0].id === b.id;
                                        (E || S) && p(b, m);
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
                                    C && !C.done && (a = T.return) && a.call(T);
                                }
                                finally {
                                    if (i)
                                        throw i.error;
                                }
                            }
                        else if (1 === v.length) {
                            b = v[0];
                            f(b) && b.cardId === m.cardId && !d(b) && p(b, m);
                        }
                }
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                y && !y.done && (n = h.return) && n.call(h);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return s;
    };
    Tile2HitTipsChecker.prototype.findSingleMatchHolder = function (e, t, o) {
        var n = e.filter(function (e) {
            return !!e.isValid && 0 === o.isCardLock(e) && t.has(e.cardId);
        });
        return this.pickBestSingle(n);
    };
    Tile2HitTipsChecker.prototype.findRevealMatchHolder = function (e, t, o, n, i) {
        var a, s, c, u, p, f, d = this, h = n - i - 1;
        if (h <= 0)
            return null;
        var y = new Map(), m = [];
        try {
            for (var v = __values(e), g = v.next(); !g.done; g = v.next()) {
                var _ = g.value;
                if (_.isValid && t.has(_.cardId) && 0 !== o.isCardLock(_)) {
                    var T = this.calcMinRevealCount(_, o, y);
                    T > 0 && T <= h && m.push({
                        tile: _,
                        revealCount: T
                    });
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
                g && !g.done && (s = v.return) && s.call(v);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        if (0 === m.length)
            return null;
        var C = Math.min.apply(Math, __spreadArrays(m.map(function (e) {
            return e.revealCount;
        }))), b = m.filter(function (e) {
            return e.revealCount === C;
        }), E = new Map(), S = new Map();
        try {
            for (var I = __values(b), w = I.next(); !w.done; w = I.next()) {
                var B = w.value;
                try {
                    for (var x = (p = void 0, __values(this.findClickableBlockers(B.tile, o, y))), M = x.next(); !M.done; M = x.next()) {
                        var O = M.value;
                        if (!E.has(O.id)) {
                            E.set(O.id, O);
                            S.set(O.id, B.tile);
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
                        M && !M.done && (f = x.return) && f.call(x);
                    }
                    finally {
                        if (p)
                            throw p.error;
                    }
                }
            }
        }
        catch (e) {
            c = {
                error: e
            };
        }
        finally {
            try {
                w && !w.done && (u = I.return) && u.call(I);
            }
            finally {
                if (c)
                    throw c.error;
            }
        }
        var D = Array.from(E.values());
        if (0 === D.length)
            return null;
        if (1 === D.length)
            return {
                flip: D[0],
                target: S.get(D[0].id)
            };
        var P = D.map(function (e) {
            return {
                tile: e,
                score: d.scoreRevealMatchHolder(e)
            };
        });
        P.sort(function (e, t) {
            return t.score - e.score;
        });
        var A = P[0].tile;
        return {
            flip: A,
            target: S.get(A.id)
        };
    };
    Tile2HitTipsChecker.prototype.calcMinRevealCount = function (e, t, o) {
        var n, i, a, l, s, c, u, p, f, d, h, y, m = o.get(e.id);
        if (void 0 !== m)
            return m;
        o.set(e.id, 999);
        if (0 === t.isCardLock(e)) {
            o.set(e.id, 0);
            return 0;
        }
        var v = 0, g = this.getAllCoverCards(e, t);
        try {
            for (var _ = __values(g), T = _.next(); !T.done; T = _.next()) {
                var C = T.value;
                if ((v += this.calcMinRevealCount(C, t, o) + 1) >= 999)
                    break;
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                T && !T.done && (i = _.return) && i.call(_);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        if (v < 999) {
            var b = this.dedupTiles(t.getAdjacentLeftCards(e)), E = this.dedupTiles(t.getAdjacentRightCards(e));
            if (b.length > 0 && E.length > 0) {
                var S = 0;
                try {
                    for (var I = __values(b), w = I.next(); !w.done; w = I.next()) {
                        var B = w.value;
                        if ((S += this.calcMinRevealCount(B, t, o) + 1) >= 999)
                            break;
                    }
                }
                catch (e) {
                    a = {
                        error: e
                    };
                }
                finally {
                    try {
                        w && !w.done && (l = I.return) && l.call(I);
                    }
                    finally {
                        if (a)
                            throw a.error;
                    }
                }
                var x = 0;
                try {
                    for (var M = __values(E), O = M.next(); !O.done; O = M.next()) {
                        var D = O.value;
                        if ((x += this.calcMinRevealCount(D, t, o) + 1) >= 999)
                            break;
                    }
                }
                catch (e) {
                    s = {
                        error: e
                    };
                }
                finally {
                    try {
                        O && !O.done && (c = M.return) && c.call(M);
                    }
                    finally {
                        if (s)
                            throw s.error;
                    }
                }
                var P = Math.min(S, x);
                if (g.length > 0) {
                    var A = new Set(g.map(function (e) {
                        return e.id;
                    }));
                    try {
                        for (var R = __values([b, E]), N = R.next(); !N.done; N = R.next()) {
                            var j = N.value, k = 0;
                            try {
                                for (var L = (f = void 0, __values(j)), G = L.next(); !G.done; G = L.next()) {
                                    var F = G.value, V = this.getAllCoverCards(F, t), U = 0;
                                    try {
                                        for (var H = (h = void 0, __values(V)), W = H.next(); !W.done; W = H.next()) {
                                            var z = W.value;
                                            A.has(z.id) && (U += this.calcMinRevealCount(z, t, o) + 1);
                                        }
                                    }
                                    catch (e) {
                                        h = {
                                            error: e
                                        };
                                    }
                                    finally {
                                        try {
                                            W && !W.done && (y = H.return) && y.call(H);
                                        }
                                        finally {
                                            if (h)
                                                throw h.error;
                                        }
                                    }
                                    if ((k += Math.max(0, this.calcMinRevealCount(F, t, o) - U) + 1) >= 999)
                                        break;
                                }
                            }
                            catch (e) {
                                f = {
                                    error: e
                                };
                            }
                            finally {
                                try {
                                    G && !G.done && (d = L.return) && d.call(L);
                                }
                                finally {
                                    if (f)
                                        throw f.error;
                                }
                            }
                            P = Math.min(P, k);
                        }
                    }
                    catch (e) {
                        u = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            N && !N.done && (p = R.return) && p.call(R);
                        }
                        finally {
                            if (u)
                                throw u.error;
                        }
                    }
                }
                v += P;
            }
        }
        var Y = Math.min(v, 999);
        o.set(e.id, Y);
        return Y;
    };
    Tile2HitTipsChecker.prototype.findClickableBlockers = function (e, t, o, n) {
        var i, a, s, c, u, p, f, d;
        n || (n = new Set());
        if (n.has(e.id))
            return [];
        n.add(e.id);
        if (0 === t.isCardLock(e))
            return [e];
        var h = [];
        try {
            for (var y = __values(this.getAllCoverCards(e, t)), m = y.next(); !m.done; m = y.next()) {
                var v = m.value;
                h.push.apply(h, __spreadArrays(this.findClickableBlockers(v, t, o, n)));
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                m && !m.done && (a = y.return) && a.call(y);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        var g = this.dedupTiles(t.getAdjacentLeftCards(e)), _ = this.dedupTiles(t.getAdjacentRightCards(e));
        if (g.length > 0 && _.length > 0) {
            var T = g.some(function (e) {
                return n.has(e.id);
            }), C = _.some(function (e) {
                return n.has(e.id);
            }), b = void 0;
            if (T && C)
                b = null;
            else if (T)
                b = _;
            else if (C)
                b = g;
            else {
                var E = 0;
                try {
                    for (var S = __values(g), I = S.next(); !I.done; I = S.next()) {
                        var w = I.value;
                        E += this.calcMinRevealCount(w, t, o) + 1;
                    }
                }
                catch (e) {
                    s = {
                        error: e
                    };
                }
                finally {
                    try {
                        I && !I.done && (c = S.return) && c.call(S);
                    }
                    finally {
                        if (s)
                            throw s.error;
                    }
                }
                var B = 0;
                try {
                    for (var x = __values(_), M = x.next(); !M.done; M = x.next()) {
                        var O = M.value;
                        B += this.calcMinRevealCount(O, t, o) + 1;
                    }
                }
                catch (e) {
                    u = {
                        error: e
                    };
                }
                finally {
                    try {
                        M && !M.done && (p = x.return) && p.call(x);
                    }
                    finally {
                        if (u)
                            throw u.error;
                    }
                }
                b = E <= B ? g : _;
            }
            if (b)
                try {
                    for (var D = __values(b), P = D.next(); !P.done; P = D.next()) {
                        var A = P.value;
                        h.push.apply(h, __spreadArrays(this.findClickableBlockers(A, t, o, n)));
                    }
                }
                catch (e) {
                    f = {
                        error: e
                    };
                }
                finally {
                    try {
                        P && !P.done && (d = D.return) && d.call(D);
                    }
                    finally {
                        if (f)
                            throw f.error;
                    }
                }
        }
        return h;
    };
    Tile2HitTipsChecker.prototype.getAllCoverCards = function (e, t) {
        var o, n, i = [], a = new Set(), l = t.mapLayers().length;
        try {
            for (var s = __values(e.ownerGridIds), c = s.next(); !c.done; c = s.next())
                for (var u = c.value, p = e.layer + 1; p < l; p++)
                    if (t.isHasCard(p, u)) {
                        var f = t.getTileObjectByGridIndex(p, u);
                        if (f && !a.has(f.id)) {
                            a.add(f.id);
                            i.push(f);
                        }
                        break;
                    }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (n = s.return) && n.call(s);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return i;
    };
    Tile2HitTipsChecker.prototype.dedupTiles = function (e) {
        var t = new Set();
        return e.filter(function (e) {
            if (t.has(e.id))
                return false;
            t.add(e.id);
            return true;
        });
    };
    Tile2HitTipsChecker.prototype.scoreRevealMatchHolder = function (e) {
        var t = 0;
        this.isRollCard(e) || (t += 100);
        return t + this.countNewPairsAfterHint([e.id]);
    };
    Tile2HitTipsChecker.prototype.findRevealFormPair = function (e, t, o, n) {
        var i, s, c, u, p, f, d, h, y, m, v = this, g = o - n - 2;
        if (g < 0)
            return null;
        var _ = new Map();
        try {
            for (var T = __values(e), C = T.next(); !C.done; C = T.next()) {
                var b = C.value;
                if (b.isValid) {
                    var E = _.get(b.cardId);
                    if (E) {
                        E.push(b);
                    }
                    else {
                        _.set(b.cardId, [b]);
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
                C && !C.done && (s = T.return) && s.call(T);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        var S = new Map(), I = [];
        try {
            for (var w = __values(_), B = w.next(); !B.done; B = w.next()) {
                var x = __read(B.value, 2)[1];
                if (!(x.length < 2))
                    for (var M = 0; M < x.length; M++)
                        for (var O = M + 1; O < x.length; O++) {
                            var D = x[M], P = x[O], A = this.calcMinRevealCount(D, t, S), R = this.calcMinRevealCount(P, t, S);
                            if (!(A >= 999 && R >= 999)) {
                                var N = this.calcPairRevealCount(D, P, A, R, t, S);
                                N > g || N >= 999 || I.push({
                                    b1: D,
                                    b2: P,
                                    revealCount: N
                                });
                            }
                        }
            }
        }
        catch (e) {
            c = {
                error: e
            };
        }
        finally {
            try {
                B && !B.done && (u = w.return) && u.call(w);
            }
            finally {
                if (c)
                    throw c.error;
            }
        }
        if (0 === I.length)
            return null;
        var j = Math.min.apply(Math, __spreadArrays(I.map(function (e) {
            return e.revealCount;
        }))), k = I.filter(function (e) {
            return e.revealCount === j;
        }), L = new Map(), G = new Map();
        try {
            for (var F = __values(k), V = F.next(); !V.done; V = F.next()) {
                var U = V.value;
                try {
                    for (var H = (d = void 0, __values([U.b1, U.b2])), W = H.next(); !W.done; W = H.next()) {
                        var z = W.value;
                        if (0 !== t.isCardLock(z))
                            try {
                                for (var Y = (y = void 0, __values(this.findClickableBlockers(z, t, S))), K = Y.next(); !K.done; K = Y.next()) {
                                    var J = K.value;
                                    if (!L.has(J.id)) {
                                        L.set(J.id, J);
                                        G.set(J.id, {
                                            b1: U.b1,
                                            b2: U.b2
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
                    }
                }
                catch (e) {
                    d = {
                        error: e
                    };
                }
                finally {
                    try {
                        W && !W.done && (h = H.return) && h.call(H);
                    }
                    finally {
                        if (d)
                            throw d.error;
                    }
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
                V && !V.done && (f = F.return) && f.call(F);
            }
            finally {
                if (p)
                    throw p.error;
            }
        }
        var Z = Array.from(L.values());
        if (0 === Z.length)
            return null;
        if (1 === Z.length) {
            var X = G.get(Z[0].id);
            return {
                flip: Z[0],
                b1: X.b1,
                b2: X.b2
            };
        }
        var q = Z.map(function (e) {
            return {
                tile: e,
                score: v.scoreRevealMatchHolder(e)
            };
        });
        q.sort(function (e, t) {
            return t.score - e.score;
        });
        var Q = q[0].tile, $ = G.get(Q.id);
        return {
            flip: Q,
            b1: $.b1,
            b2: $.b2
        };
    };
    Tile2HitTipsChecker.prototype.calcPairRevealCount = function (e, t, o, n, i, a) {
        var l, s, c, u, p, f, d = o + n, h = this.collectBlockerSets(e, i, a), y = this.collectBlockerSets(t, i, a);
        try {
            for (var m = __values(h), v = m.next(); !v.done; v = m.next()) {
                var g = v.value;
                try {
                    for (var _ = (c = void 0, __values(y)), T = _.next(); !T.done; T = _.next()) {
                        var C = T.value, b = new Set(g);
                        try {
                            for (var E = (p = void 0, __values(C)), S = E.next(); !S.done; S = E.next()) {
                                var I = S.value;
                                b.add(I);
                            }
                        }
                        catch (e) {
                            p = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                S && !S.done && (f = E.return) && f.call(E);
                            }
                            finally {
                                if (p)
                                    throw p.error;
                            }
                        }
                        var w = b.size;
                        b.has(e.id) && w--;
                        b.has(t.id) && w--;
                        d = Math.min(d, w);
                    }
                }
                catch (e) {
                    c = {
                        error: e
                    };
                }
                finally {
                    try {
                        T && !T.done && (u = _.return) && u.call(_);
                    }
                    finally {
                        if (c)
                            throw c.error;
                    }
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
                v && !v.done && (s = m.return) && s.call(m);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        return d;
    };
    Tile2HitTipsChecker.prototype.collectBlockerSets = function (e, t, o) {
        var n, i, a, l, s, c;
        if (0 === t.isCardLock(e))
            return [new Set()];
        var u = this.getAllCoverCards(e, t), p = this.dedupTiles(t.getAdjacentLeftCards(e)), f = this.dedupTiles(t.getAdjacentRightCards(e)), d = new Set(), h = new Set([e.id]);
        try {
            for (var y = __values(u), m = y.next(); !m.done; m = y.next()) {
                var v = m.value;
                d.add(v.id);
                this.collectBlockerChain(v, t, o, d, h);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                m && !m.done && (i = y.return) && i.call(y);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        if (0 === p.length || 0 === f.length)
            return [d];
        var g = [];
        try {
            for (var _ = __values([p, f]), T = _.next(); !T.done; T = _.next()) {
                var C = T.value, b = new Set(d), E = new Set(h);
                try {
                    for (var S = (s = void 0, __values(C)), I = S.next(); !I.done; I = S.next()) {
                        var w = I.value;
                        b.add(w.id);
                        this.collectBlockerChain(w, t, o, b, E);
                    }
                }
                catch (e) {
                    s = {
                        error: e
                    };
                }
                finally {
                    try {
                        I && !I.done && (c = S.return) && c.call(S);
                    }
                    finally {
                        if (s)
                            throw s.error;
                    }
                }
                g.push(b);
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                T && !T.done && (l = _.return) && l.call(_);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        return g;
    };
    Tile2HitTipsChecker.prototype.collectBlockerChain = function (e, t, o, n, i) {
        var a, l, s, c, u, p, f, d;
        if (!i.has(e.id)) {
            i.add(e.id);
            if (0 !== t.isCardLock(e)) {
                var h = this.getAllCoverCards(e, t);
                try {
                    for (var y = __values(h), m = y.next(); !m.done; m = y.next()) {
                        var v = m.value;
                        n.add(v.id);
                        this.collectBlockerChain(v, t, o, n, i);
                    }
                }
                catch (e) {
                    a = {
                        error: e
                    };
                }
                finally {
                    try {
                        m && !m.done && (l = y.return) && l.call(y);
                    }
                    finally {
                        if (a)
                            throw a.error;
                    }
                }
                var g = this.dedupTiles(t.getAdjacentLeftCards(e)), _ = this.dedupTiles(t.getAdjacentRightCards(e));
                if (g.length > 0 && _.length > 0) {
                    var T = g.some(function (e) {
                        return i.has(e.id);
                    }), C = _.some(function (e) {
                        return i.has(e.id);
                    }), b = void 0;
                    if (T && C)
                        b = null;
                    else if (T)
                        b = _;
                    else if (C)
                        b = g;
                    else {
                        var E = 0;
                        try {
                            for (var S = __values(g), I = S.next(); !I.done; I = S.next()) {
                                var w = I.value;
                                E += this.calcMinRevealCount(w, t, o) + 1;
                            }
                        }
                        catch (e) {
                            s = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                I && !I.done && (c = S.return) && c.call(S);
                            }
                            finally {
                                if (s)
                                    throw s.error;
                            }
                        }
                        var B = 0;
                        try {
                            for (var x = __values(_), M = x.next(); !M.done; M = x.next()) {
                                var O = M.value;
                                B += this.calcMinRevealCount(O, t, o) + 1;
                            }
                        }
                        catch (e) {
                            u = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                M && !M.done && (p = x.return) && p.call(x);
                            }
                            finally {
                                if (u)
                                    throw u.error;
                            }
                        }
                        b = E <= B ? g : _;
                    }
                    if (b)
                        try {
                            for (var D = __values(b), P = D.next(); !P.done; P = D.next()) {
                                var A = P.value;
                                n.add(A.id);
                                this.collectBlockerChain(A, t, o, n, i);
                            }
                        }
                        catch (e) {
                            f = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                P && !P.done && (d = D.return) && d.call(D);
                            }
                            finally {
                                if (f)
                                    throw f.error;
                            }
                        }
                }
            }
        }
    };
    Tile2HitTipsChecker.prototype.pickBestSingle = function (e) {
        var t = this;
        if (0 === e.length)
            return null;
        var o = e.map(function (e) {
            return {
                tile: e,
                score: t.scoreSingle(e)
            };
        });
        o.sort(function (e, t) {
            return t.score - e.score;
        });
        return o[0].tile;
    };
    Tile2HitTipsChecker.prototype.pickBestPair = function (e) {
        var t = this;
        if (0 === e.length)
            return null;
        var o = e.map(function (e) {
            return {
                pair: e,
                score: t.scorePair(e)
            };
        });
        o.sort(function (e, t) {
            return t.score - e.score;
        });
        return o[0].pair;
    };
    Tile2HitTipsChecker.prototype.isRollCard = function (e) {
        return e.type === TileTypeEnum_1.ETileType.RollCard;
    };
    Tile2HitTipsChecker.prototype.countNewPairsAfterHint = function (e) {
        var t, o;
        try {
            var n = TileMapSimulator_1.TileMapSimulator.createSim(this._context);
            try {
                for (var i = __values(e), a = i.next(); !a.done; a = i.next()) {
                    var l = a.value, s = n.tileObjectMap().get(l);
                    if (null == s ? void 0 : s.isValid) {
                        s.isValid = false;
                        n.onClear([s]);
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
                    a && !a.done && (o = i.return) && o.call(i);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            n.updateCanMatchTiles();
            return n.getCanMatchCardPairNum();
        }
        catch (e) {
            return 0;
        }
    };
    Tile2HitTipsChecker.prototype.scoreSingle = function (e) {
        var t = 0;
        this.isRollCard(e) || (t += 100);
        var o = [e.id];
        return t + this.countNewPairsAfterHint(o);
    };
    Tile2HitTipsChecker.prototype.scorePair = function (e) {
        var t, o, n = 0;
        try {
            for (var i = __values(e), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                this.isRollCard(l) || (n += 50);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var s = e.map(function (e) {
            return e.id;
        });
        return n + this.countNewPairsAfterHint(s);
    };
    return Tile2HitTipsChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2HitTipsChecker = Tile2HitTipsChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJIaXRUaXBzQ2hlY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCxzRUFBa0U7QUFDbEUsbUVBQWtFO0FBQ2xFO0lBQXlDLHVDQUFjO0lBQ3JELDZCQUFZLENBQUM7ZUFDWCxrQkFBTSxDQUFDLENBQUM7SUFDVixDQUFDO0lBQ0QsOENBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN0QyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFDL0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLElBQUksRUFBRSxFQUN0QixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNmLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQzNCLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVDLE9BQU87b0JBQ0wsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUNkLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7aUJBQ3BCLENBQUM7YUFDSDtTQUNGO1FBQ0QsSUFB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QUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUN2QixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQTNoQ0EsQUEyaENDLENBM2hDd0MsK0JBQWMsR0EyaEN0RDtBQTNoQ1ksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvcmVPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlQ29yZU9iamVjdCc7XG5pbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IFRpbGVNYXBTaW11bGF0b3IgfSBmcm9tICcuLi8uLi9vYmplY3RzL1RpbGVNYXBTaW11bGF0b3InO1xuZXhwb3J0IGNsYXNzIFRpbGUySGl0VGlwc0NoZWNrZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgfVxuICBjb21wdXRlVGlsZTJIaW50KCkge1xuICAgIHZhciBlID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICB0ID0gdGhpcy5fY29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgbyA9IHQuc2xvdEJhcklkcyB8fCBbXSxcbiAgICAgIG4gPSBvLmxlbmd0aDtcbiAgICBlLnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgICB2YXIgaSA9IHRoaXMuZ2V0Qm9hcmRUaWxlcyhlKSxcbiAgICAgIHIgPSB0aGlzLmdldFNsb3RDYXJkSWRzKG8pO1xuICAgIGlmIChuID4gMCAmJiBuIDw9IDMpIHtcbiAgICAgIHZhciBhID0gdGhpcy5maW5kU2luZ2xlTWF0Y2hIb2xkZXIoaSwgciwgZSk7XG4gICAgICBpZiAoYSkge1xuICAgICAgICB2YXIgbCA9IHRoaXMuZmluZFNsb3RUaWxlSWQoZSwgbywgYS5jYXJkSWQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNsZWFySWQxOiBhLmlkLFxuICAgICAgICAgIGNsZWFySWQyOiBsIHx8IGEuaWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHMgPSB0aGlzLmdldEJvYXJkUGFpcnMoZSwgaSk7XG4gICAgaWYgKG4gPD0gMiAmJiBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBjID0gdGhpcy5waWNrQmVzdFBhaXIocyk7XG4gICAgICBjLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pZDtcbiAgICAgIH0pLmpvaW4oXCIsXCIpO1xuICAgICAgaWYgKGMpIHJldHVybiB7XG4gICAgICAgIGNsZWFySWQxOiBjWzBdLmlkLFxuICAgICAgICBjbGVhcklkMjogY1sxXS5pZFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG4gPiAwICYmIG4gPD0gMiAmJiAwID09PSBzLmxlbmd0aCAmJiAodSA9IHRoaXMuZmluZFJldmVhbE1hdGNoSG9sZGVyKGksIHIsIGUsIHQuc2xvdEJhckNvdW50LCBuKSkpIHtcbiAgICAgIGwgPSB0aGlzLmZpbmRTbG90VGlsZUlkKGUsIG8sIHUudGFyZ2V0LmNhcmRJZCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGVhcklkMTogdS50YXJnZXQuaWQsXG4gICAgICAgIGNsZWFySWQyOiBsIHx8IHUudGFyZ2V0LmlkLFxuICAgICAgICBmbGlwSWQ6IHUuZmxpcC5pZFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG4gPD0gMSAmJiAwID09PSBzLmxlbmd0aCkge1xuICAgICAgdmFyIHU7XG4gICAgICBpZiAodSA9IHRoaXMuZmluZFJldmVhbEZvcm1QYWlyKGksIGUsIHQuc2xvdEJhckNvdW50LCBuKSkgcmV0dXJuIHtcbiAgICAgICAgY2xlYXJJZDE6IHUuYjEuaWQsXG4gICAgICAgIGNsZWFySWQyOiB1LmIyLmlkLFxuICAgICAgICBmbGlwSWQ6IHUuZmxpcC5pZFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaGFzTWF0Y2hIb2xkZXIoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKSxcbiAgICAgIG4gPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIGkgPSBvLnNsb3RCYXJJZHMgfHwgW107XG4gICAgaWYgKDAgPT09IGkubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgYSA9IG4uZ2V0QWxsQ2FyZFRpbGVzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gIShudWxsID09IGUgfHwgIWUuaXNWYWxpZCB8fCBlLmdldElzSW5TbG90QmFyKCkgfHwgMCAhPT0gbi5pc0NhcmRMb2NrKGUpKTtcbiAgICB9KTtcbiAgICBpZiAoMCA9PT0gYS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbCA9IHRoaXMuZ2V0U2xvdENhcmRJZHMoaSk7XG4gICAgaWYgKDAgPT09IGwuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBzID0gX192YWx1ZXMoYSksIGMgPSBzLm5leHQoKTsgIWMuZG9uZTsgYyA9IHMubmV4dCgpKSB7XG4gICAgICAgIHZhciB1ID0gYy52YWx1ZTtcbiAgICAgICAgaWYgKGwuaGFzKHUuY2FyZElkKSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAodCA9IHMucmV0dXJuKSAmJiB0LmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGdldEJvYXJkVGlsZXMoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICByZXR1cm4gZS5nZXRBbGxDYXJkVGlsZXMoKS5maWx0ZXIoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiAhby5nZXRJc0luU2xvdEJhcigpICYmICF0LmlzUm9sbExvY2tDYXJkKG8sIGUpO1xuICAgIH0pO1xuICB9XG4gIGlzUm9sbExvY2tDYXJkKGUsIHQpIHtcbiAgICByZXR1cm4gZS5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLlJvbGxDYXJkKSAmJiAwICE9PSB0LmlzQ2FyZExvY2soZSk7XG4gIH1cbiAgZ2V0U2xvdENhcmRJZHMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIGkgPSBuZXcgU2V0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyhlKSwgbCA9IGEubmV4dCgpOyAhbC5kb25lOyBsID0gYS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSBsLnZhbHVlLFxuICAgICAgICAgIGMgPSBuLmdldFRpbGVPYmplY3RCeVBvc0lkKHMpO1xuICAgICAgICAobnVsbCA9PSBjID8gdm9pZCAwIDogYy5pc1ZhbGlkKSAmJiBpLmFkZChjLmNhcmRJZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGwgJiYgIWwuZG9uZSAmJiAobyA9IGEucmV0dXJuKSAmJiBvLmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgZmluZFNsb3RUaWxlSWQoZSwgdCwgbykge1xuICAgIHZhciBuLCBpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBhID0gX192YWx1ZXModCksIGwgPSBhLm5leHQoKTsgIWwuZG9uZTsgbCA9IGEubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZSxcbiAgICAgICAgICBjID0gZS5nZXRUaWxlT2JqZWN0QnlQb3NJZChzKTtcbiAgICAgICAgaWYgKChudWxsID09IGMgPyB2b2lkIDAgOiBjLmlzVmFsaWQpICYmIGMuY2FyZElkID09PSBvKSByZXR1cm4gYy5pZDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmIChpID0gYS5yZXR1cm4pICYmIGkuY2FsbChhKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBnZXRCb2FyZFBhaXJzKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgYSxcbiAgICAgIHMgPSBbXSxcbiAgICAgIGMgPSBuZXcgU2V0KHQubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlkO1xuICAgICAgfSkpLFxuICAgICAgdSA9IG5ldyBTZXQoKSxcbiAgICAgIHAgPSBmdW5jdGlvbiBwKGUsIHQpIHtcbiAgICAgICAgdmFyIG8gPSBbZS5pZCwgdC5pZF0uc29ydCgpLmpvaW4oXCJ8XCIpO1xuICAgICAgICBpZiAoIXUuaGFzKG8pKSB7XG4gICAgICAgICAgdS5hZGQobyk7XG4gICAgICAgICAgcy5wdXNoKFtlLCB0XSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmID0gZnVuY3Rpb24gZihlKSB7XG4gICAgICAgIHJldHVybiBjLmhhcyhlLmlkKTtcbiAgICAgIH0sXG4gICAgICBkID0gZnVuY3Rpb24gZCh0KSB7XG4gICAgICAgIHJldHVybiAwICE9PSBlLmlzQ2FyZExvY2sodCk7XG4gICAgICB9O1xuICAgIGUuZ2V0Q2FuTWF0Y2hUaWxlcygpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGYoZSk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0Lmxlbmd0aCA+PSAyKSBmb3IgKHZhciBvID0gMDsgbyArIDEgPCB0Lmxlbmd0aDsgbyArPSAyKSBwKHRbb10sIHRbbyArIDFdKTtcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaCA9IF9fdmFsdWVzKHQpLCB5ID0gaC5uZXh0KCk7ICF5LmRvbmU7IHkgPSBoLm5leHQoKSkge1xuICAgICAgICB2YXIgbSA9IHkudmFsdWU7XG4gICAgICAgIGlmIChtLmlzVmFsaWQgJiYgZihtKSAmJiBkKG0pKSB7XG4gICAgICAgICAgdmFyIHYgPSB0aGlzLmdldEFsbENvdmVyQ2FyZHMobSwgZSksXG4gICAgICAgICAgICBnID0gdGhpcy5kZWR1cFRpbGVzKGUuZ2V0QWRqYWNlbnRMZWZ0Q2FyZHMobSkpLFxuICAgICAgICAgICAgXyA9IHRoaXMuZGVkdXBUaWxlcyhlLmdldEFkamFjZW50UmlnaHRDYXJkcyhtKSk7XG4gICAgICAgICAgaWYgKCEoZy5sZW5ndGggPiAwICYmIF8ubGVuZ3RoID4gMCAmJiB2Lmxlbmd0aCA+IDApKSBpZiAoZy5sZW5ndGggPiAwICYmIF8ubGVuZ3RoID4gMCkgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIFQgPSAoaSA9IHZvaWQgMCwgX192YWx1ZXMoWy4uLmcsIC4uLl9dKSksIEMgPSBULm5leHQoKTsgIUMuZG9uZTsgQyA9IFQubmV4dCgpKSB7XG4gICAgICAgICAgICAgIHZhciBiID0gQy52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGYoYikgJiYgYi5jYXJkSWQgPT09IG0uY2FyZElkICYmICFkKGIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIEUgPSAxID09PSBnLmxlbmd0aCAmJiBnWzBdLmlkID09PSBiLmlkLFxuICAgICAgICAgICAgICAgICAgUyA9IDEgPT09IF8ubGVuZ3RoICYmIF9bMF0uaWQgPT09IGIuaWQ7XG4gICAgICAgICAgICAgICAgKEUgfHwgUykgJiYgcChiLCBtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBDICYmICFDLmRvbmUgJiYgKGEgPSBULnJldHVybikgJiYgYS5jYWxsKFQpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICgxID09PSB2Lmxlbmd0aCkge1xuICAgICAgICAgICAgYiA9IHZbMF07XG4gICAgICAgICAgICBmKGIpICYmIGIuY2FyZElkID09PSBtLmNhcmRJZCAmJiAhZChiKSAmJiBwKGIsIG0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICB5ICYmICF5LmRvbmUgJiYgKG4gPSBoLnJldHVybikgJiYgbi5jYWxsKGgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzO1xuICB9XG4gIGZpbmRTaW5nbGVNYXRjaEhvbGRlcihlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSBlLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuICEhZS5pc1ZhbGlkICYmIDAgPT09IG8uaXNDYXJkTG9jayhlKSAmJiB0LmhhcyhlLmNhcmRJZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucGlja0Jlc3RTaW5nbGUobik7XG4gIH1cbiAgZmluZFJldmVhbE1hdGNoSG9sZGVyKGUsIHQsIG8sIG4sIGkpIHtcbiAgICB2YXIgYSxcbiAgICAgIHMsXG4gICAgICBjLFxuICAgICAgdSxcbiAgICAgIHAsXG4gICAgICBmLFxuICAgICAgZCA9IHRoaXMsXG4gICAgICBoID0gbiAtIGkgLSAxO1xuICAgIGlmIChoIDw9IDApIHJldHVybiBudWxsO1xuICAgIHZhciB5ID0gbmV3IE1hcCgpLFxuICAgICAgbSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciB2ID0gX192YWx1ZXMoZSksIGcgPSB2Lm5leHQoKTsgIWcuZG9uZTsgZyA9IHYubmV4dCgpKSB7XG4gICAgICAgIHZhciBfID0gZy52YWx1ZTtcbiAgICAgICAgaWYgKF8uaXNWYWxpZCAmJiB0LmhhcyhfLmNhcmRJZCkgJiYgMCAhPT0gby5pc0NhcmRMb2NrKF8pKSB7XG4gICAgICAgICAgdmFyIFQgPSB0aGlzLmNhbGNNaW5SZXZlYWxDb3VudChfLCBvLCB5KTtcbiAgICAgICAgICBUID4gMCAmJiBUIDw9IGggJiYgbS5wdXNoKHtcbiAgICAgICAgICAgIHRpbGU6IF8sXG4gICAgICAgICAgICByZXZlYWxDb3VudDogVFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGcgJiYgIWcuZG9uZSAmJiAocyA9IHYucmV0dXJuKSAmJiBzLmNhbGwodik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKDAgPT09IG0ubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgQyA9IE1hdGgubWluLmFwcGx5KE1hdGgsIFsuLi5tLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5yZXZlYWxDb3VudDtcbiAgICAgIH0pXSksXG4gICAgICBiID0gbS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUucmV2ZWFsQ291bnQgPT09IEM7XG4gICAgICB9KSxcbiAgICAgIEUgPSBuZXcgTWFwKCksXG4gICAgICBTID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBJID0gX192YWx1ZXMoYiksIHcgPSBJLm5leHQoKTsgIXcuZG9uZTsgdyA9IEkubmV4dCgpKSB7XG4gICAgICAgIHZhciBCID0gdy52YWx1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciB4ID0gKHAgPSB2b2lkIDAsIF9fdmFsdWVzKHRoaXMuZmluZENsaWNrYWJsZUJsb2NrZXJzKEIudGlsZSwgbywgeSkpKSwgTSA9IHgubmV4dCgpOyAhTS5kb25lOyBNID0geC5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBPID0gTS52YWx1ZTtcbiAgICAgICAgICAgIGlmICghRS5oYXMoTy5pZCkpIHtcbiAgICAgICAgICAgICAgRS5zZXQoTy5pZCwgTyk7XG4gICAgICAgICAgICAgIFMuc2V0KE8uaWQsIEIudGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgTSAmJiAhTS5kb25lICYmIChmID0geC5yZXR1cm4pICYmIGYuY2FsbCh4KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHApIHRocm93IHAuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHcgJiYgIXcuZG9uZSAmJiAodSA9IEkucmV0dXJuKSAmJiB1LmNhbGwoSSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYykgdGhyb3cgYy5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIEQgPSBBcnJheS5mcm9tKEUudmFsdWVzKCkpO1xuICAgIGlmICgwID09PSBELmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKDEgPT09IEQubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgZmxpcDogRFswXSxcbiAgICAgIHRhcmdldDogUy5nZXQoRFswXS5pZClcbiAgICB9O1xuICAgIHZhciBQID0gRC5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpbGU6IGUsXG4gICAgICAgIHNjb3JlOiBkLnNjb3JlUmV2ZWFsTWF0Y2hIb2xkZXIoZSlcbiAgICAgIH07XG4gICAgfSk7XG4gICAgUC5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdC5zY29yZSAtIGUuc2NvcmU7XG4gICAgfSk7XG4gICAgdmFyIEEgPSBQWzBdLnRpbGU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZsaXA6IEEsXG4gICAgICB0YXJnZXQ6IFMuZ2V0KEEuaWQpXG4gICAgfTtcbiAgfVxuICBjYWxjTWluUmV2ZWFsQ291bnQoZSwgdCwgbykge1xuICAgIHZhciBuLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICBsLFxuICAgICAgcyxcbiAgICAgIGMsXG4gICAgICB1LFxuICAgICAgcCxcbiAgICAgIGYsXG4gICAgICBkLFxuICAgICAgaCxcbiAgICAgIHksXG4gICAgICBtID0gby5nZXQoZS5pZCk7XG4gICAgaWYgKHZvaWQgMCAhPT0gbSkgcmV0dXJuIG07XG4gICAgby5zZXQoZS5pZCwgOTk5KTtcbiAgICBpZiAoMCA9PT0gdC5pc0NhcmRMb2NrKGUpKSB7XG4gICAgICBvLnNldChlLmlkLCAwKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgdiA9IDAsXG4gICAgICBnID0gdGhpcy5nZXRBbGxDb3ZlckNhcmRzKGUsIHQpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfID0gX192YWx1ZXMoZyksIFQgPSBfLm5leHQoKTsgIVQuZG9uZTsgVCA9IF8ubmV4dCgpKSB7XG4gICAgICAgIHZhciBDID0gVC52YWx1ZTtcbiAgICAgICAgaWYgKCh2ICs9IHRoaXMuY2FsY01pblJldmVhbENvdW50KEMsIHQsIG8pICsgMSkgPj0gOTk5KSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgVCAmJiAhVC5kb25lICYmIChpID0gXy5yZXR1cm4pICYmIGkuY2FsbChfKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodiA8IDk5OSkge1xuICAgICAgdmFyIGIgPSB0aGlzLmRlZHVwVGlsZXModC5nZXRBZGphY2VudExlZnRDYXJkcyhlKSksXG4gICAgICAgIEUgPSB0aGlzLmRlZHVwVGlsZXModC5nZXRBZGphY2VudFJpZ2h0Q2FyZHMoZSkpO1xuICAgICAgaWYgKGIubGVuZ3RoID4gMCAmJiBFLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIFMgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIEkgPSBfX3ZhbHVlcyhiKSwgdyA9IEkubmV4dCgpOyAhdy5kb25lOyB3ID0gSS5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBCID0gdy52YWx1ZTtcbiAgICAgICAgICAgIGlmICgoUyArPSB0aGlzLmNhbGNNaW5SZXZlYWxDb3VudChCLCB0LCBvKSArIDEpID49IDk5OSkgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgYSA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdyAmJiAhdy5kb25lICYmIChsID0gSS5yZXR1cm4pICYmIGwuY2FsbChJKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGEpIHRocm93IGEuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBNID0gX192YWx1ZXMoRSksIE8gPSBNLm5leHQoKTsgIU8uZG9uZTsgTyA9IE0ubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgRCA9IE8udmFsdWU7XG4gICAgICAgICAgICBpZiAoKHggKz0gdGhpcy5jYWxjTWluUmV2ZWFsQ291bnQoRCwgdCwgbykgKyAxKSA+PSA5OTkpIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHMgPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIE8gJiYgIU8uZG9uZSAmJiAoYyA9IE0ucmV0dXJuKSAmJiBjLmNhbGwoTSk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChzKSB0aHJvdyBzLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgUCA9IE1hdGgubWluKFMsIHgpO1xuICAgICAgICBpZiAoZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIEEgPSBuZXcgU2V0KGcubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5pZDtcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIFIgPSBfX3ZhbHVlcyhbYiwgRV0pLCBOID0gUi5uZXh0KCk7ICFOLmRvbmU7IE4gPSBSLm5leHQoKSkge1xuICAgICAgICAgICAgICB2YXIgaiA9IE4udmFsdWUsXG4gICAgICAgICAgICAgICAgayA9IDA7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgTCA9IChmID0gdm9pZCAwLCBfX3ZhbHVlcyhqKSksIEcgPSBMLm5leHQoKTsgIUcuZG9uZTsgRyA9IEwubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgRiA9IEcudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIFYgPSB0aGlzLmdldEFsbENvdmVyQ2FyZHMoRiwgdCksXG4gICAgICAgICAgICAgICAgICAgIFUgPSAwO1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgSCA9IChoID0gdm9pZCAwLCBfX3ZhbHVlcyhWKSksIFcgPSBILm5leHQoKTsgIVcuZG9uZTsgVyA9IEgubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHogPSBXLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIEEuaGFzKHouaWQpICYmIChVICs9IHRoaXMuY2FsY01pblJldmVhbENvdW50KHosIHQsIG8pICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICBXICYmICFXLmRvbmUgJiYgKHkgPSBILnJldHVybikgJiYgeS5jYWxsKEgpO1xuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChoKSB0aHJvdyBoLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoKGsgKz0gTWF0aC5tYXgoMCwgdGhpcy5jYWxjTWluUmV2ZWFsQ291bnQoRiwgdCwgbykgLSBVKSArIDEpID49IDk5OSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZiA9IHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgRyAmJiAhRy5kb25lICYmIChkID0gTC5yZXR1cm4pICYmIGQuY2FsbChMKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgaWYgKGYpIHRocm93IGYuZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFAgPSBNYXRoLm1pbihQLCBrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB1ID0ge1xuICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgTiAmJiAhTi5kb25lICYmIChwID0gUi5yZXR1cm4pICYmIHAuY2FsbChSKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmICh1KSB0aHJvdyB1LmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2ICs9IFA7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBZID0gTWF0aC5taW4odiwgOTk5KTtcbiAgICBvLnNldChlLmlkLCBZKTtcbiAgICByZXR1cm4gWTtcbiAgfVxuICBmaW5kQ2xpY2thYmxlQmxvY2tlcnMoZSwgdCwgbywgbikge1xuICAgIHZhciBpLCBhLCBzLCBjLCB1LCBwLCBmLCBkO1xuICAgIG4gfHwgKG4gPSBuZXcgU2V0KCkpO1xuICAgIGlmIChuLmhhcyhlLmlkKSkgcmV0dXJuIFtdO1xuICAgIG4uYWRkKGUuaWQpO1xuICAgIGlmICgwID09PSB0LmlzQ2FyZExvY2soZSkpIHJldHVybiBbZV07XG4gICAgdmFyIGggPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgeSA9IF9fdmFsdWVzKHRoaXMuZ2V0QWxsQ292ZXJDYXJkcyhlLCB0KSksIG0gPSB5Lm5leHQoKTsgIW0uZG9uZTsgbSA9IHkubmV4dCgpKSB7XG4gICAgICAgIHZhciB2ID0gbS52YWx1ZTtcbiAgICAgICAgaC5wdXNoLmFwcGx5KGgsIFsuLi50aGlzLmZpbmRDbGlja2FibGVCbG9ja2Vycyh2LCB0LCBvLCBuKV0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGkgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBtICYmICFtLmRvbmUgJiYgKGEgPSB5LnJldHVybikgJiYgYS5jYWxsKHkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBnID0gdGhpcy5kZWR1cFRpbGVzKHQuZ2V0QWRqYWNlbnRMZWZ0Q2FyZHMoZSkpLFxuICAgICAgXyA9IHRoaXMuZGVkdXBUaWxlcyh0LmdldEFkamFjZW50UmlnaHRDYXJkcyhlKSk7XG4gICAgaWYgKGcubGVuZ3RoID4gMCAmJiBfLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBUID0gZy5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIG4uaGFzKGUuaWQpO1xuICAgICAgICB9KSxcbiAgICAgICAgQyA9IF8uc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBuLmhhcyhlLmlkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGIgPSB2b2lkIDA7XG4gICAgICBpZiAoVCAmJiBDKSBiID0gbnVsbDtlbHNlIGlmIChUKSBiID0gXztlbHNlIGlmIChDKSBiID0gZztlbHNlIHtcbiAgICAgICAgdmFyIEUgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIFMgPSBfX3ZhbHVlcyhnKSwgSSA9IFMubmV4dCgpOyAhSS5kb25lOyBJID0gUy5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciB3ID0gSS52YWx1ZTtcbiAgICAgICAgICAgIEUgKz0gdGhpcy5jYWxjTWluUmV2ZWFsQ291bnQodywgdCwgbykgKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHMgPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEkgJiYgIUkuZG9uZSAmJiAoYyA9IFMucmV0dXJuKSAmJiBjLmNhbGwoUyk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChzKSB0aHJvdyBzLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgQiA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgeCA9IF9fdmFsdWVzKF8pLCBNID0geC5uZXh0KCk7ICFNLmRvbmU7IE0gPSB4Lm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIE8gPSBNLnZhbHVlO1xuICAgICAgICAgICAgQiArPSB0aGlzLmNhbGNNaW5SZXZlYWxDb3VudChPLCB0LCBvKSArIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdSA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgTSAmJiAhTS5kb25lICYmIChwID0geC5yZXR1cm4pICYmIHAuY2FsbCh4KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHUpIHRocm93IHUuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGIgPSBFIDw9IEIgPyBnIDogXztcbiAgICAgIH1cbiAgICAgIGlmIChiKSB0cnkge1xuICAgICAgICBmb3IgKHZhciBEID0gX192YWx1ZXMoYiksIFAgPSBELm5leHQoKTsgIVAuZG9uZTsgUCA9IEQubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIEEgPSBQLnZhbHVlO1xuICAgICAgICAgIGgucHVzaC5hcHBseShoLCBbLi4udGhpcy5maW5kQ2xpY2thYmxlQmxvY2tlcnMoQSwgdCwgbywgbildKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBmID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIFAgJiYgIVAuZG9uZSAmJiAoZCA9IEQucmV0dXJuKSAmJiBkLmNhbGwoRCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGYpIHRocm93IGYuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGg7XG4gIH1cbiAgZ2V0QWxsQ292ZXJDYXJkcyhlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuLFxuICAgICAgaSA9IFtdLFxuICAgICAgYSA9IG5ldyBTZXQoKSxcbiAgICAgIGwgPSB0Lm1hcExheWVycygpLmxlbmd0aDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKGUub3duZXJHcmlkSWRzKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIGZvciAodmFyIHUgPSBjLnZhbHVlLCBwID0gZS5sYXllciArIDE7IHAgPCBsOyBwKyspIGlmICh0LmlzSGFzQ2FyZChwLCB1KSkge1xuICAgICAgICB2YXIgZiA9IHQuZ2V0VGlsZU9iamVjdEJ5R3JpZEluZGV4KHAsIHUpO1xuICAgICAgICBpZiAoZiAmJiAhYS5oYXMoZi5pZCkpIHtcbiAgICAgICAgICBhLmFkZChmLmlkKTtcbiAgICAgICAgICBpLnB1c2goZik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAobiA9IHMucmV0dXJuKSAmJiBuLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgZGVkdXBUaWxlcyhlKSB7XG4gICAgdmFyIHQgPSBuZXcgU2V0KCk7XG4gICAgcmV0dXJuIGUuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAodC5oYXMoZS5pZCkpIHJldHVybiBmYWxzZTtcbiAgICAgIHQuYWRkKGUuaWQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cbiAgc2NvcmVSZXZlYWxNYXRjaEhvbGRlcihlKSB7XG4gICAgdmFyIHQgPSAwO1xuICAgIHRoaXMuaXNSb2xsQ2FyZChlKSB8fCAodCArPSAxMDApO1xuICAgIHJldHVybiB0ICsgdGhpcy5jb3VudE5ld1BhaXJzQWZ0ZXJIaW50KFtlLmlkXSk7XG4gIH1cbiAgZmluZFJldmVhbEZvcm1QYWlyKGUsIHQsIG8sIG4pIHtcbiAgICB2YXIgaSxcbiAgICAgIHMsXG4gICAgICBjLFxuICAgICAgdSxcbiAgICAgIHAsXG4gICAgICBmLFxuICAgICAgZCxcbiAgICAgIGgsXG4gICAgICB5LFxuICAgICAgbSxcbiAgICAgIHYgPSB0aGlzLFxuICAgICAgZyA9IG8gLSBuIC0gMjtcbiAgICBpZiAoZyA8IDApIHJldHVybiBudWxsO1xuICAgIHZhciBfID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBUID0gX192YWx1ZXMoZSksIEMgPSBULm5leHQoKTsgIUMuZG9uZTsgQyA9IFQubmV4dCgpKSB7XG4gICAgICAgIHZhciBiID0gQy52YWx1ZTtcbiAgICAgICAgaWYgKGIuaXNWYWxpZCkge1xuICAgICAgICAgIHZhciBFID0gXy5nZXQoYi5jYXJkSWQpO1xuICAgICAgICAgIGlmIChFKSB7XG4gICAgICAgICAgICBFLnB1c2goYik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2V0KGIuY2FyZElkLCBbYl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGkgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBDICYmICFDLmRvbmUgJiYgKHMgPSBULnJldHVybikgJiYgcy5jYWxsKFQpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBTID0gbmV3IE1hcCgpLFxuICAgICAgSSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciB3ID0gX192YWx1ZXMoXyksIEIgPSB3Lm5leHQoKTsgIUIuZG9uZTsgQiA9IHcubmV4dCgpKSB7XG4gICAgICAgIHZhciB4ID0gX19yZWFkKEIudmFsdWUsIDIpWzFdO1xuICAgICAgICBpZiAoISh4Lmxlbmd0aCA8IDIpKSBmb3IgKHZhciBNID0gMDsgTSA8IHgubGVuZ3RoOyBNKyspIGZvciAodmFyIE8gPSBNICsgMTsgTyA8IHgubGVuZ3RoOyBPKyspIHtcbiAgICAgICAgICB2YXIgRCA9IHhbTV0sXG4gICAgICAgICAgICBQID0geFtPXSxcbiAgICAgICAgICAgIEEgPSB0aGlzLmNhbGNNaW5SZXZlYWxDb3VudChELCB0LCBTKSxcbiAgICAgICAgICAgIFIgPSB0aGlzLmNhbGNNaW5SZXZlYWxDb3VudChQLCB0LCBTKTtcbiAgICAgICAgICBpZiAoIShBID49IDk5OSAmJiBSID49IDk5OSkpIHtcbiAgICAgICAgICAgIHZhciBOID0gdGhpcy5jYWxjUGFpclJldmVhbENvdW50KEQsIFAsIEEsIFIsIHQsIFMpO1xuICAgICAgICAgICAgTiA+IGcgfHwgTiA+PSA5OTkgfHwgSS5wdXNoKHtcbiAgICAgICAgICAgICAgYjE6IEQsXG4gICAgICAgICAgICAgIGIyOiBQLFxuICAgICAgICAgICAgICByZXZlYWxDb3VudDogTlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIEIgJiYgIUIuZG9uZSAmJiAodSA9IHcucmV0dXJuKSAmJiB1LmNhbGwodyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYykgdGhyb3cgYy5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKDAgPT09IEkubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgaiA9IE1hdGgubWluLmFwcGx5KE1hdGgsIFsuLi5JLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5yZXZlYWxDb3VudDtcbiAgICAgIH0pXSksXG4gICAgICBrID0gSS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUucmV2ZWFsQ291bnQgPT09IGo7XG4gICAgICB9KSxcbiAgICAgIEwgPSBuZXcgTWFwKCksXG4gICAgICBHID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBGID0gX192YWx1ZXMoayksIFYgPSBGLm5leHQoKTsgIVYuZG9uZTsgViA9IEYubmV4dCgpKSB7XG4gICAgICAgIHZhciBVID0gVi52YWx1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBIID0gKGQgPSB2b2lkIDAsIF9fdmFsdWVzKFtVLmIxLCBVLmIyXSkpLCBXID0gSC5uZXh0KCk7ICFXLmRvbmU7IFcgPSBILm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHogPSBXLnZhbHVlO1xuICAgICAgICAgICAgaWYgKDAgIT09IHQuaXNDYXJkTG9jayh6KSkgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgWSA9ICh5ID0gdm9pZCAwLCBfX3ZhbHVlcyh0aGlzLmZpbmRDbGlja2FibGVCbG9ja2Vycyh6LCB0LCBTKSkpLCBLID0gWS5uZXh0KCk7ICFLLmRvbmU7IEsgPSBZLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBKID0gSy52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIUwuaGFzKEouaWQpKSB7XG4gICAgICAgICAgICAgICAgICBMLnNldChKLmlkLCBKKTtcbiAgICAgICAgICAgICAgICAgIEcuc2V0KEouaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgYjE6IFUuYjEsXG4gICAgICAgICAgICAgICAgICAgIGIyOiBVLmIyXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgeSA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBLICYmICFLLmRvbmUgJiYgKG0gPSBZLnJldHVybikgJiYgbS5jYWxsKFkpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmICh5KSB0aHJvdyB5LmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgVyAmJiAhVy5kb25lICYmIChoID0gSC5yZXR1cm4pICYmIGguY2FsbChIKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGQpIHRocm93IGQuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIFYgJiYgIVYuZG9uZSAmJiAoZiA9IEYucmV0dXJuKSAmJiBmLmNhbGwoRik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocCkgdGhyb3cgcC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIFogPSBBcnJheS5mcm9tKEwudmFsdWVzKCkpO1xuICAgIGlmICgwID09PSBaLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKDEgPT09IFoubGVuZ3RoKSB7XG4gICAgICB2YXIgWCA9IEcuZ2V0KFpbMF0uaWQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmxpcDogWlswXSxcbiAgICAgICAgYjE6IFguYjEsXG4gICAgICAgIGIyOiBYLmIyXG4gICAgICB9O1xuICAgIH1cbiAgICB2YXIgcSA9IFoubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aWxlOiBlLFxuICAgICAgICBzY29yZTogdi5zY29yZVJldmVhbE1hdGNoSG9sZGVyKGUpXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHEuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIHQuc2NvcmUgLSBlLnNjb3JlO1xuICAgIH0pO1xuICAgIHZhciBRID0gcVswXS50aWxlLFxuICAgICAgJCA9IEcuZ2V0KFEuaWQpO1xuICAgIHJldHVybiB7XG4gICAgICBmbGlwOiBRLFxuICAgICAgYjE6ICQuYjEsXG4gICAgICBiMjogJC5iMlxuICAgIH07XG4gIH1cbiAgY2FsY1BhaXJSZXZlYWxDb3VudChlLCB0LCBvLCBuLCBpLCBhKSB7XG4gICAgdmFyIGwsXG4gICAgICBzLFxuICAgICAgYyxcbiAgICAgIHUsXG4gICAgICBwLFxuICAgICAgZixcbiAgICAgIGQgPSBvICsgbixcbiAgICAgIGggPSB0aGlzLmNvbGxlY3RCbG9ja2VyU2V0cyhlLCBpLCBhKSxcbiAgICAgIHkgPSB0aGlzLmNvbGxlY3RCbG9ja2VyU2V0cyh0LCBpLCBhKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbSA9IF9fdmFsdWVzKGgpLCB2ID0gbS5uZXh0KCk7ICF2LmRvbmU7IHYgPSBtLm5leHQoKSkge1xuICAgICAgICB2YXIgZyA9IHYudmFsdWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgXyA9IChjID0gdm9pZCAwLCBfX3ZhbHVlcyh5KSksIFQgPSBfLm5leHQoKTsgIVQuZG9uZTsgVCA9IF8ubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgQyA9IFQudmFsdWUsXG4gICAgICAgICAgICAgIGIgPSBuZXcgU2V0KGcpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgRSA9IChwID0gdm9pZCAwLCBfX3ZhbHVlcyhDKSksIFMgPSBFLm5leHQoKTsgIVMuZG9uZTsgUyA9IEUubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIEkgPSBTLnZhbHVlO1xuICAgICAgICAgICAgICAgIGIuYWRkKEkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHAgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgUyAmJiAhUy5kb25lICYmIChmID0gRS5yZXR1cm4pICYmIGYuY2FsbChFKTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAocCkgdGhyb3cgcC5lcnJvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHcgPSBiLnNpemU7XG4gICAgICAgICAgICBiLmhhcyhlLmlkKSAmJiB3LS07XG4gICAgICAgICAgICBiLmhhcyh0LmlkKSAmJiB3LS07XG4gICAgICAgICAgICBkID0gTWF0aC5taW4oZCwgdyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgYyA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgVCAmJiAhVC5kb25lICYmICh1ID0gXy5yZXR1cm4pICYmIHUuY2FsbChfKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGMpIHRocm93IGMuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHYgJiYgIXYuZG9uZSAmJiAocyA9IG0ucmV0dXJuKSAmJiBzLmNhbGwobSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobCkgdGhyb3cgbC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGQ7XG4gIH1cbiAgY29sbGVjdEJsb2NrZXJTZXRzKGUsIHQsIG8pIHtcbiAgICB2YXIgbiwgaSwgYSwgbCwgcywgYztcbiAgICBpZiAoMCA9PT0gdC5pc0NhcmRMb2NrKGUpKSByZXR1cm4gW25ldyBTZXQoKV07XG4gICAgdmFyIHUgPSB0aGlzLmdldEFsbENvdmVyQ2FyZHMoZSwgdCksXG4gICAgICBwID0gdGhpcy5kZWR1cFRpbGVzKHQuZ2V0QWRqYWNlbnRMZWZ0Q2FyZHMoZSkpLFxuICAgICAgZiA9IHRoaXMuZGVkdXBUaWxlcyh0LmdldEFkamFjZW50UmlnaHRDYXJkcyhlKSksXG4gICAgICBkID0gbmV3IFNldCgpLFxuICAgICAgaCA9IG5ldyBTZXQoW2UuaWRdKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgeSA9IF9fdmFsdWVzKHUpLCBtID0geS5uZXh0KCk7ICFtLmRvbmU7IG0gPSB5Lm5leHQoKSkge1xuICAgICAgICB2YXIgdiA9IG0udmFsdWU7XG4gICAgICAgIGQuYWRkKHYuaWQpO1xuICAgICAgICB0aGlzLmNvbGxlY3RCbG9ja2VyQ2hhaW4odiwgdCwgbywgZCwgaCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbiA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG0gJiYgIW0uZG9uZSAmJiAoaSA9IHkucmV0dXJuKSAmJiBpLmNhbGwoeSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKDAgPT09IHAubGVuZ3RoIHx8IDAgPT09IGYubGVuZ3RoKSByZXR1cm4gW2RdO1xuICAgIHZhciBnID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF8gPSBfX3ZhbHVlcyhbcCwgZl0pLCBUID0gXy5uZXh0KCk7ICFULmRvbmU7IFQgPSBfLm5leHQoKSkge1xuICAgICAgICB2YXIgQyA9IFQudmFsdWUsXG4gICAgICAgICAgYiA9IG5ldyBTZXQoZCksXG4gICAgICAgICAgRSA9IG5ldyBTZXQoaCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgUyA9IChzID0gdm9pZCAwLCBfX3ZhbHVlcyhDKSksIEkgPSBTLm5leHQoKTsgIUkuZG9uZTsgSSA9IFMubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgdyA9IEkudmFsdWU7XG4gICAgICAgICAgICBiLmFkZCh3LmlkKTtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdEJsb2NrZXJDaGFpbih3LCB0LCBvLCBiLCBFKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBJICYmICFJLmRvbmUgJiYgKGMgPSBTLnJldHVybikgJiYgYy5jYWxsKFMpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAocykgdGhyb3cgcy5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZy5wdXNoKGIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGEgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBUICYmICFULmRvbmUgJiYgKGwgPSBfLnJldHVybikgJiYgbC5jYWxsKF8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGEpIHRocm93IGEuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnO1xuICB9XG4gIGNvbGxlY3RCbG9ja2VyQ2hhaW4oZSwgdCwgbywgbiwgaSkge1xuICAgIHZhciBhLCBsLCBzLCBjLCB1LCBwLCBmLCBkO1xuICAgIGlmICghaS5oYXMoZS5pZCkpIHtcbiAgICAgIGkuYWRkKGUuaWQpO1xuICAgICAgaWYgKDAgIT09IHQuaXNDYXJkTG9jayhlKSkge1xuICAgICAgICB2YXIgaCA9IHRoaXMuZ2V0QWxsQ292ZXJDYXJkcyhlLCB0KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciB5ID0gX192YWx1ZXMoaCksIG0gPSB5Lm5leHQoKTsgIW0uZG9uZTsgbSA9IHkubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgdiA9IG0udmFsdWU7XG4gICAgICAgICAgICBuLmFkZCh2LmlkKTtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdEJsb2NrZXJDaGFpbih2LCB0LCBvLCBuLCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBhID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtICYmICFtLmRvbmUgJiYgKGwgPSB5LnJldHVybikgJiYgbC5jYWxsKHkpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGcgPSB0aGlzLmRlZHVwVGlsZXModC5nZXRBZGphY2VudExlZnRDYXJkcyhlKSksXG4gICAgICAgICAgXyA9IHRoaXMuZGVkdXBUaWxlcyh0LmdldEFkamFjZW50UmlnaHRDYXJkcyhlKSk7XG4gICAgICAgIGlmIChnLmxlbmd0aCA+IDAgJiYgXy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIFQgPSBnLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGkuaGFzKGUuaWQpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBDID0gXy5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpLmhhcyhlLmlkKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYiA9IHZvaWQgMDtcbiAgICAgICAgICBpZiAoVCAmJiBDKSBiID0gbnVsbDtlbHNlIGlmIChUKSBiID0gXztlbHNlIGlmIChDKSBiID0gZztlbHNlIHtcbiAgICAgICAgICAgIHZhciBFID0gMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIFMgPSBfX3ZhbHVlcyhnKSwgSSA9IFMubmV4dCgpOyAhSS5kb25lOyBJID0gUy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdyA9IEkudmFsdWU7XG4gICAgICAgICAgICAgICAgRSArPSB0aGlzLmNhbGNNaW5SZXZlYWxDb3VudCh3LCB0LCBvKSArIDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcyA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBJICYmICFJLmRvbmUgJiYgKGMgPSBTLnJldHVybikgJiYgYy5jYWxsKFMpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChzKSB0aHJvdyBzLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgQiA9IDA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gX192YWx1ZXMoXyksIE0gPSB4Lm5leHQoKTsgIU0uZG9uZTsgTSA9IHgubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIE8gPSBNLnZhbHVlO1xuICAgICAgICAgICAgICAgIEIgKz0gdGhpcy5jYWxjTWluUmV2ZWFsQ291bnQoTywgdCwgbykgKyAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHUgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgTSAmJiAhTS5kb25lICYmIChwID0geC5yZXR1cm4pICYmIHAuY2FsbCh4KTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAodSkgdGhyb3cgdS5lcnJvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYiA9IEUgPD0gQiA/IGcgOiBfO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYikgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIEQgPSBfX3ZhbHVlcyhiKSwgUCA9IEQubmV4dCgpOyAhUC5kb25lOyBQID0gRC5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgdmFyIEEgPSBQLnZhbHVlO1xuICAgICAgICAgICAgICBuLmFkZChBLmlkKTtcbiAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0QmxvY2tlckNoYWluKEEsIHQsIG8sIG4sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGYgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBQICYmICFQLmRvbmUgJiYgKGQgPSBELnJldHVybikgJiYgZC5jYWxsKEQpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKGYpIHRocm93IGYuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBpY2tCZXN0U2luZ2xlKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKDAgPT09IGUubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbyA9IGUubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aWxlOiBlLFxuICAgICAgICBzY29yZTogdC5zY29yZVNpbmdsZShlKVxuICAgICAgfTtcbiAgICB9KTtcbiAgICBvLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB0LnNjb3JlIC0gZS5zY29yZTtcbiAgICB9KTtcbiAgICByZXR1cm4gb1swXS50aWxlO1xuICB9XG4gIHBpY2tCZXN0UGFpcihlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICgwID09PSBlLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG8gPSBlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFpcjogZSxcbiAgICAgICAgc2NvcmU6IHQuc2NvcmVQYWlyKGUpXG4gICAgICB9O1xuICAgIH0pO1xuICAgIG8uc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIHQuc2NvcmUgLSBlLnNjb3JlO1xuICAgIH0pO1xuICAgIHJldHVybiBvWzBdLnBhaXI7XG4gIH1cbiAgaXNSb2xsQ2FyZChlKSB7XG4gICAgcmV0dXJuIGUudHlwZSA9PT0gRVRpbGVUeXBlLlJvbGxDYXJkO1xuICB9XG4gIGNvdW50TmV3UGFpcnNBZnRlckhpbnQoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IFRpbGVNYXBTaW11bGF0b3IuY3JlYXRlU2ltKHRoaXMuX2NvbnRleHQpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IF9fdmFsdWVzKGUpLCBhID0gaS5uZXh0KCk7ICFhLmRvbmU7IGEgPSBpLm5leHQoKSkge1xuICAgICAgICAgIHZhciBsID0gYS52YWx1ZSxcbiAgICAgICAgICAgIHMgPSBuLnRpbGVPYmplY3RNYXAoKS5nZXQobCk7XG4gICAgICAgICAgaWYgKG51bGwgPT0gcyA/IHZvaWQgMCA6IHMuaXNWYWxpZCkge1xuICAgICAgICAgICAgcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBuLm9uQ2xlYXIoW3NdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhICYmICFhLmRvbmUgJiYgKG8gPSBpLnJldHVybikgJiYgby5jYWxsKGkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBuLnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgICAgIHJldHVybiBuLmdldENhbk1hdGNoQ2FyZFBhaXJOdW0oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cbiAgc2NvcmVTaW5nbGUoZSkge1xuICAgIHZhciB0ID0gMDtcbiAgICB0aGlzLmlzUm9sbENhcmQoZSkgfHwgKHQgKz0gMTAwKTtcbiAgICB2YXIgbyA9IFtlLmlkXTtcbiAgICByZXR1cm4gdCArIHRoaXMuY291bnROZXdQYWlyc0FmdGVySGludChvKTtcbiAgfVxuICBzY29yZVBhaXIoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSAwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMoZSksIGEgPSBpLm5leHQoKTsgIWEuZG9uZTsgYSA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gYS52YWx1ZTtcbiAgICAgICAgdGhpcy5pc1JvbGxDYXJkKGwpIHx8IChuICs9IDUwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYSAmJiAhYS5kb25lICYmIChvID0gaS5yZXR1cm4pICYmIG8uY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgcyA9IGUubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5pZDtcbiAgICB9KTtcbiAgICByZXR1cm4gbiArIHRoaXMuY291bnROZXdQYWlyc0FmdGVySGludChzKTtcbiAgfVxufSJdfQ==
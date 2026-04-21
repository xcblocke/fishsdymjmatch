"use strict";
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
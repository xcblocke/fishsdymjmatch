"use strict";
cc._RF.push(module, '085a7gDUs9IB4m+DnnbcGhy', 'FlowTileSimulator');
// Scripts/FlowTileSimulator.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowTileSimulator = exports.computeDepths = exports.cloneFlowTile = exports.createFlowTile = void 0;
function l(e) {
    return e % 14;
}
var createFlowTile = function (e, t, o, n, i) {
    return {
        id: e,
        gridX: t,
        gridY: o,
        layer: n,
        cardId: i,
        isValid: true,
        ownerGridIds: (r = t, l = o, s = l * 14 + r, [s, s + 1, s + 14, s + 14 + 1])
    };
    var r, l, s;
};
exports.createFlowTile = createFlowTile;
function cloneFlowTile(e) {
    return {
        id: e.id,
        gridX: e.gridX,
        gridY: e.gridY,
        layer: e.layer,
        cardId: e.cardId,
        isValid: e.isValid,
        ownerGridIds: __spreadArrays(e.ownerGridIds),
        depth: e.depth
    };
}
exports.cloneFlowTile = cloneFlowTile;
var computeDepths = function (e) {
    for (var t, o, n, i, a, l, c, p = e.map(function (e) {
        return cloneFlowTile(e);
    }), f = new FlowTileSimulator(p), d = new Map(), h = 0; f.getRemainingCount() > 0;) {
        var y = f.getFreeTiles();
        if (0 === y.length) {
            try {
                for (var m = (t = void 0, __values(p)), v = m.next(); !v.done; v = m.next())
                    if ((T = v.value).isValid) {
                        d.set(T.id, h);
                        T.isValid = false;
                    }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    v && !v.done && (o = m.return) && o.call(m);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            break;
        }
        try {
            for (var g = (n = void 0, __values(y)), _ = g.next(); !_.done; _ = g.next()) {
                var T = _.value;
                d.set(T.id, h);
                T.isValid = false;
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                _ && !_.done && (i = g.return) && i.call(g);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        f._rebuildGridMap();
        h++;
    }
    try {
        for (var C = __values(e), b = C.next(); !b.done; b = C.next())
            (T = b.value).depth = null !== (c = d.get(T.id)) && void 0 !== c ? c : 0;
    }
    catch (e) {
        a = {
            error: e
        };
    }
    finally {
        try {
            b && !b.done && (l = C.return) && l.call(C);
        }
        finally {
            if (a)
                throw a.error;
        }
    }
};
exports.computeDepths = computeDepths;
function c(e, t) {
    return 10000 * e + t;
}
var FlowTileSimulator = /** @class */ (function () {
    function FlowTileSimulator(e) {
        this._gridMap = new Map();
        this._maxLayer = 0;
        this._tiles = null;
        this._tiles = e;
        this._rebuildGridMap();
    }
    Object.defineProperty(FlowTileSimulator.prototype, "tiles", {
        get: function () {
            return this._tiles;
        },
        enumerable: false,
        configurable: true
    });
    FlowTileSimulator.prototype._rebuildGridMap = function () {
        var e, t, o, n;
        this._gridMap.clear();
        this._maxLayer = 0;
        try {
            for (var i = __values(this._tiles), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                if (l.isValid) {
                    l.layer > this._maxLayer && (this._maxLayer = l.layer);
                    try {
                        for (var s = (o = void 0, __values(l.ownerGridIds)), u = s.next(); !u.done; u = s.next()) {
                            var p = u.value;
                            this._gridMap.set(c(l.layer, p), l);
                        }
                    }
                    catch (e) {
                        o = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            u && !u.done && (n = s.return) && n.call(s);
                        }
                        finally {
                            if (o)
                                throw o.error;
                        }
                    }
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
                a && !a.done && (t = i.return) && t.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    FlowTileSimulator.prototype._isHasCard = function (e, t) {
        var o = this._gridMap.get(c(e, t));
        return !(!o || !o.isValid);
    };
    FlowTileSimulator.prototype.isCovered = function (e) {
        var t, o;
        if (!e.isValid)
            return false;
        for (var n = e.layer + 1; n <= this._maxLayer; n++)
            try {
                for (var i = (t = void 0, __values(e.ownerGridIds)), a = i.next(); !a.done; a = i.next()) {
                    var l = a.value;
                    if (this._isHasCard(n, l))
                        return true;
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
        return false;
    };
    FlowTileSimulator.prototype.isLeftBlocked = function (e) {
        return !!e.isValid && !(l(e.ownerGridIds[0]) <= 0) && (this._isHasCard(e.layer, e.ownerGridIds[0] - 1) || this._isHasCard(e.layer, e.ownerGridIds[2] - 1));
    };
    FlowTileSimulator.prototype.isRightBlocked = function (e) {
        return !!e.isValid && !(l(e.ownerGridIds[1]) >= 13) && (this._isHasCard(e.layer, e.ownerGridIds[1] + 1) || this._isHasCard(e.layer, e.ownerGridIds[3] + 1));
    };
    FlowTileSimulator.prototype.isLocked = function (e) {
        return !e.isValid || !!this.isCovered(e) || !(!this.isLeftBlocked(e) || !this.isRightBlocked(e));
    };
    FlowTileSimulator.prototype.getFreeTiles = function () {
        var e = this;
        return this._tiles.filter(function (t) {
            return t.isValid && !e.isLocked(t);
        }).sort(function (e, t) {
            return e.layer - t.layer || e.gridY - t.gridY || e.gridX - t.gridX;
        });
    };
    FlowTileSimulator.prototype.getAvailablePairCount = function () {
        var e, t, o = this.getFreeTiles(), n = {};
        try {
            for (var i = __values(o), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                n[l.cardId] = (n[l.cardId] || 0) + 1;
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                a && !a.done && (t = i.return) && t.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        var s = 0;
        for (var c in n)
            s += Math.floor(n[c] / 2);
        return s;
    };
    FlowTileSimulator.prototype.getAvailablePairs = function () {
        var e, t, o = this.getFreeTiles(), n = {};
        try {
            for (var i = __values(o), a = i.next(); !a.done; a = i.next()) {
                var l = a.value;
                (n[l.cardId] = n[l.cardId] || []).push(l);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                a && !a.done && (t = i.return) && t.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        var s = [];
        for (var c in n)
            for (var u = n[c], p = 0; p < u.length - 1; p += 2)
                s.push([u[p], u[p + 1]]);
        return s;
    };
    FlowTileSimulator.prototype.clearPair = function (e, t) {
        var o, n, i, a, l, s, u, p;
        e.isValid = false;
        t.isValid = false;
        try {
            for (var f = __values(e.ownerGridIds), d = f.next(); !d.done; d = f.next()) {
                var h = d.value;
                this._gridMap.delete(c(e.layer, h));
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (n = f.return) && n.call(f);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        try {
            for (var y = __values(t.ownerGridIds), m = y.next(); !m.done; m = y.next()) {
                h = m.value;
                this._gridMap.delete(c(t.layer, h));
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
        if (e.layer === this._maxLayer || t.layer === this._maxLayer) {
            this._maxLayer = 0;
            try {
                for (var v = __values(this._tiles), g = v.next(); !g.done; g = v.next())
                    (b = g.value).isValid && b.layer > this._maxLayer && (this._maxLayer = b.layer);
            }
            catch (e) {
                l = {
                    error: e
                };
            }
            finally {
                try {
                    g && !g.done && (s = v.return) && s.call(v);
                }
                finally {
                    if (l)
                        throw l.error;
                }
            }
        }
        var _ = 0;
        try {
            for (var T = __values(this._tiles), C = T.next(); !C.done; C = T.next()) {
                var b;
                (b = C.value).isValid && !this.isLocked(b) && _++;
            }
        }
        catch (e) {
            u = {
                error: e
            };
        }
        finally {
            try {
                C && !C.done && (p = T.return) && p.call(T);
            }
            finally {
                if (u)
                    throw u.error;
            }
        }
        return _;
    };
    FlowTileSimulator.prototype.getRemainingCount = function () {
        var e, t, o = 0;
        try {
            for (var n = __values(this._tiles), i = n.next(); !i.done; i = n.next())
                i.value.isValid && o++;
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o;
    };
    FlowTileSimulator.prototype.isCleared = function () {
        return 0 === this.getRemainingCount();
    };
    FlowTileSimulator.prototype.isDead = function () {
        return this.getRemainingCount() > 0 && 0 === this.getAvailablePairCount();
    };
    FlowTileSimulator.prototype.clone = function () {
        return new FlowTileSimulator(this._tiles.map(cloneFlowTile));
    };
    FlowTileSimulator.prototype.getTilesCoveredBy = function (e) {
        var t, o;
        if (!e.isValid)
            return [];
        var n = [], i = new Set();
        try {
            for (var a = __values(e.ownerGridIds), l = a.next(); !l.done; l = a.next())
                for (var s = l.value, u = e.layer - 1; u >= 0; u--) {
                    var p = this._gridMap.get(c(u, s));
                    if (p && p.isValid && !i.has(p.id)) {
                        i.add(p.id);
                        n.push(p);
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
        return n;
    };
    FlowTileSimulator.prototype.getFreedByRemoval = function (e) {
        var t, o, n, i, a = [], l = this.getTilesCoveredBy(e);
        try {
            for (var s = __values(l), u = s.next(); !u.done; u = s.next()) {
                var p = u.value;
                if (p.id !== e.id && this.isCovered(p)) {
                    for (var f = true, d = p.layer + 1; d <= this._maxLayer; d++) {
                        try {
                            for (var h = (n = void 0, __values(p.ownerGridIds)), y = h.next(); !y.done; y = h.next()) {
                                var m = y.value, v = this._gridMap.get(c(d, m));
                                if (v && v.isValid && v.id !== e.id) {
                                    f = false;
                                    break;
                                }
                            }
                        }
                        catch (e) {
                            n = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                y && !y.done && (i = h.return) && i.call(h);
                            }
                            finally {
                                if (n)
                                    throw n.error;
                            }
                        }
                        if (!f)
                            break;
                    }
                    f && a.push(p);
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
                u && !u.done && (o = s.return) && o.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return a;
    };
    FlowTileSimulator.prototype.peelLayers = function () {
        for (var t, o, n, i, a, l, c = this._tiles.map(function (e) {
            return cloneFlowTile(e);
        }), u = new FlowTileSimulator(c), p = new Map(), f = 0; u.getRemainingCount() > 0;) {
            var d = u.getFreeTiles();
            if (0 === d.length) {
                var h = [];
                try {
                    for (var y = (t = void 0, __values(c)), m = y.next(); !m.done; m = y.next())
                        if ((b = m.value).isValid) {
                            h.push(b.id);
                            b.isValid = false;
                        }
                }
                catch (e) {
                    t = {
                        error: e
                    };
                }
                finally {
                    try {
                        m && !m.done && (o = y.return) && o.call(y);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
                p.set(f, h);
                break;
            }
            p.set(f, d.map(function (e) {
                return e.id;
            }));
            try {
                for (var v = (n = void 0, __values(d)), g = v.next(); !g.done; g = v.next())
                    (b = g.value).isValid = false;
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    g && !g.done && (i = v.return) && i.call(v);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
            u._rebuildGridMap();
            f++;
        }
        var _ = new Map();
        try {
            for (var T = __values(this._tiles), C = T.next(); !C.done; C = T.next()) {
                var b = C.value;
                _.set(b.id, b);
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                C && !C.done && (l = T.return) && l.call(T);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        var E = new Map();
        p.forEach(function (e, t) {
            var o, n, i = e.map(function (e) {
                return _.get(e);
            }).filter(Boolean);
            try {
                for (var a = __values(i), l = a.next(); !l.done; l = a.next())
                    l.value.depth = t;
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    l && !l.done && (n = a.return) && n.call(a);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            E.set(t, i);
        });
        return E;
    };
    return FlowTileSimulator;
}());
exports.FlowTileSimulator = FlowTileSimulator;

cc._RF.pop();
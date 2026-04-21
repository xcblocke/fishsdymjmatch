"use strict";
cc._RF.push(module, '62e2ePiWehKHb3kK6Lg9XJC', 'PathAnalyserUtils');
// Scripts/PathAnalyserUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PathAnalyserUtils = void 0;
var PathAnalyserUtils = /** @class */ (function () {
    function PathAnalyserUtils() {
    }
    PathAnalyserUtils.getLegalMoves = function (e, t) {
        var o, n, a, l, s = e.unlockTiles, c = [], u = new Map();
        try {
            for (var p = __values(s), f = p.next(); !f.done; f = p.next()) {
                var d = f.value;
                if (!t.has(d.id)) {
                    u.has(d.cardId) || u.set(d.cardId, []);
                    u.get(d.cardId).push(d);
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
                f && !f.done && (n = p.return) && n.call(p);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        try {
            for (var h = __values(u), y = h.next(); !y.done; y = h.next()) {
                var m = __read(y.value, 2), v = (m[0], m[1]);
                if (!(v.length < 2))
                    for (var g = 0; g < v.length; g++)
                        for (var _ = g + 1; _ < v.length; _++)
                            c.push(this.createPairFromSimple(v[g], v[_]));
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                y && !y.done && (l = h.return) && l.call(h);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        return c;
    };
    PathAnalyserUtils.createPairFromSimple = function (e, t) {
        return {
            tile1: Object.assign(Object.assign({}, e), {
                ownerGridIds: __spreadArrays(e.ownerGridIds)
            }),
            tile2: Object.assign(Object.assign({}, t), {
                ownerGridIds: __spreadArrays(t.ownerGridIds)
            })
        };
    };
    PathAnalyserUtils.isConflict = function (e, t) {
        var o, n, r, a, l = [e.tile1.id, e.tile2.id], s = [t.tile1.id, t.tile2.id];
        try {
            for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                try {
                    for (var f = (r = void 0, __values(s)), d = f.next(); !d.done; d = f.next())
                        if (p === d.value)
                            return true;
                }
                catch (e) {
                    r = {
                        error: e
                    };
                }
                finally {
                    try {
                        d && !d.done && (a = f.return) && a.call(f);
                    }
                    finally {
                        if (r)
                            throw r.error;
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
                u && !u.done && (n = c.return) && n.call(c);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return false;
    };
    PathAnalyserUtils.hasMoveGroupListSubSet = function (e, t) {
        var o, n, r, a;
        try {
            for (var l = __values(e), s = l.next(); !s.done; s = l.next()) {
                var c = s.value, u = true;
                try {
                    for (var p = (r = void 0, __values(c)), f = p.next(); !f.done; f = p.next()) {
                        var d = f.value;
                        if (!t.includes(d)) {
                            u = false;
                            break;
                        }
                    }
                }
                catch (e) {
                    r = {
                        error: e
                    };
                }
                finally {
                    try {
                        f && !f.done && (a = p.return) && a.call(p);
                    }
                    finally {
                        if (r)
                            throw r.error;
                    }
                }
                if (u && c.length < t.length)
                    return true;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (n = l.return) && n.call(l);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return false;
    };
    PathAnalyserUtils.getFreeColors = function (e, t) {
        var o, n, a, l, s, c, u = e.aliveTiles, p = e.unlockTiles, f = new Map(), d = new Map();
        try {
            for (var h = __values(u), y = h.next(); !y.done; y = h.next()) {
                var m = y.value;
                if (!t.has(m.id)) {
                    var v = f.get(m.cardId) || 0;
                    f.set(m.cardId, v + 1);
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
        try {
            for (var g = __values(p), _ = g.next(); !_.done; _ = g.next()) {
                m = _.value;
                if (!t.has(m.id)) {
                    v = d.get(m.cardId) || 0;
                    d.set(m.cardId, v + 1);
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
                _ && !_.done && (l = g.return) && l.call(g);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        var T = [];
        try {
            for (var C = __values(f), b = C.next(); !b.done; b = C.next()) {
                var E = __read(b.value, 2), S = E[0], I = E[1], w = d.get(S) || 0;
                I > 0 && I === w && T.push(S);
            }
        }
        catch (e) {
            s = {
                error: e
            };
        }
        finally {
            try {
                b && !b.done && (c = C.return) && c.call(C);
            }
            finally {
                if (s)
                    throw s.error;
            }
        }
        return T;
    };
    PathAnalyserUtils.log = function () { };
    PathAnalyserUtils.logWarning = function () { };
    PathAnalyserUtils.fileLog = function () { };
    return PathAnalyserUtils;
}());
exports.PathAnalyserUtils = PathAnalyserUtils;

cc._RF.pop();
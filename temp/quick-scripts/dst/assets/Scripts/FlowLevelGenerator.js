
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FlowLevelGenerator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89590ZQ+DZLL4nVd6ArGw3f', 'FlowLevelGenerator');
// Scripts/FlowLevelGenerator.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowLevelGenerator = void 0;
var FlowTileSimulator_1 = require("./FlowTileSimulator");
var c = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 62, 63];
var u = {
    minPairs: 50,
    maxPairs: 70,
    totalPairs: 0,
    boardWidth: 14,
    boardHeight: 18,
    maxLayers: 5,
    minCardId: 1,
    maxCardId: 63,
    puzzleCoreCount: 0,
    hamsterCount: 0,
    hamsterDistance: 2,
    crossDepthRatio: 0.6,
    layerAlignMode: 1,
    excludedCardIds: c
};
function p(e, t, o) {
    return e + "," + t + "," + o;
}
var f = /** @class */ (function () {
    function f(e) {
        this._s = null;
        this._s = e % 2147483647;
        this._s <= 0 && (this._s += 2147483646);
        for (var t = 0; t < 3; t++)
            this.next();
    }
    f.prototype.next = function () {
        this._s = 16807 * this._s % 2147483647;
        return (this._s - 1) / 2147483646;
    };
    f.prototype.nextInt = function (e, t) {
        return e + Math.floor(this.next() * (t - e + 1));
    };
    f.prototype.shuffle = function (e) {
        for (var t, o = e.length - 1; o > 0; o--) {
            var n = Math.floor(this.next() * (o + 1));
            t = __read([e[n], e[o]], 2), e[o] = t[0], e[n] = t[1];
        }
    };
    f.prototype.choice = function (e) {
        return e[Math.floor(this.next() * e.length)];
    };
    return f;
}());
var FlowLevelGenerator = /** @class */ (function () {
    function FlowLevelGenerator(e, t) {
        if (t === void 0) { t = 42; }
        this._actualPairs = 0;
        this._puzzleCores = [];
        this._hamsters = [];
        this._selectedTopology = "pyramid";
        this._cfg = null;
        this._rng = null;
        this._cfg = Object.assign(Object.assign({}, u), e);
        this._rng = new f(t);
    }
    Object.defineProperty(FlowLevelGenerator.prototype, "puzzleCores", {
        get: function () {
            return this._puzzleCores;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLevelGenerator.prototype, "hamsters", {
        get: function () {
            return this._hamsters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLevelGenerator.prototype, "selectedTopology", {
        get: function () {
            return this._selectedTopology;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowLevelGenerator.prototype, "actualPairs", {
        get: function () {
            return this._actualPairs;
        },
        enumerable: false,
        configurable: true
    });
    FlowLevelGenerator.solveClassic = function (t, o) {
        if (o === void 0) { o = true; }
        return FlowLevelGenerator._solveClassicMulti(t, 0, o, -1);
    };
    FlowLevelGenerator.solveBuffer = function (t, o, n, i, r) {
        if (o === void 0) { o = 4; }
        if (n === void 0) { n = true; }
        if (i === void 0) { i = 0; }
        if (r === void 0) { r = []; }
        return FlowLevelGenerator._solveBufferMulti(t, o, n, -1, i, r);
    };
    FlowLevelGenerator.solveBufferWithAdjust = function (t, o, n, i) {
        if (o === void 0) { o = 4; }
        if (n === void 0) { n = true; }
        return FlowLevelGenerator._solveBufferMulti(t, o, n, -1, 12, [], true, i);
    };
    FlowLevelGenerator._solveClassicMulti = function (t, o, n, i) {
        if (o === void 0) { o = 0; }
        if (n === void 0) { n = true; }
        if (i === void 0) { i = -1; }
        var r = FlowLevelGenerator._solveClassicCore(t, "smart", 0, n);
        if (null !== r)
            return r;
        var a = FlowLevelGenerator._solveClassicCore(t, "greedy", 0, n);
        if (null !== a)
            return a;
        for (var l = i >= 0 ? i : o > 0 ? 15 : 10, s = 0; s < l; s++) {
            var c = FlowLevelGenerator._solveClassicCore(t, "random", s, n);
            if (null !== c)
                return c;
        }
        return null;
    };
    FlowLevelGenerator._solveClassicCore = function (e, t, o, n) {
        for (var i, l, c = new FlowTileSimulator_1.FlowTileSimulator(e.map(FlowTileSimulator_1.cloneFlowTile)), u = n ? [] : void 0, p = (o + 1) % 2147483647 || 1; !c.isCleared();) {
            var f = c.getAvailablePairs();
            if (0 === f.length)
                return null;
            var d = void 0;
            if ("smart" === t) {
                var h = -1;
                d = f[0];
                try {
                    for (var y = (i = void 0, __values(f)), m = y.next(); !m.done; m = y.next()) {
                        var v = __read(m.value, 2), g = v[0], _ = v[1], T = c.getFreedByRemoval(g).length + c.getFreedByRemoval(_).length;
                        if (T > h) {
                            h = T;
                            d = [g, _];
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
                        m && !m.done && (l = y.return) && l.call(y);
                    }
                    finally {
                        if (i)
                            throw i.error;
                    }
                }
            }
            else if ("greedy" === t)
                d = f[0];
            else {
                p = 16807 * p % 2147483647;
                var C = Math.floor(p / 2147483647 * f.length);
                d = f[Math.min(C, f.length - 1)];
            }
            if (u) {
                var b = f.length;
                c.clearPair(d[0], d[1]);
                var E = c.getAvailablePairCount();
                u.push({
                    tile1Id: d[0].id,
                    tile2Id: d[1].id,
                    cardId: d[0].cardId,
                    pairCountBefore: b,
                    pairCountAfter: E
                });
            }
            else
                c.clearPair(d[0], d[1]);
        }
        return null != u ? u : [];
    };
    FlowLevelGenerator._solveBufferMulti = function (t, o, n, i, s, c, u, p) {
        if (i === void 0) { i = -1; }
        if (s === void 0) { s = 0; }
        if (c === void 0) { c = []; }
        if (u === void 0) { u = false; }
        var f, d;
        var h = FlowLevelGenerator._solveBufferCore(t, "smart", 0, o, n, 0, c, 1);
        if (null !== h)
            return h;
        if (s > 0) {
            var y = FlowLevelGenerator._solveBufferCore(t, "smart", 0, o, n, s, c, 1);
            if (null !== y)
                return y;
            var m = [], v = FlowLevelGenerator._solveBufferCore(t, "smart", 0, o, n, s, c, 3, u, m);
            if (null !== v && m.length > 0) {
                var g = new Map(t.map(function (e) {
                    return [e.id, e];
                }));
                try {
                    for (var _ = __values(m), T = _.next(); !T.done; T = _.next()) {
                        var C = __read(T.value, 2), b = C[0], E = C[1], S = g.get(b), I = g.get(E);
                        if (S && I) {
                            var w = S.cardId;
                            S.cardId = I.cardId;
                            I.cardId = w;
                        }
                    }
                }
                catch (e) {
                    f = {
                        error: e
                    };
                }
                finally {
                    try {
                        T && !T.done && (d = _.return) && d.call(_);
                    }
                    finally {
                        if (f)
                            throw f.error;
                    }
                }
                p && p.push.apply(p, __spreadArrays(m));
            }
            return v;
        }
        return null;
    };
    FlowLevelGenerator._evalAfterPick = function (t, o, n, i, r, l) {
        if (r === void 0) { r = 1; }
        if (l === void 0) { l = 12; }
        var c, u, p, f, d, h;
        var y = t.clone(), m = o.map(function (e) {
            return FlowTileSimulator_1.cloneFlowTile(e);
        }), v = y.tiles.find(function (e) {
            return e.id === n.id;
        });
        m.push(FlowTileSimulator_1.cloneFlowTile(v));
        v.isValid = false;
        y._rebuildGridMap();
        var g = m.length - 1, _ = m.findIndex(function (e, t) {
            return t < g && e.cardId === m[g].cardId;
        });
        if (_ >= 0) {
            m.splice(g, 1);
            m.splice(_, 1);
        }
        if (m.length >= i)
            return -100000;
        if (0 === y.getRemainingCount() && 0 === m.length)
            return 100000;
        var T = y.getFreeTiles();
        if (0 === T.length)
            return -100000;
        if (r <= 1)
            return (T.some(function (e) {
                return m.some(function (t) {
                    return t.cardId === e.cardId;
                });
            }) ? 3000 : 0) + 100 * y.getAvailablePairCount() + 10 * T.length - 500 * m.length;
        var C = Math.max(3, Math.floor(l / 2)), b = T.filter(function (e) {
            return m.some(function (t) {
                return t.cardId === e.cardId;
            });
        });
        if (b.length > 0) {
            var E = -Infinity;
            try {
                for (var S = __values(b), I = S.next(); !I.done; I = S.next()) {
                    var w = I.value;
                    (N = FlowLevelGenerator._evalAfterPick(y, m, w, i, r - 1, C)) > E && (E = N);
                }
            }
            catch (e) {
                c = {
                    error: e
                };
            }
            finally {
                try {
                    I && !I.done && (u = S.return) && u.call(S);
                }
                finally {
                    if (c)
                        throw c.error;
                }
            }
            return E;
        }
        var B = [], x = function x(e) {
            var t = y.getFreedByRemoval(e).length, o = T.some(function (t) {
                return t.id !== e.id && t.cardId === e.cardId;
            });
            B.push({
                t: e,
                quick: (o ? 800 : 0) + 10 * t
            });
        };
        try {
            for (var M = __values(T), O = M.next(); !O.done; O = M.next())
                x(w = O.value);
        }
        catch (e) {
            p = {
                error: e
            };
        }
        finally {
            try {
                O && !O.done && (f = M.return) && f.call(M);
            }
            finally {
                if (p)
                    throw p.error;
            }
        }
        B.sort(function (e, t) {
            return t.quick - e.quick;
        });
        var D = B.slice(0, Math.min(C, B.length)), P = -Infinity;
        try {
            for (var A = __values(D), R = A.next(); !R.done; R = A.next()) {
                var N;
                w = R.value.t;
                (N = FlowLevelGenerator._evalAfterPick(y, m, w, i, r - 1, C)) > P && (P = N);
            }
        }
        catch (e) {
            d = {
                error: e
            };
        }
        finally {
            try {
                R && !R.done && (h = A.return) && h.call(A);
            }
            finally {
                if (d)
                    throw d.error;
            }
        }
        return P;
    };
    FlowLevelGenerator._solveBufferCore = function (t, o, n, i, r, l, c, u, p, f) {
        if (l === void 0) { l = 0; }
        if (c === void 0) { c = []; }
        if (u === void 0) { u = 1; }
        if (p === void 0) { p = false; }
        if (f === void 0) { f = []; }
        for (var d = new FlowTileSimulator_1.FlowTileSimulator(t.map(FlowTileSimulator_1.cloneFlowTile)), h = c.map(FlowTileSimulator_1.cloneFlowTile), y = r ? [] : void 0, m = i, v = (n + 1) % 2147483647 || 1, g = function g() {
            return (v = 16807 * v % 2147483647) / 2147483647;
        }, _ = p ? 20 * t.length : 4 * t.length, T = function T() {
            var t, n, i, r, c, v, _, T, C, b, E, S;
            if (0 === d.getRemainingCount() && 0 === h.length)
                return {
                    value: null != y ? y : []
                };
            if (0 === d.getRemainingCount())
                return p ? "break" : {
                    value: null
                };
            var I, w = d.getFreeTiles();
            if (0 === w.length)
                return p ? "break" : {
                    value: null
                };
            if (h.length >= m)
                return p && FlowLevelGenerator._performAdjust(d, h, y, f, g) ? "continue" : {
                    value: null
                };
            if ("smart" === o && l > 0) {
                if ((G = w.filter(function (e) {
                    return h.some(function (t) {
                        return t.cardId === e.cardId;
                    });
                })).length > 0) {
                    if (1 === G.length)
                        I = G[0];
                    else {
                        I = G[0];
                        var B = -Infinity;
                        try {
                            for (var x = (t = void 0, __values(G)), M = x.next(); !M.done; M = x.next()) {
                                var O = M.value;
                                if ((L = FlowLevelGenerator._evalAfterPick(d, h, O, m, u, l)) > B) {
                                    B = L;
                                    I = O;
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
                                M && !M.done && (n = x.return) && n.call(x);
                            }
                            finally {
                                if (t)
                                    throw t.error;
                            }
                        }
                    }
                }
                else {
                    var D = [], P = function P(e) {
                        var t = d.getFreedByRemoval(e).length, o = w.some(function (t) {
                            return t.id !== e.id && t.cardId === e.cardId;
                        });
                        D.push({
                            t: e,
                            quick: (o ? 800 : 0) + 10 * t
                        });
                    };
                    try {
                        for (var A = (i = void 0, __values(w)), R = A.next(); !R.done; R = A.next())
                            P(O = R.value);
                    }
                    catch (e) {
                        i = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            R && !R.done && (r = A.return) && r.call(A);
                        }
                        finally {
                            if (i)
                                throw i.error;
                        }
                    }
                    D.sort(function (e, t) {
                        return t.quick - e.quick;
                    });
                    var N = D.length <= l ? D : D.slice(0, l);
                    I = N[0].t;
                    B = -Infinity;
                    try {
                        for (var j = (c = void 0, __values(N)), k = j.next(); !k.done; k = j.next()) {
                            var L;
                            O = k.value.t;
                            if ((L = FlowLevelGenerator._evalAfterPick(d, h, O, m, u, l)) > B) {
                                B = L;
                                I = O;
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
                            k && !k.done && (v = j.return) && v.call(j);
                        }
                        finally {
                            if (c)
                                throw c.error;
                        }
                    }
                }
            }
            else if ("smart" === o) {
                var G;
                if ((G = w.filter(function (e) {
                    return h.some(function (t) {
                        return t.cardId === e.cardId;
                    });
                })).length > 0) {
                    B = -Infinity;
                    I = G[0];
                    var F = function F(e) {
                        var t = d.getFreedByRemoval(e), o = h.filter(function (t) {
                            return t.cardId !== e.cardId;
                        }), n = (o.length > 0 && t.some(function (e) {
                            return o.some(function (t) {
                                return t.cardId === e.cardId;
                            });
                        }) ? 500 : 0) + 10 * t.length;
                        if (n > B) {
                            B = n;
                            I = e;
                        }
                    };
                    try {
                        for (var V = (_ = void 0, __values(G)), U = V.next(); !U.done; U = V.next())
                            F(O = U.value);
                    }
                    catch (e) {
                        _ = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            U && !U.done && (T = V.return) && T.call(V);
                        }
                        finally {
                            if (_)
                                throw _.error;
                        }
                    }
                }
                else if (h.length >= m - 2 && h.length > 0) {
                    var H = new Set(h.map(function (e) {
                        return e.cardId;
                    }));
                    I = w[0];
                    B = -Infinity;
                    var W = function W(e) {
                        var t = d.getFreedByRemoval(e), o = (w.some(function (t) {
                            return t.id !== e.id && t.cardId === e.cardId;
                        }) ? 800 : 0) + (H.has(e.cardId) || t.some(function (e) {
                            return H.has(e.cardId);
                        }) ? 400 : 0) + 10 * t.length;
                        if (o > B) {
                            B = o;
                            I = e;
                        }
                    };
                    try {
                        for (var z = (C = void 0, __values(w)), Y = z.next(); !Y.done; Y = z.next())
                            W(O = Y.value);
                    }
                    catch (e) {
                        C = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            Y && !Y.done && (b = z.return) && b.call(z);
                        }
                        finally {
                            if (C)
                                throw C.error;
                        }
                    }
                }
                else {
                    B = -Infinity;
                    I = w[0];
                    var K = function K(e) {
                        var t = d.getFreedByRemoval(e), o = (w.some(function (t) {
                            return t.id !== e.id && t.cardId === e.cardId;
                        }) ? 800 : 0) + 10 * t.length;
                        if (o > B) {
                            B = o;
                            I = e;
                        }
                    };
                    try {
                        for (var J = (E = void 0, __values(w)), Z = J.next(); !Z.done; Z = J.next())
                            K(O = Z.value);
                    }
                    catch (e) {
                        E = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            Z && !Z.done && (S = J.return) && S.call(J);
                        }
                        finally {
                            if (E)
                                throw E.error;
                        }
                    }
                }
            }
            else if ("greedy" === o) {
                var X = w.find(function (e) {
                    return h.some(function (t) {
                        return t.cardId === e.cardId;
                    });
                });
                I = X || w[0];
            }
            else if (g() < 0.7) {
                if (X = w.find(function (e) {
                    return h.some(function (t) {
                        return t.cardId === e.cardId;
                    });
                }))
                    I = X;
                else {
                    var q = Math.floor(g() * w.length);
                    I = w[Math.min(q, w.length - 1)];
                }
            }
            else {
                q = Math.floor(g() * w.length);
                I = w[Math.min(q, w.length - 1)];
            }
            var Q = h.findIndex(function (e) {
                return e.cardId === I.cardId;
            });
            y && y.push({
                type: "to-buffer",
                tileId: I.id,
                matchTileId: Q >= 0 ? h[Q].id : void 0,
                cardId: I.cardId,
                bufferCount: Q >= 0 ? h.length - 1 : h.length + 1
            });
            h.push(FlowTileSimulator_1.cloneFlowTile(I));
            I.isValid = false;
            d._rebuildGridMap();
            if (Q >= 0) {
                h.splice(h.length - 1, 1);
                h.splice(Q, 1);
            }
            if (h.length >= m) {
                if (!p)
                    return {
                        value: null
                    };
                if (!FlowLevelGenerator._performAdjust(d, h, y, f, g))
                    return {
                        value: null
                    };
            }
        }; _-- > 0;) {
            var C = T();
            if ("object" == typeof C)
                return C.value;
            if ("break" === C)
                break;
        }
        return null;
    };
    FlowLevelGenerator._performAdjust = function (e, t, o, n) {
        if (0 === t.length)
            return false;
        var i = t.pop(), r = e.tiles.find(function (e) {
            return e.id === i.id;
        });
        if (!r)
            return false;
        r.isValid = true;
        e._rebuildGridMap();
        o && o.length > 0 && o.pop();
        var a = new Set(t.map(function (e) {
            return e.cardId;
        }));
        if (0 === a.size)
            return false;
        var l = new Set(e.getFreeTiles().map(function (e) {
            return e.id;
        })), s = e.tiles.filter(function (e) {
            return e.isValid && !l.has(e.id) && a.has(e.cardId);
        }).sort(function (e, t) {
            var o, n;
            return (null !== (o = e.depth) && void 0 !== o ? o : 999) - (null !== (n = t.depth) && void 0 !== n ? n : 999);
        });
        if (0 === s.length)
            return false;
        var c = s[0], u = r.cardId;
        r.cardId = c.cardId;
        c.cardId = u;
        n.push([r.id, c.id]);
        return true;
    };
    FlowLevelGenerator.prototype._selectTopology = function () {
        var e, t, o = this._cfg.topologyWeights;
        if (o) {
            var n = Object.entries(o).filter(function (e) {
                return __read(e, 2)[1] > 0;
            });
            if (0 !== n.length) {
                var i = n.reduce(function (e, t) {
                    return e + __read(t, 2)[1];
                }, 0), l = this._rng.next() * i;
                try {
                    for (var s = __values(n), c = s.next(); !c.done; c = s.next()) {
                        var u = __read(c.value, 2), p = u[0];
                        if ((l -= u[1]) <= 0) {
                            this._selectedTopology = p;
                            return;
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
                this._selectedTopology = n[n.length - 1][0];
            }
            else
                this._selectedTopology = "pyramid";
        }
        else
            this._selectedTopology = "pyramid";
    };
    FlowLevelGenerator.prototype._buildTopology = function () {
        switch (this._selectedTopology) {
            case "cross":
                return this._buildCrossTopology();
            case "multiPeak":
                return this._buildMultiPeakTopology();
            case "checkerboard":
                return this._buildCheckerboardTopology();
            case "spiral":
                return this._buildSpiralTopology();
            case "hourglass":
                return this._buildHourglassTopology();
            case "mirror":
                return this._buildMirrorTopology();
            default:
                return this._buildPyramidTopology();
        }
    };
    FlowLevelGenerator.prototype.generate = function () {
        var e = this._cfg;
        this._actualPairs = e.totalPairs > 0 ? e.totalPairs : this._rng.nextInt(e.minPairs, e.maxPairs);
        this._selectTopology();
        return this._generateOnce();
    };
    FlowLevelGenerator.prototype._generateOnce = function () {
        var e = this._buildBase();
        return this._generateFromBase(e);
    };
    FlowLevelGenerator.prototype._buildBase = function () {
        var e = this._buildTopology(), t = new FlowTileSimulator_1.FlowTileSimulator(e).peelLayers(), o = new Map();
        t.forEach(function (e, t) {
            o.set(t, e.map(function (e) {
                return e.id;
            }));
        });
        return {
            baseTiles: e,
            baseDepthIds: o
        };
    };
    FlowLevelGenerator.prototype._generateFromBase = function (e) {
        var t, o, n, i, r = e.baseTiles.map(function (e) {
            return FlowTileSimulator_1.cloneFlowTile(e);
        });
        try {
            for (var l = __values(r), c = l.next(); !c.done; c = l.next())
                (d = c.value).cardId = 0;
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var u = new Map();
        try {
            for (var p = __values(r), f = p.next(); !f.done; f = p.next()) {
                var d = f.value;
                u.set(d.id, d);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (i = p.return) && i.call(p);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        var h = new Map();
        e.baseDepthIds.forEach(function (e, t) {
            h.set(t, e.map(function (e) {
                return u.get(e);
            }).filter(Boolean));
        });
        this._assignStrategicCardIds(r, h);
        this._ensureEvenCardIds(r);
        return r;
    };
    FlowLevelGenerator.prototype._ensureEvenCardIds = function (e) {
        var t, o, n, i, r, l, s = this._cfg;
        if (e.length % 2 != 0) {
            var c = {};
            try {
                for (var u = __values(e), p = u.next(); !p.done; p = u.next())
                    c[(b = p.value).cardId] = (c[b.cardId] || 0) + 1;
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    p && !p.done && (o = u.return) && o.call(u);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            var f = e[e.length - 1].cardId, d = 0;
            for (var h in c)
                if (c[h] % 2 == 1 && c[h] > d) {
                    d = c[h];
                    f = Number(h);
                }
            for (var y = e.length - 1; y >= 0; y--)
                if (e[y].cardId === f) {
                    e.splice(y, 1);
                    break;
                }
        }
        var m = {};
        try {
            for (var v = __values(e), g = v.next(); !g.done; g = v.next())
                (m[(b = g.value).cardId] = m[b.cardId] || []).push(b);
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
        var _ = [];
        for (var h in m)
            m[h].length % 2 != 0 && _.push(m[h]);
        for (y = 0; y < _.length - 1; y += 2)
            _[y + 1][_[y + 1].length - 1].cardId = _[y][0].cardId;
        try {
            for (var T = __values(e), C = T.next(); !C.done; C = T.next()) {
                var b;
                ((b = C.value).cardId < s.minCardId || b.cardId > s.maxCardId) && (b.cardId = s.minCardId);
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                C && !C.done && (l = T.return) && l.call(T);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
    };
    FlowLevelGenerator.prototype.generateAndValidate = function (e, t) {
        if (e === void 0) { e = 50; }
        if (t === void 0) { t = false; }
        return this._generateInternal("classic", e, t);
    };
    FlowLevelGenerator.prototype.generateAndValidateBuffer = function (e, t) {
        if (e === void 0) { e = 50; }
        if (t === void 0) { t = false; }
        return this._generateInternal("buffer", e, t);
    };
    FlowLevelGenerator.prototype.generateAndValidateAsync = function (e, t) {
        if (e === void 0) { e = 30; }
        if (t === void 0) { t = false; }
        return __generator(this, function (o) {
            switch (o.label) {
                case 0:
                    return [5, __values(this._generateInternalAsync("classic", e, t))];
                case 1:
                    return [2, o.sent()];
            }
        });
    };
    FlowLevelGenerator.prototype.generateAndValidateBufferAsync = function (e, t) {
        if (e === void 0) { e = 30; }
        if (t === void 0) { t = false; }
        return __generator(this, function (o) {
            switch (o.label) {
                case 0:
                    return [5, __values(this._generateInternalAsync("buffer", e, t))];
                case 1:
                    return [2, o.sent()];
            }
        });
    };
    FlowLevelGenerator.prototype.generateEasy = function () {
        var e = this._cfg;
        this._actualPairs = e.totalPairs > 0 ? e.totalPairs : this._rng.nextInt(e.minPairs, e.maxPairs);
        this._selectTopology();
        for (var t = null, o = 0; o < 10; o++) {
            t = this._buildBase();
            var n = this._generateFromBase(t);
            if (new FlowTileSimulator_1.FlowTileSimulator(n).getAvailablePairCount() >= 1)
                return {
                    tiles: n,
                    solvable: true,
                    attempt: o + 1
                };
            this._rng = new f(this._rng.nextInt(1, 2147483646));
        }
        return null;
    };
    FlowLevelGenerator.prototype._generateInternal = function (t, o, n) {
        var i, r, a = this._cfg;
        this._actualPairs = a.totalPairs > 0 ? a.totalPairs : this._rng.nextInt(a.minPairs, a.maxPairs);
        this._selectTopology();
        var l = "buffer" === t, c = a.puzzleCoreCount > 0 || (null !== (i = a.hamsterCount) && void 0 !== i ? i : 0) > 0, u = n ? -1 : c ? 8 : 5;
        if (l) {
            var p = this._buildBase(), d = this._generateFromBase(p), h = [];
            return null !== (v = FlowLevelGenerator._solveBufferMulti(d, null !== (r = a.bufferSize) && void 0 !== r ? r : 4, n, -1, 12, [], true, h)) ? {
                tiles: d,
                solvable: true,
                attempt: 1,
                adjustCount: h.length,
                solveBufferPath: n ? v : void 0
            } : {
                tiles: d,
                solvable: false,
                attempt: 1,
                adjustCount: 0
            };
        }
        for (var y = null, m = 0; m < o; m++) {
            p = this._buildBase();
            y = d = this._generateFromBase(p);
            if (new FlowTileSimulator_1.FlowTileSimulator(d).getAvailablePairCount() >= 1) {
                var v;
                if (null !== (v = FlowLevelGenerator._solveClassicMulti(d, a.puzzleCoreCount, n, u)))
                    return {
                        tiles: d,
                        solvable: true,
                        attempt: m + 1,
                        solvePath: n ? v : void 0
                    };
            }
            this._rng = new f(this._rng.nextInt(1, 2147483646));
        }
        return {
            tiles: y,
            solvable: false,
            attempt: o
        };
    };
    FlowLevelGenerator.prototype._generateInternalAsync = function (t, o, n) {
        var r, a, l, c, u, p, d, h, y, m, v, g;
        return __generator(this, function (i) {
            switch (i.label) {
                case 0:
                    r = this._cfg;
                    this._actualPairs = r.totalPairs > 0 ? r.totalPairs : this._rng.nextInt(r.minPairs, r.maxPairs);
                    this._selectTopology();
                    return [4];
                case 1:
                    i.sent();
                    a = "buffer" === t;
                    l = r.puzzleCoreCount > 0 || (null !== (v = r.hamsterCount) && void 0 !== v ? v : 0) > 0;
                    c = n ? -1 : l ? 8 : 5;
                    if (!a)
                        return [3, 3];
                    h = this._buildBase();
                    y = this._generateFromBase(h);
                    return [4];
                case 2:
                    i.sent();
                    u = [];
                    return null !== (m = FlowLevelGenerator._solveBufferMulti(y, null !== (g = r.bufferSize) && void 0 !== g ? g : 4, n, -1, 12, [], true, u)) ? [2, {
                            tiles: y,
                            solvable: true,
                            attempt: 1,
                            adjustCount: u.length,
                            solveBufferPath: n ? m : void 0
                        }] : [2, {
                            tiles: y,
                            solvable: false,
                            attempt: 1,
                            adjustCount: 0
                        }];
                case 3:
                    p = null;
                    d = 0;
                    i.label = 4;
                case 4:
                    if (!(d < o))
                        return [3, 8];
                    h = this._buildBase();
                    y = this._generateFromBase(h);
                    p = y;
                    return [4];
                case 5:
                    i.sent();
                    return new FlowTileSimulator_1.FlowTileSimulator(y).getAvailablePairCount() >= 1 && null !== (m = FlowLevelGenerator._solveClassicMulti(y, r.puzzleCoreCount, n, c)) ? [2, {
                            tiles: y,
                            solvable: true,
                            attempt: d + 1,
                            solvePath: n ? m : void 0
                        }] : [4];
                case 6:
                    i.sent();
                    this._rng = new f(this._rng.nextInt(1, 2147483646));
                    i.label = 7;
                case 7:
                    d++;
                    return [3, 4];
                case 8:
                    return [2, {
                            tiles: p,
                            solvable: false,
                            attempt: o
                        }];
            }
        });
    };
    FlowLevelGenerator.prototype._buildPyramidTopology = function () {
        for (var e = this._cfg, t = 2 * this._actualPairs, o = [], n = {}, i = 0, r = this._distributeTilesToLayers(t, e.maxLayers), a = 0; a < r.length; a++) {
            var s = r[a];
            if (!(s <= 0)) {
                var c;
                c = 0 === a ? this._growBaseLayer(s, i, n, e) : this._growUpperLayer(a, s, i, n, e);
                o.push.apply(o, __spreadArrays(c.tiles));
                i = c.nextId;
            }
        }
        return o;
    };
    FlowLevelGenerator.prototype._buildMirrorTopology = function () {
        var e, t, o = this._cfg, n = 2 * this._actualPairs, i = [], c = {}, u = 0, p = this._mirrorV.bind(this), f = this._distributeTilesToLayers(n, o.maxLayers), d = f[0], h = Math.floor(o.boardWidth / 2) - 1;
        h -= h % 2;
        var y = Math.floor(o.boardHeight / 2) - 1;
        y -= y % 2;
        var m = 0;
        __read(p(h, 0, o), 1)[0] === h && this._rng.next() < 0.6 && (m = 2 * (1 + Math.floor(3 * this._rng.next())));
        var v = Math.floor(o.boardHeight / 8), g = v > 0 ? 2 * Math.floor(this._rng.next() * (v + 1)) * (this._rng.next() < 0.5 ? -1 : 1) : 0, _ = Math.max(0, Math.min(o.boardHeight - 2, y + g));
        _ -= _ % 2;
        var T = new Set(), C = function C(e, t) {
            return e + "," + t;
        }, b = [[2, 0], [-2, 0], [0, 2], [0, -2], [2, 2], [2, -2], [-2, 2], [-2, -2]], E = Math.max(0, d - m), S = h - 2, I = _, w = __read(p(S, I, o), 2), B = w[0], x = w[1];
        if ((S !== B || I !== x) && i.length + 2 <= E && S >= 0 && S + 1 < o.boardWidth && I >= 0 && I + 1 < o.boardHeight && B >= 0 && B + 1 < o.boardWidth && x >= 0 && x + 1 < o.boardHeight && this._canPlace(S, I, 0, c) && this._canPlace(B, x, 0, c)) {
            var M = FlowTileSimulator_1.createFlowTile(u++, S, I, 0, 0);
            this._occupy(M, c);
            i.push(M);
            T.add(C(S, I));
            var O = FlowTileSimulator_1.createFlowTile(u++, B, x, 0, 0);
            this._occupy(O, c);
            i.push(O);
            T.add(C(B, x));
        }
        for (var D = __read(p(h, _, o), 2), P = D[0], A = D[1], R = h === P && _ === A ? [[h, _]] : [[h, _], [P, A]]; i.length < E && R.length > 0;) {
            this._rng.shuffle(R);
            for (var N = false, j = 0; j < R.length; j++) {
                var k = __read(R[j], 2), L = k[0], G = k[1];
                this._rng.shuffle(b);
                try {
                    for (var F = (e = void 0, __values(b)), V = F.next(); !V.done; V = F.next()) {
                        var U = __read(V.value, 2), H = U[0], W = U[1], z = L + H, Y = G + W, K = __read(p(z, Y, o), 2), J = K[0], Z = K[1];
                        if (!T.has(C(z, Y)) && !T.has(C(J, Z)) && !(z < 0 || Y < 0 || z + 1 >= o.boardWidth || Y + 1 >= o.boardHeight) && !(J < 0 || Z < 0 || J + 1 >= o.boardWidth || Z + 1 >= o.boardHeight) && this._canPlace(z, Y, 0, c) && this._canPlace(J, Z, 0, c) && !(z === J && Y === Z || i.length + 2 > E)) {
                            M = FlowTileSimulator_1.createFlowTile(u++, z, Y, 0, 0);
                            this._occupy(M, c);
                            i.push(M);
                            T.add(C(z, Y));
                            R.push([z, Y]);
                            O = FlowTileSimulator_1.createFlowTile(u++, J, Z, 0, 0);
                            this._occupy(O, c);
                            i.push(O);
                            T.add(C(J, Z));
                            R.push([J, Z]);
                            N = true;
                            break;
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
                        V && !V.done && (t = F.return) && t.call(F);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                if (N)
                    break;
            }
            N || R.shift();
        }
        if (m > 0) {
            for (var X = [], q = 0; q + 1 < o.boardHeight; q += 2)
                this._canPlace(h, q, 0, c) && X.push(q);
            this._rng.shuffle(X);
            for (var Q = -2 & Math.min(m, X.length), $ = 0; $ < Q; $++) {
                var ee = FlowTileSimulator_1.createFlowTile(u++, h, X[$], 0, 0);
                this._occupy(ee, c);
                i.push(ee);
            }
        }
        var te = d - i.length;
        te > 0 && f.length > 1 && (f[1] += te);
        for (var oe = 1; oe < f.length; oe++)
            if (!(f[oe] <= 0)) {
                var ne = this._growUpperLayer(oe, f[oe], u, c, o, p);
                i.push.apply(i, __spreadArrays(ne.tiles));
                u = ne.nextId;
            }
        return i;
    };
    FlowLevelGenerator.prototype._mirror = function (e, t, o) {
        return [o.boardWidth - 2 - e, o.boardHeight - 2 - t];
    };
    FlowLevelGenerator.prototype._mirrorV = function (e, t, o) {
        return [o.boardWidth - 2 - e, t];
    };
    FlowLevelGenerator.prototype._growBaseLayer = function (e, t, o, n, i) {
        if (i === void 0) { i = this._mirror.bind(this); }
        var l, c;
        var u = [], p = Math.floor(n.boardWidth / 2) - 1, f = Math.floor(n.boardHeight / 2) - 1;
        p -= p % 2;
        f -= f % 2;
        var d = new Set(), h = function h(e, t) {
            return e + "," + t;
        }, y = p - 2, m = f, v = __read(i(y, m, n), 2), g = v[0], _ = v[1];
        if ((y !== g || m !== _) && this._canPlace(y, m, 0, o) && this._canPlace(g, _, 0, o)) {
            var T = FlowTileSimulator_1.createFlowTile(t++, y, m, 0, 0);
            this._occupy(T, o);
            u.push(T);
            d.add(h(y, m));
            var C = FlowTileSimulator_1.createFlowTile(t++, g, _, 0, 0);
            this._occupy(C, o);
            u.push(C);
            d.add(h(g, _));
        }
        for (var b = __read(i(p, f, n), 2), E = b[0], S = b[1], I = p === E && f === S ? [[p, f]] : [[p, f], [E, S]], w = [[2, 0], [-2, 0], [0, 2], [0, -2], [2, 2], [2, -2], [-2, 2], [-2, -2]]; u.length < e && I.length > 0;) {
            this._rng.shuffle(I);
            for (var B = false, x = 0; x < I.length; x++) {
                var M = __read(I[x], 2), O = M[0], D = M[1];
                this._rng.shuffle(w);
                try {
                    for (var P = (l = void 0, __values(w)), A = P.next(); !A.done; A = P.next()) {
                        var R = __read(A.value, 2), N = R[0], j = R[1], k = O + N, L = D + j, G = __read(i(k, L, n), 2), F = G[0], V = G[1];
                        if (!d.has(h(k, L)) && !d.has(h(F, V)) && !(k < 0 || L < 0 || k + 1 >= n.boardWidth || L + 1 >= n.boardHeight) && !(F < 0 || V < 0 || F + 1 >= n.boardWidth || V + 1 >= n.boardHeight) && this._canPlace(k, L, 0, o) && this._canPlace(F, V, 0, o) && !(k === F && L === V || u.length + 2 > e)) {
                            T = FlowTileSimulator_1.createFlowTile(t++, k, L, 0, 0);
                            this._occupy(T, o);
                            u.push(T);
                            d.add(h(k, L));
                            I.push([k, L]);
                            C = FlowTileSimulator_1.createFlowTile(t++, F, V, 0, 0);
                            this._occupy(C, o);
                            u.push(C);
                            d.add(h(F, V));
                            I.push([F, V]);
                            B = true;
                            break;
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
                        A && !A.done && (c = P.return) && c.call(P);
                    }
                    finally {
                        if (l)
                            throw l.error;
                    }
                }
                if (B)
                    break;
            }
            B || I.shift();
        }
        return {
            tiles: u,
            nextId: t
        };
    };
    FlowLevelGenerator.prototype._growUpperLayer = function (e, t, o, n, i, l) {
        if (l === void 0) { l = this._mirror.bind(this); }
        var c, u, p, f = this;
        for (var d = [], h = [], y = 0; y < i.boardWidth - 1; y++)
            for (var m = 0; m < i.boardHeight - 1; m++)
                if (this._canPlace(y, m, e, n)) {
                    var v = this._countCovers(y, m, e, n);
                    v >= 2 && h.push({
                        gx: y,
                        gy: m,
                        covers: v
                    });
                }
        var g = null !== (p = i.layerAlignMode) && void 0 !== p ? p : 1, _ = h;
        if (2 === g) {
            _ = h.filter(function (t) {
                return !f._isAlignedWithBelow(t.gx, t.gy, e, n);
            });
        }
        else {
            4 === g && (_ = h.filter(function (t) {
                return f._isAlignedWithBelow(t.gx, t.gy, e, n);
            }));
        }
        var T = i.boardWidth / 2, C = i.boardHeight / 2;
        if (3 === g) {
            _.sort(function (t, o) {
                var i = f._isAlignedWithBelow(t.gx, t.gy, e, n) ? 1 : 0, r = f._isAlignedWithBelow(o.gx, o.gy, e, n) ? 1 : 0;
                return r !== i ? r - i : o.covers !== t.covers ? o.covers - t.covers : Math.pow(t.gx - T, 2) + Math.pow(t.gy - C, 2) - (Math.pow(o.gx - T, 2) + Math.pow(o.gy - C, 2));
            });
        }
        else {
            _.sort(function (e, t) {
                return t.covers !== e.covers ? t.covers - e.covers : Math.pow(e.gx - T, 2) + Math.pow(e.gy - C, 2) - (Math.pow(t.gx - T, 2) + Math.pow(t.gy - C, 2));
            });
        }
        var b = new Set(), E = function E(e, t) {
            return e + "," + t;
        };
        try {
            for (var S = __values(_), I = S.next(); !I.done; I = S.next()) {
                var w = I.value;
                if (d.length >= t)
                    break;
                if (!b.has(E(w.gx, w.gy)) && this._canPlace(w.gx, w.gy, e, n)) {
                    var B = __read(l(w.gx, w.gy, i), 2), x = B[0], M = B[1];
                    if ((w.gx !== x || w.gy !== M) && !b.has(E(x, M)) && this._canPlace(x, M, e, n) && !(this._countCovers(x, M, e, n) < 1 || d.length + 2 > t)) {
                        var O = FlowTileSimulator_1.createFlowTile(o++, w.gx, w.gy, e, 0);
                        this._occupy(O, n);
                        d.push(O);
                        b.add(E(w.gx, w.gy));
                        var D = FlowTileSimulator_1.createFlowTile(o++, x, M, e, 0);
                        this._occupy(D, n);
                        d.push(D);
                        b.add(E(x, M));
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
                I && !I.done && (u = S.return) && u.call(S);
            }
            finally {
                if (c)
                    throw c.error;
            }
        }
        return {
            tiles: d,
            nextId: o
        };
    };
    FlowLevelGenerator.prototype._buildCrossTopology = function () {
        for (var e, t, o = this._cfg, n = 2 * this._actualPairs, i = [], c = {}, u = 0, p = this._distributeTilesToLayers(n, o.maxLayers), f = Math.floor(o.boardWidth / 2) - 1 - (Math.floor(o.boardWidth / 2) - 1) % 2, d = Math.floor(o.boardHeight / 2) - 1 - (Math.floor(o.boardHeight / 2) - 1) % 2, h = p[0], y = new Set(), m = function m(e, t) {
            return e + "," + t;
        }, v = this._rng.next() < 0.4, g = 2 + Math.floor(4 * this._rng.next()), _ = 2 + Math.floor(4 * this._rng.next()), T = function T(e, t) {
            if (v) {
                var o = e - f, n = t - d;
                return Math.abs(o - n) <= 1.414 * g || Math.abs(o + n) <= 1.414 * _;
            }
            var i = Math.abs(e - f), r = Math.abs(t - d);
            return i <= g || r <= _;
        }, C = v ? [[2, 2], [2, -2], [-2, 2], [-2, -2], [2, 0], [-2, 0], [0, 2], [0, -2]] : [[2, 0], [-2, 0], [0, 2], [0, -2]], b = [[f, d]]; i.length < h && b.length > 0;) {
            this._rng.shuffle(b);
            for (var E = false, S = 0; S < b.length; S++) {
                var I = __read(b[S], 2), w = I[0], B = I[1];
                this._rng.shuffle(C);
                try {
                    for (var x = (e = void 0, __values(C)), M = x.next(); !M.done; M = x.next()) {
                        var O = __read(M.value, 2), D = O[0], P = O[1], A = w + D, R = B + P;
                        if (T(A, R)) {
                            var N = __read(this._mirror(A, R, o), 2), j = N[0], k = N[1];
                            if (T(j, k) && !y.has(m(A, R)) && !y.has(m(j, k)) && !(A < 0 || R < 0 || A + 1 >= o.boardWidth || R + 1 >= o.boardHeight) && !(j < 0 || k < 0 || j + 1 >= o.boardWidth || k + 1 >= o.boardHeight) && this._canPlace(A, R, 0, c) && this._canPlace(j, k, 0, c) && !(A === j && R === k || i.length + 2 > h)) {
                                var L = FlowTileSimulator_1.createFlowTile(u++, A, R, 0, 0);
                                this._occupy(L, c);
                                i.push(L);
                                y.add(m(A, R));
                                b.push([A, R]);
                                var G = FlowTileSimulator_1.createFlowTile(u++, j, k, 0, 0);
                                this._occupy(G, c);
                                i.push(G);
                                y.add(m(j, k));
                                b.push([j, k]);
                                E = true;
                                break;
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
                        M && !M.done && (t = x.return) && t.call(x);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                if (E)
                    break;
            }
            E || b.shift();
        }
        var F = h - i.length;
        F > 0 && p.length > 1 && (p[1] += F);
        for (var V = 1; V < p.length; V++)
            if (!(p[V] <= 0)) {
                var U = this._growUpperLayer(V, p[V], u, c, o);
                i.push.apply(i, __spreadArrays(U.tiles));
                u = U.nextId;
            }
        return i;
    };
    FlowLevelGenerator.prototype._buildMultiPeakTopology = function () {
        var e, t, o, n = this._cfg, i = 2 * this._actualPairs, c = [], u = {}, p = 0, f = this._distributeTilesToLayers(i, n.maxLayers), d = f[0], h = this._rng.nextInt(2, 4), y = Math.floor(n.boardWidth / 2), m = Math.floor(n.boardHeight / 2), v = function v(e) {
            return e - e % 2;
        };
        o = 2 === h ? [[v(Math.floor(0.4 * y)), v(m)], [v(Math.floor(1.6 * y)), v(m)]] : 3 === h ? [[v(y), v(Math.floor(0.35 * m))], [v(Math.floor(0.4 * y)), v(Math.floor(1.3 * m))], [v(Math.floor(1.6 * y)), v(Math.floor(1.3 * m))]] : [[v(Math.floor(0.4 * y)), v(Math.floor(0.4 * m))], [v(Math.floor(1.6 * y)), v(Math.floor(0.4 * m))], [v(Math.floor(0.4 * y)), v(Math.floor(1.6 * m))], [v(Math.floor(1.6 * y)), v(Math.floor(1.6 * m))]];
        for (var g = new Set(), _ = function _(e, t) {
            return e + "," + t;
        }, T = [[2, 0], [0, 2], [-2, 0], [0, -2], [2, 2], [2, -2], [-2, 2], [-2, -2]], C = o.map(function (e) {
            return [e];
        }); c.length < d;) {
            for (var b = false, E = 0; E < C.length && !(c.length >= d); E++) {
                var S = C[E];
                if (0 !== S.length) {
                    var I = false;
                    this._rng.shuffle(S);
                    for (var w = 0; w < S.length && w < 20; w++) {
                        var B = __read(S[w], 2), x = B[0], M = B[1];
                        this._rng.shuffle(T);
                        try {
                            for (var O = (e = void 0, __values(T)), D = O.next(); !D.done; D = O.next()) {
                                var P = __read(D.value, 2), A = P[0], R = P[1], N = x + A, j = M + R, k = __read(this._mirror(N, j, n), 2), L = k[0], G = k[1];
                                if (!g.has(_(N, j)) && !(N < 0 || j < 0 || N + 1 >= n.boardWidth || j + 1 >= n.boardHeight) && this._canPlace(N, j, 0, u) && (N !== L || j !== G) && !g.has(_(L, G)) && !(L < 0 || G < 0 || L + 1 >= n.boardWidth || G + 1 >= n.boardHeight) && this._canPlace(L, G, 0, u) && !(c.length + 2 > d)) {
                                    var F = FlowTileSimulator_1.createFlowTile(p++, N, j, 0, 0);
                                    this._occupy(F, u);
                                    c.push(F);
                                    g.add(_(N, j));
                                    S.push([N, j]);
                                    var V = FlowTileSimulator_1.createFlowTile(p++, L, G, 0, 0);
                                    this._occupy(V, u);
                                    c.push(V);
                                    g.add(_(L, G));
                                    for (var U = E, H = Infinity, W = 0; W < o.length; W++) {
                                        var z = Math.pow(L - o[W][0], 2) + Math.pow(G - o[W][1], 2);
                                        if (z < H) {
                                            H = z;
                                            U = W;
                                        }
                                    }
                                    C[U].push([L, G]);
                                    I = true;
                                    b = true;
                                    break;
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
                                D && !D.done && (t = O.return) && t.call(O);
                            }
                            finally {
                                if (e)
                                    throw e.error;
                            }
                        }
                        if (I)
                            break;
                    }
                    !I && S.length > 8 && S.splice(0, 3);
                }
            }
            if (!b)
                break;
        }
        for (var Y = 1; Y < f.length; Y++)
            if (!(f[Y] <= 0)) {
                var K = this._growUpperLayer(Y, f[Y], p, u, n);
                c.push.apply(c, __spreadArrays(K.tiles));
                p = K.nextId;
            }
        return c;
    };
    FlowLevelGenerator.prototype._buildCheckerboardTopology = function () {
        for (var e, t, o = this._cfg, n = 2 * this._actualPairs, i = [], c = {}, u = 0, p = this._distributeTilesToLayers(n, o.maxLayers), f = p[0], d = [], h = 0; h <= o.boardWidth - 2; h += 2)
            for (var y = 0; y <= o.boardHeight - 2; y += 2)
                d.push([h, y]);
        this._rng.shuffle(d);
        var m = new Set(), v = function v(e, t) {
            return e + "," + t;
        }, g = 0;
        try {
            for (var _ = __values(d), T = _.next(); !T.done; T = _.next()) {
                var C = __read(T.value, 2);
                h = C[0], y = C[1];
                if (g >= f)
                    break;
                if (!m.has(v(h, y)) && this._canPlace(h, y, 0, c)) {
                    var b = __read(this._mirror(h, y, o), 2), E = b[0], S = b[1];
                    if ((h !== E || y !== S) && !m.has(v(E, S)) && this._canPlace(E, S, 0, c) && !(g + 2 > f)) {
                        var I = FlowTileSimulator_1.createFlowTile(u++, h, y, 0, 0);
                        this._occupy(I, c);
                        i.push(I);
                        m.add(v(h, y));
                        var w = FlowTileSimulator_1.createFlowTile(u++, E, S, 0, 0);
                        this._occupy(w, c);
                        i.push(w);
                        m.add(v(E, S));
                        g += 2;
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
                T && !T.done && (t = _.return) && t.call(_);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        for (var B = 1; B < p.length; B++)
            if (!(p[B] <= 0)) {
                var x = this._growUpperLayer(B, p[B], u, c, o);
                i.push.apply(i, __spreadArrays(x.tiles));
                u = x.nextId;
            }
        if (i.length % 2 != 0 && i.length > 0) {
            i[i.length - 1].isValid = false;
            i.pop();
        }
        return i;
    };
    FlowLevelGenerator.prototype._buildSpiralTopology = function () {
        for (var e = this._cfg, t = 2 * this._actualPairs, o = [], n = {}, i = 0, a = this._distributeTilesToLayers(t, e.maxLayers), c = this._generateSpiralPath(e), u = a[0], p = new Set(), f = function f(e, t) {
            return e + "," + t;
        }, d = 0; o.length < u && d < c.length;) {
            var h = __read(c[d++], 2), y = h[0], m = h[1];
            if (!p.has(f(y, m)) && this._canPlace(y, m, 0, n)) {
                var v = __read(this._mirror(y, m, e), 2), g = v[0], _ = v[1];
                if ((y !== g || m !== _) && !p.has(f(g, _)) && this._canPlace(g, _, 0, n) && !(o.length + 2 > u)) {
                    var T = FlowTileSimulator_1.createFlowTile(i++, y, m, 0, 0);
                    this._occupy(T, n);
                    o.push(T);
                    p.add(f(y, m));
                    var C = FlowTileSimulator_1.createFlowTile(i++, g, _, 0, 0);
                    this._occupy(C, n);
                    o.push(C);
                    p.add(f(g, _));
                }
            }
        }
        for (var b = 1; b < a.length; b++)
            if (!(a[b] <= 0)) {
                var E = this._growUpperLayer(b, a[b], i, n, e);
                o.push.apply(o, __spreadArrays(E.tiles));
                i = E.nextId;
            }
        return o;
    };
    FlowLevelGenerator.prototype._generateSpiralPath = function (e) {
        for (var t = [], o = 0, n = e.boardWidth - 2, i = 0, r = e.boardHeight - 2; o <= n && i <= r;) {
            for (var a = o; a <= n; a += 2)
                t.push([a, i]);
            for (var l = i += 2; l <= r; l += 2)
                t.push([n, l]);
            n -= 2;
            if (i <= r) {
                for (a = n; a >= o; a -= 2)
                    t.push([a, r]);
                r -= 2;
            }
            if (o <= n) {
                for (l = r; l >= i; l -= 2)
                    t.push([o, l]);
                o += 2;
            }
        }
        return t;
    };
    FlowLevelGenerator.prototype._buildHourglassTopology = function () {
        for (var e, t, o = this._cfg, n = 2 * this._actualPairs, i = [], c = {}, u = 0, p = this._distributeTilesToLayers(n, o.maxLayers), f = p[0], d = Math.floor(o.boardWidth / 2) - 1 - (Math.floor(o.boardWidth / 2) - 1) % 2, h = Math.floor(o.boardHeight / 2) - 1 - (Math.floor(o.boardHeight / 2) - 1) % 2, y = o.boardWidth / 2, m = o.boardHeight / 2, v = this._rng.next() < 0.5, g = 0.15 + 0.5 * this._rng.next(), _ = 0.5 + 2 * this._rng.next(), T = v ? y : m, C = v ? m : y, b = Math.max(1, Math.floor(C * g)), E = function E(e, t) {
            var o = v ? Math.abs(e + 1 - y) / Math.max(T, 1) : Math.abs(t + 1 - m) / Math.max(T, 1);
            return (v ? Math.abs(t + 1 - m) : Math.abs(e + 1 - y)) <= b + (C - b) * Math.pow(Math.min(1, o), _);
        }, S = new Set(), I = function I(e, t) {
            return e + "," + t;
        }, w = [[2, 0], [-2, 0], [0, 2], [0, -2], [2, 2], [2, -2], [-2, 2], [-2, -2]], B = [[d, h]]; i.length < f && B.length > 0;) {
            this._rng.shuffle(B);
            for (var x = false, M = 0; M < B.length; M++) {
                var O = __read(B[M], 2), D = O[0], P = O[1];
                this._rng.shuffle(w);
                try {
                    for (var A = (e = void 0, __values(w)), R = A.next(); !R.done; R = A.next()) {
                        var N = __read(R.value, 2), j = N[0], k = N[1], L = D + j, G = P + k;
                        if (E(L, G)) {
                            var F = __read(this._mirror(L, G, o), 2), V = F[0], U = F[1];
                            if (E(V, U) && !S.has(I(L, G)) && !S.has(I(V, U)) && !(L < 0 || G < 0 || L + 1 >= o.boardWidth || G + 1 >= o.boardHeight) && !(V < 0 || U < 0 || V + 1 >= o.boardWidth || U + 1 >= o.boardHeight) && this._canPlace(L, G, 0, c) && this._canPlace(V, U, 0, c) && !(L === V && G === U || i.length + 2 > f)) {
                                var H = FlowTileSimulator_1.createFlowTile(u++, L, G, 0, 0);
                                this._occupy(H, c);
                                i.push(H);
                                S.add(I(L, G));
                                B.push([L, G]);
                                var W = FlowTileSimulator_1.createFlowTile(u++, V, U, 0, 0);
                                this._occupy(W, c);
                                i.push(W);
                                S.add(I(V, U));
                                B.push([V, U]);
                                x = true;
                                break;
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
                        R && !R.done && (t = A.return) && t.call(A);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                if (x)
                    break;
            }
            x || B.shift();
        }
        var z = f - i.length;
        z > 0 && p.length > 1 && (p[1] += z);
        for (var Y = 1; Y < p.length; Y++)
            if (!(p[Y] <= 0)) {
                var K = this._growUpperLayer(Y, p[Y], u, c, o);
                i.push.apply(i, __spreadArrays(K.tiles));
                u = K.nextId;
            }
        return i;
    };
    FlowLevelGenerator.prototype._distributeTilesToLayers = function (e, t) {
        for (var o, n = null !== (o = this._cfg.layerDecayExponent) && void 0 !== o ? o : 2, i = [], r = 0; r < t; r++)
            i.push(Math.max(1, Math.pow(t + 1 - r, n)));
        var a = i.reduce(function (e, t) {
            return e + t;
        }, 0), l = [], s = e;
        for (r = 0; r < i.length; r++) {
            var c = void 0;
            if (r === i.length - 1)
                c = s;
            else {
                c = Math.max(2, Math.round(e * i[r] / a));
                c -= c % 2;
            }
            if ((s -= c) < 0) {
                c += s;
                s = 0;
            }
            l.push(Math.max(0, c));
        }
        for (; l.reduce(function (e, t) {
            return e + t;
        }, 0) < e;)
            l[0] += 2;
        for (; l.reduce(function (e, t) {
            return e + t;
        }, 0) > e;)
            for (r = l.length - 1; r >= 0; r--)
                if (l[r] >= 2) {
                    l[r] -= 2;
                    break;
                }
        return l;
    };
    FlowLevelGenerator.prototype._occupy = function (e, t) {
        var o = e.gridX, n = e.gridY, i = e.layer;
        t[p(o, n, i)] = e.id;
        t[p(o + 1, n, i)] = e.id;
        t[p(o, n + 1, i)] = e.id;
        t[p(o + 1, n + 1, i)] = e.id;
    };
    FlowLevelGenerator.prototype._canPlace = function (e, t, o, n) {
        var i, r, l = [p(e, t, o), p(e + 1, t, o), p(e, t + 1, o), p(e + 1, t + 1, o)];
        try {
            for (var s = __values(l), c = s.next(); !c.done; c = s.next())
                if (c.value in n)
                    return false;
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (r = s.return) && r.call(s);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        if (o > 0) {
            var u = [p(e, t, o - 1), p(e + 1, t, o - 1), p(e, t + 1, o - 1), p(e + 1, t + 1, o - 1)];
            return this._cfg.noFloating ? u.every(function (e) {
                return e in n;
            }) : u.some(function (e) {
                return e in n;
            });
        }
        return true;
    };
    FlowLevelGenerator.prototype._countCovers = function (e, t, o, n) {
        var i = 0;
        if (o > 0)
            for (var r = -1; r <= 2; r++)
                for (var a = -1; a <= 2; a++)
                    p(e + r, t + a, o - 1) in n && i++;
        return i;
    };
    FlowLevelGenerator.prototype._isAlignedWithBelow = function (e, t, o, n) {
        if (o <= 0)
            return false;
        var i = p(e, t, o - 1);
        if (!(i in n))
            return false;
        var r = n[i];
        return n[p(e + 1, t, o - 1)] === r && n[p(e, t + 1, o - 1)] === r && n[p(e + 1, t + 1, o - 1)] === r;
    };
    FlowLevelGenerator.prototype._assignStrategicCardIds = function (e, t) {
        var o, n, i, r, l, s, u, p, f, d, h, y, m, v, g, _;
        this._puzzleCores = [];
        this._hamsters = [];
        for (var T = [], C = this._cfg.minCardId, b = this._cfg.maxCardId, E = new Set(this._cfg.excludedCardIds || c), S = C; S <= b; S++)
            E.has(S) || T.push(S);
        this._rng.shuffle(T);
        var I = new Set(), w = 0, B = function B() {
            if (w >= T.length)
                return T[w % T.length];
            var e = T[w];
            w++;
            I.add(e);
            return e;
        }, x = 0, M = function M() {
            var e, t = 0;
            do {
                e = T[x % T.length];
                x++;
                t++;
            } while (I.has(e) && t < T.length);
            return e;
        }, O = Array.from(t.keys()).sort(function (e, t) {
            return e - t;
        }), D = new Set(), P = O.length;
        this._buildPuzzleCores(e, t, D, B);
        this._buildHamsters(e, t, D, B, O);
        var A = O.map(function (e) {
            return (t.get(e) || []).filter(function (e) {
                return !D.has(e.id);
            });
        });
        try {
            for (var R = __values(A), N = R.next(); !N.done; N = R.next()) {
                var j = N.value;
                this._rng.shuffle(j);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                N && !N.done && (n = R.return) && n.call(R);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        var k = this._cfg.maxLayers, L = null !== (m = this._cfg.easyPairCount) && void 0 !== m ? m : Math.max(1, 4 - Math.floor(k / 2)), G = Math.min(1, Math.max(0, null !== (v = this._cfg.crossDepthRatio) && void 0 !== v ? v : 0.6)), F = null !== (g = this._cfg.crossDepthType) && void 0 !== g ? g : 1, V = Math.min(4, Math.max(1, null !== (_ = this._cfg.crossDepthSpan) && void 0 !== _ ? _ : 1));
        if (A[0] && A[0].length >= 4) {
            var U = A[0].filter(function (e) {
                return !D.has(e.id);
            });
            U.sort(function (e, t) {
                return 100 * e.gridY + e.gridX - (100 * t.gridY + t.gridX);
            });
            var H = Math.max(0, 1 - G), W = Math.min(Math.max(1, Math.round(L * H)), Math.floor(U.length / 4)), z = Math.floor(U.length / 2);
            for (S = 0; S < W && S < z; S++) {
                var Y = M();
                U[S].cardId = Y;
                U[S + z].cardId = Y;
                D.add(U[S].id);
                D.add(U[S + z].id);
            }
        }
        for (var K = 0; K < P; K++) {
            var J = A[K].filter(function (e) {
                return !D.has(e.id);
            });
            if (0 !== J.length) {
                if (K + 1 < P) {
                    var Z = 0 === K ? 4 : 2, X = Math.max(0, J.length - Z), q = Math.min(Math.round(J.length * G), X);
                    if (q > 0) {
                        this._rng.shuffle(J);
                        var Q = 0, $ = [];
                        if (3 === F)
                            for (var ee = P - 1; ee > K; ee--)
                                $.push(ee);
                        else if (2 === F)
                            for (ee = Math.min(K + 2, P - 1); ee < P; ee++)
                                $.push(ee);
                        else
                            for (ee = K + 1; ee < P; ee++)
                                $.push(ee);
                        try {
                            for (var te = (i = void 0, __values(J)), oe = te.next(); !oe.done; oe = te.next()) {
                                var ne = oe.value;
                                if (Q >= q)
                                    break;
                                if (!D.has(ne.id)) {
                                    var ie = [];
                                    try {
                                        for (var re = (l = void 0, __values($)), ae = re.next(); !ae.done; ae = re.next())
                                            if (A[ee = ae.value].some(function (e) {
                                                return !D.has(e.id);
                                            })) {
                                                ie.push(ee);
                                                if (ie.length >= V)
                                                    break;
                                            }
                                    }
                                    catch (e) {
                                        l = {
                                            error: e
                                        };
                                    }
                                    finally {
                                        try {
                                            ae && !ae.done && (s = re.return) && s.call(re);
                                        }
                                        finally {
                                            if (l)
                                                throw l.error;
                                        }
                                    }
                                    if (0 === ie.length)
                                        break;
                                    var le = null, se = 0;
                                    try {
                                        for (var ce = (u = void 0, __values(ie)), ue = ce.next(); !ue.done; ue = ce.next()) {
                                            ee = ue.value;
                                            try {
                                                for (var pe = (f = void 0, __values(A[ee])), fe = pe.next(); !fe.done; fe = pe.next()) {
                                                    var de = fe.value;
                                                    if (!D.has(de.id)) {
                                                        var he = this._tileDist(ne, de);
                                                        if (he > se) {
                                                            se = he;
                                                            le = de;
                                                        }
                                                    }
                                                }
                                            }
                                            catch (e) {
                                                f = {
                                                    error: e
                                                };
                                            }
                                            finally {
                                                try {
                                                    fe && !fe.done && (d = pe.return) && d.call(pe);
                                                }
                                                finally {
                                                    if (f)
                                                        throw f.error;
                                                }
                                            }
                                        }
                                    }
                                    catch (e) {
                                        u = {
                                            error: e
                                        };
                                    }
                                    finally {
                                        try {
                                            ue && !ue.done && (p = ce.return) && p.call(ce);
                                        }
                                        finally {
                                            if (u)
                                                throw u.error;
                                        }
                                    }
                                    if (!le)
                                        break;
                                    Y = M();
                                    ne.cardId = Y;
                                    le.cardId = Y;
                                    D.add(ne.id);
                                    D.add(le.id);
                                    Q++;
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
                                oe && !oe.done && (r = te.return) && r.call(te);
                            }
                            finally {
                                if (i)
                                    throw i.error;
                            }
                        }
                    }
                }
                if (K > 0) {
                    var ye = J.filter(function (e) {
                        return !D.has(e.id);
                    });
                    if (ye.length >= 8) {
                        this._rng.shuffle(ye);
                        var me = Math.max(2, Math.round(ye.length * (1 - G))), ve = Math.floor((ye.length - me) / 4);
                        for (j = 0; j < ve && j < 2; j++)
                            for (Y = M(), S = 0; S < 4; S++) {
                                ye[4 * j + S].cardId = Y;
                                D.add(ye[4 * j + S].id);
                            }
                    }
                }
                var ge = J.filter(function (e) {
                    return !D.has(e.id);
                });
                this._pairByMaxDistance(ge, D, M);
            }
        }
        var _e = e.filter(function (e) {
            return e.isValid && !D.has(e.id);
        });
        this._pairByMaxDistance(_e, D, M);
        var Te = e.filter(function (e) {
            return !D.has(e.id);
        });
        try {
            for (var Ce = __values(Te), be = Ce.next(); !be.done; be = Ce.next())
                be.value.cardId = M();
        }
        catch (e) {
            h = {
                error: e
            };
        }
        finally {
            try {
                be && !be.done && (y = Ce.return) && y.call(Ce);
            }
            finally {
                if (h)
                    throw h.error;
            }
        }
    };
    FlowLevelGenerator.prototype._pairByMaxDistance = function (e, t, o) {
        var n, i = e.filter(function (e) {
            return !t.has(e.id);
        });
        if (!(i.length < 2))
            for (var r = null !== (n = this._cfg.pairDistanceBias) && void 0 !== n ? n : 1, s = new Set(), c = function c() {
                var e, n, c, p, f = i.filter(function (e) {
                    return !s.has(e.id);
                });
                if (f.length < 2)
                    return "break";
                var d = f.length, h = 0, y = 1;
                if (Math.abs(r - 0.5) < 0.01) {
                    h = u._rng.nextInt(0, d - 1);
                    (y = u._rng.nextInt(0, d - 2)) >= h && y++;
                }
                else {
                    var m = d * (d - 1) / 2, v = d > 20 ? 30 : m, g = [];
                    if (v >= m)
                        for (var _ = 0; _ < d; _++)
                            for (var T = _ + 1; T < d; T++)
                                g.push({
                                    i: _,
                                    j: T,
                                    d: u._tileDist(f[_], f[T])
                                });
                    else
                        for (var C = 0; C < v; C++) {
                            _ = u._rng.nextInt(0, d - 1);
                            (T = u._rng.nextInt(0, d - 2)) >= _ && T++;
                            g.push({
                                i: _,
                                j: T,
                                d: u._tileDist(f[_], f[T])
                            });
                        }
                    if (r >= 0.9) {
                        var b = g[0];
                        try {
                            for (var E = (e = void 0, __values(g)), S = E.next(); !S.done; S = E.next())
                                (B = S.value).d > b.d && (b = B);
                        }
                        catch (t) {
                            e = {
                                error: t
                            };
                        }
                        finally {
                            try {
                                S && !S.done && (n = E.return) && n.call(E);
                            }
                            finally {
                                if (e)
                                    throw e.error;
                            }
                        }
                        h = b.i;
                        y = b.j;
                    }
                    else if (r <= 0.1) {
                        b = g[0];
                        try {
                            for (var I = (c = void 0, __values(g)), w = I.next(); !w.done; w = I.next()) {
                                var B;
                                (B = w.value).d < b.d && (b = B);
                            }
                        }
                        catch (e) {
                            c = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                w && !w.done && (p = I.return) && p.call(I);
                            }
                            finally {
                                if (c)
                                    throw c.error;
                            }
                        }
                        h = b.i;
                        y = b.j;
                    }
                    else {
                        var x = Math.max.apply(Math, __spreadArrays(g.map(function (e) {
                            return e.d;
                        })));
                        if (x > 0) {
                            for (var M = g.map(function (e) {
                                var t = e.d / x;
                                return Math.pow(r > 0.5 ? t : 1 - t, 2) + 0.01;
                            }), O = M.reduce(function (e, t) {
                                return e + t;
                            }, 0), D = u._rng.next() * O, P = g[g.length - 1], A = 0; A < M.length; A++)
                                if ((D -= M[A]) <= 0) {
                                    P = g[A];
                                    break;
                                }
                            h = P.i;
                            y = P.j;
                        }
                    }
                }
                var R = o();
                f[h].cardId = R;
                f[y].cardId = R;
                t.add(f[h].id);
                t.add(f[y].id);
                s.add(f[h].id);
                s.add(f[y].id);
            }, u = this; "break" !== c();)
                ;
    };
    FlowLevelGenerator.prototype._tileDist = function (e, t) {
        var o = e.gridX - t.gridX, n = e.gridY - t.gridY;
        return Math.sqrt(o * o + n * n);
    };
    FlowLevelGenerator.prototype._buildPuzzleCores = function (e, t, o, n) {
        var i, r = null !== (i = this._cfg.puzzleCoreCount) && void 0 !== i ? i : 0;
        if (!(r <= 0))
            for (var a = new FlowTileSimulator_1.FlowTileSimulator(e), l = 0; l < r; l++) {
                var c = this._findPuzzleCoreSlots(e, a, o);
                if (!c)
                    break;
                var u = n();
                c.a1.cardId = u;
                c.a2.cardId = u;
                c.a3.cardId = u;
                c.a4.cardId = u;
                o.add(c.a1.id);
                o.add(c.a2.id);
                o.add(c.a3.id);
                o.add(c.a4.id);
                this._puzzleCores.push({
                    cardId: u,
                    lockedTileId: c.a1.id,
                    keyTileId: c.a2.id,
                    freeTileIds: [c.a3.id, c.a4.id],
                    isIndirect: c.isIndirect
                });
            }
    };
    FlowLevelGenerator.prototype._buildHamsters = function (e, t, o, n, i) {
        var r, a, l = null !== (r = this._cfg.hamsterCount) && void 0 !== r ? r : 0;
        if (!(l <= 0)) {
            var s = i.length, c = s - 2;
            if (!(c < 2))
                for (var u = Math.min(Math.max(2, null !== (a = this._cfg.hamsterDistance) && void 0 !== a ? a : 2), c), p = 0; p < l && this._placeOneHamster(t, o, n, i, s, u, c); p++)
                    ;
        }
    };
    FlowLevelGenerator.prototype._placeOneHamster = function (e, t, o, n, i, s, c) {
        var u, p, f, d, h, y = [s];
        s > 2 && y.push(s - 1);
        s < c && y.push(s + 1);
        try {
            for (var m = __values(y), v = m.next(); !v.done; v = m.next()) {
                var g = v.value;
                if (!(g < 2 || g > c)) {
                    for (var _ = [], T = 1; T + g < i; T++)
                        _.push([T, T + g]);
                    if (0 !== _.length) {
                        var C = Math.max(0, Math.min(1, null !== (h = this._cfg.hamsterDepthBias) && void 0 !== h ? h : 0.5));
                        if (C <= 0)
                            this._rng.shuffle(_);
                        else {
                            _.sort(function (e, t) {
                                return t[0] + t[1] - (e[0] + e[1]);
                            });
                            if (C < 1) {
                                var b = Math.max(1, Math.ceil(_.length * C)), E = _.slice(0, b), S = _.slice(b);
                                this._rng.shuffle(E);
                                this._rng.shuffle(S);
                                _.length = 0;
                                _.push.apply(_, __spreadArrays(E, S));
                            }
                        }
                        try {
                            for (var I = (f = void 0, __values(_)), w = I.next(); !w.done; w = I.next()) {
                                var B = __read(w.value, 2), x = B[0], M = B[1], O = n[x], D = n[M], P = (e.get(O) || []).filter(function (e) {
                                    return !t.has(e.id);
                                }), A = (e.get(D) || []).filter(function (e) {
                                    return !t.has(e.id);
                                });
                                if (0 !== P.length && 0 !== A.length) {
                                    var R = P[this._rng.nextInt(0, P.length - 1)], N = A[this._rng.nextInt(0, A.length - 1)], j = o();
                                    R.cardId = j;
                                    N.cardId = j;
                                    t.add(R.id);
                                    t.add(N.id);
                                    this._hamsters.push({
                                        cardId: j,
                                        shallowTileId: R.id,
                                        deepTileId: N.id,
                                        shallowDepth: O,
                                        deepDepth: D,
                                        depthDistance: M - x
                                    });
                                    return true;
                                }
                            }
                        }
                        catch (e) {
                            f = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                w && !w.done && (d = I.return) && d.call(I);
                            }
                            finally {
                                if (f)
                                    throw f.error;
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            u = {
                error: e
            };
        }
        finally {
            try {
                v && !v.done && (p = m.return) && p.call(m);
            }
            finally {
                if (u)
                    throw u.error;
            }
        }
        return false;
    };
    FlowLevelGenerator.prototype._findPuzzleCoreSlots = function (e, t, o) {
        var n, i, r, l, s, c, u, p, f = e.filter(function (e) {
            return e.isValid && !o.has(e.id) && !t.isCovered(e) && !t.isLocked(e);
        }), d = e.filter(function (e) {
            return e.isValid && !o.has(e.id) && t.isCovered(e);
        });
        if (f.length < 4 || d.length < 1)
            return null;
        this._rng.shuffle(f);
        for (var h = null, y = null, m = 0; m < f.length; m++) {
            for (var v = m + 1; v < f.length; v++) {
                var g = f[m], _ = f[v];
                if (this._canPairSimultaneously(g, _, e, t)) {
                    h = g;
                    y = _;
                    break;
                }
            }
            if (h && y)
                break;
        }
        if (!h || !y)
            return null;
        var T = f.filter(function (e) {
            return e.id !== h.id && e.id !== y.id;
        });
        if (this._cfg.maxLayers > 2)
            try {
                for (var C = __values(T), b = C.next(); !b.done; b = C.next()) {
                    var E = b.value;
                    if (0 !== (O = this._findCoveredByTile(E, d, o, e)).length) {
                        var S = O.filter(function (e) {
                            return e.id !== h.id && e.id !== y.id;
                        });
                        try {
                            for (var I = (r = void 0, __values(S)), w = I.next(); !w.done; w = I.next()) {
                                var B = w.value;
                                if (!this._tilesOverlap(E, B) && this._isChainBlockedBy(B, E, e))
                                    return {
                                        a1: B,
                                        a2: E,
                                        a3: h,
                                        a4: y,
                                        isIndirect: true
                                    };
                            }
                        }
                        catch (e) {
                            r = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                w && !w.done && (l = I.return) && l.call(I);
                            }
                            finally {
                                if (r)
                                    throw r.error;
                            }
                        }
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
                    b && !b.done && (i = C.return) && i.call(C);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
        try {
            for (var x = __values(T), M = x.next(); !M.done; M = x.next()) {
                var O;
                E = M.value;
                if (0 !== (O = this._findCoveredByTile(E, d, o, e)).length) {
                    S = O.filter(function (e) {
                        return e.id !== h.id && e.id !== y.id;
                    });
                    try {
                        for (var D = (u = void 0, __values(S)), P = D.next(); !P.done; P = D.next()) {
                            B = P.value;
                            if (this._isChainBlockedBy(B, E, e))
                                return {
                                    a1: B,
                                    a2: E,
                                    a3: h,
                                    a4: y,
                                    isIndirect: !this._tilesOverlap(E, B)
                                };
                        }
                    }
                    catch (e) {
                        u = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            P && !P.done && (p = D.return) && p.call(D);
                        }
                        finally {
                            if (u)
                                throw u.error;
                        }
                    }
                }
            }
        }
        catch (e) {
            s = {
                error: e
            };
        }
        finally {
            try {
                M && !M.done && (c = x.return) && c.call(x);
            }
            finally {
                if (s)
                    throw s.error;
            }
        }
        return null;
    };
    FlowLevelGenerator.prototype._isChainBlockedBy = function (e, t, o, n) {
        var i, r, l = this;
        n || (n = new Set());
        if (n.has(e.id))
            return false;
        n.add(e.id);
        var s = o.filter(function (t) {
            return t.isValid && t.id !== e.id && t.layer > e.layer && l._tilesOverlap(t, e);
        });
        if (0 === s.length)
            return false;
        try {
            for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                if (p.id !== t.id && !this._isChainBlockedBy(p, t, o, n))
                    return false;
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (r = c.return) && r.call(c);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return true;
    };
    FlowLevelGenerator.prototype._canPairSimultaneously = function (e, t, o, n) {
        return !n.isCovered(e) && !n.isLocked(e) && !n.isCovered(t) && !n.isLocked(t) && !(e.gridY === t.gridY && e.layer === t.layer && Math.abs(e.gridX - t.gridX) <= 2);
    };
    FlowLevelGenerator.prototype._findCoveredByTile = function (e, t, o, n) {
        var i, r, l = [];
        try {
            for (var s = __values(t), c = s.next(); !c.done; c = s.next()) {
                var u = c.value;
                o.has(u.id) || u.layer >= e.layer || (this._tilesOverlap(e, u) ? l.push(u) : this._hasDependencyChain(e, u, n) && l.push(u));
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (r = s.return) && r.call(s);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return l;
    };
    FlowLevelGenerator.prototype._hasDependencyChain = function (e, t, o) {
        var n, i;
        if (e.layer <= t.layer)
            return false;
        var r = new Set(), l = [e];
        r.add(e.id);
        for (; l.length > 0;) {
            var s = l.shift();
            try {
                for (var c = (n = void 0, __values(o)), u = c.next(); !u.done; u = c.next()) {
                    var p = u.value;
                    if (p.isValid && !r.has(p.id) && !(p.layer >= s.layer) && this._tilesOverlap(s, p)) {
                        if (p.id === t.id)
                            return true;
                        r.add(p.id);
                        l.push(p);
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
                    u && !u.done && (i = c.return) && i.call(c);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
        }
        return false;
    };
    FlowLevelGenerator.prototype._tilesOverlap = function (e, t) {
        if (e.layer <= t.layer)
            return false;
        var o = e.gridX, n = e.gridY, i = e.gridX + 1, r = e.gridY + 1, a = t.gridX, l = t.gridY, s = t.gridX + 1, c = t.gridY + 1;
        return !(i < a || o > s || r < l || n > c);
    };
    FlowLevelGenerator.prototype.checkSolvableBuffer = function (t) {
        var o;
        return null !== FlowLevelGenerator._solveBufferMulti(t, null !== (o = this._cfg.bufferSize) && void 0 !== o ? o : 4, false, -1, 12);
    };
    return FlowLevelGenerator;
}());
exports.FlowLevelGenerator = FlowLevelGenerator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0Zsb3dMZXZlbEdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF1RjtBQUN2RixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0YsSUFBSSxDQUFDLEdBQUc7SUFDTixRQUFRLEVBQUUsRUFBRTtJQUNaLFFBQVEsRUFBRSxFQUFFO0lBQ1osVUFBVSxFQUFFLENBQUM7SUFDYixVQUFVLEVBQUUsRUFBRTtJQUNkLFdBQVcsRUFBRSxFQUFFO0lBQ2YsU0FBUyxFQUFFLENBQUM7SUFDWixTQUFTLEVBQUUsQ0FBQztJQUNaLFNBQVMsRUFBRSxFQUFFO0lBQ2IsZUFBZSxFQUFFLENBQUM7SUFDbEIsWUFBWSxFQUFFLENBQUM7SUFDZixlQUFlLEVBQUUsQ0FBQztJQUNsQixlQUFlLEVBQUUsR0FBRztJQUNwQixjQUFjLEVBQUUsQ0FBQztJQUNqQixlQUFlLEVBQUUsQ0FBQztDQUNuQixDQUFDO0FBQ0YsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBQ0Q7SUFFRSxXQUFZLENBQUM7UUFEYixPQUFFLEdBQUcsSUFBSSxDQUFDO1FBRVIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFF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Q0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUNqRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUNuQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM5RixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLEVBQ2YsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNULENBQUMsR0FBRyxDQUFDLEVBQ0wsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDekIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxD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LENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUMzRSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNULENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNULENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3pCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFD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QUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHO1lBQ3ZOLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSTtvQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQzNFLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ1QsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ1QsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDekIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFB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RyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUc7WUFDckssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDckIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxD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QyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNWEsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNsRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRztZQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtvQkFDbEIsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO29CQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUMzQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLElBQUk7NEJBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dDQUMzRSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNULENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNULENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNwQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29DQUNqUyxJQUFJLENBQUMsR0FBRyxrQ0FBYyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29DQUN4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QUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzFnQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUc7WUFDNUgsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDckIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJO29CQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDM0UsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDVCxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDWixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7NEJBQ1gsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FB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Q0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUM3QixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNQLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQzs0QkFBRSxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0NBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDOzRCQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0NBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs7NEJBQUssS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN2TCxJQUFJOzRCQUNGLEtBQUssSUFBSSxFQUFFLEdBQUcs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QUssSUFBSSxDQUFDLENBQUMsS0FBSztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUNmLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDZixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsZ0RBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLElBQUksS0FBSyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEksQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0F6cUVBLEFBeXFFQyxJQUFBO0FBenFFWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbG93VGlsZVNpbXVsYXRvciwgY2xvbmVGbG93VGlsZSwgY3JlYXRlRmxvd1RpbGUgfSBmcm9tICcuL0Zsb3dUaWxlU2ltdWxhdG9yJztcbnZhciBjID0gWzM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQxLCA0MiwgNDMsIDQ0LCA0NSwgNDYsIDQ3LCA0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA2MiwgNjNdO1xudmFyIHUgPSB7XG4gIG1pblBhaXJzOiA1MCxcbiAgbWF4UGFpcnM6IDcwLFxuICB0b3RhbFBhaXJzOiAwLFxuICBib2FyZFdpZHRoOiAxNCxcbiAgYm9hcmRIZWlnaHQ6IDE4LFxuICBtYXhMYXllcnM6IDUsXG4gIG1pbkNhcmRJZDogMSxcbiAgbWF4Q2FyZElkOiA2MyxcbiAgcHV6emxlQ29yZUNvdW50OiAwLFxuICBoYW1zdGVyQ291bnQ6IDAsXG4gIGhhbXN0ZXJEaXN0YW5jZTogMixcbiAgY3Jvc3NEZXB0aFJhdGlvOiAwLjYsXG4gIGxheWVyQWxpZ25Nb2RlOiAxLFxuICBleGNsdWRlZENhcmRJZHM6IGNcbn07XG5mdW5jdGlvbiBwKGUsIHQsIG8pIHtcbiAgcmV0dXJuIGUgKyBcIixcIiArIHQgKyBcIixcIiArIG87XG59XG5jbGFzcyBmIHtcbiAgX3MgPSBudWxsO1xuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgdGhpcy5fcyA9IGUgJSAyMTQ3NDgzNjQ3O1xuICAgIHRoaXMuX3MgPD0gMCAmJiAodGhpcy5fcyArPSAyMTQ3NDgzNjQ2KTtcbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDM7IHQrKykgdGhpcy5uZXh0KCk7XG4gIH1cbiAgbmV4dCgpIHtcbiAgICB0aGlzLl9zID0gMTY4MDcgKiB0aGlzLl9zICUgMjE0NzQ4MzY0NztcbiAgICByZXR1cm4gKHRoaXMuX3MgLSAxKSAvIDIxNDc0ODM2NDY7XG4gIH1cbiAgbmV4dEludChlLCB0KSB7XG4gICAgcmV0dXJuIGUgKyBNYXRoLmZsb29yKHRoaXMubmV4dCgpICogKHQgLSBlICsgMSkpO1xuICB9XG4gIHNodWZmbGUoZSkge1xuICAgIGZvciAodmFyIHQsIG8gPSBlLmxlbmd0aCAtIDE7IG8gPiAwOyBvLS0pIHtcbiAgICAgIHZhciBuID0gTWF0aC5mbG9vcih0aGlzLm5leHQoKSAqIChvICsgMSkpO1xuICAgICAgdCA9IF9fcmVhZChbZVtuXSwgZVtvXV0sIDIpLCBlW29dID0gdFswXSwgZVtuXSA9IHRbMV07XG4gICAgfVxuICB9XG4gIGNob2ljZShlKSB7XG4gICAgcmV0dXJuIGVbTWF0aC5mbG9vcih0aGlzLm5leHQoKSAqIGUubGVuZ3RoKV07XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBGbG93TGV2ZWxHZW5lcmF0b3Ige1xuICBfYWN0dWFsUGFpcnMgPSAwO1xuICBfcHV6emxlQ29yZXMgPSBbXTtcbiAgX2hhbXN0ZXJzID0gW107XG4gIF9zZWxlY3RlZFRvcG9sb2d5ID0gXCJweXJhbWlkXCI7XG4gIF9jZmcgPSBudWxsO1xuICBfcm5nID0gbnVsbDtcbiAgZ2V0IHB1enpsZUNvcmVzKCkge1xuICAgIHJldHVybiB0aGlzLl9wdXp6bGVDb3JlcztcbiAgfVxuICBnZXQgaGFtc3RlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbXN0ZXJzO1xuICB9XG4gIGdldCBzZWxlY3RlZFRvcG9sb2d5KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFRvcG9sb2d5O1xuICB9XG4gIGdldCBhY3R1YWxQYWlycygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0dWFsUGFpcnM7XG4gIH1cbiAgY29uc3RydWN0b3IoZSwgdCA9IDQyKSB7XG4gICAgdGhpcy5fY2ZnID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB1KSwgZSk7XG4gICAgdGhpcy5fcm5nID0gbmV3IGYodCk7XG4gIH1cbiAgc3RhdGljIHNvbHZlQ2xhc3NpYyh0LCBvID0gdHJ1ZSkge1xuICAgIHJldHVybiBGbG93TGV2ZWxHZW5lcmF0b3IuX3NvbHZlQ2xhc3NpY011bHRpKHQsIDAsIG8sIC0xKTtcbiAgfVxuICBzdGF0aWMgc29sdmVCdWZmZXIodCwgbyA9IDQsIG4gPSB0cnVlLCBpID0gMCwgciA9IFtdKSB7XG4gICAgcmV0dXJuIEZsb3dMZXZlbEdlbmVyYXRvci5fc29sdmVCdWZmZXJNdWx0aSh0LCBvLCBuLCAtMSwgaSwgcik7XG4gIH1cbiAgc3RhdGljIHNvbHZlQnVmZmVyV2l0aEFkanVzdCh0LCBvID0gNCwgbiA9IHRydWUsIGk/KSB7XG4gICAgcmV0dXJuIEZsb3dMZXZlbEdlbmVyYXRvci5fc29sdmVCdWZmZXJNdWx0aSh0LCBvLCBuLCAtMSwgMTIsIFtdLCB0cnVlLCBpKTtcbiAgfVxuICBzdGF0aWMgX3NvbHZlQ2xhc3NpY011bHRpKHQsIG8gPSAwLCBuID0gdHJ1ZSwgaSA9IC0xKSB7XG4gICAgdmFyIHIgPSBGbG93TGV2ZWxHZW5lcmF0b3IuX3NvbHZlQ2xhc3NpY0NvcmUodCwgXCJzbWFydFwiLCAwLCBuKTtcbiAgICBpZiAobnVsbCAhPT0gcikgcmV0dXJuIHI7XG4gICAgdmFyIGEgPSBGbG93TGV2ZWxHZW5lcmF0b3IuX3NvbHZlQ2xhc3NpY0NvcmUodCwgXCJncmVlZHlcIiwgMCwgbik7XG4gICAgaWYgKG51bGwgIT09IGEpIHJldHVybiBhO1xuICAgIGZvciAodmFyIGwgPSBpID49IDAgPyBpIDogbyA+IDAgPyAxNSA6IDEwLCBzID0gMDsgcyA8IGw7IHMrKykge1xuICAgICAgdmFyIGMgPSBGbG93TGV2ZWxHZW5lcmF0b3IuX3NvbHZlQ2xhc3NpY0NvcmUodCwgXCJyYW5kb21cIiwgcywgbik7XG4gICAgICBpZiAobnVsbCAhPT0gYykgcmV0dXJuIGM7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHN0YXRpYyBfc29sdmVDbGFzc2ljQ29yZShlLCB0LCBvLCBuKSB7XG4gICAgZm9yICh2YXIgaSwgbCwgYyA9IG5ldyBGbG93VGlsZVNpbXVsYXRvcihlLm1hcChjbG9uZUZsb3dUaWxlKSksIHUgPSBuID8gW10gOiB2b2lkIDAsIHAgPSAobyArIDEpICUgMjE0NzQ4MzY0NyB8fCAxOyAhYy5pc0NsZWFyZWQoKTspIHtcbiAgICAgIHZhciBmID0gYy5nZXRBdmFpbGFibGVQYWlycygpO1xuICAgICAgaWYgKDAgPT09IGYubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBkID0gdm9pZCAwO1xuICAgICAgaWYgKFwic21hcnRcIiA9PT0gdCkge1xuICAgICAgICB2YXIgaCA9IC0xO1xuICAgICAgICBkID0gZlswXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciB5ID0gKGkgPSB2b2lkIDAsIF9fdmFsdWVzKGYpKSwgbSA9IHkubmV4dCgpOyAhbS5kb25lOyBtID0geS5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciB2ID0gX19yZWFkKG0udmFsdWUsIDIpLFxuICAgICAgICAgICAgICBnID0gdlswXSxcbiAgICAgICAgICAgICAgXyA9IHZbMV0sXG4gICAgICAgICAgICAgIFQgPSBjLmdldEZyZWVkQnlSZW1vdmFsKGcpLmxlbmd0aCArIGMuZ2V0RnJlZWRCeVJlbW92YWwoXykubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKFQgPiBoKSB7XG4gICAgICAgICAgICAgIGggPSBUO1xuICAgICAgICAgICAgICBkID0gW2csIF9dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGkgPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG0gJiYgIW0uZG9uZSAmJiAobCA9IHkucmV0dXJuKSAmJiBsLmNhbGwoeSk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcImdyZWVkeVwiID09PSB0KSBkID0gZlswXTtlbHNlIHtcbiAgICAgICAgcCA9IDE2ODA3ICogcCAlIDIxNDc0ODM2NDc7XG4gICAgICAgIHZhciBDID0gTWF0aC5mbG9vcihwIC8gMjE0NzQ4MzY0NyAqIGYubGVuZ3RoKTtcbiAgICAgICAgZCA9IGZbTWF0aC5taW4oQywgZi5sZW5ndGggLSAxKV07XG4gICAgICB9XG4gICAgICBpZiAodSkge1xuICAgICAgICB2YXIgYiA9IGYubGVuZ3RoO1xuICAgICAgICBjLmNsZWFyUGFpcihkWzBdLCBkWzFdKTtcbiAgICAgICAgdmFyIEUgPSBjLmdldEF2YWlsYWJsZVBhaXJDb3VudCgpO1xuICAgICAgICB1LnB1c2goe1xuICAgICAgICAgIHRpbGUxSWQ6IGRbMF0uaWQsXG4gICAgICAgICAgdGlsZTJJZDogZFsxXS5pZCxcbiAgICAgICAgICBjYXJkSWQ6IGRbMF0uY2FyZElkLFxuICAgICAgICAgIHBhaXJDb3VudEJlZm9yZTogYixcbiAgICAgICAgICBwYWlyQ291bnRBZnRlcjogRVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBjLmNsZWFyUGFpcihkWzBdLCBkWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGwgIT0gdSA/IHUgOiBbXTtcbiAgfVxuICBzdGF0aWMgX3NvbHZlQnVmZmVyTXVsdGkodCwgbywgbiwgaSA9IC0xLCBzID0gMCwgYyA9IFtdLCB1ID0gZmFsc2UsIHA/KSB7XG4gICAgdmFyIGYsIGQ7XG4gICAgdmFyIGggPSBGbG93TGV2ZWxHZW5lcmF0b3IuX3NvbHZlQnVmZmVyQ29yZSh0LCBcInNtYXJ0XCIsIDAsIG8sIG4sIDAsIGMsIDEpO1xuICAgIGlmIChudWxsICE9PSBoKSByZXR1cm4gaDtcbiAgICBpZiAocyA+IDApIHtcbiAgICAgIHZhciB5ID0gRmxvd0xldmVsR2VuZXJhdG9yLl9zb2x2ZUJ1ZmZlckNvcmUodCwgXCJzbWFydFwiLCAwLCBvLCBuLCBzLCBjLCAxKTtcbiAgICAgIGlmIChudWxsICE9PSB5KSByZXR1cm4geTtcbiAgICAgIHZhciBtID0gW10sXG4gICAgICAgIHYgPSBGbG93TGV2ZWxHZW5lcmF0b3IuX3NvbHZlQnVmZmVyQ29yZSh0LCBcInNtYXJ0XCIsIDAsIG8sIG4sIHMsIGMsIDMsIHUsIG0pO1xuICAgICAgaWYgKG51bGwgIT09IHYgJiYgbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBnID0gbmV3IE1hcCh0Lm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBbZS5pZCwgZV07XG4gICAgICAgIH0pKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfID0gX192YWx1ZXMobSksIFQgPSBfLm5leHQoKTsgIVQuZG9uZTsgVCA9IF8ubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgQyA9IF9fcmVhZChULnZhbHVlLCAyKSxcbiAgICAgICAgICAgICAgYiA9IENbMF0sXG4gICAgICAgICAgICAgIEUgPSBDWzFdLFxuICAgICAgICAgICAgICBTID0gZy5nZXQoYiksXG4gICAgICAgICAgICAgIEkgPSBnLmdldChFKTtcbiAgICAgICAgICAgIGlmIChTICYmIEkpIHtcbiAgICAgICAgICAgICAgdmFyIHcgPSBTLmNhcmRJZDtcbiAgICAgICAgICAgICAgUy5jYXJkSWQgPSBJLmNhcmRJZDtcbiAgICAgICAgICAgICAgSS5jYXJkSWQgPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGYgPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFQgJiYgIVQuZG9uZSAmJiAoZCA9IF8ucmV0dXJuKSAmJiBkLmNhbGwoXyk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChmKSB0aHJvdyBmLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwICYmIHAucHVzaC5hcHBseShwLCBbLi4ubV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHN0YXRpYyBfZXZhbEFmdGVyUGljayh0LCBvLCBuLCBpLCByID0gMSwgbCA9IDEyKSB7XG4gICAgdmFyIGMsIHUsIHAsIGYsIGQsIGg7XG4gICAgdmFyIHkgPSB0LmNsb25lKCksXG4gICAgICBtID0gby5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lRmxvd1RpbGUoZSk7XG4gICAgICB9KSxcbiAgICAgIHYgPSB5LnRpbGVzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaWQgPT09IG4uaWQ7XG4gICAgICB9KTtcbiAgICBtLnB1c2goY2xvbmVGbG93VGlsZSh2KSk7XG4gICAgdi5pc1ZhbGlkID0gZmFsc2U7XG4gICAgeS5fcmVidWlsZEdyaWRNYXAoKTtcbiAgICB2YXIgZyA9IG0ubGVuZ3RoIC0gMSxcbiAgICAgIF8gPSBtLmZpbmRJbmRleChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICByZXR1cm4gdCA8IGcgJiYgZS5jYXJkSWQgPT09IG1bZ10uY2FyZElkO1xuICAgICAgfSk7XG4gICAgaWYgKF8gPj0gMCkge1xuICAgICAgbS5zcGxpY2UoZywgMSk7XG4gICAgICBtLnNwbGljZShfLCAxKTtcbiAgICB9XG4gICAgaWYgKG0ubGVuZ3RoID49IGkpIHJldHVybiAtMTAwMDAwO1xuICAgIGlmICgwID09PSB5LmdldFJlbWFpbmluZ0NvdW50KCkgJiYgMCA9PT0gbS5sZW5ndGgpIHJldHVybiAxMDAwMDA7XG4gICAgdmFyIFQgPSB5LmdldEZyZWVUaWxlcygpO1xuICAgIGlmICgwID09PSBULmxlbmd0aCkgcmV0dXJuIC0xMDAwMDA7XG4gICAgaWYgKHIgPD0gMSkgcmV0dXJuIChULnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBtLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQuY2FyZElkID09PSBlLmNhcmRJZDtcbiAgICAgIH0pO1xuICAgIH0pID8gMzAwMCA6IDApICsgMTAwICogeS5nZXRBdmFpbGFibGVQYWlyQ291bnQoKSArIDEwICogVC5sZW5ndGggLSA1MDAgKiBtLmxlbmd0aDtcbiAgICB2YXIgQyA9IE1hdGgubWF4KDMsIE1hdGguZmxvb3IobCAvIDIpKSxcbiAgICAgIGIgPSBULmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gbS5zb21lKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQuY2FyZElkID09PSBlLmNhcmRJZDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICBpZiAoYi5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgRSA9IC1JbmZpbml0eTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIFMgPSBfX3ZhbHVlcyhiKSwgSSA9IFMubmV4dCgpOyAhSS5kb25lOyBJID0gUy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgdyA9IEkudmFsdWU7XG4gICAgICAgICAgKE4gPSBGbG93TGV2ZWxHZW5lcmF0b3IuX2V2YWxBZnRlclBpY2soeSwgbSwgdywgaSwgciAtIDEsIEMpKSA+IEUgJiYgKEUgPSBOKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEkgJiYgIUkuZG9uZSAmJiAodSA9IFMucmV0dXJuKSAmJiB1LmNhbGwoUyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGMpIHRocm93IGMuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBFO1xuICAgIH1cbiAgICB2YXIgQiA9IFtdLFxuICAgICAgeCA9IGZ1bmN0aW9uIHgoZSkge1xuICAgICAgICB2YXIgdCA9IHkuZ2V0RnJlZWRCeVJlbW92YWwoZSkubGVuZ3RoLFxuICAgICAgICAgIG8gPSBULnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmlkICE9PSBlLmlkICYmIHQuY2FyZElkID09PSBlLmNhcmRJZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgQi5wdXNoKHtcbiAgICAgICAgICB0OiBlLFxuICAgICAgICAgIHF1aWNrOiAobyA/IDgwMCA6IDApICsgMTAgKiB0XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgTSA9IF9fdmFsdWVzKFQpLCBPID0gTS5uZXh0KCk7ICFPLmRvbmU7IE8gPSBNLm5leHQoKSkgeCh3ID0gTy52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIE8gJiYgIU8uZG9uZSAmJiAoZiA9IE0ucmV0dXJuKSAmJiBmLmNhbGwoTSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocCkgdGhyb3cgcC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgQi5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gdC5xdWljayAtIGUucXVpY2s7XG4gICAgfSk7XG4gICAgdmFyIEQgPSBCLnNsaWNlKDAsIE1hdGgubWluKEMsIEIubGVuZ3RoKSksXG4gICAgICBQID0gLUluZmluaXR5O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBBID0gX192YWx1ZXMoRCksIFIgPSBBLm5leHQoKTsgIVIuZG9uZTsgUiA9IEEubmV4dCgpKSB7XG4gICAgICAgIHZhciBOO1xuICAgICAgICB3ID0gUi52YWx1ZS50O1xuICAgICAgICAoTiA9IEZsb3dMZXZlbEdlbmVyYXRvci5fZXZhbEFmdGVyUGljayh5LCBtLCB3LCBpLCByIC0gMSwgQykpID4gUCAmJiAoUCA9IE4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBSICYmICFSLmRvbmUgJiYgKGggPSBBLnJldHVybikgJiYgaC5jYWxsKEEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGQpIHRocm93IGQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBQO1xuICB9XG4gIHN0YXRpYyBfc29sdmVCdWZmZXJDb3JlKHQsIG8sIG4sIGksIHIsIGwgPSAwLCBjID0gW10sIHUgPSAxLCBwID0gZmFsc2UsIGYgPSBbXSkge1xuICAgIGZvciAodmFyIGQgPSBuZXcgRmxvd1RpbGVTaW11bGF0b3IodC5tYXAoY2xvbmVGbG93VGlsZSkpLCBoID0gYy5tYXAoY2xvbmVGbG93VGlsZSksIHkgPSByID8gW10gOiB2b2lkIDAsIG0gPSBpLCB2ID0gKG4gKyAxKSAlIDIxNDc0ODM2NDcgfHwgMSwgZyA9IGZ1bmN0aW9uIGcoKSB7XG4gICAgICAgIHJldHVybiAodiA9IDE2ODA3ICogdiAlIDIxNDc0ODM2NDcpIC8gMjE0NzQ4MzY0NztcbiAgICAgIH0sIF8gPSBwID8gMjAgKiB0Lmxlbmd0aCA6IDQgKiB0Lmxlbmd0aCwgVCA9IGZ1bmN0aW9uIFQoKSB7XG4gICAgICAgIHZhciB0LCBuLCBpLCByLCBjLCB2LCBfLCBULCBDLCBiLCBFLCBTO1xuICAgICAgICBpZiAoMCA9PT0gZC5nZXRSZW1haW5pbmdDb3VudCgpICYmIDAgPT09IGgubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBudWxsICE9IHkgPyB5IDogW11cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKDAgPT09IGQuZ2V0UmVtYWluaW5nQ291bnQoKSkgcmV0dXJuIHAgPyBcImJyZWFrXCIgOiB7XG4gICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIEksXG4gICAgICAgICAgdyA9IGQuZ2V0RnJlZVRpbGVzKCk7XG4gICAgICAgIGlmICgwID09PSB3Lmxlbmd0aCkgcmV0dXJuIHAgPyBcImJyZWFrXCIgOiB7XG4gICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGgubGVuZ3RoID49IG0pIHJldHVybiBwICYmIEZsb3dMZXZlbEdlbmVyYXRvci5fcGVyZm9ybUFkanVzdChkLCBoLCB5LCBmLCBnKSA/IFwiY29udGludWVcIiA6IHtcbiAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBpZiAoXCJzbWFydFwiID09PSBvICYmIGwgPiAwKSB7XG4gICAgICAgICAgaWYgKChHID0gdy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBoLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHQuY2FyZElkID09PSBlLmNhcmRJZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoMSA9PT0gRy5sZW5ndGgpIEkgPSBHWzBdO2Vsc2Uge1xuICAgICAgICAgICAgICBJID0gR1swXTtcbiAgICAgICAgICAgICAgdmFyIEIgPSAtSW5maW5pdHk7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9ICh0ID0gdm9pZCAwLCBfX3ZhbHVlcyhHKSksIE0gPSB4Lm5leHQoKTsgIU0uZG9uZTsgTSA9IHgubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgTyA9IE0udmFsdWU7XG4gICAgICAgICAgICAgICAgICBpZiAoKEwgPSBGbG93TGV2ZWxHZW5lcmF0b3IuX2V2YWxBZnRlclBpY2soZCwgaCwgTywgbSwgdSwgbCkpID4gQikge1xuICAgICAgICAgICAgICAgICAgICBCID0gTDtcbiAgICAgICAgICAgICAgICAgICAgSSA9IE87XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgTSAmJiAhTS5kb25lICYmIChuID0geC5yZXR1cm4pICYmIG4uY2FsbCh4KTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBEID0gW10sXG4gICAgICAgICAgICAgIFAgPSBmdW5jdGlvbiBQKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IGQuZ2V0RnJlZWRCeVJlbW92YWwoZSkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgbyA9IHcuc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5pZCAhPT0gZS5pZCAmJiB0LmNhcmRJZCA9PT0gZS5jYXJkSWQ7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBELnB1c2goe1xuICAgICAgICAgICAgICAgICAgdDogZSxcbiAgICAgICAgICAgICAgICAgIHF1aWNrOiAobyA/IDgwMCA6IDApICsgMTAgKiB0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBBID0gKGkgPSB2b2lkIDAsIF9fdmFsdWVzKHcpKSwgUiA9IEEubmV4dCgpOyAhUi5kb25lOyBSID0gQS5uZXh0KCkpIFAoTyA9IFIudmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFIgJiYgIVIuZG9uZSAmJiAociA9IEEucmV0dXJuKSAmJiByLmNhbGwoQSk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEQuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICByZXR1cm4gdC5xdWljayAtIGUucXVpY2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBOID0gRC5sZW5ndGggPD0gbCA/IEQgOiBELnNsaWNlKDAsIGwpO1xuICAgICAgICAgICAgSSA9IE5bMF0udDtcbiAgICAgICAgICAgIEIgPSAtSW5maW5pdHk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBqID0gKGMgPSB2b2lkIDAsIF9fdmFsdWVzKE4pKSwgayA9IGoubmV4dCgpOyAhay5kb25lOyBrID0gai5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgTDtcbiAgICAgICAgICAgICAgICBPID0gay52YWx1ZS50O1xuICAgICAgICAgICAgICAgIGlmICgoTCA9IEZsb3dMZXZlbEdlbmVyYXRvci5fZXZhbEFmdGVyUGljayhkLCBoLCBPLCBtLCB1LCBsKSkgPiBCKSB7XG4gICAgICAgICAgICAgICAgICBCID0gTDtcbiAgICAgICAgICAgICAgICAgIEkgPSBPO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBjID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGsgJiYgIWsuZG9uZSAmJiAodiA9IGoucmV0dXJuKSAmJiB2LmNhbGwoaik7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKGMpIHRocm93IGMuZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXCJzbWFydFwiID09PSBvKSB7XG4gICAgICAgICAgdmFyIEc7XG4gICAgICAgICAgaWYgKChHID0gdy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBoLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHQuY2FyZElkID09PSBlLmNhcmRJZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBCID0gLUluZmluaXR5O1xuICAgICAgICAgICAgSSA9IEdbMF07XG4gICAgICAgICAgICB2YXIgRiA9IGZ1bmN0aW9uIEYoZSkge1xuICAgICAgICAgICAgICB2YXIgdCA9IGQuZ2V0RnJlZWRCeVJlbW92YWwoZSksXG4gICAgICAgICAgICAgICAgbyA9IGguZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdC5jYXJkSWQgIT09IGUuY2FyZElkO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG4gPSAoby5sZW5ndGggPiAwICYmIHQuc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5jYXJkSWQgPT09IGUuY2FyZElkO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkgPyA1MDAgOiAwKSArIDEwICogdC5sZW5ndGg7XG4gICAgICAgICAgICAgIGlmIChuID4gQikge1xuICAgICAgICAgICAgICAgIEIgPSBuO1xuICAgICAgICAgICAgICAgIEkgPSBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgViA9IChfID0gdm9pZCAwLCBfX3ZhbHVlcyhHKSksIFUgPSBWLm5leHQoKTsgIVUuZG9uZTsgVSA9IFYubmV4dCgpKSBGKE8gPSBVLnZhbHVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgXyA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBVICYmICFVLmRvbmUgJiYgKFQgPSBWLnJldHVybikgJiYgVC5jYWxsKFYpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChfKSB0aHJvdyBfLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChoLmxlbmd0aCA+PSBtIC0gMiAmJiBoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBIID0gbmV3IFNldChoLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZS5jYXJkSWQ7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBJID0gd1swXTtcbiAgICAgICAgICAgIEIgPSAtSW5maW5pdHk7XG4gICAgICAgICAgICB2YXIgVyA9IGZ1bmN0aW9uIFcoZSkge1xuICAgICAgICAgICAgICB2YXIgdCA9IGQuZ2V0RnJlZWRCeVJlbW92YWwoZSksXG4gICAgICAgICAgICAgICAgbyA9ICh3LnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0LmlkICE9PSBlLmlkICYmIHQuY2FyZElkID09PSBlLmNhcmRJZDtcbiAgICAgICAgICAgICAgICB9KSA/IDgwMCA6IDApICsgKEguaGFzKGUuY2FyZElkKSB8fCB0LnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBILmhhcyhlLmNhcmRJZCk7XG4gICAgICAgICAgICAgICAgfSkgPyA0MDAgOiAwKSArIDEwICogdC5sZW5ndGg7XG4gICAgICAgICAgICAgIGlmIChvID4gQikge1xuICAgICAgICAgICAgICAgIEIgPSBvO1xuICAgICAgICAgICAgICAgIEkgPSBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgeiA9IChDID0gdm9pZCAwLCBfX3ZhbHVlcyh3KSksIFkgPSB6Lm5leHQoKTsgIVkuZG9uZTsgWSA9IHoubmV4dCgpKSBXKE8gPSBZLnZhbHVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgQyA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBZICYmICFZLmRvbmUgJiYgKGIgPSB6LnJldHVybikgJiYgYi5jYWxsKHopO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChDKSB0aHJvdyBDLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEIgPSAtSW5maW5pdHk7XG4gICAgICAgICAgICBJID0gd1swXTtcbiAgICAgICAgICAgIHZhciBLID0gZnVuY3Rpb24gSyhlKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gZC5nZXRGcmVlZEJ5UmVtb3ZhbChlKSxcbiAgICAgICAgICAgICAgICBvID0gKHcuc29tZShmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuaWQgIT09IGUuaWQgJiYgdC5jYXJkSWQgPT09IGUuY2FyZElkO1xuICAgICAgICAgICAgICAgIH0pID8gODAwIDogMCkgKyAxMCAqIHQubGVuZ3RoO1xuICAgICAgICAgICAgICBpZiAobyA+IEIpIHtcbiAgICAgICAgICAgICAgICBCID0gbztcbiAgICAgICAgICAgICAgICBJID0gZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIEogPSAoRSA9IHZvaWQgMCwgX192YWx1ZXModykpLCBaID0gSi5uZXh0KCk7ICFaLmRvbmU7IFogPSBKLm5leHQoKSkgSyhPID0gWi52YWx1ZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIEUgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgWiAmJiAhWi5kb25lICYmIChTID0gSi5yZXR1cm4pICYmIFMuY2FsbChKKTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAoRSkgdGhyb3cgRS5lcnJvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcImdyZWVkeVwiID09PSBvKSB7XG4gICAgICAgICAgdmFyIFggPSB3LmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBoLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHQuY2FyZElkID09PSBlLmNhcmRJZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIEkgPSBYIHx8IHdbMF07XG4gICAgICAgIH0gZWxzZSBpZiAoZygpIDwgMC43KSB7XG4gICAgICAgICAgaWYgKFggPSB3LmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBoLnNvbWUoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHQuY2FyZElkID09PSBlLmNhcmRJZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKSBJID0gWDtlbHNlIHtcbiAgICAgICAgICAgIHZhciBxID0gTWF0aC5mbG9vcihnKCkgKiB3Lmxlbmd0aCk7XG4gICAgICAgICAgICBJID0gd1tNYXRoLm1pbihxLCB3Lmxlbmd0aCAtIDEpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcSA9IE1hdGguZmxvb3IoZygpICogdy5sZW5ndGgpO1xuICAgICAgICAgIEkgPSB3W01hdGgubWluKHEsIHcubGVuZ3RoIC0gMSldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBRID0gaC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5jYXJkSWQgPT09IEkuY2FyZElkO1xuICAgICAgICB9KTtcbiAgICAgICAgeSAmJiB5LnB1c2goe1xuICAgICAgICAgIHR5cGU6IFwidG8tYnVmZmVyXCIsXG4gICAgICAgICAgdGlsZUlkOiBJLmlkLFxuICAgICAgICAgIG1hdGNoVGlsZUlkOiBRID49IDAgPyBoW1FdLmlkIDogdm9pZCAwLFxuICAgICAgICAgIGNhcmRJZDogSS5jYXJkSWQsXG4gICAgICAgICAgYnVmZmVyQ291bnQ6IFEgPj0gMCA/IGgubGVuZ3RoIC0gMSA6IGgubGVuZ3RoICsgMVxuICAgICAgICB9KTtcbiAgICAgICAgaC5wdXNoKGNsb25lRmxvd1RpbGUoSSkpO1xuICAgICAgICBJLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgZC5fcmVidWlsZEdyaWRNYXAoKTtcbiAgICAgICAgaWYgKFEgPj0gMCkge1xuICAgICAgICAgIGguc3BsaWNlKGgubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgaC5zcGxpY2UoUSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGgubGVuZ3RoID49IG0pIHtcbiAgICAgICAgICBpZiAoIXApIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKCFGbG93TGV2ZWxHZW5lcmF0b3IuX3BlcmZvcm1BZGp1c3QoZCwgaCwgeSwgZiwgZykpIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07IF8tLSA+IDA7KSB7XG4gICAgICB2YXIgQyA9IFQoKTtcbiAgICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBDKSByZXR1cm4gQy52YWx1ZTtcbiAgICAgIGlmIChcImJyZWFrXCIgPT09IEMpIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBzdGF0aWMgX3BlcmZvcm1BZGp1c3QoZSwgdCwgbywgbikge1xuICAgIGlmICgwID09PSB0Lmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBpID0gdC5wb3AoKSxcbiAgICAgIHIgPSBlLnRpbGVzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaWQgPT09IGkuaWQ7XG4gICAgICB9KTtcbiAgICBpZiAoIXIpIHJldHVybiBmYWxzZTtcbiAgICByLmlzVmFsaWQgPSB0cnVlO1xuICAgIGUuX3JlYnVpbGRHcmlkTWFwKCk7XG4gICAgbyAmJiBvLmxlbmd0aCA+IDAgJiYgby5wb3AoKTtcbiAgICB2YXIgYSA9IG5ldyBTZXQodC5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLmNhcmRJZDtcbiAgICB9KSk7XG4gICAgaWYgKDAgPT09IGEuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBsID0gbmV3IFNldChlLmdldEZyZWVUaWxlcygpLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pZDtcbiAgICAgIH0pKSxcbiAgICAgIHMgPSBlLnRpbGVzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pc1ZhbGlkICYmICFsLmhhcyhlLmlkKSAmJiBhLmhhcyhlLmNhcmRJZCk7XG4gICAgICB9KS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZhciBvLCBuO1xuICAgICAgICByZXR1cm4gKG51bGwgIT09IChvID0gZS5kZXB0aCkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDk5OSkgLSAobnVsbCAhPT0gKG4gPSB0LmRlcHRoKSAmJiB2b2lkIDAgIT09IG4gPyBuIDogOTk5KTtcbiAgICAgIH0pO1xuICAgIGlmICgwID09PSBzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBjID0gc1swXSxcbiAgICAgIHUgPSByLmNhcmRJZDtcbiAgICByLmNhcmRJZCA9IGMuY2FyZElkO1xuICAgIGMuY2FyZElkID0gdTtcbiAgICBuLnB1c2goW3IuaWQsIGMuaWRdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBfc2VsZWN0VG9wb2xvZ3koKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IHRoaXMuX2NmZy50b3BvbG9neVdlaWdodHM7XG4gICAgaWYgKG8pIHtcbiAgICAgIHZhciBuID0gT2JqZWN0LmVudHJpZXMobykuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBfX3JlYWQoZSwgMilbMV0gPiAwO1xuICAgICAgfSk7XG4gICAgICBpZiAoMCAhPT0gbi5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGkgPSBuLnJlZHVjZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIGUgKyBfX3JlYWQodCwgMilbMV07XG4gICAgICAgICAgfSwgMCksXG4gICAgICAgICAgbCA9IHRoaXMuX3JuZy5uZXh0KCkgKiBpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhuKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciB1ID0gX19yZWFkKGMudmFsdWUsIDIpLFxuICAgICAgICAgICAgICBwID0gdVswXTtcbiAgICAgICAgICAgIGlmICgobCAtPSB1WzFdKSA8PSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkVG9wb2xvZ3kgPSBwO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgZSA9IHtcbiAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYyAmJiAhYy5kb25lICYmICh0ID0gcy5yZXR1cm4pICYmIHQuY2FsbChzKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVG9wb2xvZ3kgPSBuW24ubGVuZ3RoIC0gMV1bMF07XG4gICAgICB9IGVsc2UgdGhpcy5fc2VsZWN0ZWRUb3BvbG9neSA9IFwicHlyYW1pZFwiO1xuICAgIH0gZWxzZSB0aGlzLl9zZWxlY3RlZFRvcG9sb2d5ID0gXCJweXJhbWlkXCI7XG4gIH1cbiAgX2J1aWxkVG9wb2xvZ3koKSB7XG4gICAgc3dpdGNoICh0aGlzLl9zZWxlY3RlZFRvcG9sb2d5KSB7XG4gICAgICBjYXNlIFwiY3Jvc3NcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1aWxkQ3Jvc3NUb3BvbG9neSgpO1xuICAgICAgY2FzZSBcIm11bHRpUGVha1wiOlxuICAgICAgICByZXR1cm4gdGhpcy5fYnVpbGRNdWx0aVBlYWtUb3BvbG9neSgpO1xuICAgICAgY2FzZSBcImNoZWNrZXJib2FyZFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fYnVpbGRDaGVja2VyYm9hcmRUb3BvbG9neSgpO1xuICAgICAgY2FzZSBcInNwaXJhbFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fYnVpbGRTcGlyYWxUb3BvbG9neSgpO1xuICAgICAgY2FzZSBcImhvdXJnbGFzc1wiOlxuICAgICAgICByZXR1cm4gdGhpcy5fYnVpbGRIb3VyZ2xhc3NUb3BvbG9neSgpO1xuICAgICAgY2FzZSBcIm1pcnJvclwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fYnVpbGRNaXJyb3JUb3BvbG9neSgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1aWxkUHlyYW1pZFRvcG9sb2d5KCk7XG4gICAgfVxuICB9XG4gIGdlbmVyYXRlKCkge1xuICAgIHZhciBlID0gdGhpcy5fY2ZnO1xuICAgIHRoaXMuX2FjdHVhbFBhaXJzID0gZS50b3RhbFBhaXJzID4gMCA/IGUudG90YWxQYWlycyA6IHRoaXMuX3JuZy5uZXh0SW50KGUubWluUGFpcnMsIGUubWF4UGFpcnMpO1xuICAgIHRoaXMuX3NlbGVjdFRvcG9sb2d5KCk7XG4gICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRlT25jZSgpO1xuICB9XG4gIF9nZW5lcmF0ZU9uY2UoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9idWlsZEJhc2UoKTtcbiAgICByZXR1cm4gdGhpcy5fZ2VuZXJhdGVGcm9tQmFzZShlKTtcbiAgfVxuICBfYnVpbGRCYXNlKCkge1xuICAgIHZhciBlID0gdGhpcy5fYnVpbGRUb3BvbG9neSgpLFxuICAgICAgdCA9IG5ldyBGbG93VGlsZVNpbXVsYXRvcihlKS5wZWVsTGF5ZXJzKCksXG4gICAgICBvID0gbmV3IE1hcCgpO1xuICAgIHQuZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgby5zZXQodCwgZS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaWQ7XG4gICAgICB9KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhc2VUaWxlczogZSxcbiAgICAgIGJhc2VEZXB0aElkczogb1xuICAgIH07XG4gIH1cbiAgX2dlbmVyYXRlRnJvbUJhc2UoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgciA9IGUuYmFzZVRpbGVzLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gY2xvbmVGbG93VGlsZShlKTtcbiAgICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMociksIGMgPSBsLm5leHQoKTsgIWMuZG9uZTsgYyA9IGwubmV4dCgpKSAoZCA9IGMudmFsdWUpLmNhcmRJZCA9IDA7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAobyA9IGwucmV0dXJuKSAmJiBvLmNhbGwobCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHUgPSBuZXcgTWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHAgPSBfX3ZhbHVlcyhyKSwgZiA9IHAubmV4dCgpOyAhZi5kb25lOyBmID0gcC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGQgPSBmLnZhbHVlO1xuICAgICAgICB1LnNldChkLmlkLCBkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZiAmJiAhZi5kb25lICYmIChpID0gcC5yZXR1cm4pICYmIGkuY2FsbChwKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaCA9IG5ldyBNYXAoKTtcbiAgICBlLmJhc2VEZXB0aElkcy5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBoLnNldCh0LCBlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdS5nZXQoZSk7XG4gICAgICB9KS5maWx0ZXIoQm9vbGVhbikpO1xuICAgIH0pO1xuICAgIHRoaXMuX2Fzc2lnblN0cmF0ZWdpY0NhcmRJZHMociwgaCk7XG4gICAgdGhpcy5fZW5zdXJlRXZlbkNhcmRJZHMocik7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgX2Vuc3VyZUV2ZW5DYXJkSWRzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHIsXG4gICAgICBsLFxuICAgICAgcyA9IHRoaXMuX2NmZztcbiAgICBpZiAoZS5sZW5ndGggJSAyICE9IDApIHtcbiAgICAgIHZhciBjID0ge307XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciB1ID0gX192YWx1ZXMoZSksIHAgPSB1Lm5leHQoKTsgIXAuZG9uZTsgcCA9IHUubmV4dCgpKSBjWyhiID0gcC52YWx1ZSkuY2FyZElkXSA9IChjW2IuY2FyZElkXSB8fCAwKSArIDE7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcCAmJiAhcC5kb25lICYmIChvID0gdS5yZXR1cm4pICYmIG8uY2FsbCh1KTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGYgPSBlW2UubGVuZ3RoIC0gMV0uY2FyZElkLFxuICAgICAgICBkID0gMDtcbiAgICAgIGZvciAodmFyIGggaW4gYykgaWYgKGNbaF0gJSAyID09IDEgJiYgY1toXSA+IGQpIHtcbiAgICAgICAgZCA9IGNbaF07XG4gICAgICAgIGYgPSBOdW1iZXIoaCk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciB5ID0gZS5sZW5ndGggLSAxOyB5ID49IDA7IHktLSkgaWYgKGVbeV0uY2FyZElkID09PSBmKSB7XG4gICAgICAgIGUuc3BsaWNlKHksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIG0gPSB7fTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdiA9IF9fdmFsdWVzKGUpLCBnID0gdi5uZXh0KCk7ICFnLmRvbmU7IGcgPSB2Lm5leHQoKSkgKG1bKGIgPSBnLnZhbHVlKS5jYXJkSWRdID0gbVtiLmNhcmRJZF0gfHwgW10pLnB1c2goYik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbiA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGcgJiYgIWcuZG9uZSAmJiAoaSA9IHYucmV0dXJuKSAmJiBpLmNhbGwodik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIF8gPSBbXTtcbiAgICBmb3IgKHZhciBoIGluIG0pIG1baF0ubGVuZ3RoICUgMiAhPSAwICYmIF8ucHVzaChtW2hdKTtcbiAgICBmb3IgKHkgPSAwOyB5IDwgXy5sZW5ndGggLSAxOyB5ICs9IDIpIF9beSArIDFdW19beSArIDFdLmxlbmd0aCAtIDFdLmNhcmRJZCA9IF9beV1bMF0uY2FyZElkO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBUID0gX192YWx1ZXMoZSksIEMgPSBULm5leHQoKTsgIUMuZG9uZTsgQyA9IFQubmV4dCgpKSB7XG4gICAgICAgIHZhciBiO1xuICAgICAgICAoKGIgPSBDLnZhbHVlKS5jYXJkSWQgPCBzLm1pbkNhcmRJZCB8fCBiLmNhcmRJZCA+IHMubWF4Q2FyZElkKSAmJiAoYi5jYXJkSWQgPSBzLm1pbkNhcmRJZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgciA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIEMgJiYgIUMuZG9uZSAmJiAobCA9IFQucmV0dXJuKSAmJiBsLmNhbGwoVCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2VuZXJhdGVBbmRWYWxpZGF0ZShlID0gNTAsIHQgPSBmYWxzZSkge1xuICAgIHJldHVybiB0aGlzLl9nZW5lcmF0ZUludGVybmFsKFwiY2xhc3NpY1wiLCBlLCB0KTtcbiAgfVxuICBnZW5lcmF0ZUFuZFZhbGlkYXRlQnVmZmVyKGUgPSA1MCwgdCA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRlSW50ZXJuYWwoXCJidWZmZXJcIiwgZSwgdCk7XG4gIH1cbiAgZ2VuZXJhdGVBbmRWYWxpZGF0ZUFzeW5jKGUgPSAzMCwgdCA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICBzd2l0Y2ggKG8ubGFiZWwpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiBbNSwgX192YWx1ZXModGhpcy5fZ2VuZXJhdGVJbnRlcm5hbEFzeW5jKFwiY2xhc3NpY1wiLCBlLCB0KSldO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcmV0dXJuIFsyLCBvLnNlbnQoKV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2VuZXJhdGVBbmRWYWxpZGF0ZUJ1ZmZlckFzeW5jKGUgPSAzMCwgdCA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICBzd2l0Y2ggKG8ubGFiZWwpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiBbNSwgX192YWx1ZXModGhpcy5fZ2VuZXJhdGVJbnRlcm5hbEFzeW5jKFwiYnVmZmVyXCIsIGUsIHQpKV07XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gWzIsIG8uc2VudCgpXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZW5lcmF0ZUVhc3koKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9jZmc7XG4gICAgdGhpcy5fYWN0dWFsUGFpcnMgPSBlLnRvdGFsUGFpcnMgPiAwID8gZS50b3RhbFBhaXJzIDogdGhpcy5fcm5nLm5leHRJbnQoZS5taW5QYWlycywgZS5tYXhQYWlycyk7XG4gICAgdGhpcy5fc2VsZWN0VG9wb2xvZ3koKTtcbiAgICBmb3IgKHZhciB0ID0gbnVsbCwgbyA9IDA7IG8gPCAxMDsgbysrKSB7XG4gICAgICB0ID0gdGhpcy5fYnVpbGRCYXNlKCk7XG4gICAgICB2YXIgbiA9IHRoaXMuX2dlbmVyYXRlRnJvbUJhc2UodCk7XG4gICAgICBpZiAobmV3IEZsb3dUaWxlU2ltdWxhdG9yKG4pLmdldEF2YWlsYWJsZVBhaXJDb3VudCgpID49IDEpIHJldHVybiB7XG4gICAgICAgIHRpbGVzOiBuLFxuICAgICAgICBzb2x2YWJsZTogdHJ1ZSxcbiAgICAgICAgYXR0ZW1wdDogbyArIDFcbiAgICAgIH07XG4gICAgICB0aGlzLl9ybmcgPSBuZXcgZih0aGlzLl9ybmcubmV4dEludCgxLCAyMTQ3NDgzNjQ2KSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIF9nZW5lcmF0ZUludGVybmFsKHQsIG8sIG4pIHtcbiAgICB2YXIgaSxcbiAgICAgIHIsXG4gICAgICBhID0gdGhpcy5fY2ZnO1xuICAgIHRoaXMuX2FjdHVhbFBhaXJzID0gYS50b3RhbFBhaXJzID4gMCA/IGEudG90YWxQYWlycyA6IHRoaXMuX3JuZy5uZXh0SW50KGEubWluUGFpcnMsIGEubWF4UGFpcnMpO1xuICAgIHRoaXMuX3NlbGVjdFRvcG9sb2d5KCk7XG4gICAgdmFyIGwgPSBcImJ1ZmZlclwiID09PSB0LFxuICAgICAgYyA9IGEucHV6emxlQ29yZUNvdW50ID4gMCB8fCAobnVsbCAhPT0gKGkgPSBhLmhhbXN0ZXJDb3VudCkgJiYgdm9pZCAwICE9PSBpID8gaSA6IDApID4gMCxcbiAgICAgIHUgPSBuID8gLTEgOiBjID8gOCA6IDU7XG4gICAgaWYgKGwpIHtcbiAgICAgIHZhciBwID0gdGhpcy5fYnVpbGRCYXNlKCksXG4gICAgICAgIGQgPSB0aGlzLl9nZW5lcmF0ZUZyb21CYXNlKHApLFxuICAgICAgICBoID0gW107XG4gICAgICByZXR1cm4gbnVsbCAhPT0gKHYgPSBGbG93TGV2ZWxHZW5lcmF0b3IuX3NvbHZlQnVmZmVyTXVsdGkoZCwgbnVsbCAhPT0gKHIgPSBhLmJ1ZmZlclNpemUpICYmIHZvaWQgMCAhPT0gciA/IHIgOiA0LCBuLCAtMSwgMTIsIFtdLCB0cnVlLCBoKSkgPyB7XG4gICAgICAgIHRpbGVzOiBkLFxuICAgICAgICBzb2x2YWJsZTogdHJ1ZSxcbiAgICAgICAgYXR0ZW1wdDogMSxcbiAgICAgICAgYWRqdXN0Q291bnQ6IGgubGVuZ3RoLFxuICAgICAgICBzb2x2ZUJ1ZmZlclBhdGg6IG4gPyB2IDogdm9pZCAwXG4gICAgICB9IDoge1xuICAgICAgICB0aWxlczogZCxcbiAgICAgICAgc29sdmFibGU6IGZhbHNlLFxuICAgICAgICBhdHRlbXB0OiAxLFxuICAgICAgICBhZGp1c3RDb3VudDogMFxuICAgICAgfTtcbiAgICB9XG4gICAgZm9yICh2YXIgeSA9IG51bGwsIG0gPSAwOyBtIDwgbzsgbSsrKSB7XG4gICAgICBwID0gdGhpcy5fYnVpbGRCYXNlKCk7XG4gICAgICB5ID0gZCA9IHRoaXMuX2dlbmVyYXRlRnJvbUJhc2UocCk7XG4gICAgICBpZiAobmV3IEZsb3dUaWxlU2ltdWxhdG9yKGQpLmdldEF2YWlsYWJsZVBhaXJDb3VudCgpID49IDEpIHtcbiAgICAgICAgdmFyIHY7XG4gICAgICAgIGlmIChudWxsICE9PSAodiA9IEZsb3dMZXZlbEdlbmVyYXRvci5fc29sdmVDbGFzc2ljTXVsdGkoZCwgYS5wdXp6bGVDb3JlQ291bnQsIG4sIHUpKSkgcmV0dXJuIHtcbiAgICAgICAgICB0aWxlczogZCxcbiAgICAgICAgICBzb2x2YWJsZTogdHJ1ZSxcbiAgICAgICAgICBhdHRlbXB0OiBtICsgMSxcbiAgICAgICAgICBzb2x2ZVBhdGg6IG4gPyB2IDogdm9pZCAwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0aGlzLl9ybmcgPSBuZXcgZih0aGlzLl9ybmcubmV4dEludCgxLCAyMTQ3NDgzNjQ2KSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0aWxlczogeSxcbiAgICAgIHNvbHZhYmxlOiBmYWxzZSxcbiAgICAgIGF0dGVtcHQ6IG9cbiAgICB9O1xuICB9XG4gIF9nZW5lcmF0ZUludGVybmFsQXN5bmModCwgbywgbikge1xuICAgIHZhciByLCBhLCBsLCBjLCB1LCBwLCBkLCBoLCB5LCBtLCB2LCBnO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgc3dpdGNoIChpLmxhYmVsKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByID0gdGhpcy5fY2ZnO1xuICAgICAgICAgIHRoaXMuX2FjdHVhbFBhaXJzID0gci50b3RhbFBhaXJzID4gMCA/IHIudG90YWxQYWlycyA6IHRoaXMuX3JuZy5uZXh0SW50KHIubWluUGFpcnMsIHIubWF4UGFpcnMpO1xuICAgICAgICAgIHRoaXMuX3NlbGVjdFRvcG9sb2d5KCk7XG4gICAgICAgICAgcmV0dXJuIFs0XTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGkuc2VudCgpO1xuICAgICAgICAgIGEgPSBcImJ1ZmZlclwiID09PSB0O1xuICAgICAgICAgIGwgPSByLnB1enpsZUNvcmVDb3VudCA+IDAgfHwgKG51bGwgIT09ICh2ID0gci5oYW1zdGVyQ291bnQpICYmIHZvaWQgMCAhPT0gdiA/IHYgOiAwKSA+IDA7XG4gICAgICAgICAgYyA9IG4gPyAtMSA6IGwgPyA4IDogNTtcbiAgICAgICAgICBpZiAoIWEpIHJldHVybiBbMywgM107XG4gICAgICAgICAgaCA9IHRoaXMuX2J1aWxkQmFzZSgpO1xuICAgICAgICAgIHkgPSB0aGlzLl9nZW5lcmF0ZUZyb21CYXNlKGgpO1xuICAgICAgICAgIHJldHVybiBbNF07XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBpLnNlbnQoKTtcbiAgICAgICAgICB1ID0gW107XG4gICAgICAgICAgcmV0dXJuIG51bGwgIT09IChtID0gRmxvd0xldmVsR2VuZXJhdG9yLl9zb2x2ZUJ1ZmZlck11bHRpKHksIG51bGwgIT09IChnID0gci5idWZmZXJTaXplKSAmJiB2b2lkIDAgIT09IGcgPyBnIDogNCwgbiwgLTEsIDEyLCBbXSwgdHJ1ZSwgdSkpID8gWzIsIHtcbiAgICAgICAgICAgIHRpbGVzOiB5LFxuICAgICAgICAgICAgc29sdmFibGU6IHRydWUsXG4gICAgICAgICAgICBhdHRlbXB0OiAxLFxuICAgICAgICAgICAgYWRqdXN0Q291bnQ6IHUubGVuZ3RoLFxuICAgICAgICAgICAgc29sdmVCdWZmZXJQYXRoOiBuID8gbSA6IHZvaWQgMFxuICAgICAgICAgIH1dIDogWzIsIHtcbiAgICAgICAgICAgIHRpbGVzOiB5LFxuICAgICAgICAgICAgc29sdmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgYXR0ZW1wdDogMSxcbiAgICAgICAgICAgIGFkanVzdENvdW50OiAwXG4gICAgICAgICAgfV07XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBwID0gbnVsbDtcbiAgICAgICAgICBkID0gMDtcbiAgICAgICAgICBpLmxhYmVsID0gNDtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGlmICghKGQgPCBvKSkgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICBoID0gdGhpcy5fYnVpbGRCYXNlKCk7XG4gICAgICAgICAgeSA9IHRoaXMuX2dlbmVyYXRlRnJvbUJhc2UoaCk7XG4gICAgICAgICAgcCA9IHk7XG4gICAgICAgICAgcmV0dXJuIFs0XTtcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGkuc2VudCgpO1xuICAgICAgICAgIHJldHVybiBuZXcgRmxvd1RpbGVTaW11bGF0b3IoeSkuZ2V0QXZhaWxhYmxlUGFpckNvdW50KCkgPj0gMSAmJiBudWxsICE9PSAobSA9IEZsb3dMZXZlbEdlbmVyYXRvci5fc29sdmVDbGFzc2ljTXVsdGkoeSwgci5wdXp6bGVDb3JlQ291bnQsIG4sIGMpKSA/IFsyLCB7XG4gICAgICAgICAgICB0aWxlczogeSxcbiAgICAgICAgICAgIHNvbHZhYmxlOiB0cnVlLFxuICAgICAgICAgICAgYXR0ZW1wdDogZCArIDEsXG4gICAgICAgICAgICBzb2x2ZVBhdGg6IG4gPyBtIDogdm9pZCAwXG4gICAgICAgICAgfV0gOiBbNF07XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBpLnNlbnQoKTtcbiAgICAgICAgICB0aGlzLl9ybmcgPSBuZXcgZih0aGlzLl9ybmcubmV4dEludCgxLCAyMTQ3NDgzNjQ2KSk7XG4gICAgICAgICAgaS5sYWJlbCA9IDc7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBkKys7XG4gICAgICAgICAgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIHJldHVybiBbMiwge1xuICAgICAgICAgICAgdGlsZXM6IHAsXG4gICAgICAgICAgICBzb2x2YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBhdHRlbXB0OiBvXG4gICAgICAgICAgfV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX2J1aWxkUHlyYW1pZFRvcG9sb2d5KCkge1xuICAgIGZvciAodmFyIGUgPSB0aGlzLl9jZmcsIHQgPSAyICogdGhpcy5fYWN0dWFsUGFpcnMsIG8gPSBbXSwgbiA9IHt9LCBpID0gMCwgciA9IHRoaXMuX2Rpc3RyaWJ1dGVUaWxlc1RvTGF5ZXJzKHQsIGUubWF4TGF5ZXJzKSwgYSA9IDA7IGEgPCByLmxlbmd0aDsgYSsrKSB7XG4gICAgICB2YXIgcyA9IHJbYV07XG4gICAgICBpZiAoIShzIDw9IDApKSB7XG4gICAgICAgIHZhciBjO1xuICAgICAgICBjID0gMCA9PT0gYSA/IHRoaXMuX2dyb3dCYXNlTGF5ZXIocywgaSwgbiwgZSkgOiB0aGlzLl9ncm93VXBwZXJMYXllcihhLCBzLCBpLCBuLCBlKTtcbiAgICAgICAgby5wdXNoLmFwcGx5KG8sIFsuLi5jLnRpbGVzXSk7XG4gICAgICAgIGkgPSBjLm5leHRJZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgX2J1aWxkTWlycm9yVG9wb2xvZ3koKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IHRoaXMuX2NmZyxcbiAgICAgIG4gPSAyICogdGhpcy5fYWN0dWFsUGFpcnMsXG4gICAgICBpID0gW10sXG4gICAgICBjID0ge30sXG4gICAgICB1ID0gMCxcbiAgICAgIHAgPSB0aGlzLl9taXJyb3JWLmJpbmQodGhpcyksXG4gICAgICBmID0gdGhpcy5fZGlzdHJpYnV0ZVRpbGVzVG9MYXllcnMobiwgby5tYXhMYXllcnMpLFxuICAgICAgZCA9IGZbMF0sXG4gICAgICBoID0gTWF0aC5mbG9vcihvLmJvYXJkV2lkdGggLyAyKSAtIDE7XG4gICAgaCAtPSBoICUgMjtcbiAgICB2YXIgeSA9IE1hdGguZmxvb3Ioby5ib2FyZEhlaWdodCAvIDIpIC0gMTtcbiAgICB5IC09IHkgJSAyO1xuICAgIHZhciBtID0gMDtcbiAgICBfX3JlYWQocChoLCAwLCBvKSwgMSlbMF0gPT09IGggJiYgdGhpcy5fcm5nLm5leHQoKSA8IDAuNiAmJiAobSA9IDIgKiAoMSArIE1hdGguZmxvb3IoMyAqIHRoaXMuX3JuZy5uZXh0KCkpKSk7XG4gICAgdmFyIHYgPSBNYXRoLmZsb29yKG8uYm9hcmRIZWlnaHQgLyA4KSxcbiAgICAgIGcgPSB2ID4gMCA/IDIgKiBNYXRoLmZsb29yKHRoaXMuX3JuZy5uZXh0KCkgKiAodiArIDEpKSAqICh0aGlzLl9ybmcubmV4dCgpIDwgMC41ID8gLTEgOiAxKSA6IDAsXG4gICAgICBfID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oby5ib2FyZEhlaWdodCAtIDIsIHkgKyBnKSk7XG4gICAgXyAtPSBfICUgMjtcbiAgICB2YXIgVCA9IG5ldyBTZXQoKSxcbiAgICAgIEMgPSBmdW5jdGlvbiBDKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIGUgKyBcIixcIiArIHQ7XG4gICAgICB9LFxuICAgICAgYiA9IFtbMiwgMF0sIFstMiwgMF0sIFswLCAyXSwgWzAsIC0yXSwgWzIsIDJdLCBbMiwgLTJdLCBbLTIsIDJdLCBbLTIsIC0yXV0sXG4gICAgICBFID0gTWF0aC5tYXgoMCwgZCAtIG0pLFxuICAgICAgUyA9IGggLSAyLFxuICAgICAgSSA9IF8sXG4gICAgICB3ID0gX19yZWFkKHAoUywgSSwgbyksIDIpLFxuICAgICAgQiA9IHdbMF0sXG4gICAgICB4ID0gd1sxXTtcbiAgICBpZiAoKFMgIT09IEIgfHwgSSAhPT0geCkgJiYgaS5sZW5ndGggKyAyIDw9IEUgJiYgUyA+PSAwICYmIFMgKyAxIDwgby5ib2FyZFdpZHRoICYmIEkgPj0gMCAmJiBJICsgMSA8IG8uYm9hcmRIZWlnaHQgJiYgQiA+PSAwICYmIEIgKyAxIDwgby5ib2FyZFdpZHRoICYmIHggPj0gMCAmJiB4ICsgMSA8IG8uYm9hcmRIZWlnaHQgJiYgdGhpcy5fY2FuUGxhY2UoUywgSSwgMCwgYykgJiYgdGhpcy5fY2FuUGxhY2UoQiwgeCwgMCwgYykpIHtcbiAgICAgIHZhciBNID0gY3JlYXRlRmxvd1RpbGUodSsrLCBTLCBJLCAwLCAwKTtcbiAgICAgIHRoaXMuX29jY3VweShNLCBjKTtcbiAgICAgIGkucHVzaChNKTtcbiAgICAgIFQuYWRkKEMoUywgSSkpO1xuICAgICAgdmFyIE8gPSBjcmVhdGVGbG93VGlsZSh1KyssIEIsIHgsIDAsIDApO1xuICAgICAgdGhpcy5fb2NjdXB5KE8sIGMpO1xuICAgICAgaS5wdXNoKE8pO1xuICAgICAgVC5hZGQoQyhCLCB4KSk7XG4gICAgfVxuICAgIGZvciAodmFyIEQgPSBfX3JlYWQocChoLCBfLCBvKSwgMiksIFAgPSBEWzBdLCBBID0gRFsxXSwgUiA9IGggPT09IFAgJiYgXyA9PT0gQSA/IFtbaCwgX11dIDogW1toLCBfXSwgW1AsIEFdXTsgaS5sZW5ndGggPCBFICYmIFIubGVuZ3RoID4gMDspIHtcbiAgICAgIHRoaXMuX3JuZy5zaHVmZmxlKFIpO1xuICAgICAgZm9yICh2YXIgTiA9IGZhbHNlLCBqID0gMDsgaiA8IFIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGsgPSBfX3JlYWQoUltqXSwgMiksXG4gICAgICAgICAgTCA9IGtbMF0sXG4gICAgICAgICAgRyA9IGtbMV07XG4gICAgICAgIHRoaXMuX3JuZy5zaHVmZmxlKGIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIEYgPSAoZSA9IHZvaWQgMCwgX192YWx1ZXMoYikpLCBWID0gRi5uZXh0KCk7ICFWLmRvbmU7IFYgPSBGLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIFUgPSBfX3JlYWQoVi52YWx1ZSwgMiksXG4gICAgICAgICAgICAgIEggPSBVWzBdLFxuICAgICAgICAgICAgICBXID0gVVsxXSxcbiAgICAgICAgICAgICAgeiA9IEwgKyBILFxuICAgICAgICAgICAgICBZID0gRyArIFcsXG4gICAgICAgICAgICAgIEsgPSBfX3JlYWQocCh6LCBZLCBvKSwgMiksXG4gICAgICAgICAgICAgIEogPSBLWzBdLFxuICAgICAgICAgICAgICBaID0gS1sxXTtcbiAgICAgICAgICAgIGlmICghVC5oYXMoQyh6LCBZKSkgJiYgIVQuaGFzKEMoSiwgWikpICYmICEoeiA8IDAgfHwgWSA8IDAgfHwgeiArIDEgPj0gby5ib2FyZFdpZHRoIHx8IFkgKyAxID49IG8uYm9hcmRIZWlnaHQpICYmICEoSiA8IDAgfHwgWiA8IDAgfHwgSiArIDEgPj0gby5ib2FyZFdpZHRoIHx8IFogKyAxID49IG8uYm9hcmRIZWlnaHQpICYmIHRoaXMuX2NhblBsYWNlKHosIFksIDAsIGMpICYmIHRoaXMuX2NhblBsYWNlKEosIFosIDAsIGMpICYmICEoeiA9PT0gSiAmJiBZID09PSBaIHx8IGkubGVuZ3RoICsgMiA+IEUpKSB7XG4gICAgICAgICAgICAgIE0gPSBjcmVhdGVGbG93VGlsZSh1KyssIHosIFksIDAsIDApO1xuICAgICAgICAgICAgICB0aGlzLl9vY2N1cHkoTSwgYyk7XG4gICAgICAgICAgICAgIGkucHVzaChNKTtcbiAgICAgICAgICAgICAgVC5hZGQoQyh6LCBZKSk7XG4gICAgICAgICAgICAgIFIucHVzaChbeiwgWV0pO1xuICAgICAgICAgICAgICBPID0gY3JlYXRlRmxvd1RpbGUodSsrLCBKLCBaLCAwLCAwKTtcbiAgICAgICAgICAgICAgdGhpcy5fb2NjdXB5KE8sIGMpO1xuICAgICAgICAgICAgICBpLnB1c2goTyk7XG4gICAgICAgICAgICAgIFQuYWRkKEMoSiwgWikpO1xuICAgICAgICAgICAgICBSLnB1c2goW0osIFpdKTtcbiAgICAgICAgICAgICAgTiA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgIGUgPSB7XG4gICAgICAgICAgICBlcnJvcjogdFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFYgJiYgIVYuZG9uZSAmJiAodCA9IEYucmV0dXJuKSAmJiB0LmNhbGwoRik7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoTikgYnJlYWs7XG4gICAgICB9XG4gICAgICBOIHx8IFIuc2hpZnQoKTtcbiAgICB9XG4gICAgaWYgKG0gPiAwKSB7XG4gICAgICBmb3IgKHZhciBYID0gW10sIHEgPSAwOyBxICsgMSA8IG8uYm9hcmRIZWlnaHQ7IHEgKz0gMikgdGhpcy5fY2FuUGxhY2UoaCwgcSwgMCwgYykgJiYgWC5wdXNoKHEpO1xuICAgICAgdGhpcy5fcm5nLnNodWZmbGUoWCk7XG4gICAgICBmb3IgKHZhciBRID0gLTIgJiBNYXRoLm1pbihtLCBYLmxlbmd0aCksICQgPSAwOyAkIDwgUTsgJCsrKSB7XG4gICAgICAgIHZhciBlZSA9IGNyZWF0ZUZsb3dUaWxlKHUrKywgaCwgWFskXSwgMCwgMCk7XG4gICAgICAgIHRoaXMuX29jY3VweShlZSwgYyk7XG4gICAgICAgIGkucHVzaChlZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB0ZSA9IGQgLSBpLmxlbmd0aDtcbiAgICB0ZSA+IDAgJiYgZi5sZW5ndGggPiAxICYmIChmWzFdICs9IHRlKTtcbiAgICBmb3IgKHZhciBvZSA9IDE7IG9lIDwgZi5sZW5ndGg7IG9lKyspIGlmICghKGZbb2VdIDw9IDApKSB7XG4gICAgICB2YXIgbmUgPSB0aGlzLl9ncm93VXBwZXJMYXllcihvZSwgZltvZV0sIHUsIGMsIG8sIHApO1xuICAgICAgaS5wdXNoLmFwcGx5KGksIFsuLi5uZS50aWxlc10pO1xuICAgICAgdSA9IG5lLm5leHRJZDtcbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgX21pcnJvcihlLCB0LCBvKSB7XG4gICAgcmV0dXJuIFtvLmJvYXJkV2lkdGggLSAyIC0gZSwgby5ib2FyZEhlaWdodCAtIDIgLSB0XTtcbiAgfVxuICBfbWlycm9yVihlLCB0LCBvKSB7XG4gICAgcmV0dXJuIFtvLmJvYXJkV2lkdGggLSAyIC0gZSwgdF07XG4gIH1cbiAgX2dyb3dCYXNlTGF5ZXIoZSwgdCwgbywgbiwgaSA9IHRoaXMuX21pcnJvci5iaW5kKHRoaXMpKSB7XG4gICAgdmFyIGwsIGM7XG4gICAgdmFyIHUgPSBbXSxcbiAgICAgIHAgPSBNYXRoLmZsb29yKG4uYm9hcmRXaWR0aCAvIDIpIC0gMSxcbiAgICAgIGYgPSBNYXRoLmZsb29yKG4uYm9hcmRIZWlnaHQgLyAyKSAtIDE7XG4gICAgcCAtPSBwICUgMjtcbiAgICBmIC09IGYgJSAyO1xuICAgIHZhciBkID0gbmV3IFNldCgpLFxuICAgICAgaCA9IGZ1bmN0aW9uIGgoZSwgdCkge1xuICAgICAgICByZXR1cm4gZSArIFwiLFwiICsgdDtcbiAgICAgIH0sXG4gICAgICB5ID0gcCAtIDIsXG4gICAgICBtID0gZixcbiAgICAgIHYgPSBfX3JlYWQoaSh5LCBtLCBuKSwgMiksXG4gICAgICBnID0gdlswXSxcbiAgICAgIF8gPSB2WzFdO1xuICAgIGlmICgoeSAhPT0gZyB8fCBtICE9PSBfKSAmJiB0aGlzLl9jYW5QbGFjZSh5LCBtLCAwLCBvKSAmJiB0aGlzLl9jYW5QbGFjZShnLCBfLCAwLCBvKSkge1xuICAgICAgdmFyIFQgPSBjcmVhdGVGbG93VGlsZSh0KyssIHksIG0sIDAsIDApO1xuICAgICAgdGhpcy5fb2NjdXB5KFQsIG8pO1xuICAgICAgdS5wdXNoKFQpO1xuICAgICAgZC5hZGQoaCh5LCBtKSk7XG4gICAgICB2YXIgQyA9IGNyZWF0ZUZsb3dUaWxlKHQrKywgZywgXywgMCwgMCk7XG4gICAgICB0aGlzLl9vY2N1cHkoQywgbyk7XG4gICAgICB1LnB1c2goQyk7XG4gICAgICBkLmFkZChoKGcsIF8pKTtcbiAgICB9XG4gICAgZm9yICh2YXIgYiA9IF9fcmVhZChpKHAsIGYsIG4pLCAyKSwgRSA9IGJbMF0sIFMgPSBiWzFdLCBJID0gcCA9PT0gRSAmJiBmID09PSBTID8gW1twLCBmXV0gOiBbW3AsIGZdLCBbRSwgU11dLCB3ID0gW1syLCAwXSwgWy0yLCAwXSwgWzAsIDJdLCBbMCwgLTJdLCBbMiwgMl0sIFsyLCAtMl0sIFstMiwgMl0sIFstMiwgLTJdXTsgdS5sZW5ndGggPCBlICYmIEkubGVuZ3RoID4gMDspIHtcbiAgICAgIHRoaXMuX3JuZy5zaHVmZmxlKEkpO1xuICAgICAgZm9yICh2YXIgQiA9IGZhbHNlLCB4ID0gMDsgeCA8IEkubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgdmFyIE0gPSBfX3JlYWQoSVt4XSwgMiksXG4gICAgICAgICAgTyA9IE1bMF0sXG4gICAgICAgICAgRCA9IE1bMV07XG4gICAgICAgIHRoaXMuX3JuZy5zaHVmZmxlKHcpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIFAgPSAobCA9IHZvaWQgMCwgX192YWx1ZXModykpLCBBID0gUC5uZXh0KCk7ICFBLmRvbmU7IEEgPSBQLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIFIgPSBfX3JlYWQoQS52YWx1ZSwgMiksXG4gICAgICAgICAgICAgIE4gPSBSWzBdLFxuICAgICAgICAgICAgICBqID0gUlsxXSxcbiAgICAgICAgICAgICAgayA9IE8gKyBOLFxuICAgICAgICAgICAgICBMID0gRCArIGosXG4gICAgICAgICAgICAgIEcgPSBfX3JlYWQoaShrLCBMLCBuKSwgMiksXG4gICAgICAgICAgICAgIEYgPSBHWzBdLFxuICAgICAgICAgICAgICBWID0gR1sxXTtcbiAgICAgICAgICAgIGlmICghZC5oYXMoaChrLCBMKSkgJiYgIWQuaGFzKGgoRiwgVikpICYmICEoayA8IDAgfHwgTCA8IDAgfHwgayArIDEgPj0gbi5ib2FyZFdpZHRoIHx8IEwgKyAxID49IG4uYm9hcmRIZWlnaHQpICYmICEoRiA8IDAgfHwgViA8IDAgfHwgRiArIDEgPj0gbi5ib2FyZFdpZHRoIHx8IFYgKyAxID49IG4uYm9hcmRIZWlnaHQpICYmIHRoaXMuX2NhblBsYWNlKGssIEwsIDAsIG8pICYmIHRoaXMuX2NhblBsYWNlKEYsIFYsIDAsIG8pICYmICEoayA9PT0gRiAmJiBMID09PSBWIHx8IHUubGVuZ3RoICsgMiA+IGUpKSB7XG4gICAgICAgICAgICAgIFQgPSBjcmVhdGVGbG93VGlsZSh0KyssIGssIEwsIDAsIDApO1xuICAgICAgICAgICAgICB0aGlzLl9vY2N1cHkoVCwgbyk7XG4gICAgICAgICAgICAgIHUucHVzaChUKTtcbiAgICAgICAgICAgICAgZC5hZGQoaChrLCBMKSk7XG4gICAgICAgICAgICAgIEkucHVzaChbaywgTF0pO1xuICAgICAgICAgICAgICBDID0gY3JlYXRlRmxvd1RpbGUodCsrLCBGLCBWLCAwLCAwKTtcbiAgICAgICAgICAgICAgdGhpcy5fb2NjdXB5KEMsIG8pO1xuICAgICAgICAgICAgICB1LnB1c2goQyk7XG4gICAgICAgICAgICAgIGQuYWRkKGgoRiwgVikpO1xuICAgICAgICAgICAgICBJLnB1c2goW0YsIFZdKTtcbiAgICAgICAgICAgICAgQiA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGwgPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEEgJiYgIUEuZG9uZSAmJiAoYyA9IFAucmV0dXJuKSAmJiBjLmNhbGwoUCk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChsKSB0aHJvdyBsLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoQikgYnJlYWs7XG4gICAgICB9XG4gICAgICBCIHx8IEkuc2hpZnQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbGVzOiB1LFxuICAgICAgbmV4dElkOiB0XG4gICAgfTtcbiAgfVxuICBfZ3Jvd1VwcGVyTGF5ZXIoZSwgdCwgbywgbiwgaSwgbCA9IHRoaXMuX21pcnJvci5iaW5kKHRoaXMpKSB7XG4gICAgdmFyIGMsXG4gICAgICB1LFxuICAgICAgcCxcbiAgICAgIGYgPSB0aGlzO1xuICAgIGZvciAodmFyIGQgPSBbXSwgaCA9IFtdLCB5ID0gMDsgeSA8IGkuYm9hcmRXaWR0aCAtIDE7IHkrKykgZm9yICh2YXIgbSA9IDA7IG0gPCBpLmJvYXJkSGVpZ2h0IC0gMTsgbSsrKSBpZiAodGhpcy5fY2FuUGxhY2UoeSwgbSwgZSwgbikpIHtcbiAgICAgIHZhciB2ID0gdGhpcy5fY291bnRDb3ZlcnMoeSwgbSwgZSwgbik7XG4gICAgICB2ID49IDIgJiYgaC5wdXNoKHtcbiAgICAgICAgZ3g6IHksXG4gICAgICAgIGd5OiBtLFxuICAgICAgICBjb3ZlcnM6IHZcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgZyA9IG51bGwgIT09IChwID0gaS5sYXllckFsaWduTW9kZSkgJiYgdm9pZCAwICE9PSBwID8gcCA6IDEsXG4gICAgICBfID0gaDtcbiAgICBpZiAoMiA9PT0gZykge1xuICAgICAgXyA9IGguZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAhZi5faXNBbGlnbmVkV2l0aEJlbG93KHQuZ3gsIHQuZ3ksIGUsIG4pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIDQgPT09IGcgJiYgKF8gPSBoLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZi5faXNBbGlnbmVkV2l0aEJlbG93KHQuZ3gsIHQuZ3ksIGUsIG4pO1xuICAgICAgfSkpO1xuICAgIH1cbiAgICB2YXIgVCA9IGkuYm9hcmRXaWR0aCAvIDIsXG4gICAgICBDID0gaS5ib2FyZEhlaWdodCAvIDI7XG4gICAgaWYgKDMgPT09IGcpIHtcbiAgICAgIF8uc29ydChmdW5jdGlvbiAodCwgbykge1xuICAgICAgICB2YXIgaSA9IGYuX2lzQWxpZ25lZFdpdGhCZWxvdyh0Lmd4LCB0Lmd5LCBlLCBuKSA/IDEgOiAwLFxuICAgICAgICAgIHIgPSBmLl9pc0FsaWduZWRXaXRoQmVsb3coby5neCwgby5neSwgZSwgbikgPyAxIDogMDtcbiAgICAgICAgcmV0dXJuIHIgIT09IGkgPyByIC0gaSA6IG8uY292ZXJzICE9PSB0LmNvdmVycyA/IG8uY292ZXJzIC0gdC5jb3ZlcnMgOiBNYXRoLnBvdyh0Lmd4IC0gVCwgMikgKyBNYXRoLnBvdyh0Lmd5IC0gQywgMikgLSAoTWF0aC5wb3coby5neCAtIFQsIDIpICsgTWF0aC5wb3coby5neSAtIEMsIDIpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBfLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIHQuY292ZXJzICE9PSBlLmNvdmVycyA/IHQuY292ZXJzIC0gZS5jb3ZlcnMgOiBNYXRoLnBvdyhlLmd4IC0gVCwgMikgKyBNYXRoLnBvdyhlLmd5IC0gQywgMikgLSAoTWF0aC5wb3codC5neCAtIFQsIDIpICsgTWF0aC5wb3codC5neSAtIEMsIDIpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgYiA9IG5ldyBTZXQoKSxcbiAgICAgIEUgPSBmdW5jdGlvbiBFKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIGUgKyBcIixcIiArIHQ7XG4gICAgICB9O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBTID0gX192YWx1ZXMoXyksIEkgPSBTLm5leHQoKTsgIUkuZG9uZTsgSSA9IFMubmV4dCgpKSB7XG4gICAgICAgIHZhciB3ID0gSS52YWx1ZTtcbiAgICAgICAgaWYgKGQubGVuZ3RoID49IHQpIGJyZWFrO1xuICAgICAgICBpZiAoIWIuaGFzKEUody5neCwgdy5neSkpICYmIHRoaXMuX2NhblBsYWNlKHcuZ3gsIHcuZ3ksIGUsIG4pKSB7XG4gICAgICAgICAgdmFyIEIgPSBfX3JlYWQobCh3Lmd4LCB3Lmd5LCBpKSwgMiksXG4gICAgICAgICAgICB4ID0gQlswXSxcbiAgICAgICAgICAgIE0gPSBCWzFdO1xuICAgICAgICAgIGlmICgody5neCAhPT0geCB8fCB3Lmd5ICE9PSBNKSAmJiAhYi5oYXMoRSh4LCBNKSkgJiYgdGhpcy5fY2FuUGxhY2UoeCwgTSwgZSwgbikgJiYgISh0aGlzLl9jb3VudENvdmVycyh4LCBNLCBlLCBuKSA8IDEgfHwgZC5sZW5ndGggKyAyID4gdCkpIHtcbiAgICAgICAgICAgIHZhciBPID0gY3JlYXRlRmxvd1RpbGUobysrLCB3Lmd4LCB3Lmd5LCBlLCAwKTtcbiAgICAgICAgICAgIHRoaXMuX29jY3VweShPLCBuKTtcbiAgICAgICAgICAgIGQucHVzaChPKTtcbiAgICAgICAgICAgIGIuYWRkKEUody5neCwgdy5neSkpO1xuICAgICAgICAgICAgdmFyIEQgPSBjcmVhdGVGbG93VGlsZShvKyssIHgsIE0sIGUsIDApO1xuICAgICAgICAgICAgdGhpcy5fb2NjdXB5KEQsIG4pO1xuICAgICAgICAgICAgZC5wdXNoKEQpO1xuICAgICAgICAgICAgYi5hZGQoRSh4LCBNKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIEkgJiYgIUkuZG9uZSAmJiAodSA9IFMucmV0dXJuKSAmJiB1LmNhbGwoUyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYykgdGhyb3cgYy5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbGVzOiBkLFxuICAgICAgbmV4dElkOiBvXG4gICAgfTtcbiAgfVxuICBfYnVpbGRDcm9zc1RvcG9sb2d5KCkge1xuICAgIGZvciAodmFyIGUsIHQsIG8gPSB0aGlzLl9jZmcsIG4gPSAyICogdGhpcy5fYWN0dWFsUGFpcnMsIGkgPSBbXSwgYyA9IHt9LCB1ID0gMCwgcCA9IHRoaXMuX2Rpc3RyaWJ1dGVUaWxlc1RvTGF5ZXJzKG4sIG8ubWF4TGF5ZXJzKSwgZiA9IE1hdGguZmxvb3Ioby5ib2FyZFdpZHRoIC8gMikgLSAxIC0gKE1hdGguZmxvb3Ioby5ib2FyZFdpZHRoIC8gMikgLSAxKSAlIDIsIGQgPSBNYXRoLmZsb29yKG8uYm9hcmRIZWlnaHQgLyAyKSAtIDEgLSAoTWF0aC5mbG9vcihvLmJvYXJkSGVpZ2h0IC8gMikgLSAxKSAlIDIsIGggPSBwWzBdLCB5ID0gbmV3IFNldCgpLCBtID0gZnVuY3Rpb24gbShlLCB0KSB7XG4gICAgICAgIHJldHVybiBlICsgXCIsXCIgKyB0O1xuICAgICAgfSwgdiA9IHRoaXMuX3JuZy5uZXh0KCkgPCAwLjQsIGcgPSAyICsgTWF0aC5mbG9vcig0ICogdGhpcy5fcm5nLm5leHQoKSksIF8gPSAyICsgTWF0aC5mbG9vcig0ICogdGhpcy5fcm5nLm5leHQoKSksIFQgPSBmdW5jdGlvbiBUKGUsIHQpIHtcbiAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICB2YXIgbyA9IGUgLSBmLFxuICAgICAgICAgICAgbiA9IHQgLSBkO1xuICAgICAgICAgIHJldHVybiBNYXRoLmFicyhvIC0gbikgPD0gMS40MTQgKiBnIHx8IE1hdGguYWJzKG8gKyBuKSA8PSAxLjQxNCAqIF87XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBNYXRoLmFicyhlIC0gZiksXG4gICAgICAgICAgciA9IE1hdGguYWJzKHQgLSBkKTtcbiAgICAgICAgcmV0dXJuIGkgPD0gZyB8fCByIDw9IF87XG4gICAgICB9LCBDID0gdiA/IFtbMiwgMl0sIFsyLCAtMl0sIFstMiwgMl0sIFstMiwgLTJdLCBbMiwgMF0sIFstMiwgMF0sIFswLCAyXSwgWzAsIC0yXV0gOiBbWzIsIDBdLCBbLTIsIDBdLCBbMCwgMl0sIFswLCAtMl1dLCBiID0gW1tmLCBkXV07IGkubGVuZ3RoIDwgaCAmJiBiLmxlbmd0aCA+IDA7KSB7XG4gICAgICB0aGlzLl9ybmcuc2h1ZmZsZShiKTtcbiAgICAgIGZvciAodmFyIEUgPSBmYWxzZSwgUyA9IDA7IFMgPCBiLmxlbmd0aDsgUysrKSB7XG4gICAgICAgIHZhciBJID0gX19yZWFkKGJbU10sIDIpLFxuICAgICAgICAgIHcgPSBJWzBdLFxuICAgICAgICAgIEIgPSBJWzFdO1xuICAgICAgICB0aGlzLl9ybmcuc2h1ZmZsZShDKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciB4ID0gKGUgPSB2b2lkIDAsIF9fdmFsdWVzKEMpKSwgTSA9IHgubmV4dCgpOyAhTS5kb25lOyBNID0geC5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBPID0gX19yZWFkKE0udmFsdWUsIDIpLFxuICAgICAgICAgICAgICBEID0gT1swXSxcbiAgICAgICAgICAgICAgUCA9IE9bMV0sXG4gICAgICAgICAgICAgIEEgPSB3ICsgRCxcbiAgICAgICAgICAgICAgUiA9IEIgKyBQO1xuICAgICAgICAgICAgaWYgKFQoQSwgUikpIHtcbiAgICAgICAgICAgICAgdmFyIE4gPSBfX3JlYWQodGhpcy5fbWlycm9yKEEsIFIsIG8pLCAyKSxcbiAgICAgICAgICAgICAgICBqID0gTlswXSxcbiAgICAgICAgICAgICAgICBrID0gTlsxXTtcbiAgICAgICAgICAgICAgaWYgKFQoaiwgaykgJiYgIXkuaGFzKG0oQSwgUikpICYmICF5LmhhcyhtKGosIGspKSAmJiAhKEEgPCAwIHx8IFIgPCAwIHx8IEEgKyAxID49IG8uYm9hcmRXaWR0aCB8fCBSICsgMSA+PSBvLmJvYXJkSGVpZ2h0KSAmJiAhKGogPCAwIHx8IGsgPCAwIHx8IGogKyAxID49IG8uYm9hcmRXaWR0aCB8fCBrICsgMSA+PSBvLmJvYXJkSGVpZ2h0KSAmJiB0aGlzLl9jYW5QbGFjZShBLCBSLCAwLCBjKSAmJiB0aGlzLl9jYW5QbGFjZShqLCBrLCAwLCBjKSAmJiAhKEEgPT09IGogJiYgUiA9PT0gayB8fCBpLmxlbmd0aCArIDIgPiBoKSkge1xuICAgICAgICAgICAgICAgIHZhciBMID0gY3JlYXRlRmxvd1RpbGUodSsrLCBBLCBSLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vY2N1cHkoTCwgYyk7XG4gICAgICAgICAgICAgICAgaS5wdXNoKEwpO1xuICAgICAgICAgICAgICAgIHkuYWRkKG0oQSwgUikpO1xuICAgICAgICAgICAgICAgIGIucHVzaChbQSwgUl0pO1xuICAgICAgICAgICAgICAgIHZhciBHID0gY3JlYXRlRmxvd1RpbGUodSsrLCBqLCBrLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vY2N1cHkoRywgYyk7XG4gICAgICAgICAgICAgICAgaS5wdXNoKEcpO1xuICAgICAgICAgICAgICAgIHkuYWRkKG0oaiwgaykpO1xuICAgICAgICAgICAgICAgIGIucHVzaChbaiwga10pO1xuICAgICAgICAgICAgICAgIEUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoICh0KSB7XG4gICAgICAgICAgZSA9IHtcbiAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgTSAmJiAhTS5kb25lICYmICh0ID0geC5yZXR1cm4pICYmIHQuY2FsbCh4KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChFKSBicmVhaztcbiAgICAgIH1cbiAgICAgIEUgfHwgYi5zaGlmdCgpO1xuICAgIH1cbiAgICB2YXIgRiA9IGggLSBpLmxlbmd0aDtcbiAgICBGID4gMCAmJiBwLmxlbmd0aCA+IDEgJiYgKHBbMV0gKz0gRik7XG4gICAgZm9yICh2YXIgViA9IDE7IFYgPCBwLmxlbmd0aDsgVisrKSBpZiAoIShwW1ZdIDw9IDApKSB7XG4gICAgICB2YXIgVSA9IHRoaXMuX2dyb3dVcHBlckxheWVyKFYsIHBbVl0sIHUsIGMsIG8pO1xuICAgICAgaS5wdXNoLmFwcGx5KGksIFsuLi5VLnRpbGVzXSk7XG4gICAgICB1ID0gVS5uZXh0SWQ7XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9XG4gIF9idWlsZE11bHRpUGVha1RvcG9sb2d5KCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8sXG4gICAgICBuID0gdGhpcy5fY2ZnLFxuICAgICAgaSA9IDIgKiB0aGlzLl9hY3R1YWxQYWlycyxcbiAgICAgIGMgPSBbXSxcbiAgICAgIHUgPSB7fSxcbiAgICAgIHAgPSAwLFxuICAgICAgZiA9IHRoaXMuX2Rpc3RyaWJ1dGVUaWxlc1RvTGF5ZXJzKGksIG4ubWF4TGF5ZXJzKSxcbiAgICAgIGQgPSBmWzBdLFxuICAgICAgaCA9IHRoaXMuX3JuZy5uZXh0SW50KDIsIDQpLFxuICAgICAgeSA9IE1hdGguZmxvb3Iobi5ib2FyZFdpZHRoIC8gMiksXG4gICAgICBtID0gTWF0aC5mbG9vcihuLmJvYXJkSGVpZ2h0IC8gMiksXG4gICAgICB2ID0gZnVuY3Rpb24gdihlKSB7XG4gICAgICAgIHJldHVybiBlIC0gZSAlIDI7XG4gICAgICB9O1xuICAgIG8gPSAyID09PSBoID8gW1t2KE1hdGguZmxvb3IoMC40ICogeSkpLCB2KG0pXSwgW3YoTWF0aC5mbG9vcigxLjYgKiB5KSksIHYobSldXSA6IDMgPT09IGggPyBbW3YoeSksIHYoTWF0aC5mbG9vcigwLjM1ICogbSkpXSwgW3YoTWF0aC5mbG9vcigwLjQgKiB5KSksIHYoTWF0aC5mbG9vcigxLjMgKiBtKSldLCBbdihNYXRoLmZsb29yKDEuNiAqIHkpKSwgdihNYXRoLmZsb29yKDEuMyAqIG0pKV1dIDogW1t2KE1hdGguZmxvb3IoMC40ICogeSkpLCB2KE1hdGguZmxvb3IoMC40ICogbSkpXSwgW3YoTWF0aC5mbG9vcigxLjYgKiB5KSksIHYoTWF0aC5mbG9vcigwLjQgKiBtKSldLCBbdihNYXRoLmZsb29yKDAuNCAqIHkpKSwgdihNYXRoLmZsb29yKDEuNiAqIG0pKV0sIFt2KE1hdGguZmxvb3IoMS42ICogeSkpLCB2KE1hdGguZmxvb3IoMS42ICogbSkpXV07XG4gICAgZm9yICh2YXIgZyA9IG5ldyBTZXQoKSwgXyA9IGZ1bmN0aW9uIF8oZSwgdCkge1xuICAgICAgICByZXR1cm4gZSArIFwiLFwiICsgdDtcbiAgICAgIH0sIFQgPSBbWzIsIDBdLCBbMCwgMl0sIFstMiwgMF0sIFswLCAtMl0sIFsyLCAyXSwgWzIsIC0yXSwgWy0yLCAyXSwgWy0yLCAtMl1dLCBDID0gby5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIFtlXTtcbiAgICAgIH0pOyBjLmxlbmd0aCA8IGQ7KSB7XG4gICAgICBmb3IgKHZhciBiID0gZmFsc2UsIEUgPSAwOyBFIDwgQy5sZW5ndGggJiYgIShjLmxlbmd0aCA+PSBkKTsgRSsrKSB7XG4gICAgICAgIHZhciBTID0gQ1tFXTtcbiAgICAgICAgaWYgKDAgIT09IFMubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIEkgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9ybmcuc2h1ZmZsZShTKTtcbiAgICAgICAgICBmb3IgKHZhciB3ID0gMDsgdyA8IFMubGVuZ3RoICYmIHcgPCAyMDsgdysrKSB7XG4gICAgICAgICAgICB2YXIgQiA9IF9fcmVhZChTW3ddLCAyKSxcbiAgICAgICAgICAgICAgeCA9IEJbMF0sXG4gICAgICAgICAgICAgIE0gPSBCWzFdO1xuICAgICAgICAgICAgdGhpcy5fcm5nLnNodWZmbGUoVCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBPID0gKGUgPSB2b2lkIDAsIF9fdmFsdWVzKFQpKSwgRCA9IE8ubmV4dCgpOyAhRC5kb25lOyBEID0gTy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgUCA9IF9fcmVhZChELnZhbHVlLCAyKSxcbiAgICAgICAgICAgICAgICAgIEEgPSBQWzBdLFxuICAgICAgICAgICAgICAgICAgUiA9IFBbMV0sXG4gICAgICAgICAgICAgICAgICBOID0geCArIEEsXG4gICAgICAgICAgICAgICAgICBqID0gTSArIFIsXG4gICAgICAgICAgICAgICAgICBrID0gX19yZWFkKHRoaXMuX21pcnJvcihOLCBqLCBuKSwgMiksXG4gICAgICAgICAgICAgICAgICBMID0ga1swXSxcbiAgICAgICAgICAgICAgICAgIEcgPSBrWzFdO1xuICAgICAgICAgICAgICAgIGlmICghZy5oYXMoXyhOLCBqKSkgJiYgIShOIDwgMCB8fCBqIDwgMCB8fCBOICsgMSA+PSBuLmJvYXJkV2lkdGggfHwgaiArIDEgPj0gbi5ib2FyZEhlaWdodCkgJiYgdGhpcy5fY2FuUGxhY2UoTiwgaiwgMCwgdSkgJiYgKE4gIT09IEwgfHwgaiAhPT0gRykgJiYgIWcuaGFzKF8oTCwgRykpICYmICEoTCA8IDAgfHwgRyA8IDAgfHwgTCArIDEgPj0gbi5ib2FyZFdpZHRoIHx8IEcgKyAxID49IG4uYm9hcmRIZWlnaHQpICYmIHRoaXMuX2NhblBsYWNlKEwsIEcsIDAsIHUpICYmICEoYy5sZW5ndGggKyAyID4gZCkpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBGID0gY3JlYXRlRmxvd1RpbGUocCsrLCBOLCBqLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX29jY3VweShGLCB1KTtcbiAgICAgICAgICAgICAgICAgIGMucHVzaChGKTtcbiAgICAgICAgICAgICAgICAgIGcuYWRkKF8oTiwgaikpO1xuICAgICAgICAgICAgICAgICAgUy5wdXNoKFtOLCBqXSk7XG4gICAgICAgICAgICAgICAgICB2YXIgViA9IGNyZWF0ZUZsb3dUaWxlKHArKywgTCwgRywgMCwgMCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLl9vY2N1cHkoViwgdSk7XG4gICAgICAgICAgICAgICAgICBjLnB1c2goVik7XG4gICAgICAgICAgICAgICAgICBnLmFkZChfKEwsIEcpKTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIFUgPSBFLCBIID0gSW5maW5pdHksIFcgPSAwOyBXIDwgby5sZW5ndGg7IFcrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeiA9IE1hdGgucG93KEwgLSBvW1ddWzBdLCAyKSArIE1hdGgucG93KEcgLSBvW1ddWzFdLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHogPCBIKSB7XG4gICAgICAgICAgICAgICAgICAgICAgSCA9IHo7XG4gICAgICAgICAgICAgICAgICAgICAgVSA9IFc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIENbVV0ucHVzaChbTCwgR10pO1xuICAgICAgICAgICAgICAgICAgSSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBiID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIEQgJiYgIUQuZG9uZSAmJiAodCA9IE8ucmV0dXJuKSAmJiB0LmNhbGwoTyk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChJKSBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgIUkgJiYgUy5sZW5ndGggPiA4ICYmIFMuc3BsaWNlKDAsIDMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWIpIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKHZhciBZID0gMTsgWSA8IGYubGVuZ3RoOyBZKyspIGlmICghKGZbWV0gPD0gMCkpIHtcbiAgICAgIHZhciBLID0gdGhpcy5fZ3Jvd1VwcGVyTGF5ZXIoWSwgZltZXSwgcCwgdSwgbik7XG4gICAgICBjLnB1c2guYXBwbHkoYywgWy4uLksudGlsZXNdKTtcbiAgICAgIHAgPSBLLm5leHRJZDtcbiAgICB9XG4gICAgcmV0dXJuIGM7XG4gIH1cbiAgX2J1aWxkQ2hlY2tlcmJvYXJkVG9wb2xvZ3koKSB7XG4gICAgZm9yICh2YXIgZSwgdCwgbyA9IHRoaXMuX2NmZywgbiA9IDIgKiB0aGlzLl9hY3R1YWxQYWlycywgaSA9IFtdLCBjID0ge30sIHUgPSAwLCBwID0gdGhpcy5fZGlzdHJpYnV0ZVRpbGVzVG9MYXllcnMobiwgby5tYXhMYXllcnMpLCBmID0gcFswXSwgZCA9IFtdLCBoID0gMDsgaCA8PSBvLmJvYXJkV2lkdGggLSAyOyBoICs9IDIpIGZvciAodmFyIHkgPSAwOyB5IDw9IG8uYm9hcmRIZWlnaHQgLSAyOyB5ICs9IDIpIGQucHVzaChbaCwgeV0pO1xuICAgIHRoaXMuX3JuZy5zaHVmZmxlKGQpO1xuICAgIHZhciBtID0gbmV3IFNldCgpLFxuICAgICAgdiA9IGZ1bmN0aW9uIHYoZSwgdCkge1xuICAgICAgICByZXR1cm4gZSArIFwiLFwiICsgdDtcbiAgICAgIH0sXG4gICAgICBnID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgXyA9IF9fdmFsdWVzKGQpLCBUID0gXy5uZXh0KCk7ICFULmRvbmU7IFQgPSBfLm5leHQoKSkge1xuICAgICAgICB2YXIgQyA9IF9fcmVhZChULnZhbHVlLCAyKTtcbiAgICAgICAgaCA9IENbMF0sIHkgPSBDWzFdO1xuICAgICAgICBpZiAoZyA+PSBmKSBicmVhaztcbiAgICAgICAgaWYgKCFtLmhhcyh2KGgsIHkpKSAmJiB0aGlzLl9jYW5QbGFjZShoLCB5LCAwLCBjKSkge1xuICAgICAgICAgIHZhciBiID0gX19yZWFkKHRoaXMuX21pcnJvcihoLCB5LCBvKSwgMiksXG4gICAgICAgICAgICBFID0gYlswXSxcbiAgICAgICAgICAgIFMgPSBiWzFdO1xuICAgICAgICAgIGlmICgoaCAhPT0gRSB8fCB5ICE9PSBTKSAmJiAhbS5oYXModihFLCBTKSkgJiYgdGhpcy5fY2FuUGxhY2UoRSwgUywgMCwgYykgJiYgIShnICsgMiA+IGYpKSB7XG4gICAgICAgICAgICB2YXIgSSA9IGNyZWF0ZUZsb3dUaWxlKHUrKywgaCwgeSwgMCwgMCk7XG4gICAgICAgICAgICB0aGlzLl9vY2N1cHkoSSwgYyk7XG4gICAgICAgICAgICBpLnB1c2goSSk7XG4gICAgICAgICAgICBtLmFkZCh2KGgsIHkpKTtcbiAgICAgICAgICAgIHZhciB3ID0gY3JlYXRlRmxvd1RpbGUodSsrLCBFLCBTLCAwLCAwKTtcbiAgICAgICAgICAgIHRoaXMuX29jY3VweSh3LCBjKTtcbiAgICAgICAgICAgIGkucHVzaCh3KTtcbiAgICAgICAgICAgIG0uYWRkKHYoRSwgUykpO1xuICAgICAgICAgICAgZyArPSAyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBUICYmICFULmRvbmUgJiYgKHQgPSBfLnJldHVybikgJiYgdC5jYWxsKF8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIEIgPSAxOyBCIDwgcC5sZW5ndGg7IEIrKykgaWYgKCEocFtCXSA8PSAwKSkge1xuICAgICAgdmFyIHggPSB0aGlzLl9ncm93VXBwZXJMYXllcihCLCBwW0JdLCB1LCBjLCBvKTtcbiAgICAgIGkucHVzaC5hcHBseShpLCBbLi4ueC50aWxlc10pO1xuICAgICAgdSA9IHgubmV4dElkO1xuICAgIH1cbiAgICBpZiAoaS5sZW5ndGggJSAyICE9IDAgJiYgaS5sZW5ndGggPiAwKSB7XG4gICAgICBpW2kubGVuZ3RoIC0gMV0uaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgaS5wb3AoKTtcbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgX2J1aWxkU3BpcmFsVG9wb2xvZ3koKSB7XG4gICAgZm9yICh2YXIgZSA9IHRoaXMuX2NmZywgdCA9IDIgKiB0aGlzLl9hY3R1YWxQYWlycywgbyA9IFtdLCBuID0ge30sIGkgPSAwLCBhID0gdGhpcy5fZGlzdHJpYnV0ZVRpbGVzVG9MYXllcnModCwgZS5tYXhMYXllcnMpLCBjID0gdGhpcy5fZ2VuZXJhdGVTcGlyYWxQYXRoKGUpLCB1ID0gYVswXSwgcCA9IG5ldyBTZXQoKSwgZiA9IGZ1bmN0aW9uIGYoZSwgdCkge1xuICAgICAgICByZXR1cm4gZSArIFwiLFwiICsgdDtcbiAgICAgIH0sIGQgPSAwOyBvLmxlbmd0aCA8IHUgJiYgZCA8IGMubGVuZ3RoOykge1xuICAgICAgdmFyIGggPSBfX3JlYWQoY1tkKytdLCAyKSxcbiAgICAgICAgeSA9IGhbMF0sXG4gICAgICAgIG0gPSBoWzFdO1xuICAgICAgaWYgKCFwLmhhcyhmKHksIG0pKSAmJiB0aGlzLl9jYW5QbGFjZSh5LCBtLCAwLCBuKSkge1xuICAgICAgICB2YXIgdiA9IF9fcmVhZCh0aGlzLl9taXJyb3IoeSwgbSwgZSksIDIpLFxuICAgICAgICAgIGcgPSB2WzBdLFxuICAgICAgICAgIF8gPSB2WzFdO1xuICAgICAgICBpZiAoKHkgIT09IGcgfHwgbSAhPT0gXykgJiYgIXAuaGFzKGYoZywgXykpICYmIHRoaXMuX2NhblBsYWNlKGcsIF8sIDAsIG4pICYmICEoby5sZW5ndGggKyAyID4gdSkpIHtcbiAgICAgICAgICB2YXIgVCA9IGNyZWF0ZUZsb3dUaWxlKGkrKywgeSwgbSwgMCwgMCk7XG4gICAgICAgICAgdGhpcy5fb2NjdXB5KFQsIG4pO1xuICAgICAgICAgIG8ucHVzaChUKTtcbiAgICAgICAgICBwLmFkZChmKHksIG0pKTtcbiAgICAgICAgICB2YXIgQyA9IGNyZWF0ZUZsb3dUaWxlKGkrKywgZywgXywgMCwgMCk7XG4gICAgICAgICAgdGhpcy5fb2NjdXB5KEMsIG4pO1xuICAgICAgICAgIG8ucHVzaChDKTtcbiAgICAgICAgICBwLmFkZChmKGcsIF8pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBiID0gMTsgYiA8IGEubGVuZ3RoOyBiKyspIGlmICghKGFbYl0gPD0gMCkpIHtcbiAgICAgIHZhciBFID0gdGhpcy5fZ3Jvd1VwcGVyTGF5ZXIoYiwgYVtiXSwgaSwgbiwgZSk7XG4gICAgICBvLnB1c2guYXBwbHkobywgWy4uLkUudGlsZXNdKTtcbiAgICAgIGkgPSBFLm5leHRJZDtcbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgX2dlbmVyYXRlU3BpcmFsUGF0aChlKSB7XG4gICAgZm9yICh2YXIgdCA9IFtdLCBvID0gMCwgbiA9IGUuYm9hcmRXaWR0aCAtIDIsIGkgPSAwLCByID0gZS5ib2FyZEhlaWdodCAtIDI7IG8gPD0gbiAmJiBpIDw9IHI7KSB7XG4gICAgICBmb3IgKHZhciBhID0gbzsgYSA8PSBuOyBhICs9IDIpIHQucHVzaChbYSwgaV0pO1xuICAgICAgZm9yICh2YXIgbCA9IGkgKz0gMjsgbCA8PSByOyBsICs9IDIpIHQucHVzaChbbiwgbF0pO1xuICAgICAgbiAtPSAyO1xuICAgICAgaWYgKGkgPD0gcikge1xuICAgICAgICBmb3IgKGEgPSBuOyBhID49IG87IGEgLT0gMikgdC5wdXNoKFthLCByXSk7XG4gICAgICAgIHIgLT0gMjtcbiAgICAgIH1cbiAgICAgIGlmIChvIDw9IG4pIHtcbiAgICAgICAgZm9yIChsID0gcjsgbCA+PSBpOyBsIC09IDIpIHQucHVzaChbbywgbF0pO1xuICAgICAgICBvICs9IDI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIF9idWlsZEhvdXJnbGFzc1RvcG9sb2d5KCkge1xuICAgIGZvciAodmFyIGUsIHQsIG8gPSB0aGlzLl9jZmcsIG4gPSAyICogdGhpcy5fYWN0dWFsUGFpcnMsIGkgPSBbXSwgYyA9IHt9LCB1ID0gMCwgcCA9IHRoaXMuX2Rpc3RyaWJ1dGVUaWxlc1RvTGF5ZXJzKG4sIG8ubWF4TGF5ZXJzKSwgZiA9IHBbMF0sIGQgPSBNYXRoLmZsb29yKG8uYm9hcmRXaWR0aCAvIDIpIC0gMSAtIChNYXRoLmZsb29yKG8uYm9hcmRXaWR0aCAvIDIpIC0gMSkgJSAyLCBoID0gTWF0aC5mbG9vcihvLmJvYXJkSGVpZ2h0IC8gMikgLSAxIC0gKE1hdGguZmxvb3Ioby5ib2FyZEhlaWdodCAvIDIpIC0gMSkgJSAyLCB5ID0gby5ib2FyZFdpZHRoIC8gMiwgbSA9IG8uYm9hcmRIZWlnaHQgLyAyLCB2ID0gdGhpcy5fcm5nLm5leHQoKSA8IDAuNSwgZyA9IDAuMTUgKyAwLjUgKiB0aGlzLl9ybmcubmV4dCgpLCBfID0gMC41ICsgMiAqIHRoaXMuX3JuZy5uZXh0KCksIFQgPSB2ID8geSA6IG0sIEMgPSB2ID8gbSA6IHksIGIgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKEMgKiBnKSksIEUgPSBmdW5jdGlvbiBFKGUsIHQpIHtcbiAgICAgICAgdmFyIG8gPSB2ID8gTWF0aC5hYnMoZSArIDEgLSB5KSAvIE1hdGgubWF4KFQsIDEpIDogTWF0aC5hYnModCArIDEgLSBtKSAvIE1hdGgubWF4KFQsIDEpO1xuICAgICAgICByZXR1cm4gKHYgPyBNYXRoLmFicyh0ICsgMSAtIG0pIDogTWF0aC5hYnMoZSArIDEgLSB5KSkgPD0gYiArIChDIC0gYikgKiBNYXRoLnBvdyhNYXRoLm1pbigxLCBvKSwgXyk7XG4gICAgICB9LCBTID0gbmV3IFNldCgpLCBJID0gZnVuY3Rpb24gSShlLCB0KSB7XG4gICAgICAgIHJldHVybiBlICsgXCIsXCIgKyB0O1xuICAgICAgfSwgdyA9IFtbMiwgMF0sIFstMiwgMF0sIFswLCAyXSwgWzAsIC0yXSwgWzIsIDJdLCBbMiwgLTJdLCBbLTIsIDJdLCBbLTIsIC0yXV0sIEIgPSBbW2QsIGhdXTsgaS5sZW5ndGggPCBmICYmIEIubGVuZ3RoID4gMDspIHtcbiAgICAgIHRoaXMuX3JuZy5zaHVmZmxlKEIpO1xuICAgICAgZm9yICh2YXIgeCA9IGZhbHNlLCBNID0gMDsgTSA8IEIubGVuZ3RoOyBNKyspIHtcbiAgICAgICAgdmFyIE8gPSBfX3JlYWQoQltNXSwgMiksXG4gICAgICAgICAgRCA9IE9bMF0sXG4gICAgICAgICAgUCA9IE9bMV07XG4gICAgICAgIHRoaXMuX3JuZy5zaHVmZmxlKHcpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIEEgPSAoZSA9IHZvaWQgMCwgX192YWx1ZXModykpLCBSID0gQS5uZXh0KCk7ICFSLmRvbmU7IFIgPSBBLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIE4gPSBfX3JlYWQoUi52YWx1ZSwgMiksXG4gICAgICAgICAgICAgIGogPSBOWzBdLFxuICAgICAgICAgICAgICBrID0gTlsxXSxcbiAgICAgICAgICAgICAgTCA9IEQgKyBqLFxuICAgICAgICAgICAgICBHID0gUCArIGs7XG4gICAgICAgICAgICBpZiAoRShMLCBHKSkge1xuICAgICAgICAgICAgICB2YXIgRiA9IF9fcmVhZCh0aGlzLl9taXJyb3IoTCwgRywgbyksIDIpLFxuICAgICAgICAgICAgICAgIFYgPSBGWzBdLFxuICAgICAgICAgICAgICAgIFUgPSBGWzFdO1xuICAgICAgICAgICAgICBpZiAoRShWLCBVKSAmJiAhUy5oYXMoSShMLCBHKSkgJiYgIVMuaGFzKEkoViwgVSkpICYmICEoTCA8IDAgfHwgRyA8IDAgfHwgTCArIDEgPj0gby5ib2FyZFdpZHRoIHx8IEcgKyAxID49IG8uYm9hcmRIZWlnaHQpICYmICEoViA8IDAgfHwgVSA8IDAgfHwgViArIDEgPj0gby5ib2FyZFdpZHRoIHx8IFUgKyAxID49IG8uYm9hcmRIZWlnaHQpICYmIHRoaXMuX2NhblBsYWNlKEwsIEcsIDAsIGMpICYmIHRoaXMuX2NhblBsYWNlKFYsIFUsIDAsIGMpICYmICEoTCA9PT0gViAmJiBHID09PSBVIHx8IGkubGVuZ3RoICsgMiA+IGYpKSB7XG4gICAgICAgICAgICAgICAgdmFyIEggPSBjcmVhdGVGbG93VGlsZSh1KyssIEwsIEcsIDAsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMuX29jY3VweShILCBjKTtcbiAgICAgICAgICAgICAgICBpLnB1c2goSCk7XG4gICAgICAgICAgICAgICAgUy5hZGQoSShMLCBHKSk7XG4gICAgICAgICAgICAgICAgQi5wdXNoKFtMLCBHXSk7XG4gICAgICAgICAgICAgICAgdmFyIFcgPSBjcmVhdGVGbG93VGlsZSh1KyssIFYsIFUsIDAsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMuX29jY3VweShXLCBjKTtcbiAgICAgICAgICAgICAgICBpLnB1c2goVyk7XG4gICAgICAgICAgICAgICAgUy5hZGQoSShWLCBVKSk7XG4gICAgICAgICAgICAgICAgQi5wdXNoKFtWLCBVXSk7XG4gICAgICAgICAgICAgICAgeCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBSICYmICFSLmRvbmUgJiYgKHQgPSBBLnJldHVybikgJiYgdC5jYWxsKEEpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHgpIGJyZWFrO1xuICAgICAgfVxuICAgICAgeCB8fCBCLnNoaWZ0KCk7XG4gICAgfVxuICAgIHZhciB6ID0gZiAtIGkubGVuZ3RoO1xuICAgIHogPiAwICYmIHAubGVuZ3RoID4gMSAmJiAocFsxXSArPSB6KTtcbiAgICBmb3IgKHZhciBZID0gMTsgWSA8IHAubGVuZ3RoOyBZKyspIGlmICghKHBbWV0gPD0gMCkpIHtcbiAgICAgIHZhciBLID0gdGhpcy5fZ3Jvd1VwcGVyTGF5ZXIoWSwgcFtZXSwgdSwgYywgbyk7XG4gICAgICBpLnB1c2guYXBwbHkoaSwgWy4uLksudGlsZXNdKTtcbiAgICAgIHUgPSBLLm5leHRJZDtcbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgX2Rpc3RyaWJ1dGVUaWxlc1RvTGF5ZXJzKGUsIHQpIHtcbiAgICBmb3IgKHZhciBvLCBuID0gbnVsbCAhPT0gKG8gPSB0aGlzLl9jZmcubGF5ZXJEZWNheUV4cG9uZW50KSAmJiB2b2lkIDAgIT09IG8gPyBvIDogMiwgaSA9IFtdLCByID0gMDsgciA8IHQ7IHIrKykgaS5wdXNoKE1hdGgubWF4KDEsIE1hdGgucG93KHQgKyAxIC0gciwgbikpKTtcbiAgICB2YXIgYSA9IGkucmVkdWNlKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiBlICsgdDtcbiAgICAgIH0sIDApLFxuICAgICAgbCA9IFtdLFxuICAgICAgcyA9IGU7XG4gICAgZm9yIChyID0gMDsgciA8IGkubGVuZ3RoOyByKyspIHtcbiAgICAgIHZhciBjID0gdm9pZCAwO1xuICAgICAgaWYgKHIgPT09IGkubGVuZ3RoIC0gMSkgYyA9IHM7ZWxzZSB7XG4gICAgICAgIGMgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGUgKiBpW3JdIC8gYSkpO1xuICAgICAgICBjIC09IGMgJSAyO1xuICAgICAgfVxuICAgICAgaWYgKChzIC09IGMpIDwgMCkge1xuICAgICAgICBjICs9IHM7XG4gICAgICAgIHMgPSAwO1xuICAgICAgfVxuICAgICAgbC5wdXNoKE1hdGgubWF4KDAsIGMpKTtcbiAgICB9XG4gICAgZm9yICg7IGwucmVkdWNlKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gZSArIHQ7XG4gICAgfSwgMCkgPCBlOykgbFswXSArPSAyO1xuICAgIGZvciAoOyBsLnJlZHVjZShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIGUgKyB0O1xuICAgIH0sIDApID4gZTspIGZvciAociA9IGwubGVuZ3RoIC0gMTsgciA+PSAwOyByLS0pIGlmIChsW3JdID49IDIpIHtcbiAgICAgIGxbcl0gLT0gMjtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbDtcbiAgfVxuICBfb2NjdXB5KGUsIHQpIHtcbiAgICB2YXIgbyA9IGUuZ3JpZFgsXG4gICAgICBuID0gZS5ncmlkWSxcbiAgICAgIGkgPSBlLmxheWVyO1xuICAgIHRbcChvLCBuLCBpKV0gPSBlLmlkO1xuICAgIHRbcChvICsgMSwgbiwgaSldID0gZS5pZDtcbiAgICB0W3AobywgbiArIDEsIGkpXSA9IGUuaWQ7XG4gICAgdFtwKG8gKyAxLCBuICsgMSwgaSldID0gZS5pZDtcbiAgfVxuICBfY2FuUGxhY2UoZSwgdCwgbywgbikge1xuICAgIHZhciBpLFxuICAgICAgcixcbiAgICAgIGwgPSBbcChlLCB0LCBvKSwgcChlICsgMSwgdCwgbyksIHAoZSwgdCArIDEsIG8pLCBwKGUgKyAxLCB0ICsgMSwgbyldO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBzID0gX192YWx1ZXMobCksIGMgPSBzLm5leHQoKTsgIWMuZG9uZTsgYyA9IHMubmV4dCgpKSBpZiAoYy52YWx1ZSBpbiBuKSByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAociA9IHMucmV0dXJuKSAmJiByLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG8gPiAwKSB7XG4gICAgICB2YXIgdSA9IFtwKGUsIHQsIG8gLSAxKSwgcChlICsgMSwgdCwgbyAtIDEpLCBwKGUsIHQgKyAxLCBvIC0gMSksIHAoZSArIDEsIHQgKyAxLCBvIC0gMSldO1xuICAgICAgcmV0dXJuIHRoaXMuX2NmZy5ub0Zsb2F0aW5nID8gdS5ldmVyeShmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZSBpbiBuO1xuICAgICAgfSkgOiB1LnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW4gbjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBfY291bnRDb3ZlcnMoZSwgdCwgbywgbikge1xuICAgIHZhciBpID0gMDtcbiAgICBpZiAobyA+IDApIGZvciAodmFyIHIgPSAtMTsgciA8PSAyOyByKyspIGZvciAodmFyIGEgPSAtMTsgYSA8PSAyOyBhKyspIHAoZSArIHIsIHQgKyBhLCBvIC0gMSkgaW4gbiAmJiBpKys7XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgX2lzQWxpZ25lZFdpdGhCZWxvdyhlLCB0LCBvLCBuKSB7XG4gICAgaWYgKG8gPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBpID0gcChlLCB0LCBvIC0gMSk7XG4gICAgaWYgKCEoaSBpbiBuKSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciByID0gbltpXTtcbiAgICByZXR1cm4gbltwKGUgKyAxLCB0LCBvIC0gMSldID09PSByICYmIG5bcChlLCB0ICsgMSwgbyAtIDEpXSA9PT0gciAmJiBuW3AoZSArIDEsIHQgKyAxLCBvIC0gMSldID09PSByO1xuICB9XG4gIF9hc3NpZ25TdHJhdGVnaWNDYXJkSWRzKGUsIHQpIHtcbiAgICB2YXIgbywgbiwgaSwgciwgbCwgcywgdSwgcCwgZiwgZCwgaCwgeSwgbSwgdiwgZywgXztcbiAgICB0aGlzLl9wdXp6bGVDb3JlcyA9IFtdO1xuICAgIHRoaXMuX2hhbXN0ZXJzID0gW107XG4gICAgZm9yICh2YXIgVCA9IFtdLCBDID0gdGhpcy5fY2ZnLm1pbkNhcmRJZCwgYiA9IHRoaXMuX2NmZy5tYXhDYXJkSWQsIEUgPSBuZXcgU2V0KHRoaXMuX2NmZy5leGNsdWRlZENhcmRJZHMgfHwgYyksIFMgPSBDOyBTIDw9IGI7IFMrKykgRS5oYXMoUykgfHwgVC5wdXNoKFMpO1xuICAgIHRoaXMuX3JuZy5zaHVmZmxlKFQpO1xuICAgIHZhciBJID0gbmV3IFNldCgpLFxuICAgICAgdyA9IDAsXG4gICAgICBCID0gZnVuY3Rpb24gQigpIHtcbiAgICAgICAgaWYgKHcgPj0gVC5sZW5ndGgpIHJldHVybiBUW3cgJSBULmxlbmd0aF07XG4gICAgICAgIHZhciBlID0gVFt3XTtcbiAgICAgICAgdysrO1xuICAgICAgICBJLmFkZChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9LFxuICAgICAgeCA9IDAsXG4gICAgICBNID0gZnVuY3Rpb24gTSgpIHtcbiAgICAgICAgdmFyIGUsXG4gICAgICAgICAgdCA9IDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBlID0gVFt4ICUgVC5sZW5ndGhdO1xuICAgICAgICAgIHgrKztcbiAgICAgICAgICB0Kys7XG4gICAgICAgIH0gd2hpbGUgKEkuaGFzKGUpICYmIHQgPCBULmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfSxcbiAgICAgIE8gPSBBcnJheS5mcm9tKHQua2V5cygpKS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiBlIC0gdDtcbiAgICAgIH0pLFxuICAgICAgRCA9IG5ldyBTZXQoKSxcbiAgICAgIFAgPSBPLmxlbmd0aDtcbiAgICB0aGlzLl9idWlsZFB1enpsZUNvcmVzKGUsIHQsIEQsIEIpO1xuICAgIHRoaXMuX2J1aWxkSGFtc3RlcnMoZSwgdCwgRCwgQiwgTyk7XG4gICAgdmFyIEEgPSBPLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuICh0LmdldChlKSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiAhRC5oYXMoZS5pZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgUiA9IF9fdmFsdWVzKEEpLCBOID0gUi5uZXh0KCk7ICFOLmRvbmU7IE4gPSBSLm5leHQoKSkge1xuICAgICAgICB2YXIgaiA9IE4udmFsdWU7XG4gICAgICAgIHRoaXMuX3JuZy5zaHVmZmxlKGopO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBOICYmICFOLmRvbmUgJiYgKG4gPSBSLnJldHVybikgJiYgbi5jYWxsKFIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBrID0gdGhpcy5fY2ZnLm1heExheWVycyxcbiAgICAgIEwgPSBudWxsICE9PSAobSA9IHRoaXMuX2NmZy5lYXN5UGFpckNvdW50KSAmJiB2b2lkIDAgIT09IG0gPyBtIDogTWF0aC5tYXgoMSwgNCAtIE1hdGguZmxvb3IoayAvIDIpKSxcbiAgICAgIEcgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBudWxsICE9PSAodiA9IHRoaXMuX2NmZy5jcm9zc0RlcHRoUmF0aW8pICYmIHZvaWQgMCAhPT0gdiA/IHYgOiAwLjYpKSxcbiAgICAgIEYgPSBudWxsICE9PSAoZyA9IHRoaXMuX2NmZy5jcm9zc0RlcHRoVHlwZSkgJiYgdm9pZCAwICE9PSBnID8gZyA6IDEsXG4gICAgICBWID0gTWF0aC5taW4oNCwgTWF0aC5tYXgoMSwgbnVsbCAhPT0gKF8gPSB0aGlzLl9jZmcuY3Jvc3NEZXB0aFNwYW4pICYmIHZvaWQgMCAhPT0gXyA/IF8gOiAxKSk7XG4gICAgaWYgKEFbMF0gJiYgQVswXS5sZW5ndGggPj0gNCkge1xuICAgICAgdmFyIFUgPSBBWzBdLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gIUQuaGFzKGUuaWQpO1xuICAgICAgfSk7XG4gICAgICBVLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgcmV0dXJuIDEwMCAqIGUuZ3JpZFkgKyBlLmdyaWRYIC0gKDEwMCAqIHQuZ3JpZFkgKyB0LmdyaWRYKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIEggPSBNYXRoLm1heCgwLCAxIC0gRyksXG4gICAgICAgIFcgPSBNYXRoLm1pbihNYXRoLm1heCgxLCBNYXRoLnJvdW5kKEwgKiBIKSksIE1hdGguZmxvb3IoVS5sZW5ndGggLyA0KSksXG4gICAgICAgIHogPSBNYXRoLmZsb29yKFUubGVuZ3RoIC8gMik7XG4gICAgICBmb3IgKFMgPSAwOyBTIDwgVyAmJiBTIDwgejsgUysrKSB7XG4gICAgICAgIHZhciBZID0gTSgpO1xuICAgICAgICBVW1NdLmNhcmRJZCA9IFk7XG4gICAgICAgIFVbUyArIHpdLmNhcmRJZCA9IFk7XG4gICAgICAgIEQuYWRkKFVbU10uaWQpO1xuICAgICAgICBELmFkZChVW1MgKyB6XS5pZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIEsgPSAwOyBLIDwgUDsgSysrKSB7XG4gICAgICB2YXIgSiA9IEFbS10uZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiAhRC5oYXMoZS5pZCk7XG4gICAgICB9KTtcbiAgICAgIGlmICgwICE9PSBKLmxlbmd0aCkge1xuICAgICAgICBpZiAoSyArIDEgPCBQKSB7XG4gICAgICAgICAgdmFyIFogPSAwID09PSBLID8gNCA6IDIsXG4gICAgICAgICAgICBYID0gTWF0aC5tYXgoMCwgSi5sZW5ndGggLSBaKSxcbiAgICAgICAgICAgIHEgPSBNYXRoLm1pbihNYXRoLnJvdW5kKEoubGVuZ3RoICogRyksIFgpO1xuICAgICAgICAgIGlmIChxID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fcm5nLnNodWZmbGUoSik7XG4gICAgICAgICAgICB2YXIgUSA9IDAsXG4gICAgICAgICAgICAgICQgPSBbXTtcbiAgICAgICAgICAgIGlmICgzID09PSBGKSBmb3IgKHZhciBlZSA9IFAgLSAxOyBlZSA+IEs7IGVlLS0pICQucHVzaChlZSk7ZWxzZSBpZiAoMiA9PT0gRikgZm9yIChlZSA9IE1hdGgubWluKEsgKyAyLCBQIC0gMSk7IGVlIDwgUDsgZWUrKykgJC5wdXNoKGVlKTtlbHNlIGZvciAoZWUgPSBLICsgMTsgZWUgPCBQOyBlZSsrKSAkLnB1c2goZWUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgdGUgPSAoaSA9IHZvaWQgMCwgX192YWx1ZXMoSikpLCBvZSA9IHRlLm5leHQoKTsgIW9lLmRvbmU7IG9lID0gdGUubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5lID0gb2UudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKFEgPj0gcSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgaWYgKCFELmhhcyhuZS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBpZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcmUgPSAobCA9IHZvaWQgMCwgX192YWx1ZXMoJCkpLCBhZSA9IHJlLm5leHQoKTsgIWFlLmRvbmU7IGFlID0gcmUubmV4dCgpKSBpZiAoQVtlZSA9IGFlLnZhbHVlXS5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFELmhhcyhlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZS5wdXNoKGVlKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaWUubGVuZ3RoID49IFYpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgYWUgJiYgIWFlLmRvbmUgJiYgKHMgPSByZS5yZXR1cm4pICYmIHMuY2FsbChyZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGwpIHRocm93IGwuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICgwID09PSBpZS5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgdmFyIGxlID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc2UgPSAwO1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgY2UgPSAodSA9IHZvaWQgMCwgX192YWx1ZXMoaWUpKSwgdWUgPSBjZS5uZXh0KCk7ICF1ZS5kb25lOyB1ZSA9IGNlLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgIGVlID0gdWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHBlID0gKGYgPSB2b2lkIDAsIF9fdmFsdWVzKEFbZWVdKSksIGZlID0gcGUubmV4dCgpOyAhZmUuZG9uZTsgZmUgPSBwZS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlID0gZmUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghRC5oYXMoZGUuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlID0gdGhpcy5fdGlsZURpc3QobmUsIGRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGUgPiBzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2UgPSBoZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlID0gZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZlICYmICFmZS5kb25lICYmIChkID0gcGUucmV0dXJuKSAmJiBkLmNhbGwocGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYpIHRocm93IGYuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgdWUgJiYgIXVlLmRvbmUgJiYgKHAgPSBjZS5yZXR1cm4pICYmIHAuY2FsbChjZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHUpIHRocm93IHUuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICghbGUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgWSA9IE0oKTtcbiAgICAgICAgICAgICAgICAgIG5lLmNhcmRJZCA9IFk7XG4gICAgICAgICAgICAgICAgICBsZS5jYXJkSWQgPSBZO1xuICAgICAgICAgICAgICAgICAgRC5hZGQobmUuaWQpO1xuICAgICAgICAgICAgICAgICAgRC5hZGQobGUuaWQpO1xuICAgICAgICAgICAgICAgICAgUSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9lICYmICFvZS5kb25lICYmIChyID0gdGUucmV0dXJuKSAmJiByLmNhbGwodGUpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChLID4gMCkge1xuICAgICAgICAgIHZhciB5ZSA9IEouZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gIUQuaGFzKGUuaWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh5ZS5sZW5ndGggPj0gOCkge1xuICAgICAgICAgICAgdGhpcy5fcm5nLnNodWZmbGUoeWUpO1xuICAgICAgICAgICAgdmFyIG1lID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZCh5ZS5sZW5ndGggKiAoMSAtIEcpKSksXG4gICAgICAgICAgICAgIHZlID0gTWF0aC5mbG9vcigoeWUubGVuZ3RoIC0gbWUpIC8gNCk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdmUgJiYgaiA8IDI7IGorKykgZm9yIChZID0gTSgpLCBTID0gMDsgUyA8IDQ7IFMrKykge1xuICAgICAgICAgICAgICB5ZVs0ICogaiArIFNdLmNhcmRJZCA9IFk7XG4gICAgICAgICAgICAgIEQuYWRkKHllWzQgKiBqICsgU10uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZ2UgPSBKLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiAhRC5oYXMoZS5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9wYWlyQnlNYXhEaXN0YW5jZShnZSwgRCwgTSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBfZSA9IGUuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5pc1ZhbGlkICYmICFELmhhcyhlLmlkKTtcbiAgICB9KTtcbiAgICB0aGlzLl9wYWlyQnlNYXhEaXN0YW5jZShfZSwgRCwgTSk7XG4gICAgdmFyIFRlID0gZS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiAhRC5oYXMoZS5pZCk7XG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIENlID0gX192YWx1ZXMoVGUpLCBiZSA9IENlLm5leHQoKTsgIWJlLmRvbmU7IGJlID0gQ2UubmV4dCgpKSBiZS52YWx1ZS5jYXJkSWQgPSBNKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGJlICYmICFiZS5kb25lICYmICh5ID0gQ2UucmV0dXJuKSAmJiB5LmNhbGwoQ2UpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGgpIHRocm93IGguZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIF9wYWlyQnlNYXhEaXN0YW5jZShlLCB0LCBvKSB7XG4gICAgdmFyIG4sXG4gICAgICBpID0gZS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuICF0LmhhcyhlLmlkKTtcbiAgICAgIH0pO1xuICAgIGlmICghKGkubGVuZ3RoIDwgMikpIGZvciAodmFyIHIgPSBudWxsICE9PSAobiA9IHRoaXMuX2NmZy5wYWlyRGlzdGFuY2VCaWFzKSAmJiB2b2lkIDAgIT09IG4gPyBuIDogMSwgcyA9IG5ldyBTZXQoKSwgYyA9IGZ1bmN0aW9uIGMoKSB7XG4gICAgICAgIHZhciBlLFxuICAgICAgICAgIG4sXG4gICAgICAgICAgYyxcbiAgICAgICAgICBwLFxuICAgICAgICAgIGYgPSBpLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuICFzLmhhcyhlLmlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKGYubGVuZ3RoIDwgMikgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgICAgdmFyIGQgPSBmLmxlbmd0aCxcbiAgICAgICAgICBoID0gMCxcbiAgICAgICAgICB5ID0gMTtcbiAgICAgICAgaWYgKE1hdGguYWJzKHIgLSAwLjUpIDwgMC4wMSkge1xuICAgICAgICAgIGggPSB1Ll9ybmcubmV4dEludCgwLCBkIC0gMSk7XG4gICAgICAgICAgKHkgPSB1Ll9ybmcubmV4dEludCgwLCBkIC0gMikpID49IGggJiYgeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBtID0gZCAqIChkIC0gMSkgLyAyLFxuICAgICAgICAgICAgdiA9IGQgPiAyMCA/IDMwIDogbSxcbiAgICAgICAgICAgIGcgPSBbXTtcbiAgICAgICAgICBpZiAodiA+PSBtKSBmb3IgKHZhciBfID0gMDsgXyA8IGQ7IF8rKykgZm9yICh2YXIgVCA9IF8gKyAxOyBUIDwgZDsgVCsrKSBnLnB1c2goe1xuICAgICAgICAgICAgaTogXyxcbiAgICAgICAgICAgIGo6IFQsXG4gICAgICAgICAgICBkOiB1Ll90aWxlRGlzdChmW19dLCBmW1RdKVxuICAgICAgICAgIH0pO2Vsc2UgZm9yICh2YXIgQyA9IDA7IEMgPCB2OyBDKyspIHtcbiAgICAgICAgICAgIF8gPSB1Ll9ybmcubmV4dEludCgwLCBkIC0gMSk7XG4gICAgICAgICAgICAoVCA9IHUuX3JuZy5uZXh0SW50KDAsIGQgLSAyKSkgPj0gXyAmJiBUKys7XG4gICAgICAgICAgICBnLnB1c2goe1xuICAgICAgICAgICAgICBpOiBfLFxuICAgICAgICAgICAgICBqOiBULFxuICAgICAgICAgICAgICBkOiB1Ll90aWxlRGlzdChmW19dLCBmW1RdKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyID49IDAuOSkge1xuICAgICAgICAgICAgdmFyIGIgPSBnWzBdO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgRSA9IChlID0gdm9pZCAwLCBfX3ZhbHVlcyhnKSksIFMgPSBFLm5leHQoKTsgIVMuZG9uZTsgUyA9IEUubmV4dCgpKSAoQiA9IFMudmFsdWUpLmQgPiBiLmQgJiYgKGIgPSBCKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICAgICAgZSA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogdFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBTICYmICFTLmRvbmUgJiYgKG4gPSBFLnJldHVybikgJiYgbi5jYWxsKEUpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoID0gYi5pO1xuICAgICAgICAgICAgeSA9IGIuajtcbiAgICAgICAgICB9IGVsc2UgaWYgKHIgPD0gMC4xKSB7XG4gICAgICAgICAgICBiID0gZ1swXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIEkgPSAoYyA9IHZvaWQgMCwgX192YWx1ZXMoZykpLCB3ID0gSS5uZXh0KCk7ICF3LmRvbmU7IHcgPSBJLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBCO1xuICAgICAgICAgICAgICAgIChCID0gdy52YWx1ZSkuZCA8IGIuZCAmJiAoYiA9IEIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGMgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdyAmJiAhdy5kb25lICYmIChwID0gSS5yZXR1cm4pICYmIHAuY2FsbChJKTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAoYykgdGhyb3cgYy5lcnJvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaCA9IGIuaTtcbiAgICAgICAgICAgIHkgPSBiLmo7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgWy4uLmcubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlLmQ7XG4gICAgICAgICAgICB9KV0pO1xuICAgICAgICAgICAgaWYgKHggPiAwKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIE0gPSBnLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlLmQgLyB4O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHIgPiAwLjUgPyB0IDogMSAtIHQsIDIpICsgMC4wMTtcbiAgICAgICAgICAgICAgICB9KSwgTyA9IE0ucmVkdWNlKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZSArIHQ7XG4gICAgICAgICAgICAgICAgfSwgMCksIEQgPSB1Ll9ybmcubmV4dCgpICogTywgUCA9IGdbZy5sZW5ndGggLSAxXSwgQSA9IDA7IEEgPCBNLmxlbmd0aDsgQSsrKSBpZiAoKEQgLT0gTVtBXSkgPD0gMCkge1xuICAgICAgICAgICAgICAgIFAgPSBnW0FdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGggPSBQLmk7XG4gICAgICAgICAgICAgIHkgPSBQLmo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBSID0gbygpO1xuICAgICAgICBmW2hdLmNhcmRJZCA9IFI7XG4gICAgICAgIGZbeV0uY2FyZElkID0gUjtcbiAgICAgICAgdC5hZGQoZltoXS5pZCk7XG4gICAgICAgIHQuYWRkKGZbeV0uaWQpO1xuICAgICAgICBzLmFkZChmW2hdLmlkKTtcbiAgICAgICAgcy5hZGQoZlt5XS5pZCk7XG4gICAgICB9LCB1ID0gdGhpczsgXCJicmVha1wiICE9PSBjKCk7KTtcbiAgfVxuICBfdGlsZURpc3QoZSwgdCkge1xuICAgIHZhciBvID0gZS5ncmlkWCAtIHQuZ3JpZFgsXG4gICAgICBuID0gZS5ncmlkWSAtIHQuZ3JpZFk7XG4gICAgcmV0dXJuIE1hdGguc3FydChvICogbyArIG4gKiBuKTtcbiAgfVxuICBfYnVpbGRQdXp6bGVDb3JlcyhlLCB0LCBvLCBuKSB7XG4gICAgdmFyIGksXG4gICAgICByID0gbnVsbCAhPT0gKGkgPSB0aGlzLl9jZmcucHV6emxlQ29yZUNvdW50KSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMDtcbiAgICBpZiAoIShyIDw9IDApKSBmb3IgKHZhciBhID0gbmV3IEZsb3dUaWxlU2ltdWxhdG9yKGUpLCBsID0gMDsgbCA8IHI7IGwrKykge1xuICAgICAgdmFyIGMgPSB0aGlzLl9maW5kUHV6emxlQ29yZVNsb3RzKGUsIGEsIG8pO1xuICAgICAgaWYgKCFjKSBicmVhaztcbiAgICAgIHZhciB1ID0gbigpO1xuICAgICAgYy5hMS5jYXJkSWQgPSB1O1xuICAgICAgYy5hMi5jYXJkSWQgPSB1O1xuICAgICAgYy5hMy5jYXJkSWQgPSB1O1xuICAgICAgYy5hNC5jYXJkSWQgPSB1O1xuICAgICAgby5hZGQoYy5hMS5pZCk7XG4gICAgICBvLmFkZChjLmEyLmlkKTtcbiAgICAgIG8uYWRkKGMuYTMuaWQpO1xuICAgICAgby5hZGQoYy5hNC5pZCk7XG4gICAgICB0aGlzLl9wdXp6bGVDb3Jlcy5wdXNoKHtcbiAgICAgICAgY2FyZElkOiB1LFxuICAgICAgICBsb2NrZWRUaWxlSWQ6IGMuYTEuaWQsXG4gICAgICAgIGtleVRpbGVJZDogYy5hMi5pZCxcbiAgICAgICAgZnJlZVRpbGVJZHM6IFtjLmEzLmlkLCBjLmE0LmlkXSxcbiAgICAgICAgaXNJbmRpcmVjdDogYy5pc0luZGlyZWN0XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgX2J1aWxkSGFtc3RlcnMoZSwgdCwgbywgbiwgaSkge1xuICAgIHZhciByLFxuICAgICAgYSxcbiAgICAgIGwgPSBudWxsICE9PSAociA9IHRoaXMuX2NmZy5oYW1zdGVyQ291bnQpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAwO1xuICAgIGlmICghKGwgPD0gMCkpIHtcbiAgICAgIHZhciBzID0gaS5sZW5ndGgsXG4gICAgICAgIGMgPSBzIC0gMjtcbiAgICAgIGlmICghKGMgPCAyKSkgZm9yICh2YXIgdSA9IE1hdGgubWluKE1hdGgubWF4KDIsIG51bGwgIT09IChhID0gdGhpcy5fY2ZnLmhhbXN0ZXJEaXN0YW5jZSkgJiYgdm9pZCAwICE9PSBhID8gYSA6IDIpLCBjKSwgcCA9IDA7IHAgPCBsICYmIHRoaXMuX3BsYWNlT25lSGFtc3Rlcih0LCBvLCBuLCBpLCBzLCB1LCBjKTsgcCsrKTtcbiAgICB9XG4gIH1cbiAgX3BsYWNlT25lSGFtc3RlcihlLCB0LCBvLCBuLCBpLCBzLCBjKSB7XG4gICAgdmFyIHUsXG4gICAgICBwLFxuICAgICAgZixcbiAgICAgIGQsXG4gICAgICBoLFxuICAgICAgeSA9IFtzXTtcbiAgICBzID4gMiAmJiB5LnB1c2gocyAtIDEpO1xuICAgIHMgPCBjICYmIHkucHVzaChzICsgMSk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG0gPSBfX3ZhbHVlcyh5KSwgdiA9IG0ubmV4dCgpOyAhdi5kb25lOyB2ID0gbS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGcgPSB2LnZhbHVlO1xuICAgICAgICBpZiAoIShnIDwgMiB8fCBnID4gYykpIHtcbiAgICAgICAgICBmb3IgKHZhciBfID0gW10sIFQgPSAxOyBUICsgZyA8IGk7IFQrKykgXy5wdXNoKFtULCBUICsgZ10pO1xuICAgICAgICAgIGlmICgwICE9PSBfLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIEMgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBudWxsICE9PSAoaCA9IHRoaXMuX2NmZy5oYW1zdGVyRGVwdGhCaWFzKSAmJiB2b2lkIDAgIT09IGggPyBoIDogMC41KSk7XG4gICAgICAgICAgICBpZiAoQyA8PSAwKSB0aGlzLl9ybmcuc2h1ZmZsZShfKTtlbHNlIHtcbiAgICAgICAgICAgICAgXy5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRbMF0gKyB0WzFdIC0gKGVbMF0gKyBlWzFdKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChDIDwgMSkge1xuICAgICAgICAgICAgICAgIHZhciBiID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKF8ubGVuZ3RoICogQykpLFxuICAgICAgICAgICAgICAgICAgRSA9IF8uc2xpY2UoMCwgYiksXG4gICAgICAgICAgICAgICAgICBTID0gXy5zbGljZShiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ybmcuc2h1ZmZsZShFKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ybmcuc2h1ZmZsZShTKTtcbiAgICAgICAgICAgICAgICBfLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgXy5wdXNoLmFwcGx5KF8sIFsuLi5FLCAuLi5TXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIEkgPSAoZiA9IHZvaWQgMCwgX192YWx1ZXMoXykpLCB3ID0gSS5uZXh0KCk7ICF3LmRvbmU7IHcgPSBJLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBCID0gX19yZWFkKHcudmFsdWUsIDIpLFxuICAgICAgICAgICAgICAgICAgeCA9IEJbMF0sXG4gICAgICAgICAgICAgICAgICBNID0gQlsxXSxcbiAgICAgICAgICAgICAgICAgIE8gPSBuW3hdLFxuICAgICAgICAgICAgICAgICAgRCA9IG5bTV0sXG4gICAgICAgICAgICAgICAgICBQID0gKGUuZ2V0KE8pIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0LmhhcyhlLmlkKTtcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgQSA9IChlLmdldChEKSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhdC5oYXMoZS5pZCk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoMCAhPT0gUC5sZW5ndGggJiYgMCAhPT0gQS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBSID0gUFt0aGlzLl9ybmcubmV4dEludCgwLCBQLmxlbmd0aCAtIDEpXSxcbiAgICAgICAgICAgICAgICAgICAgTiA9IEFbdGhpcy5fcm5nLm5leHRJbnQoMCwgQS5sZW5ndGggLSAxKV0sXG4gICAgICAgICAgICAgICAgICAgIGogPSBvKCk7XG4gICAgICAgICAgICAgICAgICBSLmNhcmRJZCA9IGo7XG4gICAgICAgICAgICAgICAgICBOLmNhcmRJZCA9IGo7XG4gICAgICAgICAgICAgICAgICB0LmFkZChSLmlkKTtcbiAgICAgICAgICAgICAgICAgIHQuYWRkKE4uaWQpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5faGFtc3RlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRJZDogaixcbiAgICAgICAgICAgICAgICAgICAgc2hhbGxvd1RpbGVJZDogUi5pZCxcbiAgICAgICAgICAgICAgICAgICAgZGVlcFRpbGVJZDogTi5pZCxcbiAgICAgICAgICAgICAgICAgICAgc2hhbGxvd0RlcHRoOiBPLFxuICAgICAgICAgICAgICAgICAgICBkZWVwRGVwdGg6IEQsXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoRGlzdGFuY2U6IE0gLSB4XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBmID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHcgJiYgIXcuZG9uZSAmJiAoZCA9IEkucmV0dXJuKSAmJiBkLmNhbGwoSSk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKGYpIHRocm93IGYuZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB1ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdiAmJiAhdi5kb25lICYmIChwID0gbS5yZXR1cm4pICYmIHAuY2FsbChtKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh1KSB0aHJvdyB1LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgX2ZpbmRQdXp6bGVDb3JlU2xvdHMoZSwgdCwgbykge1xuICAgIHZhciBuLFxuICAgICAgaSxcbiAgICAgIHIsXG4gICAgICBsLFxuICAgICAgcyxcbiAgICAgIGMsXG4gICAgICB1LFxuICAgICAgcCxcbiAgICAgIGYgPSBlLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pc1ZhbGlkICYmICFvLmhhcyhlLmlkKSAmJiAhdC5pc0NvdmVyZWQoZSkgJiYgIXQuaXNMb2NrZWQoZSk7XG4gICAgICB9KSxcbiAgICAgIGQgPSBlLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pc1ZhbGlkICYmICFvLmhhcyhlLmlkKSAmJiB0LmlzQ292ZXJlZChlKTtcbiAgICAgIH0pO1xuICAgIGlmIChmLmxlbmd0aCA8IDQgfHwgZC5sZW5ndGggPCAxKSByZXR1cm4gbnVsbDtcbiAgICB0aGlzLl9ybmcuc2h1ZmZsZShmKTtcbiAgICBmb3IgKHZhciBoID0gbnVsbCwgeSA9IG51bGwsIG0gPSAwOyBtIDwgZi5sZW5ndGg7IG0rKykge1xuICAgICAgZm9yICh2YXIgdiA9IG0gKyAxOyB2IDwgZi5sZW5ndGg7IHYrKykge1xuICAgICAgICB2YXIgZyA9IGZbbV0sXG4gICAgICAgICAgXyA9IGZbdl07XG4gICAgICAgIGlmICh0aGlzLl9jYW5QYWlyU2ltdWx0YW5lb3VzbHkoZywgXywgZSwgdCkpIHtcbiAgICAgICAgICBoID0gZztcbiAgICAgICAgICB5ID0gXztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGggJiYgeSkgYnJlYWs7XG4gICAgfVxuICAgIGlmICghaCB8fCAheSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIFQgPSBmLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuaWQgIT09IGguaWQgJiYgZS5pZCAhPT0geS5pZDtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5fY2ZnLm1heExheWVycyA+IDIpIHRyeSB7XG4gICAgICBmb3IgKHZhciBDID0gX192YWx1ZXMoVCksIGIgPSBDLm5leHQoKTsgIWIuZG9uZTsgYiA9IEMubmV4dCgpKSB7XG4gICAgICAgIHZhciBFID0gYi52YWx1ZTtcbiAgICAgICAgaWYgKDAgIT09IChPID0gdGhpcy5fZmluZENvdmVyZWRCeVRpbGUoRSwgZCwgbywgZSkpLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBTID0gTy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmlkICE9PSBoLmlkICYmIGUuaWQgIT09IHkuaWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIEkgPSAociA9IHZvaWQgMCwgX192YWx1ZXMoUykpLCB3ID0gSS5uZXh0KCk7ICF3LmRvbmU7IHcgPSBJLm5leHQoKSkge1xuICAgICAgICAgICAgICB2YXIgQiA9IHcudmFsdWU7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5fdGlsZXNPdmVybGFwKEUsIEIpICYmIHRoaXMuX2lzQ2hhaW5CbG9ja2VkQnkoQiwgRSwgZSkpIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYTE6IEIsXG4gICAgICAgICAgICAgICAgYTI6IEUsXG4gICAgICAgICAgICAgICAgYTM6IGgsXG4gICAgICAgICAgICAgICAgYTQ6IHksXG4gICAgICAgICAgICAgICAgaXNJbmRpcmVjdDogdHJ1ZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB3ICYmICF3LmRvbmUgJiYgKGwgPSBJLnJldHVybikgJiYgbC5jYWxsKEkpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbiA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGIgJiYgIWIuZG9uZSAmJiAoaSA9IEMucmV0dXJuKSAmJiBpLmNhbGwoQyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHggPSBfX3ZhbHVlcyhUKSwgTSA9IHgubmV4dCgpOyAhTS5kb25lOyBNID0geC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIE87XG4gICAgICAgIEUgPSBNLnZhbHVlO1xuICAgICAgICBpZiAoMCAhPT0gKE8gPSB0aGlzLl9maW5kQ292ZXJlZEJ5VGlsZShFLCBkLCBvLCBlKSkubGVuZ3RoKSB7XG4gICAgICAgICAgUyA9IE8uZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5pZCAhPT0gaC5pZCAmJiBlLmlkICE9PSB5LmlkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBEID0gKHUgPSB2b2lkIDAsIF9fdmFsdWVzKFMpKSwgUCA9IEQubmV4dCgpOyAhUC5kb25lOyBQID0gRC5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgQiA9IFAudmFsdWU7XG4gICAgICAgICAgICAgIGlmICh0aGlzLl9pc0NoYWluQmxvY2tlZEJ5KEIsIEUsIGUpKSByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGExOiBCLFxuICAgICAgICAgICAgICAgIGEyOiBFLFxuICAgICAgICAgICAgICAgIGEzOiBoLFxuICAgICAgICAgICAgICAgIGE0OiB5LFxuICAgICAgICAgICAgICAgIGlzSW5kaXJlY3Q6ICF0aGlzLl90aWxlc092ZXJsYXAoRSwgQilcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB1ID0ge1xuICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgUCAmJiAhUC5kb25lICYmIChwID0gRC5yZXR1cm4pICYmIHAuY2FsbChEKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmICh1KSB0aHJvdyB1LmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHMgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBNICYmICFNLmRvbmUgJiYgKGMgPSB4LnJldHVybikgJiYgYy5jYWxsKHgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHMpIHRocm93IHMuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIF9pc0NoYWluQmxvY2tlZEJ5KGUsIHQsIG8sIG4pIHtcbiAgICB2YXIgaSxcbiAgICAgIHIsXG4gICAgICBsID0gdGhpcztcbiAgICBuIHx8IChuID0gbmV3IFNldCgpKTtcbiAgICBpZiAobi5oYXMoZS5pZCkpIHJldHVybiBmYWxzZTtcbiAgICBuLmFkZChlLmlkKTtcbiAgICB2YXIgcyA9IG8uZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5pc1ZhbGlkICYmIHQuaWQgIT09IGUuaWQgJiYgdC5sYXllciA+IGUubGF5ZXIgJiYgbC5fdGlsZXNPdmVybGFwKHQsIGUpO1xuICAgIH0pO1xuICAgIGlmICgwID09PSBzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXMocyksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBwID0gdS52YWx1ZTtcbiAgICAgICAgaWYgKHAuaWQgIT09IHQuaWQgJiYgIXRoaXMuX2lzQ2hhaW5CbG9ja2VkQnkocCwgdCwgbywgbikpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChyID0gYy5yZXR1cm4pICYmIHIuY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBfY2FuUGFpclNpbXVsdGFuZW91c2x5KGUsIHQsIG8sIG4pIHtcbiAgICByZXR1cm4gIW4uaXNDb3ZlcmVkKGUpICYmICFuLmlzTG9ja2VkKGUpICYmICFuLmlzQ292ZXJlZCh0KSAmJiAhbi5pc0xvY2tlZCh0KSAmJiAhKGUuZ3JpZFkgPT09IHQuZ3JpZFkgJiYgZS5sYXllciA9PT0gdC5sYXllciAmJiBNYXRoLmFicyhlLmdyaWRYIC0gdC5ncmlkWCkgPD0gMik7XG4gIH1cbiAgX2ZpbmRDb3ZlcmVkQnlUaWxlKGUsIHQsIG8sIG4pIHtcbiAgICB2YXIgaSxcbiAgICAgIHIsXG4gICAgICBsID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyh0KSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBjLnZhbHVlO1xuICAgICAgICBvLmhhcyh1LmlkKSB8fCB1LmxheWVyID49IGUubGF5ZXIgfHwgKHRoaXMuX3RpbGVzT3ZlcmxhcChlLCB1KSA/IGwucHVzaCh1KSA6IHRoaXMuX2hhc0RlcGVuZGVuY3lDaGFpbihlLCB1LCBuKSAmJiBsLnB1c2godSkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGkgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKHIgPSBzLnJldHVybikgJiYgci5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsO1xuICB9XG4gIF9oYXNEZXBlbmRlbmN5Q2hhaW4oZSwgdCwgbykge1xuICAgIHZhciBuLCBpO1xuICAgIGlmIChlLmxheWVyIDw9IHQubGF5ZXIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgciA9IG5ldyBTZXQoKSxcbiAgICAgIGwgPSBbZV07XG4gICAgci5hZGQoZS5pZCk7XG4gICAgZm9yICg7IGwubGVuZ3RoID4gMDspIHtcbiAgICAgIHZhciBzID0gbC5zaGlmdCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgYyA9IChuID0gdm9pZCAwLCBfX3ZhbHVlcyhvKSksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIHAgPSB1LnZhbHVlO1xuICAgICAgICAgIGlmIChwLmlzVmFsaWQgJiYgIXIuaGFzKHAuaWQpICYmICEocC5sYXllciA+PSBzLmxheWVyKSAmJiB0aGlzLl90aWxlc092ZXJsYXAocywgcCkpIHtcbiAgICAgICAgICAgIGlmIChwLmlkID09PSB0LmlkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHIuYWRkKHAuaWQpO1xuICAgICAgICAgICAgbC5wdXNoKHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBuID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHUgJiYgIXUuZG9uZSAmJiAoaSA9IGMucmV0dXJuKSAmJiBpLmNhbGwoYyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIF90aWxlc092ZXJsYXAoZSwgdCkge1xuICAgIGlmIChlLmxheWVyIDw9IHQubGF5ZXIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbyA9IGUuZ3JpZFgsXG4gICAgICBuID0gZS5ncmlkWSxcbiAgICAgIGkgPSBlLmdyaWRYICsgMSxcbiAgICAgIHIgPSBlLmdyaWRZICsgMSxcbiAgICAgIGEgPSB0LmdyaWRYLFxuICAgICAgbCA9IHQuZ3JpZFksXG4gICAgICBzID0gdC5ncmlkWCArIDEsXG4gICAgICBjID0gdC5ncmlkWSArIDE7XG4gICAgcmV0dXJuICEoaSA8IGEgfHwgbyA+IHMgfHwgciA8IGwgfHwgbiA+IGMpO1xuICB9XG4gIGNoZWNrU29sdmFibGVCdWZmZXIodCkge1xuICAgIHZhciBvO1xuICAgIHJldHVybiBudWxsICE9PSBGbG93TGV2ZWxHZW5lcmF0b3IuX3NvbHZlQnVmZmVyTXVsdGkodCwgbnVsbCAhPT0gKG8gPSB0aGlzLl9jZmcuYnVmZmVyU2l6ZSkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDQsIGZhbHNlLCAtMSwgMTIpO1xuICB9XG59Il19
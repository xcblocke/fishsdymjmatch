
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2CurveShuffle/Scripts/Tile2CurveSolver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5107Drt21BfqKgBIsWdoFm', 'Tile2CurveSolver');
// subpackages/l_tile2CurveShuffle/Scripts/Tile2CurveSolver.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DependencyGraph_1 = require("../../../Scripts/DependencyGraph");
var SafetyChecker_1 = require("../../../Scripts/SafetyChecker");
var ICurveSolverTypes_1 = require("./ICurveSolverTypes");
this && this.__spread;
var Tile2CurveSolver = /** @class */ (function () {
    function Tile2CurveSolver() {
        this.graph = new DependencyGraph_1.DependencyGraph();
        this.safety = new SafetyChecker_1.SafetyChecker(this.graph);
        this.board = new Map();
        this.remainingTiles = new Set();
        this.tileMap = new Map();
        this.holder = [];
        this.upperIndex = 0;
        this.lowerIndex = 0;
        this.steps = [];
        this.occupancyCurve = [];
        this.updateCurve = [];
        this.params = Object.assign({}, ICurveSolverTypes_1.DEFAULT_CURVE_PARAMS);
        this.globalStep = 0;
        this.holderCardIds = [];
        this.patternCounts = {
            "++": 0,
            "--": 0,
            "+-": 0,
            "-+": 0
        };
        this.fastPairCount = 0;
    }
    Tile2CurveSolver.prototype.shuffleWithContext = function (e, r) {
        var t, i, n, l, s = e.getTileMapObject(), h = e.getGameData(), c = [], u = new Set(h.slotBarIds || []);
        s.tileObjectMap().forEach(function (e) {
            e.isValid && !u.has(e.saveKey()) && c.push(e);
        });
        if (c.length < 2)
            return false;
        var p = [];
        try {
            for (var d = __values(h.slotBarIds), f = d.next(); !f.done; f = d.next()) {
                var v = f.value, g = s.getTileObjectByPosId(v);
                g && p.push(g.cardId);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (i = d.return) && i.call(d);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var y = new Map();
        try {
            for (var m = __values(c), C = m.next(); !C.done; C = m.next()) {
                var T = C.value;
                y.set(T.cardId, (y.get(T.cardId) || 0) + 1);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                C && !C.done && (l = m.return) && l.call(m);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        var S = [];
        y.forEach(function (e, r) {
            return S.push({
                cardId: r,
                remaining: e
            });
        });
        var M = h.slotBarCount || 4, x = this.solve(c, p, S, Object.assign({
            holderCapacity: M
        }, r));
        if (!x)
            return false;
        this.applyResult(x, s);
        return true;
    };
    Tile2CurveSolver.prototype.solve = function (e, r, t, o) {
        this.reset(e, o);
        this.holderCardIds = r;
        var i = r.length;
        if (!this.stepMatchHolder(r))
            return null;
        if (0 === this.remainingTiles.size)
            return this.buildResult(t);
        var a = this.remainingTiles.size;
        this.stepGenerateCurves(i, a);
        return this.stepComputeSolver() ? this.buildResult(t) : null;
    };
    Tile2CurveSolver.prototype.reset = function (e, r) {
        var t, i, n, l;
        this.params = Object.assign(Object.assign({}, ICurveSolverTypes_1.DEFAULT_CURVE_PARAMS), r);
        this.board.clear();
        this.remainingTiles = new Set(e);
        this.tileMap = new Map();
        this.holder = [];
        this.upperIndex = 0;
        this.lowerIndex = 0;
        this.steps = [];
        this.occupancyCurve = [];
        this.updateCurve = [];
        this.globalStep = 0;
        this.holderCardIds = [];
        this.patternCounts = {
            "++": 0,
            "--": 0,
            "+-": 0,
            "-+": 0
        };
        this.fastPairCount = 0;
        this.graph.init(e, null);
        try {
            for (var s = __values(e), c = s.next(); !c.done; c = s.next()) {
                var u = c.value, p = this.graph.tileToCoord(u);
                this.tileMap.set(p, u);
                this.board.set(p, {
                    coord: p,
                    age: 0,
                    colorTag: null,
                    removed: false
                });
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (i = s.return) && i.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var d = this.getSelectableCoords();
        try {
            for (var f = __values(d), v = f.next(); !v.done; v = f.next()) {
                var g = v.value;
                this.board.get(g).age = 1;
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                v && !v.done && (l = f.return) && l.call(f);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
    };
    Tile2CurveSolver.prototype.stepMatchHolder = function (e) {
        for (var r, t, o = 0; o < e.length; o++) {
            var i = this.getSelectableCoords();
            if (0 === i.length)
                return false;
            var n = i[0], l = Infinity;
            try {
                for (var s = (r = void 0, __values(i)), h = s.next(); !h.done; h = s.next()) {
                    var c = h.value, u = this.countFreedForSingle(c);
                    if (u < l) {
                        l = u;
                        n = c;
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
                    h && !h.done && (t = s.return) && t.call(s);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            var p = this.nextUpper();
            this.board.get(n).colorTag = p;
            this.steps.push({
                coord: n,
                colorTag: p,
                action: "pop",
                pairedStepIndex: -(o + 1)
            });
            this.virtualRemove(n);
            this.advanceStep();
        }
        return true;
    };
    Tile2CurveSolver.prototype.stepGenerateCurves = function (e, r) {
        this.occupancyCurve = this.generateOccupancyCurve(r, e);
        this.updateCurve = this.generateUpdateCurve(this.occupancyCurve);
    };
    Tile2CurveSolver.prototype.generateOccupancyCurve = function (e, r) {
        var t = this.params.holderCapacity - 1, o = e >= this.params.minStepsForPeak, i = [], a = 0, n = Math.max(0, 2 * (this.params.holderCapacity - r));
        if (n > 0)
            for (var l = Math.min(n, e - 2), s = 0; s < l; s++) {
                a = s % 2 == 0 ? 1 : 0;
                i.push(a);
            }
        var h = !o || i.includes(t);
        if (!h && t > 0) {
            var c = e - i.length, u = t - a;
            if (c >= u + t) {
                var p = c - (u + t), d = Math.floor(Math.random() * (p + 1));
                for (s = 0; s < d; s++) {
                    a = this.pickRandomStep(a, t, e - i.length - 1);
                    i.push(a);
                }
                i.length;
                for (; a < t;) {
                    a++;
                    i.push(a);
                }
                h = true;
            }
        }
        for (; i.length < e;)
            if (i.length === e - 1) {
                i.push(0);
                a = 0;
            }
            else {
                a = this.pickRandomStep(a, t, e - i.length - 1);
                i.push(a);
            }
        return i;
    };
    Tile2CurveSolver.prototype.pickRandomStep = function (e, r, t) {
        var o = e + 1 <= r && this.canReachZero(e + 1, t), i = e - 1 >= 0 && this.canReachZero(e - 1, t);
        if (o && i) {
            var a = this.params.holderCapacity * this.params.avgOccupancyRate, n = Math.max(0.15, Math.min(0.85, 0.5 + 0.2 * (a - e)));
            return Math.random() < n ? e + 1 : e - 1;
        }
        return o ? e + 1 : i ? e - 1 : e;
    };
    Tile2CurveSolver.prototype.canReachZero = function (e, r) {
        return r >= e && (r - e) % 2 == 0;
    };
    Tile2CurveSolver.prototype.generateUpdateCurve = function (e) {
        var r = this.params.updateProbability;
        return e.map(function (t, o) {
            return o >= 2 && t > 0 && t === e[o - 2] && Math.random() < r ? 1 : 0;
        });
    };
    Tile2CurveSolver.prototype.stepComputeSolver = function () {
        for (var e = this.occupancyCurve, r = this.updateCurve, t = 0; t < e.length; t += 2) {
            if (this.allTilesColored())
                return this.fastPairRemaining();
            if (t + 1 >= e.length)
                return this.processSingleStep(t);
            var o = t > 0 ? e[t - 1] : 0, i = (e[t] - o > 0 ? "+" : "-") + (e[t + 1] - e[t] > 0 ? "+" : "-"), a = r[t + 1] || 0;
            this.patternCounts[i]++;
            if (!this.processTwoSteps(i, a, t))
                return false;
        }
        return true;
    };
    Tile2CurveSolver.prototype.processTwoSteps = function (e, r, t) {
        switch (e) {
            case "++":
                return this.doPlusPlus(t);
            case "--":
                return this.doMinusMinus(t);
            case "+-":
                return this.doPlusMinus(t, r);
            case "-+":
                return this.doMinusPlus(t, r);
        }
    };
    Tile2CurveSolver.prototype.doPlusPlus = function (e) {
        for (var r = 0; r < 2; r++) {
            var t = this.getSelectableCoords();
            if (0 === t.length)
                return false;
            var o = this.pickMaxFreedThenMedianAge(t);
            if (!o)
                return false;
            var i = this.nextUpper();
            this.board.get(o).colorTag = i;
            this.colorUncolored(t, o);
            this.holder.push({
                colorTag: i,
                enterStep: e + r
            });
            this.steps.push({
                coord: o,
                colorTag: i,
                action: "push",
                pairedStepIndex: -1
            });
            this.virtualRemove(o);
            this.advanceStep();
        }
        return true;
    };
    Tile2CurveSolver.prototype.doMinusMinus = function (e) {
        if (this.holder.length < 2)
            return false;
        var r = this.getSelectableCoords();
        if (r.length < 2)
            return false;
        var t = this.holder[this.holder.length - 1].colorTag, o = this.holder.findIndex(function (e) {
            return e.colorTag !== t;
        }), i = -1 !== o ? this.holder[o].colorTag : t, a = this.pickForPop(r);
        this.popWithTag(a, t, e);
        var n = this.getSelectableCoords();
        if (0 === n.length)
            return false;
        var l = this.pickForPop(n);
        this.popWithTag(l, i, e + 1);
        return true;
    };
    Tile2CurveSolver.prototype.doPlusMinus = function (e, r) {
        var t = this.getSelectableCoords();
        if (0 === t.length)
            return false;
        if (0 === r) {
            var o = this.nextUpper(), i = this.pickMaxAge(t);
            this.board.get(i).colorTag = o;
            this.colorUncolored(t, i);
            this.holder.push({
                colorTag: o,
                enterStep: e
            });
            this.steps.push({
                coord: i,
                colorTag: o,
                action: "push",
                pairedStepIndex: -1
            });
            this.virtualRemove(i);
            this.advanceStep();
            if (0 === (a = this.getSelectableCoords()).length)
                return false;
            this.popWithTag(this.pickMinAge(a), o, e + 1);
        }
        else {
            var a, n = this.pickHolderColor(), l = (o = this.nextUpper(), this.pickMaxFreed(t));
            this.board.get(l).colorTag = o;
            this.colorUncolored(t, l);
            this.holder.push({
                colorTag: o,
                enterStep: e
            });
            this.steps.push({
                coord: l,
                colorTag: o,
                action: "push",
                pairedStepIndex: -1
            });
            this.virtualRemove(l);
            this.advanceStep();
            if (0 === this.holder.length)
                return false;
            if (0 === (a = this.getSelectableCoords()).length)
                return false;
            this.popWithTag(this.pickMinAge(a), n, e + 1);
        }
        return true;
    };
    Tile2CurveSolver.prototype.doMinusPlus = function (e, r) {
        if (0 === this.holder.length)
            return false;
        var t = this.getSelectableCoords();
        if (t.length < 2)
            return false;
        var o = this.pickHolderColor(), i = this.nextUpper(), a = 0 === r ? this.pickMaxAge(t) : this.pickMinAge(t);
        this.popWithTag(a, o, e);
        var n = this.getSelectableCoords();
        if (0 === n.length)
            return false;
        var l = 0 === r ? this.pickMinAge(n) : this.pickMaxFreed(n);
        this.board.get(l).colorTag = i;
        this.colorUncolored(n, l);
        this.holder.push({
            colorTag: i,
            enterStep: e + 1
        });
        this.steps.push({
            coord: l,
            colorTag: i,
            action: "push",
            pairedStepIndex: -1
        });
        this.virtualRemove(l);
        this.advanceStep();
        return true;
    };
    Tile2CurveSolver.prototype.processSingleStep = function (e) {
        var r = this.getSelectableCoords();
        if (0 === r.length)
            return true;
        if (this.occupancyCurve[e] - (e > 0 ? this.occupancyCurve[e - 1] : 0) > 0) {
            var t = this.pickMaxFreedThenMedianAge(r);
            if (!t)
                return false;
            var o = this.nextUpper();
            this.board.get(t).colorTag = o;
            this.holder.push({
                colorTag: o,
                enterStep: e
            });
            this.steps.push({
                coord: t,
                colorTag: o,
                action: "push",
                pairedStepIndex: -1
            });
            this.virtualRemove(t);
            this.advanceStep();
        }
        else {
            if (0 === this.holder.length)
                return false;
            this.popWithTag(this.pickMinAge(r), this.pickHolderColor(), e);
        }
        return true;
    };
    Tile2CurveSolver.prototype.fastPairRemaining = function () {
        for (var e = this;;) {
            var r = this.getSelectableCoords();
            if (r.length < 2)
                break;
            var t = r.filter(function (r) {
                var t, o = null === (t = e.board.get(r)) || void 0 === t ? void 0 : t.colorTag;
                return o && o === o.toLowerCase();
            }), o = t.length >= 2 ? t : r, i = o[Math.floor(Math.random() * o.length)], a = this.nextUpper();
            this.board.get(i).colorTag = a;
            this.holder.push({
                colorTag: a,
                enterStep: this.steps.length
            });
            this.steps.push({
                coord: i,
                colorTag: a,
                action: "push",
                pairedStepIndex: -1
            });
            this.virtualRemove(i);
            this.advanceStep();
            var n = this.getSelectableCoords();
            if (0 === n.length)
                break;
            var l = n[Math.floor(Math.random() * n.length)];
            this.popWithTag(l, a, this.steps.length);
            this.fastPairCount++;
        }
        return true;
    };
    Tile2CurveSolver.prototype.buildResult = function (e) {
        var r, t, o, i, l = new Map();
        try {
            for (var s = __values(this.board), h = s.next(); !h.done; h = s.next())
                (f = __read(h.value, 2)[1]).colorTag && l.set(f.colorTag, (l.get(f.colorTag) || 0) + 1);
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                h && !h.done && (t = s.return) && t.call(s);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        var c = this.mapVirtualToActual(e, l), u = new Map();
        try {
            for (var p = __values(this.board), d = p.next(); !d.done; d = p.next()) {
                var f, v = __read(d.value, 2), g = v[0];
                if ((f = v[1]).colorTag) {
                    var y = c.get(f.colorTag);
                    void 0 !== y && u.set(g, y);
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
                d && !d.done && (i = p.return) && i.call(p);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return {
            steps: this.steps,
            colorToCardId: c,
            coordToCardId: u,
            occupancyCurve: this.occupancyCurve,
            updateCurve: this.updateCurve
        };
    };
    Tile2CurveSolver.prototype.mapVirtualToActual = function (e, r) {
        for (var t, i, l, s, h, c, u = this, p = new Map(), d = e.map(function (e) {
            return Object.assign({}, e);
        }), f = this.holderCardIds.length, v = function v(e) {
            var r = g.steps[e];
            p.set(r.colorTag, g.holderCardIds[e]);
            var t = d.findIndex(function (r) {
                return r.cardId === u.holderCardIds[e] && r.remaining >= 1;
            });
            -1 !== t && (d[t].remaining -= 1);
        }, g = this, y = 0; y < f; y++)
            v(y);
        var m = [], C = new Set(p.keys()), T = new Map();
        try {
            for (var S = __values(this.steps), M = S.next(); !M.done; M = S.next()) {
                var x = M.value, b = x.colorTag;
                if (!C.has(b)) {
                    C.add(b);
                    m.push(b);
                    var _ = this.steps.indexOf(x) - f;
                    if (_ >= 0 && _ < this.occupancyCurve.length) {
                        var w = _ > 0 ? this.occupancyCurve[_ - 1] : 0;
                        T.set(b, {
                            prev: w,
                            cur: this.occupancyCurve[_]
                        });
                    }
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
                M && !M.done && (i = S.return) && i.call(S);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        try {
            for (var R = __values(this.board), P = R.next(); !P.done; P = R.next()) {
                var I = __read(P.value, 2)[1];
                if (I.colorTag && !C.has(I.colorTag)) {
                    C.add(I.colorTag);
                    m.push(I.colorTag);
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
                P && !P.done && (s = R.return) && s.call(R);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        var k = this.params.preferRemaining01, F = this.params.preferRemainingMin23, O = Math.floor(this.params.holderCapacity / 2), A = m.filter(function (e) {
            return (r.get(e) || 1) >= 2;
        }), j = m.filter(function (e) {
            return (r.get(e) || 1) < 2;
        }), U = function U(e) {
            var t = r.get(e) || 1, o = T.get(e), i = -1;
            t >= 2 && o && (i = o.cur < O ? d.findIndex(function (e) {
                return e.remaining >= t && e.remaining === k;
            }) : d.findIndex(function (e) {
                return e.remaining >= t && e.remaining > F;
            }));
            if (-1 === i) {
                var a = d.filter(function (e) {
                    return e.remaining >= t;
                });
                a.length > 0 && (i = d.indexOf(a[Math.floor(Math.random() * a.length)]));
            }
            if (-1 !== i) {
                p.set(e, d[i].cardId);
                d[i].remaining -= t;
            }
            else {
                var n = d.find(function (e) {
                    return e.remaining >= 1;
                });
                if (n) {
                    p.set(e, n.cardId);
                    n.remaining -= Math.min(t, n.remaining);
                }
            }
        };
        try {
            for (var E = __values(A.concat(j)), D = E.next(); !D.done; D = E.next())
                U(b = D.value);
        }
        catch (e) {
            h = {
                error: e
            };
        }
        finally {
            try {
                D && !D.done && (c = E.return) && c.call(E);
            }
            finally {
                if (h)
                    throw h.error;
            }
        }
        return p;
    };
    Tile2CurveSolver.prototype.applyResult = function (e, r) {
        var t, o, i, l, s = new Map();
        try {
            for (var h = __values(e.coordToCardId), c = h.next(); !c.done; c = h.next()) {
                var u = __read(c.value, 1)[0], p = this.tileMap.get(u);
                if (p) {
                    var d = p.cardId;
                    s.has(d) || s.set(d, []);
                    s.get(d).push(p);
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
                c && !c.done && (o = h.return) && o.call(h);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        s.forEach(function (e) {
            for (var r, t = e.length - 1; t > 0; t--) {
                var o = Math.floor(Math.random() * (t + 1));
                r = __read([e[o], e[t]], 2), e[t] = r[0], e[o] = r[1];
            }
        });
        var f = [];
        try {
            for (var v = __values(e.coordToCardId), g = v.next(); !g.done; g = v.next()) {
                var y = __read(g.value, 2), m = (u = y[0], y[1]), C = this.tileMap.get(u);
                if (C) {
                    var T = s.get(m);
                    T && 0 !== T.length && f.push({
                        tileId: T.pop().id,
                        x: C.gridPosX,
                        y: C.gridPosY,
                        z: C.layer
                    });
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
                g && !g.done && (l = v.return) && l.call(v);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        var S = function S(e, r, t) {
            return e + "," + r + "," + t;
        }, M = new Map();
        r.tileObjectMap().forEach(function (e) {
            M.set(S(e.gridPosX, e.gridPosY, e.layer), e.id);
        });
        for (var x = f.map(function (e) {
            var r;
            return null !== (r = M.get(S(e.x, e.y, e.z))) && void 0 !== r ? r : "";
        }), b = 0; b < f.length; b++) {
            var _ = f[b].tileId, w = x[b];
            if (w !== _) {
                var R = x.indexOf(_);
                if (-1 !== R) {
                    r.swapTilePositions(w, _);
                    x[R] = w;
                    x[b] = _;
                }
            }
        }
    };
    Tile2CurveSolver.prototype.pickMaxFreedThenMedianAge = function (e) {
        var r = this;
        if (0 === e.length)
            return null;
        if (1 === e.length)
            return e[0];
        var t = e.map(function (e) {
            var t;
            return {
                coord: e,
                freed: r.countFreedForSingle(e),
                age: (null === (t = r.board.get(e)) || void 0 === t ? void 0 : t.age) || 0
            };
        }), o = t.map(function (e) {
            return e.age;
        }).sort(function (e, r) {
            return e - r;
        }), i = Math.floor(o.length / 2), a = o.length % 2 == 0 ? (o[i - 1] + o[i]) / 2 : o[i];
        t.sort(function (e, r) {
            return r.freed !== e.freed ? r.freed - e.freed : Math.abs(e.age - a) - Math.abs(r.age - a);
        });
        return t[0].coord;
    };
    Tile2CurveSolver.prototype.pickMaxFreed = function (e) {
        var r = this, t = e.map(function (e) {
            return {
                coord: e,
                freed: r.countFreedForSingle(e)
            };
        });
        t.sort(function (e, r) {
            return r.freed - e.freed;
        });
        var o = Math.max(1, Math.ceil(0.4 * t.length));
        return t[Math.floor(Math.random() * o)].coord;
    };
    Tile2CurveSolver.prototype.pickMinAge = function (e) {
        var r = this, t = e.map(function (e) {
            var t;
            return {
                coord: e,
                age: (null === (t = r.board.get(e)) || void 0 === t ? void 0 : t.age) || 0
            };
        });
        t.sort(function (e, r) {
            return e.age - r.age;
        });
        var o = Math.max(1, Math.ceil(0.4 * t.length));
        return t[Math.floor(Math.random() * o)].coord;
    };
    Tile2CurveSolver.prototype.pickMaxAge = function (e) {
        var r = this, t = e.map(function (e) {
            var t;
            return {
                coord: e,
                age: (null === (t = r.board.get(e)) || void 0 === t ? void 0 : t.age) || 0
            };
        });
        t.sort(function (e, r) {
            return r.age - e.age;
        });
        var o = Math.max(1, Math.ceil(0.4 * t.length));
        return t[Math.floor(Math.random() * o)].coord;
    };
    Tile2CurveSolver.prototype.pickForPop = function (e) {
        var r = this, t = e.filter(function (e) {
            var t;
            return !(null === (t = r.board.get(e)) || void 0 === t ? void 0 : t.colorTag);
        }), o = e.filter(function (e) {
            var t, o = null === (t = r.board.get(e)) || void 0 === t ? void 0 : t.colorTag;
            return o && o === o.toLowerCase();
        }), i = t.length > 0 ? t : o.length > 0 ? o : e, a = i.filter(function (e) {
            var t, o = (null === (t = r.board.get(e)) || void 0 === t ? void 0 : t.age) || 0;
            return 1 === o || 2 === o;
        }), n = a.length > 0 ? a : i;
        return n[Math.floor(Math.random() * n.length)];
    };
    Tile2CurveSolver.prototype.popWithTag = function (e, r, t, o) {
        if (o === void 0) { o = false; }
        var i = this.board.get(e);
        i && (i.colorTag = r);
        var a = this.holder.findIndex(function (e) {
            return e.colorTag === r;
        });
        if (-1 !== a) {
            this.holder.splice(a, 1);
        }
        else {
            o && this.holder.length > 0 && this.holder.pop();
        }
        this.steps.push({
            coord: e,
            colorTag: r,
            action: "pop",
            pairedStepIndex: t
        });
        this.virtualRemove(e);
        this.advanceStep();
    };
    Tile2CurveSolver.prototype.pickHolderColor = function () {
        return this.holder.length > 0 ? this.holder[this.holder.length - 1].colorTag : this.nextUpper();
    };
    Tile2CurveSolver.prototype.colorUncolored = function (e, r) {
        var t, o;
        try {
            for (var i = __values(e), n = i.next(); !n.done; n = i.next()) {
                var l = n.value;
                if (l !== r) {
                    var s = this.board.get(l);
                    s && !s.colorTag && (s.colorTag = this.nextLower());
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
                n && !n.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    Tile2CurveSolver.prototype.allTilesColored = function () {
        var e, r;
        try {
            for (var t = __values(this.board), o = t.next(); !o.done; o = t.next()) {
                var i = __read(o.value, 2)[1];
                if (!i.removed && !i.colorTag)
                    return false;
            }
        }
        catch (r) {
            e = {
                error: r
            };
        }
        finally {
            try {
                o && !o.done && (r = t.return) && r.call(t);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return true;
    };
    Tile2CurveSolver.prototype.getSelectableCoords = function () {
        var e = this;
        return this.graph.getSelectableTiles(this.remainingTiles, this.tileMap).map(function (r) {
            return e.graph.tileToCoord(r);
        });
    };
    Tile2CurveSolver.prototype.virtualRemove = function (e) {
        var r = this.board.get(e);
        r && (r.removed = true);
        var t = this.tileMap.get(e);
        t && this.remainingTiles.delete(t);
    };
    Tile2CurveSolver.prototype.advanceStep = function () {
        var e, r;
        this.globalStep++;
        var t = new Set(this.getSelectableCoords());
        try {
            for (var o = __values(this.board), i = o.next(); !i.done; i = o.next()) {
                var l = __read(i.value, 2), s = l[0], h = l[1];
                h.removed || (t.has(s) ? h.age = 0 === h.age ? 1 : h.age + 1 : h.age = 0);
            }
        }
        catch (r) {
            e = {
                error: r
            };
        }
        finally {
            try {
                i && !i.done && (r = o.return) && r.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    Tile2CurveSolver.prototype.countFreedForSingle = function (e) {
        return this.safety.countFreedBlocks(e, "__dummy_no_match__", this.remainingTiles, this.tileMap);
    };
    Tile2CurveSolver.prototype.nextUpper = function () {
        var e = this.upperIndex++;
        return e < 26 ? String.fromCharCode(65 + e) : String.fromCharCode(65 + Math.floor(e / 26) - 1) + String.fromCharCode(65 + e % 26);
    };
    Tile2CurveSolver.prototype.nextLower = function () {
        var e = this.lowerIndex++;
        return e < 26 ? String.fromCharCode(97 + e) : String.fromCharCode(97 + Math.floor(e / 26) - 1) + String.fromCharCode(97 + e % 26);
    };
    Tile2CurveSolver = __decorate([
        mj.class("Tile2CurveSolver")
    ], Tile2CurveSolver);
    return Tile2CurveSolver;
}());
exports.default = Tile2CurveSolver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyQ3VydmVTaHVmZmxlL1NjcmlwdHMvVGlsZTJDdXJ2ZVNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW1FO0FBQ25FLGdFQUErRDtBQUMvRCx5REFBMkQ7QUFDM0QsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7QUFFdEI7SUFBQTtRQUNFLFVBQUssR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztRQUM5QixXQUFNLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxVQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNsQixtQkFBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDcEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSx3Q0FBb0IsQ0FBQyxDQUFDO1FBQ2pELGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFHO1lBQ2QsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLENBQUM7U0FDUixDQUFDO1FBQ0Ysa0JBQWEsR0FBRyxDQUFDLENBQUM7SUErMkJwQixDQUFDO0lBOTJCQyw2Q0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQ0gsQ0FB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SSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEYsQ0FBQyxDQUFDLEVBQ0YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsQ0FBQyxDQUFDLEVBQ0YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLEVBQ0YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcs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Q0Qsb0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDcEksQ0FBQztJQW40QmtCLGdCQUFnQjtRQURwQyxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBbzRCcEM7SUFBRCx1QkFBQztDQXA0QkQsQUFvNEJDLElBQUE7a0JBcDRCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVwZW5kZW5jeUdyYXBoIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9EZXBlbmRlbmN5R3JhcGgnO1xuaW1wb3J0IHsgU2FmZXR5Q2hlY2tlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvU2FmZXR5Q2hlY2tlcic7XG5pbXBvcnQgeyBERUZBVUxUX0NVUlZFX1BBUkFNUyB9IGZyb20gJy4vSUN1cnZlU29sdmVyVHlwZXMnO1xudGhpcyAmJiB0aGlzLl9fc3ByZWFkO1xuQG1qLmNsYXNzKFwiVGlsZTJDdXJ2ZVNvbHZlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJDdXJ2ZVNvbHZlciB7XG4gIGdyYXBoID0gbmV3IERlcGVuZGVuY3lHcmFwaCgpO1xuICBzYWZldHkgPSBuZXcgU2FmZXR5Q2hlY2tlcih0aGlzLmdyYXBoKTtcbiAgYm9hcmQgPSBuZXcgTWFwKCk7XG4gIHJlbWFpbmluZ1RpbGVzID0gbmV3IFNldCgpO1xuICB0aWxlTWFwID0gbmV3IE1hcCgpO1xuICBob2xkZXIgPSBbXTtcbiAgdXBwZXJJbmRleCA9IDA7XG4gIGxvd2VySW5kZXggPSAwO1xuICBzdGVwcyA9IFtdO1xuICBvY2N1cGFuY3lDdXJ2ZSA9IFtdO1xuICB1cGRhdGVDdXJ2ZSA9IFtdO1xuICBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0NVUlZFX1BBUkFNUyk7XG4gIGdsb2JhbFN0ZXAgPSAwO1xuICBob2xkZXJDYXJkSWRzID0gW107XG4gIHBhdHRlcm5Db3VudHMgPSB7XG4gICAgXCIrK1wiOiAwLFxuICAgIFwiLS1cIjogMCxcbiAgICBcIistXCI6IDAsXG4gICAgXCItK1wiOiAwXG4gIH07XG4gIGZhc3RQYWlyQ291bnQgPSAwO1xuICBzaHVmZmxlV2l0aENvbnRleHQoZSwgcikge1xuICAgIHZhciB0LFxuICAgICAgaSxcbiAgICAgIG4sXG4gICAgICBsLFxuICAgICAgcyA9IGUuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgaCA9IGUuZ2V0R2FtZURhdGEoKSxcbiAgICAgIGMgPSBbXSxcbiAgICAgIHUgPSBuZXcgU2V0KGguc2xvdEJhcklkcyB8fCBbXSk7XG4gICAgcy50aWxlT2JqZWN0TWFwKCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZS5pc1ZhbGlkICYmICF1LmhhcyhlLnNhdmVLZXkoKSkgJiYgYy5wdXNoKGUpO1xuICAgIH0pO1xuICAgIGlmIChjLmxlbmd0aCA8IDIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgcCA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBkID0gX192YWx1ZXMoaC5zbG90QmFySWRzKSwgZiA9IGQubmV4dCgpOyAhZi5kb25lOyBmID0gZC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHYgPSBmLnZhbHVlLFxuICAgICAgICAgIGcgPSBzLmdldFRpbGVPYmplY3RCeVBvc0lkKHYpO1xuICAgICAgICBnICYmIHAucHVzaChnLmNhcmRJZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGYgJiYgIWYuZG9uZSAmJiAoaSA9IGQucmV0dXJuKSAmJiBpLmNhbGwoZCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHkgPSBuZXcgTWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG0gPSBfX3ZhbHVlcyhjKSwgQyA9IG0ubmV4dCgpOyAhQy5kb25lOyBDID0gbS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIFQgPSBDLnZhbHVlO1xuICAgICAgICB5LnNldChULmNhcmRJZCwgKHkuZ2V0KFQuY2FyZElkKSB8fCAwKSArIDEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG4gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBDICYmICFDLmRvbmUgJiYgKGwgPSBtLnJldHVybikgJiYgbC5jYWxsKG0pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBTID0gW107XG4gICAgeS5mb3JFYWNoKGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICByZXR1cm4gUy5wdXNoKHtcbiAgICAgICAgY2FyZElkOiByLFxuICAgICAgICByZW1haW5pbmc6IGVcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBNID0gaC5zbG90QmFyQ291bnQgfHwgNCxcbiAgICAgIHggPSB0aGlzLnNvbHZlKGMsIHAsIFMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBob2xkZXJDYXBhY2l0eTogTVxuICAgICAgfSwgcikpO1xuICAgIGlmICgheCkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuYXBwbHlSZXN1bHQoeCwgcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgc29sdmUoZSwgciwgdCwgbykge1xuICAgIHRoaXMucmVzZXQoZSwgbyk7XG4gICAgdGhpcy5ob2xkZXJDYXJkSWRzID0gcjtcbiAgICB2YXIgaSA9IHIubGVuZ3RoO1xuICAgIGlmICghdGhpcy5zdGVwTWF0Y2hIb2xkZXIocikpIHJldHVybiBudWxsO1xuICAgIGlmICgwID09PSB0aGlzLnJlbWFpbmluZ1RpbGVzLnNpemUpIHJldHVybiB0aGlzLmJ1aWxkUmVzdWx0KHQpO1xuICAgIHZhciBhID0gdGhpcy5yZW1haW5pbmdUaWxlcy5zaXplO1xuICAgIHRoaXMuc3RlcEdlbmVyYXRlQ3VydmVzKGksIGEpO1xuICAgIHJldHVybiB0aGlzLnN0ZXBDb21wdXRlU29sdmVyKCkgPyB0aGlzLmJ1aWxkUmVzdWx0KHQpIDogbnVsbDtcbiAgfVxuICByZXNldChlLCByKSB7XG4gICAgdmFyIHQsIGksIG4sIGw7XG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfQ1VSVkVfUEFSQU1TKSwgcik7XG4gICAgdGhpcy5ib2FyZC5jbGVhcigpO1xuICAgIHRoaXMucmVtYWluaW5nVGlsZXMgPSBuZXcgU2V0KGUpO1xuICAgIHRoaXMudGlsZU1hcCA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmhvbGRlciA9IFtdO1xuICAgIHRoaXMudXBwZXJJbmRleCA9IDA7XG4gICAgdGhpcy5sb3dlckluZGV4ID0gMDtcbiAgICB0aGlzLnN0ZXBzID0gW107XG4gICAgdGhpcy5vY2N1cGFuY3lDdXJ2ZSA9IFtdO1xuICAgIHRoaXMudXBkYXRlQ3VydmUgPSBbXTtcbiAgICB0aGlzLmdsb2JhbFN0ZXAgPSAwO1xuICAgIHRoaXMuaG9sZGVyQ2FyZElkcyA9IFtdO1xuICAgIHRoaXMucGF0dGVybkNvdW50cyA9IHtcbiAgICAgIFwiKytcIjogMCxcbiAgICAgIFwiLS1cIjogMCxcbiAgICAgIFwiKy1cIjogMCxcbiAgICAgIFwiLStcIjogMFxuICAgIH07XG4gICAgdGhpcy5mYXN0UGFpckNvdW50ID0gMDtcbiAgICB0aGlzLmdyYXBoLmluaXQoZSwgbnVsbCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhlKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBjLnZhbHVlLFxuICAgICAgICAgIHAgPSB0aGlzLmdyYXBoLnRpbGVUb0Nvb3JkKHUpO1xuICAgICAgICB0aGlzLnRpbGVNYXAuc2V0KHAsIHUpO1xuICAgICAgICB0aGlzLmJvYXJkLnNldChwLCB7XG4gICAgICAgICAgY29vcmQ6IHAsXG4gICAgICAgICAgYWdlOiAwLFxuICAgICAgICAgIGNvbG9yVGFnOiBudWxsLFxuICAgICAgICAgIHJlbW92ZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKGkgPSBzLnJldHVybikgJiYgaS5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBkID0gdGhpcy5nZXRTZWxlY3RhYmxlQ29vcmRzKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGYgPSBfX3ZhbHVlcyhkKSwgdiA9IGYubmV4dCgpOyAhdi5kb25lOyB2ID0gZi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGcgPSB2LnZhbHVlO1xuICAgICAgICB0aGlzLmJvYXJkLmdldChnKS5hZ2UgPSAxO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG4gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICB2ICYmICF2LmRvbmUgJiYgKGwgPSBmLnJldHVybikgJiYgbC5jYWxsKGYpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0ZXBNYXRjaEhvbGRlcihlKSB7XG4gICAgZm9yICh2YXIgciwgdCwgbyA9IDA7IG8gPCBlLmxlbmd0aDsgbysrKSB7XG4gICAgICB2YXIgaSA9IHRoaXMuZ2V0U2VsZWN0YWJsZUNvb3JkcygpO1xuICAgICAgaWYgKDAgPT09IGkubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgbiA9IGlbMF0sXG4gICAgICAgIGwgPSBJbmZpbml0eTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHMgPSAociA9IHZvaWQgMCwgX192YWx1ZXMoaSkpLCBoID0gcy5uZXh0KCk7ICFoLmRvbmU7IGggPSBzLm5leHQoKSkge1xuICAgICAgICAgIHZhciBjID0gaC52YWx1ZSxcbiAgICAgICAgICAgIHUgPSB0aGlzLmNvdW50RnJlZWRGb3JTaW5nbGUoYyk7XG4gICAgICAgICAgaWYgKHUgPCBsKSB7XG4gICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgIG4gPSBjO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGggJiYgIWguZG9uZSAmJiAodCA9IHMucmV0dXJuKSAmJiB0LmNhbGwocyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBwID0gdGhpcy5uZXh0VXBwZXIoKTtcbiAgICAgIHRoaXMuYm9hcmQuZ2V0KG4pLmNvbG9yVGFnID0gcDtcbiAgICAgIHRoaXMuc3RlcHMucHVzaCh7XG4gICAgICAgIGNvb3JkOiBuLFxuICAgICAgICBjb2xvclRhZzogcCxcbiAgICAgICAgYWN0aW9uOiBcInBvcFwiLFxuICAgICAgICBwYWlyZWRTdGVwSW5kZXg6IC0obyArIDEpXG4gICAgICB9KTtcbiAgICAgIHRoaXMudmlydHVhbFJlbW92ZShuKTtcbiAgICAgIHRoaXMuYWR2YW5jZVN0ZXAoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgc3RlcEdlbmVyYXRlQ3VydmVzKGUsIHIpIHtcbiAgICB0aGlzLm9jY3VwYW5jeUN1cnZlID0gdGhpcy5nZW5lcmF0ZU9jY3VwYW5jeUN1cnZlKHIsIGUpO1xuICAgIHRoaXMudXBkYXRlQ3VydmUgPSB0aGlzLmdlbmVyYXRlVXBkYXRlQ3VydmUodGhpcy5vY2N1cGFuY3lDdXJ2ZSk7XG4gIH1cbiAgZ2VuZXJhdGVPY2N1cGFuY3lDdXJ2ZShlLCByKSB7XG4gICAgdmFyIHQgPSB0aGlzLnBhcmFtcy5ob2xkZXJDYXBhY2l0eSAtIDEsXG4gICAgICBvID0gZSA+PSB0aGlzLnBhcmFtcy5taW5TdGVwc0ZvclBlYWssXG4gICAgICBpID0gW10sXG4gICAgICBhID0gMCxcbiAgICAgIG4gPSBNYXRoLm1heCgwLCAyICogKHRoaXMucGFyYW1zLmhvbGRlckNhcGFjaXR5IC0gcikpO1xuICAgIGlmIChuID4gMCkgZm9yICh2YXIgbCA9IE1hdGgubWluKG4sIGUgLSAyKSwgcyA9IDA7IHMgPCBsOyBzKyspIHtcbiAgICAgIGEgPSBzICUgMiA9PSAwID8gMSA6IDA7XG4gICAgICBpLnB1c2goYSk7XG4gICAgfVxuICAgIHZhciBoID0gIW8gfHwgaS5pbmNsdWRlcyh0KTtcbiAgICBpZiAoIWggJiYgdCA+IDApIHtcbiAgICAgIHZhciBjID0gZSAtIGkubGVuZ3RoLFxuICAgICAgICB1ID0gdCAtIGE7XG4gICAgICBpZiAoYyA+PSB1ICsgdCkge1xuICAgICAgICB2YXIgcCA9IGMgLSAodSArIHQpLFxuICAgICAgICAgIGQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAocCArIDEpKTtcbiAgICAgICAgZm9yIChzID0gMDsgcyA8IGQ7IHMrKykge1xuICAgICAgICAgIGEgPSB0aGlzLnBpY2tSYW5kb21TdGVwKGEsIHQsIGUgLSBpLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIGkucHVzaChhKTtcbiAgICAgICAgfVxuICAgICAgICBpLmxlbmd0aDtcbiAgICAgICAgZm9yICg7IGEgPCB0Oykge1xuICAgICAgICAgIGErKztcbiAgICAgICAgICBpLnB1c2goYSk7XG4gICAgICAgIH1cbiAgICAgICAgaCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoOyBpLmxlbmd0aCA8IGU7KSBpZiAoaS5sZW5ndGggPT09IGUgLSAxKSB7XG4gICAgICBpLnB1c2goMCk7XG4gICAgICBhID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IHRoaXMucGlja1JhbmRvbVN0ZXAoYSwgdCwgZSAtIGkubGVuZ3RoIC0gMSk7XG4gICAgICBpLnB1c2goYSk7XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9XG4gIHBpY2tSYW5kb21TdGVwKGUsIHIsIHQpIHtcbiAgICB2YXIgbyA9IGUgKyAxIDw9IHIgJiYgdGhpcy5jYW5SZWFjaFplcm8oZSArIDEsIHQpLFxuICAgICAgaSA9IGUgLSAxID49IDAgJiYgdGhpcy5jYW5SZWFjaFplcm8oZSAtIDEsIHQpO1xuICAgIGlmIChvICYmIGkpIHtcbiAgICAgIHZhciBhID0gdGhpcy5wYXJhbXMuaG9sZGVyQ2FwYWNpdHkgKiB0aGlzLnBhcmFtcy5hdmdPY2N1cGFuY3lSYXRlLFxuICAgICAgICBuID0gTWF0aC5tYXgoMC4xNSwgTWF0aC5taW4oMC44NSwgMC41ICsgMC4yICogKGEgLSBlKSkpO1xuICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCBuID8gZSArIDEgOiBlIC0gMTtcbiAgICB9XG4gICAgcmV0dXJuIG8gPyBlICsgMSA6IGkgPyBlIC0gMSA6IGU7XG4gIH1cbiAgY2FuUmVhY2haZXJvKGUsIHIpIHtcbiAgICByZXR1cm4gciA+PSBlICYmIChyIC0gZSkgJSAyID09IDA7XG4gIH1cbiAgZ2VuZXJhdGVVcGRhdGVDdXJ2ZShlKSB7XG4gICAgdmFyIHIgPSB0aGlzLnBhcmFtcy51cGRhdGVQcm9iYWJpbGl0eTtcbiAgICByZXR1cm4gZS5tYXAoZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgIHJldHVybiBvID49IDIgJiYgdCA+IDAgJiYgdCA9PT0gZVtvIC0gMl0gJiYgTWF0aC5yYW5kb20oKSA8IHIgPyAxIDogMDtcbiAgICB9KTtcbiAgfVxuICBzdGVwQ29tcHV0ZVNvbHZlcigpIHtcbiAgICBmb3IgKHZhciBlID0gdGhpcy5vY2N1cGFuY3lDdXJ2ZSwgciA9IHRoaXMudXBkYXRlQ3VydmUsIHQgPSAwOyB0IDwgZS5sZW5ndGg7IHQgKz0gMikge1xuICAgICAgaWYgKHRoaXMuYWxsVGlsZXNDb2xvcmVkKCkpIHJldHVybiB0aGlzLmZhc3RQYWlyUmVtYWluaW5nKCk7XG4gICAgICBpZiAodCArIDEgPj0gZS5sZW5ndGgpIHJldHVybiB0aGlzLnByb2Nlc3NTaW5nbGVTdGVwKHQpO1xuICAgICAgdmFyIG8gPSB0ID4gMCA/IGVbdCAtIDFdIDogMCxcbiAgICAgICAgaSA9IChlW3RdIC0gbyA+IDAgPyBcIitcIiA6IFwiLVwiKSArIChlW3QgKyAxXSAtIGVbdF0gPiAwID8gXCIrXCIgOiBcIi1cIiksXG4gICAgICAgIGEgPSByW3QgKyAxXSB8fCAwO1xuICAgICAgdGhpcy5wYXR0ZXJuQ291bnRzW2ldKys7XG4gICAgICBpZiAoIXRoaXMucHJvY2Vzc1R3b1N0ZXBzKGksIGEsIHQpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHByb2Nlc3NUd29TdGVwcyhlLCByLCB0KSB7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwiKytcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9QbHVzUGx1cyh0KTtcbiAgICAgIGNhc2UgXCItLVwiOlxuICAgICAgICByZXR1cm4gdGhpcy5kb01pbnVzTWludXModCk7XG4gICAgICBjYXNlIFwiKy1cIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9QbHVzTWludXModCwgcik7XG4gICAgICBjYXNlIFwiLStcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9NaW51c1BsdXModCwgcik7XG4gICAgfVxuICB9XG4gIGRvUGx1c1BsdXMoZSkge1xuICAgIGZvciAodmFyIHIgPSAwOyByIDwgMjsgcisrKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuZ2V0U2VsZWN0YWJsZUNvb3JkcygpO1xuICAgICAgaWYgKDAgPT09IHQubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgbyA9IHRoaXMucGlja01heEZyZWVkVGhlbk1lZGlhbkFnZSh0KTtcbiAgICAgIGlmICghbykgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIGkgPSB0aGlzLm5leHRVcHBlcigpO1xuICAgICAgdGhpcy5ib2FyZC5nZXQobykuY29sb3JUYWcgPSBpO1xuICAgICAgdGhpcy5jb2xvclVuY29sb3JlZCh0LCBvKTtcbiAgICAgIHRoaXMuaG9sZGVyLnB1c2goe1xuICAgICAgICBjb2xvclRhZzogaSxcbiAgICAgICAgZW50ZXJTdGVwOiBlICsgclxuICAgICAgfSk7XG4gICAgICB0aGlzLnN0ZXBzLnB1c2goe1xuICAgICAgICBjb29yZDogbyxcbiAgICAgICAgY29sb3JUYWc6IGksXG4gICAgICAgIGFjdGlvbjogXCJwdXNoXCIsXG4gICAgICAgIHBhaXJlZFN0ZXBJbmRleDogLTFcbiAgICAgIH0pO1xuICAgICAgdGhpcy52aXJ0dWFsUmVtb3ZlKG8pO1xuICAgICAgdGhpcy5hZHZhbmNlU3RlcCgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBkb01pbnVzTWludXMoZSkge1xuICAgIGlmICh0aGlzLmhvbGRlci5sZW5ndGggPCAyKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHIgPSB0aGlzLmdldFNlbGVjdGFibGVDb29yZHMoKTtcbiAgICBpZiAoci5sZW5ndGggPCAyKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHQgPSB0aGlzLmhvbGRlclt0aGlzLmhvbGRlci5sZW5ndGggLSAxXS5jb2xvclRhZyxcbiAgICAgIG8gPSB0aGlzLmhvbGRlci5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuY29sb3JUYWcgIT09IHQ7XG4gICAgICB9KSxcbiAgICAgIGkgPSAtMSAhPT0gbyA/IHRoaXMuaG9sZGVyW29dLmNvbG9yVGFnIDogdCxcbiAgICAgIGEgPSB0aGlzLnBpY2tGb3JQb3Aocik7XG4gICAgdGhpcy5wb3BXaXRoVGFnKGEsIHQsIGUpO1xuICAgIHZhciBuID0gdGhpcy5nZXRTZWxlY3RhYmxlQ29vcmRzKCk7XG4gICAgaWYgKDAgPT09IG4ubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGwgPSB0aGlzLnBpY2tGb3JQb3Aobik7XG4gICAgdGhpcy5wb3BXaXRoVGFnKGwsIGksIGUgKyAxKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBkb1BsdXNNaW51cyhlLCByKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldFNlbGVjdGFibGVDb29yZHMoKTtcbiAgICBpZiAoMCA9PT0gdC5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoMCA9PT0gcikge1xuICAgICAgdmFyIG8gPSB0aGlzLm5leHRVcHBlcigpLFxuICAgICAgICBpID0gdGhpcy5waWNrTWF4QWdlKHQpO1xuICAgICAgdGhpcy5ib2FyZC5nZXQoaSkuY29sb3JUYWcgPSBvO1xuICAgICAgdGhpcy5jb2xvclVuY29sb3JlZCh0LCBpKTtcbiAgICAgIHRoaXMuaG9sZGVyLnB1c2goe1xuICAgICAgICBjb2xvclRhZzogbyxcbiAgICAgICAgZW50ZXJTdGVwOiBlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3RlcHMucHVzaCh7XG4gICAgICAgIGNvb3JkOiBpLFxuICAgICAgICBjb2xvclRhZzogbyxcbiAgICAgICAgYWN0aW9uOiBcInB1c2hcIixcbiAgICAgICAgcGFpcmVkU3RlcEluZGV4OiAtMVxuICAgICAgfSk7XG4gICAgICB0aGlzLnZpcnR1YWxSZW1vdmUoaSk7XG4gICAgICB0aGlzLmFkdmFuY2VTdGVwKCk7XG4gICAgICBpZiAoMCA9PT0gKGEgPSB0aGlzLmdldFNlbGVjdGFibGVDb29yZHMoKSkubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aGlzLnBvcFdpdGhUYWcodGhpcy5waWNrTWluQWdlKGEpLCBvLCBlICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhLFxuICAgICAgICBuID0gdGhpcy5waWNrSG9sZGVyQ29sb3IoKSxcbiAgICAgICAgbCA9IChvID0gdGhpcy5uZXh0VXBwZXIoKSwgdGhpcy5waWNrTWF4RnJlZWQodCkpO1xuICAgICAgdGhpcy5ib2FyZC5nZXQobCkuY29sb3JUYWcgPSBvO1xuICAgICAgdGhpcy5jb2xvclVuY29sb3JlZCh0LCBsKTtcbiAgICAgIHRoaXMuaG9sZGVyLnB1c2goe1xuICAgICAgICBjb2xvclRhZzogbyxcbiAgICAgICAgZW50ZXJTdGVwOiBlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3RlcHMucHVzaCh7XG4gICAgICAgIGNvb3JkOiBsLFxuICAgICAgICBjb2xvclRhZzogbyxcbiAgICAgICAgYWN0aW9uOiBcInB1c2hcIixcbiAgICAgICAgcGFpcmVkU3RlcEluZGV4OiAtMVxuICAgICAgfSk7XG4gICAgICB0aGlzLnZpcnR1YWxSZW1vdmUobCk7XG4gICAgICB0aGlzLmFkdmFuY2VTdGVwKCk7XG4gICAgICBpZiAoMCA9PT0gdGhpcy5ob2xkZXIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoMCA9PT0gKGEgPSB0aGlzLmdldFNlbGVjdGFibGVDb29yZHMoKSkubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aGlzLnBvcFdpdGhUYWcodGhpcy5waWNrTWluQWdlKGEpLCBuLCBlICsgMSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGRvTWludXNQbHVzKGUsIHIpIHtcbiAgICBpZiAoMCA9PT0gdGhpcy5ob2xkZXIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHQgPSB0aGlzLmdldFNlbGVjdGFibGVDb29yZHMoKTtcbiAgICBpZiAodC5sZW5ndGggPCAyKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG8gPSB0aGlzLnBpY2tIb2xkZXJDb2xvcigpLFxuICAgICAgaSA9IHRoaXMubmV4dFVwcGVyKCksXG4gICAgICBhID0gMCA9PT0gciA/IHRoaXMucGlja01heEFnZSh0KSA6IHRoaXMucGlja01pbkFnZSh0KTtcbiAgICB0aGlzLnBvcFdpdGhUYWcoYSwgbywgZSk7XG4gICAgdmFyIG4gPSB0aGlzLmdldFNlbGVjdGFibGVDb29yZHMoKTtcbiAgICBpZiAoMCA9PT0gbi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbCA9IDAgPT09IHIgPyB0aGlzLnBpY2tNaW5BZ2UobikgOiB0aGlzLnBpY2tNYXhGcmVlZChuKTtcbiAgICB0aGlzLmJvYXJkLmdldChsKS5jb2xvclRhZyA9IGk7XG4gICAgdGhpcy5jb2xvclVuY29sb3JlZChuLCBsKTtcbiAgICB0aGlzLmhvbGRlci5wdXNoKHtcbiAgICAgIGNvbG9yVGFnOiBpLFxuICAgICAgZW50ZXJTdGVwOiBlICsgMVxuICAgIH0pO1xuICAgIHRoaXMuc3RlcHMucHVzaCh7XG4gICAgICBjb29yZDogbCxcbiAgICAgIGNvbG9yVGFnOiBpLFxuICAgICAgYWN0aW9uOiBcInB1c2hcIixcbiAgICAgIHBhaXJlZFN0ZXBJbmRleDogLTFcbiAgICB9KTtcbiAgICB0aGlzLnZpcnR1YWxSZW1vdmUobCk7XG4gICAgdGhpcy5hZHZhbmNlU3RlcCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHByb2Nlc3NTaW5nbGVTdGVwKGUpIHtcbiAgICB2YXIgciA9IHRoaXMuZ2V0U2VsZWN0YWJsZUNvb3JkcygpO1xuICAgIGlmICgwID09PSByLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHRoaXMub2NjdXBhbmN5Q3VydmVbZV0gLSAoZSA+IDAgPyB0aGlzLm9jY3VwYW5jeUN1cnZlW2UgLSAxXSA6IDApID4gMCkge1xuICAgICAgdmFyIHQgPSB0aGlzLnBpY2tNYXhGcmVlZFRoZW5NZWRpYW5BZ2Uocik7XG4gICAgICBpZiAoIXQpIHJldHVybiBmYWxzZTtcbiAgICAgIHZhciBvID0gdGhpcy5uZXh0VXBwZXIoKTtcbiAgICAgIHRoaXMuYm9hcmQuZ2V0KHQpLmNvbG9yVGFnID0gbztcbiAgICAgIHRoaXMuaG9sZGVyLnB1c2goe1xuICAgICAgICBjb2xvclRhZzogbyxcbiAgICAgICAgZW50ZXJTdGVwOiBlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3RlcHMucHVzaCh7XG4gICAgICAgIGNvb3JkOiB0LFxuICAgICAgICBjb2xvclRhZzogbyxcbiAgICAgICAgYWN0aW9uOiBcInB1c2hcIixcbiAgICAgICAgcGFpcmVkU3RlcEluZGV4OiAtMVxuICAgICAgfSk7XG4gICAgICB0aGlzLnZpcnR1YWxSZW1vdmUodCk7XG4gICAgICB0aGlzLmFkdmFuY2VTdGVwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgwID09PSB0aGlzLmhvbGRlci5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMucG9wV2l0aFRhZyh0aGlzLnBpY2tNaW5BZ2UociksIHRoaXMucGlja0hvbGRlckNvbG9yKCksIGUpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmYXN0UGFpclJlbWFpbmluZygpIHtcbiAgICBmb3IgKHZhciBlID0gdGhpczs7KSB7XG4gICAgICB2YXIgciA9IHRoaXMuZ2V0U2VsZWN0YWJsZUNvb3JkcygpO1xuICAgICAgaWYgKHIubGVuZ3RoIDwgMikgYnJlYWs7XG4gICAgICB2YXIgdCA9IHIuZmlsdGVyKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgdmFyIHQsXG4gICAgICAgICAgICBvID0gbnVsbCA9PT0gKHQgPSBlLmJvYXJkLmdldChyKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jb2xvclRhZztcbiAgICAgICAgICByZXR1cm4gbyAmJiBvID09PSBvLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pLFxuICAgICAgICBvID0gdC5sZW5ndGggPj0gMiA/IHQgOiByLFxuICAgICAgICBpID0gb1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvLmxlbmd0aCldLFxuICAgICAgICBhID0gdGhpcy5uZXh0VXBwZXIoKTtcbiAgICAgIHRoaXMuYm9hcmQuZ2V0KGkpLmNvbG9yVGFnID0gYTtcbiAgICAgIHRoaXMuaG9sZGVyLnB1c2goe1xuICAgICAgICBjb2xvclRhZzogYSxcbiAgICAgICAgZW50ZXJTdGVwOiB0aGlzLnN0ZXBzLmxlbmd0aFxuICAgICAgfSk7XG4gICAgICB0aGlzLnN0ZXBzLnB1c2goe1xuICAgICAgICBjb29yZDogaSxcbiAgICAgICAgY29sb3JUYWc6IGEsXG4gICAgICAgIGFjdGlvbjogXCJwdXNoXCIsXG4gICAgICAgIHBhaXJlZFN0ZXBJbmRleDogLTFcbiAgICAgIH0pO1xuICAgICAgdGhpcy52aXJ0dWFsUmVtb3ZlKGkpO1xuICAgICAgdGhpcy5hZHZhbmNlU3RlcCgpO1xuICAgICAgdmFyIG4gPSB0aGlzLmdldFNlbGVjdGFibGVDb29yZHMoKTtcbiAgICAgIGlmICgwID09PSBuLmxlbmd0aCkgYnJlYWs7XG4gICAgICB2YXIgbCA9IG5bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbi5sZW5ndGgpXTtcbiAgICAgIHRoaXMucG9wV2l0aFRhZyhsLCBhLCB0aGlzLnN0ZXBzLmxlbmd0aCk7XG4gICAgICB0aGlzLmZhc3RQYWlyQ291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgYnVpbGRSZXN1bHQoZSkge1xuICAgIHZhciByLFxuICAgICAgdCxcbiAgICAgIG8sXG4gICAgICBpLFxuICAgICAgbCA9IG5ldyBNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKHRoaXMuYm9hcmQpLCBoID0gcy5uZXh0KCk7ICFoLmRvbmU7IGggPSBzLm5leHQoKSkgKGYgPSBfX3JlYWQoaC52YWx1ZSwgMilbMV0pLmNvbG9yVGFnICYmIGwuc2V0KGYuY29sb3JUYWcsIChsLmdldChmLmNvbG9yVGFnKSB8fCAwKSArIDEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHIgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBoICYmICFoLmRvbmUgJiYgKHQgPSBzLnJldHVybikgJiYgdC5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBjID0gdGhpcy5tYXBWaXJ0dWFsVG9BY3R1YWwoZSwgbCksXG4gICAgICB1ID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBwID0gX192YWx1ZXModGhpcy5ib2FyZCksIGQgPSBwLm5leHQoKTsgIWQuZG9uZTsgZCA9IHAubmV4dCgpKSB7XG4gICAgICAgIHZhciBmLFxuICAgICAgICAgIHYgPSBfX3JlYWQoZC52YWx1ZSwgMiksXG4gICAgICAgICAgZyA9IHZbMF07XG4gICAgICAgIGlmICgoZiA9IHZbMV0pLmNvbG9yVGFnKSB7XG4gICAgICAgICAgdmFyIHkgPSBjLmdldChmLmNvbG9yVGFnKTtcbiAgICAgICAgICB2b2lkIDAgIT09IHkgJiYgdS5zZXQoZywgeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZCAmJiAhZC5kb25lICYmIChpID0gcC5yZXR1cm4pICYmIGkuY2FsbChwKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3RlcHM6IHRoaXMuc3RlcHMsXG4gICAgICBjb2xvclRvQ2FyZElkOiBjLFxuICAgICAgY29vcmRUb0NhcmRJZDogdSxcbiAgICAgIG9jY3VwYW5jeUN1cnZlOiB0aGlzLm9jY3VwYW5jeUN1cnZlLFxuICAgICAgdXBkYXRlQ3VydmU6IHRoaXMudXBkYXRlQ3VydmVcbiAgICB9O1xuICB9XG4gIG1hcFZpcnR1YWxUb0FjdHVhbChlLCByKSB7XG4gICAgZm9yICh2YXIgdCwgaSwgbCwgcywgaCwgYywgdSA9IHRoaXMsIHAgPSBuZXcgTWFwKCksIGQgPSBlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZSk7XG4gICAgICB9KSwgZiA9IHRoaXMuaG9sZGVyQ2FyZElkcy5sZW5ndGgsIHYgPSBmdW5jdGlvbiB2KGUpIHtcbiAgICAgICAgdmFyIHIgPSBnLnN0ZXBzW2VdO1xuICAgICAgICBwLnNldChyLmNvbG9yVGFnLCBnLmhvbGRlckNhcmRJZHNbZV0pO1xuICAgICAgICB2YXIgdCA9IGQuZmluZEluZGV4KGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgcmV0dXJuIHIuY2FyZElkID09PSB1LmhvbGRlckNhcmRJZHNbZV0gJiYgci5yZW1haW5pbmcgPj0gMTtcbiAgICAgICAgfSk7XG4gICAgICAgIC0xICE9PSB0ICYmIChkW3RdLnJlbWFpbmluZyAtPSAxKTtcbiAgICAgIH0sIGcgPSB0aGlzLCB5ID0gMDsgeSA8IGY7IHkrKykgdih5KTtcbiAgICB2YXIgbSA9IFtdLFxuICAgICAgQyA9IG5ldyBTZXQocC5rZXlzKCkpLFxuICAgICAgVCA9IG5ldyBNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgUyA9IF9fdmFsdWVzKHRoaXMuc3RlcHMpLCBNID0gUy5uZXh0KCk7ICFNLmRvbmU7IE0gPSBTLm5leHQoKSkge1xuICAgICAgICB2YXIgeCA9IE0udmFsdWUsXG4gICAgICAgICAgYiA9IHguY29sb3JUYWc7XG4gICAgICAgIGlmICghQy5oYXMoYikpIHtcbiAgICAgICAgICBDLmFkZChiKTtcbiAgICAgICAgICBtLnB1c2goYik7XG4gICAgICAgICAgdmFyIF8gPSB0aGlzLnN0ZXBzLmluZGV4T2YoeCkgLSBmO1xuICAgICAgICAgIGlmIChfID49IDAgJiYgXyA8IHRoaXMub2NjdXBhbmN5Q3VydmUubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdyA9IF8gPiAwID8gdGhpcy5vY2N1cGFuY3lDdXJ2ZVtfIC0gMV0gOiAwO1xuICAgICAgICAgICAgVC5zZXQoYiwge1xuICAgICAgICAgICAgICBwcmV2OiB3LFxuICAgICAgICAgICAgICBjdXI6IHRoaXMub2NjdXBhbmN5Q3VydmVbX11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBNICYmICFNLmRvbmUgJiYgKGkgPSBTLnJldHVybikgJiYgaS5jYWxsKFMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBSID0gX192YWx1ZXModGhpcy5ib2FyZCksIFAgPSBSLm5leHQoKTsgIVAuZG9uZTsgUCA9IFIubmV4dCgpKSB7XG4gICAgICAgIHZhciBJID0gX19yZWFkKFAudmFsdWUsIDIpWzFdO1xuICAgICAgICBpZiAoSS5jb2xvclRhZyAmJiAhQy5oYXMoSS5jb2xvclRhZykpIHtcbiAgICAgICAgICBDLmFkZChJLmNvbG9yVGFnKTtcbiAgICAgICAgICBtLnB1c2goSS5jb2xvclRhZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgUCAmJiAhUC5kb25lICYmIChzID0gUi5yZXR1cm4pICYmIHMuY2FsbChSKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChsKSB0aHJvdyBsLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgayA9IHRoaXMucGFyYW1zLnByZWZlclJlbWFpbmluZzAxLFxuICAgICAgRiA9IHRoaXMucGFyYW1zLnByZWZlclJlbWFpbmluZ01pbjIzLFxuICAgICAgTyA9IE1hdGguZmxvb3IodGhpcy5wYXJhbXMuaG9sZGVyQ2FwYWNpdHkgLyAyKSxcbiAgICAgIEEgPSBtLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gKHIuZ2V0KGUpIHx8IDEpID49IDI7XG4gICAgICB9KSxcbiAgICAgIGogPSBtLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gKHIuZ2V0KGUpIHx8IDEpIDwgMjtcbiAgICAgIH0pLFxuICAgICAgVSA9IGZ1bmN0aW9uIFUoZSkge1xuICAgICAgICB2YXIgdCA9IHIuZ2V0KGUpIHx8IDEsXG4gICAgICAgICAgbyA9IFQuZ2V0KGUpLFxuICAgICAgICAgIGkgPSAtMTtcbiAgICAgICAgdCA+PSAyICYmIG8gJiYgKGkgPSBvLmN1ciA8IE8gPyBkLmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLnJlbWFpbmluZyA+PSB0ICYmIGUucmVtYWluaW5nID09PSBrO1xuICAgICAgICB9KSA6IGQuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUucmVtYWluaW5nID49IHQgJiYgZS5yZW1haW5pbmcgPiBGO1xuICAgICAgICB9KSk7XG4gICAgICAgIGlmICgtMSA9PT0gaSkge1xuICAgICAgICAgIHZhciBhID0gZC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLnJlbWFpbmluZyA+PSB0O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGEubGVuZ3RoID4gMCAmJiAoaSA9IGQuaW5kZXhPZihhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGEubGVuZ3RoKV0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoLTEgIT09IGkpIHtcbiAgICAgICAgICBwLnNldChlLCBkW2ldLmNhcmRJZCk7XG4gICAgICAgICAgZFtpXS5yZW1haW5pbmcgLT0gdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbiA9IGQuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUucmVtYWluaW5nID49IDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIHAuc2V0KGUsIG4uY2FyZElkKTtcbiAgICAgICAgICAgIG4ucmVtYWluaW5nIC09IE1hdGgubWluKHQsIG4ucmVtYWluaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIEUgPSBfX3ZhbHVlcyhBLmNvbmNhdChqKSksIEQgPSBFLm5leHQoKTsgIUQuZG9uZTsgRCA9IEUubmV4dCgpKSBVKGIgPSBELnZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgRCAmJiAhRC5kb25lICYmIChjID0gRS5yZXR1cm4pICYmIGMuY2FsbChFKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChoKSB0aHJvdyBoLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfVxuICBhcHBseVJlc3VsdChlLCByKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgaSxcbiAgICAgIGwsXG4gICAgICBzID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBoID0gX192YWx1ZXMoZS5jb29yZFRvQ2FyZElkKSwgYyA9IGgubmV4dCgpOyAhYy5kb25lOyBjID0gaC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBfX3JlYWQoYy52YWx1ZSwgMSlbMF0sXG4gICAgICAgICAgcCA9IHRoaXMudGlsZU1hcC5nZXQodSk7XG4gICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgdmFyIGQgPSBwLmNhcmRJZDtcbiAgICAgICAgICBzLmhhcyhkKSB8fCBzLnNldChkLCBbXSk7XG4gICAgICAgICAgcy5nZXQoZCkucHVzaChwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKG8gPSBoLnJldHVybikgJiYgby5jYWxsKGgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZm9yICh2YXIgciwgdCA9IGUubGVuZ3RoIC0gMTsgdCA+IDA7IHQtLSkge1xuICAgICAgICB2YXIgbyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0ICsgMSkpO1xuICAgICAgICByID0gX19yZWFkKFtlW29dLCBlW3RdXSwgMiksIGVbdF0gPSByWzBdLCBlW29dID0gclsxXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgZiA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciB2ID0gX192YWx1ZXMoZS5jb29yZFRvQ2FyZElkKSwgZyA9IHYubmV4dCgpOyAhZy5kb25lOyBnID0gdi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHkgPSBfX3JlYWQoZy52YWx1ZSwgMiksXG4gICAgICAgICAgbSA9ICh1ID0geVswXSwgeVsxXSksXG4gICAgICAgICAgQyA9IHRoaXMudGlsZU1hcC5nZXQodSk7XG4gICAgICAgIGlmIChDKSB7XG4gICAgICAgICAgdmFyIFQgPSBzLmdldChtKTtcbiAgICAgICAgICBUICYmIDAgIT09IFQubGVuZ3RoICYmIGYucHVzaCh7XG4gICAgICAgICAgICB0aWxlSWQ6IFQucG9wKCkuaWQsXG4gICAgICAgICAgICB4OiBDLmdyaWRQb3NYLFxuICAgICAgICAgICAgeTogQy5ncmlkUG9zWSxcbiAgICAgICAgICAgIHo6IEMubGF5ZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGkgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBnICYmICFnLmRvbmUgJiYgKGwgPSB2LnJldHVybikgJiYgbC5jYWxsKHYpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBTID0gZnVuY3Rpb24gUyhlLCByLCB0KSB7XG4gICAgICAgIHJldHVybiBlICsgXCIsXCIgKyByICsgXCIsXCIgKyB0O1xuICAgICAgfSxcbiAgICAgIE0gPSBuZXcgTWFwKCk7XG4gICAgci50aWxlT2JqZWN0TWFwKCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgTS5zZXQoUyhlLmdyaWRQb3NYLCBlLmdyaWRQb3NZLCBlLmxheWVyKSwgZS5pZCk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgeCA9IGYubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciByO1xuICAgICAgICByZXR1cm4gbnVsbCAhPT0gKHIgPSBNLmdldChTKGUueCwgZS55LCBlLnopKSkgJiYgdm9pZCAwICE9PSByID8gciA6IFwiXCI7XG4gICAgICB9KSwgYiA9IDA7IGIgPCBmLmxlbmd0aDsgYisrKSB7XG4gICAgICB2YXIgXyA9IGZbYl0udGlsZUlkLFxuICAgICAgICB3ID0geFtiXTtcbiAgICAgIGlmICh3ICE9PSBfKSB7XG4gICAgICAgIHZhciBSID0geC5pbmRleE9mKF8pO1xuICAgICAgICBpZiAoLTEgIT09IFIpIHtcbiAgICAgICAgICByLnN3YXBUaWxlUG9zaXRpb25zKHcsIF8pO1xuICAgICAgICAgIHhbUl0gPSB3O1xuICAgICAgICAgIHhbYl0gPSBfO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBpY2tNYXhGcmVlZFRoZW5NZWRpYW5BZ2UoZSkge1xuICAgIHZhciByID0gdGhpcztcbiAgICBpZiAoMCA9PT0gZS5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgIGlmICgxID09PSBlLmxlbmd0aCkgcmV0dXJuIGVbMF07XG4gICAgdmFyIHQgPSBlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb29yZDogZSxcbiAgICAgICAgICBmcmVlZDogci5jb3VudEZyZWVkRm9yU2luZ2xlKGUpLFxuICAgICAgICAgIGFnZTogKG51bGwgPT09ICh0ID0gci5ib2FyZC5nZXQoZSkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuYWdlKSB8fCAwXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIG8gPSB0Lm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5hZ2U7XG4gICAgICB9KS5zb3J0KGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICAgIHJldHVybiBlIC0gcjtcbiAgICAgIH0pLFxuICAgICAgaSA9IE1hdGguZmxvb3Ioby5sZW5ndGggLyAyKSxcbiAgICAgIGEgPSBvLmxlbmd0aCAlIDIgPT0gMCA/IChvW2kgLSAxXSArIG9baV0pIC8gMiA6IG9baV07XG4gICAgdC5zb3J0KGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICByZXR1cm4gci5mcmVlZCAhPT0gZS5mcmVlZCA/IHIuZnJlZWQgLSBlLmZyZWVkIDogTWF0aC5hYnMoZS5hZ2UgLSBhKSAtIE1hdGguYWJzKHIuYWdlIC0gYSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRbMF0uY29vcmQ7XG4gIH1cbiAgcGlja01heEZyZWVkKGUpIHtcbiAgICB2YXIgciA9IHRoaXMsXG4gICAgICB0ID0gZS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb29yZDogZSxcbiAgICAgICAgICBmcmVlZDogci5jb3VudEZyZWVkRm9yU2luZ2xlKGUpXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB0LnNvcnQoZnVuY3Rpb24gKGUsIHIpIHtcbiAgICAgIHJldHVybiByLmZyZWVkIC0gZS5mcmVlZDtcbiAgICB9KTtcbiAgICB2YXIgbyA9IE1hdGgubWF4KDEsIE1hdGguY2VpbCgwLjQgKiB0Lmxlbmd0aCkpO1xuICAgIHJldHVybiB0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG8pXS5jb29yZDtcbiAgfVxuICBwaWNrTWluQWdlKGUpIHtcbiAgICB2YXIgciA9IHRoaXMsXG4gICAgICB0ID0gZS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29vcmQ6IGUsXG4gICAgICAgICAgYWdlOiAobnVsbCA9PT0gKHQgPSByLmJvYXJkLmdldChlKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5hZ2UpIHx8IDBcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIHQuc29ydChmdW5jdGlvbiAoZSwgcikge1xuICAgICAgcmV0dXJuIGUuYWdlIC0gci5hZ2U7XG4gICAgfSk7XG4gICAgdmFyIG8gPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwoMC40ICogdC5sZW5ndGgpKTtcbiAgICByZXR1cm4gdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvKV0uY29vcmQ7XG4gIH1cbiAgcGlja01heEFnZShlKSB7XG4gICAgdmFyIHIgPSB0aGlzLFxuICAgICAgdCA9IGUubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvb3JkOiBlLFxuICAgICAgICAgIGFnZTogKG51bGwgPT09ICh0ID0gci5ib2FyZC5nZXQoZSkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuYWdlKSB8fCAwXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB0LnNvcnQoZnVuY3Rpb24gKGUsIHIpIHtcbiAgICAgIHJldHVybiByLmFnZSAtIGUuYWdlO1xuICAgIH0pO1xuICAgIHZhciBvID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKDAuNCAqIHQubGVuZ3RoKSk7XG4gICAgcmV0dXJuIHRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbyldLmNvb3JkO1xuICB9XG4gIHBpY2tGb3JQb3AoZSkge1xuICAgIHZhciByID0gdGhpcyxcbiAgICAgIHQgPSBlLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgcmV0dXJuICEobnVsbCA9PT0gKHQgPSByLmJvYXJkLmdldChlKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jb2xvclRhZyk7XG4gICAgICB9KSxcbiAgICAgIG8gPSBlLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCxcbiAgICAgICAgICBvID0gbnVsbCA9PT0gKHQgPSByLmJvYXJkLmdldChlKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jb2xvclRhZztcbiAgICAgICAgcmV0dXJuIG8gJiYgbyA9PT0gby50b0xvd2VyQ2FzZSgpO1xuICAgICAgfSksXG4gICAgICBpID0gdC5sZW5ndGggPiAwID8gdCA6IG8ubGVuZ3RoID4gMCA/IG8gOiBlLFxuICAgICAgYSA9IGkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0LFxuICAgICAgICAgIG8gPSAobnVsbCA9PT0gKHQgPSByLmJvYXJkLmdldChlKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5hZ2UpIHx8IDA7XG4gICAgICAgIHJldHVybiAxID09PSBvIHx8IDIgPT09IG87XG4gICAgICB9KSxcbiAgICAgIG4gPSBhLmxlbmd0aCA+IDAgPyBhIDogaTtcbiAgICByZXR1cm4gbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuLmxlbmd0aCldO1xuICB9XG4gIHBvcFdpdGhUYWcoZSwgciwgdCwgbyA9IGZhbHNlKSB7XG4gICAgdmFyIGkgPSB0aGlzLmJvYXJkLmdldChlKTtcbiAgICBpICYmIChpLmNvbG9yVGFnID0gcik7XG4gICAgdmFyIGEgPSB0aGlzLmhvbGRlci5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLmNvbG9yVGFnID09PSByO1xuICAgIH0pO1xuICAgIGlmICgtMSAhPT0gYSkge1xuICAgICAgdGhpcy5ob2xkZXIuc3BsaWNlKGEsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvICYmIHRoaXMuaG9sZGVyLmxlbmd0aCA+IDAgJiYgdGhpcy5ob2xkZXIucG9wKCk7XG4gICAgfVxuICAgIHRoaXMuc3RlcHMucHVzaCh7XG4gICAgICBjb29yZDogZSxcbiAgICAgIGNvbG9yVGFnOiByLFxuICAgICAgYWN0aW9uOiBcInBvcFwiLFxuICAgICAgcGFpcmVkU3RlcEluZGV4OiB0XG4gICAgfSk7XG4gICAgdGhpcy52aXJ0dWFsUmVtb3ZlKGUpO1xuICAgIHRoaXMuYWR2YW5jZVN0ZXAoKTtcbiAgfVxuICBwaWNrSG9sZGVyQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9sZGVyLmxlbmd0aCA+IDAgPyB0aGlzLmhvbGRlclt0aGlzLmhvbGRlci5sZW5ndGggLSAxXS5jb2xvclRhZyA6IHRoaXMubmV4dFVwcGVyKCk7XG4gIH1cbiAgY29sb3JVbmNvbG9yZWQoZSwgcikge1xuICAgIHZhciB0LCBvO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMoZSksIG4gPSBpLm5leHQoKTsgIW4uZG9uZTsgbiA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gbi52YWx1ZTtcbiAgICAgICAgaWYgKGwgIT09IHIpIHtcbiAgICAgICAgICB2YXIgcyA9IHRoaXMuYm9hcmQuZ2V0KGwpO1xuICAgICAgICAgIHMgJiYgIXMuY29sb3JUYWcgJiYgKHMuY29sb3JUYWcgPSB0aGlzLm5leHRMb3dlcigpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBuICYmICFuLmRvbmUgJiYgKG8gPSBpLnJldHVybikgJiYgby5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFsbFRpbGVzQ29sb3JlZCgpIHtcbiAgICB2YXIgZSwgcjtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdCA9IF9fdmFsdWVzKHRoaXMuYm9hcmQpLCBvID0gdC5uZXh0KCk7ICFvLmRvbmU7IG8gPSB0Lm5leHQoKSkge1xuICAgICAgICB2YXIgaSA9IF9fcmVhZChvLnZhbHVlLCAyKVsxXTtcbiAgICAgICAgaWYgKCFpLnJlbW92ZWQgJiYgIWkuY29sb3JUYWcpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogclxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbyAmJiAhby5kb25lICYmIChyID0gdC5yZXR1cm4pICYmIHIuY2FsbCh0KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXRTZWxlY3RhYmxlQ29vcmRzKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy5ncmFwaC5nZXRTZWxlY3RhYmxlVGlsZXModGhpcy5yZW1haW5pbmdUaWxlcywgdGhpcy50aWxlTWFwKS5tYXAoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiBlLmdyYXBoLnRpbGVUb0Nvb3JkKHIpO1xuICAgIH0pO1xuICB9XG4gIHZpcnR1YWxSZW1vdmUoZSkge1xuICAgIHZhciByID0gdGhpcy5ib2FyZC5nZXQoZSk7XG4gICAgciAmJiAoci5yZW1vdmVkID0gdHJ1ZSk7XG4gICAgdmFyIHQgPSB0aGlzLnRpbGVNYXAuZ2V0KGUpO1xuICAgIHQgJiYgdGhpcy5yZW1haW5pbmdUaWxlcy5kZWxldGUodCk7XG4gIH1cbiAgYWR2YW5jZVN0ZXAoKSB7XG4gICAgdmFyIGUsIHI7XG4gICAgdGhpcy5nbG9iYWxTdGVwKys7XG4gICAgdmFyIHQgPSBuZXcgU2V0KHRoaXMuZ2V0U2VsZWN0YWJsZUNvb3JkcygpKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbyA9IF9fdmFsdWVzKHRoaXMuYm9hcmQpLCBpID0gby5uZXh0KCk7ICFpLmRvbmU7IGkgPSBvLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IF9fcmVhZChpLnZhbHVlLCAyKSxcbiAgICAgICAgICBzID0gbFswXSxcbiAgICAgICAgICBoID0gbFsxXTtcbiAgICAgICAgaC5yZW1vdmVkIHx8ICh0LmhhcyhzKSA/IGguYWdlID0gMCA9PT0gaC5hZ2UgPyAxIDogaC5hZ2UgKyAxIDogaC5hZ2UgPSAwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogclxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmIChyID0gby5yZXR1cm4pICYmIHIuY2FsbChvKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb3VudEZyZWVkRm9yU2luZ2xlKGUpIHtcbiAgICByZXR1cm4gdGhpcy5zYWZldHkuY291bnRGcmVlZEJsb2NrcyhlLCBcIl9fZHVtbXlfbm9fbWF0Y2hfX1wiLCB0aGlzLnJlbWFpbmluZ1RpbGVzLCB0aGlzLnRpbGVNYXApO1xuICB9XG4gIG5leHRVcHBlcigpIHtcbiAgICB2YXIgZSA9IHRoaXMudXBwZXJJbmRleCsrO1xuICAgIHJldHVybiBlIDwgMjYgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgZSkgOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgTWF0aC5mbG9vcihlIC8gMjYpIC0gMSkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgZSAlIDI2KTtcbiAgfVxuICBuZXh0TG93ZXIoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmxvd2VySW5kZXgrKztcbiAgICByZXR1cm4gZSA8IDI2ID8gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGUpIDogU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIE1hdGguZmxvb3IoZSAvIDI2KSAtIDEpICsgU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGUgJSAyNik7XG4gIH1cbn0iXX0=
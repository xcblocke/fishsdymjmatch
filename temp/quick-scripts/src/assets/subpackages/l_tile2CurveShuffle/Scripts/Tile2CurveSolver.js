"use strict";
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
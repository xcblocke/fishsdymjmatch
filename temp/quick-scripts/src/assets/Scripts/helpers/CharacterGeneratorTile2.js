"use strict";
cc._RF.push(module, 'cc0ddTcttVEBoDeRakHtzdP', 'CharacterGeneratorTile2');
// Scripts/helpers/CharacterGeneratorTile2.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ITileShuffleData = void 0;
var RandomCoordSel_1 = require("../RandomCoordSel");
var SameZCoordSel_1 = require("../SameZCoordSel");
var AntiChainCoordSel_1 = require("../AntiChainCoordSel");
var PredDepthCoordSel_1 = require("../PredDepthCoordSel");
var ShortDistCoordSel_1 = require("../ShortDistCoordSel");
var LongDistCoordSel_1 = require("../LongDistCoordSel");
var HeightPairCoordSel_1 = require("../HeightPairCoordSel");
var AntiIntuitiveCoordSel_1 = require("../AntiIntuitiveCoordSel");
var IntuitiveChainCoordSel_1 = require("../IntuitiveChainCoordSel");
var IntuitiveChainPlusCoordSel_1 = require("../IntuitiveChainPlusCoordSel");
var DifficultyDecisionCoordSel_1 = require("../DifficultyDecisionCoordSel");
var ChainMultiPlusCoordSel_1 = require("../ChainMultiPlusCoordSel");
var SymmetricCoordSel_1 = require("../SymmetricCoordSel");
var SymmetricShuffleCoordSel_1 = require("../SymmetricShuffleCoordSel");
var RandomCharSel_1 = require("../RandomCharSel");
var ColorNearCharSel_1 = require("../ColorNearCharSel");
var ColorFarCharSel_1 = require("../ColorFarCharSel");
var PredCoordCharSel_1 = require("../PredCoordCharSel");
var PredTriggerCharSel_1 = require("../PredTriggerCharSel");
var RowDiversityCharSel_1 = require("../RowDiversityCharSel");
var ChainAvoidCharSel_1 = require("../ChainAvoidCharSel");
var DualMTriggerCharSel_1 = require("../DualMTriggerCharSel");
var RecentTwoNearCharSel_1 = require("../RecentTwoNearCharSel");
var DependencyGraph_1 = require("../DependencyGraph");
var SafetyChecker_1 = require("../SafetyChecker");
var MCharTriggerManager_1 = require("../MCharTriggerManager");
var SolverStringBuilder_1 = require("../SolverStringBuilder");
var CharacterGenerator_1 = require("../CharacterGenerator");
var ICharSelection_1 = require("../ICharSelection");
Object.defineProperty(exports, "ITileShuffleData", { enumerable: true, get: function () { return ICharSelection_1.ITileShuffleData; } });
var CharacterGeneratorTile2 = /** @class */ (function () {
    function CharacterGeneratorTile2() {
        this.graph = new DependencyGraph_1.DependencyGraph();
        this.safety = new SafetyChecker_1.SafetyChecker(this.graph);
        this.mCharMgr = new MCharTriggerManager_1.MCharTriggerManager(this.graph);
        this.solverBuilder = new SolverStringBuilder_1.SolverStringBuilder(this.graph);
        this.recentCharsHistory = [];
        this.assignedChars = new Map();
        this.lastFreedCoords = new Set();
        this.pairingHistory = [];
        this.currentRemainingTiles = new Set();
        this.currentTileMap = new Map();
        this.maxSelectableZ = 0;
        this.lastSecondCoord = null;
        this.chainAgeCounter = new Map();
        this.prevSelectableForChain = new Set();
        this._startTime = 0;
        this._timeoutMs = 0;
        this._isTimeout = false;
        this.coordSelectors = new Map([[CharacterGenerator_1.ECoordSelectionType.Random, new RandomCoordSel_1.RandomCoordSel()], [CharacterGenerator_1.ECoordSelectionType.SameZ, new SameZCoordSel_1.SameZCoordSel()], [CharacterGenerator_1.ECoordSelectionType.AntiChain, new AntiChainCoordSel_1.AntiChainCoordSel()], [CharacterGenerator_1.ECoordSelectionType.PredDepthSync, new PredDepthCoordSel_1.PredDepthCoordSel()], [CharacterGenerator_1.ECoordSelectionType.ShortDistance, new ShortDistCoordSel_1.ShortDistCoordSel()], [CharacterGenerator_1.ECoordSelectionType.LongDistance, new LongDistCoordSel_1.LongDistCoordSel()], [CharacterGenerator_1.ECoordSelectionType.HeightPair, new HeightPairCoordSel_1.HeightPairCoordSel()], [CharacterGenerator_1.ECoordSelectionType.AntiIntuitive, new AntiIntuitiveCoordSel_1.AntiIntuitiveCoordSel()], [CharacterGenerator_1.ECoordSelectionType.IntuitiveChain, new IntuitiveChainCoordSel_1.IntuitiveChainCoordSel()], [CharacterGenerator_1.ECoordSelectionType.IntuitiveChainPlus, new IntuitiveChainPlusCoordSel_1.IntuitiveChainPlusCoordSel()], [CharacterGenerator_1.ECoordSelectionType.ChainMulti, new DifficultyDecisionCoordSel_1.DifficultyDecisionCoordSel()], [CharacterGenerator_1.ECoordSelectionType.ChainMultiPlus, new ChainMultiPlusCoordSel_1.ChainMultiPlusCoordSel()], [CharacterGenerator_1.ECoordSelectionType.Symmetric, new SymmetricCoordSel_1.SymmetricCoordSel()], [CharacterGenerator_1.ECoordSelectionType.SymmetricShuffle, new SymmetricShuffleCoordSel_1.SymmetricShuffleCoordSel()]]);
        this.charSelectors = new Map([[CharacterGenerator_1.ECharSelectionType.Random, new RandomCharSel_1.RandomCharSel()], [CharacterGenerator_1.ECharSelectionType.ColorNear, new ColorNearCharSel_1.ColorNearCharSel()], [CharacterGenerator_1.ECharSelectionType.ColorFar, new ColorFarCharSel_1.ColorFarCharSel()], [CharacterGenerator_1.ECharSelectionType.PredCoord, new PredCoordCharSel_1.PredCoordCharSel()], [CharacterGenerator_1.ECharSelectionType.PredTrigger, new PredTriggerCharSel_1.PredTriggerCharSel()], [CharacterGenerator_1.ECharSelectionType.RowDiversity, new RowDiversityCharSel_1.RowDiversityCharSel()], [CharacterGenerator_1.ECharSelectionType.ChainAvoid, new ChainAvoidCharSel_1.ChainAvoidCharSel()], [CharacterGenerator_1.ECharSelectionType.DualMTrigger, new DualMTriggerCharSel_1.DualMTriggerCharSel()], [CharacterGenerator_1.ECharSelectionType.RecentTwoNear, new RecentTwoNearCharSel_1.RecentTwoNearCharSel()]]);
    }
    CharacterGeneratorTile2_1 = CharacterGeneratorTile2;
    Object.defineProperty(CharacterGeneratorTile2.prototype, "isTimeout", {
        get: function () {
            return this._isTimeout;
        },
        enumerable: false,
        configurable: true
    });
    CharacterGeneratorTile2.getInstance = function () {
        this.instance || (this.instance = new CharacterGeneratorTile2_1());
        return this.instance;
    };
    CharacterGeneratorTile2.prototype.checkTimeout = function () {
        if (this._timeoutMs <= 0)
            return false;
        if (Date.now() - this._startTime > this._timeoutMs) {
            this._isTimeout = true;
            return true;
        }
        return false;
    };
    CharacterGeneratorTile2.prototype.generateCharacterAssignment = function (e, o, n, i, r, a) {
        if (i === void 0) { i = CharacterGenerator_1.ECoordSelectionType.Random; }
        if (r === void 0) { r = CharacterGenerator_1.ECharSelectionType.Random; }
        if (a === void 0) { a = 0; }
        this.resetState(e, a);
        this.graph.init(o, e.getTileMapObject());
        if (this.checkTimeout())
            return [];
        if (r === CharacterGenerator_1.ECharSelectionType.PredTrigger) {
            this.mCharMgr.initSingleM(o, n);
            if (this.checkTimeout())
                return [];
        }
        if (r === CharacterGenerator_1.ECharSelectionType.DualMTrigger) {
            this.mCharMgr.initDualM(o, n);
            if (this.checkTimeout())
                return [];
        }
        var l = this.generatePairingSequence(o, i, r);
        if (this._isTimeout && 0 === l.length)
            return [];
        var s = this.assignCharacters(l, n, r);
        s.length > 0 && CharacterGeneratorTile2_1.CONST_SHOW_DEBUG_INFO && this.solverBuilder.generate(s, this.currentTileMap);
        return s;
    };
    CharacterGeneratorTile2.prototype.computePTLGroups = function (e) {
        var t, o, n, a;
        if (0 === e.length)
            return new Map();
        var l = new Map(this.currentTileMap), s = new Set();
        try {
            for (var c = __values(l.values()), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                s.add(p);
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
        for (var f = new Map(), d = new Set(), h = 1; d.size < e.length;) {
            for (var y = [], m = 0; m < e.length; m++)
                if (!d.has(m)) {
                    var v = __read(e[m], 2), g = v[0], _ = v[1];
                    this.graph.isTileSelectable(g, s, l) && this.graph.isTileSelectable(_, s, l) && y.push(m);
                }
            if (0 === y.length)
                for (m = 0; m < e.length; m++)
                    d.has(m) || y.push(m);
            f.set(h, y);
            try {
                for (var T = (n = void 0, __values(y)), C = T.next(); !C.done; C = T.next()) {
                    var b = C.value;
                    d.add(b);
                    s.delete(e[b][0]);
                    s.delete(e[b][1]);
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    C && !C.done && (a = T.return) && a.call(T);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
            h++;
        }
        return f;
    };
    CharacterGeneratorTile2.prototype.applyAssignments = function (e, t) {
        var o, n, a, l, s = this, c = function c(e, t, o) {
            return e + "," + t + "," + o;
        }, u = [];
        try {
            for (var p = __values(e), f = p.next(); !f.done; f = p.next()) {
                var d = __read(f.value, 4), h = d[0], y = d[1], m = d[2], v = d[3];
                u.push({
                    destX: h.gridPosX,
                    destY: h.gridPosY,
                    destZ: h.layer,
                    desiredResId: m.resId
                });
                u.push({
                    destX: y.gridPosX,
                    destY: y.gridPosY,
                    destZ: y.layer,
                    desiredResId: v.resId
                });
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
        var g = new Set(u.map(function (e) {
            return c(e.destX, e.destY, e.destZ);
        })), _ = new Map();
        t.getAllCardTiles().forEach(function (e) {
            if (g.has(c(e.gridPosX, e.gridPosY, e.layer))) {
                _.has(e.cardId) || _.set(e.cardId, []);
                _.get(e.cardId).push(e);
            }
        });
        _.forEach(function (e) {
            return s.shuffleArray(e);
        });
        var T = [];
        try {
            for (var C = __values(u), b = C.next(); !b.done; b = C.next()) {
                var E = b.value, S = _.get(E.desiredResId);
                S && 0 !== S.length && T.push({
                    tileId: S.pop().id,
                    destX: E.destX,
                    destY: E.destY,
                    destZ: E.destZ
                });
            }
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
        var I = new Map();
        t.getAllCardTiles().forEach(function (e) {
            I.set(c(e.gridPosX, e.gridPosY, e.layer), e.id);
        });
        for (var w = T.map(function (e) {
            var t;
            return null !== (t = I.get(c(e.destX, e.destY, e.destZ))) && void 0 !== t ? t : "";
        }), B = 0; B < T.length; B++) {
            var x = T[B].tileId;
            if (w[B] !== x) {
                var M = w.indexOf(x);
                if (-1 !== M) {
                    t.swapTilePositions(w[B], x);
                    w[M] = w[B];
                    w[B] = x;
                }
            }
        }
    };
    CharacterGeneratorTile2.prototype.generateSolverString = function (e) {
        return this.solverBuilder.generate(e, this.currentTileMap);
    };
    CharacterGeneratorTile2.prototype.resetState = function (e, t) {
        if (t === void 0) { t = 0; }
        this.recentCharsHistory = [];
        this.assignedChars.clear();
        this.lastFreedCoords = new Set();
        this.pairingHistory = [];
        this.currentRemainingTiles = new Set();
        this.currentTileMap = new Map();
        this.maxSelectableZ = 0;
        this.lastSecondCoord = null;
        this.chainAgeCounter = new Map();
        this.prevSelectableForChain = new Set();
        this.mCharMgr.reset();
        this._startTime = Date.now();
        this._timeoutMs = t;
        this._isTimeout = false;
    };
    CharacterGeneratorTile2.prototype.buildCoordSelectionContext = function () {
        var e = this, t = 0, o = 0;
        if (this.chainAgeCounter.size > 0) {
            var n = Array.from(this.chainAgeCounter.values());
            t = Math.min.apply(Math, __spreadArrays(n));
            o = Math.max.apply(Math, __spreadArrays(n));
        }
        return {
            getExpanded: function (t, o) {
                return e.graph.getExpanded(t, o);
            },
            tileToCoord: function (t) {
                return e.graph.tileToCoord(t);
            },
            getTopologyLevel: function (t) {
                return e.graph.getTopologyLevel(t);
            },
            lastFreedCoords: this.lastFreedCoords,
            maxSelectableZ: this.maxSelectableZ,
            countFreedBlocks: function (t, o) {
                return e.safety.countFreedBlocks(t, o, e.currentRemainingTiles, e.currentTileMap);
            },
            hasNeighborSelectable: function (t) {
                return e.safety.hasNeighborSelectable(t, e.currentRemainingTiles, e.currentTileMap);
            },
            lastSecondCoord: this.lastSecondCoord,
            chainAgeCounter: this.chainAgeCounter,
            totalPairs: this.currentRemainingTiles ? Math.floor(this.currentRemainingTiles.size / 2) : 0,
            completedPairs: this.pairingHistory.length,
            minChainAge: t,
            maxChainAge: o
        };
    };
    CharacterGeneratorTile2.prototype.buildCharSelectionContext = function () {
        var e = this;
        return {
            recentCharsHistory: this.recentCharsHistory,
            assignedChars: this.assignedChars,
            getExpanded: function (t, o) {
                return e.graph.getExpanded(t, o);
            },
            tileToCoord: function (t) {
                return e.graph.tileToCoord(t);
            },
            pairingHistory: this.pairingHistory,
            mCharResId: this.mCharMgr.primaryResId,
            mCharActive: this.mCharMgr.active,
            mCharLockedResIds: this.mCharMgr.lockedResIds.size > 0 ? this.mCharMgr.lockedResIds : null
        };
    };
    CharacterGeneratorTile2.prototype.generatePairingSequence = function (e, t, o) {
        var n = this, i = [], l = new Set(e.filter(function (e) {
            return e.isValid;
        })), s = new Map(e.map(function (e) {
            return [n.graph.tileToCoord(e), e];
        })), c = t === CharacterGenerator_1.ECoordSelectionType.ChainMulti || t === CharacterGenerator_1.ECoordSelectionType.ChainMultiPlus;
        this.currentRemainingTiles = l;
        this.currentTileMap = s;
        for (; l.size >= 2 && !this.checkTimeout();) {
            var u = this.graph.getSelectableTiles(l, s);
            if (this.checkTimeout())
                break;
            c && this.updateChainAge(u, l);
            var p = this.checkMCharTriggers(o, u, s, l);
            if (p) {
                var f = __read(p, 2), d = f[0], h = f[1], y = this.graph.tileToCoord(d), m = this.graph.tileToCoord(h), v = this.safety.computeFreedCoords(y, m, l, s, u);
                this.pairingHistory.push([y, m]);
                i.push([d, h]);
                l.delete(d);
                l.delete(h);
                this.lastFreedCoords = v;
                t === CharacterGenerator_1.ECoordSelectionType.IntuitiveChainPlus && (this.lastSecondCoord = m);
            }
            else {
                this.mCharMgr.lockedCoords.size > 0 && (u = u.filter(function (e) {
                    return !n.mCharMgr.lockedCoords.has(n.graph.tileToCoord(e));
                }));
                if (u.length < 2)
                    break;
                this.maxSelectableZ = Math.max.apply(Math, __spreadArrays(u.map(function (e) {
                    return e.layer;
                })));
                for (var g = [], _ = 0; _ < u.length; _++)
                    for (var T = _ + 1; T < u.length; T++)
                        g.push([u[_], u[T]]);
                var C = this.selectPairWithSafety(g, t, l, s);
                if (this.checkTimeout() || !C)
                    break;
                var b = this.graph.tileToCoord(C[0]), E = this.graph.tileToCoord(C[1]), S = this.safety.computeFreedCoords(b, E, l, s, u);
                this.pairingHistory.push([b, E]);
                i.push(C);
                l.delete(C[0]);
                l.delete(C[1]);
                this.lastFreedCoords = S;
                t === CharacterGenerator_1.ECoordSelectionType.IntuitiveChainPlus && (this.lastSecondCoord = E);
                if (c) {
                    var I = this.graph.getSelectableTiles(l, s);
                    this.prevSelectableForChain = new Set(I.map(function (e) {
                        return n.graph.tileToCoord(e);
                    }));
                }
            }
        }
        return i;
    };
    CharacterGeneratorTile2.prototype.checkMCharTriggers = function (e, t, o, n) {
        return e === CharacterGenerator_1.ECharSelectionType.PredTrigger && this.mCharMgr.active ? this.mCharMgr.checkSingleMTrigger(t, o, n) : e === CharacterGenerator_1.ECharSelectionType.DualMTrigger && this.mCharMgr.groups.length > 0 ? this.mCharMgr.checkDualMTrigger(t, o, n) : null;
    };
    CharacterGeneratorTile2.prototype.updateChainAge = function (e, t) {
        var o, n, r = this, a = new Set(e.map(function (e) {
            return r.graph.tileToCoord(e);
        })), l = 0 === this.prevSelectableForChain.size;
        try {
            for (var s = __values(t), c = s.next(); !c.done; c = s.next()) {
                var u = c.value, p = this.graph.tileToCoord(u);
                if (a.has(p)) {
                    if (l) {
                        this.chainAgeCounter.set(p, 1);
                    }
                    else {
                        if (this.prevSelectableForChain.has(p)) {
                            this.chainAgeCounter.set(p, (this.chainAgeCounter.get(p) || 0) + 1);
                        }
                        else {
                            this.chainAgeCounter.set(p, 0);
                        }
                    }
                }
                else {
                    this.chainAgeCounter.set(p, 0);
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
                c && !c.done && (n = s.return) && n.call(s);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    };
    CharacterGeneratorTile2.prototype.selectPairWithSafety = function (e, t, o, n) {
        var r, a, s = this.graph.getSelectableTiles(o, n), c = new Set(s), u = [], p = this.coordSelectors.get(t) || new RandomCoordSel_1.RandomCoordSel(), f = this.buildCoordSelectionContext();
        try {
            for (var d = __values(e), h = d.next(); !h.done; h = d.next()) {
                var y = h.value;
                if (this.checkTimeout())
                    break;
                this.safety.isSafePairChoiceFast(y, o, n, s, c) && u.push({
                    priority: p.calculatePriority(y[0], y[1], f),
                    pair: y
                });
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                h && !h.done && (a = d.return) && a.call(d);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        if (0 === u.length)
            return null;
        u.sort(function (e, t) {
            return e.priority.priority !== t.priority.priority ? t.priority.priority - e.priority.priority : t.priority.subScore - e.priority.subScore;
        });
        var m = u[0].priority.priority, v = u.filter(function (e) {
            return e.priority.priority === m;
        });
        return v[Math.floor(Math.random() * v.length)].pair;
    };
    CharacterGeneratorTile2.prototype.assignCharacters = function (e, t, o) {
        var n, l, s, c = __spreadArrays(t);
        this.shuffleArray(c);
        var u = [], p = this.charSelectors.get(o) || new RandomCharSel_1.RandomCharSel(), f = this.buildCharSelectionContext(), d = new Map(), h = function h(e, t) {
            var o = y.graph.tileToCoord(e), n = y.graph.tileToCoord(t);
            if (y.mCharMgr.pairedCoords.has(o) || y.mCharMgr.pairedCoords.has(n)) {
                var i = y.mCharMgr.findGroupForCoord(o, n), r = (null == i ? void 0 : i.pairData) || y.mCharMgr.primaryPairData, a = null !== (s = null == i ? void 0 : i.resId) && void 0 !== s ? s : y.mCharMgr.primaryResId;
                if (r && null !== a) {
                    var l = d.get(a) || 0;
                    if (l < 2) {
                        u.push([e, t, r[0], r[1]]);
                        y.updateAssignmentHistory(e, t, r);
                        var h = c.findIndex(function (e) {
                            return e[0].resId === a;
                        });
                        -1 !== h && c.splice(h, 1);
                        d.set(a, l + 1);
                        return "continue";
                    }
                }
            }
            if (0 === c.length)
                return "break";
            var m = p.selectCharacterPair(e, t, c, f), v = c[m];
            c.splice(m, 1);
            u.push([e, t, v[0], v[1]]);
            y.updateAssignmentHistory(e, t, v);
        }, y = this;
        try {
            for (var m = __values(e), v = m.next(); !v.done; v = m.next()) {
                var g = __read(v.value, 2);
                if ("break" === h(g[0], g[1]))
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
                v && !v.done && (l = m.return) && l.call(m);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        return u;
    };
    CharacterGeneratorTile2.prototype.updateAssignmentHistory = function (e, t, o) {
        this.recentCharsHistory.push(o[0].resId);
        this.recentCharsHistory.length > 50 && this.recentCharsHistory.shift();
        this.assignedChars.set(this.graph.tileToCoord(e), o[0].resId);
        this.assignedChars.set(this.graph.tileToCoord(t), o[1].resId);
    };
    CharacterGeneratorTile2.prototype.shuffleArray = function (e) {
        for (var t, o = e.length - 1; o > 0; o--) {
            var n = Math.floor(Math.random() * (o + 1));
            t = __read([e[n], e[o]], 2), e[o] = t[0], e[n] = t[1];
        }
    };
    var CharacterGeneratorTile2_1;
    CharacterGeneratorTile2.CONST_SHOW_DEBUG_INFO = false;
    CharacterGeneratorTile2.instance = null;
    CharacterGeneratorTile2 = CharacterGeneratorTile2_1 = __decorate([
        mj.class("CharacterGeneratorTile2")
    ], CharacterGeneratorTile2);
    return CharacterGeneratorTile2;
}());
exports.default = CharacterGeneratorTile2;

cc._RF.pop();
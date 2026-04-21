
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/helpers/CharacterGeneratorTile2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2hlbHBlcnMvQ2hhcmFjdGVyR2VuZXJhdG9yVGlsZTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUFDbkQsa0RBQWlEO0FBQ2pELDBEQUF5RDtBQUN6RCwwREFBeUQ7QUFDekQsMERBQXlEO0FBQ3pELHdEQUF1RDtBQUN2RCw0REFBMkQ7QUFDM0Qsa0VBQWlFO0FBQ2pFLG9FQUFtRTtBQUNuRSw0RUFBMkU7QUFDM0UsNEVBQTJFO0FBQzNFLG9FQUFtRTtBQUNuRSwwREFBeUQ7QUFDekQsd0VBQXVFO0FBQ3ZFLGtEQUFpRDtBQUNqRCx3REFBdUQ7QUFDdkQsc0RBQXFEO0FBQ3JELHdEQUF1RDtBQUN2RCw0REFBMkQ7QUFDM0QsOERBQTZEO0FBQzdELDBEQUF5RDtBQUN6RCw4REFBNkQ7QUFDN0QsZ0VBQStEO0FBQy9ELHNEQUFxRDtBQUNyRCxrREFBaUQ7QUFDakQsOERBQTZEO0FBQzdELDhEQUE2RDtBQUM3RCw0REFBZ0Y7QUFDaEYsb0RBQXFEO0FBQzVDLGlHQURBLGlDQUFnQixPQUNBO0FBRXpCO0lBQUE7UUFDRSxVQUFLLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFHLElBQUksNkJBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsYUFBUSxHQUFHLElBQUkseUNBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLGtCQUFhLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMxQixvQkFBZSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsMEJBQXFCLEdBQUcsSUFBSSxHQUFHLEVBQUUs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ZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmRvbUNvb3JkU2VsIH0gZnJvbSAnLi4vUmFuZG9tQ29vcmRTZWwnO1xuaW1wb3J0IHsgU2FtZVpDb29yZFNlbCB9IGZyb20gJy4uL1NhbWVaQ29vcmRTZWwnO1xuaW1wb3J0IHsgQW50aUNoYWluQ29vcmRTZWwgfSBmcm9tICcuLi9BbnRpQ2hhaW5Db29yZFNlbCc7XG5pbXBvcnQgeyBQcmVkRGVwdGhDb29yZFNlbCB9IGZyb20gJy4uL1ByZWREZXB0aENvb3JkU2VsJztcbmltcG9ydCB7IFNob3J0RGlzdENvb3JkU2VsIH0gZnJvbSAnLi4vU2hvcnREaXN0Q29vcmRTZWwnO1xuaW1wb3J0IHsgTG9uZ0Rpc3RDb29yZFNlbCB9IGZyb20gJy4uL0xvbmdEaXN0Q29vcmRTZWwnO1xuaW1wb3J0IHsgSGVpZ2h0UGFpckNvb3JkU2VsIH0gZnJvbSAnLi4vSGVpZ2h0UGFpckNvb3JkU2VsJztcbmltcG9ydCB7IEFudGlJbnR1aXRpdmVDb29yZFNlbCB9IGZyb20gJy4uL0FudGlJbnR1aXRpdmVDb29yZFNlbCc7XG5pbXBvcnQgeyBJbnR1aXRpdmVDaGFpbkNvb3JkU2VsIH0gZnJvbSAnLi4vSW50dWl0aXZlQ2hhaW5Db29yZFNlbCc7XG5pbXBvcnQgeyBJbnR1aXRpdmVDaGFpblBsdXNDb29yZFNlbCB9IGZyb20gJy4uL0ludHVpdGl2ZUNoYWluUGx1c0Nvb3JkU2VsJztcbmltcG9ydCB7IERpZmZpY3VsdHlEZWNpc2lvbkNvb3JkU2VsIH0gZnJvbSAnLi4vRGlmZmljdWx0eURlY2lzaW9uQ29vcmRTZWwnO1xuaW1wb3J0IHsgQ2hhaW5NdWx0aVBsdXNDb29yZFNlbCB9IGZyb20gJy4uL0NoYWluTXVsdGlQbHVzQ29vcmRTZWwnO1xuaW1wb3J0IHsgU3ltbWV0cmljQ29vcmRTZWwgfSBmcm9tICcuLi9TeW1tZXRyaWNDb29yZFNlbCc7XG5pbXBvcnQgeyBTeW1tZXRyaWNTaHVmZmxlQ29vcmRTZWwgfSBmcm9tICcuLi9TeW1tZXRyaWNTaHVmZmxlQ29vcmRTZWwnO1xuaW1wb3J0IHsgUmFuZG9tQ2hhclNlbCB9IGZyb20gJy4uL1JhbmRvbUNoYXJTZWwnO1xuaW1wb3J0IHsgQ29sb3JOZWFyQ2hhclNlbCB9IGZyb20gJy4uL0NvbG9yTmVhckNoYXJTZWwnO1xuaW1wb3J0IHsgQ29sb3JGYXJDaGFyU2VsIH0gZnJvbSAnLi4vQ29sb3JGYXJDaGFyU2VsJztcbmltcG9ydCB7IFByZWRDb29yZENoYXJTZWwgfSBmcm9tICcuLi9QcmVkQ29vcmRDaGFyU2VsJztcbmltcG9ydCB7IFByZWRUcmlnZ2VyQ2hhclNlbCB9IGZyb20gJy4uL1ByZWRUcmlnZ2VyQ2hhclNlbCc7XG5pbXBvcnQgeyBSb3dEaXZlcnNpdHlDaGFyU2VsIH0gZnJvbSAnLi4vUm93RGl2ZXJzaXR5Q2hhclNlbCc7XG5pbXBvcnQgeyBDaGFpbkF2b2lkQ2hhclNlbCB9IGZyb20gJy4uL0NoYWluQXZvaWRDaGFyU2VsJztcbmltcG9ydCB7IER1YWxNVHJpZ2dlckNoYXJTZWwgfSBmcm9tICcuLi9EdWFsTVRyaWdnZXJDaGFyU2VsJztcbmltcG9ydCB7IFJlY2VudFR3b05lYXJDaGFyU2VsIH0gZnJvbSAnLi4vUmVjZW50VHdvTmVhckNoYXJTZWwnO1xuaW1wb3J0IHsgRGVwZW5kZW5jeUdyYXBoIH0gZnJvbSAnLi4vRGVwZW5kZW5jeUdyYXBoJztcbmltcG9ydCB7IFNhZmV0eUNoZWNrZXIgfSBmcm9tICcuLi9TYWZldHlDaGVja2VyJztcbmltcG9ydCB7IE1DaGFyVHJpZ2dlck1hbmFnZXIgfSBmcm9tICcuLi9NQ2hhclRyaWdnZXJNYW5hZ2VyJztcbmltcG9ydCB7IFNvbHZlclN0cmluZ0J1aWxkZXIgfSBmcm9tICcuLi9Tb2x2ZXJTdHJpbmdCdWlsZGVyJztcbmltcG9ydCB7IEVDb29yZFNlbGVjdGlvblR5cGUsIEVDaGFyU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uL0NoYXJhY3RlckdlbmVyYXRvcic7XG5pbXBvcnQgeyBJVGlsZVNodWZmbGVEYXRhIH0gZnJvbSAnLi4vSUNoYXJTZWxlY3Rpb24nO1xuZXhwb3J0IHsgSVRpbGVTaHVmZmxlRGF0YSB9O1xuQG1qLmNsYXNzKFwiQ2hhcmFjdGVyR2VuZXJhdG9yVGlsZTJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlckdlbmVyYXRvclRpbGUyIHtcbiAgZ3JhcGggPSBuZXcgRGVwZW5kZW5jeUdyYXBoKCk7XG4gIHNhZmV0eSA9IG5ldyBTYWZldHlDaGVja2VyKHRoaXMuZ3JhcGgpO1xuICBtQ2hhck1nciA9IG5ldyBNQ2hhclRyaWdnZXJNYW5hZ2VyKHRoaXMuZ3JhcGgpO1xuICBzb2x2ZXJCdWlsZGVyID0gbmV3IFNvbHZlclN0cmluZ0J1aWxkZXIodGhpcy5ncmFwaCk7XG4gIHJlY2VudENoYXJzSGlzdG9yeSA9IFtdO1xuICBhc3NpZ25lZENoYXJzID0gbmV3IE1hcCgpO1xuICBsYXN0RnJlZWRDb29yZHMgPSBuZXcgU2V0KCk7XG4gIHBhaXJpbmdIaXN0b3J5ID0gW107XG4gIGN1cnJlbnRSZW1haW5pbmdUaWxlcyA9IG5ldyBTZXQoKTtcbiAgY3VycmVudFRpbGVNYXAgPSBuZXcgTWFwKCk7XG4gIG1heFNlbGVjdGFibGVaID0gMDtcbiAgbGFzdFNlY29uZENvb3JkID0gbnVsbDtcbiAgY2hhaW5BZ2VDb3VudGVyID0gbmV3IE1hcCgpO1xuICBwcmV2U2VsZWN0YWJsZUZvckNoYWluID0gbmV3IFNldCgpO1xuICBfc3RhcnRUaW1lID0gMDtcbiAgX3RpbWVvdXRNcyA9IDA7XG4gIF9pc1RpbWVvdXQgPSBmYWxzZTtcbiAgY29vcmRTZWxlY3RvcnMgPSBuZXcgTWFwKFtbRUNvb3JkU2VsZWN0aW9uVHlwZS5SYW5kb20sIG5ldyBSYW5kb21Db29yZFNlbCgpXSwgW0VDb29yZFNlbGVjdGlvblR5cGUuU2FtZVosIG5ldyBTYW1lWkNvb3JkU2VsKCldLCBbRUNvb3JkU2VsZWN0aW9uVHlwZS5BbnRpQ2hhaW4sIG5ldyBBbnRpQ2hhaW5Db29yZFNlbCgpXSwgW0VDb29yZFNlbGVjdGlvblR5cGUuUHJlZERlcHRoU3luYywgbmV3IFByZWREZXB0aENvb3JkU2VsKCldLCBbRUNvb3JkU2VsZWN0aW9uVHlwZS5TaG9ydERpc3RhbmNlLCBuZXcgU2hvcnREaXN0Q29vcmRTZWwoKV0sIFtFQ29vcmRTZWxlY3Rpb25UeXBlLkxvbmdEaXN0YW5jZSwgbmV3IExvbmdEaXN0Q29vcmRTZWwoKV0sIFtFQ29vcmRTZWxlY3Rpb25UeXBlLkhlaWdodFBhaXIsIG5ldyBIZWlnaHRQYWlyQ29vcmRTZWwoKV0sIFtFQ29vcmRTZWxlY3Rpb25UeXBlLkFudGlJbnR1aXRpdmUsIG5ldyBBbnRpSW50dWl0aXZlQ29vcmRTZWwoKV0sIFtFQ29vcmRTZWxlY3Rpb25UeXBlLkludHVpdGl2ZUNoYWluLCBuZXcgSW50dWl0aXZlQ2hhaW5Db29yZFNlbCgpXSwgW0VDb29yZFNlbGVjdGlvblR5cGUuSW50dWl0aXZlQ2hhaW5QbHVzLCBuZXcgSW50dWl0aXZlQ2hhaW5QbHVzQ29vcmRTZWwoKV0sIFtFQ29vcmRTZWxlY3Rpb25UeXBlLkNoYWluTXVsdGksIG5ldyBEaWZmaWN1bHR5RGVjaXNpb25Db29yZFNlbCgpXSwgW0VDb29yZFNlbGVjdGlvblR5cGUuQ2hhaW5NdWx0aVBsdXMsIG5ldyBDaGFpbk11bHRpUGx1c0Nvb3JkU2VsKCldLCBbRUNvb3JkU2VsZWN0aW9uVHlwZS5TeW1tZXRyaWMsIG5ldyBTeW1tZXRyaWNDb29yZFNlbCgpXSwgW0VDb29yZFNlbGVjdGlvblR5cGUuU3ltbWV0cmljU2h1ZmZsZSwgbmV3IFN5bW1ldHJpY1NodWZmbGVDb29yZFNlbCgpXV0pO1xuICBjaGFyU2VsZWN0b3JzID0gbmV3IE1hcChbW0VDaGFyU2VsZWN0aW9uVHlwZS5SYW5kb20sIG5ldyBSYW5kb21DaGFyU2VsKCldLCBbRUNoYXJTZWxlY3Rpb25UeXBlLkNvbG9yTmVhciwgbmV3IENvbG9yTmVhckNoYXJTZWwoKV0sIFtFQ2hhclNlbGVjdGlvblR5cGUuQ29sb3JGYXIsIG5ldyBDb2xvckZhckNoYXJTZWwoKV0sIFtFQ2hhclNlbGVjdGlvblR5cGUuUHJlZENvb3JkLCBuZXcgUHJlZENvb3JkQ2hhclNlbCgpXSwgW0VDaGFyU2VsZWN0aW9uVHlwZS5QcmVkVHJpZ2dlciwgbmV3IFByZWRUcmlnZ2VyQ2hhclNlbCgpXSwgW0VDaGFyU2VsZWN0aW9uVHlwZS5Sb3dEaXZlcnNpdHksIG5ldyBSb3dEaXZlcnNpdHlDaGFyU2VsKCldLCBbRUNoYXJTZWxlY3Rpb25UeXBlLkNoYWluQXZvaWQsIG5ldyBDaGFpbkF2b2lkQ2hhclNlbCgpXSwgW0VDaGFyU2VsZWN0aW9uVHlwZS5EdWFsTVRyaWdnZXIsIG5ldyBEdWFsTVRyaWdnZXJDaGFyU2VsKCldLCBbRUNoYXJTZWxlY3Rpb25UeXBlLlJlY2VudFR3b05lYXIsIG5ldyBSZWNlbnRUd29OZWFyQ2hhclNlbCgpXV0pO1xuICBzdGF0aWMgQ09OU1RfU0hPV19ERUJVR19JTkZPID0gZmFsc2U7XG4gIHN0YXRpYyBpbnN0YW5jZSA9IG51bGw7XG4gIGdldCBpc1RpbWVvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVGltZW91dDtcbiAgfVxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSB8fCAodGhpcy5pbnN0YW5jZSA9IG5ldyBDaGFyYWN0ZXJHZW5lcmF0b3JUaWxlMigpKTtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuICBjaGVja1RpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMuX3RpbWVvdXRNcyA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKERhdGUubm93KCkgLSB0aGlzLl9zdGFydFRpbWUgPiB0aGlzLl90aW1lb3V0TXMpIHtcbiAgICAgIHRoaXMuX2lzVGltZW91dCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGdlbmVyYXRlQ2hhcmFjdGVyQXNzaWdubWVudChlLCBvLCBuLCBpID0gRUNvb3JkU2VsZWN0aW9uVHlwZS5SYW5kb20sIHIgPSBFQ2hhclNlbGVjdGlvblR5cGUuUmFuZG9tLCBhID0gMCkge1xuICAgIHRoaXMucmVzZXRTdGF0ZShlLCBhKTtcbiAgICB0aGlzLmdyYXBoLmluaXQobywgZS5nZXRUaWxlTWFwT2JqZWN0KCkpO1xuICAgIGlmICh0aGlzLmNoZWNrVGltZW91dCgpKSByZXR1cm4gW107XG4gICAgaWYgKHIgPT09IEVDaGFyU2VsZWN0aW9uVHlwZS5QcmVkVHJpZ2dlcikge1xuICAgICAgdGhpcy5tQ2hhck1nci5pbml0U2luZ2xlTShvLCBuKTtcbiAgICAgIGlmICh0aGlzLmNoZWNrVGltZW91dCgpKSByZXR1cm4gW107XG4gICAgfVxuICAgIGlmIChyID09PSBFQ2hhclNlbGVjdGlvblR5cGUuRHVhbE1UcmlnZ2VyKSB7XG4gICAgICB0aGlzLm1DaGFyTWdyLmluaXREdWFsTShvLCBuKTtcbiAgICAgIGlmICh0aGlzLmNoZWNrVGltZW91dCgpKSByZXR1cm4gW107XG4gICAgfVxuICAgIHZhciBsID0gdGhpcy5nZW5lcmF0ZVBhaXJpbmdTZXF1ZW5jZShvLCBpLCByKTtcbiAgICBpZiAodGhpcy5faXNUaW1lb3V0ICYmIDAgPT09IGwubGVuZ3RoKSByZXR1cm4gW107XG4gICAgdmFyIHMgPSB0aGlzLmFzc2lnbkNoYXJhY3RlcnMobCwgbiwgcik7XG4gICAgcy5sZW5ndGggPiAwICYmIENoYXJhY3RlckdlbmVyYXRvclRpbGUyLkNPTlNUX1NIT1dfREVCVUdfSU5GTyAmJiB0aGlzLnNvbHZlckJ1aWxkZXIuZ2VuZXJhdGUocywgdGhpcy5jdXJyZW50VGlsZU1hcCk7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgY29tcHV0ZVBUTEdyb3VwcyhlKSB7XG4gICAgdmFyIHQsIG8sIG4sIGE7XG4gICAgaWYgKDAgPT09IGUubGVuZ3RoKSByZXR1cm4gbmV3IE1hcCgpO1xuICAgIHZhciBsID0gbmV3IE1hcCh0aGlzLmN1cnJlbnRUaWxlTWFwKSxcbiAgICAgIHMgPSBuZXcgU2V0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyhsLnZhbHVlcygpKSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSB1LnZhbHVlO1xuICAgICAgICBzLmFkZChwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBmID0gbmV3IE1hcCgpLCBkID0gbmV3IFNldCgpLCBoID0gMTsgZC5zaXplIDwgZS5sZW5ndGg7KSB7XG4gICAgICBmb3IgKHZhciB5ID0gW10sIG0gPSAwOyBtIDwgZS5sZW5ndGg7IG0rKykgaWYgKCFkLmhhcyhtKSkge1xuICAgICAgICB2YXIgdiA9IF9fcmVhZChlW21dLCAyKSxcbiAgICAgICAgICBnID0gdlswXSxcbiAgICAgICAgICBfID0gdlsxXTtcbiAgICAgICAgdGhpcy5ncmFwaC5pc1RpbGVTZWxlY3RhYmxlKGcsIHMsIGwpICYmIHRoaXMuZ3JhcGguaXNUaWxlU2VsZWN0YWJsZShfLCBzLCBsKSAmJiB5LnB1c2gobSk7XG4gICAgICB9XG4gICAgICBpZiAoMCA9PT0geS5sZW5ndGgpIGZvciAobSA9IDA7IG0gPCBlLmxlbmd0aDsgbSsrKSBkLmhhcyhtKSB8fCB5LnB1c2gobSk7XG4gICAgICBmLnNldChoLCB5KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIFQgPSAobiA9IHZvaWQgMCwgX192YWx1ZXMoeSkpLCBDID0gVC5uZXh0KCk7ICFDLmRvbmU7IEMgPSBULm5leHQoKSkge1xuICAgICAgICAgIHZhciBiID0gQy52YWx1ZTtcbiAgICAgICAgICBkLmFkZChiKTtcbiAgICAgICAgICBzLmRlbGV0ZShlW2JdWzBdKTtcbiAgICAgICAgICBzLmRlbGV0ZShlW2JdWzFdKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBuID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEMgJiYgIUMuZG9uZSAmJiAoYSA9IFQucmV0dXJuKSAmJiBhLmNhbGwoVCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGgrKztcbiAgICB9XG4gICAgcmV0dXJuIGY7XG4gIH1cbiAgYXBwbHlBc3NpZ25tZW50cyhlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuLFxuICAgICAgYSxcbiAgICAgIGwsXG4gICAgICBzID0gdGhpcyxcbiAgICAgIGMgPSBmdW5jdGlvbiBjKGUsIHQsIG8pIHtcbiAgICAgICAgcmV0dXJuIGUgKyBcIixcIiArIHQgKyBcIixcIiArIG87XG4gICAgICB9LFxuICAgICAgdSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBwID0gX192YWx1ZXMoZSksIGYgPSBwLm5leHQoKTsgIWYuZG9uZTsgZiA9IHAubmV4dCgpKSB7XG4gICAgICAgIHZhciBkID0gX19yZWFkKGYudmFsdWUsIDQpLFxuICAgICAgICAgIGggPSBkWzBdLFxuICAgICAgICAgIHkgPSBkWzFdLFxuICAgICAgICAgIG0gPSBkWzJdLFxuICAgICAgICAgIHYgPSBkWzNdO1xuICAgICAgICB1LnB1c2goe1xuICAgICAgICAgIGRlc3RYOiBoLmdyaWRQb3NYLFxuICAgICAgICAgIGRlc3RZOiBoLmdyaWRQb3NZLFxuICAgICAgICAgIGRlc3RaOiBoLmxheWVyLFxuICAgICAgICAgIGRlc2lyZWRSZXNJZDogbS5yZXNJZFxuICAgICAgICB9KTtcbiAgICAgICAgdS5wdXNoKHtcbiAgICAgICAgICBkZXN0WDogeS5ncmlkUG9zWCxcbiAgICAgICAgICBkZXN0WTogeS5ncmlkUG9zWSxcbiAgICAgICAgICBkZXN0WjogeS5sYXllcixcbiAgICAgICAgICBkZXNpcmVkUmVzSWQ6IHYucmVzSWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGYgJiYgIWYuZG9uZSAmJiAobiA9IHAucmV0dXJuKSAmJiBuLmNhbGwocCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGcgPSBuZXcgU2V0KHUubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBjKGUuZGVzdFgsIGUuZGVzdFksIGUuZGVzdFopO1xuICAgICAgfSkpLFxuICAgICAgXyA9IG5ldyBNYXAoKTtcbiAgICB0LmdldEFsbENhcmRUaWxlcygpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChnLmhhcyhjKGUuZ3JpZFBvc1gsIGUuZ3JpZFBvc1ksIGUubGF5ZXIpKSkge1xuICAgICAgICBfLmhhcyhlLmNhcmRJZCkgfHwgXy5zZXQoZS5jYXJkSWQsIFtdKTtcbiAgICAgICAgXy5nZXQoZS5jYXJkSWQpLnB1c2goZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcy5zaHVmZmxlQXJyYXkoZSk7XG4gICAgfSk7XG4gICAgdmFyIFQgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgQyA9IF9fdmFsdWVzKHUpLCBiID0gQy5uZXh0KCk7ICFiLmRvbmU7IGIgPSBDLm5leHQoKSkge1xuICAgICAgICB2YXIgRSA9IGIudmFsdWUsXG4gICAgICAgICAgUyA9IF8uZ2V0KEUuZGVzaXJlZFJlc0lkKTtcbiAgICAgICAgUyAmJiAwICE9PSBTLmxlbmd0aCAmJiBULnB1c2goe1xuICAgICAgICAgIHRpbGVJZDogUy5wb3AoKS5pZCxcbiAgICAgICAgICBkZXN0WDogRS5kZXN0WCxcbiAgICAgICAgICBkZXN0WTogRS5kZXN0WSxcbiAgICAgICAgICBkZXN0WjogRS5kZXN0WlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYiAmJiAhYi5kb25lICYmIChsID0gQy5yZXR1cm4pICYmIGwuY2FsbChDKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgSSA9IG5ldyBNYXAoKTtcbiAgICB0LmdldEFsbENhcmRUaWxlcygpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIEkuc2V0KGMoZS5ncmlkUG9zWCwgZS5ncmlkUG9zWSwgZS5sYXllciksIGUuaWQpO1xuICAgIH0pO1xuICAgIGZvciAodmFyIHcgPSBULm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgcmV0dXJuIG51bGwgIT09ICh0ID0gSS5nZXQoYyhlLmRlc3RYLCBlLmRlc3RZLCBlLmRlc3RaKSkpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBcIlwiO1xuICAgICAgfSksIEIgPSAwOyBCIDwgVC5sZW5ndGg7IEIrKykge1xuICAgICAgdmFyIHggPSBUW0JdLnRpbGVJZDtcbiAgICAgIGlmICh3W0JdICE9PSB4KSB7XG4gICAgICAgIHZhciBNID0gdy5pbmRleE9mKHgpO1xuICAgICAgICBpZiAoLTEgIT09IE0pIHtcbiAgICAgICAgICB0LnN3YXBUaWxlUG9zaXRpb25zKHdbQl0sIHgpO1xuICAgICAgICAgIHdbTV0gPSB3W0JdO1xuICAgICAgICAgIHdbQl0gPSB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdlbmVyYXRlU29sdmVyU3RyaW5nKGUpIHtcbiAgICByZXR1cm4gdGhpcy5zb2x2ZXJCdWlsZGVyLmdlbmVyYXRlKGUsIHRoaXMuY3VycmVudFRpbGVNYXApO1xuICB9XG4gIHJlc2V0U3RhdGUoZSwgdCA9IDApIHtcbiAgICB0aGlzLnJlY2VudENoYXJzSGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuYXNzaWduZWRDaGFycy5jbGVhcigpO1xuICAgIHRoaXMubGFzdEZyZWVkQ29vcmRzID0gbmV3IFNldCgpO1xuICAgIHRoaXMucGFpcmluZ0hpc3RvcnkgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRSZW1haW5pbmdUaWxlcyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmN1cnJlbnRUaWxlTWFwID0gbmV3IE1hcCgpO1xuICAgIHRoaXMubWF4U2VsZWN0YWJsZVogPSAwO1xuICAgIHRoaXMubGFzdFNlY29uZENvb3JkID0gbnVsbDtcbiAgICB0aGlzLmNoYWluQWdlQ291bnRlciA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnByZXZTZWxlY3RhYmxlRm9yQ2hhaW4gPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5tQ2hhck1nci5yZXNldCgpO1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5fdGltZW91dE1zID0gdDtcbiAgICB0aGlzLl9pc1RpbWVvdXQgPSBmYWxzZTtcbiAgfVxuICBidWlsZENvb3JkU2VsZWN0aW9uQ29udGV4dCgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gMCxcbiAgICAgIG8gPSAwO1xuICAgIGlmICh0aGlzLmNoYWluQWdlQ291bnRlci5zaXplID4gMCkge1xuICAgICAgdmFyIG4gPSBBcnJheS5mcm9tKHRoaXMuY2hhaW5BZ2VDb3VudGVyLnZhbHVlcygpKTtcbiAgICAgIHQgPSBNYXRoLm1pbi5hcHBseShNYXRoLCBbLi4ubl0pO1xuICAgICAgbyA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIFsuLi5uXSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBnZXRFeHBhbmRlZDogZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgICAgcmV0dXJuIGUuZ3JhcGguZ2V0RXhwYW5kZWQodCwgbyk7XG4gICAgICB9LFxuICAgICAgdGlsZVRvQ29vcmQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBlLmdyYXBoLnRpbGVUb0Nvb3JkKHQpO1xuICAgICAgfSxcbiAgICAgIGdldFRvcG9sb2d5TGV2ZWw6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBlLmdyYXBoLmdldFRvcG9sb2d5TGV2ZWwodCk7XG4gICAgICB9LFxuICAgICAgbGFzdEZyZWVkQ29vcmRzOiB0aGlzLmxhc3RGcmVlZENvb3JkcyxcbiAgICAgIG1heFNlbGVjdGFibGVaOiB0aGlzLm1heFNlbGVjdGFibGVaLFxuICAgICAgY291bnRGcmVlZEJsb2NrczogZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgICAgcmV0dXJuIGUuc2FmZXR5LmNvdW50RnJlZWRCbG9ja3ModCwgbywgZS5jdXJyZW50UmVtYWluaW5nVGlsZXMsIGUuY3VycmVudFRpbGVNYXApO1xuICAgICAgfSxcbiAgICAgIGhhc05laWdoYm9yU2VsZWN0YWJsZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGUuc2FmZXR5Lmhhc05laWdoYm9yU2VsZWN0YWJsZSh0LCBlLmN1cnJlbnRSZW1haW5pbmdUaWxlcywgZS5jdXJyZW50VGlsZU1hcCk7XG4gICAgICB9LFxuICAgICAgbGFzdFNlY29uZENvb3JkOiB0aGlzLmxhc3RTZWNvbmRDb29yZCxcbiAgICAgIGNoYWluQWdlQ291bnRlcjogdGhpcy5jaGFpbkFnZUNvdW50ZXIsXG4gICAgICB0b3RhbFBhaXJzOiB0aGlzLmN1cnJlbnRSZW1haW5pbmdUaWxlcyA/IE1hdGguZmxvb3IodGhpcy5jdXJyZW50UmVtYWluaW5nVGlsZXMuc2l6ZSAvIDIpIDogMCxcbiAgICAgIGNvbXBsZXRlZFBhaXJzOiB0aGlzLnBhaXJpbmdIaXN0b3J5Lmxlbmd0aCxcbiAgICAgIG1pbkNoYWluQWdlOiB0LFxuICAgICAgbWF4Q2hhaW5BZ2U6IG9cbiAgICB9O1xuICB9XG4gIGJ1aWxkQ2hhclNlbGVjdGlvbkNvbnRleHQoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICByZWNlbnRDaGFyc0hpc3Rvcnk6IHRoaXMucmVjZW50Q2hhcnNIaXN0b3J5LFxuICAgICAgYXNzaWduZWRDaGFyczogdGhpcy5hc3NpZ25lZENoYXJzLFxuICAgICAgZ2V0RXhwYW5kZWQ6IGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgIHJldHVybiBlLmdyYXBoLmdldEV4cGFuZGVkKHQsIG8pO1xuICAgICAgfSxcbiAgICAgIHRpbGVUb0Nvb3JkOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZS5ncmFwaC50aWxlVG9Db29yZCh0KTtcbiAgICAgIH0sXG4gICAgICBwYWlyaW5nSGlzdG9yeTogdGhpcy5wYWlyaW5nSGlzdG9yeSxcbiAgICAgIG1DaGFyUmVzSWQ6IHRoaXMubUNoYXJNZ3IucHJpbWFyeVJlc0lkLFxuICAgICAgbUNoYXJBY3RpdmU6IHRoaXMubUNoYXJNZ3IuYWN0aXZlLFxuICAgICAgbUNoYXJMb2NrZWRSZXNJZHM6IHRoaXMubUNoYXJNZ3IubG9ja2VkUmVzSWRzLnNpemUgPiAwID8gdGhpcy5tQ2hhck1nci5sb2NrZWRSZXNJZHMgOiBudWxsXG4gICAgfTtcbiAgfVxuICBnZW5lcmF0ZVBhaXJpbmdTZXF1ZW5jZShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzLFxuICAgICAgaSA9IFtdLFxuICAgICAgbCA9IG5ldyBTZXQoZS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaXNWYWxpZDtcbiAgICAgIH0pKSxcbiAgICAgIHMgPSBuZXcgTWFwKGUubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBbbi5ncmFwaC50aWxlVG9Db29yZChlKSwgZV07XG4gICAgICB9KSksXG4gICAgICBjID0gdCA9PT0gRUNvb3JkU2VsZWN0aW9uVHlwZS5DaGFpbk11bHRpIHx8IHQgPT09IEVDb29yZFNlbGVjdGlvblR5cGUuQ2hhaW5NdWx0aVBsdXM7XG4gICAgdGhpcy5jdXJyZW50UmVtYWluaW5nVGlsZXMgPSBsO1xuICAgIHRoaXMuY3VycmVudFRpbGVNYXAgPSBzO1xuICAgIGZvciAoOyBsLnNpemUgPj0gMiAmJiAhdGhpcy5jaGVja1RpbWVvdXQoKTspIHtcbiAgICAgIHZhciB1ID0gdGhpcy5ncmFwaC5nZXRTZWxlY3RhYmxlVGlsZXMobCwgcyk7XG4gICAgICBpZiAodGhpcy5jaGVja1RpbWVvdXQoKSkgYnJlYWs7XG4gICAgICBjICYmIHRoaXMudXBkYXRlQ2hhaW5BZ2UodSwgbCk7XG4gICAgICB2YXIgcCA9IHRoaXMuY2hlY2tNQ2hhclRyaWdnZXJzKG8sIHUsIHMsIGwpO1xuICAgICAgaWYgKHApIHtcbiAgICAgICAgdmFyIGYgPSBfX3JlYWQocCwgMiksXG4gICAgICAgICAgZCA9IGZbMF0sXG4gICAgICAgICAgaCA9IGZbMV0sXG4gICAgICAgICAgeSA9IHRoaXMuZ3JhcGgudGlsZVRvQ29vcmQoZCksXG4gICAgICAgICAgbSA9IHRoaXMuZ3JhcGgudGlsZVRvQ29vcmQoaCksXG4gICAgICAgICAgdiA9IHRoaXMuc2FmZXR5LmNvbXB1dGVGcmVlZENvb3Jkcyh5LCBtLCBsLCBzLCB1KTtcbiAgICAgICAgdGhpcy5wYWlyaW5nSGlzdG9yeS5wdXNoKFt5LCBtXSk7XG4gICAgICAgIGkucHVzaChbZCwgaF0pO1xuICAgICAgICBsLmRlbGV0ZShkKTtcbiAgICAgICAgbC5kZWxldGUoaCk7XG4gICAgICAgIHRoaXMubGFzdEZyZWVkQ29vcmRzID0gdjtcbiAgICAgICAgdCA9PT0gRUNvb3JkU2VsZWN0aW9uVHlwZS5JbnR1aXRpdmVDaGFpblBsdXMgJiYgKHRoaXMubGFzdFNlY29uZENvb3JkID0gbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1DaGFyTWdyLmxvY2tlZENvb3Jkcy5zaXplID4gMCAmJiAodSA9IHUuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuICFuLm1DaGFyTWdyLmxvY2tlZENvb3Jkcy5oYXMobi5ncmFwaC50aWxlVG9Db29yZChlKSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKHUubGVuZ3RoIDwgMikgYnJlYWs7XG4gICAgICAgIHRoaXMubWF4U2VsZWN0YWJsZVogPSBNYXRoLm1heC5hcHBseShNYXRoLCBbLi4udS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5sYXllcjtcbiAgICAgICAgfSldKTtcbiAgICAgICAgZm9yICh2YXIgZyA9IFtdLCBfID0gMDsgXyA8IHUubGVuZ3RoOyBfKyspIGZvciAodmFyIFQgPSBfICsgMTsgVCA8IHUubGVuZ3RoOyBUKyspIGcucHVzaChbdVtfXSwgdVtUXV0pO1xuICAgICAgICB2YXIgQyA9IHRoaXMuc2VsZWN0UGFpcldpdGhTYWZldHkoZywgdCwgbCwgcyk7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrVGltZW91dCgpIHx8ICFDKSBicmVhaztcbiAgICAgICAgdmFyIGIgPSB0aGlzLmdyYXBoLnRpbGVUb0Nvb3JkKENbMF0pLFxuICAgICAgICAgIEUgPSB0aGlzLmdyYXBoLnRpbGVUb0Nvb3JkKENbMV0pLFxuICAgICAgICAgIFMgPSB0aGlzLnNhZmV0eS5jb21wdXRlRnJlZWRDb29yZHMoYiwgRSwgbCwgcywgdSk7XG4gICAgICAgIHRoaXMucGFpcmluZ0hpc3RvcnkucHVzaChbYiwgRV0pO1xuICAgICAgICBpLnB1c2goQyk7XG4gICAgICAgIGwuZGVsZXRlKENbMF0pO1xuICAgICAgICBsLmRlbGV0ZShDWzFdKTtcbiAgICAgICAgdGhpcy5sYXN0RnJlZWRDb29yZHMgPSBTO1xuICAgICAgICB0ID09PSBFQ29vcmRTZWxlY3Rpb25UeXBlLkludHVpdGl2ZUNoYWluUGx1cyAmJiAodGhpcy5sYXN0U2Vjb25kQ29vcmQgPSBFKTtcbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICB2YXIgSSA9IHRoaXMuZ3JhcGguZ2V0U2VsZWN0YWJsZVRpbGVzKGwsIHMpO1xuICAgICAgICAgIHRoaXMucHJldlNlbGVjdGFibGVGb3JDaGFpbiA9IG5ldyBTZXQoSS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuLmdyYXBoLnRpbGVUb0Nvb3JkKGUpO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaTtcbiAgfVxuICBjaGVja01DaGFyVHJpZ2dlcnMoZSwgdCwgbywgbikge1xuICAgIHJldHVybiBlID09PSBFQ2hhclNlbGVjdGlvblR5cGUuUHJlZFRyaWdnZXIgJiYgdGhpcy5tQ2hhck1nci5hY3RpdmUgPyB0aGlzLm1DaGFyTWdyLmNoZWNrU2luZ2xlTVRyaWdnZXIodCwgbywgbikgOiBlID09PSBFQ2hhclNlbGVjdGlvblR5cGUuRHVhbE1UcmlnZ2VyICYmIHRoaXMubUNoYXJNZ3IuZ3JvdXBzLmxlbmd0aCA+IDAgPyB0aGlzLm1DaGFyTWdyLmNoZWNrRHVhbE1UcmlnZ2VyKHQsIG8sIG4pIDogbnVsbDtcbiAgfVxuICB1cGRhdGVDaGFpbkFnZShlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuLFxuICAgICAgciA9IHRoaXMsXG4gICAgICBhID0gbmV3IFNldChlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gci5ncmFwaC50aWxlVG9Db29yZChlKTtcbiAgICAgIH0pKSxcbiAgICAgIGwgPSAwID09PSB0aGlzLnByZXZTZWxlY3RhYmxlRm9yQ2hhaW4uc2l6ZTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKHQpLCBjID0gcy5uZXh0KCk7ICFjLmRvbmU7IGMgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IGMudmFsdWUsXG4gICAgICAgICAgcCA9IHRoaXMuZ3JhcGgudGlsZVRvQ29vcmQodSk7XG4gICAgICAgIGlmIChhLmhhcyhwKSkge1xuICAgICAgICAgIGlmIChsKSB7XG4gICAgICAgICAgICB0aGlzLmNoYWluQWdlQ291bnRlci5zZXQocCwgMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZTZWxlY3RhYmxlRm9yQ2hhaW4uaGFzKHApKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2hhaW5BZ2VDb3VudGVyLnNldChwLCAodGhpcy5jaGFpbkFnZUNvdW50ZXIuZ2V0KHApIHx8IDApICsgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmNoYWluQWdlQ291bnRlci5zZXQocCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2hhaW5BZ2VDb3VudGVyLnNldChwLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKG4gPSBzLnJldHVybikgJiYgbi5jYWxsKHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNlbGVjdFBhaXJXaXRoU2FmZXR5KGUsIHQsIG8sIG4pIHtcbiAgICB2YXIgcixcbiAgICAgIGEsXG4gICAgICBzID0gdGhpcy5ncmFwaC5nZXRTZWxlY3RhYmxlVGlsZXMobywgbiksXG4gICAgICBjID0gbmV3IFNldChzKSxcbiAgICAgIHUgPSBbXSxcbiAgICAgIHAgPSB0aGlzLmNvb3JkU2VsZWN0b3JzLmdldCh0KSB8fCBuZXcgUmFuZG9tQ29vcmRTZWwoKSxcbiAgICAgIGYgPSB0aGlzLmJ1aWxkQ29vcmRTZWxlY3Rpb25Db250ZXh0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGQgPSBfX3ZhbHVlcyhlKSwgaCA9IGQubmV4dCgpOyAhaC5kb25lOyBoID0gZC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHkgPSBoLnZhbHVlO1xuICAgICAgICBpZiAodGhpcy5jaGVja1RpbWVvdXQoKSkgYnJlYWs7XG4gICAgICAgIHRoaXMuc2FmZXR5LmlzU2FmZVBhaXJDaG9pY2VGYXN0KHksIG8sIG4sIHMsIGMpICYmIHUucHVzaCh7XG4gICAgICAgICAgcHJpb3JpdHk6IHAuY2FsY3VsYXRlUHJpb3JpdHkoeVswXSwgeVsxXSwgZiksXG4gICAgICAgICAgcGFpcjogeVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaCAmJiAhaC5kb25lICYmIChhID0gZC5yZXR1cm4pICYmIGEuY2FsbChkKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoMCA9PT0gdS5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgIHUuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIGUucHJpb3JpdHkucHJpb3JpdHkgIT09IHQucHJpb3JpdHkucHJpb3JpdHkgPyB0LnByaW9yaXR5LnByaW9yaXR5IC0gZS5wcmlvcml0eS5wcmlvcml0eSA6IHQucHJpb3JpdHkuc3ViU2NvcmUgLSBlLnByaW9yaXR5LnN1YlNjb3JlO1xuICAgIH0pO1xuICAgIHZhciBtID0gdVswXS5wcmlvcml0eS5wcmlvcml0eSxcbiAgICAgIHYgPSB1LmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5wcmlvcml0eS5wcmlvcml0eSA9PT0gbTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB2W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHYubGVuZ3RoKV0ucGFpcjtcbiAgfVxuICBhc3NpZ25DaGFyYWN0ZXJzKGUsIHQsIG8pIHtcbiAgICB2YXIgbixcbiAgICAgIGwsXG4gICAgICBzLFxuICAgICAgYyA9IFsuLi50XTtcbiAgICB0aGlzLnNodWZmbGVBcnJheShjKTtcbiAgICB2YXIgdSA9IFtdLFxuICAgICAgcCA9IHRoaXMuY2hhclNlbGVjdG9ycy5nZXQobykgfHwgbmV3IFJhbmRvbUNoYXJTZWwoKSxcbiAgICAgIGYgPSB0aGlzLmJ1aWxkQ2hhclNlbGVjdGlvbkNvbnRleHQoKSxcbiAgICAgIGQgPSBuZXcgTWFwKCksXG4gICAgICBoID0gZnVuY3Rpb24gaChlLCB0KSB7XG4gICAgICAgIHZhciBvID0geS5ncmFwaC50aWxlVG9Db29yZChlKSxcbiAgICAgICAgICBuID0geS5ncmFwaC50aWxlVG9Db29yZCh0KTtcbiAgICAgICAgaWYgKHkubUNoYXJNZ3IucGFpcmVkQ29vcmRzLmhhcyhvKSB8fCB5Lm1DaGFyTWdyLnBhaXJlZENvb3Jkcy5oYXMobikpIHtcbiAgICAgICAgICB2YXIgaSA9IHkubUNoYXJNZ3IuZmluZEdyb3VwRm9yQ29vcmQobywgbiksXG4gICAgICAgICAgICByID0gKG51bGwgPT0gaSA/IHZvaWQgMCA6IGkucGFpckRhdGEpIHx8IHkubUNoYXJNZ3IucHJpbWFyeVBhaXJEYXRhLFxuICAgICAgICAgICAgYSA9IG51bGwgIT09IChzID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS5yZXNJZCkgJiYgdm9pZCAwICE9PSBzID8gcyA6IHkubUNoYXJNZ3IucHJpbWFyeVJlc0lkO1xuICAgICAgICAgIGlmIChyICYmIG51bGwgIT09IGEpIHtcbiAgICAgICAgICAgIHZhciBsID0gZC5nZXQoYSkgfHwgMDtcbiAgICAgICAgICAgIGlmIChsIDwgMikge1xuICAgICAgICAgICAgICB1LnB1c2goW2UsIHQsIHJbMF0sIHJbMV1dKTtcbiAgICAgICAgICAgICAgeS51cGRhdGVBc3NpZ25tZW50SGlzdG9yeShlLCB0LCByKTtcbiAgICAgICAgICAgICAgdmFyIGggPSBjLmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlWzBdLnJlc0lkID09PSBhO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgLTEgIT09IGggJiYgYy5zcGxpY2UoaCwgMSk7XG4gICAgICAgICAgICAgIGQuc2V0KGEsIGwgKyAxKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKDAgPT09IGMubGVuZ3RoKSByZXR1cm4gXCJicmVha1wiO1xuICAgICAgICB2YXIgbSA9IHAuc2VsZWN0Q2hhcmFjdGVyUGFpcihlLCB0LCBjLCBmKSxcbiAgICAgICAgICB2ID0gY1ttXTtcbiAgICAgICAgYy5zcGxpY2UobSwgMSk7XG4gICAgICAgIHUucHVzaChbZSwgdCwgdlswXSwgdlsxXV0pO1xuICAgICAgICB5LnVwZGF0ZUFzc2lnbm1lbnRIaXN0b3J5KGUsIHQsIHYpO1xuICAgICAgfSxcbiAgICAgIHkgPSB0aGlzO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBtID0gX192YWx1ZXMoZSksIHYgPSBtLm5leHQoKTsgIXYuZG9uZTsgdiA9IG0ubmV4dCgpKSB7XG4gICAgICAgIHZhciBnID0gX19yZWFkKHYudmFsdWUsIDIpO1xuICAgICAgICBpZiAoXCJicmVha1wiID09PSBoKGdbMF0sIGdbMV0pKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdiAmJiAhdi5kb25lICYmIChsID0gbS5yZXR1cm4pICYmIGwuY2FsbChtKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdTtcbiAgfVxuICB1cGRhdGVBc3NpZ25tZW50SGlzdG9yeShlLCB0LCBvKSB7XG4gICAgdGhpcy5yZWNlbnRDaGFyc0hpc3RvcnkucHVzaChvWzBdLnJlc0lkKTtcbiAgICB0aGlzLnJlY2VudENoYXJzSGlzdG9yeS5sZW5ndGggPiA1MCAmJiB0aGlzLnJlY2VudENoYXJzSGlzdG9yeS5zaGlmdCgpO1xuICAgIHRoaXMuYXNzaWduZWRDaGFycy5zZXQodGhpcy5ncmFwaC50aWxlVG9Db29yZChlKSwgb1swXS5yZXNJZCk7XG4gICAgdGhpcy5hc3NpZ25lZENoYXJzLnNldCh0aGlzLmdyYXBoLnRpbGVUb0Nvb3JkKHQpLCBvWzFdLnJlc0lkKTtcbiAgfVxuICBzaHVmZmxlQXJyYXkoZSkge1xuICAgIGZvciAodmFyIHQsIG8gPSBlLmxlbmd0aCAtIDE7IG8gPiAwOyBvLS0pIHtcbiAgICAgIHZhciBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG8gKyAxKSk7XG4gICAgICB0ID0gX19yZWFkKFtlW25dLCBlW29dXSwgMiksIGVbb10gPSB0WzBdLCBlW25dID0gdFsxXTtcbiAgICB9XG4gIH1cbn0iXX0=
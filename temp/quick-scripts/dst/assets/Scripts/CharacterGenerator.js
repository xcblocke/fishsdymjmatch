
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/CharacterGenerator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7aeeeYjpdNGCYRgY+V8GBV7', 'CharacterGenerator');
// Scripts/CharacterGenerator.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ITileShuffleData = exports.CHAR_ALGO_NAMES = exports.COORD_ALGO_NAMES = exports.DifficultyDecision = exports.ECharSelectionType = exports.ECoordSelectionType = void 0;
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var RandomCoordSel_1 = require("./RandomCoordSel");
var SameZCoordSel_1 = require("./SameZCoordSel");
var AntiChainCoordSel_1 = require("./AntiChainCoordSel");
var PredDepthCoordSel_1 = require("./PredDepthCoordSel");
var ShortDistCoordSel_1 = require("./ShortDistCoordSel");
var LongDistCoordSel_1 = require("./LongDistCoordSel");
var HeightPairCoordSel_1 = require("./HeightPairCoordSel");
var AntiIntuitiveCoordSel_1 = require("./AntiIntuitiveCoordSel");
var IntuitiveChainCoordSel_1 = require("./IntuitiveChainCoordSel");
var IntuitiveChainPlusCoordSel_1 = require("./IntuitiveChainPlusCoordSel");
var DifficultyDecisionCoordSel_1 = require("./DifficultyDecisionCoordSel");
var ChainMultiPlusCoordSel_1 = require("./ChainMultiPlusCoordSel");
var SymmetricCoordSel_1 = require("./SymmetricCoordSel");
var SymmetricShuffleCoordSel_1 = require("./SymmetricShuffleCoordSel");
var RandomCharSel_1 = require("./RandomCharSel");
var ColorNearCharSel_1 = require("./ColorNearCharSel");
var ColorFarCharSel_1 = require("./ColorFarCharSel");
var PredCoordCharSel_1 = require("./PredCoordCharSel");
var PredTriggerCharSel_1 = require("./PredTriggerCharSel");
var RowDiversityCharSel_1 = require("./RowDiversityCharSel");
var ChainAvoidCharSel_1 = require("./ChainAvoidCharSel");
var DualMTriggerCharSel_1 = require("./DualMTriggerCharSel");
var RecentTwoNearCharSel_1 = require("./RecentTwoNearCharSel");
var DependencyGraph_1 = require("./DependencyGraph");
var SafetyChecker_1 = require("./SafetyChecker");
var MCharTriggerManager_1 = require("./MCharTriggerManager");
var SolverStringBuilder_1 = require("./SolverStringBuilder");
var ICharSelection_1 = require("./ICharSelection");
Object.defineProperty(exports, "ITileShuffleData", { enumerable: true, get: function () { return ICharSelection_1.ITileShuffleData; } });
var ECoordSelectionType;
(function (ECoordSelectionType) {
    ECoordSelectionType[ECoordSelectionType["Random"] = 1] = "Random";
    ECoordSelectionType[ECoordSelectionType["SameZ"] = 2] = "SameZ";
    ECoordSelectionType[ECoordSelectionType["AntiChain"] = 3] = "AntiChain";
    ECoordSelectionType[ECoordSelectionType["PredDepthSync"] = 4] = "PredDepthSync";
    ECoordSelectionType[ECoordSelectionType["ShortDistance"] = 5] = "ShortDistance";
    ECoordSelectionType[ECoordSelectionType["LongDistance"] = 6] = "LongDistance";
    ECoordSelectionType[ECoordSelectionType["HeightPair"] = 7] = "HeightPair";
    ECoordSelectionType[ECoordSelectionType["AntiIntuitive"] = 8] = "AntiIntuitive";
    ECoordSelectionType[ECoordSelectionType["IntuitiveChain"] = 9] = "IntuitiveChain";
    ECoordSelectionType[ECoordSelectionType["IntuitiveChainPlus"] = 10] = "IntuitiveChainPlus";
    ECoordSelectionType[ECoordSelectionType["ChainMulti"] = 11] = "ChainMulti";
    ECoordSelectionType[ECoordSelectionType["ChainMultiPlus"] = 12] = "ChainMultiPlus";
    ECoordSelectionType[ECoordSelectionType["SymmetricShuffle"] = 998] = "SymmetricShuffle";
    ECoordSelectionType[ECoordSelectionType["Symmetric"] = 999] = "Symmetric";
})(ECoordSelectionType = exports.ECoordSelectionType || (exports.ECoordSelectionType = {}));
var ECharSelectionType;
(function (ECharSelectionType) {
    ECharSelectionType[ECharSelectionType["Random"] = 1] = "Random";
    ECharSelectionType[ECharSelectionType["ColorNear"] = 2] = "ColorNear";
    ECharSelectionType[ECharSelectionType["ColorFar"] = 3] = "ColorFar";
    ECharSelectionType[ECharSelectionType["PredCoord"] = 4] = "PredCoord";
    ECharSelectionType[ECharSelectionType["PredTrigger"] = 5] = "PredTrigger";
    ECharSelectionType[ECharSelectionType["RowDiversity"] = 6] = "RowDiversity";
    ECharSelectionType[ECharSelectionType["ChainAvoid"] = 7] = "ChainAvoid";
    ECharSelectionType[ECharSelectionType["DualMTrigger"] = 8] = "DualMTrigger";
    ECharSelectionType[ECharSelectionType["RecentTwoNear"] = 10] = "RecentTwoNear";
})(ECharSelectionType = exports.ECharSelectionType || (exports.ECharSelectionType = {}));
exports.DifficultyDecision = ECoordSelectionType.ChainMulti;
(exports.COORD_ALGO_NAMES = {})[ECoordSelectionType.Random] = "随机";
exports.COORD_ALGO_NAMES[ECoordSelectionType.SameZ] = "同Z优先";
exports.COORD_ALGO_NAMES[ECoordSelectionType.AntiChain] = "反链避让";
exports.COORD_ALGO_NAMES[ECoordSelectionType.PredDepthSync] = "前驱深度协同";
exports.COORD_ALGO_NAMES[ECoordSelectionType.ShortDistance] = "短距离优先";
exports.COORD_ALGO_NAMES[ECoordSelectionType.LongDistance] = "长距离优先";
exports.COORD_ALGO_NAMES[ECoordSelectionType.HeightPair] = "高度配对优先";
exports.COORD_ALGO_NAMES[ECoordSelectionType.AntiIntuitive] = "反直觉配对";
exports.COORD_ALGO_NAMES[ECoordSelectionType.IntuitiveChain] = "直觉连消";
exports.COORD_ALGO_NAMES[ECoordSelectionType.IntuitiveChainPlus] = "直觉连消plus";
exports.COORD_ALGO_NAMES[ECoordSelectionType.ChainMulti] = "多选-链式-多选";
exports.COORD_ALGO_NAMES[ECoordSelectionType.ChainMultiPlus] = "多选-链式-多选Plus";
exports.COORD_ALGO_NAMES[ECoordSelectionType.Symmetric] = "全对称";
exports.COORD_ALGO_NAMES[ECoordSelectionType.SymmetricShuffle] = "全对称盘面层打乱";
exports.COORD_ALGO_NAMES = exports.COORD_ALGO_NAMES;
(exports.CHAR_ALGO_NAMES = {})[ECharSelectionType.Random] = "随机";
exports.CHAR_ALGO_NAMES[ECharSelectionType.ColorNear] = "颜色邻近";
exports.CHAR_ALGO_NAMES[ECharSelectionType.ColorFar] = "颜色远离";
exports.CHAR_ALGO_NAMES[ECharSelectionType.PredCoord] = "前驱协调";
exports.CHAR_ALGO_NAMES[ECharSelectionType.PredTrigger] = "前驱触发";
exports.CHAR_ALGO_NAMES[ECharSelectionType.RowDiversity] = "行内字符多样性";
exports.CHAR_ALGO_NAMES[ECharSelectionType.ChainAvoid] = "链式传播避免";
exports.CHAR_ALGO_NAMES[ECharSelectionType.DualMTrigger] = "双M前驱触发";
exports.CHAR_ALGO_NAMES[ECharSelectionType.RecentTwoNear] = "近两对邻近";
exports.CHAR_ALGO_NAMES = exports.CHAR_ALGO_NAMES;
var F = {
    restrictedPositionTypes: [TileTypeEnum_1.ETileType.RollCard],
    specialTileTypes: [TileTypeEnum_1.ETileType.Bomb, TileTypeEnum_1.ETileType.DuoxiaoCard, TileTypeEnum_1.ETileType.DaxiaoCard],
    specialResIds: [GameTypeEnums_1.ResId.emBombCardId, GameTypeEnums_1.ResId.emRankId]
};
var CharacterGenerator = /** @class */ (function () {
    function CharacterGenerator() {
        this.graph = new DependencyGraph_1.DependencyGraph();
        this.safety = new SafetyChecker_1.SafetyChecker(this.graph);
        this.mCharMgr = new MCharTriggerManager_1.MCharTriggerManager(this.graph);
        this.solverBuilder = new SolverStringBuilder_1.SolverStringBuilder(this.graph);
        this.recentCharsHistory = [];
        this.assignedChars = new Map();
        this.specialTileConfig = F;
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
        this.coordSelectors = new Map([[ECoordSelectionType.Random, new RandomCoordSel_1.RandomCoordSel()], [ECoordSelectionType.SameZ, new SameZCoordSel_1.SameZCoordSel()], [ECoordSelectionType.AntiChain, new AntiChainCoordSel_1.AntiChainCoordSel()], [ECoordSelectionType.PredDepthSync, new PredDepthCoordSel_1.PredDepthCoordSel()], [ECoordSelectionType.ShortDistance, new ShortDistCoordSel_1.ShortDistCoordSel()], [ECoordSelectionType.LongDistance, new LongDistCoordSel_1.LongDistCoordSel()], [ECoordSelectionType.HeightPair, new HeightPairCoordSel_1.HeightPairCoordSel()], [ECoordSelectionType.AntiIntuitive, new AntiIntuitiveCoordSel_1.AntiIntuitiveCoordSel()], [ECoordSelectionType.IntuitiveChain, new IntuitiveChainCoordSel_1.IntuitiveChainCoordSel()], [ECoordSelectionType.IntuitiveChainPlus, new IntuitiveChainPlusCoordSel_1.IntuitiveChainPlusCoordSel()], [ECoordSelectionType.ChainMulti, new DifficultyDecisionCoordSel_1.DifficultyDecisionCoordSel()], [ECoordSelectionType.ChainMultiPlus, new ChainMultiPlusCoordSel_1.ChainMultiPlusCoordSel()], [ECoordSelectionType.Symmetric, new SymmetricCoordSel_1.SymmetricCoordSel()], [ECoordSelectionType.SymmetricShuffle, new SymmetricShuffleCoordSel_1.SymmetricShuffleCoordSel()]]);
        this.charSelectors = new Map([[ECharSelectionType.Random, new RandomCharSel_1.RandomCharSel()], [ECharSelectionType.ColorNear, new ColorNearCharSel_1.ColorNearCharSel()], [ECharSelectionType.ColorFar, new ColorFarCharSel_1.ColorFarCharSel()], [ECharSelectionType.PredCoord, new PredCoordCharSel_1.PredCoordCharSel()], [ECharSelectionType.PredTrigger, new PredTriggerCharSel_1.PredTriggerCharSel()], [ECharSelectionType.RowDiversity, new RowDiversityCharSel_1.RowDiversityCharSel()], [ECharSelectionType.ChainAvoid, new ChainAvoidCharSel_1.ChainAvoidCharSel()], [ECharSelectionType.DualMTrigger, new DualMTriggerCharSel_1.DualMTriggerCharSel()], [ECharSelectionType.RecentTwoNear, new RecentTwoNearCharSel_1.RecentTwoNearCharSel()]]);
    }
    CharacterGenerator_1 = CharacterGenerator;
    Object.defineProperty(CharacterGenerator.prototype, "isTimeout", {
        get: function () {
            return this._isTimeout;
        },
        enumerable: false,
        configurable: true
    });
    CharacterGenerator.getInstance = function () {
        this.instance || (this.instance = new CharacterGenerator_1());
        return this.instance;
    };
    CharacterGenerator.prototype.checkTimeout = function () {
        if (this._timeoutMs <= 0)
            return false;
        if (Date.now() - this._startTime > this._timeoutMs) {
            this._isTimeout = true;
            return true;
        }
        return false;
    };
    CharacterGenerator.prototype.generateCharacterAssignment = function (e, o, n, i, r, a, l) {
        if (i === void 0) { i = ECoordSelectionType.Random; }
        if (r === void 0) { r = ECharSelectionType.Random; }
        if (l === void 0) { l = 0; }
        this.resetState(e, a, l);
        this.graph.init(o, e.getTileMapObject());
        if (this.checkTimeout())
            return [];
        if (r === ECharSelectionType.PredTrigger) {
            this.mCharMgr.initSingleM(o, n);
            if (this.checkTimeout())
                return [];
        }
        if (r === ECharSelectionType.DualMTrigger) {
            this.mCharMgr.initDualM(o, n);
            if (this.checkTimeout())
                return [];
        }
        var s = this.generatePairingSequence(o, i, r);
        if (this._isTimeout && 0 === s.length)
            return [];
        var p = this.assignCharacters(s, n, r);
        p.length > 0 && CharacterGenerator_1.CONST_SHOW_DEBUG_INFO && this.solverBuilder.generate(p, this.currentTileMap);
        return p;
    };
    CharacterGenerator.prototype.computePTLGroups = function (e) {
        var t, o, n, i;
        if (0 === e.length)
            return new Map();
        var r = new Map(this.currentTileMap), s = new Set();
        try {
            for (var c = __values(r.values()), u = c.next(); !u.done; u = c.next()) {
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
                    this.graph.isTileSelectable(g, s, r) && this.graph.isTileSelectable(_, s, r) && y.push(m);
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
                    C && !C.done && (i = T.return) && i.call(T);
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
    CharacterGenerator.prototype.applyAssignments = function (e, t) {
        var o, n;
        try {
            for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
                var s = __read(r.value, 4), c = s[0], u = s[1], p = s[2], f = s[3];
                this.applyToTilePair(c, u, p, f, t);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (n = i.return) && n.call(i);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    };
    CharacterGenerator.prototype.generateSolverString = function (e) {
        return this.solverBuilder.generate(e, this.currentTileMap);
    };
    CharacterGenerator.prototype.resetState = function (e, t, o) {
        if (o === void 0) { o = 0; }
        this.recentCharsHistory = [];
        this.assignedChars.clear();
        this.specialTileConfig = t || F;
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
        this._timeoutMs = o;
        this._isTimeout = false;
    };
    CharacterGenerator.prototype.buildCoordSelectionContext = function () {
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
    CharacterGenerator.prototype.buildCharSelectionContext = function () {
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
    CharacterGenerator.prototype.generatePairingSequence = function (e, t, o) {
        var n = this, i = [], r = new Set(e.filter(function (e) {
            return e.isValid;
        })), a = new Map(e.map(function (e) {
            return [n.graph.tileToCoord(e), e];
        })), u = t === ECoordSelectionType.ChainMulti || t === ECoordSelectionType.ChainMultiPlus;
        this.currentRemainingTiles = r;
        this.currentTileMap = a;
        for (; r.size >= 2 && !this.checkTimeout();) {
            var p = this.graph.getSelectableTiles(r, a);
            if (this.checkTimeout())
                break;
            u && this.updateChainAge(p, r);
            var f = this.checkMCharTriggers(o, p, a, r);
            if (f) {
                var d = __read(f, 2), h = d[0], y = d[1], m = this.graph.tileToCoord(h), v = this.graph.tileToCoord(y), g = this.safety.computeFreedCoords(m, v, r, a, p);
                this.pairingHistory.push([m, v]);
                i.push([h, y]);
                r.delete(h);
                r.delete(y);
                this.lastFreedCoords = g;
                t === ECoordSelectionType.IntuitiveChainPlus && (this.lastSecondCoord = v);
            }
            else {
                this.mCharMgr.lockedCoords.size > 0 && (p = p.filter(function (e) {
                    return !n.mCharMgr.lockedCoords.has(n.graph.tileToCoord(e));
                }));
                if (p.length < 2)
                    break;
                this.maxSelectableZ = Math.max.apply(Math, __spreadArrays(p.map(function (e) {
                    return e.layer;
                })));
                for (var _ = [], T = 0; T < p.length; T++)
                    for (var C = T + 1; C < p.length; C++)
                        _.push([p[T], p[C]]);
                var b = this.selectPairWithSafety(_, t, r, a);
                if (this.checkTimeout() || !b)
                    break;
                var E = this.graph.tileToCoord(b[0]), S = this.graph.tileToCoord(b[1]), I = this.safety.computeFreedCoords(E, S, r, a, p);
                this.pairingHistory.push([E, S]);
                i.push(b);
                r.delete(b[0]);
                r.delete(b[1]);
                this.lastFreedCoords = I;
                t === ECoordSelectionType.IntuitiveChainPlus && (this.lastSecondCoord = S);
                if (u) {
                    var w = this.graph.getSelectableTiles(r, a);
                    this.prevSelectableForChain = new Set(w.map(function (e) {
                        return n.graph.tileToCoord(e);
                    }));
                }
            }
        }
        return i;
    };
    CharacterGenerator.prototype.checkMCharTriggers = function (e, t, o, n) {
        return e === ECharSelectionType.PredTrigger && this.mCharMgr.active ? this.mCharMgr.checkSingleMTrigger(t, o, n) : e === ECharSelectionType.DualMTrigger && this.mCharMgr.groups.length > 0 ? this.mCharMgr.checkDualMTrigger(t, o, n) : null;
    };
    CharacterGenerator.prototype.updateChainAge = function (e, t) {
        var o, n, i = this, r = new Set(e.map(function (e) {
            return i.graph.tileToCoord(e);
        })), l = 0 === this.prevSelectableForChain.size;
        try {
            for (var s = __values(t), c = s.next(); !c.done; c = s.next()) {
                var u = c.value, p = this.graph.tileToCoord(u);
                if (r.has(p)) {
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
    CharacterGenerator.prototype.selectPairWithSafety = function (e, t, o, n) {
        var i, r, l = this.graph.getSelectableTiles(o, n), s = new Set(l), c = [], u = this.coordSelectors.get(t) || new RandomCoordSel_1.RandomCoordSel(), p = this.buildCoordSelectionContext();
        try {
            for (var f = __values(e), h = f.next(); !h.done; h = f.next()) {
                var y = h.value;
                if (this.checkTimeout())
                    break;
                this.safety.isSafePairChoiceFast(y, o, n, l, s) && c.push({
                    priority: u.calculatePriority(y[0], y[1], p),
                    pair: y
                });
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                h && !h.done && (r = f.return) && r.call(f);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        if (0 === c.length)
            return null;
        c.sort(function (e, t) {
            return e.priority.priority !== t.priority.priority ? t.priority.priority - e.priority.priority : t.priority.subScore - e.priority.subScore;
        });
        var m = c[0].priority.priority, v = c.filter(function (e) {
            return e.priority.priority === m;
        });
        return v[Math.floor(Math.random() * v.length)].pair;
    };
    CharacterGenerator.prototype.assignCharacters = function (e, t, o) {
        var n, i, r, c, u, p, f, d, h, y = [], m = [];
        try {
            for (var v = __values(e), g = v.next(); !g.done; g = v.next()) {
                var _ = g.value;
                (this.isRestrictedPosition(_[0], _[1]) ? y : m).push(_);
            }
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
        var T = [], C = [];
        try {
            for (var b = __values(t), E = b.next(); !E.done; E = b.next()) {
                _ = E.value;
                (this.isSpecialPair(_) ? T : C).push(_);
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                E && !E.done && (c = b.return) && c.call(b);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        this.shuffleArray(T);
        this.shuffleArray(C);
        var S = [], I = this.charSelectors.get(o) || new RandomCharSel_1.RandomCharSel(), w = this.buildCharSelectionContext(), x = __spreadArrays(C);
        try {
            for (var M = __values(y), O = M.next(); !O.done; O = M.next()) {
                var D = __read(O.value, 2), P = D[0], A = D[1];
                if (0 === x.length)
                    break;
                var R = I.selectCharacterPair(P, A, x, w), N = x[R];
                x.splice(R, 1);
                S.push([P, A, N[0], N[1]]);
                this.updateAssignmentHistory(P, A, N);
            }
        }
        catch (e) {
            u = {
                error: e
            };
        }
        finally {
            try {
                O && !O.done && (p = M.return) && p.call(M);
            }
            finally {
                if (u)
                    throw u.error;
            }
        }
        var j = __spreadArrays(T, x);
        this.shuffleArray(j);
        var k = new Map(), L = function L(e, t) {
            var o = G.graph.tileToCoord(e), n = G.graph.tileToCoord(t);
            if (G.mCharMgr.pairedCoords.has(o) || G.mCharMgr.pairedCoords.has(n)) {
                var i = G.mCharMgr.findGroupForCoord(o, n), r = (null == i ? void 0 : i.pairData) || G.mCharMgr.primaryPairData, a = null !== (h = null == i ? void 0 : i.resId) && void 0 !== h ? h : G.mCharMgr.primaryResId;
                if (r && null !== a) {
                    var l = k.get(a) || 0;
                    if (l < 2) {
                        S.push([e, t, r[0], r[1]]);
                        G.updateAssignmentHistory(e, t, r);
                        var s = j.findIndex(function (e) {
                            return e[0].resId === a;
                        });
                        -1 !== s && j.splice(s, 1);
                        k.set(a, l + 1);
                        return "continue";
                    }
                }
            }
            if (0 === j.length)
                return "break";
            var c = I.selectCharacterPair(e, t, j, w), u = j[c];
            j.splice(c, 1);
            S.push([e, t, u[0], u[1]]);
            G.updateAssignmentHistory(e, t, u);
        }, G = this;
        try {
            for (var F = __values(m), V = F.next(); !V.done; V = F.next()) {
                var U = __read(V.value, 2);
                if ("break" === L(P = U[0], A = U[1]))
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
                V && !V.done && (d = F.return) && d.call(F);
            }
            finally {
                if (f)
                    throw f.error;
            }
        }
        return S;
    };
    CharacterGenerator.prototype.updateAssignmentHistory = function (e, t, o) {
        this.recentCharsHistory.push(o[0].resId);
        this.recentCharsHistory.length > 50 && this.recentCharsHistory.shift();
        this.assignedChars.set(this.graph.tileToCoord(e), o[0].resId);
        this.assignedChars.set(this.graph.tileToCoord(t), o[1].resId);
    };
    CharacterGenerator.prototype.applyToTilePair = function (e, t, o, n, i) {
        if (e.type === TileTypeEnum_1.ETileType.RollCard)
            e.changeResId(o.resId);
        else {
            i.setTileType(e.id, o.type === TileTypeEnum_1.ETileType.RollCard ? TileTypeEnum_1.ETileType.Normal : o.type);
            e.changeResId(o.resId);
            e.setDuoxiaoCount(o.duoxiaoCount || 0);
        }
        if (t.type === TileTypeEnum_1.ETileType.RollCard)
            t.changeResId(n.resId);
        else {
            i.setTileType(t.id, n.type === TileTypeEnum_1.ETileType.RollCard ? TileTypeEnum_1.ETileType.Normal : n.type);
            t.changeResId(n.resId);
            t.setDuoxiaoCount(n.duoxiaoCount || 0);
        }
    };
    CharacterGenerator.prototype.isRestrictedPosition = function (e, t) {
        var o = this.specialTileConfig.restrictedPositionTypes;
        return o.includes(e.type) || o.includes(t.type);
    };
    CharacterGenerator.prototype.isSpecialData = function (e) {
        return this.specialTileConfig.specialTileTypes.includes(e.type) || this.specialTileConfig.specialResIds.includes(e.resId);
    };
    CharacterGenerator.prototype.isSpecialPair = function (e) {
        return this.isSpecialData(e[0]) || this.isSpecialData(e[1]);
    };
    CharacterGenerator.prototype.shuffleArray = function (e) {
        for (var t, o = e.length - 1; o > 0; o--) {
            var n = Math.floor(Math.random() * (o + 1));
            t = __read([e[n], e[o]], 2), e[o] = t[0], e[n] = t[1];
        }
    };
    var CharacterGenerator_1;
    CharacterGenerator.CONST_SHOW_DEBUG_INFO = false;
    CharacterGenerator.instance = null;
    CharacterGenerator = CharacterGenerator_1 = __decorate([
        mj.class("CharacterGenerator")
    ], CharacterGenerator);
    return CharacterGenerator;
}());
exports.default = CharacterGenerator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NoYXJhY3RlckdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE4RDtBQUM5RCx5RUFBZ0U7QUFDaEUsbURBQWtEO0FBQ2xELGlEQUFnRDtBQUNoRCx5REFBd0Q7QUFDeEQseURBQXdEO0FBQ3hELHlEQUF3RDtBQUN4RCx1REFBc0Q7QUFDdEQsMkRBQTBEO0FBQzFELGlFQUFnRTtBQUNoRSxtRUFBa0U7QUFDbEUsMkVBQTBFO0FBQzFFLDJFQUEwRTtBQUMxRSxtRUFBa0U7QUFDbEUseURBQXdEO0FBQ3hELHVFQUFzRTtBQUN0RSxpREFBZ0Q7QUFDaEQsdURBQXNEO0FBQ3RELHFEQUFvRDtBQUNwRCx1REFBc0Q7QUFDdEQsMkRBQTBEO0FBQzFELDZEQUE0RDtBQUM1RCx5REFBd0Q7QUFDeEQsNkRBQTREO0FBQzVELCtEQUE4RDtBQUM5RCxxREFBb0Q7QUFDcEQsaURBQWdEO0FBQ2hELDZEQUE0RDtBQUM1RCw2REFBNEQ7QUFDNUQsbURBQW9EO0FBMkQzQyxpR0EzREEsaUNBQWdCLE9BMkRBO0FBMUR6QixJQUFZLG1CQWVYO0FBZkQsV0FBWSxtQkFBbUI7SUFDN0IsaUVBQVUsQ0FBQTtJQUNWLCtEQUFTLENBQUE7SUFDVCx1RUFBYSxDQUFBO0lBQ2IsK0VBQWlCLENBQUE7SUFDakIsK0VBQWlCLENBQUE7SUFDakIsNkVBQWdCLENBQUE7SUFDaEIseUVBQWMsQ0FBQTtJQUNkLCtFQUFpQixDQUFBO0lBQ2pCLGlGQUFrQixDQUFBO0lBQ2xCLDBGQUF1QixDQUFBO0lBQ3ZCLDBFQUFlLENBQUE7SUFDZixrRkFBbUIsQ0FBQTtJQUNuQix1RkFBc0IsQ0FBQTtJQUN0Qix5RUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFmVyxtQkFBbUIsR0FBbkIsMkJBQW1CLEtBQW5CLDJCQUFtQixRQWU5QjtBQUNELElBQVksa0JBVVg7QUFWRCxXQUFZLGtCQUFrQjtJQUM1QiwrREFBVSxDQUFBO0lBQ1YscUVBQWEsQ0FBQTtJQUNiLG1FQUFZLENBQUE7SUFDWixxRUFBYSxDQUFBO0lBQ2IseUVBQWUsQ0FBQTtJQUNmLDJFQUFnQixDQUFBO0lBQ2hCLHVFQUFjLENBQUE7SUFDZCwyRUFBZ0IsQ0FBQTtJQUNoQiw4RUFBa0IsQ0FBQTtBQUNwQixDQUFDLEVBVlcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFVN0I7QUFDVSxRQUFBLGtCQUFrQixHQUFHLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztBQUMvRCxDQUFDLHdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztBQUMzRCx3QkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDckQsd0JBQWdCLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ3pELHdCQUFnQixDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUMvRCx3QkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDOUQsd0JBQWdCLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQzdELHdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUM1RCx3QkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDOUQsd0JBQWdCLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzlELHdCQUFnQixDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3RFLHdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztBQUM5RCx3QkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsR0FBRyxjQUFjLENBQUM7QUFDdEUsd0JBQWdCLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3hELHdCQUFnQixDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3pELFFBQUEsZ0JBQWdCLEdBQUcsd0JBQWdCLENBQUM7QUFDL0MsQ0FBQyx1QkFBZSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN6RCx1QkFBZSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUN2RCx1QkFBZSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUN0RCx1QkFBZSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUN2RCx1QkFBZSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUN6RCx1QkFBZSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUM3RCx1QkFBZSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUMxRCx1QkFBZSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUM1RCx1QkFBZSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUNqRCxRQUFBLGVBQWUsR0FBRyx1QkFBZSxDQUFDO0FBQzdDLElBQUksQ0FBQyxHQUFHO0lBQ04sdUJBQXVCLEVBQUUsQ0FBQyx3QkFBUyxDQUFDLFFBQVEsQ0FBQztJQUM3QyxnQkFBZ0IsRUFBRSxDQUFDLHdCQUFTLENBQUMsSUFBSSxFQUFFLHdCQUFTLENBQUMsV0FBVyxFQUFFLHdCQUFTLENBQUMsVUFBVSxDQUFDO0lBQy9FLGFBQWEsRUFBRSxDQUFDLHFCQUFLLENBQUMsWUFBWSxFQUFFLHFCQUFLLENBQUMsUUFBUSxDQUFDO0NBQ3BELENBQUM7QUFHRjtJQUFBO1FBQ0UsVUFBSyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBQzlCLFdBQU0sR0FBRyxJQUFJLDZCQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLGFBQVEsR0FBRyxJQUFJLHlDQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxrQkFBYSxHQUFHLElBQUkseUNBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQiwwQkFBcUIsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMzQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixvQkFBZSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDNUIsMkJBQXNCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLElBQUksK0JBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSw2QkFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLHFDQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxJQUFJLHFDQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxJQUFJLHFDQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLG1DQUFnQixFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLHVDQUFrQixFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxJQUFJLDZDQUFxQixFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxJQUFJLCtDQUFzQixFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixFQUFFLElBQUksdURBQTBCLEVBQUUsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLElBQUksdURBQTBCLEVBQUUsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLElBQUksK0NBQXNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUkscUNBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxtREFBd0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzM0QixrQkFBYSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSw2QkFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLG1DQUFnQixFQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxJQUFJLGlDQUFlLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLElBQUksbUNBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLElBQUksdUNBQWtCLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLElBQUkseUNBQW1CLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLElBQUkscUNBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLElBQUkseUNBQW1CLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLElBQUksMkNBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQWlldGlCLENBQUM7MkJBcmZvQixrQkFBa0I7SUF1QnJDLHNCQUFJLHlDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFDTSw4QkFBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksb0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QseUNBQVksR0FBWjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCx3REFBMkIsR0FBM0IsVUFBNEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBOEIsRUFBRSxDQUE2QixFQUFFLENBQUUsRUFBRSxDQUFLO1FBQXhFLGtCQUFBLEVBQUEsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNO1FBQUUsa0JBQUEsRUFBQSxJQUFJLGtCQUFrQixDQUFDLE1BQU07UUFBTSxrQkFBQSxFQUFBLEtBQUs7UUFDM0csSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLGtCQUFrQixDQUFDLFdBQVcsRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUFFLE9BQU8sRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLEtBQUssa0JBQWtCLENBQUMsWUFBWSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQUUsT0FBTyxFQUFFLENBQUM7U0FDcEM7UUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksb0JBQWtCLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoSCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO1lBQUUsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFDbEMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDVjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHO1lBQ2hFLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN4RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzRjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO2dCQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSTtnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkI7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLENBQUMsR0FBRztvQkFDRixLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDO2FBQ0g7b0JBQVM7Z0JBQ1IsSUFBSTtvQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3Qzt3QkFBUztvQkFDUixJQUFJLENBQUM7d0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUN0QjthQUNGO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELDZDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDckM7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7SUFDRCxpREFBb0IsR0FBcEIsVUFBcUIsQ0FBQztRQUNwQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELHVDQUFVLEdBQVYsVUFBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUs7UUFBTCxrQkFBQSxFQUFBLEtBQUs7UUFDcEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELHVEQUEwQixHQUExQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNsRCxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBTSxDQUFDLEVBQUUsQ0FBQztZQUNqQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNsQztRQUNELE9BQU87WUFDTCxXQUFXLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQztnQkFDekIsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELFdBQVcsRUFBRSxVQUFVLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUNELGdCQUFnQixFQUFFLFVBQVUsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7WUFDRCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDcEYsQ0FBQztZQUNELHFCQUFxQixFQUFFLFVBQVUsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RGLENBQUM7WUFDRCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNO1lBQzFDLFdBQVcsRUFBRSxDQUFDO1lBQ2QsV0FBVyxFQUFFLENBQUM7U0FDZixDQUFDO0lBQ0osQ0FBQztJQUNELHNEQUF5QixHQUF6QjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLE9BQU87WUFDTCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxXQUFXLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQztnQkFDekIsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELFdBQVcsRUFBRSxVQUFVLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUNELGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZO1lBQ3RDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDakMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDM0YsQ0FBQztJQUNKLENBQUM7SUFDRCxvREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsRUFBRSxFQUNOLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUM5QixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDM0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDLEVBQ0gsQ0FBQyxHQUFHLENBQUMsS0FBSyxtQkFBbUIsQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztRQUN2RixJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUc7WUFDM0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUFFLE1BQU07WUFDL0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUM3QixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQzdCLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxLQUFLLG1CQUFtQixDQUFDLGtCQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM1RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO29CQUM5RCxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQUUsTUFBTTtnQkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLGlCQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO29CQUM5RCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTt3QkFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUFFLE1BQU07Z0JBQ3JDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNsQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2hDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDVixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsS0FBSyxtQkFBbUIsQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7d0JBQ3JELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ0w7YUFDRjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsK0NBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDM0IsT0FBTyxDQUFDLEtBQUssa0JBQWtCLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxrQkFBa0IsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDaFAsQ0FBQztJQUNELDJDQUFjLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksRUFDUixDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDM0IsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQztRQUM3QyxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDWixJQUFJLENBQUMsRUFBRTt3QkFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ2hDO3lCQUFNO3dCQUNMLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ3JFOzZCQUFNOzRCQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDaEM7cUJBQ0Y7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNoQzthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsaURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdkMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNkLENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksK0JBQWMsRUFBRSxFQUN0RCxDQUFDLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDeEMsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFBRSxNQUFNO2dCQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN4RCxRQUFRLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxJQUFJLEVBQUUsQ0FBQztpQkFDUixDQUFDLENBQUM7YUFDSjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07WUFBRSxPQUFPLElBQUksQ0FBQztRQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQzdJLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQzVCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN0QixPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RCxDQUFDO0lBQ0QsNkNBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ1IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDWixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLDZCQUFhLEVBQUUsRUFDcEQsQ0FBQyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUNwQyxDQUFDLGtCQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2IsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07b0JBQUUsTUFBTTtnQkFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUN2QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGtCQUFPLENBQUMsRUFBSyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLEVBQ2YsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUM1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDeEMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFDbkUsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztnQkFDaEcsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDOzRCQUM3QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO3dCQUMxQixDQUFDLENBQUMsQ0FBQzt3QkFDSCxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsT0FBTyxVQUFVLENBQUM7cUJBQ25CO2lCQUNGO2FBQ0Y7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtnQkFBRSxPQUFPLE9BQU8sQ0FBQztZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ1gsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFFLE1BQU07YUFDOUM7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELG9EQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNELDRDQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLHdCQUFTLENBQUMsUUFBUTtZQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQUs7WUFDN0QsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssd0JBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHdCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0UsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLHdCQUFTLENBQUMsUUFBUTtZQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQUs7WUFDN0QsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssd0JBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHdCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0UsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUNELGlEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUM7UUFDdkQsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsMENBQWEsR0FBYixVQUFjLENBQUM7UUFDYixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1SCxDQUFDO0lBQ0QsMENBQWEsR0FBYixVQUFjLENBQUM7UUFDYixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QseUNBQVksR0FBWixVQUFhLENBQUM7UUFDWixLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDOztJQS9kTSx3Q0FBcUIsR0FBRyxLQUFLLENBQUM7SUFDOUIsMkJBQVEsR0FBRyxJQUFJLENBQUM7SUF0Qkosa0JBQWtCO1FBRHRDLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0FxZnRDO0lBQUQseUJBQUM7Q0FyZkQsQUFxZkMsSUFBQTtrQkFyZm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgeyBSZXNJZCB9IGZyb20gJy4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBSYW5kb21Db29yZFNlbCB9IGZyb20gJy4vUmFuZG9tQ29vcmRTZWwnO1xuaW1wb3J0IHsgU2FtZVpDb29yZFNlbCB9IGZyb20gJy4vU2FtZVpDb29yZFNlbCc7XG5pbXBvcnQgeyBBbnRpQ2hhaW5Db29yZFNlbCB9IGZyb20gJy4vQW50aUNoYWluQ29vcmRTZWwnO1xuaW1wb3J0IHsgUHJlZERlcHRoQ29vcmRTZWwgfSBmcm9tICcuL1ByZWREZXB0aENvb3JkU2VsJztcbmltcG9ydCB7IFNob3J0RGlzdENvb3JkU2VsIH0gZnJvbSAnLi9TaG9ydERpc3RDb29yZFNlbCc7XG5pbXBvcnQgeyBMb25nRGlzdENvb3JkU2VsIH0gZnJvbSAnLi9Mb25nRGlzdENvb3JkU2VsJztcbmltcG9ydCB7IEhlaWdodFBhaXJDb29yZFNlbCB9IGZyb20gJy4vSGVpZ2h0UGFpckNvb3JkU2VsJztcbmltcG9ydCB7IEFudGlJbnR1aXRpdmVDb29yZFNlbCB9IGZyb20gJy4vQW50aUludHVpdGl2ZUNvb3JkU2VsJztcbmltcG9ydCB7IEludHVpdGl2ZUNoYWluQ29vcmRTZWwgfSBmcm9tICcuL0ludHVpdGl2ZUNoYWluQ29vcmRTZWwnO1xuaW1wb3J0IHsgSW50dWl0aXZlQ2hhaW5QbHVzQ29vcmRTZWwgfSBmcm9tICcuL0ludHVpdGl2ZUNoYWluUGx1c0Nvb3JkU2VsJztcbmltcG9ydCB7IERpZmZpY3VsdHlEZWNpc2lvbkNvb3JkU2VsIH0gZnJvbSAnLi9EaWZmaWN1bHR5RGVjaXNpb25Db29yZFNlbCc7XG5pbXBvcnQgeyBDaGFpbk11bHRpUGx1c0Nvb3JkU2VsIH0gZnJvbSAnLi9DaGFpbk11bHRpUGx1c0Nvb3JkU2VsJztcbmltcG9ydCB7IFN5bW1ldHJpY0Nvb3JkU2VsIH0gZnJvbSAnLi9TeW1tZXRyaWNDb29yZFNlbCc7XG5pbXBvcnQgeyBTeW1tZXRyaWNTaHVmZmxlQ29vcmRTZWwgfSBmcm9tICcuL1N5bW1ldHJpY1NodWZmbGVDb29yZFNlbCc7XG5pbXBvcnQgeyBSYW5kb21DaGFyU2VsIH0gZnJvbSAnLi9SYW5kb21DaGFyU2VsJztcbmltcG9ydCB7IENvbG9yTmVhckNoYXJTZWwgfSBmcm9tICcuL0NvbG9yTmVhckNoYXJTZWwnO1xuaW1wb3J0IHsgQ29sb3JGYXJDaGFyU2VsIH0gZnJvbSAnLi9Db2xvckZhckNoYXJTZWwnO1xuaW1wb3J0IHsgUHJlZENvb3JkQ2hhclNlbCB9IGZyb20gJy4vUHJlZENvb3JkQ2hhclNlbCc7XG5pbXBvcnQgeyBQcmVkVHJpZ2dlckNoYXJTZWwgfSBmcm9tICcuL1ByZWRUcmlnZ2VyQ2hhclNlbCc7XG5pbXBvcnQgeyBSb3dEaXZlcnNpdHlDaGFyU2VsIH0gZnJvbSAnLi9Sb3dEaXZlcnNpdHlDaGFyU2VsJztcbmltcG9ydCB7IENoYWluQXZvaWRDaGFyU2VsIH0gZnJvbSAnLi9DaGFpbkF2b2lkQ2hhclNlbCc7XG5pbXBvcnQgeyBEdWFsTVRyaWdnZXJDaGFyU2VsIH0gZnJvbSAnLi9EdWFsTVRyaWdnZXJDaGFyU2VsJztcbmltcG9ydCB7IFJlY2VudFR3b05lYXJDaGFyU2VsIH0gZnJvbSAnLi9SZWNlbnRUd29OZWFyQ2hhclNlbCc7XG5pbXBvcnQgeyBEZXBlbmRlbmN5R3JhcGggfSBmcm9tICcuL0RlcGVuZGVuY3lHcmFwaCc7XG5pbXBvcnQgeyBTYWZldHlDaGVja2VyIH0gZnJvbSAnLi9TYWZldHlDaGVja2VyJztcbmltcG9ydCB7IE1DaGFyVHJpZ2dlck1hbmFnZXIgfSBmcm9tICcuL01DaGFyVHJpZ2dlck1hbmFnZXInO1xuaW1wb3J0IHsgU29sdmVyU3RyaW5nQnVpbGRlciB9IGZyb20gJy4vU29sdmVyU3RyaW5nQnVpbGRlcic7XG5pbXBvcnQgeyBJVGlsZVNodWZmbGVEYXRhIH0gZnJvbSAnLi9JQ2hhclNlbGVjdGlvbic7XG5leHBvcnQgZW51bSBFQ29vcmRTZWxlY3Rpb25UeXBlIHtcbiAgUmFuZG9tID0gMSxcbiAgU2FtZVogPSAyLFxuICBBbnRpQ2hhaW4gPSAzLFxuICBQcmVkRGVwdGhTeW5jID0gNCxcbiAgU2hvcnREaXN0YW5jZSA9IDUsXG4gIExvbmdEaXN0YW5jZSA9IDYsXG4gIEhlaWdodFBhaXIgPSA3LFxuICBBbnRpSW50dWl0aXZlID0gOCxcbiAgSW50dWl0aXZlQ2hhaW4gPSA5LFxuICBJbnR1aXRpdmVDaGFpblBsdXMgPSAxMCxcbiAgQ2hhaW5NdWx0aSA9IDExLFxuICBDaGFpbk11bHRpUGx1cyA9IDEyLFxuICBTeW1tZXRyaWNTaHVmZmxlID0gOTk4LFxuICBTeW1tZXRyaWMgPSA5OTksXG59XG5leHBvcnQgZW51bSBFQ2hhclNlbGVjdGlvblR5cGUge1xuICBSYW5kb20gPSAxLFxuICBDb2xvck5lYXIgPSAyLFxuICBDb2xvckZhciA9IDMsXG4gIFByZWRDb29yZCA9IDQsXG4gIFByZWRUcmlnZ2VyID0gNSxcbiAgUm93RGl2ZXJzaXR5ID0gNixcbiAgQ2hhaW5Bdm9pZCA9IDcsXG4gIER1YWxNVHJpZ2dlciA9IDgsXG4gIFJlY2VudFR3b05lYXIgPSAxMCxcbn1cbmV4cG9ydCB2YXIgRGlmZmljdWx0eURlY2lzaW9uID0gRUNvb3JkU2VsZWN0aW9uVHlwZS5DaGFpbk11bHRpO1xuKENPT1JEX0FMR09fTkFNRVMgPSB7fSlbRUNvb3JkU2VsZWN0aW9uVHlwZS5SYW5kb21dID0gXCLpmo/mnLpcIjtcbkNPT1JEX0FMR09fTkFNRVNbRUNvb3JkU2VsZWN0aW9uVHlwZS5TYW1lWl0gPSBcIuWQjFrkvJjlhYhcIjtcbkNPT1JEX0FMR09fTkFNRVNbRUNvb3JkU2VsZWN0aW9uVHlwZS5BbnRpQ2hhaW5dID0gXCLlj43pk77pgb/orqlcIjtcbkNPT1JEX0FMR09fTkFNRVNbRUNvb3JkU2VsZWN0aW9uVHlwZS5QcmVkRGVwdGhTeW5jXSA9IFwi5YmN6amx5rex5bqm5Y2P5ZCMXCI7XG5DT09SRF9BTEdPX05BTUVTW0VDb29yZFNlbGVjdGlvblR5cGUuU2hvcnREaXN0YW5jZV0gPSBcIuefrei3neemu+S8mOWFiFwiO1xuQ09PUkRfQUxHT19OQU1FU1tFQ29vcmRTZWxlY3Rpb25UeXBlLkxvbmdEaXN0YW5jZV0gPSBcIumVv+i3neemu+S8mOWFiFwiO1xuQ09PUkRfQUxHT19OQU1FU1tFQ29vcmRTZWxlY3Rpb25UeXBlLkhlaWdodFBhaXJdID0gXCLpq5jluqbphY3lr7nkvJjlhYhcIjtcbkNPT1JEX0FMR09fTkFNRVNbRUNvb3JkU2VsZWN0aW9uVHlwZS5BbnRpSW50dWl0aXZlXSA9IFwi5Y+N55u06KeJ6YWN5a+5XCI7XG5DT09SRF9BTEdPX05BTUVTW0VDb29yZFNlbGVjdGlvblR5cGUuSW50dWl0aXZlQ2hhaW5dID0gXCLnm7Top4nov57mtohcIjtcbkNPT1JEX0FMR09fTkFNRVNbRUNvb3JkU2VsZWN0aW9uVHlwZS5JbnR1aXRpdmVDaGFpblBsdXNdID0gXCLnm7Top4nov57mtohwbHVzXCI7XG5DT09SRF9BTEdPX05BTUVTW0VDb29yZFNlbGVjdGlvblR5cGUuQ2hhaW5NdWx0aV0gPSBcIuWkmumAiS3pk77lvI8t5aSa6YCJXCI7XG5DT09SRF9BTEdPX05BTUVTW0VDb29yZFNlbGVjdGlvblR5cGUuQ2hhaW5NdWx0aVBsdXNdID0gXCLlpJrpgIkt6ZO+5byPLeWkmumAiVBsdXNcIjtcbkNPT1JEX0FMR09fTkFNRVNbRUNvb3JkU2VsZWN0aW9uVHlwZS5TeW1tZXRyaWNdID0gXCLlhajlr7nnp7BcIjtcbkNPT1JEX0FMR09fTkFNRVNbRUNvb3JkU2VsZWN0aW9uVHlwZS5TeW1tZXRyaWNTaHVmZmxlXSA9IFwi5YWo5a+556ew55uY6Z2i5bGC5omT5LmxXCI7XG5leHBvcnQgdmFyIENPT1JEX0FMR09fTkFNRVMgPSBDT09SRF9BTEdPX05BTUVTO1xuKENIQVJfQUxHT19OQU1FUyA9IHt9KVtFQ2hhclNlbGVjdGlvblR5cGUuUmFuZG9tXSA9IFwi6ZqP5py6XCI7XG5DSEFSX0FMR09fTkFNRVNbRUNoYXJTZWxlY3Rpb25UeXBlLkNvbG9yTmVhcl0gPSBcIuminOiJsumCu+i/kVwiO1xuQ0hBUl9BTEdPX05BTUVTW0VDaGFyU2VsZWN0aW9uVHlwZS5Db2xvckZhcl0gPSBcIuminOiJsui/nOemu1wiO1xuQ0hBUl9BTEdPX05BTUVTW0VDaGFyU2VsZWN0aW9uVHlwZS5QcmVkQ29vcmRdID0gXCLliY3pqbHljY/osINcIjtcbkNIQVJfQUxHT19OQU1FU1tFQ2hhclNlbGVjdGlvblR5cGUuUHJlZFRyaWdnZXJdID0gXCLliY3pqbHop6blj5FcIjtcbkNIQVJfQUxHT19OQU1FU1tFQ2hhclNlbGVjdGlvblR5cGUuUm93RGl2ZXJzaXR5XSA9IFwi6KGM5YaF5a2X56ym5aSa5qC35oCnXCI7XG5DSEFSX0FMR09fTkFNRVNbRUNoYXJTZWxlY3Rpb25UeXBlLkNoYWluQXZvaWRdID0gXCLpk77lvI/kvKDmkq3pgb/lhY1cIjtcbkNIQVJfQUxHT19OQU1FU1tFQ2hhclNlbGVjdGlvblR5cGUuRHVhbE1UcmlnZ2VyXSA9IFwi5Y+MTeWJjempseinpuWPkVwiO1xuQ0hBUl9BTEdPX05BTUVTW0VDaGFyU2VsZWN0aW9uVHlwZS5SZWNlbnRUd29OZWFyXSA9IFwi6L+R5Lik5a+56YK76L+RXCI7XG5leHBvcnQgdmFyIENIQVJfQUxHT19OQU1FUyA9IENIQVJfQUxHT19OQU1FUztcbnZhciBGID0ge1xuICByZXN0cmljdGVkUG9zaXRpb25UeXBlczogW0VUaWxlVHlwZS5Sb2xsQ2FyZF0sXG4gIHNwZWNpYWxUaWxlVHlwZXM6IFtFVGlsZVR5cGUuQm9tYiwgRVRpbGVUeXBlLkR1b3hpYW9DYXJkLCBFVGlsZVR5cGUuRGF4aWFvQ2FyZF0sXG4gIHNwZWNpYWxSZXNJZHM6IFtSZXNJZC5lbUJvbWJDYXJkSWQsIFJlc0lkLmVtUmFua0lkXVxufTtcbmV4cG9ydCB7IElUaWxlU2h1ZmZsZURhdGEgfTtcbkBtai5jbGFzcyhcIkNoYXJhY3RlckdlbmVyYXRvclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyR2VuZXJhdG9yIHtcbiAgZ3JhcGggPSBuZXcgRGVwZW5kZW5jeUdyYXBoKCk7XG4gIHNhZmV0eSA9IG5ldyBTYWZldHlDaGVja2VyKHRoaXMuZ3JhcGgpO1xuICBtQ2hhck1nciA9IG5ldyBNQ2hhclRyaWdnZXJNYW5hZ2VyKHRoaXMuZ3JhcGgpO1xuICBzb2x2ZXJCdWlsZGVyID0gbmV3IFNvbHZlclN0cmluZ0J1aWxkZXIodGhpcy5ncmFwaCk7XG4gIHJlY2VudENoYXJzSGlzdG9yeSA9IFtdO1xuICBhc3NpZ25lZENoYXJzID0gbmV3IE1hcCgpO1xuICBzcGVjaWFsVGlsZUNvbmZpZyA9IEY7XG4gIGxhc3RGcmVlZENvb3JkcyA9IG5ldyBTZXQoKTtcbiAgcGFpcmluZ0hpc3RvcnkgPSBbXTtcbiAgY3VycmVudFJlbWFpbmluZ1RpbGVzID0gbmV3IFNldCgpO1xuICBjdXJyZW50VGlsZU1hcCA9IG5ldyBNYXAoKTtcbiAgbWF4U2VsZWN0YWJsZVogPSAwO1xuICBsYXN0U2Vjb25kQ29vcmQgPSBudWxsO1xuICBjaGFpbkFnZUNvdW50ZXIgPSBuZXcgTWFwKCk7XG4gIHByZXZTZWxlY3RhYmxlRm9yQ2hhaW4gPSBuZXcgU2V0KCk7XG4gIF9zdGFydFRpbWUgPSAwO1xuICBfdGltZW91dE1zID0gMDtcbiAgX2lzVGltZW91dCA9IGZhbHNlO1xuICBjb29yZFNlbGVjdG9ycyA9IG5ldyBNYXAoW1tFQ29vcmRTZWxlY3Rpb25UeXBlLlJhbmRvbSwgbmV3IFJhbmRvbUNvb3JkU2VsKCldLCBbRUNvb3JkU2VsZWN0aW9uVHlwZS5TYW1lWiwgbmV3IFNhbWVaQ29vcmRTZWwoKV0sIFtFQ29vcmRTZWxlY3Rpb25UeXBlLkFudGlDaGFpbiwgbmV3IEFudGlDaGFpbkNvb3JkU2VsKCldLCBbRUNvb3JkU2VsZWN0aW9uVHlwZS5QcmVkRGVwdGhTeW5jLCBuZXcgUHJlZERlcHRoQ29vcmRTZWwoKV0sIFtFQ29vcmRTZWxlY3Rpb25UeXBlLlNob3J0RGlzdGFuY2UsIG5ldyBTaG9ydERpc3RDb29yZFNlbCgpXSwgW0VDb29yZFNlbGVjdGlvblR5cGUuTG9uZ0Rpc3RhbmNlLCBuZXcgTG9uZ0Rpc3RDb29yZFNlbCgpXSwgW0VDb29yZFNlbGVjdGlvblR5cGUuSGVpZ2h0UGFpciwgbmV3IEhlaWdodFBhaXJDb29yZFNlbCgpXSwgW0VDb29yZFNlbGVjdGlvblR5cGUuQW50aUludHVpdGl2ZSwgbmV3IEFudGlJbnR1aXRpdmVDb29yZFNlbCgpXSwgW0VDb29yZFNlbGVjdGlvblR5cGUuSW50dWl0aXZlQ2hhaW4sIG5ldyBJbnR1aXRpdmVDaGFpbkNvb3JkU2VsKCldLCBbRUNvb3JkU2VsZWN0aW9uVHlwZS5JbnR1aXRpdmVDaGFpblBsdXMsIG5ldyBJbnR1aXRpdmVDaGFpblBsdXNDb29yZFNlbCgpXSwgW0VDb29yZFNlbGVjdGlvblR5cGUuQ2hhaW5NdWx0aSwgbmV3IERpZmZpY3VsdHlEZWNpc2lvbkNvb3JkU2VsKCldLCBbRUNvb3JkU2VsZWN0aW9uVHlwZS5DaGFpbk11bHRpUGx1cywgbmV3IENoYWluTXVsdGlQbHVzQ29vcmRTZWwoKV0sIFtFQ29vcmRTZWxlY3Rpb25UeXBlLlN5bW1ldHJpYywgbmV3IFN5bW1ldHJpY0Nvb3JkU2VsKCldLCBbRUNvb3JkU2VsZWN0aW9uVHlwZS5TeW1tZXRyaWNTaHVmZmxlLCBuZXcgU3ltbWV0cmljU2h1ZmZsZUNvb3JkU2VsKCldXSk7XG4gIGNoYXJTZWxlY3RvcnMgPSBuZXcgTWFwKFtbRUNoYXJTZWxlY3Rpb25UeXBlLlJhbmRvbSwgbmV3IFJhbmRvbUNoYXJTZWwoKV0sIFtFQ2hhclNlbGVjdGlvblR5cGUuQ29sb3JOZWFyLCBuZXcgQ29sb3JOZWFyQ2hhclNlbCgpXSwgW0VDaGFyU2VsZWN0aW9uVHlwZS5Db2xvckZhciwgbmV3IENvbG9yRmFyQ2hhclNlbCgpXSwgW0VDaGFyU2VsZWN0aW9uVHlwZS5QcmVkQ29vcmQsIG5ldyBQcmVkQ29vcmRDaGFyU2VsKCldLCBbRUNoYXJTZWxlY3Rpb25UeXBlLlByZWRUcmlnZ2VyLCBuZXcgUHJlZFRyaWdnZXJDaGFyU2VsKCldLCBbRUNoYXJTZWxlY3Rpb25UeXBlLlJvd0RpdmVyc2l0eSwgbmV3IFJvd0RpdmVyc2l0eUNoYXJTZWwoKV0sIFtFQ2hhclNlbGVjdGlvblR5cGUuQ2hhaW5Bdm9pZCwgbmV3IENoYWluQXZvaWRDaGFyU2VsKCldLCBbRUNoYXJTZWxlY3Rpb25UeXBlLkR1YWxNVHJpZ2dlciwgbmV3IER1YWxNVHJpZ2dlckNoYXJTZWwoKV0sIFtFQ2hhclNlbGVjdGlvblR5cGUuUmVjZW50VHdvTmVhciwgbmV3IFJlY2VudFR3b05lYXJDaGFyU2VsKCldXSk7XG4gIHN0YXRpYyBDT05TVF9TSE9XX0RFQlVHX0lORk8gPSBmYWxzZTtcbiAgc3RhdGljIGluc3RhbmNlID0gbnVsbDtcbiAgZ2V0IGlzVGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNUaW1lb3V0O1xuICB9XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICB0aGlzLmluc3RhbmNlIHx8ICh0aGlzLmluc3RhbmNlID0gbmV3IENoYXJhY3RlckdlbmVyYXRvcigpKTtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuICBjaGVja1RpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMuX3RpbWVvdXRNcyA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKERhdGUubm93KCkgLSB0aGlzLl9zdGFydFRpbWUgPiB0aGlzLl90aW1lb3V0TXMpIHtcbiAgICAgIHRoaXMuX2lzVGltZW91dCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGdlbmVyYXRlQ2hhcmFjdGVyQXNzaWdubWVudChlLCBvLCBuLCBpID0gRUNvb3JkU2VsZWN0aW9uVHlwZS5SYW5kb20sIHIgPSBFQ2hhclNlbGVjdGlvblR5cGUuUmFuZG9tLCBhPywgbCA9IDApIHtcbiAgICB0aGlzLnJlc2V0U3RhdGUoZSwgYSwgbCk7XG4gICAgdGhpcy5ncmFwaC5pbml0KG8sIGUuZ2V0VGlsZU1hcE9iamVjdCgpKTtcbiAgICBpZiAodGhpcy5jaGVja1RpbWVvdXQoKSkgcmV0dXJuIFtdO1xuICAgIGlmIChyID09PSBFQ2hhclNlbGVjdGlvblR5cGUuUHJlZFRyaWdnZXIpIHtcbiAgICAgIHRoaXMubUNoYXJNZ3IuaW5pdFNpbmdsZU0obywgbik7XG4gICAgICBpZiAodGhpcy5jaGVja1RpbWVvdXQoKSkgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAociA9PT0gRUNoYXJTZWxlY3Rpb25UeXBlLkR1YWxNVHJpZ2dlcikge1xuICAgICAgdGhpcy5tQ2hhck1nci5pbml0RHVhbE0obywgbik7XG4gICAgICBpZiAodGhpcy5jaGVja1RpbWVvdXQoKSkgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgcyA9IHRoaXMuZ2VuZXJhdGVQYWlyaW5nU2VxdWVuY2UobywgaSwgcik7XG4gICAgaWYgKHRoaXMuX2lzVGltZW91dCAmJiAwID09PSBzLmxlbmd0aCkgcmV0dXJuIFtdO1xuICAgIHZhciBwID0gdGhpcy5hc3NpZ25DaGFyYWN0ZXJzKHMsIG4sIHIpO1xuICAgIHAubGVuZ3RoID4gMCAmJiBDaGFyYWN0ZXJHZW5lcmF0b3IuQ09OU1RfU0hPV19ERUJVR19JTkZPICYmIHRoaXMuc29sdmVyQnVpbGRlci5nZW5lcmF0ZShwLCB0aGlzLmN1cnJlbnRUaWxlTWFwKTtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBjb21wdXRlUFRMR3JvdXBzKGUpIHtcbiAgICB2YXIgdCwgbywgbiwgaTtcbiAgICBpZiAoMCA9PT0gZS5sZW5ndGgpIHJldHVybiBuZXcgTWFwKCk7XG4gICAgdmFyIHIgPSBuZXcgTWFwKHRoaXMuY3VycmVudFRpbGVNYXApLFxuICAgICAgcyA9IG5ldyBTZXQoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKHIudmFsdWVzKCkpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICB2YXIgcCA9IHUudmFsdWU7XG4gICAgICAgIHMuYWRkKHApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICB1ICYmICF1LmRvbmUgJiYgKG8gPSBjLnJldHVybikgJiYgby5jYWxsKGMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGYgPSBuZXcgTWFwKCksIGQgPSBuZXcgU2V0KCksIGggPSAxOyBkLnNpemUgPCBlLmxlbmd0aDspIHtcbiAgICAgIGZvciAodmFyIHkgPSBbXSwgbSA9IDA7IG0gPCBlLmxlbmd0aDsgbSsrKSBpZiAoIWQuaGFzKG0pKSB7XG4gICAgICAgIHZhciB2ID0gX19yZWFkKGVbbV0sIDIpLFxuICAgICAgICAgIGcgPSB2WzBdLFxuICAgICAgICAgIF8gPSB2WzFdO1xuICAgICAgICB0aGlzLmdyYXBoLmlzVGlsZVNlbGVjdGFibGUoZywgcywgcikgJiYgdGhpcy5ncmFwaC5pc1RpbGVTZWxlY3RhYmxlKF8sIHMsIHIpICYmIHkucHVzaChtKTtcbiAgICAgIH1cbiAgICAgIGlmICgwID09PSB5Lmxlbmd0aCkgZm9yIChtID0gMDsgbSA8IGUubGVuZ3RoOyBtKyspIGQuaGFzKG0pIHx8IHkucHVzaChtKTtcbiAgICAgIGYuc2V0KGgsIHkpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgVCA9IChuID0gdm9pZCAwLCBfX3ZhbHVlcyh5KSksIEMgPSBULm5leHQoKTsgIUMuZG9uZTsgQyA9IFQubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGIgPSBDLnZhbHVlO1xuICAgICAgICAgIGQuYWRkKGIpO1xuICAgICAgICAgIHMuZGVsZXRlKGVbYl1bMF0pO1xuICAgICAgICAgIHMuZGVsZXRlKGVbYl1bMV0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG4gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgQyAmJiAhQy5kb25lICYmIChpID0gVC5yZXR1cm4pICYmIGkuY2FsbChUKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaCsrO1xuICAgIH1cbiAgICByZXR1cm4gZjtcbiAgfVxuICBhcHBseUFzc2lnbm1lbnRzKGUsIHQpIHtcbiAgICB2YXIgbywgbjtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaSA9IF9fdmFsdWVzKGUpLCByID0gaS5uZXh0KCk7ICFyLmRvbmU7IHIgPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgcyA9IF9fcmVhZChyLnZhbHVlLCA0KSxcbiAgICAgICAgICBjID0gc1swXSxcbiAgICAgICAgICB1ID0gc1sxXSxcbiAgICAgICAgICBwID0gc1syXSxcbiAgICAgICAgICBmID0gc1szXTtcbiAgICAgICAgdGhpcy5hcHBseVRvVGlsZVBhaXIoYywgdSwgcCwgZiwgdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHIgJiYgIXIuZG9uZSAmJiAobiA9IGkucmV0dXJuKSAmJiBuLmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2VuZXJhdGVTb2x2ZXJTdHJpbmcoZSkge1xuICAgIHJldHVybiB0aGlzLnNvbHZlckJ1aWxkZXIuZ2VuZXJhdGUoZSwgdGhpcy5jdXJyZW50VGlsZU1hcCk7XG4gIH1cbiAgcmVzZXRTdGF0ZShlLCB0LCBvID0gMCkge1xuICAgIHRoaXMucmVjZW50Q2hhcnNIaXN0b3J5ID0gW107XG4gICAgdGhpcy5hc3NpZ25lZENoYXJzLmNsZWFyKCk7XG4gICAgdGhpcy5zcGVjaWFsVGlsZUNvbmZpZyA9IHQgfHwgRjtcbiAgICB0aGlzLmxhc3RGcmVlZENvb3JkcyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnBhaXJpbmdIaXN0b3J5ID0gW107XG4gICAgdGhpcy5jdXJyZW50UmVtYWluaW5nVGlsZXMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5jdXJyZW50VGlsZU1hcCA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLm1heFNlbGVjdGFibGVaID0gMDtcbiAgICB0aGlzLmxhc3RTZWNvbmRDb29yZCA9IG51bGw7XG4gICAgdGhpcy5jaGFpbkFnZUNvdW50ZXIgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5wcmV2U2VsZWN0YWJsZUZvckNoYWluID0gbmV3IFNldCgpO1xuICAgIHRoaXMubUNoYXJNZ3IucmVzZXQoKTtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuX3RpbWVvdXRNcyA9IG87XG4gICAgdGhpcy5faXNUaW1lb3V0ID0gZmFsc2U7XG4gIH1cbiAgYnVpbGRDb29yZFNlbGVjdGlvbkNvbnRleHQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IDAsXG4gICAgICBvID0gMDtcbiAgICBpZiAodGhpcy5jaGFpbkFnZUNvdW50ZXIuc2l6ZSA+IDApIHtcbiAgICAgIHZhciBuID0gQXJyYXkuZnJvbSh0aGlzLmNoYWluQWdlQ291bnRlci52YWx1ZXMoKSk7XG4gICAgICB0ID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgWy4uLm5dKTtcbiAgICAgIG8gPSBNYXRoLm1heC5hcHBseShNYXRoLCBbLi4ubl0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0RXhwYW5kZWQ6IGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgIHJldHVybiBlLmdyYXBoLmdldEV4cGFuZGVkKHQsIG8pO1xuICAgICAgfSxcbiAgICAgIHRpbGVUb0Nvb3JkOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZS5ncmFwaC50aWxlVG9Db29yZCh0KTtcbiAgICAgIH0sXG4gICAgICBnZXRUb3BvbG9neUxldmVsOiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZS5ncmFwaC5nZXRUb3BvbG9neUxldmVsKHQpO1xuICAgICAgfSxcbiAgICAgIGxhc3RGcmVlZENvb3JkczogdGhpcy5sYXN0RnJlZWRDb29yZHMsXG4gICAgICBtYXhTZWxlY3RhYmxlWjogdGhpcy5tYXhTZWxlY3RhYmxlWixcbiAgICAgIGNvdW50RnJlZWRCbG9ja3M6IGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgIHJldHVybiBlLnNhZmV0eS5jb3VudEZyZWVkQmxvY2tzKHQsIG8sIGUuY3VycmVudFJlbWFpbmluZ1RpbGVzLCBlLmN1cnJlbnRUaWxlTWFwKTtcbiAgICAgIH0sXG4gICAgICBoYXNOZWlnaGJvclNlbGVjdGFibGU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBlLnNhZmV0eS5oYXNOZWlnaGJvclNlbGVjdGFibGUodCwgZS5jdXJyZW50UmVtYWluaW5nVGlsZXMsIGUuY3VycmVudFRpbGVNYXApO1xuICAgICAgfSxcbiAgICAgIGxhc3RTZWNvbmRDb29yZDogdGhpcy5sYXN0U2Vjb25kQ29vcmQsXG4gICAgICBjaGFpbkFnZUNvdW50ZXI6IHRoaXMuY2hhaW5BZ2VDb3VudGVyLFxuICAgICAgdG90YWxQYWlyczogdGhpcy5jdXJyZW50UmVtYWluaW5nVGlsZXMgPyBNYXRoLmZsb29yKHRoaXMuY3VycmVudFJlbWFpbmluZ1RpbGVzLnNpemUgLyAyKSA6IDAsXG4gICAgICBjb21wbGV0ZWRQYWlyczogdGhpcy5wYWlyaW5nSGlzdG9yeS5sZW5ndGgsXG4gICAgICBtaW5DaGFpbkFnZTogdCxcbiAgICAgIG1heENoYWluQWdlOiBvXG4gICAgfTtcbiAgfVxuICBidWlsZENoYXJTZWxlY3Rpb25Db250ZXh0KCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgcmVjZW50Q2hhcnNIaXN0b3J5OiB0aGlzLnJlY2VudENoYXJzSGlzdG9yeSxcbiAgICAgIGFzc2lnbmVkQ2hhcnM6IHRoaXMuYXNzaWduZWRDaGFycyxcbiAgICAgIGdldEV4cGFuZGVkOiBmdW5jdGlvbiAodCwgbykge1xuICAgICAgICByZXR1cm4gZS5ncmFwaC5nZXRFeHBhbmRlZCh0LCBvKTtcbiAgICAgIH0sXG4gICAgICB0aWxlVG9Db29yZDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGUuZ3JhcGgudGlsZVRvQ29vcmQodCk7XG4gICAgICB9LFxuICAgICAgcGFpcmluZ0hpc3Rvcnk6IHRoaXMucGFpcmluZ0hpc3RvcnksXG4gICAgICBtQ2hhclJlc0lkOiB0aGlzLm1DaGFyTWdyLnByaW1hcnlSZXNJZCxcbiAgICAgIG1DaGFyQWN0aXZlOiB0aGlzLm1DaGFyTWdyLmFjdGl2ZSxcbiAgICAgIG1DaGFyTG9ja2VkUmVzSWRzOiB0aGlzLm1DaGFyTWdyLmxvY2tlZFJlc0lkcy5zaXplID4gMCA/IHRoaXMubUNoYXJNZ3IubG9ja2VkUmVzSWRzIDogbnVsbFxuICAgIH07XG4gIH1cbiAgZ2VuZXJhdGVQYWlyaW5nU2VxdWVuY2UoZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcyxcbiAgICAgIGkgPSBbXSxcbiAgICAgIHIgPSBuZXcgU2V0KGUuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlzVmFsaWQ7XG4gICAgICB9KSksXG4gICAgICBhID0gbmV3IE1hcChlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gW24uZ3JhcGgudGlsZVRvQ29vcmQoZSksIGVdO1xuICAgICAgfSkpLFxuICAgICAgdSA9IHQgPT09IEVDb29yZFNlbGVjdGlvblR5cGUuQ2hhaW5NdWx0aSB8fCB0ID09PSBFQ29vcmRTZWxlY3Rpb25UeXBlLkNoYWluTXVsdGlQbHVzO1xuICAgIHRoaXMuY3VycmVudFJlbWFpbmluZ1RpbGVzID0gcjtcbiAgICB0aGlzLmN1cnJlbnRUaWxlTWFwID0gYTtcbiAgICBmb3IgKDsgci5zaXplID49IDIgJiYgIXRoaXMuY2hlY2tUaW1lb3V0KCk7KSB7XG4gICAgICB2YXIgcCA9IHRoaXMuZ3JhcGguZ2V0U2VsZWN0YWJsZVRpbGVzKHIsIGEpO1xuICAgICAgaWYgKHRoaXMuY2hlY2tUaW1lb3V0KCkpIGJyZWFrO1xuICAgICAgdSAmJiB0aGlzLnVwZGF0ZUNoYWluQWdlKHAsIHIpO1xuICAgICAgdmFyIGYgPSB0aGlzLmNoZWNrTUNoYXJUcmlnZ2VycyhvLCBwLCBhLCByKTtcbiAgICAgIGlmIChmKSB7XG4gICAgICAgIHZhciBkID0gX19yZWFkKGYsIDIpLFxuICAgICAgICAgIGggPSBkWzBdLFxuICAgICAgICAgIHkgPSBkWzFdLFxuICAgICAgICAgIG0gPSB0aGlzLmdyYXBoLnRpbGVUb0Nvb3JkKGgpLFxuICAgICAgICAgIHYgPSB0aGlzLmdyYXBoLnRpbGVUb0Nvb3JkKHkpLFxuICAgICAgICAgIGcgPSB0aGlzLnNhZmV0eS5jb21wdXRlRnJlZWRDb29yZHMobSwgdiwgciwgYSwgcCk7XG4gICAgICAgIHRoaXMucGFpcmluZ0hpc3RvcnkucHVzaChbbSwgdl0pO1xuICAgICAgICBpLnB1c2goW2gsIHldKTtcbiAgICAgICAgci5kZWxldGUoaCk7XG4gICAgICAgIHIuZGVsZXRlKHkpO1xuICAgICAgICB0aGlzLmxhc3RGcmVlZENvb3JkcyA9IGc7XG4gICAgICAgIHQgPT09IEVDb29yZFNlbGVjdGlvblR5cGUuSW50dWl0aXZlQ2hhaW5QbHVzICYmICh0aGlzLmxhc3RTZWNvbmRDb29yZCA9IHYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tQ2hhck1nci5sb2NrZWRDb29yZHMuc2l6ZSA+IDAgJiYgKHAgPSBwLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiAhbi5tQ2hhck1nci5sb2NrZWRDb29yZHMuaGFzKG4uZ3JhcGgudGlsZVRvQ29vcmQoZSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChwLmxlbmd0aCA8IDIpIGJyZWFrO1xuICAgICAgICB0aGlzLm1heFNlbGVjdGFibGVaID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgWy4uLnAubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUubGF5ZXI7XG4gICAgICAgIH0pXSk7XG4gICAgICAgIGZvciAodmFyIF8gPSBbXSwgVCA9IDA7IFQgPCBwLmxlbmd0aDsgVCsrKSBmb3IgKHZhciBDID0gVCArIDE7IEMgPCBwLmxlbmd0aDsgQysrKSBfLnB1c2goW3BbVF0sIHBbQ11dKTtcbiAgICAgICAgdmFyIGIgPSB0aGlzLnNlbGVjdFBhaXJXaXRoU2FmZXR5KF8sIHQsIHIsIGEpO1xuICAgICAgICBpZiAodGhpcy5jaGVja1RpbWVvdXQoKSB8fCAhYikgYnJlYWs7XG4gICAgICAgIHZhciBFID0gdGhpcy5ncmFwaC50aWxlVG9Db29yZChiWzBdKSxcbiAgICAgICAgICBTID0gdGhpcy5ncmFwaC50aWxlVG9Db29yZChiWzFdKSxcbiAgICAgICAgICBJID0gdGhpcy5zYWZldHkuY29tcHV0ZUZyZWVkQ29vcmRzKEUsIFMsIHIsIGEsIHApO1xuICAgICAgICB0aGlzLnBhaXJpbmdIaXN0b3J5LnB1c2goW0UsIFNdKTtcbiAgICAgICAgaS5wdXNoKGIpO1xuICAgICAgICByLmRlbGV0ZShiWzBdKTtcbiAgICAgICAgci5kZWxldGUoYlsxXSk7XG4gICAgICAgIHRoaXMubGFzdEZyZWVkQ29vcmRzID0gSTtcbiAgICAgICAgdCA9PT0gRUNvb3JkU2VsZWN0aW9uVHlwZS5JbnR1aXRpdmVDaGFpblBsdXMgJiYgKHRoaXMubGFzdFNlY29uZENvb3JkID0gUyk7XG4gICAgICAgIGlmICh1KSB7XG4gICAgICAgICAgdmFyIHcgPSB0aGlzLmdyYXBoLmdldFNlbGVjdGFibGVUaWxlcyhyLCBhKTtcbiAgICAgICAgICB0aGlzLnByZXZTZWxlY3RhYmxlRm9yQ2hhaW4gPSBuZXcgU2V0KHcubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gbi5ncmFwaC50aWxlVG9Db29yZChlKTtcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgY2hlY2tNQ2hhclRyaWdnZXJzKGUsIHQsIG8sIG4pIHtcbiAgICByZXR1cm4gZSA9PT0gRUNoYXJTZWxlY3Rpb25UeXBlLlByZWRUcmlnZ2VyICYmIHRoaXMubUNoYXJNZ3IuYWN0aXZlID8gdGhpcy5tQ2hhck1nci5jaGVja1NpbmdsZU1UcmlnZ2VyKHQsIG8sIG4pIDogZSA9PT0gRUNoYXJTZWxlY3Rpb25UeXBlLkR1YWxNVHJpZ2dlciAmJiB0aGlzLm1DaGFyTWdyLmdyb3Vwcy5sZW5ndGggPiAwID8gdGhpcy5tQ2hhck1nci5jaGVja0R1YWxNVHJpZ2dlcih0LCBvLCBuKSA6IG51bGw7XG4gIH1cbiAgdXBkYXRlQ2hhaW5BZ2UoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgbixcbiAgICAgIGkgPSB0aGlzLFxuICAgICAgciA9IG5ldyBTZXQoZS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGkuZ3JhcGgudGlsZVRvQ29vcmQoZSk7XG4gICAgICB9KSksXG4gICAgICBsID0gMCA9PT0gdGhpcy5wcmV2U2VsZWN0YWJsZUZvckNoYWluLnNpemU7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyh0KSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBjLnZhbHVlLFxuICAgICAgICAgIHAgPSB0aGlzLmdyYXBoLnRpbGVUb0Nvb3JkKHUpO1xuICAgICAgICBpZiAoci5oYXMocCkpIHtcbiAgICAgICAgICBpZiAobCkge1xuICAgICAgICAgICAgdGhpcy5jaGFpbkFnZUNvdW50ZXIuc2V0KHAsIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2U2VsZWN0YWJsZUZvckNoYWluLmhhcyhwKSkge1xuICAgICAgICAgICAgICB0aGlzLmNoYWluQWdlQ291bnRlci5zZXQocCwgKHRoaXMuY2hhaW5BZ2VDb3VudGVyLmdldChwKSB8fCAwKSArIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jaGFpbkFnZUNvdW50ZXIuc2V0KHAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNoYWluQWdlQ291bnRlci5zZXQocCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChuID0gcy5yZXR1cm4pICYmIG4uY2FsbChzKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZWxlY3RQYWlyV2l0aFNhZmV0eShlLCB0LCBvLCBuKSB7XG4gICAgdmFyIGksXG4gICAgICByLFxuICAgICAgbCA9IHRoaXMuZ3JhcGguZ2V0U2VsZWN0YWJsZVRpbGVzKG8sIG4pLFxuICAgICAgcyA9IG5ldyBTZXQobCksXG4gICAgICBjID0gW10sXG4gICAgICB1ID0gdGhpcy5jb29yZFNlbGVjdG9ycy5nZXQodCkgfHwgbmV3IFJhbmRvbUNvb3JkU2VsKCksXG4gICAgICBwID0gdGhpcy5idWlsZENvb3JkU2VsZWN0aW9uQ29udGV4dCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBmID0gX192YWx1ZXMoZSksIGggPSBmLm5leHQoKTsgIWguZG9uZTsgaCA9IGYubmV4dCgpKSB7XG4gICAgICAgIHZhciB5ID0gaC52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tUaW1lb3V0KCkpIGJyZWFrO1xuICAgICAgICB0aGlzLnNhZmV0eS5pc1NhZmVQYWlyQ2hvaWNlRmFzdCh5LCBvLCBuLCBsLCBzKSAmJiBjLnB1c2goe1xuICAgICAgICAgIHByaW9yaXR5OiB1LmNhbGN1bGF0ZVByaW9yaXR5KHlbMF0sIHlbMV0sIHApLFxuICAgICAgICAgIHBhaXI6IHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGggJiYgIWguZG9uZSAmJiAociA9IGYucmV0dXJuKSAmJiByLmNhbGwoZik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKDAgPT09IGMubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICBjLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBlLnByaW9yaXR5LnByaW9yaXR5ICE9PSB0LnByaW9yaXR5LnByaW9yaXR5ID8gdC5wcmlvcml0eS5wcmlvcml0eSAtIGUucHJpb3JpdHkucHJpb3JpdHkgOiB0LnByaW9yaXR5LnN1YlNjb3JlIC0gZS5wcmlvcml0eS5zdWJTY29yZTtcbiAgICB9KTtcbiAgICB2YXIgbSA9IGNbMF0ucHJpb3JpdHkucHJpb3JpdHksXG4gICAgICB2ID0gYy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUucHJpb3JpdHkucHJpb3JpdHkgPT09IG07XG4gICAgICB9KTtcbiAgICByZXR1cm4gdltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2Lmxlbmd0aCldLnBhaXI7XG4gIH1cbiAgYXNzaWduQ2hhcmFjdGVycyhlLCB0LCBvKSB7XG4gICAgdmFyIG4sXG4gICAgICBpLFxuICAgICAgcixcbiAgICAgIGMsXG4gICAgICB1LFxuICAgICAgcCxcbiAgICAgIGYsXG4gICAgICBkLFxuICAgICAgaCxcbiAgICAgIHkgPSBbXSxcbiAgICAgIG0gPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdiA9IF9fdmFsdWVzKGUpLCBnID0gdi5uZXh0KCk7ICFnLmRvbmU7IGcgPSB2Lm5leHQoKSkge1xuICAgICAgICB2YXIgXyA9IGcudmFsdWU7XG4gICAgICAgICh0aGlzLmlzUmVzdHJpY3RlZFBvc2l0aW9uKF9bMF0sIF9bMV0pID8geSA6IG0pLnB1c2goXyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbiA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGcgJiYgIWcuZG9uZSAmJiAoaSA9IHYucmV0dXJuKSAmJiBpLmNhbGwodik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIFQgPSBbXSxcbiAgICAgIEMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYiA9IF9fdmFsdWVzKHQpLCBFID0gYi5uZXh0KCk7ICFFLmRvbmU7IEUgPSBiLm5leHQoKSkge1xuICAgICAgICBfID0gRS52YWx1ZTtcbiAgICAgICAgKHRoaXMuaXNTcGVjaWFsUGFpcihfKSA/IFQgOiBDKS5wdXNoKF8pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHIgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBFICYmICFFLmRvbmUgJiYgKGMgPSBiLnJldHVybikgJiYgYy5jYWxsKGIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2h1ZmZsZUFycmF5KFQpO1xuICAgIHRoaXMuc2h1ZmZsZUFycmF5KEMpO1xuICAgIHZhciBTID0gW10sXG4gICAgICBJID0gdGhpcy5jaGFyU2VsZWN0b3JzLmdldChvKSB8fCBuZXcgUmFuZG9tQ2hhclNlbCgpLFxuICAgICAgdyA9IHRoaXMuYnVpbGRDaGFyU2VsZWN0aW9uQ29udGV4dCgpLFxuICAgICAgeCA9IFsuLi5DXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgTSA9IF9fdmFsdWVzKHkpLCBPID0gTS5uZXh0KCk7ICFPLmRvbmU7IE8gPSBNLm5leHQoKSkge1xuICAgICAgICB2YXIgRCA9IF9fcmVhZChPLnZhbHVlLCAyKSxcbiAgICAgICAgICBQID0gRFswXSxcbiAgICAgICAgICBBID0gRFsxXTtcbiAgICAgICAgaWYgKDAgPT09IHgubGVuZ3RoKSBicmVhaztcbiAgICAgICAgdmFyIFIgPSBJLnNlbGVjdENoYXJhY3RlclBhaXIoUCwgQSwgeCwgdyksXG4gICAgICAgICAgTiA9IHhbUl07XG4gICAgICAgIHguc3BsaWNlKFIsIDEpO1xuICAgICAgICBTLnB1c2goW1AsIEEsIE5bMF0sIE5bMV1dKTtcbiAgICAgICAgdGhpcy51cGRhdGVBc3NpZ25tZW50SGlzdG9yeShQLCBBLCBOKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB1ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgTyAmJiAhTy5kb25lICYmIChwID0gTS5yZXR1cm4pICYmIHAuY2FsbChNKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh1KSB0aHJvdyB1LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaiA9IFsuLi5ULCAuLi54XTtcbiAgICB0aGlzLnNodWZmbGVBcnJheShqKTtcbiAgICB2YXIgayA9IG5ldyBNYXAoKSxcbiAgICAgIEwgPSBmdW5jdGlvbiBMKGUsIHQpIHtcbiAgICAgICAgdmFyIG8gPSBHLmdyYXBoLnRpbGVUb0Nvb3JkKGUpLFxuICAgICAgICAgIG4gPSBHLmdyYXBoLnRpbGVUb0Nvb3JkKHQpO1xuICAgICAgICBpZiAoRy5tQ2hhck1nci5wYWlyZWRDb29yZHMuaGFzKG8pIHx8IEcubUNoYXJNZ3IucGFpcmVkQ29vcmRzLmhhcyhuKSkge1xuICAgICAgICAgIHZhciBpID0gRy5tQ2hhck1nci5maW5kR3JvdXBGb3JDb29yZChvLCBuKSxcbiAgICAgICAgICAgIHIgPSAobnVsbCA9PSBpID8gdm9pZCAwIDogaS5wYWlyRGF0YSkgfHwgRy5tQ2hhck1nci5wcmltYXJ5UGFpckRhdGEsXG4gICAgICAgICAgICBhID0gbnVsbCAhPT0gKGggPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLnJlc0lkKSAmJiB2b2lkIDAgIT09IGggPyBoIDogRy5tQ2hhck1nci5wcmltYXJ5UmVzSWQ7XG4gICAgICAgICAgaWYgKHIgJiYgbnVsbCAhPT0gYSkge1xuICAgICAgICAgICAgdmFyIGwgPSBrLmdldChhKSB8fCAwO1xuICAgICAgICAgICAgaWYgKGwgPCAyKSB7XG4gICAgICAgICAgICAgIFMucHVzaChbZSwgdCwgclswXSwgclsxXV0pO1xuICAgICAgICAgICAgICBHLnVwZGF0ZUFzc2lnbm1lbnRIaXN0b3J5KGUsIHQsIHIpO1xuICAgICAgICAgICAgICB2YXIgcyA9IGouZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVbMF0ucmVzSWQgPT09IGE7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAtMSAhPT0gcyAmJiBqLnNwbGljZShzLCAxKTtcbiAgICAgICAgICAgICAgay5zZXQoYSwgbCArIDEpO1xuICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoMCA9PT0gai5sZW5ndGgpIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgIHZhciBjID0gSS5zZWxlY3RDaGFyYWN0ZXJQYWlyKGUsIHQsIGosIHcpLFxuICAgICAgICAgIHUgPSBqW2NdO1xuICAgICAgICBqLnNwbGljZShjLCAxKTtcbiAgICAgICAgUy5wdXNoKFtlLCB0LCB1WzBdLCB1WzFdXSk7XG4gICAgICAgIEcudXBkYXRlQXNzaWdubWVudEhpc3RvcnkoZSwgdCwgdSk7XG4gICAgICB9LFxuICAgICAgRyA9IHRoaXM7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIEYgPSBfX3ZhbHVlcyhtKSwgViA9IEYubmV4dCgpOyAhVi5kb25lOyBWID0gRi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIFUgPSBfX3JlYWQoVi52YWx1ZSwgMik7XG4gICAgICAgIGlmIChcImJyZWFrXCIgPT09IEwoUCA9IFVbMF0sIEEgPSBVWzFdKSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZiA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIFYgJiYgIVYuZG9uZSAmJiAoZCA9IEYucmV0dXJuKSAmJiBkLmNhbGwoRik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZikgdGhyb3cgZi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFM7XG4gIH1cbiAgdXBkYXRlQXNzaWdubWVudEhpc3RvcnkoZSwgdCwgbykge1xuICAgIHRoaXMucmVjZW50Q2hhcnNIaXN0b3J5LnB1c2gob1swXS5yZXNJZCk7XG4gICAgdGhpcy5yZWNlbnRDaGFyc0hpc3RvcnkubGVuZ3RoID4gNTAgJiYgdGhpcy5yZWNlbnRDaGFyc0hpc3Rvcnkuc2hpZnQoKTtcbiAgICB0aGlzLmFzc2lnbmVkQ2hhcnMuc2V0KHRoaXMuZ3JhcGgudGlsZVRvQ29vcmQoZSksIG9bMF0ucmVzSWQpO1xuICAgIHRoaXMuYXNzaWduZWRDaGFycy5zZXQodGhpcy5ncmFwaC50aWxlVG9Db29yZCh0KSwgb1sxXS5yZXNJZCk7XG4gIH1cbiAgYXBwbHlUb1RpbGVQYWlyKGUsIHQsIG8sIG4sIGkpIHtcbiAgICBpZiAoZS50eXBlID09PSBFVGlsZVR5cGUuUm9sbENhcmQpIGUuY2hhbmdlUmVzSWQoby5yZXNJZCk7ZWxzZSB7XG4gICAgICBpLnNldFRpbGVUeXBlKGUuaWQsIG8udHlwZSA9PT0gRVRpbGVUeXBlLlJvbGxDYXJkID8gRVRpbGVUeXBlLk5vcm1hbCA6IG8udHlwZSk7XG4gICAgICBlLmNoYW5nZVJlc0lkKG8ucmVzSWQpO1xuICAgICAgZS5zZXREdW94aWFvQ291bnQoby5kdW94aWFvQ291bnQgfHwgMCk7XG4gICAgfVxuICAgIGlmICh0LnR5cGUgPT09IEVUaWxlVHlwZS5Sb2xsQ2FyZCkgdC5jaGFuZ2VSZXNJZChuLnJlc0lkKTtlbHNlIHtcbiAgICAgIGkuc2V0VGlsZVR5cGUodC5pZCwgbi50eXBlID09PSBFVGlsZVR5cGUuUm9sbENhcmQgPyBFVGlsZVR5cGUuTm9ybWFsIDogbi50eXBlKTtcbiAgICAgIHQuY2hhbmdlUmVzSWQobi5yZXNJZCk7XG4gICAgICB0LnNldER1b3hpYW9Db3VudChuLmR1b3hpYW9Db3VudCB8fCAwKTtcbiAgICB9XG4gIH1cbiAgaXNSZXN0cmljdGVkUG9zaXRpb24oZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5zcGVjaWFsVGlsZUNvbmZpZy5yZXN0cmljdGVkUG9zaXRpb25UeXBlcztcbiAgICByZXR1cm4gby5pbmNsdWRlcyhlLnR5cGUpIHx8IG8uaW5jbHVkZXModC50eXBlKTtcbiAgfVxuICBpc1NwZWNpYWxEYXRhKGUpIHtcbiAgICByZXR1cm4gdGhpcy5zcGVjaWFsVGlsZUNvbmZpZy5zcGVjaWFsVGlsZVR5cGVzLmluY2x1ZGVzKGUudHlwZSkgfHwgdGhpcy5zcGVjaWFsVGlsZUNvbmZpZy5zcGVjaWFsUmVzSWRzLmluY2x1ZGVzKGUucmVzSWQpO1xuICB9XG4gIGlzU3BlY2lhbFBhaXIoZSkge1xuICAgIHJldHVybiB0aGlzLmlzU3BlY2lhbERhdGEoZVswXSkgfHwgdGhpcy5pc1NwZWNpYWxEYXRhKGVbMV0pO1xuICB9XG4gIHNodWZmbGVBcnJheShlKSB7XG4gICAgZm9yICh2YXIgdCwgbyA9IGUubGVuZ3RoIC0gMTsgbyA+IDA7IG8tLSkge1xuICAgICAgdmFyIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobyArIDEpKTtcbiAgICAgIHQgPSBfX3JlYWQoW2Vbbl0sIGVbb11dLCAyKSwgZVtvXSA9IHRbMF0sIGVbbl0gPSB0WzFdO1xuICAgIH1cbiAgfVxufSJdfQ==
import { ETileType } from './simulator/constant/TileTypeEnum';
import { ResId } from './core/simulator/constant/GameTypeEnums';
import { RandomCoordSel } from './RandomCoordSel';
import { SameZCoordSel } from './SameZCoordSel';
import { AntiChainCoordSel } from './AntiChainCoordSel';
import { PredDepthCoordSel } from './PredDepthCoordSel';
import { ShortDistCoordSel } from './ShortDistCoordSel';
import { LongDistCoordSel } from './LongDistCoordSel';
import { HeightPairCoordSel } from './HeightPairCoordSel';
import { AntiIntuitiveCoordSel } from './AntiIntuitiveCoordSel';
import { IntuitiveChainCoordSel } from './IntuitiveChainCoordSel';
import { IntuitiveChainPlusCoordSel } from './IntuitiveChainPlusCoordSel';
import { DifficultyDecisionCoordSel } from './DifficultyDecisionCoordSel';
import { ChainMultiPlusCoordSel } from './ChainMultiPlusCoordSel';
import { SymmetricCoordSel } from './SymmetricCoordSel';
import { SymmetricShuffleCoordSel } from './SymmetricShuffleCoordSel';
import { RandomCharSel } from './RandomCharSel';
import { ColorNearCharSel } from './ColorNearCharSel';
import { ColorFarCharSel } from './ColorFarCharSel';
import { PredCoordCharSel } from './PredCoordCharSel';
import { PredTriggerCharSel } from './PredTriggerCharSel';
import { RowDiversityCharSel } from './RowDiversityCharSel';
import { ChainAvoidCharSel } from './ChainAvoidCharSel';
import { DualMTriggerCharSel } from './DualMTriggerCharSel';
import { RecentTwoNearCharSel } from './RecentTwoNearCharSel';
import { DependencyGraph } from './DependencyGraph';
import { SafetyChecker } from './SafetyChecker';
import { MCharTriggerManager } from './MCharTriggerManager';
import { SolverStringBuilder } from './SolverStringBuilder';
import { ITileShuffleData } from './ICharSelection';
export enum ECoordSelectionType {
  Random = 1,
  SameZ = 2,
  AntiChain = 3,
  PredDepthSync = 4,
  ShortDistance = 5,
  LongDistance = 6,
  HeightPair = 7,
  AntiIntuitive = 8,
  IntuitiveChain = 9,
  IntuitiveChainPlus = 10,
  ChainMulti = 11,
  ChainMultiPlus = 12,
  SymmetricShuffle = 998,
  Symmetric = 999,
}
export enum ECharSelectionType {
  Random = 1,
  ColorNear = 2,
  ColorFar = 3,
  PredCoord = 4,
  PredTrigger = 5,
  RowDiversity = 6,
  ChainAvoid = 7,
  DualMTrigger = 8,
  RecentTwoNear = 10,
}
export var DifficultyDecision = ECoordSelectionType.ChainMulti;
(COORD_ALGO_NAMES = {})[ECoordSelectionType.Random] = "随机";
COORD_ALGO_NAMES[ECoordSelectionType.SameZ] = "同Z优先";
COORD_ALGO_NAMES[ECoordSelectionType.AntiChain] = "反链避让";
COORD_ALGO_NAMES[ECoordSelectionType.PredDepthSync] = "前驱深度协同";
COORD_ALGO_NAMES[ECoordSelectionType.ShortDistance] = "短距离优先";
COORD_ALGO_NAMES[ECoordSelectionType.LongDistance] = "长距离优先";
COORD_ALGO_NAMES[ECoordSelectionType.HeightPair] = "高度配对优先";
COORD_ALGO_NAMES[ECoordSelectionType.AntiIntuitive] = "反直觉配对";
COORD_ALGO_NAMES[ECoordSelectionType.IntuitiveChain] = "直觉连消";
COORD_ALGO_NAMES[ECoordSelectionType.IntuitiveChainPlus] = "直觉连消plus";
COORD_ALGO_NAMES[ECoordSelectionType.ChainMulti] = "多选-链式-多选";
COORD_ALGO_NAMES[ECoordSelectionType.ChainMultiPlus] = "多选-链式-多选Plus";
COORD_ALGO_NAMES[ECoordSelectionType.Symmetric] = "全对称";
COORD_ALGO_NAMES[ECoordSelectionType.SymmetricShuffle] = "全对称盘面层打乱";
export var COORD_ALGO_NAMES = COORD_ALGO_NAMES;
(CHAR_ALGO_NAMES = {})[ECharSelectionType.Random] = "随机";
CHAR_ALGO_NAMES[ECharSelectionType.ColorNear] = "颜色邻近";
CHAR_ALGO_NAMES[ECharSelectionType.ColorFar] = "颜色远离";
CHAR_ALGO_NAMES[ECharSelectionType.PredCoord] = "前驱协调";
CHAR_ALGO_NAMES[ECharSelectionType.PredTrigger] = "前驱触发";
CHAR_ALGO_NAMES[ECharSelectionType.RowDiversity] = "行内字符多样性";
CHAR_ALGO_NAMES[ECharSelectionType.ChainAvoid] = "链式传播避免";
CHAR_ALGO_NAMES[ECharSelectionType.DualMTrigger] = "双M前驱触发";
CHAR_ALGO_NAMES[ECharSelectionType.RecentTwoNear] = "近两对邻近";
export var CHAR_ALGO_NAMES = CHAR_ALGO_NAMES;
var F = {
  restrictedPositionTypes: [ETileType.RollCard],
  specialTileTypes: [ETileType.Bomb, ETileType.DuoxiaoCard, ETileType.DaxiaoCard],
  specialResIds: [ResId.emBombCardId, ResId.emRankId]
};
export { ITileShuffleData };
@mj.class("CharacterGenerator")
export default class CharacterGenerator {
  graph = new DependencyGraph();
  safety = new SafetyChecker(this.graph);
  mCharMgr = new MCharTriggerManager(this.graph);
  solverBuilder = new SolverStringBuilder(this.graph);
  recentCharsHistory = [];
  assignedChars = new Map();
  specialTileConfig = F;
  lastFreedCoords = new Set();
  pairingHistory = [];
  currentRemainingTiles = new Set();
  currentTileMap = new Map();
  maxSelectableZ = 0;
  lastSecondCoord = null;
  chainAgeCounter = new Map();
  prevSelectableForChain = new Set();
  _startTime = 0;
  _timeoutMs = 0;
  _isTimeout = false;
  coordSelectors = new Map([[ECoordSelectionType.Random, new RandomCoordSel()], [ECoordSelectionType.SameZ, new SameZCoordSel()], [ECoordSelectionType.AntiChain, new AntiChainCoordSel()], [ECoordSelectionType.PredDepthSync, new PredDepthCoordSel()], [ECoordSelectionType.ShortDistance, new ShortDistCoordSel()], [ECoordSelectionType.LongDistance, new LongDistCoordSel()], [ECoordSelectionType.HeightPair, new HeightPairCoordSel()], [ECoordSelectionType.AntiIntuitive, new AntiIntuitiveCoordSel()], [ECoordSelectionType.IntuitiveChain, new IntuitiveChainCoordSel()], [ECoordSelectionType.IntuitiveChainPlus, new IntuitiveChainPlusCoordSel()], [ECoordSelectionType.ChainMulti, new DifficultyDecisionCoordSel()], [ECoordSelectionType.ChainMultiPlus, new ChainMultiPlusCoordSel()], [ECoordSelectionType.Symmetric, new SymmetricCoordSel()], [ECoordSelectionType.SymmetricShuffle, new SymmetricShuffleCoordSel()]]);
  charSelectors = new Map([[ECharSelectionType.Random, new RandomCharSel()], [ECharSelectionType.ColorNear, new ColorNearCharSel()], [ECharSelectionType.ColorFar, new ColorFarCharSel()], [ECharSelectionType.PredCoord, new PredCoordCharSel()], [ECharSelectionType.PredTrigger, new PredTriggerCharSel()], [ECharSelectionType.RowDiversity, new RowDiversityCharSel()], [ECharSelectionType.ChainAvoid, new ChainAvoidCharSel()], [ECharSelectionType.DualMTrigger, new DualMTriggerCharSel()], [ECharSelectionType.RecentTwoNear, new RecentTwoNearCharSel()]]);
  static CONST_SHOW_DEBUG_INFO = false;
  static instance = null;
  get isTimeout() {
    return this._isTimeout;
  }
  static getInstance() {
    this.instance || (this.instance = new CharacterGenerator());
    return this.instance;
  }
  checkTimeout() {
    if (this._timeoutMs <= 0) return false;
    if (Date.now() - this._startTime > this._timeoutMs) {
      this._isTimeout = true;
      return true;
    }
    return false;
  }
  generateCharacterAssignment(e, o, n, i = ECoordSelectionType.Random, r = ECharSelectionType.Random, a?, l = 0) {
    this.resetState(e, a, l);
    this.graph.init(o, e.getTileMapObject());
    if (this.checkTimeout()) return [];
    if (r === ECharSelectionType.PredTrigger) {
      this.mCharMgr.initSingleM(o, n);
      if (this.checkTimeout()) return [];
    }
    if (r === ECharSelectionType.DualMTrigger) {
      this.mCharMgr.initDualM(o, n);
      if (this.checkTimeout()) return [];
    }
    var s = this.generatePairingSequence(o, i, r);
    if (this._isTimeout && 0 === s.length) return [];
    var p = this.assignCharacters(s, n, r);
    p.length > 0 && CharacterGenerator.CONST_SHOW_DEBUG_INFO && this.solverBuilder.generate(p, this.currentTileMap);
    return p;
  }
  computePTLGroups(e) {
    var t, o, n, i;
    if (0 === e.length) return new Map();
    var r = new Map(this.currentTileMap),
      s = new Set();
    try {
      for (var c = __values(r.values()), u = c.next(); !u.done; u = c.next()) {
        var p = u.value;
        s.add(p);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (o = c.return) && o.call(c);
      } finally {
        if (t) throw t.error;
      }
    }
    for (var f = new Map(), d = new Set(), h = 1; d.size < e.length;) {
      for (var y = [], m = 0; m < e.length; m++) if (!d.has(m)) {
        var v = __read(e[m], 2),
          g = v[0],
          _ = v[1];
        this.graph.isTileSelectable(g, s, r) && this.graph.isTileSelectable(_, s, r) && y.push(m);
      }
      if (0 === y.length) for (m = 0; m < e.length; m++) d.has(m) || y.push(m);
      f.set(h, y);
      try {
        for (var T = (n = void 0, __values(y)), C = T.next(); !C.done; C = T.next()) {
          var b = C.value;
          d.add(b);
          s.delete(e[b][0]);
          s.delete(e[b][1]);
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          C && !C.done && (i = T.return) && i.call(T);
        } finally {
          if (n) throw n.error;
        }
      }
      h++;
    }
    return f;
  }
  applyAssignments(e, t) {
    var o, n;
    try {
      for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
        var s = __read(r.value, 4),
          c = s[0],
          u = s[1],
          p = s[2],
          f = s[3];
        this.applyToTilePair(c, u, p, f, t);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
  }
  generateSolverString(e) {
    return this.solverBuilder.generate(e, this.currentTileMap);
  }
  resetState(e, t, o = 0) {
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
  }
  buildCoordSelectionContext() {
    var e = this,
      t = 0,
      o = 0;
    if (this.chainAgeCounter.size > 0) {
      var n = Array.from(this.chainAgeCounter.values());
      t = Math.min.apply(Math, [...n]);
      o = Math.max.apply(Math, [...n]);
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
  }
  buildCharSelectionContext() {
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
  }
  generatePairingSequence(e, t, o) {
    var n = this,
      i = [],
      r = new Set(e.filter(function (e) {
        return e.isValid;
      })),
      a = new Map(e.map(function (e) {
        return [n.graph.tileToCoord(e), e];
      })),
      u = t === ECoordSelectionType.ChainMulti || t === ECoordSelectionType.ChainMultiPlus;
    this.currentRemainingTiles = r;
    this.currentTileMap = a;
    for (; r.size >= 2 && !this.checkTimeout();) {
      var p = this.graph.getSelectableTiles(r, a);
      if (this.checkTimeout()) break;
      u && this.updateChainAge(p, r);
      var f = this.checkMCharTriggers(o, p, a, r);
      if (f) {
        var d = __read(f, 2),
          h = d[0],
          y = d[1],
          m = this.graph.tileToCoord(h),
          v = this.graph.tileToCoord(y),
          g = this.safety.computeFreedCoords(m, v, r, a, p);
        this.pairingHistory.push([m, v]);
        i.push([h, y]);
        r.delete(h);
        r.delete(y);
        this.lastFreedCoords = g;
        t === ECoordSelectionType.IntuitiveChainPlus && (this.lastSecondCoord = v);
      } else {
        this.mCharMgr.lockedCoords.size > 0 && (p = p.filter(function (e) {
          return !n.mCharMgr.lockedCoords.has(n.graph.tileToCoord(e));
        }));
        if (p.length < 2) break;
        this.maxSelectableZ = Math.max.apply(Math, [...p.map(function (e) {
          return e.layer;
        })]);
        for (var _ = [], T = 0; T < p.length; T++) for (var C = T + 1; C < p.length; C++) _.push([p[T], p[C]]);
        var b = this.selectPairWithSafety(_, t, r, a);
        if (this.checkTimeout() || !b) break;
        var E = this.graph.tileToCoord(b[0]),
          S = this.graph.tileToCoord(b[1]),
          I = this.safety.computeFreedCoords(E, S, r, a, p);
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
  }
  checkMCharTriggers(e, t, o, n) {
    return e === ECharSelectionType.PredTrigger && this.mCharMgr.active ? this.mCharMgr.checkSingleMTrigger(t, o, n) : e === ECharSelectionType.DualMTrigger && this.mCharMgr.groups.length > 0 ? this.mCharMgr.checkDualMTrigger(t, o, n) : null;
  }
  updateChainAge(e, t) {
    var o,
      n,
      i = this,
      r = new Set(e.map(function (e) {
        return i.graph.tileToCoord(e);
      })),
      l = 0 === this.prevSelectableForChain.size;
    try {
      for (var s = __values(t), c = s.next(); !c.done; c = s.next()) {
        var u = c.value,
          p = this.graph.tileToCoord(u);
        if (r.has(p)) {
          if (l) {
            this.chainAgeCounter.set(p, 1);
          } else {
            if (this.prevSelectableForChain.has(p)) {
              this.chainAgeCounter.set(p, (this.chainAgeCounter.get(p) || 0) + 1);
            } else {
              this.chainAgeCounter.set(p, 0);
            }
          }
        } else {
          this.chainAgeCounter.set(p, 0);
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        c && !c.done && (n = s.return) && n.call(s);
      } finally {
        if (o) throw o.error;
      }
    }
  }
  selectPairWithSafety(e, t, o, n) {
    var i,
      r,
      l = this.graph.getSelectableTiles(o, n),
      s = new Set(l),
      c = [],
      u = this.coordSelectors.get(t) || new RandomCoordSel(),
      p = this.buildCoordSelectionContext();
    try {
      for (var f = __values(e), h = f.next(); !h.done; h = f.next()) {
        var y = h.value;
        if (this.checkTimeout()) break;
        this.safety.isSafePairChoiceFast(y, o, n, l, s) && c.push({
          priority: u.calculatePriority(y[0], y[1], p),
          pair: y
        });
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (r = f.return) && r.call(f);
      } finally {
        if (i) throw i.error;
      }
    }
    if (0 === c.length) return null;
    c.sort(function (e, t) {
      return e.priority.priority !== t.priority.priority ? t.priority.priority - e.priority.priority : t.priority.subScore - e.priority.subScore;
    });
    var m = c[0].priority.priority,
      v = c.filter(function (e) {
        return e.priority.priority === m;
      });
    return v[Math.floor(Math.random() * v.length)].pair;
  }
  assignCharacters(e, t, o) {
    var n,
      i,
      r,
      c,
      u,
      p,
      f,
      d,
      h,
      y = [],
      m = [];
    try {
      for (var v = __values(e), g = v.next(); !g.done; g = v.next()) {
        var _ = g.value;
        (this.isRestrictedPosition(_[0], _[1]) ? y : m).push(_);
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        g && !g.done && (i = v.return) && i.call(v);
      } finally {
        if (n) throw n.error;
      }
    }
    var T = [],
      C = [];
    try {
      for (var b = __values(t), E = b.next(); !E.done; E = b.next()) {
        _ = E.value;
        (this.isSpecialPair(_) ? T : C).push(_);
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        E && !E.done && (c = b.return) && c.call(b);
      } finally {
        if (r) throw r.error;
      }
    }
    this.shuffleArray(T);
    this.shuffleArray(C);
    var S = [],
      I = this.charSelectors.get(o) || new RandomCharSel(),
      w = this.buildCharSelectionContext(),
      x = [...C];
    try {
      for (var M = __values(y), O = M.next(); !O.done; O = M.next()) {
        var D = __read(O.value, 2),
          P = D[0],
          A = D[1];
        if (0 === x.length) break;
        var R = I.selectCharacterPair(P, A, x, w),
          N = x[R];
        x.splice(R, 1);
        S.push([P, A, N[0], N[1]]);
        this.updateAssignmentHistory(P, A, N);
      }
    } catch (e) {
      u = {
        error: e
      };
    } finally {
      try {
        O && !O.done && (p = M.return) && p.call(M);
      } finally {
        if (u) throw u.error;
      }
    }
    var j = [...T, ...x];
    this.shuffleArray(j);
    var k = new Map(),
      L = function L(e, t) {
        var o = G.graph.tileToCoord(e),
          n = G.graph.tileToCoord(t);
        if (G.mCharMgr.pairedCoords.has(o) || G.mCharMgr.pairedCoords.has(n)) {
          var i = G.mCharMgr.findGroupForCoord(o, n),
            r = (null == i ? void 0 : i.pairData) || G.mCharMgr.primaryPairData,
            a = null !== (h = null == i ? void 0 : i.resId) && void 0 !== h ? h : G.mCharMgr.primaryResId;
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
        if (0 === j.length) return "break";
        var c = I.selectCharacterPair(e, t, j, w),
          u = j[c];
        j.splice(c, 1);
        S.push([e, t, u[0], u[1]]);
        G.updateAssignmentHistory(e, t, u);
      },
      G = this;
    try {
      for (var F = __values(m), V = F.next(); !V.done; V = F.next()) {
        var U = __read(V.value, 2);
        if ("break" === L(P = U[0], A = U[1])) break;
      }
    } catch (e) {
      f = {
        error: e
      };
    } finally {
      try {
        V && !V.done && (d = F.return) && d.call(F);
      } finally {
        if (f) throw f.error;
      }
    }
    return S;
  }
  updateAssignmentHistory(e, t, o) {
    this.recentCharsHistory.push(o[0].resId);
    this.recentCharsHistory.length > 50 && this.recentCharsHistory.shift();
    this.assignedChars.set(this.graph.tileToCoord(e), o[0].resId);
    this.assignedChars.set(this.graph.tileToCoord(t), o[1].resId);
  }
  applyToTilePair(e, t, o, n, i) {
    if (e.type === ETileType.RollCard) e.changeResId(o.resId);else {
      i.setTileType(e.id, o.type === ETileType.RollCard ? ETileType.Normal : o.type);
      e.changeResId(o.resId);
      e.setDuoxiaoCount(o.duoxiaoCount || 0);
    }
    if (t.type === ETileType.RollCard) t.changeResId(n.resId);else {
      i.setTileType(t.id, n.type === ETileType.RollCard ? ETileType.Normal : n.type);
      t.changeResId(n.resId);
      t.setDuoxiaoCount(n.duoxiaoCount || 0);
    }
  }
  isRestrictedPosition(e, t) {
    var o = this.specialTileConfig.restrictedPositionTypes;
    return o.includes(e.type) || o.includes(t.type);
  }
  isSpecialData(e) {
    return this.specialTileConfig.specialTileTypes.includes(e.type) || this.specialTileConfig.specialResIds.includes(e.resId);
  }
  isSpecialPair(e) {
    return this.isSpecialData(e[0]) || this.isSpecialData(e[1]);
  }
  shuffleArray(e) {
    for (var t, o = e.length - 1; o > 0; o--) {
      var n = Math.floor(Math.random() * (o + 1));
      t = __read([e[n], e[o]], 2), e[o] = t[0], e[n] = t[1];
    }
  }
}
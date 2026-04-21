import { RandomCoordSel } from '../RandomCoordSel';
import { SameZCoordSel } from '../SameZCoordSel';
import { AntiChainCoordSel } from '../AntiChainCoordSel';
import { PredDepthCoordSel } from '../PredDepthCoordSel';
import { ShortDistCoordSel } from '../ShortDistCoordSel';
import { LongDistCoordSel } from '../LongDistCoordSel';
import { HeightPairCoordSel } from '../HeightPairCoordSel';
import { AntiIntuitiveCoordSel } from '../AntiIntuitiveCoordSel';
import { IntuitiveChainCoordSel } from '../IntuitiveChainCoordSel';
import { IntuitiveChainPlusCoordSel } from '../IntuitiveChainPlusCoordSel';
import { DifficultyDecisionCoordSel } from '../DifficultyDecisionCoordSel';
import { ChainMultiPlusCoordSel } from '../ChainMultiPlusCoordSel';
import { SymmetricCoordSel } from '../SymmetricCoordSel';
import { SymmetricShuffleCoordSel } from '../SymmetricShuffleCoordSel';
import { RandomCharSel } from '../RandomCharSel';
import { ColorNearCharSel } from '../ColorNearCharSel';
import { ColorFarCharSel } from '../ColorFarCharSel';
import { PredCoordCharSel } from '../PredCoordCharSel';
import { PredTriggerCharSel } from '../PredTriggerCharSel';
import { RowDiversityCharSel } from '../RowDiversityCharSel';
import { ChainAvoidCharSel } from '../ChainAvoidCharSel';
import { DualMTriggerCharSel } from '../DualMTriggerCharSel';
import { RecentTwoNearCharSel } from '../RecentTwoNearCharSel';
import { DependencyGraph } from '../DependencyGraph';
import { SafetyChecker } from '../SafetyChecker';
import { MCharTriggerManager } from '../MCharTriggerManager';
import { SolverStringBuilder } from '../SolverStringBuilder';
import { ECoordSelectionType, ECharSelectionType } from '../CharacterGenerator';
import { ITileShuffleData } from '../ICharSelection';
export { ITileShuffleData };
@mj.class("CharacterGeneratorTile2")
export default class CharacterGeneratorTile2 {
  graph = new DependencyGraph();
  safety = new SafetyChecker(this.graph);
  mCharMgr = new MCharTriggerManager(this.graph);
  solverBuilder = new SolverStringBuilder(this.graph);
  recentCharsHistory = [];
  assignedChars = new Map();
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
    this.instance || (this.instance = new CharacterGeneratorTile2());
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
  generateCharacterAssignment(e, o, n, i = ECoordSelectionType.Random, r = ECharSelectionType.Random, a = 0) {
    this.resetState(e, a);
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
    var l = this.generatePairingSequence(o, i, r);
    if (this._isTimeout && 0 === l.length) return [];
    var s = this.assignCharacters(l, n, r);
    s.length > 0 && CharacterGeneratorTile2.CONST_SHOW_DEBUG_INFO && this.solverBuilder.generate(s, this.currentTileMap);
    return s;
  }
  computePTLGroups(e) {
    var t, o, n, a;
    if (0 === e.length) return new Map();
    var l = new Map(this.currentTileMap),
      s = new Set();
    try {
      for (var c = __values(l.values()), u = c.next(); !u.done; u = c.next()) {
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
        this.graph.isTileSelectable(g, s, l) && this.graph.isTileSelectable(_, s, l) && y.push(m);
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
          C && !C.done && (a = T.return) && a.call(T);
        } finally {
          if (n) throw n.error;
        }
      }
      h++;
    }
    return f;
  }
  applyAssignments(e, t) {
    var o,
      n,
      a,
      l,
      s = this,
      c = function c(e, t, o) {
        return e + "," + t + "," + o;
      },
      u = [];
    try {
      for (var p = __values(e), f = p.next(); !f.done; f = p.next()) {
        var d = __read(f.value, 4),
          h = d[0],
          y = d[1],
          m = d[2],
          v = d[3];
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
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (n = p.return) && n.call(p);
      } finally {
        if (o) throw o.error;
      }
    }
    var g = new Set(u.map(function (e) {
        return c(e.destX, e.destY, e.destZ);
      })),
      _ = new Map();
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
        var E = b.value,
          S = _.get(E.desiredResId);
        S && 0 !== S.length && T.push({
          tileId: S.pop().id,
          destX: E.destX,
          destY: E.destY,
          destZ: E.destZ
        });
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        b && !b.done && (l = C.return) && l.call(C);
      } finally {
        if (a) throw a.error;
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
  }
  generateSolverString(e) {
    return this.solverBuilder.generate(e, this.currentTileMap);
  }
  resetState(e, t = 0) {
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
      l = new Set(e.filter(function (e) {
        return e.isValid;
      })),
      s = new Map(e.map(function (e) {
        return [n.graph.tileToCoord(e), e];
      })),
      c = t === ECoordSelectionType.ChainMulti || t === ECoordSelectionType.ChainMultiPlus;
    this.currentRemainingTiles = l;
    this.currentTileMap = s;
    for (; l.size >= 2 && !this.checkTimeout();) {
      var u = this.graph.getSelectableTiles(l, s);
      if (this.checkTimeout()) break;
      c && this.updateChainAge(u, l);
      var p = this.checkMCharTriggers(o, u, s, l);
      if (p) {
        var f = __read(p, 2),
          d = f[0],
          h = f[1],
          y = this.graph.tileToCoord(d),
          m = this.graph.tileToCoord(h),
          v = this.safety.computeFreedCoords(y, m, l, s, u);
        this.pairingHistory.push([y, m]);
        i.push([d, h]);
        l.delete(d);
        l.delete(h);
        this.lastFreedCoords = v;
        t === ECoordSelectionType.IntuitiveChainPlus && (this.lastSecondCoord = m);
      } else {
        this.mCharMgr.lockedCoords.size > 0 && (u = u.filter(function (e) {
          return !n.mCharMgr.lockedCoords.has(n.graph.tileToCoord(e));
        }));
        if (u.length < 2) break;
        this.maxSelectableZ = Math.max.apply(Math, [...u.map(function (e) {
          return e.layer;
        })]);
        for (var g = [], _ = 0; _ < u.length; _++) for (var T = _ + 1; T < u.length; T++) g.push([u[_], u[T]]);
        var C = this.selectPairWithSafety(g, t, l, s);
        if (this.checkTimeout() || !C) break;
        var b = this.graph.tileToCoord(C[0]),
          E = this.graph.tileToCoord(C[1]),
          S = this.safety.computeFreedCoords(b, E, l, s, u);
        this.pairingHistory.push([b, E]);
        i.push(C);
        l.delete(C[0]);
        l.delete(C[1]);
        this.lastFreedCoords = S;
        t === ECoordSelectionType.IntuitiveChainPlus && (this.lastSecondCoord = E);
        if (c) {
          var I = this.graph.getSelectableTiles(l, s);
          this.prevSelectableForChain = new Set(I.map(function (e) {
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
      r = this,
      a = new Set(e.map(function (e) {
        return r.graph.tileToCoord(e);
      })),
      l = 0 === this.prevSelectableForChain.size;
    try {
      for (var s = __values(t), c = s.next(); !c.done; c = s.next()) {
        var u = c.value,
          p = this.graph.tileToCoord(u);
        if (a.has(p)) {
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
    var r,
      a,
      s = this.graph.getSelectableTiles(o, n),
      c = new Set(s),
      u = [],
      p = this.coordSelectors.get(t) || new RandomCoordSel(),
      f = this.buildCoordSelectionContext();
    try {
      for (var d = __values(e), h = d.next(); !h.done; h = d.next()) {
        var y = h.value;
        if (this.checkTimeout()) break;
        this.safety.isSafePairChoiceFast(y, o, n, s, c) && u.push({
          priority: p.calculatePriority(y[0], y[1], f),
          pair: y
        });
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (a = d.return) && a.call(d);
      } finally {
        if (r) throw r.error;
      }
    }
    if (0 === u.length) return null;
    u.sort(function (e, t) {
      return e.priority.priority !== t.priority.priority ? t.priority.priority - e.priority.priority : t.priority.subScore - e.priority.subScore;
    });
    var m = u[0].priority.priority,
      v = u.filter(function (e) {
        return e.priority.priority === m;
      });
    return v[Math.floor(Math.random() * v.length)].pair;
  }
  assignCharacters(e, t, o) {
    var n,
      l,
      s,
      c = [...t];
    this.shuffleArray(c);
    var u = [],
      p = this.charSelectors.get(o) || new RandomCharSel(),
      f = this.buildCharSelectionContext(),
      d = new Map(),
      h = function h(e, t) {
        var o = y.graph.tileToCoord(e),
          n = y.graph.tileToCoord(t);
        if (y.mCharMgr.pairedCoords.has(o) || y.mCharMgr.pairedCoords.has(n)) {
          var i = y.mCharMgr.findGroupForCoord(o, n),
            r = (null == i ? void 0 : i.pairData) || y.mCharMgr.primaryPairData,
            a = null !== (s = null == i ? void 0 : i.resId) && void 0 !== s ? s : y.mCharMgr.primaryResId;
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
        if (0 === c.length) return "break";
        var m = p.selectCharacterPair(e, t, c, f),
          v = c[m];
        c.splice(m, 1);
        u.push([e, t, v[0], v[1]]);
        y.updateAssignmentHistory(e, t, v);
      },
      y = this;
    try {
      for (var m = __values(e), v = m.next(); !v.done; v = m.next()) {
        var g = __read(v.value, 2);
        if ("break" === h(g[0], g[1])) break;
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        v && !v.done && (l = m.return) && l.call(m);
      } finally {
        if (n) throw n.error;
      }
    }
    return u;
  }
  updateAssignmentHistory(e, t, o) {
    this.recentCharsHistory.push(o[0].resId);
    this.recentCharsHistory.length > 50 && this.recentCharsHistory.shift();
    this.assignedChars.set(this.graph.tileToCoord(e), o[0].resId);
    this.assignedChars.set(this.graph.tileToCoord(t), o[1].resId);
  }
  shuffleArray(e) {
    for (var t, o = e.length - 1; o > 0; o--) {
      var n = Math.floor(Math.random() * (o + 1));
      t = __read([e[n], e[o]], 2), e[o] = t[0], e[n] = t[1];
    }
  }
}
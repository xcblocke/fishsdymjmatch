import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { FlowLevelGenerator } from '../../../Scripts/FlowLevelGenerator';
import { FlowLevelSerializer } from '../../../Scripts/FlowLevelSerializer';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { getRandomNum } from '../../../Scripts/framework/utils/CommonUtils';
var M = [{
  w: 5,
  h: 7
}, {
  w: 6,
  h: 8
}];
var k = false;
var F = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 62, 63];
var B = [{
  offset: 5,
  pairsBonus: 5
}, {
  offset: 10,
  pairsBonus: 8
}];
var z = [{
  offset: 5,
  pairsBonus: 5,
  crossDepthRatio: 0.8,
  hamsterCount: 5,
  hamsterDistance: 2
}, {
  offset: 10,
  pairsBonus: 8,
  crossDepthRatio: 0.8,
  hamsterCount: 5,
  hamsterDistance: 3
}];
var R = [{
  minPairs: 14,
  maxPairs: 20,
  maxLayers: 2,
  topologyWeights: {
    pyramid: 100
  },
  tiledSizes: [{
    w: 5,
    h: 7
  }],
  bossLevels: B
}, {
  minPairs: 20,
  maxPairs: 28,
  maxLayers: 2,
  topologyWeights: {
    pyramid: 50,
    multiPeak: 20,
    mirror: 30
  },
  bossLevels: B
}, {
  minPairs: 24,
  maxPairs: 32,
  maxLayers: 3,
  topologyWeights: {
    pyramid: 40,
    checkerboard: 25,
    mirror: 30,
    spiral: 5
  },
  bossLevels: z
}, {
  minPairs: 28,
  maxPairs: 38,
  maxLayers: 3,
  topologyWeights: {
    pyramid: 30,
    multiPeak: 20,
    checkerboard: 15,
    mirror: 30,
    spiral: 5
  },
  bossLevels: z
}, {
  minPairs: 32,
  maxPairs: 42,
  maxLayers: 3,
  topologyWeights: {
    pyramid: 30,
    cross: 2.5,
    multiPeak: 15,
    checkerboard: 15,
    hourglass: 2.5,
    mirror: 30,
    spiral: 5
  },
  bossLevels: z
}, {
  minPairs: 36,
  maxPairs: 46,
  maxLayers: 4,
  topologyWeights: {
    pyramid: 30,
    cross: 2.5,
    multiPeak: 15,
    checkerboard: 15,
    hourglass: 2.5,
    mirror: 30,
    spiral: 5
  },
  bossLevels: z
}, {
  minPairs: 40,
  maxPairs: 50,
  maxLayers: 4,
  topologyWeights: {
    pyramid: 30,
    cross: 10,
    multiPeak: 10,
    checkerboard: 5,
    hourglass: 10,
    mirror: 30,
    spiral: 5
  },
  bossLevels: z
}, {
  minPairs: 44,
  maxPairs: 54,
  maxLayers: 5,
  topologyWeights: {
    pyramid: 30,
    cross: 10,
    multiPeak: 10,
    checkerboard: 5,
    hourglass: 10,
    mirror: 30,
    spiral: 5
  },
  bossLevels: z
}, {
  minPairs: 48,
  maxPairs: 58,
  maxLayers: 5,
  topologyWeights: {
    pyramid: 30,
    cross: 10,
    multiPeak: 10,
    checkerboard: 5,
    hourglass: 10,
    mirror: 30,
    spiral: 5
  },
  bossLevels: z
}, {
  minPairs: 52,
  maxPairs: 60,
  maxLayers: 6,
  topologyWeights: {
    pyramid: 30,
    cross: 10,
    multiPeak: 10,
    checkerboard: 5,
    hourglass: 10,
    mirror: 30,
    spiral: 5
  },
  bossLevels: z
}];
function A(e, t) {
  for (var r, a = Math.max(0, e - 1), o = 0; o < t.length; o++) {
    var i = null !== (r = t[o].levelsInStage) && void 0 !== r ? r : 10;
    if (a < i) return {
      stageIdx: o,
      levelInStage: a + 1,
      posInStage: i > 1 ? a / (i - 1) : 0,
      overflow: 0
    };
    a -= i;
  }
  return {
    stageIdx: t.length - 1,
    levelInStage: 0,
    posInStage: 1,
    overflow: a + 1
  };
}
function W(e) {
  var t, r, a;
  if (1 === e.length) return e[0];
  var o = e.reduce(function (e, t) {
      var r;
      return e + (null !== (r = t.weight) && void 0 !== r ? r : 1);
    }, 0),
    i = Math.random() * o;
  try {
    for (var s = __values(e), n = s.next(); !n.done; n = s.next()) {
      var u = n.value;
      if ((i -= null !== (a = u.weight) && void 0 !== a ? a : 1) <= 0) return u;
    }
  } catch (e) {
    t = {
      error: e
    };
  } finally {
    try {
      n && !n.done && (r = s.return) && r.call(s);
    } finally {
      if (t) throw t.error;
    }
  }
  return e[e.length - 1];
}
function j(e) {
  var t,
    r,
    a = e[0];
  try {
    for (var o = __values(e), i = o.next(); !i.done; i = o.next()) {
      var s = i.value;
      s.w * s.h > a.w * a.h && (a = s);
    }
  } catch (e) {
    t = {
      error: e
    };
  } finally {
    try {
      i && !i.done && (r = o.return) && r.call(o);
    } finally {
      if (t) throw t.error;
    }
  }
  return a;
}
function G(e, t, r) {
  var a,
    o,
    i,
    l,
    s,
    n,
    u,
    c,
    p,
    h,
    m,
    k,
    B,
    z,
    R,
    A,
    G,
    O,
    N,
    V,
    q,
    U,
    H,
    K,
    J,
    Q,
    X,
    Y,
    Z,
    $,
    ee,
    te,
    re,
    ae,
    oe,
    ie,
    le,
    se,
    ne = E.getResolveStage(e, r),
    ue = ne.stageIdx,
    ce = ne.levelInStage,
    pe = ne.posInStage,
    he = E.getAbilityStage(e);
  if (he >= 0) {
    var me = null !== (a = r[ue = Math.max(0, Math.min(r.length - 1, he))].levelsInStage) && void 0 !== a ? a : 10;
    ce = (e - 1) % me + 1;
    pe = me > 1 ? (ce - 1) / (me - 1) : 0;
  }
  if (ne.overflow > 0 && he < 0) {
    var ve = null !== (o = t.endgame) && void 0 !== o ? o : {
        strategy: "cycle"
      },
      de = Math.min(null !== (i = ve.stageCount) && void 0 !== i ? i : 3, r.length),
      fe = r.length - de;
    if ("random" === ve.strategy) {
      me = null !== (l = r[ue = fe + Math.floor(Math.random() * de)].levelsInStage) && void 0 !== l ? l : 10;
      ce = Math.floor(Math.random() * me) + 1;
      pe = me > 1 ? (ce - 1) / (me - 1) : 0;
    } else if ("repeat" === ve.strategy) {
      me = null !== (s = r[ue = r.length - 1].levelsInStage) && void 0 !== s ? s : 10;
      var ge = (ne.overflow - 1) % me;
      ce = ge + 1;
      pe = me > 1 ? ge / (me - 1) : 0;
    } else {
      for (var ye = 0, _e = fe; _e < r.length; _e++) ye += null !== (n = r[_e].levelsInStage) && void 0 !== n ? n : 10;
      for (ge = (ne.overflow - 1) % ye, _e = fe; _e < r.length; _e++) {
        if (ge < (me = null !== (u = r[_e].levelsInStage) && void 0 !== u ? u : 10)) {
          ue = _e;
          ce = ge + 1;
          pe = me > 1 ? ge / (me - 1) : 0;
          break;
        }
        ge -= me;
      }
    }
  }
  var we = E.fixLevelStage(e, r, {
    stageIdx: ue,
    levelInStage: ce,
    posInStage: pe
  });
  ue = we.stageIdx;
  ce = we.levelInStage;
  pe = we.posInStage;
  var xe,
    De = r[ue],
    Le = r[Math.min(ue + 1, r.length - 1)],
    Pe = Math.round(De.minPairs + (Le.minPairs - De.minPairs) * pe),
    be = Math.round(De.maxPairs + (Le.maxPairs - De.maxPairs) * pe),
    Ce = De.maxLayers,
    Se = null !== (c = De.puzzleCoreCount) && void 0 !== c ? c : 0,
    Te = null !== (p = De.hamsterCount) && void 0 !== p ? p : 0,
    Ie = null !== (h = De.hamsterDistance) && void 0 !== h ? h : 2,
    Me = De.hamsterDepthBias,
    ke = null !== (k = null !== (m = De.crossDepthRatio) && void 0 !== m ? m : t.crossDepthRatio) && void 0 !== k ? k : 0.6,
    Fe = null !== (z = null !== (B = De.crossDepthType) && void 0 !== B ? B : t.crossDepthType) && void 0 !== z ? z : 1,
    Be = null !== (A = null !== (R = De.crossDepthSpan) && void 0 !== R ? R : t.crossDepthSpan) && void 0 !== A ? A : 1,
    ze = null !== (O = null !== (G = De.minCardId) && void 0 !== G ? G : t.minCardId) && void 0 !== O ? O : 1,
    Re = null !== (V = null !== (N = De.maxCardId) && void 0 !== N ? N : t.maxCardId) && void 0 !== V ? V : 63,
    Ae = null !== (q = De.topologyWeights) && void 0 !== q ? q : t.topologyWeights,
    We = null !== (U = De.layerDecayExponent) && void 0 !== U ? U : t.layerDecayExponent,
    je = null !== (H = De.easyPairCount) && void 0 !== H ? H : t.easyPairCount,
    Ge = null !== (K = De.pairDistanceBias) && void 0 !== K ? K : t.pairDistanceBias,
    Ee = null !== (J = De.layerAlignMode) && void 0 !== J ? J : t.layerAlignMode,
    Oe = null !== (Q = De.noFloating) && void 0 !== Q ? Q : t.noFloating,
    Ne = false;
  if (De.bossLevels) {
    if (xe = De.bossLevels.find(function (e) {
      return e.offset === ce;
    })) {
      Ne = true;
      Pe += qe = null !== (X = xe.pairsBonus) && void 0 !== X ? X : 5;
      be += qe;
      Ce = Math.min(Ce + (null !== (Y = xe.layersBonus) && void 0 !== Y ? Y : 1), 7);
      void 0 !== xe.puzzleCoreCount && (Se = xe.puzzleCoreCount);
      void 0 !== xe.hamsterCount && (Te = xe.hamsterCount);
      void 0 !== xe.hamsterDistance && (Ie = xe.hamsterDistance);
      void 0 !== xe.hamsterDepthBias && (Me = xe.hamsterDepthBias);
      void 0 !== xe.crossDepthRatio && (ke = xe.crossDepthRatio);
      void 0 !== xe.crossDepthType && (Fe = xe.crossDepthType);
      void 0 !== xe.crossDepthSpan && (Be = xe.crossDepthSpan);
      void 0 !== xe.minCardId && (ze = xe.minCardId);
      void 0 !== xe.maxCardId && (Re = xe.maxCardId);
      xe.topologyWeights && (Ae = xe.topologyWeights);
      void 0 !== xe.layerDecayExponent && (We = xe.layerDecayExponent);
      void 0 !== xe.easyPairCount && (je = xe.easyPairCount);
      void 0 !== xe.pairDistanceBias && (Ge = xe.pairDistanceBias);
      void 0 !== xe.layerAlignMode && (Ee = xe.layerAlignMode);
      void 0 !== xe.noFloating && (Oe = xe.noFloating);
    }
  } else {
    var Ve = Math.max(1, e);
    if (Ve % 5 == 0) {
      Ne = true;
      var qe,
        Ue = Ve % 10 == 0;
      Pe += qe = Ue ? null !== (Z = t.bossBonus10) && void 0 !== Z ? Z : 8 : null !== ($ = t.bossBonus5) && void 0 !== $ ? $ : 5;
      be += qe;
      Ce = Math.min(Ce + 1, 7);
      ue >= (null !== (ee = t.bossCrossDepthRatioMinStageIdx) && void 0 !== ee ? ee : 2) && (ke = Ue ? null !== (te = t.bossBonus10CrossDepthRatio) && void 0 !== te ? te : 0.8 : null !== (re = t.bossBonus5CrossDepthRatio) && void 0 !== re ? re : 0.8);
    }
  }
  var He,
    Ke,
    Je = null !== (ae = De.tiledSizes) && void 0 !== ae ? ae : M;
  if (Ne && (null == xe ? void 0 : xe.tiledSize)) {
    He = 2 * xe.tiledSize.w;
    Ke = 2 * xe.tiledSize.h;
  } else if (Ne) {
    var Qe = j(Je);
    He = 2 * Qe.w;
    Ke = 2 * Qe.h;
  } else {
    var Xe = W(Je);
    He = 2 * Xe.w;
    Ke = 2 * Xe.h;
  }
  Pe = Math.max(10, Math.min(90, Pe));
  Ne || (be = Math.max(Pe, Math.min(90, be)));
  var Ye = Math.floor(He / 2),
    Ze = Math.floor(Ke / 2),
    $e = j(Je);
  (Ye < $e.w || Ze < $e.h) && be / (Ye * Ze * 0.5) > 0.5 && (Ce += 1);
  return {
    minPairs: Pe,
    maxPairs: be,
    totalPairs: 0,
    boardWidth: He,
    boardHeight: Ke,
    maxLayers: Ce = Math.max(2, Math.min(7, Ce)),
    minCardId: ze,
    maxCardId: Re,
    puzzleCoreCount: Se,
    hamsterCount: Te,
    hamsterDistance: Ie,
    hamsterDepthBias: Me,
    topologyWeights: Ae,
    crossDepthRatio: ke,
    crossDepthType: Fe,
    crossDepthSpan: Be,
    maxAttempts: De.maxAttempts,
    bufferSize: null !== (ie = null !== (oe = De.bufferSize) && void 0 !== oe ? oe : t.bufferSize) && void 0 !== ie ? ie : 4,
    excludedCardIds: null !== (se = null !== (le = De.excludedCardIds) && void 0 !== le ? le : t.excludedCardIds) && void 0 !== se ? se : F,
    layerDecayExponent: We,
    easyPairCount: je,
    pairDistanceBias: Ge,
    layerAlignMode: Ee,
    noFloating: Oe
  };
}
@mj.class("FlowLevelHook")
class E {
  @mj.traitEvent("FlwLv_getAbilStg")
  static getAbilityStage() {
    return -1;
  }
  @mj.traitEvent("FlwLv_getResolveStg")
  static getResolveStage(e, t) {
    return A(e, t);
  }
  @mj.traitEvent("FlwLv_fixLevelStage")
  static fixLevelStage(e, t, r) {
    return r;
  }
}
@mj.trait
@mj.class("FlowLevelTrait")
export default class FlowLevelTrait extends Trait {
  _usedFlowLevel = false;
  _generateCount = 0;
  _stageTable = null;
  _precomputeGen = null;
  _precomputeLevelId = 0;
  _precomputeTimer = null;
  _precomputeStartTime = 0;
  static traitKey = "FlowLevel";
  onLoad() {
    super.onLoad.call(this);
    this._stageTable = this._traitData.stageTable || R;
    var t = this.localData.flowCacheLv || 0,
      r = this._getCurrentLevelId(),
      a = this._hasLevelData() ? r + 1 : r;
    1 == a && (a = 2);
    a > 0 && (t === a || t && this._clearCache());
  }
  _getCurrentLevelId() {
    try {
      return UserModel.getInstance().normalData.getLevelId() || 0;
    } catch (e) {
      return 0;
    }
  }
  _hasLevelData() {
    try {
      var e = UserModel.getInstance().normalData.getOriginalLevelDataWithCardId();
      return !!(e && e.length > 0);
    } catch (e) {
      return false;
    }
  }
  onExtNormLv_getContent(e, t) {
    var r = e.args[0];
    if (r.gameType === MjGameType.Normal) {
      var a = r.levelID || 1,
        o = this._tryGetCache(a);
      if (o) {
        this._usedFlowLevel = true;
        this._generateCount++;
        this._clearCache();
        this._delayedPrecompute(a + 1);
      } else {
        this._generateCount++;
        this._usedFlowLevel = true;
        o = this._generatorSync(a);
        this._delayedPrecompute(a + 1);
      }
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: Promise.resolve([o, 50, "FlowLevel_" + a, "FlowLevel", "心流"])
      });
    } else t();
  }
  onT2DynStr_isDyn(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: true
    });
  }
  onT2DynStr_extract(e, t) {
    var r = e.args[0].gameData.getLevelId() || 1,
      a = this._generateBufferSync(r);
    if (a) {
      this._generateCount++;
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: Promise.resolve({
          content: a,
          index: "FlowLevel_" + r,
          libName: "FlowLevel"
        })
      });
    } else t();
  }
  _tryGetCache(e) {
    var t = this.localData.flowCacheLv,
      r = this.localData.flowCacheStr;
    if (t === e && r && r.length > 0) return r;
    t && t !== e && this._clearCache();
    return null;
  }
  _clearCache() {
    this.localData.flowCacheLv = 0;
    this.localData.flowCacheStr = "";
  }
  _saveCache(e, t) {
    this.localData.flowCacheLv = e;
    this.localData.flowCacheStr = t;
  }
  _delayedPrecompute(e) {
    var t = this;
    this._stopPrecompute();
    var r = this._traitData.precomputeDelayMs || 5000;
    this._precomputeTimer = setTimeout(function () {
      t._precomputeTimer = null;
      t._startPrecompute(e);
    }, r);
  }
  _startPrecompute(e) {
    this._stopPrecompute();
    var t = getRandomNum(1, 100000),
      r = G(e, this._traitData, this._stageTable),
      a = new FlowLevelGenerator(r, t),
      o = r.maxAttempts || this._traitData.asyncMaxAttempts || 50;
    this._precomputeLevelId = e;
    this._precomputeGen = a.generateAndValidateAsync(o);
    this._precomputeStartTime = Date.now();
    this._scheduleNextTick();
  }
  _stopPrecompute() {
    if (null !== this._precomputeTimer) {
      clearTimeout(this._precomputeTimer);
      this._precomputeTimer = null;
    }
    this._precomputeGen = null;
    this._precomputeLevelId = 0;
    k = false;
  }
  _generateBufferSync(e) {
    var t = getRandomNum(1, 100000),
      r = G(e, this._traitData, this._stageTable),
      a = new FlowLevelGenerator(r, t),
      o = (Date.now(), a.generateAndValidateBuffer(2));
    Date.now();
    return o && o.tiles && o.solvable ? FlowLevelSerializer.serialize(o.tiles) : null;
  }
  _generatorSync(e) {
    this._stopPrecompute();
    var t = getRandomNum(1, 100000),
      r = G(e, this._traitData, this._stageTable),
      a = new FlowLevelGenerator(r, t),
      o = (Date.now(), a.generateAndValidate(1)),
      i = o.tiles;
    o.solvable, o.attempt, Date.now();
    return FlowLevelSerializer.serialize(i);
  }
  _scheduleNextTick() {
    var e = this;
    this._precomputeTimer = setTimeout(function () {
      e._precomputeTimer = null;
      e._tickPrecompute();
    }, 0);
  }
  _tickPrecompute() {
    var e = this._precomputeGen;
    if (e) {
      var t = this._traitData.frameBudgetMs || 10;
      if (1 / cc.director.getDeltaTime() < 20) {
        k || (k = true);
        t *= 0.5;
      }
      for (var r = Date.now(); Date.now() - r < t;) {
        var a = e.next();
        if (a.done) {
          var o = a.value,
            i = o.tiles,
            l = (o.solvable, o.attempt, FlowLevelSerializer.serialize(i));
          this._saveCache(this._precomputeLevelId, l);
          Date.now(), this._precomputeStartTime;
          this._precomputeGen = null;
          this._precomputeLevelId = 0;
          return;
        }
      }
      this._scheduleNextTick();
    }
  }
}
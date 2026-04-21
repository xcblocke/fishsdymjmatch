import Model from '../framework/data/Model';
import { LevelUtil } from '../core/simulator/config/LevelUtil';
import { TileMapSimulator } from '../objects/TileMapSimulator';
import { EGameStepCmd } from './TrackerInterface';
import TrackerUtils from './TrackerUtils';
@mj.class("GameTracker")
export class GameTracker extends Model {
  _cmdStepTime = 0;
  get stepId() {
    return this.localData.stepId;
  }
  set stepId(e) {
    this.localData.stepId = e;
  }
  get cmds() {
    return this.localData.cmds;
  }
  set cmds(e) {
    this.localData.cmds = e;
  }
  get cmdsOpString() {
    return this.cmds.map(function (e) {
      return e.opString;
    });
  }
  get gameStartTime() {
    return this.localData.gameStartTime;
  }
  set gameStartTime(e) {
    this.localData.gameStartTime = e;
  }
  get gameSteps() {
    return this.localData.gameSteps;
  }
  set gameSteps(e) {
    this.localData.gameSteps = e;
  }
  get eliminatedPairs() {
    return this.localData.eliminatedPairs;
  }
  set eliminatedPairs(e) {
    this.localData.eliminatedPairs = e;
  }
  get initHalfExposedTiles() {
    return this.localData.initHalfExposedTiles;
  }
  set initHalfExposedTiles(e) {
    this.localData.initHalfExposedTiles = e;
  }
  get initialHalfExposedPositions() {
    return this.localData.initialHalfExposedPositions;
  }
  set initialHalfExposedPositions(e) {
    this.localData.initialHalfExposedPositions = e;
  }
  get halfExposedSteps() {
    return this.localData.halfExposedSteps;
  }
  set halfExposedSteps(e) {
    this.localData.halfExposedSteps = e;
  }
  get initTilesCount() {
    return this.localData.initTilesCount;
  }
  set initTilesCount(e) {
    this.localData.initTilesCount = e;
  }
  get tileMovableStep() {
    return this.localData.tileMovableStep;
  }
  set tileMovableStep(e) {
    this.localData.tileMovableStep = e;
  }
  get pairsCrushRecords() {
    return this.localData.pairsCrushRecords.map(this.decompressCrushRecord);
  }
  set pairsCrushRecords(e) {
    this.localData.pairsCrushRecords = e.map(this.compressCrushRecord);
  }
  get pairsOpRecords() {
    return this.localData.pairsOpRecords.map(this.decompressCrushRecord);
  }
  set pairsOpRecords(e) {
    this.localData.pairsOpRecords = e.map(this.compressCrushRecord);
  }
  get recordedOpPairs() {
    return this.localData.recordedOpPairs;
  }
  set recordedOpPairs(e) {
    this.localData.recordedOpPairs = e;
  }
  get stepAnalytics() {
    return this.localData.stepAnalytics;
  }
  set stepAnalytics(e) {
    this.localData.stepAnalytics = e;
  }
  get lastStepTime() {
    return this.localData.lastStepTime;
  }
  set lastStepTime(e) {
    this.localData.lastStepTime = e;
  }
  get prevStepTiles() {
    return this.localData.prevStepTiles;
  }
  set prevStepTiles(e) {
    this.localData.prevStepTiles = e;
  }
  get prevReleasedPosition() {
    return this.localData.prevReleasedPosition;
  }
  set prevReleasedPosition(e) {
    this.localData.prevReleasedPosition = e;
  }
  constructor() {
    super();
    this.isLocalEmpty(this.localData.stepId) && (this.localData.stepId = 0);
    this.isLocalEmpty(this.localData.cmds) && (this.localData.cmds = []);
    this.isLocalEmpty(this.localData.gameStartTime) && (this.localData.gameStartTime = Date.now());
    this.isLocalEmpty(this.localData.gameSteps) && (this.localData.gameSteps = []);
    this.isLocalEmpty(this.localData.eliminatedPairs) && (this.localData.eliminatedPairs = []);
    this.isLocalEmpty(this.localData.halfExposedSteps) && (this.localData.halfExposedSteps = {});
    this.isLocalEmpty(this.localData.initialHalfExposedPositions) && (this.localData.initialHalfExposedPositions = {});
    this.isLocalEmpty(this.localData.initTilesCount) && (this.localData.initTilesCount = 0);
    this.isLocalEmpty(this.localData.tileMovableStep) && (this.localData.tileMovableStep = {});
    this.isLocalEmpty(this.localData.pairsCrushRecords) && (this.localData.pairsCrushRecords = []);
    this.isLocalEmpty(this.localData.pairsOpRecords) && (this.localData.pairsOpRecords = []);
    this.isLocalEmpty(this.localData.recordedOpPairs) && (this.localData.recordedOpPairs = []);
    this.isLocalEmpty(this.localData.stepAnalytics) && (this.localData.stepAnalytics = []);
    this.isLocalEmpty(this.localData.lastStepTime) && (this.localData.lastStepTime = 0);
    this.isLocalEmpty(this.localData.prevStepTiles) && (this.localData.prevStepTiles = []);
    this.isLocalEmpty(this.localData.prevReleasedPosition) && (this.localData.prevReleasedPosition = []);
    this.resetStepTime();
  }
  isLocalEmpty(e) {
    return null == e || "" === e;
  }
  startGameTracking(e) {
    this.resetStepTime();
    this.localData.stepId = 0;
    this.localData.cmds = [];
    this.localData.gameStartTime = Date.now();
    this.localData.gameSteps = [];
    this.localData.eliminatedPairs = [];
    this.localData.halfExposedSteps = {};
    this.localData.initialHalfExposedPositions = {};
    this.localData.initTilesCount = 0;
    this.localData.tileMovableStep = {};
    this.localData.pairsCrushRecords = [];
    this.localData.pairsOpRecords = [];
    this.localData.recordedOpPairs = [];
    this.localData.stepAnalytics = [];
    this.localData.lastStepTime = 0;
    this.localData.prevStepTiles = [];
    this.localData.prevReleasedPosition = [];
    TrackerUtils.startGameTracking(e, e.getTileMapObject());
  }
  pushStep(e, t) {
    try {
      var o = TileMapSimulator.createSim(e),
        n = t.cmd === EGameStepCmd.KillPair || t.cmd === EGameStepCmd.AutoMerge ? this.stepId + 1 : this.stepId;
      this.pushCmd(t, n, o);
      this.recordStep(e, o, t);
    } catch (e) {}
  }
  pushCmd(e, t, o) {
    var n,
      i,
      a,
      s,
      c = this.localData.cmds,
      p = Object.assign(Object.assign({
        _id: c.length + 1
      }, e), {
        stepId: t,
        time: Date.now()
      }),
      d = "";
    if (e.cmd === EGameStepCmd.ReviveShuffle || e.cmd === EGameStepCmd.Shuffle) d = e.cmd + "-" + e.boardAfter;else if (e.cmd === EGameStepCmd.Invalid) {
      var h = o.getTileObject(e.tileId);
      if (h) {
        var y = __read([h.gridPosX, h.gridPosY, h.layer], 3),
          m = y[0],
          v = y[1],
          g = y[2];
        d = e.cmd + "-" + g + LevelUtil.translatePosToChar(m) + LevelUtil.translatePosToChar(v);
      }
    } else if (e.cmd === EGameStepCmd.KillPair || e.cmd === EGameStepCmd.AutoMerge) {
      var _ = o.getTileObject(null === (n = e) || void 0 === n ? void 0 : n.tileId1),
        T = o.getTileObject(null === (i = e) || void 0 === i ? void 0 : i.tileId2);
      if (_ && T) {
        var C = __read([_.gridPosX, _.gridPosY, _.layer], 3),
          b = C[0],
          E = C[1],
          S = C[2],
          I = __read([T.gridPosX, T.gridPosY, T.layer], 3),
          w = I[0],
          B = I[1],
          x = I[2];
        d = e.cmd + "-";
        d += "" + S + LevelUtil.translatePosToChar(b) + LevelUtil.translatePosToChar(E) + "-";
        d += "" + x + LevelUtil.translatePosToChar(w) + LevelUtil.translatePosToChar(B) + "-";
        d += this._cmdStepTime + "-";
        d += "" + e.clear;
        p.stepTime = this._cmdStepTime;
        this.resetStepTime();
      }
    } else {
      _ = o.getTileObject(null === (a = e) || void 0 === a ? void 0 : a.tileId1), T = o.getTileObject(null === (s = e) || void 0 === s ? void 0 : s.tileId2);
      if (_ && T) {
        var M = __read([_.gridPosX, _.gridPosY, _.layer], 3),
          O = (b = M[0], E = M[1], S = M[2], __read([T.gridPosX, T.gridPosY, T.layer], 3));
        w = O[0], B = O[1], x = O[2];
        d = e.cmd + "-";
        d += "" + S + LevelUtil.translatePosToChar(b) + LevelUtil.translatePosToChar(E) + "-";
        d += "" + x + LevelUtil.translatePosToChar(w) + LevelUtil.translatePosToChar(B) + "-";
        d += "" + this._cmdStepTime;
        p.stepTime = this._cmdStepTime;
        this.resetStepTime();
      }
    }
    p.opString = d;
    c.push(p);
    this.localData.cmds = c;
  }
  cacheValidTileIds(e) {
    var t,
      o,
      n = {},
      i = e.getTileMapObject().tileObjectMap();
    try {
      for (var r = __values(i), a = r.next(); !a.done; a = r.next()) {
        var c = __read(a.value, 2),
          u = (c[0], c[1]);
        n[u.id] = u.isValid;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (o = r.return) && o.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
    return n;
  }
  revertValidTileIds(e, t) {
    var o = e.getTileMapObject();
    for (var n in t) {
      var i = o.getTileObject(n);
      i && (i.isValid = t[n]);
    }
  }
  @mj.traitEvent("GameTracker_recordStep")
  recordStep(e, t, o) {
    o.cmd != EGameStepCmd.KillPair && o.cmd != EGameStepCmd.AutoMerge || TrackerUtils.recordStep(e, t, o);
  }
  advanceStepTime(e) {
    this._cmdStepTime += e;
  }
  resetStepTime() {
    this._cmdStepTime = 0;
  }
  getStepCount() {
    return this.cmds.length;
  }
  getForwardStepCount() {
    return this.cmds.filter(function (e) {
      return e.cmd !== EGameStepCmd.Invalid;
    }).length;
  }
  compressCrushRecord(e) {
    return {
      p1: e.position1,
      p2: e.position2,
      e: e.element_id,
      s: e.steps
    };
  }
  decompressCrushRecord(e) {
    var t, o, n, i;
    return {
      position1: null !== (t = e.p1) && void 0 !== t ? t : e.position1,
      position2: null !== (o = e.p2) && void 0 !== o ? o : e.position2,
      element_id: null !== (n = e.e) && void 0 !== n ? n : e.element_id,
      steps: null !== (i = e.s) && void 0 !== i ? i : e.steps
    };
  }
  getStepDurationList() {
    return this.cmds.filter(function (e) {
      return e.cmd !== EGameStepCmd.Invalid;
    }).map(function (e) {
      return Math.floor(e.stepTime);
    });
  }
}
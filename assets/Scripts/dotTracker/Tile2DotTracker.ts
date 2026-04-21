import Model from '../framework/data/Model';
import { DotGameClick } from '../gamePlay/dot/DGameClick';
import { DotUtil } from '../gamePlay/dot/DotUtil';
import { TileMapSimulator } from '../objects/TileMapSimulator';
export enum EErrorClickType {
  Flip = 0,
  Drag = 1,
  Lock = 2,
}
enum u {
  None = -1,
  Shuffle = 0,
  Hint = 1,
  Revert = 2,
  Magnet = 3,
}
@mj.class("Tile2DotTracker")
export class Tile2DotTracker extends Model {
  get lastStepTime() {
    return this.localData.lastStepTime;
  }
  get lastClickFlipCount() {
    return this.localData.lastClickFlipCount;
  }
  get lastDragTileCount() {
    return this.localData.lastDragTileCount;
  }
  get lastShuffleCount() {
    return this.localData.lastShuffleCount;
  }
  get lastRevertCount() {
    return this.localData.lastRevertCount;
  }
  get lastHintCount() {
    return this.localData.lastHintCount;
  }
  get lastToolType() {
    return this.localData.lastToolType;
  }
  get rearrangedBoard() {
    return this.localData.rearrangedBoard;
  }
  get revertedBoard() {
    return this.localData.revertedBoard;
  }
  get lastHintTiles() {
    return this.localData.lastHintTiles;
  }
  get errorClicksList() {
    return this.localData.errorClicksList;
  }
  get stepId() {
    return this.localData.stepId;
  }
  get lastMagnetCount() {
    return this.localData.lastMagnetCount;
  }
  get magnetBoard() {
    return this.localData.magnetBoard;
  }
  get magnetHolder() {
    return this.localData.magnetHolder;
  }
  constructor() {
    super();
    this.isLocalEmpty(this.localData.stepId) && (this.localData.stepId = 0);
    this.isLocalEmpty(this.localData.lastStepTime) && (this.localData.lastStepTime = 0);
    this.isLocalEmpty(this.localData.clickFlipCount) && (this.localData.clickFlipCount = 0);
    this.isLocalEmpty(this.localData.lastClickFlipCount) && (this.localData.lastClickFlipCount = 0);
    this.isLocalEmpty(this.localData.dragTileCount) && (this.localData.dragTileCount = 0);
    this.isLocalEmpty(this.localData.lastDragTileCount) && (this.localData.lastDragTileCount = 0);
    this.isLocalEmpty(this.localData.lockTileCount) && (this.localData.lockTileCount = 0);
    this.isLocalEmpty(this.localData.lastLockTileCount) && (this.localData.lastLockTileCount = 0);
    this.isLocalEmpty(this.localData.lastShuffleCount) && (this.localData.lastShuffleCount = 0);
    this.isLocalEmpty(this.localData.lastMagnetCount) && (this.localData.lastMagnetCount = 0);
    this.isLocalEmpty(this.localData.lastRevertCount) && (this.localData.lastRevertCount = 0);
    this.isLocalEmpty(this.localData.lastHintCount) && (this.localData.lastHintCount = 0);
    this.isLocalEmpty(this.localData.lastToolType) && (this.localData.lastToolType = u.None);
    this.isLocalEmpty(this.localData.rearrangedBoard) && (this.localData.rearrangedBoard = "");
    this.isLocalEmpty(this.localData.revertedBoard) && (this.localData.revertedBoard = "");
    this.isLocalEmpty(this.localData.errorClicksList) && (this.localData.errorClicksList = []);
    this.isLocalEmpty(this.localData.lastHintTiles) && (this.localData.lastHintTiles = []);
    this.isLocalEmpty(this.localData.lastMagnetTiles) && (this.localData.lastMagnetTiles = []);
    this.isLocalEmpty(this.localData.magnetBoard) && (this.localData.magnetBoard = "");
    this.isLocalEmpty(this.localData.magnetHolder) && (this.localData.magnetHolder = "");
    this.isLocalEmpty(this.localData.holderUsageRates) && (this.localData.holderUsageRates = []);
    this.isLocalEmpty(this.localData.stepDurationList) && (this.localData.stepDurationList = []);
  }
  isLocalEmpty(e) {
    return null == e || "" === e;
  }
  recordErrorClick(e, t, o) {
    if (!(this.localData.errorClicksList.length >= 15)) {
      var n = e.getTileMapObject().getTileObject(t);
      if (n) {
        if (o === EErrorClickType.Flip) {
          this.recordClickFlip();
        } else {
          if (o === EErrorClickType.Drag) {
            this.recordDragTile();
          } else {
            o === EErrorClickType.Lock && this.recordLockTile();
          }
        }
        var i = e.getGameData().getRealPlayTime(),
          r = DotUtil.getVitaPos(n),
          a = this.localData.errorClicksList,
          l = i - (a.map(function (e) {
            return e[1];
          }).reduce(function (e, t) {
            return e + t;
          }, 0) + this.lastStepTime);
        a.push([r, l]);
        this.localData.errorClicksList = a;
      }
    }
  }
  recordClickFlip() {
    this.localData.clickFlipCount++;
    this.localData.lastClickFlipCount++;
  }
  recordDragTile() {
    this.localData.dragTileCount++;
    this.localData.lastDragTileCount++;
  }
  recordLockTile() {
    this.localData.lockTileCount++;
    this.localData.lastLockTileCount++;
  }
  recordShuffle(e) {
    this.localData.lastShuffleCount++;
    this.localData.lastToolType = u.Shuffle;
    this.localData.rearrangedBoard = DotUtil.getLevelDataAsCardId(e.getTileMapObject(), true);
  }
  recordRevert(e) {
    this.localData.lastRevertCount++;
    this.localData.lastToolType = u.Revert;
    this.localData.revertedBoard = DotUtil.getLevelDataAsCardId(e.getTileMapObject(), true);
  }
  recordHint(e, t) {
    this.localData.lastHintCount++;
    var o = e.getTileMapObject(),
      n = t.map(function (e) {
        return o.getTileObject(e);
      });
    this.localData.lastHintTiles = n.map(function (e) {
      return DotUtil.getVitaPos(e);
    });
  }
  recordMagnet(e, t) {
    var o, n;
    this.localData.lastMagnetCount++;
    this.localData.lastToolType = u.Magnet;
    var i = TileMapSimulator.createSim(e),
      r = t.map(function (e) {
        return i.getTileObject(e);
      });
    this.localData.lastMagnetTiles = r.map(function (e) {
      return DotUtil.getVitaPos(e);
    });
    var a = e.getGameData().slotBarIds,
      c = [],
      p = a.map(function (e) {
        return i.getTileObjectByPosId(e);
      }),
      f = function f(e) {
        var t = i.getTileObject(e);
        if (!t) return "continue";
        var o = p.findIndex(function (e) {
          return e.cardId === t.cardId;
        });
        if (-1 !== o) {
          var n = p.splice(o, 1);
          c.push.apply(c, [...n]);
        }
        c.push(t);
      };
    try {
      for (var y = __values(t), m = y.next(); !m.done; m = y.next()) f(m.value);
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        m && !m.done && (n = y.return) && n.call(y);
      } finally {
        if (o) throw o.error;
      }
    }
    c.forEach(function (e) {
      e.isValid = false;
    });
    this.localData.magnetBoard = DotUtil.getLevelDataAsCardId(i, true);
    this.localData.magnetHolder = p.map(function (e) {
      return e.cardId;
    }).join(",");
    c.forEach(function (e) {
      e.isValid = true;
    });
  }
  resetAfterDot(e) {
    var t = e.getGameData().getRealPlayTime(),
      o = this.localData.lastStepTime,
      n = this.localData.stepDurationList;
    n.push(Math.floor(t - o));
    this.localData.stepDurationList = n;
    this.localData.lastStepTime = t;
    this.localData.lastClickFlipCount = 0;
    this.localData.lastDragTileCount = 0;
    this.localData.lastLockTileCount = 0;
    this.localData.lastShuffleCount = 0;
    this.localData.lastRevertCount = 0;
    this.localData.lastHintCount = 0;
    this.localData.lastMagnetCount = 0;
    this.localData.lastToolType = -1;
    this.localData.rearrangedBoard = "";
    this.localData.revertedBoard = "";
    this.localData.lastHintTiles = [];
    this.localData.lastMagnetTiles = [];
    this.localData.magnetBoard = "";
    this.localData.magnetHolder = "";
    this.localData.errorClicksList = [];
  }
  recordAddSlot(e, t) {
    try {
      var o = TileMapSimulator.createSim(e),
        n = o.getTileObject(t);
      if (!n) return;
      this.localData.stepId++;
      this.recordHolderUsageRate(e, o, n);
      DotGameClick.dot(e, o, n);
      this.resetAfterDot(e);
    } catch (e) {
      console.error("[DotTracker] recordAddSlot error: " + (null == e ? void 0 : e.message));
    }
  }
  recordHolderUsageRate(e, t, o) {
    var n = e.getGameData(),
      i = n.slotBarIds,
      r = n.slotBarCount,
      a = new Set(i.map(function (e) {
        var o;
        return null === (o = t.getTileObjectByPosId(e)) || void 0 === o ? void 0 : o.cardId;
      }));
    if (a.has(o.cardId)) {
      a.delete(o.cardId);
    } else {
      a.add(o.cardId);
    }
    var l = a.size / r,
      s = this.localData.holderUsageRates;
    s.push(l);
    this.localData.holderUsageRates = s;
  }
  getHolderUsageRates() {
    return this.localData.holderUsageRates;
  }
  getAvgHolderUsageRate() {
    return 0 === this.localData.holderUsageRates.length ? 0 : this.localData.holderUsageRates.reduce(function (e, t) {
      return e + t;
    }, 0) / this.localData.holderUsageRates.length;
  }
  getStepDurationList() {
    return this.localData.stepDurationList;
  }
  resetGameData() {
    this.localData.stepId = 0;
    this.localData.lastStepTime = 0;
    this.localData.clickFlipCount = 0;
    this.localData.lastClickFlipCount = 0;
    this.localData.dragTileCount = 0;
    this.localData.lastDragTileCount = 0;
    this.localData.lockTileCount = 0;
    this.localData.lastLockTileCount = 0;
    this.localData.lastShuffleCount = 0;
    this.localData.lastRevertCount = 0;
    this.localData.lastHintCount = 0;
    this.localData.lastMagnetCount = 0;
    this.localData.lastToolType = u.None;
    this.localData.rearrangedBoard = "";
    this.localData.revertedBoard = "";
    this.localData.lastHintTiles = [];
    this.localData.lastMagnetTiles = [];
    this.localData.magnetBoard = "";
    this.localData.magnetHolder = "";
    this.localData.errorClicksList = [];
    this.localData.holderUsageRates = [];
    this.localData.stepDurationList = [];
  }
  getStepCount() {
    return this.localData.stepId;
  }
  getForwardStepCount() {
    return this.localData.stepId;
  }
}
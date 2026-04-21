import { BaseCoreObject } from '../../BaseCoreObject';
export class ClassicLevelModifier extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  pushLevelStr(e, t) {
    this.context.getGameData().addBatchInfo(e, t);
  }
  getCurrentBatchId() {
    return this.context.getGameData().getCurrentBatchId();
  }
  getRemainingTileCountByBatch(e) {
    var t = this.context.getTileMapObject(),
      o = 0;
    t.tileObjectMap().forEach(function (t) {
      t.isValid && t.batchId === e && o++;
    });
    return o;
  }
  instanceNextBatchData(e, t) {
    var o,
      n,
      i = this.context.getTileMapObject(),
      a = this.context.getGameData();
    a.removeNextLevelStr(e);
    a.setCurrentBatchId(e);
    a.resetScoreCombo();
    var l = i.addGameLayer(e, t);
    if (this.context.getOpenGenerateState()) {
      try {
        for (var s = __values(l.tileObjects), c = s.next(); !c.done; c = s.next()) {
          var u = c.value;
          i.setTileGenerated(u, true);
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
      i.updateInitGameLayer();
      var p = this.context.getOffsetY();
      i.updatePositonOffsetForClassic(p, e);
      var f = i.getDropTiles(e);
      l.failingTiles = f;
      a.setWaitExcuteDrop(f.length > 0 ? 1 : 0);
    } else {
      f = this.resetRemainTileObject(e);
      l.failingTiles = f;
    }
    l.openGenerateState = this.context.getOpenGenerateState();
    this.context.saveModifier.saveLevelDataToLocalStorage();
    return l;
  }
  tryExcuteDrop() {
    var e = this.context.getGameData();
    if (e.getWaitExcuteDrop() > 0) {
      e.resetWaitExcuteDrop();
      return this.resetRemainTileObject(e.getCurrentBatchId());
    }
  }
  resetRemainTileObject(e, t = true) {
    var o = this.context.getTileMapObject(),
      n = o.checkAndApplyTileFalling(e, t);
    o.updateInitGameLayer();
    var i = this.context.getOffsetY();
    o.updatePositonOffsetForClassic(i);
    o.cleanupEmptyLayers();
    this.context.saveModifier.saveLevelDataToLocalStorage();
    return n;
  }
}
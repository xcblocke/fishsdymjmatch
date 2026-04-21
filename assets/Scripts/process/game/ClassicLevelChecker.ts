import { BaseCoreObject } from '../../BaseCoreObject';
export class ClassicLevelChecker extends BaseCoreObject {
  getNeedInitNextLevel() {
    var e = this.context.getGameData().getCurrentBatchId();
    if (this.context.getTileMapObject().hasCheckBatchId(e)) return false;
    if (this.getValideLayerIndexes().size <= 1) {
      this.context.getTileMapObject().addCheckBatchId(e);
      return true;
    }
    return false;
  }
  getCurrentBatchRemainCount(e) {
    var t = this.context.getTileMapObject(),
      o = 0;
    t.tileObjectMap().forEach(function (t) {
      t.isValid && t.batchId === e && o++;
    });
    return o;
  }
  getValideLayerIndexes() {
    var e = this.context.getTileMapObject(),
      t = new Set();
    e.mapLayers().forEach(function (e) {
      !t.has(e.layerIndex) && e.hasValidCard() && t.add(e.layerIndex);
    });
    return t;
  }
  getBatchInfoByBatchId(e) {
    var t = this.context.getGameData();
    if (t.getLevelStrByBatchId(e)) return {
      batchId: e,
      levelStr: t.getLevelStrByBatchId(e)
    };
  }
}
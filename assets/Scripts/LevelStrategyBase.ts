import { LevelValueKey, EDCColor, PrefixLevelValue } from './types/Common';
export class LevelStrategyBase {
  param = {};
  fillLevelValue(e) {
    var t = this.getPValueKey(),
      o = e.levelModel.getCachedData(t, []);
    if (o.length !== e.levels.length) {
      o = this.calculateLevelValue(e);
      e.levelModel.cacheData(t, o);
    }
    for (var i = 0; i < e.levels.length; i++) e.levels[i][LevelValueKey] = o[i];
    return e.levels;
  }
  logInfo(e, t = EDCColor.LAYER_LEVEL_VALUE) {}
  getPValueKey() {
    var e = this,
      t = Object.keys(this.param);
    t.sort();
    var o = t.map(function (t) {
      return t + "=" + e.param[t];
    }).join("_");
    return PrefixLevelValue + "_" + this.name + "_[" + o + "]";
  }
  setStrategyParam(e) {
    this.param = e;
  }
  getStrategyParam() {
    return this.param;
  }
}
import { PrefixCapability, EDCColor } from './types/Common';
export var sigmoid = function (e) {
  return 1 / (1 + Math.exp(-e));
};
export class CapabilityStrategyBase {
  param = {};
  getPValueKey() {
    var e = this,
      t = Object.keys(this.param);
    t.sort();
    var o = t.map(function (t) {
      return t + "=" + e.param[t];
    }).join("_");
    return PrefixCapability + "_" + this.name + "_[" + o + "]";
  }
  getCapability(e) {
    var t = this.getPValueKey();
    return e.extractModel.getCachedData(t, e.defaultCapability);
  }
  setCapability(e, t) {
    var o = this.getPValueKey();
    e.extractModel.cacheData(o, t);
  }
  logInfo(e, t = EDCColor.LAYER_CAPABILITY) {}
  setStrategyParam(e) {
    this.param = e;
  }
  getStrategyParam() {
    return this.param;
  }
}
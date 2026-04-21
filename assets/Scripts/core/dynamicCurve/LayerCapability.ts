import { FactoryCapability } from '../../FactoryCapability';
import { EDCColor } from '../../types/Common';
export class LayerCapability {
  strategy = null;
  static getAvailableStrategies() {
    return FactoryCapability.getAllNames();
  }
  setStrategy(e) {
    var t = FactoryCapability.get(e.name);
    if (t) {
      this.strategy = t;
      e.param && t.setStrategyParam(e.param);
      return true;
    }
    return false;
  }
  getStrategyName() {
    var e;
    return (null === (e = this.strategy) || void 0 === e ? void 0 : e.name) || "未设置策略";
  }
  updateCapability(e) {
    this.strategy && this.strategy.updateCapability(e);
  }
  getCapability(e) {
    return this.strategy ? this.strategy.getCapability(e) : e.defaultCapability;
  }
  logInfo(e, t = EDCColor.LAYER_CAPABILITY) {}
}
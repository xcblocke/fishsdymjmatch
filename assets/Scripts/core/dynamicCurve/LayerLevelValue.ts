import { EDCColor } from '../../types/Common';
import { FactoryLevelValue } from '../../FactoryLevelValue';
export class LayerLevelValue {
  strategy = null;
  static getAvailableStrategies() {
    return FactoryLevelValue.getAllNames();
  }
  setStrategy(e) {
    var t = FactoryLevelValue.get(e.name);
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
  fillLevelValue(e) {
    this.strategy && this.strategy.fillLevelValue(e);
  }
  logInfo(e, t = EDCColor.LAYER_LEVEL_VALUE) {}
}
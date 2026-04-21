import { capabilityStrategy } from '../../../Scripts/FactoryCapability';
import { sigmoid, CapabilityStrategyBase } from '../../../Scripts/CapabilityStrategyBase';
@capabilityStrategy("Capability3")
export class CapabilityStrategy3 extends CapabilityStrategyBase {
  name = "Capability3";
  desc = "用户能力值=Sigmoid(x*ln(总时长/总消除数)+y*ln(首次通关数/理论首次通关数))";
  updateCapability(t) {
    var e = t.extractModel,
      i = e.getAllGameTime(),
      r = e.getAllClearCount(),
      a = e.getFirstPassCount(t.win),
      o = e.getExpectedFirstPassCount(),
      n = t.defaultCapability,
      p = this.getStrategyParam(),
      s = p.x,
      y = void 0 === s ? -0.05 : s,
      l = p.y,
      u = void 0 === l ? 0.05 : l;
    i > 0 && r > 0 && a > 0 && o > 0 && (n = sigmoid(y * Math.log(i / r) + u * Math.log(a / o)));
    this.setCapability(t, n);
  }
}
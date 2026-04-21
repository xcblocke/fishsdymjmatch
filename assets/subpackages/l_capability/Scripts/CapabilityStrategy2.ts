import { capabilityStrategy } from '../../../Scripts/FactoryCapability';
import { sigmoid, CapabilityStrategyBase } from '../../../Scripts/CapabilityStrategyBase';
@capabilityStrategy("Capability2")
export class CapabilityStrategy2 extends CapabilityStrategyBase {
  name = "Capability2";
  desc = "用户能力值=Sigmoid(x*ln(首次通关数/理论首次通关数))";
  updateCapability(t) {
    var e = t.extractModel,
      i = e.getFirstPassCount(t.win),
      r = e.getExpectedFirstPassCount(),
      a = t.defaultCapability,
      o = this.getStrategyParam().x,
      n = void 0 === o ? 0.5 : o;
    i > 0 && r > 0 && (a = sigmoid(n * Math.log(i / r)));
    this.setCapability(t, a);
  }
}
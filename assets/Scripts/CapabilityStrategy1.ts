import { capabilityStrategy } from './FactoryCapability';
import { sigmoid, CapabilityStrategyBase } from './CapabilityStrategyBase';
@capabilityStrategy("Capability1")
export class CapabilityStrategy1 extends CapabilityStrategyBase {
  name = "Capability1";
  desc = "用户能力值=Sigmoid(x*ln(总时长/总消除数))";
  updateCapability(e) {
    var t = e.extractModel,
      o = t.getAllGameTime(),
      n = t.getAllClearCount(),
      i = this.getStrategyParam().x,
      r = void 0 === i ? -0.166 : i,
      a = e.defaultCapability;
    o > 0 && n > 0 && (a = sigmoid(r * Math.log(o / n)));
    this.setCapability(e, a);
  }
}
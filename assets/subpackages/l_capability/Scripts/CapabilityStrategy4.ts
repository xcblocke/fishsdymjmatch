import { capabilityStrategy } from '../../../Scripts/FactoryCapability';
import { CapabilityStrategyBase } from '../../../Scripts/CapabilityStrategyBase';
@capabilityStrategy("Capability4")
export class CapabilityStrategy4 extends CapabilityStrategyBase {
  name = "Capability4";
  desc = "用户能力值 = win ? (x*(1-lastCapability)) : (y*lastCapability)";
  updateCapability(t) {
    var e = this.getCapability(t),
      i = t.win,
      r = this.getStrategyParam(),
      a = r.x,
      o = void 0 === a ? 0.5 : a,
      n = r.y,
      c = i ? o * (1 - e) : (void 0 === n ? -0.5 : n) * e;
    isNaN(c) && (c = t.defaultCapability);
    this.setCapability(t, c);
  }
}
import DynamicCurve from '../../../Scripts/types/DynamicCurve';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("CapabilityTrait")
export default class CapabilityTrait extends Trait {
  static traitKey = "Capability";
  get strategy() {
    return this.traitData.strategy;
  }
  onLoad() {
    super.onLoad.call(this);
    this.checkChange();
  }
  checkChange() {
    var t = this.localData.curStrategyStr,
      e = JSON.stringify(this.strategy);
    if (e !== t) {
      this.localData.curStrategyStr = e;
      DynamicCurve.instance.resetCapabilityCache();
    }
  }
  onDCMgr_setCapSgy(t, e) {
    if (this.strategy) {
      t.args[0] = this.strategy;
      e({
        isBreak: true
      });
    } else e();
  }
}
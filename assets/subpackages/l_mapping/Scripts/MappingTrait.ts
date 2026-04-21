import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("MappingTrait")
export default class MappingTrait extends Trait {
  static traitKey = "Mapping";
  get strategies() {
    return this.traitData.strategies;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onDCMgr_setMapSgy(t, e) {
    if (this.strategies) {
      t.args[0] = this.strategies;
      e({
        isBreak: true
      });
    } else e();
  }
}
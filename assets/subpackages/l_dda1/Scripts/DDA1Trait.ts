import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DDA1Trait")
export default class DDA1Trait extends Trait {
  static traitKey = "DDA1";
  onLoad() {
    super.onLoad.call(this);
  }
  getStrategy() {
    return this.traitData.strategy || {
      x: 3
    };
  }
  onDCMgr_setDDASgy(t, e) {
    t.ins.ddaLayer.addStrategy({
      name: "DDA1",
      param: this.getStrategy()
    });
    e();
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DDA2Trait")
export default class DDA2Trait extends Trait {
  static traitKey = "DDA2";
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
      name: "DDA2",
      param: this.getStrategy()
    });
    e();
  }
}
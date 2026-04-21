import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DDA4Trait")
export default class DDA4Trait extends Trait {
  static traitKey = "DDA4";
  onLoad() {
    super.onLoad.call(this);
  }
  getStrategy() {
    return this.traitData.strategy || {
      x: 3,
      y: 240,
      z: 10
    };
  }
  onDCMgr_setDDASgy(t, e) {
    t.ins.ddaLayer.addStrategy({
      name: "DDA4",
      param: this.getStrategy()
    });
    e();
  }
}
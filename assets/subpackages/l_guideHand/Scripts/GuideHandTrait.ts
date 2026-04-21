import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("GuideHandTrait")
export default class GuideHandTrait extends Trait {
  static traitKey = "GuideHand";
  onLoad() {
    super.onLoad.call(this);
  }
  onGuideBhv_start(t, e) {
    var r = t.args[0];
    if (r && r.data) {
      var n = mj.getClassByName("GuideTrait");
      if (n && n.getInstance() && true === n.getInstance().eventEnabled) {
        if (n.getInstance().guideStep >= this._traitData.hideHandFromStep - 1) {
          r.data.showHand = false;
          e();
          return;
        }
      }
      e();
    } else e();
  }
}
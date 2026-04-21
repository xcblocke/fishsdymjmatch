import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("GuideDescTrait")
export default class GuideDescTrait extends Trait {
  static traitKey = "GuideDesc";
  onLoad() {
    super.onLoad.call(this);
  }
  onGuideUI_onLoad(t, e) {
    var r = t.ins;
    if (r && cc.isValid(r.node)) {
      var o = cc.find("nodeTip", r.node);
      o && cc.isValid(o) && (o.active = false);
      e();
    } else e();
  }
}
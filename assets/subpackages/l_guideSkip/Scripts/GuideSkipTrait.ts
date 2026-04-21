import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("GuideSkipTrait")
export default class GuideSkipTrait extends Trait {
  static traitKey = "GuideSkip";
  onLoad() {
    super.onLoad.call(this);
  }
  onGuideUI_onLoad(t, e) {
    var r = t.ins;
    if (r && cc.isValid(r.node)) {
      var i = cc.find("skip/btnSkip", r.node);
      i && cc.isValid(i) && (i.active = false);
      e();
    } else e();
  }
}
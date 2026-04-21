import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("AgeSurveyDescTipTrait")
export default class AgeSurveyDescTipTrait extends Trait {
  static traitKey = "AgeSurveyDescTip";
  onLoad() {
    super.onLoad.call(this);
  }
  onAgeSurveyView_onLoad(t, e) {
    var r = t.ins;
    if (r && r.node) {
      var o = r.node.getChildByName("content_node");
      if (o) {
        var i = o.getChildByName("desc_tip"),
          n = o.getChildByName("desc");
        if (i && n) {
          i.active = true;
          var a = n.getContentSize(),
            s = a.height - 42;
          n.setContentSize(a.width, s);
        }
        e();
      } else e();
    } else e();
  }
}
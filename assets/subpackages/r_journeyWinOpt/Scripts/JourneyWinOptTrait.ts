import Trait from '../../../Scripts/framework/trait/Trait';
import JourneyWinOptView from './JourneyWinOptView';
@mj.trait
@mj.class("JourneyWinOptTrait")
export default class JourneyWinOptTrait extends Trait {
  requireRes = ["r_journeyWinOpt:prefabs/JourneyWinOpt"];
  static traitKey = "JourneyWinOpt";
  onLoad() {
    super.onLoad.call(this);
  }
  onTLWinCtrl_initRes(t, e) {
    var r = t.ins;
    null == r || r.addPreloadRes("Prefab", this.requireRes);
    e();
  }
  onTLWinVw_showTLWinVw(t, e) {
    var r,
      i = t.ins;
    t.args[0];
    if (cc.isValid(i)) {
      var o = i.getContentNode();
      if (cc.isValid(o)) {
        var n = o.getChildByName("JourneyWinOpt");
        if (!cc.isValid(n)) {
          n = i.createUISync(JourneyWinOptView);
          cc.isValid(n) && o.addChild(n);
        }
        cc.isValid(n) && (null === (r = n.getComponent(JourneyWinOptView)) || void 0 === r || r.showUI(o));
      }
    }
    e();
  }
}
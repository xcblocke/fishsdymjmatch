import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("BadgeHideTabTrait")
export default class BadgeHideTabTrait extends Trait {
  static traitKey = "BadgeHideTab";
  onDailyCollVw_onLoad(t, e) {
    var i = t.ins.node;
    if (cc.isValid(i)) {
      var o = cc.find("btn_change", i);
      o && (o.active = false);
    }
    e();
  }
}
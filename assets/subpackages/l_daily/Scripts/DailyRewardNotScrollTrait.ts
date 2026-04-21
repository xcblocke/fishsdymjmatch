import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("DailyRewardNotScrollTrait")
export default class DailyRewardNotScrollTrait extends Trait {
  static traitKey = "DailyRewardNotScroll";
  onLoad() {
    super.onLoad.call(this);
  }
  onDailyRwdLVw_regScrollEvts(t, e) {
    this.setScrollEnabled(t.ins, false);
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  setScrollEnabled(t, e) {
    var i,
      o = (null == t ? void 0 : t._scrollView) || (null === (i = null == t ? void 0 : t.node) || void 0 === i ? void 0 : i.getComponent(cc.ScrollView)) || null;
    if (o) {
      o.enabled = e;
      e || o.stopAutoScroll();
    }
    var n = (null == t ? void 0 : t.dailyScrollView) || null;
    if (n) {
      n.enabled = false;
      n.stopAutoScroll();
    }
  }
}
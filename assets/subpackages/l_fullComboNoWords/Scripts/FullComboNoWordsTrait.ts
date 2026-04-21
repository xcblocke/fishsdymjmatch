import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("FullComboNoWordsTrait")
export default class FullComboNoWordsTrait extends Trait {
  static traitKey = "FullComboNoWords";
  onLoad() {
    super.onLoad.call(this);
  }
  onMotivWdsChk_canShow(t, r) {
    var o,
      e,
      n,
      i,
      a = t.ins,
      u = null === (e = null === (o = null == a ? void 0 : a.context) || void 0 === o ? void 0 : o.getGameData) || void 0 === e ? void 0 : e.call(o);
    if ((null === (n = null == u ? void 0 : u.getHasTriggeredFullCombo) || void 0 === n ? void 0 : n.call(u)) || (null === (i = null == u ? void 0 : u.getHasTriggeredRewardCombo) || void 0 === i ? void 0 : i.call(u))) {
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: {
          isShow: false,
          index: 0
        }
      });
    } else {
      r();
    }
  }
}
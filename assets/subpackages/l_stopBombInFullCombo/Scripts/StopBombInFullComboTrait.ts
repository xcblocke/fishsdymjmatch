import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("StopBombInFullComboTrait")
export default class StopBombInFullComboTrait extends Trait {
  static traitKey = "StopBombInFullCombo";
  onLoad() {
    super.onLoad.call(this);
  }
  onClrNormHlp_parseBomb(t, r) {
    var o,
      e,
      n,
      i = t.ins,
      a = null == i ? void 0 : i._gameContext,
      u = null === (o = null == a ? void 0 : a.getGameData) || void 0 === o ? void 0 : o.call(a);
    if ((null === (e = null == u ? void 0 : u.getHasTriggeredFullCombo) || void 0 === e ? void 0 : e.call(u)) || (null === (n = null == u ? void 0 : u.getHasTriggeredRewardCombo) || void 0 === n ? void 0 : n.call(u))) {
      r({
        returnType: TraitCallbackReturnType.jump
      });
    } else {
      r();
    }
  }
}
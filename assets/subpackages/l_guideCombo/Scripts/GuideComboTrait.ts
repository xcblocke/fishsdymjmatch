import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("GuideComboTrait")
export default class GuideComboTrait extends Trait {
  static traitKey = "GuideCombo";
  onLoad() {
    super.onLoad.call(this);
  }
  onComboChk_canShowCombo(t, r) {
    var e = t.ins,
      o = e.context.getGameData(),
      n = o.getLevelId(),
      i = o.getComboNum(),
      a = e.getShowLimit();
    if (1 === n && i >= a) {
      r({
        returnVal: true,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      r();
    }
  }
}
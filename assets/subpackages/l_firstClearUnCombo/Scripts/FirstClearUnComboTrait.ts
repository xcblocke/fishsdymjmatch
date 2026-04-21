import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("FirstClearUnComboTrait")
export default class FirstClearUnComboTrait extends Trait {
  static traitKey = "FirstClearUnCombo";
  onLoad() {
    super.onLoad.call(this);
  }
  onComboChk_canBreakCb(t, r) {
    if (0 !== t.ins.context.getGameData().getClearTileCount()) {
      r();
    } else {
      r({
        returnType: TraitCallbackReturnType.jump,
        returnVal: false
      });
    }
  }
}
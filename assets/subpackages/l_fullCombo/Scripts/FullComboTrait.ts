import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("FullComboTrait")
export default class FullComboTrait extends Trait {
  static traitKey = "FullCombo";
  onLoad() {
    super.onLoad.call(this);
  }
  onFullComboChk_getLim(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._traitData.fullLimit
    });
  }
  onFullComboChk_rate(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._traitData.fullRate
    });
  }
}
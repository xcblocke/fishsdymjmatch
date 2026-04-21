import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("MotivationalWordsTrait")
export default class MotivationalWordsTrait extends Trait {
  static traitKey = "MotivationalWords";
  onLoad() {
    super.onLoad.call(this);
    this._config = {
      trigMult: this._traitData.trigMult || 3
    };
  }
  onMotivWdsChk_trigMult(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config.trigMult
    });
  }
}
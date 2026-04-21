import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("RewardComboMinEvenTrait")
export default class RewardComboMinEvenTrait extends Trait {
  static traitKey = "RewardComboMinEven";
  onLoad() {
    super.onLoad.call(this);
    this._config = {
      cntRt: this._traitData.cntRt || [0.2, 0.3]
    };
  }
  onRwdComboChk_cntRt(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config.cntRt
    });
  }
}
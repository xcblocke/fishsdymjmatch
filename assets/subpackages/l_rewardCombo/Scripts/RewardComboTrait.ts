import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("RewardComboTrait")
export default class RewardComboTrait extends Trait {
  static traitKey = "RewardCombo";
  onLoad() {
    super.onLoad.call(this);
    this._config = {
      lvMultRt: this._traitData.lvMultRt || 1,
      othLvRate: this._traitData.othLvRate || 0.3,
      lvMult: this._traitData.lvMult || 4
    };
  }
  onRwdComboChk_lvMultRt(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config.lvMultRt
    });
  }
  onRwdComboChk_othLvRt(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config.othLvRate
    });
  }
  onRwdComboChk_lvMult(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config.lvMult
    });
  }
}
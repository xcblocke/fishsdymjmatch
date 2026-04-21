import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("FlowerCardShowClearTrait")
export default class FlowerCardShowClearTrait extends Trait {
  static traitKey = "FlowerCardShowClear";
  onFlowerCS_isOpenCEff(r, t) {
    if (1 !== this._traitData.isOpen) {
      t();
    } else {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    }
  }
}
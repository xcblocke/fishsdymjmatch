import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("ColdStartAMIntrTrait")
export default class ColdStartAMIntrTrait extends Trait {
  static traitKey = "ColdStartAMIntr";
  onLoad() {
    super.onLoad.call(this);
  }
  onMainGameCtrl_isAMIntr(t, r) {
    r({
      isBreak: true,
      returnVal: false,
      returnType: TraitCallbackReturnType.return
    });
  }
}
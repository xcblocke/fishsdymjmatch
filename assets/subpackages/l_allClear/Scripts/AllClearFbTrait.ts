import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("AllClearFbTrait")
export default class AllClearFbTrait extends Trait {
  static traitKey = "AllClearFb";
  onLoad() {
    super.onLoad.call(this);
  }
  onAllClearBhv_isPreFCb(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: true
    });
  }
}
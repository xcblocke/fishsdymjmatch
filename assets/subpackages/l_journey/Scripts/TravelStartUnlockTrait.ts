import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("TravelStartUnlockTrait")
export default class TravelStartUnlockTrait extends Trait {
  static traitKey = "TravelStartUnlock";
  onLoad() {
    super.onLoad.call(this);
  }
  onJourney_GetStartTime(t, e) {
    var r = new Date().getTime();
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: r
    });
  }
}
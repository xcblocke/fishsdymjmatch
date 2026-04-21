import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
@mj.trait
@mj.class("PassedLevelTrait")
export default class PassedLevelTrait extends Trait {
  static traitKey = "PassedLevel";
  onLoad() {
    super.onLoad.call(this);
  }
  onJourney_IsSessionEnd(t, e) {
    var r = TravelGameModel.getInstance(),
      o = !r.isSessionActive(),
      n = r.isComplete(r.getCurJourney()),
      i = o || n;
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: i
    });
  }
}
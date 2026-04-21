import Trait from '../../../Scripts/framework/trait/Trait';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
@mj.trait
@mj.class("JourneyAddNextTrait")
export default class JourneyAddNextTrait extends Trait {
  static traitKey = "JourneyAddNext";
  onLoad() {
    super.onLoad.call(this);
  }
  onJourney_NewSeasonPos(t, e) {
    var r = TravelGameModel.getInstance().getCurSessionIndex() + 1;
    t.args[1].position = r;
    e();
  }
}
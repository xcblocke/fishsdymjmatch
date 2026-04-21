import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("TravelRewardAutoCloseTrait")
export default class TravelRewardAutoCloseTrait extends Trait {
  static traitKey = "TravelRewardAutoClose";
  onLoad() {
    super.onLoad.call(this);
  }
  onTravelRewardVv_autoClose(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump,
      returnVal: true
    });
  }
}
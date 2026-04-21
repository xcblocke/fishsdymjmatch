import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("BadgeRewardNotCloseTrait")
export default class BadgeRewardNotCloseTrait extends Trait {
  static traitKey = "BadgeRewardNotClose";
  onLoad() {
    super.onLoad.call(this);
  }
  onDailyRewardVv_autoClose(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump,
      returnVal: false
    });
  }
}
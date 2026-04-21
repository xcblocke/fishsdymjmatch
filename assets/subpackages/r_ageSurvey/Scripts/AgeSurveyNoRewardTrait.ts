import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("AgeSurveyNoRewardTrait")
export default class AgeSurveyNoRewardTrait extends Trait {
  static traitKey = "AgeSurveyNoReward";
  onAgeSrvMgr_isCanReward(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: false
    });
  }
}
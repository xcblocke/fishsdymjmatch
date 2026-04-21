import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("AgeSurveyRdmDisableTrait")
export default class AgeSurveyRdmDisableTrait extends Trait {
  static traitKey = "AgeSurveyRdmDisable";
  onAgeSrvMgr_isShuffle(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: false
    });
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("StepNoReportTrait")
export default class StepNoReportTrait extends Trait {
  static traitKey = "StepNoReport";
  onTrackerUtils_dotGmStep(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
}
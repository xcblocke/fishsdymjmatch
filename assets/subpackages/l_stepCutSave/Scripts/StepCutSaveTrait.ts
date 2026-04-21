import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("StepCutSaveTrait")
export default class StepCutSaveTrait extends Trait {
  static traitKey = "StepCutSave";
  onTrackerUtils_cheElimPair(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onTrackerUtils_cheGmStep(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onTrackerUtils_upRelPos(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onTrackerUtils_cacheStepAly(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
}
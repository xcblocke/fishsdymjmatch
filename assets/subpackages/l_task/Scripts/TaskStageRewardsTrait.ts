import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("TaskStageRewardsTrait")
export default class TaskStageRewardsTrait extends Trait {
  _config = {};
  static traitKey = "TaskStageRewards";
  onLoad() {
    super.onLoad.call(this);
    this._config = this._traitData || {};
  }
  onTaskTrait_getStageRews(t, e) {
    if (this._config.stageRewards) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this._config.stageRewards
      });
    } else {
      e();
    }
  }
}
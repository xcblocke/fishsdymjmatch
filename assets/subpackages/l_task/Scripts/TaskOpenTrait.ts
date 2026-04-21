import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("TaskOpenTrait")
export default class TaskOpenTrait extends Trait {
  _config = {};
  static traitKey = "TaskOpen";
  onLoad() {
    super.onLoad.call(this);
    this._config = this._traitData || {};
  }
  onTaskTrait_getOpenCond(t, e) {
    if (this._config.openCondition) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this._config.openCondition
      });
    } else {
      e();
    }
  }
}
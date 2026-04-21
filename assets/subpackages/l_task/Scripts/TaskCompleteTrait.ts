import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("TaskCompleteTrait")
export default class TaskCompleteTrait extends Trait {
  static traitKey = "TaskComplete";
  onLoad() {
    super.onLoad.call(this);
  }
  onTaskTrait_getProgChg(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: null
    });
  }
}
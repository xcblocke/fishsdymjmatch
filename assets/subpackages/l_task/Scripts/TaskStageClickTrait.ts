import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { TaskModel } from './model/TaskModel';
@mj.trait
@mj.class("TaskStageClickTrait")
export default class TaskStageClickTrait extends Trait {
  static traitKey = "TaskStageClick";
  onLoad() {
    super.onLoad.call(this);
  }
  onTaskView_stageBtnClick(t, e) {
    var a = t.args[0];
    if (TaskModel.getInstance().getCurrentStage() > a) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    } else {
      e();
    }
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { TaskModel } from './model/TaskModel';
@mj.trait
@mj.class("TaskSortTrait")
export default class TaskSortTrait extends Trait {
  static traitKey = "TaskSort";
  onLoad() {
    super.onLoad.call(this);
  }
  onTaskModel_sort(t, e) {
    var a = t.args[0],
      o = this.sortTasks(a);
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: o
    });
  }
  sortTasks(t) {
    var e = TaskModel.getInstance(),
      a = [...e.getTaskData().listTaskType],
      o = t || e.getCurrentStage(),
      i = e.getStageData(o);
    if (!i) return a;
    a.sort(function (t, e) {
      return (i.taskCompleteList.includes(t) ? 1 : 0) - (i.taskCompleteList.includes(e) ? 1 : 0);
    });
    return a;
  }
}
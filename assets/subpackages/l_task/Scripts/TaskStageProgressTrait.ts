import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { TaskModel } from './model/TaskModel';
@mj.trait
@mj.class("TaskStageProgressTrait")
export default class TaskStageProgressTrait extends Trait {
  static traitKey = "TaskStageProgress";
  onLoad() {
    super.onLoad.call(this);
  }
  onTaskView_calcStgProg(t, e) {
    var a = t.args[0],
      o = this.calculateProgressByTaskCount(a);
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: o
    });
  }
  calculateProgressByTaskCount() {
    var t,
      e = TaskModel.getInstance(),
      a = e.getCurrentStage(),
      o = (e.getTaskData().listTaskType || []).length,
      i = e.getStageData(a),
      r = (null === (t = null == i ? void 0 : i.taskCompleteList) || void 0 === t ? void 0 : t.length) || 0,
      n = 0;
    a > 1 && (n = e.STAGE_WEIGHTS[a - 2]);
    if (a >= 1 && a <= 3 && o > 0) {
      var s = r / o,
        c = a > 1 ? e.STAGE_WEIGHTS[a - 2] : 0;
      n += s * (e.STAGE_WEIGHTS[a - 1] - c);
    }
    return n;
  }
}
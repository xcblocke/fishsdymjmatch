import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { TaskModel } from './model/TaskModel';
import { ETaskStageState } from './TaskData';
@mj.trait
@mj.class("TaskRewardTrait")
export default class TaskRewardTrait extends Trait {
  static traitKey = "TaskReward";
  onTaskTrait_checkNeedBlock(t, e) {
    try {
      var o = TaskModel.getInstance(),
        i = o.getCurrentStage(),
        r = o.getStageData(i);
      if (r && r.stageState === ETaskStageState.Wait) {
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: true
        });
      } else {
        e();
      }
    } catch (t) {
      console.error("[" + TaskRewardTrait.traitKey + "] 劫持checkNeedBlock失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onTaskView_shouldShowAnim(t, e) {
    try {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    } catch (t) {
      console.error("[" + TaskRewardTrait.traitKey + "] 劫持shouldShowAnim失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { TaskModel } from './model/TaskModel';
import { ETaskUIType } from './TaskData';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("TaskNewGameRewardTrait")
export default class TaskNewGameRewardTrait extends Trait {
  static traitKey = "TaskNewGameReward";
  onLoad() {
    super.onLoad.call(this);
  }
  onGsListener_onNewGame(t, e) {
    try {
      if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Normal) {
        e();
        return;
      }
      var o = TaskModel.getInstance();
      if (!o.isTaskOpen()) {
        e();
        return;
      }
      o.hasWaitingReward() && this.pushController("TaskController", {
        from: ETaskUIType.Result
      });
      e();
    } catch (t) {
      console.error("[" + TaskNewGameRewardTrait.traitKey + "] 检查待领奖状态失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onTaskTrait_showTask(t, e) {
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Normal) {
      var a = t.args[0];
      a && a();
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
}
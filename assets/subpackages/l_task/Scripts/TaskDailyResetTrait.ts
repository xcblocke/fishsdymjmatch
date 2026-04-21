import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { TaskModel } from './model/TaskModel';
import { TaskUtils } from './TaskUtils';
@mj.trait
@mj.class("TaskDailyResetTrait")
export default class TaskDailyResetTrait extends Trait {
  static traitKey = "TaskDailyReset";
  onLoad() {
    super.onLoad.call(this);
  }
  onTaskModel_resetTask(t, e) {
    var o, i;
    try {
      var r = TaskModel.getInstance(),
        n = null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.t) && void 0 !== i ? i : 1,
        l = r.isAllTasksCompleted();
      if (1 === n) {
        if (!this.isFirstTask()) {
          e();
          return;
        }
        if (l) {
          e();
          return;
        }
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: false
        });
        return;
      }
      if (l) {
        e();
        return;
      }
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    } catch (t) {
      console.error("[" + TaskDailyResetTrait.traitKey + "] 处理跨天刷新检查失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  isFirstTask() {
    var t = UserModel.getInstance().getInstallTime(),
      e = TaskModel.getInstance().localData.lastTime;
    return !this.isEmpty(t) && !this.isEmpty(e) && TaskUtils.isSameDay(t, e);
  }
  isEmpty(t) {
    return null == t || "" === t;
  }
}
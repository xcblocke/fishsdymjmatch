import Trait from '../../../Scripts/framework/trait/Trait';
import { TaskModel } from './model/TaskModel';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { ETaskUIType } from './TaskData';
@mj.trait
@mj.class("TaskAutoPopTrait")
export default class TaskAutoPopTrait extends Trait {
  _config = {};
  static traitKey = "TaskAutoPop";
  onLoad() {
    super.onLoad.call(this);
    this._config = this._traitData || {};
  }
  onHallVw_onPopView(t, e) {
    this.showPopView(function (t) {
      e({
        isBreak: t
      });
    });
  }
  @mj.traitEvent("TaskAutoPopT_showPopVw")
  showPopView(t) {
    var e = this.showTaskMainUI();
    null == t || t(e);
  }
  showTaskMainUI(t = null) {
    var e = TaskModel.getInstance();
    if (!e.isTaskOpen()) return false;
    if (true !== this._config.firstAutoPop) return false;
    if (e.isFirstHomeShow()) return false;
    try {
      ControllerManager.getInstance().pushViewByController("TaskController", {
        from: ETaskUIType.Home,
        onClose: t
      });
      return true;
    } catch (t) {
      console.error("[" + TaskAutoPopTrait.traitKey + "] 弹出任务主界面失败: " + (null == t ? void 0 : t.message));
    }
    return false;
  }
}
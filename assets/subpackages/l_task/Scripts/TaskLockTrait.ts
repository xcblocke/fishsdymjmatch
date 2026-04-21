import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { TaskModel } from './model/TaskModel';
import { ERedDotType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("TaskLockTrait")
export default class TaskLockTrait extends Trait {
  _config = {};
  static traitKey = "TaskLock";
  onLoad() {
    super.onLoad.call(this);
    this.registerEvent([{
      event: "Tile2WinVw_show"
    }]);
    this._config = this._traitData || {};
  }
  sendTaskRedDotNotify() {
    mj.EventManager.emit("RedDot_addNotify", ERedDotType.Task);
  }
  onTaskTrait_canShowTaskBtn(t, e) {
    if (this._config.isShowLockBtn) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    } else {
      e();
    }
  }
  onWinVw_showWinVw(t, e) {
    try {
      var a = UserModel.getInstance().getMainGameData().getLevelId() - 1,
        o = TaskModel.getInstance();
      if (!o.isTaskOpen()) {
        e();
        return;
      }
      a === o.openCondition().level && this.sendTaskRedDotNotify();
    } catch (t) {}
    e();
  }
  onTile2WinVw_show(t, e) {
    try {
      var a = UserModel.getInstance().getMainGameData().getLevelId() - 1,
        o = TaskModel.getInstance();
      if (!o.isTaskOpen()) {
        e();
        return;
      }
      a === o.openCondition().level && this.sendTaskRedDotNotify();
    } catch (t) {}
    e();
  }
  onTaskModel_hasRedPoint(t, e) {
    try {
      var a = TaskModel.getInstance(),
        o = {
          show: true,
          type: ERedDotType.Task
        };
      mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [o]);
      if (!o.show) {
        e();
        return;
      }
      if (a.isFirstHomeShow()) {
        e();
        return;
      }
      if (UserModel.getInstance().getMainGameData().getLevelId() > a.openCondition().level) {
        this.sendTaskRedDotNotify();
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: true
        });
        return;
      }
    } catch (t) {}
    e();
  }
}
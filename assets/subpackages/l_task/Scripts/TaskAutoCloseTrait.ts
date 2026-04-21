import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("TaskAutoCloseTrait")
export default class TaskAutoCloseTrait extends Trait {
  static traitKey = "TaskAutoClose";
  get autoCloseDelay() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.autoCloseDelay) && void 0 !== e ? e : 1.8;
  }
  onTaskReward_hidePanel(t, e) {
    if (UserModel.getInstance().isInGameView()) {
      var a = 1000 * this.autoCloseDelay;
      setTimeout(function () {
        ControllerManager.getInstance().closeViewByName("TaskController");
      }, a);
    }
    e();
  }
}
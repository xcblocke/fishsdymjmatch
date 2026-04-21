import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DailyBackHallTrait")
export default class DailyBackHallTrait extends Trait {
  static traitKey = "DailyBackHall";
  onLoad() {
    super.onLoad.call(this);
  }
  onDailyCtrl_closeView(t, e) {
    ControllerManager.getInstance().pushViewByController("HallController", {
      isReplace: true
    });
    e();
  }
}
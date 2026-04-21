import Trait from '../../../Scripts/framework/trait/Trait';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("AdUnavailableTrait")
export default class AdUnavailableTrait extends Trait {
  retryTime = 9;
  static traitKey = "AdUnavailable";
  onLoad() {
    super.onLoad.call(this);
    this.retryTime = this._traitData.retryTime;
  }
  onAdMgr_videoFailed(t, e) {
    if (!t.args[0]) {
      ControllerManager.getInstance().pushViewByController("AdUnavailableController", {
        isShowAction: true
      });
      t.args[1] = true;
    }
    e();
  }
  onAdMgr_videoSuccess(t, e) {
    ControllerManager.getInstance().closeViewByName("AdUnavailableController");
    e();
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("TaskBannerCloseTrait")
export default class TaskBannerCloseTrait extends Trait {
  static traitKey = "TaskBannerClose";
  onLoad() {
    super.onLoad.call(this);
  }
  onGsListener_onNewGame(t, e) {
    try {
      ControllerManager.getInstance().closeViewByName("TaskBannerController");
      e();
    } catch (t) {
      console.error("[" + TaskBannerCloseTrait.traitKey + "] 关闭TaskBanner失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}
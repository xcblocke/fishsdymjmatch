import Trait from '../../../Scripts/framework/trait/Trait';
import LowPriorityBundleLoader from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
@mj.trait
@mj.class("LowPriorityLoader1Trait")
export default class LowPriorityLoader1Trait extends Trait {
  static traitKey = "LowPriorityLoader1";
  onLoad() {
    super.onLoad.call(this);
  }
  isLowMemory() {
    return true;
  }
  onMainGameCtrl_uiDes(t, r) {
    if (this.isLowMemory()) {
      LowPriorityBundleLoader.getInstance().stop();
      r();
    } else r();
  }
}
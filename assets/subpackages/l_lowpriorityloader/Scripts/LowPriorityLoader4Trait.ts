import Trait from '../../../Scripts/framework/trait/Trait';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
@mj.trait
@mj.class("LowPriorityLoader4Trait")
export default class LowPriorityLoader4Trait extends Trait {
  static traitKey = "LowPriorityLoader4";
  LowBunLoader_onStart(t, r) {
    LowPriorityBundleLoader.getInstance().setPriorityLimit(ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, 3, 5);
    LowPriorityBundleLoader.getInstance().setPriorityLimit(ELowPriorityBundlePriority.DefaultDaXiao, 1, 5);
    r();
  }
}
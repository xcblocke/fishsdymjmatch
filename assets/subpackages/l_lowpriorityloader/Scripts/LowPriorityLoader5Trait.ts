import Trait from '../../../Scripts/framework/trait/Trait';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
@mj.trait
@mj.class("LowPriorityLoader5Trait")
export default class LowPriorityLoader5Trait extends Trait {
  static traitKey = "LowPriorityLoader5";
  onLowBunLoader_onStart(t, r) {
    LowPriorityBundleLoader.getInstance().setPriorityLimit(ELowPriorityBundlePriority.DefaultDaXiao, 1, 5);
    LowPriorityBundleLoader.getInstance().setPriorityLimit(ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, 3, 5);
    t.ins.changePriority(ELowPriorityBundlePriority.DefaultDaXiao, ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
    t.ins.changePriority(ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, ELowPriorityBundlePriority.DefaultDaXiao);
    r();
  }
}
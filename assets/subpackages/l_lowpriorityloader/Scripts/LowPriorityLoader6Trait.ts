import Trait from '../../../Scripts/framework/trait/Trait';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
@mj.trait
@mj.class("LowPriorityLoader6Trait")
export default class LowPriorityLoader6Trait extends Trait {
  static traitKey = "LowPriorityLoader6";
  onLowBunLoader_onStart(t, r) {
    t.ins.setAllowNonCached(true);
    LowPriorityBundleLoader.getInstance().setPriorityLimit(ELowPriorityBundlePriority.DefaultDaXiao, 10, 8);
    LowPriorityBundleLoader.getInstance().setPriorityLimit(ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, 10, 4);
    t.ins.changePriority(ELowPriorityBundlePriority.DefaultDaXiao, ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
    t.ins.changePriority(ELowPriorityBundlePriority.DefaultCardXingyunHuaPai, ELowPriorityBundlePriority.DefaultDaXiao);
    r();
  }
  onLowBunLoader_pNextTask(t, r) {
    LowPriorityBundleLoader.getInstance().getDownloadStats().totalDelayTime + LowPriorityBundleLoader.getInstance().getDownloadStats().totalDownloadTime > 12 && t.ins.stop();
    r();
  }
}
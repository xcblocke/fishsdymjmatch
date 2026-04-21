import Trait from '../../../Scripts/framework/trait/Trait';
import LowPriorityBundleLoader from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
@mj.trait
@mj.class("LowPriorityLoader3Trait")
export default class LowPriorityLoader3Trait extends Trait {
  static traitKey = "LowPriorityLoader3";
  isLowMemory() {
    return true;
  }
  onLowBunLoader_getDelay(t, r) {
    var o;
    if (!this.isLowMemory() || null !== (o = t.args[0]) && void 0 !== o && o.isHasDownloaded) r();else {
      var e = LowPriorityBundleLoader.getInstance().getLastBundleAvgProgressTime(),
        i = t.beforReturnVal;
      i = e < 0.1 ? 0.5 : e < 0.5 ? 1 : e < 1 ? 2 : 30;
      r({
        returnType: TraitCallbackReturnType.return,
        returnVal: i
      });
    }
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import LowPriorityBundleLoader from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
@mj.trait
@mj.class("LowPriorityLoader2Trait")
export default class LowPriorityLoader2Trait extends Trait {
  _hasDownLoadCount = 0;
  static traitKey = "LowPriorityLoader2";
  onLoad() {
    super.onLoad.call(this);
  }
  isLowMemory() {
    return true;
  }
  hasDownLoadMaxCount() {
    var t = this.traitData.maxDownLoadCount || 10;
    return this._hasDownLoadCount >= t;
  }
  onLowBunLoader_start(t, r) {
    this._hasDownLoadCount = 0;
    LowPriorityBundleLoader.getInstance().resume();
    r();
  }
  @mj.traitEvent("LowPriLoader_addLoadCnt")
  addDownLoadCount() {
    this._hasDownLoadCount++;
  }
  onLowBunLoader_taskSuccess(t, r) {
    var o;
    if (this.isLowMemory()) {
      var e = null === (o = t.args) || void 0 === o ? void 0 : o[0];
      this.addDownLoadCount(e.isHasDownloaded);
      this.hasDownLoadMaxCount() && LowPriorityBundleLoader.getInstance().pause();
      r();
    } else r();
  }
}
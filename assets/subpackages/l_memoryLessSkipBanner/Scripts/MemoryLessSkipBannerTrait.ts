import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("MemoryLessSkipBannerTrait")
export default class MemoryLessSkipBannerTrait extends Trait {
  _isLowMemoryDevice = false;
  _memoryThresholdGB = 7;
  static traitKey = "MemoryLessSkipBanner";
  onLoad() {
    var r;
    super.onLoad.call(this);
    this._memoryThresholdGB = (null === (r = this._traitData) || void 0 === r ? void 0 : r.memoryThresholdGB) || 7;
    this._checkDeviceMemory();
  }
  _checkDeviceMemory() {
    try {
      var e = mj.sdk.getDeviceInfo(),
        r = null == e ? void 0 : e.all_memory;
      if (r) {
        Number(r) / 1024 < this._memoryThresholdGB && (this._isLowMemoryDevice = true);
      }
    } catch (e) {}
  }
  onAdMgr_showBanner(e, r) {
    if (this._isLowMemoryDevice) {
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      r();
    }
  }
}
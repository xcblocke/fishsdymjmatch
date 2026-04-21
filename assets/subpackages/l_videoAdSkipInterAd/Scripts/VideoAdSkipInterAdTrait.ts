import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("VideoAdSkipInterAdTrait")
export default class VideoAdSkipInterAdTrait extends Trait {
  _skipCount = 0;
  _skipPerWatch = 0;
  static traitKey = "VideoAdSkipInterAd";
  onLoad() {
    super.onLoad.call(this);
    this._skipPerWatch = this._traitData.skipInterCount || 0;
  }
  onAdMgr_videoSuccess(t, r) {
    this._skipPerWatch > 0 && (this._skipCount = this._skipPerWatch);
    r();
  }
  onAdMgr_chkInterAd(t, r) {
    if (this._skipCount <= 0) r();else {
      this._skipCount--;
      r({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
}
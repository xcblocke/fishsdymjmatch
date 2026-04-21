import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("VideoAdNoInterAdTrait")
export default class VideoAdNoInterAdTrait extends Trait {
  _videoAdSuccessTime = 0;
  _protectionDuration = 90000;
  static traitKey = "VideoAdNoInterAd";
  onLoad() {
    super.onLoad.call(this);
    this._protectionDuration = 1000 * this._traitData.protectionDuration;
  }
  onAdMgr_videoSuccess(t, e) {
    this._videoAdSuccessTime = Date.now();
    e();
  }
  onAdMgr_chkInterAd(t, e) {
    if (0 !== this._videoAdSuccessTime) {
      var r = Date.now() - this._videoAdSuccessTime;
      if (r < this._protectionDuration) {
        Math.ceil((this._protectionDuration - r) / 1000);
        e({
          returnVal: false,
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      } else e();
    } else e();
  }
}
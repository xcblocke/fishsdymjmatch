import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import AdManager from '../../../Scripts/base/ad/AdManager';
@mj.trait
@mj.class("BannerDelayTrait")
export default class BannerDelayTrait extends Trait {
  _delayTimeDone = false;
  _shouldShowBanner = false;
  static traitKey = "BannerDelay";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this._config = {
      delayTime: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.delayTime) && void 0 !== r ? r : 10
    };
    this.startDelayTimer();
  }
  startDelayTimer() {
    var t = this,
      e = 1000 * this._config.delayTime;
    setTimeout(function () {
      t._delayTimeDone = true;
      t._shouldShowBanner && AdManager.getInstance().showBanner();
    }, e);
  }
  onAdMgr_showBanner(t, e) {
    this._shouldShowBanner = true;
    if (this._delayTimeDone) {
      e();
    } else {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
  onAdMgr_hideBanner(t, e) {
    this._shouldShowBanner = false;
    e();
  }
}
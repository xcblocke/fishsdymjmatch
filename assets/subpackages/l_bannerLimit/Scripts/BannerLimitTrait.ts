import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import AdManager from '../../../Scripts/base/ad/AdManager';
@mj.trait
@mj.class("BannerLimitTrait")
export default class BannerLimitTrait extends Trait {
  static traitKey = "BannerLimit";
  onLoad() {
    var e, r, a, i;
    super.onLoad.call(this);
    this._config = {
      maxGameCount: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.maxGameCount) && void 0 !== r ? r : 15,
      resetHour: null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.resetHour) && void 0 !== i ? i : 5
    };
    this.isLocalEmpty(this.localData.cycleStartTime) && (this.localData.cycleStartTime = 0);
    this.isLocalEmpty(this.localData.gameEndCount) && (this.localData.gameEndCount = 0);
    this.checkAndResetCycle();
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  getLogicCycleStart(t) {
    var e = new Date(t);
    e.getHours() < this._config.resetHour && e.setDate(e.getDate() - 1);
    e.setHours(this._config.resetHour, 0, 0, 0);
    return e.getTime();
  }
  checkAndResetCycle() {
    var t = Date.now(),
      e = this.getLogicCycleStart(t);
    if (e !== this.localData.cycleStartTime) {
      this.localData.cycleStartTime = e;
      this.localData.gameEndCount = 0;
      return true;
    }
    return false;
  }
  isLimitReached() {
    return this.localData.gameEndCount >= this._config.maxGameCount;
  }
  onDGameEnd_adjust(t, e) {
    this.checkAndResetCycle();
    this.localData.gameEndCount += 1;
    this.localData.gameEndCount === this._config.maxGameCount && AdManager.getInstance().hideBanner();
    e();
  }
  onAdMgr_showBanner(t, e) {
    this.checkAndResetCycle();
    if (this.isLimitReached()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      e();
    }
  }
}
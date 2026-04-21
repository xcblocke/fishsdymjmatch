import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("InterAdCDTrait")
export default class InterAdCDTrait extends Trait {
  _lastPlayTime = 0;
  _cdTime = 70000;
  static traitKey = "InterAdCD";
  onLoad() {
    var e = this;
    super.onLoad.call(this);
    this._cdTime = 1000 * this._traitData.cdTime;
    setTimeout(function () {
      e.initLastPlayTimestamp(Date.now());
    }, 0);
  }
  @mj.traitEvent("InterAdCD_initPlayTime")
  initLastPlayTimestamp(t) {
    this._lastPlayTime = t;
  }
  onAdMgr_interAdClose(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this._lastPlayTime = Date.now();
      e();
    } else e();
  }
  onAdMgr_chkInterAd(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.getCDTime();
      if (0 !== this._lastPlayTime) {
        var r = Date.now() - this._lastPlayTime,
          i = this.getCDTime();
        if (r < i) {
          Math.ceil((i - r) / 1000);
          e({
            returnVal: false,
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        } else e();
      } else e();
    } else e();
  }
  @mj.traitEvent("InterAdCD_getCDTime")
  getCDTime() {
    return this._cdTime;
  }
  getLastPlayTime() {
    return this._lastPlayTime;
  }
  getRemainingCD() {
    if (0 === this._lastPlayTime) return 0;
    var t = Date.now() - this._lastPlayTime,
      e = this.getCDTime();
    return Math.max(0, e - t);
  }
  adjustLastPlayTime(t) {
    this._lastPlayTime = t;
  }
  updateLastPlayTime(t) {
    this._lastPlayTime = t;
  }
}
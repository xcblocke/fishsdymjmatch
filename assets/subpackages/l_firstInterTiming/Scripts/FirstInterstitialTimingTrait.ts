import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("FirstInterstitialTimingTrait")
export default class FirstInterstitialTimingTrait extends Trait {
  _mode = 1;
  _levelThreshold = 11;
  _timeThreshold = 21;
  static traitKey = "FirstInterstitialTiming";
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  onLoad() {
    var e, r, i;
    super.onLoad.call(this);
    this.isLocalEmpty(this.localData.hasPlayedFirstInter) && (this.localData.hasPlayedFirstInter = false);
    this._mode = void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.mode) ? this._traitData.mode : 1;
    this._levelThreshold = void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.levelThreshold) ? this._traitData.levelThreshold : 11;
    this._timeThreshold = void 0 !== (null === (i = this._traitData) || void 0 === i ? void 0 : i.timeThreshold) ? this._traitData.timeThreshold : 21;
    this._mode;
  }
  onAdMgr_chkInterAd(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this.localData.hasPlayedFirstInter) e();else if (this.checkConditions()) e();else {
        this.getCurrentLevel(), this.getTotalPlayTimeMinutes();
        e({
          returnVal: false,
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      }
    } else e();
  }
  onAdMgr_interAdClose(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.localData.hasPlayedFirstInter || (this.localData.hasPlayedFirstInter = true);
      e();
    } else e();
  }
  checkConditions() {
    var t = this.getCurrentLevel(),
      e = this.getTotalPlayTimeMinutes(),
      r = t >= this._levelThreshold,
      i = e >= this._timeThreshold;
    return 1 === this._mode ? r && i : r || i;
  }
  getCurrentLevel() {
    var t = UserModel.getInstance().normalData;
    return t && t.getCurrentLevelId ? t.getCurrentLevelId() : 0;
  }
  getTotalPlayTimeMinutes() {
    return UserModel.getInstance().getAppUseSecondsTime() / 60;
  }
  getHasPlayedFirstInter() {
    return this.localData.hasPlayedFirstInter || false;
  }
}
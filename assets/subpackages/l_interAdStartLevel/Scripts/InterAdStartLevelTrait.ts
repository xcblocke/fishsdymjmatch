import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("InterAdStartLevelTrait")
export default class InterAdStartLevelTrait extends Trait {
  _startLevel = 9;
  static traitKey = "InterAdStartLevel";
  onLoad() {
    super.onLoad.call(this);
    this._startLevel = this._traitData.startLevel;
    void 0 !== this.traitData.secondOpenLevel && (this.localData.isFirstPlay ? this._startLevel = this.traitData.secondOpenLevel : this.localData.isFirstPlay = true);
  }
  @mj.traitEvent("InterAdStart_getStartLv")
  getStartLevel() {
    return this._startLevel;
  }
  onAdMgr_chkInterAd(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this.isSkip()) e();else {
        var r = UserModel.getInstance().getMainGameData().getLevelId(),
          a = this.getStartLevel();
        if (true !== this.getHasNotPlayedFirstInter() && r <= a) {
          e({
            returnVal: false,
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        } else {
          e();
        }
      }
    } else e();
  }
  getHasNotPlayedFirstInter() {
    var t = mj.getClassByName("FirstInterstitialTimingTrait");
    return !(!t || !t.getInstance() || true !== t.getInstance().eventEnabled || false !== t.getInstance().getHasPlayedFirstInter());
  }
  @mj.traitEvent("InterAdStart_isSkip")
  isSkip() {
    return false;
  }
}
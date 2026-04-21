import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ColdInterCdAndNewTrait")
export default class ColdInterCdAndNewTrait extends Trait {
  _coldStartFreeTime = 60000;
  _startLevel = 9;
  _isReadyToPlayInterAd = false;
  static traitKey = "ColdInterCdAndNew";
  onLoad() {
    var t, r;
    super.onLoad.call(this);
    void 0 !== (null === (t = this._traitData) || void 0 === t ? void 0 : t.coldStartFreeTime) && (this._coldStartFreeTime = 1000 * this._traitData.coldStartFreeTime);
    void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.startLevel) && (this._startLevel = this._traitData.startLevel);
  }
  onAdMgr_chkInterAd(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var r = UserModel.getInstance(),
        a = r.getAppStartTime(),
        i = Date.now() - a,
        n = r.normalData.getLevelId();
      if (!this._isReadyToPlayInterAd || n != this._startLevel || this.localData.isColdInterCdAndNewPlayed) {
        this._isReadyToPlayInterAd = false;
        if (i < this._coldStartFreeTime) {
          Math.ceil((this._coldStartFreeTime - i) / 1000);
          t({
            returnVal: false,
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        } else t();
      } else {
        this._isReadyToPlayInterAd = false;
        this.localData.isColdInterCdAndNewPlayed = true;
        t({
          returnVal: true,
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      }
    } else t();
  }
  onWinVw_onNextClick(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this.isNormalGameType()) {
        this._isReadyToPlayInterAd = true;
        t();
      } else {
        this._isReadyToPlayInterAd = false;
        t();
      }
    } else t();
  }
  onHallNmlBtn_onBtnClk(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this.localData.isColdInterCdAndNewPlayed) {
        this._isReadyToPlayInterAd = false;
        t();
      } else {
        this._isReadyToPlayInterAd = true;
        t();
      }
    } else t();
  }
  onTaskItemVw_goToGame(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this.localData.isColdInterCdAndNewPlayed) {
        this._isReadyToPlayInterAd = false;
        t();
      } else {
        this._isReadyToPlayInterAd = true;
        t();
      }
    } else t();
  }
  isNormalGameType() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Normal;
  }
}
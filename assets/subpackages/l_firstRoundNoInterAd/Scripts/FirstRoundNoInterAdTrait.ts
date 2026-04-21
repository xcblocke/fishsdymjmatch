import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("FirstRoundNoInterAdTrait")
export default class FirstRoundNoInterAdTrait extends Trait {
  _isFirstRoundAfterColdStart = false;
  static traitKey = "FirstRoundNoInterAd";
  onLoad() {
    super.onLoad.call(this);
    if (UserModel.getInstance().isFirstOpen) {
      this._isFirstRoundAfterColdStart = false;
    } else {
      this._isFirstRoundAfterColdStart = true;
    }
  }
  onAdMgr_chkInterAd(t, r) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic && this._isFirstRoundAfterColdStart) {
      r({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      r();
    }
  }
  onUserModel_updateGameId(t, r) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this._isFirstRoundAfterColdStart && (this._isFirstRoundAfterColdStart = false);
      r();
    } else r();
  }
}
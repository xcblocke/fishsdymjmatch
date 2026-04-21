import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("FirstSessionSkipInterAdTrait")
export default class FirstSessionSkipInterAdTrait extends Trait {
  static traitKey = "FirstSessionSkipInterAd";
  onLoad() {
    super.onLoad.call(this);
  }
  onAdMgr_chkInterAd(t, r) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic && UserModel.getInstance().isFirstOpen) {
      r({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      r();
    }
  }
}
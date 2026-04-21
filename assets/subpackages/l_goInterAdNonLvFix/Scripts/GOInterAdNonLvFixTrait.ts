import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("GOInterAdNonLvFixTrait")
export default class GOInterAdNonLvFixTrait extends Trait {
  static traitKey = "GOInterAdNonLvFix";
  onLoad() {
    super.onLoad.call(this);
  }
  onGOInterAd_isBlocked(t, r) {
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Normal) {
      r();
    } else {
      r({
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    }
  }
}
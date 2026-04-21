import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("InterAdCdStartResetTrait")
export default class InterAdCdStartResetTrait extends Trait {
  static traitKey = "InterAdCDStartReset";
  onInterAdCD_initPlayTime(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      t.args[0] = 0;
      e();
    } else e();
  }
}
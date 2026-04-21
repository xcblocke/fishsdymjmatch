import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("SurvivalNoFCTrait")
export default class SurvivalNoFCTrait extends Trait {
  static traitKey = "SurvivalNoFC";
  onLoad() {
    super.onLoad.call(this);
  }
  onGsListener_onSurvivalGame(t, e) {
    this.canActive() && UserModel.getInstance().getCurrentGameData().setHasBrokenCombo(true);
    e();
  }
  @mj.traitEvent("SurvNoFCTrait_canActive")
  canActive() {
    return UserModel.getInstance().getCurrentGameType() !== MjGameType.Tile2Normal;
  }
}
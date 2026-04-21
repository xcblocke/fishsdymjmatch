import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("FixBgmMuteOnBackToHallTrait")
export default class FixBgmMuteOnBackToHallTrait extends Trait {
  static traitKey = "FixBgmMuteOnBackToHall";
  onLoad() {
    super.onLoad.call(this);
  }
  onStopAudio_clearCallbacks(t, e) {
    false === UserModel.getInstance().isMusicEnabled() && mj.audioManager.setBGMMuted(true);
    e();
  }
}
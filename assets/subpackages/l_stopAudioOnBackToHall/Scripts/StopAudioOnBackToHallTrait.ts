import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("StopAudioOnBackToHallTrait")
export default class StopAudioOnBackToHallTrait extends Trait {
  static traitKey = "StopAudioOnBackToHall";
  onLoad() {
    super.onLoad.call(this);
  }
  @mj.traitEvent("StopAudio_clearCallbacks")
  stopAllAudioAndClearCallbacks() {
    mj.audioManager.stopAllEffect();
  }
  onMainGameBtnBack_onClick(t, o) {
    this.stopAllAudioAndClearCallbacks();
    o();
  }
  onUISetBtnBack_onBtnClk(t, o) {
    this.stopAllAudioAndClearCallbacks();
    o();
  }
}
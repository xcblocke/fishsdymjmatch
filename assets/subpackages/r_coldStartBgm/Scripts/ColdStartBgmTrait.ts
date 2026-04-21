import Trait from '../../../Scripts/framework/trait/Trait';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("ColdStartBgmTrait")
export default class ColdStartBgmTrait extends Trait {
  _isColdStart = true;
  static traitKey = "ColdStartBgm";
  get fadeInDuration() {
    return null != this._traitData.fadeInDuration ? this._traitData.fadeInDuration : 1;
  }
  onAudioMgr_playBGM(t, r) {
    r();
    if (this._isColdStart) {
      this._isColdStart = false;
      mj.audioManager.playEffect(EAudioID.EnterHall);
      mj.audioManager.fadeBGMIn(this.fadeInDuration);
    }
  }
}
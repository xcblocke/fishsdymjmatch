import Trait from '../../../Scripts/framework/trait/Trait';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("CardClickSoundTrait")
export default class CardClickSoundTrait extends Trait {
  static traitKey = "CardClickSound";
  static REPLACEMENT_AUDIO_ID = 75;
  onLoad() {
    super.onLoad.call(this);
  }
  onAudioMgr_playEff(t, r) {
    var o = t.args[0];
    o !== EAudioID.Check1 && o !== EAudioID.Uncheck || (t.args[0] = CardClickSoundTrait.REPLACEMENT_AUDIO_ID);
    r();
  }
}
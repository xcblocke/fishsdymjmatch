import Trait from '../../../Scripts/framework/trait/Trait';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("EnterTravelSoundTrait")
export default class EnterTravelSoundTrait extends Trait {
  static traitKey = "EnterTravelSound";
  onTLMapCtl_initRes(t, r) {
    r();
    mj.audioManager.playEffect(EAudioID.EnterTravel);
  }
}
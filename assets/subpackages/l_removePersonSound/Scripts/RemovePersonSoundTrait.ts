import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("RemovePersonSoundTrait")
export default class RemovePersonSoundTrait extends Trait {
  static traitKey = "RemovePersonSound";
  onLoad() {
    super.onLoad.call(this);
  }
  onMotivWordsBhv_playSound(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump,
      isBreak: true
    });
  }
  onRwdComboBhv_bonusAud(t, e) {
    mj.audioManager.pauseBGM();
    var r = t.ins;
    r.context.applauseAudioId = -1;
    mj.audioManager.playEffect(EAudioID.Applause, true).then(function (t) {
      r.context.applauseAudioId = t;
    });
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
}
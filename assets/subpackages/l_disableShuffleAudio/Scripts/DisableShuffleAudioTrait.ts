import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("DisableShuffleAudioTrait")
export default class DisableShuffleAudioTrait extends Trait {
  static traitKey = "DisableShuffleAudio";
  onLoad() {
    super.onLoad.call(this);
  }
  onShuffleBhv_playAud(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onStackShfBhv_playAud(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onSpiralShfBhv_playAud(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
}
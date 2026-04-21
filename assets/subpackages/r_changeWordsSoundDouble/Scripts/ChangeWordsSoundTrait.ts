import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
enum i {
  Good = 76,
  Great = 77,
  Excellent = 78,
  Amazing = 79,
  Unbelievable = 80,
  Good2 = 81,
  Great2 = 82,
  Excellent2 = 83,
  Amazing2 = 84,
  Unbelievable2 = 85,
}
@mj.trait
@mj.class("ChangeWordsSoundTrait")
export default class ChangeWordsSoundTrait extends Trait {
  static traitKey = "ChangeWordsSound";
  static femaleSoundIdArr = [i.Good, i.Great, i.Excellent, i.Amazing, i.Unbelievable];
  static maleSoundIdArr = [i.Good2, i.Great2, i.Excellent2, i.Amazing2, i.Unbelievable2];
  onLoad() {
    super.onLoad.call(this);
  }
  onMotivWordsBhv_playSound(e, t) {
    this.handleAudioReplacement(e, t);
  }
  onTravelMWords_playAudio(e, t) {
    this.handleAudioReplacement(e, t);
  }
  handleAudioReplacement(e, t) {
    var n = e.args[0],
      o = UserModel.getInstance(),
      a = o.getCurrentGameType(),
      i = o.getManGameTypes(),
      l = (i && i.includes(a) ? ChangeWordsSoundTrait.maleSoundIdArr : ChangeWordsSoundTrait.femaleSoundIdArr)[n];
    if (l && mj.audioManager) {
      mj.audioManager.playEffect(l, false);
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else t();
  }
}
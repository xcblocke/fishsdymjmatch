import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
enum i {
  Good = 57,
  Great = 58,
  Excellent = 59,
  Amazing = 60,
  Unbelievable = 61,
}
@mj.trait
@mj.class("MotivationWordsManTrait")
export default class MotivationWordsManTrait extends Trait {
  static traitKey = "MotivationWordsMan";
  static bundleName = "l_motivationWordsMan";
  static soundNameArr = [i.Good, i.Great, i.Excellent, i.Amazing, i.Unbelievable];
  onLoad() {
    super.onLoad.call(this);
    var t = this._traitData.gameTypes,
      r = void 0 === t ? [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge] : t;
    UserModel.getInstance().setManGameTypes(r);
  }
  onMotivWordsBhv_playSound(e, t) {
    this.handleAudioReplacement(e, t);
  }
  onTravelMWords_playAudio(e, t) {
    this.handleAudioReplacement(e, t);
  }
  handleAudioReplacement(e, t) {
    var a = this._traitData.gameTypes,
      o = void 0 === a ? [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge] : a,
      n = UserModel.getInstance().getCurrentGameType();
    if (o.includes(n)) {
      var i = e.args[0],
        s = MotivationWordsManTrait.soundNameArr[i];
      if (s && mj.audioManager) {
        mj.audioManager.playEffect(s, false);
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true
        });
      } else t();
    } else t();
  }
}
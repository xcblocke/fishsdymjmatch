import UserModel from '../../gamePlay/user/UserModel';
import { BaseCoreObject } from '../../BaseCoreObject';
import { MotivationalWordsEffect } from '../../MotivationalWordsEffect';
export class MotivationalWordsChecker extends BaseCoreObject {
  @mj.traitEvent("MotivWdsChk_canShow")
  canShowMotivationalWords() {
    if (!UserModel.getInstance().isGuideFinished()) return {
      isShow: false,
      index: 0
    };
    var e = this.context.getGameData().getComboNum(),
      t = false,
      o = 0,
      n = this.getTrigMult();
    if (e % n == 0 && e > 0) {
      t = true;
      var i = MotivationalWordsEffect.soundNameArr.length - 1,
        r = Math.floor(e / n) - 1;
      o = Math.min(r, i);
    }
    return {
      isShow: t,
      index: o
    };
  }
  @mj.traitEvent("MotivWdsChk_trigMult")
  getTrigMult() {
    return 3;
  }
}
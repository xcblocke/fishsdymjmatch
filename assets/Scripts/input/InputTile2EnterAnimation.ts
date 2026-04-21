import { EInsertType } from '../constant/BehaviorsEnum';
import { EnterAnimationEffect } from '../EnterAnimationEffect';
import { InputBase } from '../inputbase/InputBase';
import UserModel from '../gamePlay/user/UserModel';
export default class InputTile2EnterAnimation extends InputBase {
  @mj.traitEvent("IptT2EtAn_excute")
  excute() {
    UserModel.getInstance().isGuideFinished() && this.pushEnterAnimationEffect();
  }
  pushEnterAnimationEffect() {
    var e = new EnterAnimationEffect({
      cardLayoutConfig: this.gameContext.getCardLayoutConfig()
    });
    this.pushEffect(e, EInsertType.Root, null, true);
  }
}
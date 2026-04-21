import { EInsertType } from '../constant/BehaviorsEnum';
import { EnterAnimationFinishEffect } from '../EnterAnimationFinishEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputTile2EnterAnimationFinish extends InputBase {
  @mj.traitEvent("IptT2EtAnFi_excute")
  excute() {
    this.pushEnterAnimationFinishEffect();
  }
  @mj.traitEvent("IptT2EtAnFi_pushEff")
  pushEnterAnimationFinishEffect() {
    var e = new EnterAnimationFinishEffect({});
    this.pushEffect(e, EInsertType.Serial);
  }
}
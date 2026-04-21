import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class BlockInputBehavior extends GameBehaviorsBase {
  _timeout = 0;
  start(e) {
    var t = false !== e.data.block;
    this.context.gameView.setSwallowEventNodeActive(t);
    this.finish(EBehaviorEnum.Success);
  }
}
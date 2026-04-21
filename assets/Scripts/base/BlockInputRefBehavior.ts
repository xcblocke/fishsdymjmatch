import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class BlockInputRefBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data.block,
      o = e.data.from;
    if (t) {
      this.context.gameView.increaseCountBlockNode(o);
    } else {
      this.context.gameView.decreaseCountBlockNode(o);
    }
    this.finish(EBehaviorEnum.Success);
  }
  onAbort() {
    this.context.gameView.resetCountBlockNode();
    super.onAbort.call(this);
  }
}
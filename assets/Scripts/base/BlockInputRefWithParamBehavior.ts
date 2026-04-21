import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class BlockInputRefWithParamBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data.block,
      o = e.data.from;
    1 == e.data.isValid && (t ? this.context.gameView.increaseCountBlockNode(o) : this.context.gameView.decreaseCountBlockNode(o));
    this.finish(EBehaviorEnum.Success);
  }
  onAbort() {
    this.context.gameView.resetCountBlockNode();
    super.onAbort.call(this);
  }
}
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class CancelBehavior extends GameBehaviorsBase {
  start(e) {
    var t;
    null === (t = this.context.getTileNodeMap().get(e.data.tileId)) || void 0 === t || t.cancelTouch();
    this.finish(EBehaviorEnum.Success);
  }
}
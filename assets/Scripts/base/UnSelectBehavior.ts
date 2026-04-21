import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class UnSelectBehavior extends GameBehaviorsBase {
  start(e) {
    var t = this.context.getTileNodeMap().get(e.data.tileId);
    if (t) {
      t.cancelSelected();
      this.finish(EBehaviorEnum.Success);
    } else this.finish(EBehaviorEnum.Success);
  }
}
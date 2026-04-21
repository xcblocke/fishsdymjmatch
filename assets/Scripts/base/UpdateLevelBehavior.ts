import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class UpdateLevelBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data.level;
    this.context.gameView.gameUI.updateLevel(t);
    this.finish(EBehaviorEnum.Success);
  }
}
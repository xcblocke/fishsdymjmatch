import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export default class CleanViewBehavior extends GameBehaviorsBase {
  start() {
    this._context.gameView.nodeCardRoot.children.forEach(function (e) {
      e.active = false;
    });
    this.finish(EBehaviorEnum.Success);
  }
}
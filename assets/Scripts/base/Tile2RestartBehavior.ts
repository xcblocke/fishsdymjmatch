import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2RestartBehavior extends GameBehaviorsBase {
  start() {
    var e, t;
    null === (e = this.context.gameView) || void 0 === e || e.clearAllNode();
    null === (t = this.context.gameCtr) || void 0 === t || t.startNextLevel(true);
    this.finish(EBehaviorEnum.Success);
  }
}
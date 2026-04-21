import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class UpdateMatchNumBehavior extends GameBehaviorsBase {
  @mj.traitEvent("UpdateMatchNumBhv_start")
  start(e) {
    this.context.gameView.gameUI.updateMatchNum(e.data.canMatchCardPairNum);
    this.finish(EBehaviorEnum.Success);
  }
}
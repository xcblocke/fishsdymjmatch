import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export default class UpdateShufflePropBehavior extends GameBehaviorsBase {
  @mj.traitEvent("UdShufflePropBhv_start")
  start(e) {
    var t = e.data.curNum;
    this.context.gameView.gameUI.updateShuffleProp(t);
    this.finish(EBehaviorEnum.Success);
  }
}
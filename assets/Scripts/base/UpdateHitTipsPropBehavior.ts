import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export default class UpdateHitTipsPropBehavior extends GameBehaviorsBase {
  @mj.traitEvent("UdHitTipsPropBhv_start")
  start(e) {
    var t = e.data.curNum;
    this.context.gameView.gameUI.updateHitTipsProp(t);
    this.finish(EBehaviorEnum.Success);
  }
}
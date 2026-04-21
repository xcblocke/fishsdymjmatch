import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2UpdateHitTipsItemBehavior extends GameBehaviorsBase {
  start(e) {
    var t,
      o = e.data.curNum,
      n = this.context.gameView;
    null === (t = null == n ? void 0 : n.nodeBottomView) || void 0 === t || t.updateHitTipsNum(o);
    this.finish(EBehaviorEnum.Success);
  }
}
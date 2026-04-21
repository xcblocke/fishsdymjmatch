import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2TouchStartBehavior extends GameBehaviorsBase {
  start() {
    this.removeFlipHand();
    this.finish(EBehaviorEnum.Success);
  }
  removeFlipHand() {
    var e,
      t,
      o,
      n = null === (o = null === (t = null === (e = this._context) || void 0 === e ? void 0 : e.gameView) || void 0 === t ? void 0 : t.node) || void 0 === o ? void 0 : o.getChildByName("HitTipsFlipHand");
    cc.isValid(n) && n.destroy();
  }
}
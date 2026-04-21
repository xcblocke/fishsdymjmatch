import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2RemoveHitTipsBehavior extends GameBehaviorsBase {
  start(e) {
    this.removeHitTips(e);
    this.finish(EBehaviorEnum.Success);
  }
  removeHitTips(e) {
    var t,
      o,
      n = this.context.getTileNodeMap(),
      i = e.data,
      r = i.tileId1,
      a = i.tileId2;
    r && (null === (t = n.get(r)) || void 0 === t || t.hidePropHint());
    a && (null === (o = n.get(a)) || void 0 === o || o.hidePropHint());
  }
}
import { GameBehaviorsBase } from './GameBehaviorsBase';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
export class Tile2NormalBackBehavior extends GameBehaviorsBase {
  start(e) {
    var t,
      o,
      n = this.context.getTileNodeMap();
    if (e.data.normalBackList && 0 != e.data.normalBackList.length) {
      try {
        for (var i = __values(e.data.normalBackList), a = i.next(); !a.done; a = i.next()) {
          var s = a.value,
            c = n.get(s.tileId);
          c && c.tile2RollCard();
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          a && !a.done && (o = i.return) && o.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      this.finish(EBehaviorEnum.Success);
    } else this.finish(EBehaviorEnum.Success);
  }
}
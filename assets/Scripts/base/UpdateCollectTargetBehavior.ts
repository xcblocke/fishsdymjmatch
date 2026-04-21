import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { ETileType } from '../simulator/constant/TileTypeEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class UpdateCollectTargetBehavior extends GameBehaviorsBase {
  _timeout = 3000;
  start(e) {
    var t, o;
    try {
      var n = e.data.collectDetails;
      if (!n || 0 === n.length) {
        this.finish(EBehaviorEnum.Success);
        return;
      }
      try {
        for (var i = __values(n), l = i.next(); !l.done; l = i.next()) {
          var s = l.value;
          this.updateSingleTarget(s);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          l && !l.done && (o = i.return) && o.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      this.finish(EBehaviorEnum.Success);
    } catch (e) {
      this.fail("更新收集目标失败");
    }
  }
  updateSingleTarget(e) {
    var t = e.type === ETileType.RollCard ? "" + e.type : e.type + "_" + e.cardId,
      o = this.context.getCollectTargetItem(t);
    if (o) {
      o.updateData(e);
      o.playCollectAnimation();
    }
  }
}
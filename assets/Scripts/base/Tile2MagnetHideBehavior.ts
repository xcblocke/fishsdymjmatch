import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import Tile2MagnetItem from '../items/Tile2MagnetItem';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2MagnetHideBehavior extends GameBehaviorsBase {
  start(e) {
    try {
      var t = this.context.gameView,
        o = null == t ? void 0 : t.nodeTopEffectRoot;
      if (!o || !cc.isValid(o)) {
        this.finish(EBehaviorEnum.Success);
        return;
      }
      var n = o.getChildByName("magnetNode");
      if (!n || !cc.isValid(n) || !n.active) {
        this.finish(EBehaviorEnum.Success);
        return;
      }
      if (e.data.isWin || e.data.isDead) {
        var i = n.getComponent(Tile2MagnetItem);
        null == i || i.forceExitWithoutAni();
      }
    } catch (e) {}
    this.finish(EBehaviorEnum.Success);
  }
}
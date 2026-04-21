import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2ClearEffectBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data.tileIds;
    if (!t || t.length < 2) this.finish(EBehaviorEnum.Success);else {
      var o = this.context.getLastCollisionWorldPos() || cc.v3(0, 0, 0),
        n = this.context.gameView.nodeTopEffectRoot,
        i = new cc.Node("Tile2ClearEffect");
      i.parent = n;
      var r = n.convertToNodeSpaceAR(o);
      i.position = cc.v3(r.x, r.y, 0);
      this.playAni(i, e, r);
    }
  }
  @mj.traitEvent("T2ClearEffBhv_playAni")
  playAni(e, t, o) {
    var n = this,
      i = this.getAniCfg(t, o),
      r = i.path,
      s = i.bundle,
      c = i.animName;
    BaseSpine.refreshWithNode(e, r, s).setAnimation(c, 1, function () {
      cc.isValid(e) && e.destroy();
      n.finish(EBehaviorEnum.Success);
    });
  }
  @mj.traitEvent("T2ClearEffBhv_getAniCfg")
  getAniCfg() {
    return {
      path: "spine/clear/gameplay_elimination_a",
      animName: "in"
    };
  }
}
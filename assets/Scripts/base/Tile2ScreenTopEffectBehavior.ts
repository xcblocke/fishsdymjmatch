import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EffectLayer } from '../constant/EffectLayerEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2ScreenTopEffectBehavior extends GameBehaviorsBase {
  start() {
    this.finish(EBehaviorEnum.Success);
    this.createSpineOnLayer("spine/tile2Combo/gamepaly_combo_fall", EffectLayer.Middle, "animation");
    this.createSpineOnLayer("spine/tile2Combo/gamepaly_combo_top", EffectLayer.Middle, "in");
  }
  createSpineOnLayer(e, t, o) {
    var n,
      i = null === (n = this.context.gameView) || void 0 === n ? void 0 : n.getEffectLayer(t);
    if (cc.isValid(i)) {
      var a = BaseSpine.create(e, o, 1, null, true);
      if (a && cc.isValid(a.node)) {
        a.node.parent = i;
        var l = i.height * (1 - i.anchorY);
        a.node.setPosition(cc.v3(0, l, 0));
        a.node.active = true;
      }
    }
  }
}
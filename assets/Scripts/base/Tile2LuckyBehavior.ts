import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import { EffectLayer } from '../constant/EffectLayerEnum';
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
export class Tile2LuckyBehavior extends GameBehaviorsBase {
  start(e) {
    this.addLuckyEffect(e);
    this.finish(EBehaviorEnum.Success);
  }
  addLuckyEffect() {
    var e,
      t = null === (e = this.context.gameView) || void 0 === e ? void 0 : e.getEffectLayer(EffectLayer.Top);
    if (t && cc.isValid(t)) {
      var o = BaseSpine.create("spine/tile2Lucky/gameplay_word_lucky", "in", 1, null, true);
      o.node.parent = t;
      o.node.position = this.getSlotBarBottomPosition();
      mj.audioManager.playEffect(EAudioID.Tile2Lucky);
    }
  }
  getSlotBarBottomPosition() {
    var e = this.context.gameView.getSlotBarNode(),
      t = this.context.gameView.getEffectLayer(EffectLayer.Top),
      o = e.parent.convertToWorldSpaceAR(cc.v2(e.x, e.y - e.height * e.anchorY + this.getOffsetY())),
      n = t.convertToNodeSpaceAR(o);
    return cc.v3(n.x, n.y);
  }
  getOffsetY() {
    return -60;
  }
}
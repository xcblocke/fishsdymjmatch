import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EffectLayer } from '../constant/EffectLayerEnum';
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
export class Tile2PerfectBehavior extends GameBehaviorsBase {
  static PERFECT_NODE_NAME = "Tile2PerfectEffectNode";
  start(e) {
    var t;
    if (null === (t = e.data) || void 0 === t ? void 0 : t.isClear) {
      this.removePlayingPerfect();
    } else {
      this.addPerfectEffect();
    }
    this.finish(EBehaviorEnum.Success);
  }
  removePlayingPerfect() {
    var e,
      o = null === (e = this.context.gameView) || void 0 === e ? void 0 : e.getEffectLayer(EffectLayer.Top);
    if (o && cc.isValid(o)) {
      var n = o.getChildByName(Tile2PerfectBehavior.PERFECT_NODE_NAME);
      n && cc.isValid(n) && n.destroy();
    }
  }
  addPerfectEffect() {
    var e,
      o = null === (e = this.context.gameView) || void 0 === e ? void 0 : e.getEffectLayer(EffectLayer.Top);
    if (o && cc.isValid(o)) {
      this.removePlayingPerfect();
      var n = BaseSpine.create("spine/tile2Perfect/gameplay_word_perfect", "in", 1, null, true);
      n.node.name = Tile2PerfectBehavior.PERFECT_NODE_NAME;
      n.node.parent = o;
      n.node.position = this.getPerfectPosition();
      mj.audioManager.playEffect(EAudioID.Tile2Perfect);
    }
  }
  getPerfectPosition() {
    var e = this.context.gameView.getEffectLayer(EffectLayer.Top),
      t = this.context.getLastCollisionWorldPos();
    if (t) {
      var o = e.convertToNodeSpaceAR(t);
      return cc.v3(o.x, o.y);
    }
    return cc.v3(0, 0, 0);
  }
}
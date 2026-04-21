import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EffectLayer } from '../constant/EffectLayerEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import { createSingleColorNode } from '../framework/utils/CommonUtils';
import { ETile2SlotType, EAudioID } from '../core/simulator/constant/GameTypeEnums';
export class Tile2BeforeFailBehavior extends GameBehaviorsBase {
  onAbort() {
    var e;
    null === (e = this.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
  }
  start(e) {
    var t,
      o,
      n = this,
      i = e.data.tileIds,
      l = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.getEffectLayer(EffectLayer.Top);
    if (l && cc.isValid(l)) {
      if (this.context.getTile2SlotType() === ETile2SlotType.Slot3) {
        null === (o = this.context.gameView) || void 0 === o || o.setSwallowEventNodeActive(true);
        for (var s = this.createMaskNode(l), p = 0; p < i.length; p++) {
          var f = i[p],
            d = this.context.getTileNodeByTileId(f);
          d && d.tile2BeforeFail(l);
        }
        mj.audioManager.playEffect(EAudioID.Tile2Fail3Slot);
        this.playMaskFadeIn(s, function () {
          var e;
          cc.isValid(s) && s.destroy();
          null === (e = n.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
          n.finish(EBehaviorEnum.Success);
        });
      } else this.finish(EBehaviorEnum.Success);
    } else this.finish(EBehaviorEnum.Success);
  }
  createMaskNode(e) {
    var t = createSingleColorNode(cc.Color.BLACK, cc.size(9999, 9999));
    t.zIndex = -1;
    t.parent = e;
    return t;
  }
  playMaskFadeIn(e, t) {
    if (e && cc.isValid(e)) {
      e.opacity = 0;
      var o = Math.round(76.5);
      cc.tween(e).to(0.27, {
        opacity: o
      }, {
        easing: cc.easing.sineInOut
      }).delay(1).call(function () {
        null == t || t();
      }).start();
    } else null == t || t();
  }
}
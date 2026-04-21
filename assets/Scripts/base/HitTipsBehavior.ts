import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class HitTipsBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data.isClearHit,
      o = this.context.getTileNodeMap();
    if (t) {
      var n = e.data.tileId1,
        i = e.data.tileId2,
        r = o.get(n),
        s = o.get(i);
      null == r || r.hidePropHint();
      null == s || s.hidePropHint();
      this.finish(EBehaviorEnum.Success);
    } else {
      var c = e.data.tileId1,
        u = e.data.tileId2;
      if (c && u) {
        r = o.get(c), s = o.get(u);
        null == r || r.showPropHint();
        null == s || s.showPropHint();
        this.triggerShowHintEvent(r, s);
      }
      mj.audioManager.playEffect(EAudioID.Hint);
      this.finish(EBehaviorEnum.Success);
    }
  }
  @mj.traitEvent("HitTipsBhv_trgHint")
  triggerShowHintEvent(e, t) {
    return {
      tileNode1: e,
      tileNode2: t,
      direction1: 1,
      direction2: -1
    };
  }
}
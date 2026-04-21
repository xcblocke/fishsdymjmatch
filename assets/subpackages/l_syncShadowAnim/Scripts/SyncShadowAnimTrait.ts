import Trait from '../../../Scripts/framework/trait/Trait';
import { AnimationUtil } from '../../../Scripts/util/AnimationUtil';
@mj.trait
@mj.class("SyncShadowAnimTrait")
export default class SyncShadowAnimTrait extends Trait {
  static traitKey = "SyncShadowAnim";
  onLoad() {
    super.onLoad.call(this);
    AnimationUtil.setSyncShadowAnimation(true);
  }
  onEnterAniBhv_playOld(t, r) {
    var e,
      o,
      n = t.ins.context;
    if (n) {
      var i = new Map(),
        l = n.getTileNodeMap();
      try {
        for (var u = __values(l), s = u.next(); !s.done; s = u.next()) {
          var p = __read(s.value, 2)[1];
          cc.isValid(p.cardNode) && cc.isValid(p.shadowNode) && i.set(p.cardNode, p.shadowNode);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          s && !s.done && (o = u.return) && o.call(u);
        } finally {
          if (e) throw e.error;
        }
      }
      AnimationUtil.setCardToShadowMap(i);
      r();
    } else r();
  }
}
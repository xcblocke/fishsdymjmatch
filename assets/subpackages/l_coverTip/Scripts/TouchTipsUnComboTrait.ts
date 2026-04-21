import Trait from '../../../Scripts/framework/trait/Trait';
import { ClickShowLockEffect } from '../../../Scripts/ClickShowLockEffect';
import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { ClickCoverLockTipEffect } from './ClickCoverLockTipEffect';
@mj.trait
@mj.class("TouchTipsUnComboTrait")
export default class TouchTipsUnComboTrait extends Trait {
  static traitKey = "TouchTipsUnCombo";
  onLoad() {
    super.onLoad.call(this);
  }
  onIptBTchEnd_runTLock(t, e) {
    var o,
      r,
      i,
      c,
      n,
      a,
      s = t.args[0],
      p = t.args[1],
      l = null === (i = null === (r = null === (o = t.ins) || void 0 === o ? void 0 : o.gameContext) || void 0 === r ? void 0 : r.tileSelector) || void 0 === i ? void 0 : i.getLockTileId(null == s ? void 0 : s.pos, p);
    if (l) {
      var u = null === (n = null === (c = t.ins) || void 0 === c ? void 0 : c.gameController) || void 0 === n ? void 0 : n.tileMapObject.getTileObject(l);
      if (!u) {
        e();
        return;
      }
      if (null === (a = t.ins) || void 0 === a ? void 0 : a.gameController.tileMapObject.isHasCover(u)) {
        this.pushHasCoverEffects(t, l);
      } else {
        this.pushClickShowLockEffect(t, l);
      }
    }
    e();
  }
  pushClickShowLockEffect(t, e) {
    var o,
      r = new ClickShowLockEffect({
        tileId: e
      });
    null === (o = t.ins) || void 0 === o || o.pushEffect(r, EInsertType.Parallel);
  }
  pushHasCoverEffects(t, e) {
    var o,
      r = new ClickCoverLockTipEffect({
        tileId: e,
        coverLockTipTrait: null
      });
    null === (o = t.ins) || void 0 === o || o.pushEffect(r, EInsertType.Parallel);
  }
}
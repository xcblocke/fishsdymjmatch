import Trait from '../../../Scripts/framework/trait/Trait';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
import { Tile2ClearEffectEffect } from '../../../Scripts/Tile2ClearEffectEffect';
@mj.trait
@mj.class("Tile2FlowerClearTrait")
export default class Tile2FlowerClearTrait extends Trait {
  static traitKey = "Tile2FlowerClear";
  onLoad() {
    super.onLoad.call(this);
  }
  @mj.traitEvent("T2FlowerClr_clearCon")
  getClearCondition() {
    return null;
  }
  onClearT2Hlp_newClrEffEff(t, e) {
    var r = this.createTile2ClearEffectEffect(t);
    if (r) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: r
      });
    } else {
      e();
    }
  }
  onClearT4Hlp_newClrEffEff(t, e) {
    var r = this.createTile2ClearEffectEffect(t);
    if (r) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: r
      });
    } else {
      e();
    }
  }
  createTile2ClearEffectEffect(t) {
    var e,
      r,
      o,
      i,
      n = this.getClearCondition();
    if (!n) return null;
    var l = null === (e = t.args) || void 0 === e ? void 0 : e[0],
      u = null === (r = t.args) || void 0 === r ? void 0 : r[1],
      f = null === (o = t.args) || void 0 === o ? void 0 : o[2];
    if (!l || !u || !f) return null;
    if (l && !CardUtil.isFlowerCardId(l.cardId)) return null;
    var p = null === (i = t.ins._gameContext) || void 0 === i ? void 0 : i.tile2SlotBarData,
      s = f.slotBarSnapshotBefore,
      d = !s.includes(l.id) && !s.includes(u.id);
    if (n.notRightClearEnable && d) return null;
    var y = n.stepCount && n.stepCount > 0,
      _ = Math.max(p.getTileStep(l.id), p.getTileStep(u.id));
    if (y && _ < n.stepCount) return null;
    var C = new Tile2ClearEffectEffect({
      tileIds: [l.id, u.id],
      cardIds: [l.cardId, u.cardId]
    });
    n.notRightClearEnable && (C.data.isRightClear = false);
    C.data.noClearStep = y ? n.stepCount : 0;
    return C;
  }
  onFlowerCS_chkFlowerEff(t, e) {
    t.ins;
    var r,
      o,
      i,
      n,
      l,
      c = null === (r = t.args) || void 0 === r ? void 0 : r[0],
      u = true;
    if (CardUtil.isFlowerCardId(null === (i = null === (o = null == c ? void 0 : c.data) || void 0 === o ? void 0 : o.cardIds) || void 0 === i ? void 0 : i[0])) {
      var f = null === (n = c.data) || void 0 === n ? void 0 : n.noClearStep,
        p = null === (l = c.data) || void 0 === l ? void 0 : l.isRightClear,
        s = null != f,
        d = null != p;
      u = d && s ? !p && f >= 0 : d ? !p : !s || f >= 0;
    } else u = false;
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: u
    });
  }
}
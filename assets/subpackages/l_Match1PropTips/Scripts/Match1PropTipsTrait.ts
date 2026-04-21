
import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { Match1PropTipsEffect } from '../../../Scripts/Match1PropTipsEffect';
import { TileMapSimulator } from '../../../Scripts/objects/TileMapSimulator';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Match1PropTipsTrait")
export default class Match1PropTipsTrait extends Trait {
  static traitKey = "Match1PropTips";
  getMessageListeners() {
    var _t = {};
    _t[EGameEvent.Effect_ClearAfter] = this.onClearAfter.bind(this);
    return _t;
  }
  onIptEnterAniFin_excute(t, e) {
    var r, i;
    e();
    var o = t.ins,
      n = null === (i = null === (r = null == o ? void 0 : o.gameContext) || void 0 === r ? void 0 : r.getTileMapObject) || void 0 === i ? void 0 : i.call(r);
    n && 1 === n.getCanMatchCardPairNum() && this.pushEffect(o, "start");
  }
  onClearAfter(t) {
    var e,
      r,
      i = null === (r = null === (e = null == t ? void 0 : t.gameContext) || void 0 === e ? void 0 : e.getTileMapObject) || void 0 === r ? void 0 : r.call(e);
    i && (1 === i.getCanMatchCardPairNum() ? this.pushEffect(t, "start") : this.pushEffect(t, "stop"));
  }
  onIptTchStart_exec(t, e) {
    e();
    this.onClearAfter(t.ins);
  }
  onIptBase_pushClrEff(t, e) {
    e();
    this.pushEffect(t.ins, "stop");
  }
  onIptSetLv_newGComp(t, e) {
    e();
    this.pushEffect(t.ins, "stop");
  }
  onIptShuffle_exec(t, e) {
    e();
    this.pushEffect(t.ins, "stop");
    this.onClearAfter(t.ins);
  }
  onIptHitTips_exec(t, e) {
    e();
    this.pushEffect(t.ins, "stop");
  }
  pushEffect(t, e) {
    var r, i;
    if (t && "function" == typeof t.pushEffect && ("stop" != e || "stop" != this._currAction)) {
      var o = "start" === e ? this.checkIsDeadAfterClear(t) : void 0,
        n = "start" === e ? Math.max(0, Number(null !== (i = null === (r = this._traitData) || void 0 === r ? void 0 : r.delayTime) && void 0 !== i ? i : 10)) : 0,
        a = new Match1PropTipsEffect({
          action: e,
          delayTime: n,
          willBeDead: o
        });
      t.pushEffect(a, EInsertType.Parallel);
      this._currAction = e;
    }
  }
  checkIsDeadAfterClear(t) {
    var e, r, i, o;
    try {
      var n = null === (r = null === (e = null == t ? void 0 : t.gameContext) || void 0 === e ? void 0 : e.getTileMapObject) || void 0 === r ? void 0 : r.call(e);
      if (!n) return;
      var a = n.getCanMatchTilesHint(),
        c = null == a ? void 0 : a[0];
      if (!c || c.length < 2) return;
      var s = null === (i = c[0]) || void 0 === i ? void 0 : i.id,
        p = null === (o = c[1]) || void 0 === o ? void 0 : o.id;
      if (!s || !p) return;
      var l = TileMapSimulator.createSim(t.gameContext),
        f = l.tileObjectMap().get(s),
        h = l.tileObjectMap().get(p);
      if (!(f && h && f.isValid && h.isValid)) return;
      f.isValid = false;
      h.isValid = false;
      l.onClear([f, h]);
      l.updateCanMatchTiles();
      return l.checkIsDead();
    } catch (t) {
      return;
    }
  }
}
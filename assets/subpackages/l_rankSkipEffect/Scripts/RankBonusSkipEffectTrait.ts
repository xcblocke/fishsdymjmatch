import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("RankBonusSkipEffectTrait")
export default class RankBonusSkipEffectTrait extends Trait {
  static traitKey = "RankBonusSkipEffect";
  onLoad() {
    super.onLoad.call(this);
  }
  onRankBonusVw_onEnterAniEnd(t, e) {
    var r, n, o;
    null === (r = t.ins) || void 0 === r || r.changeTouchState(true, true);
    null === (o = null === (n = t.ins) || void 0 === n ? void 0 : n.changeMaskOrder) || void 0 === o || o.call(n);
    e();
  }
}
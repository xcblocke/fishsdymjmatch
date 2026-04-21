import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("PropLeftTipRtShufTrait")
export default class PropLeftTipRtShufTrait extends Trait {
  static traitKey = "PropLeftTipRtShuf";
  onLoad() {
    super.onLoad.call(this);
  }
  onGameUI_onLoad(t, r) {
    var e = t.ins;
    if (e && cc.isValid(e.node)) {
      var o = e.btnHitTips,
        i = e.btnShuffle;
      if (cc.isValid(o) && cc.isValid(i)) {
        var n = o.x,
          f = i.x;
        o.x = f;
        i.x = n;
        r();
      } else r();
    } else r();
  }
}
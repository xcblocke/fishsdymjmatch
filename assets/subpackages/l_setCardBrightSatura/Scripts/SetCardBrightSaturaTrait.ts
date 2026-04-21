import Trait from '../../../Scripts/framework/trait/Trait';
import BrightSaturaContrastUniform from '../../../Scripts/BrightSaturaContrastUniform';
import { RGB2HSV, HSV2RGB } from '../../../Scripts/framework/utils/CommonUtils';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.trait
@mj.class("SetCardBrightSaturaTrait")
export default class SetCardBrightSaturaTrait extends Trait {
  _s = 0;
  _v = -3;
  static traitKey = "SetCardBrightSatura";
  onLoad() {
    var r;
    super.onLoad.call(this);
    var e = (null === (r = this._traitData) || void 0 === r ? void 0 : r.config) || {};
    this._s = "number" == typeof e.S ? e.S : this._s;
    this._v = "number" == typeof e.V ? e.V : this._v;
  }
  onBaseTileNode_crtImgCardBg(t, r) {
    var e = t.args[0];
    this.directSetHsv(e, this._v, this._s);
    r();
  }
  onBaseTileNode_crtImgCard(t, r) {
    var e = t.args[0];
    this.directSetHsv(e, this._v, this._s);
    r();
  }
  directSetHsv(t, r, e) {
    var o = t.color,
      i = RGB2HSV(o.r, o.g, o.b),
      n = i.h,
      a = i.s,
      s = i.v,
      f = GameUtils.clamp(s + 0.01 * r, 0, 1),
      p = GameUtils.clamp(a + 0.01 * e, 0, 1),
      l = HSV2RGB(n, p, f);
    t.color = new cc.Color(l.r, l.g, l.b, o.a);
  }
  ensureAndSetBrightSatura(t, r, e) {
    if (cc.isValid(t)) {
      var o = t.getComponent(BrightSaturaContrastUniform);
      o || (o = t.addComponent(BrightSaturaContrastUniform));
      if (o) {
        o.brightness = r;
        o.saturation = e;
        o.constrast = 1;
      }
    }
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("WiderDeepShadowTrait")
export default class WiderDeepShadowTrait extends Trait {
  static traitKey = "WiderDeepShadow";
  static BUNDLE_NAME = "l_widerDeepShadow";
  onCardUtil_atlasPathBundle(t, r) {
    var a;
    try {
      var i = null === (a = t.args) || void 0 === a ? void 0 : a[0];
      if ("gameplay_img_shadow_dn" === i || "gameplay_img_shadow_up" === i) {
        r({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: {
            path: "texture/" + i,
            bundleName: WiderDeepShadowTrait.BUNDLE_NAME,
            fromAtlas: false
          }
        });
        return;
      }
      r();
    } catch (t) {
      r();
    }
  }
  onMainGameCtrl_crtCardLyt(t, r) {
    try {
      var e = t.beforReturnVal;
      if (e) {
        e.shadowSize = [this.traitData.shadowWith || 219, this.traitData.shadowHeight || 263];
        e.shadowSizeUp = [this.traitData.shadowWith || 219, this.traitData.shadowHeight || 263];
      }
    } catch (t) {}
    r();
  }
}
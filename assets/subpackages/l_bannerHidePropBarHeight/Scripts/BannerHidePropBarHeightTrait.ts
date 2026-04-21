import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("BannerHidePropBarHeightTrait")
export default class BannerHidePropBarHeightTrait extends Trait {
  static traitKey = "BannerHidePropBarHeight";
  onAdMgr_showBanner(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onGameUI_onLoad(t, r) {
    var e,
      i,
      o = t.ins;
    if (o && cc.isValid(o.node)) {
      var n = o.node.getChildByName("nodeBottom");
      if (n && cc.isValid(n)) {
        var a = n.getComponent(cc.Widget);
        if (a) {
          void 0 !== (null === (e = this.traitData) || void 0 === e ? void 0 : e.propBarHeight) && (a.bottom = (null === (i = this.traitData) || void 0 === i ? void 0 : i.propBarHeight) - 85);
          r();
        } else r();
      } else r();
    } else r();
  }
}
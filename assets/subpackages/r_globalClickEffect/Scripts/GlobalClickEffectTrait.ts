import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
export enum EClickType {
  Flower = 1,
  Bubble = 2,
}
@mj.trait
@mj.class("GlobalClickEffectTrait")
export default class GlobalClickEffectTrait extends Trait {
  static traitKey = "GlobalClickEffect";
  static BUNDLE_NAME = "r_globalClickEffect";
  static CLICK_EFF_PATH = "spine/gameplay_touch";
  get clickType() {
    return null != this._traitData.clickType ? this._traitData.clickType : EClickType.Flower;
  }
  onTopTouchView_start(e, t) {
    if (this.isValentineEffActive()) t();else {
      this.addClickEffect(e.args[0]);
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
  addClickEffect(e) {
    var t = cc.Canvas.instance.node,
      i = "in_" + this.clickType,
      n = BaseSpine.create(GlobalClickEffectTrait.CLICK_EFF_PATH, i, 1, null, true, GlobalClickEffectTrait.BUNDLE_NAME);
    n.node.zIndex = 999;
    n.node.parent = t;
    var o = e.getLocation(),
      c = t.convertToNodeSpaceAR(cc.v3(o.x, o.y, 0));
    n.node.position = c;
  }
  isValentineEffActive() {
    var e,
      t,
      r = mj.getClassByName("ValentineModel");
    return null != r && (null === (t = null === (e = r.getInstance) || void 0 === e ? void 0 : e.call(r)) || void 0 === t ? void 0 : t.isEffectActive());
  }
}
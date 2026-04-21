import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("GuideDragZTrait")
export default class GuideDragZTrait extends Trait {
  static traitKey = "GuideDragZ";
  onLoad() {
    super.onLoad.call(this);
  }
  onGuideBhv_start(t, r) {
    var o;
    try {
      var i = t.ins,
        n = null === (o = null == i ? void 0 : i.context) || void 0 === o ? void 0 : o.gameView;
      if (n) {
        var a = n.guideRootNode,
          u = n.nodeDragCardRoot;
        if (a && u) {
          var c = a.getSiblingIndex(),
            f = u.getSiblingIndex();
          c > f && a.setSiblingIndex(f);
        }
      }
      r();
    } catch (t) {
      console.error("[" + GuideDragZTrait.traitKey + "] 调整引导层级失败: " + (null == t ? void 0 : t.message));
      r();
    }
  }
}
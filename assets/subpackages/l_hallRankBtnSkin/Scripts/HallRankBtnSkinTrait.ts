import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.trait
@mj.class("HallRankBtnSkinTrait")
export default class HallRankBtnSkinTrait extends Trait {
  static traitKey = "HallRankBtnSkin";
  onHallRankBLockTt_crtBtnSp(t, n) {
    var e = t.ins,
      r = t.args[0];
    if (!cc.isValid(e._rankUnopenSpine) && cc.isValid(r)) {
      var i = BaseSpine.create("spine/main_enter_locked", "init", -1, null, false, "l_hallRankBtnSkin");
      i.node.parent = r;
      i.node.position = cc.v3(0, 0, 0);
      i.node.setSiblingIndex(0);
      e._rankUnopenSpine = i;
      n({
        returnType: TraitCallbackReturnType.jump
      });
    } else n();
  }
  onRankBtn_initComp(t, n) {
    var e = t.ins;
    if (cc.isValid(e) && cc.isValid(e.node)) {
      var r = cc.find("bg/down", e.node),
        i = cc.find("bg/up", e.node),
        o = BaseSpine.refreshWithNode(r, "spine/main_enter_unlock", "l_hallRankBtnSkin");
      o.setAnimation("init_down", -1, null, false);
      o.attachNode("hook_photo", function () {
        return e._cardSprNode;
      });
      BaseSpine.refreshWithNode(i, "spine/main_enter_unlock", "l_hallRankBtnSkin").setAnimation("init_up", -1, null, false);
      n({
        returnType: TraitCallbackReturnType.jump
      });
    } else n();
  }
}
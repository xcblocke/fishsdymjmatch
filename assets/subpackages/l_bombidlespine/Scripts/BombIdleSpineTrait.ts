import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.trait
@mj.class("BombIdleSpineTrait")
export default class BombIdleSpineTrait extends Trait {
  static traitKey = "BombIdleSpine";
  onLoad() {
    super.onLoad.call(this);
  }
  getAnimType() {
    return this._traitData.animType || 1;
  }
  onBombCardNode_crtImgCard(e, t) {
    var r = e.ins,
      n = e.beforReturnVal;
    n.active = false;
    var i = n.getChildByName("BombIdleSpine");
    if (!i || !cc.isValid(i)) {
      (i = new cc.Node()).name = "BombIdleSpine";
      n.parent.addChild(i);
      i.zIndex = n.zIndex;
    }
    i.scale = 1 * r.info.tileObject.layoutScale;
    if (1 == this.getAnimType()) {
      var o = "spine/bomb1/gameplay_Lightningcard",
        a = "l_bombidlespine";
      BaseSpine.refreshWithNode(i, o, a).setAnimation("in", -1, null, false);
    } else {
      o = "spine/bomb2/gameplay_Lightningcard", a = "l_bombidlespine";
      BaseSpine.refreshWithNode(i, o, a).setAnimation("in", -1, null, false);
    }
    t({
      returnType: TraitCallbackReturnType.jump
    });
  }
}
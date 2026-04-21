import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
var o;
export var ETipAnimType = {
  NewModel: "newModel",
  Continue: "continue"
};
(o = {})[ETipAnimType.NewModel] = {
  anim: ["newMod_in", "newMod_init"],
  tip: "New Mod!",
  i18nKey: "classic_newmod"
};
o[ETipAnimType.Continue] = {
  anim: ["continue_in", "continue_init"],
  tip: "Continue!",
  i18nKey: "classic_Continue"
};
var u = o;
@mj.class
export default class HallBtnTip extends BaseUI {
  label = null;
  spine = null;
  baseSpine = null;
  inited = false;
  static prefabUrl = "prefabs/HallBtnTip";
  static bundleName = "l_classic";
  initComponent() {
    var t = this;
    if (!this.inited) {
      this.inited = true;
      this.label = this.node.getChildByName("Label");
      this.spine = this.node.getChildByName("Anim");
      this.baseSpine = this.spine.addComponent(BaseSpine);
      this.baseSpine.markReady("");
      this.baseSpine.attachNode("hook_txt", function () {
        return t.label;
      });
      this.label.setPosition(0, 30);
    }
  }
  playTipAnim(t) {
    var e = this;
    this.initComponent();
    var n = u[t];
    if (n) {
      I18NStrings.setText(this.label, n.tip, n.i18nKey);
      this.baseSpine.setAnimation(n.anim[0], 1, function () {
        e.baseSpine.setAnimation(n.anim[1], -1);
      }, false);
    }
  }
}
import Adapter from '../../../Scripts/component/Adapter';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.trait
@mj.class("ValentineResultEffTrait")
export default class ValentineResultEffTrait extends Trait {
  static traitKey = "ValentineResultEff";
  static BundleName = "r_valentineResultEff";
  onWinVw_onLoad(t, e) {
    e();
    if (this.isValentineResultEffActive()) {
      var n = t.ins;
      this.addResultEff(n);
    }
  }
  onTLWinVw_onLoad(t, e) {
    e();
    if (this.isValentineResultEffActive()) {
      var n = t.ins;
      this.addResultEff(n);
    }
  }
  onDCWinVw_onLoad(t, e) {
    e();
    if (this.isValentineResultEffActive()) {
      var n = t.ins;
      this.addResultEff(n);
    }
  }
  createNode() {
    var t = new cc.Node();
    t.name = "ValentineResultEff";
    var e = t.addComponent(cc.Widget);
    e.isAlignTop = true;
    e.isAlignBottom = false;
    e.isAlignLeft = false;
    e.isAlignRight = false;
    e.top = 0;
    return t;
  }
  addResultEff(t) {
    var e = cc.find("content", t.node),
      i = this.createNode();
    i.parent = e;
    i.setSiblingIndex(0);
    var r = BaseSpine.create("spine/result_boxBar_qrj", "in", 1, null, true, ValentineResultEffTrait.BundleName);
    r.node.parent = i;
    cc.sys.getSafeAreaRect();
    var o = Adapter.getSafeY();
    r.node.setPosition(0, o);
  }
  isValentineResultEffActive() {
    if (null != this._traitData.valentineResultEff) return this._traitData.valentineResultEff;
    var t = mj.getClassByName("ValentineModel");
    return null != t && t.getInstance().isEffectActive();
  }
}
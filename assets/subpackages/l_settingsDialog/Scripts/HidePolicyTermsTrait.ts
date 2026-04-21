import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("HidePolicyTermsTrait")
export default class HidePolicyTermsTrait extends Trait {
  HEIGHT_REDUCE = 65;
  static traitKey = "HidePolicyTerms";
  onLoad() {
    super.onLoad.call(this);
  }
  onUISetDlg_adjustPH(t, e) {
    var i = t.ins;
    if (cc.isValid(i) && cc.isValid(i.node)) {
      var o = i.node.getChildByName("content");
      if (cc.isValid(o)) {
        var n = o.getChildByName("bottom_node");
        if (cc.isValid(n)) {
          var a = n.getChildByName("privacy_policy");
          cc.isValid(a) && (a.active = false);
          var r = n.getChildByName("terms");
          cc.isValid(r) && (r.active = false);
          this.adjustBottomWidgets(o);
        }
      }
    }
    e();
  }
  adjustBottomWidgets(t) {
    var e = t.getChildByName("bottom_layout");
    if (cc.isValid(e)) {
      var i = e.getComponent(cc.Widget);
      if (cc.isValid(i) && i.isAlignBottom) {
        i.bottom -= this.HEIGHT_REDUCE;
        i.updateAlignment();
      }
    }
  }
  onUISetDlg_getDch(t, e) {
    var i = (t.beforReturnVal || 1100) - this.HEIGHT_REDUCE;
    e({
      returnType: TraitCallbackReturnType.return,
      returnVal: i
    });
  }
}
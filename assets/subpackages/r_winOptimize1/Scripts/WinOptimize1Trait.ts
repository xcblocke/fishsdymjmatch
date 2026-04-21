import Trait from '../../../Scripts/framework/trait/Trait';
import WinOptimize1View from './WinOptimize1View';
@mj.trait
@mj.class("WinOptimize1Trait")
export default class WinOptimize1Trait extends Trait {
  requireRes = ["r_winOptimize1:prefabs/WinOptimize1"];
  static traitKey = "WinOptimize1";
  onLoad() {
    super.onLoad.call(this);
  }
  onWinCtrl_initRes(t, i) {
    var e = t.ins;
    null == e || e.addPreloadRes("Prefab", this.requireRes);
    i();
  }
  onWinVw_showWinVw(t, i) {
    var e,
      n = t.ins;
    t.args[0];
    if (cc.isValid(n)) {
      var o = n.getContentNode();
      if (cc.isValid(o)) {
        var r = o.getChildByName("WinOptimize1");
        if (!cc.isValid(r)) {
          r = n.createUISync(WinOptimize1View);
          cc.isValid(r) && o.addChild(r);
        }
        cc.isValid(r) && (null === (e = r.getComponent(WinOptimize1View)) || void 0 === e || e.showUI(o));
      }
    }
    i();
  }
}
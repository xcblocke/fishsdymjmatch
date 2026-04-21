import Trait from '../../../Scripts/framework/trait/Trait';
import WinOptimizeView from './WinOptimizeView';
@mj.trait
@mj.class("WinOptimizeTrait")
export default class WinOptimizeTrait extends Trait {
  requireRes = ["r_winOptimize:prefabs/WinOptimize"];
  static traitKey = "WinOptimize";
  onLoad() {
    super.onLoad.call(this);
  }
  onWinCtrl_initRes(t, e) {
    var i = t.ins;
    null == i || i.addPreloadRes("Prefab", this.requireRes);
    e();
  }
  onWinVw_showWinVw(t, e) {
    var i,
      o = t.ins;
    t.args[0];
    if (cc.isValid(o)) {
      var n = o.getContentNode();
      if (cc.isValid(n)) {
        var r = n.getChildByName("WinOptimize");
        if (!cc.isValid(r)) {
          r = o.createUISync(WinOptimizeView);
          cc.isValid(r) && n.addChild(r);
        }
        cc.isValid(r) && (null === (i = r.getComponent(WinOptimizeView)) || void 0 === i || i.showUI(n));
      }
    }
    e();
  }
}
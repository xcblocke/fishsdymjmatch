import Trait from '../../../Scripts/framework/trait/Trait';
import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import WinFullComboView from './WinFullComboView';
@mj.trait
@mj.class("WinFullComboTrait")
export default class WinFullComboTrait extends Trait {
  requireRes = ["prefabs/ui/WinFullComboView"];
  static traitKey = "WinFullCombo";
  onLoad() {
    super.onLoad.call(this);
  }
  @mj.traitEvent("WinFCombo_isTriggered")
  isFullComboTriggered() {
    var t = NormalGameData.getInstance(),
      e = t.getHasTriggeredFullCombo(),
      o = t.getHasTriggeredRewardCombo();
    return e || o;
  }
  onWinCtrl_initRes(t, e) {
    if (this.isFullComboTriggered()) {
      var o = t.ins;
      null == o || o.addPreloadRes("Prefab", this.requireRes);
    }
    e();
  }
  onLevelBox_pbDelay(t, e) {
    this.isFullComboTriggered() && (t.args[0].delayTime += 0.33);
    e();
  }
  onWinVw_showWinVw(t, e) {
    var o = t.ins,
      i = t.args[0];
    if (cc.isValid(o) && this.isFullComboTriggered()) {
      var r = o.getContentNode();
      if (cc.isValid(r)) {
        var n = r.getChildByName("WinFullComboView");
        if (!cc.isValid(n)) {
          n = o.createUISync(WinFullComboView);
          cc.isValid(n) && r.addChild(n);
        }
        cc.isValid(n) && n.getComponent(WinFullComboView).showFullComboUI(i, r);
      }
    }
    e();
  }
}
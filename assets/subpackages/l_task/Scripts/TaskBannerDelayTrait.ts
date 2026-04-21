import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.trait
@mj.class("TaskBannerDelayTrait")
export default class TaskBannerDelayTrait extends Trait {
  DELAY_TIME = 1.7;
  FORCE_BLOCK = true;
  UNBLOCK_DELAY = 1;
  BTN_NEXT_DELAY_TIME = 2;
  static traitKey = "TaskBannerDelay";
  static nextTimeOut = -1;
  onLoad() {
    super.onLoad.call(this);
  }
  onTaskTrait_showBanner(t, e) {
    var a,
      o,
      i,
      r = this,
      n = null !== (o = null === (a = t.args[0]) || void 0 === a ? void 0 : a.hasBoxReward) && void 0 !== o && o,
      s = null !== (i = t.args[3]) && void 0 !== i && i;
    if (n) e();else {
      var l = 1000 * this.DELAY_TIME;
      setTimeout(function () {
        e();
      }, l);
      if (!GameUtils.isRatingDialogReady() && !s) {
        var p = 1000 * this.UNBLOCK_DELAY + l;
        setTimeout(function () {
          r.removeBlockLayer();
        }, p);
      }
    }
  }
  removeBlockLayer() {
    var t;
    try {
      var e = ControllerManager.getInstance().getControByName("TaskBannerController");
      if (!e) return;
      (null === (t = e.rootView) || void 0 === t ? void 0 : t.getComponent(cc.BlockInputEvents)) && e.rootView.removeComponent(cc.BlockInputEvents);
    } catch (t) {}
  }
  onTaskTrait_checkNeedBlock(t, e) {
    if (this.FORCE_BLOCK) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    } else {
      e();
    }
  }
  onWinVw_btnNextDelay(t, e) {
    var a;
    if (t.args[0]) {
      (null !== (a = t.args[0].delayTime) && void 0 !== a ? a : 0) < this.BTN_NEXT_DELAY_TIME && (t.args[0].delayTime = this.BTN_NEXT_DELAY_TIME);
    }
    e();
  }
}
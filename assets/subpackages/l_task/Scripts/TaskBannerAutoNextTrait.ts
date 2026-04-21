import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("TaskBannerAutoNextTrait")
export default class TaskBannerAutoNextTrait extends Trait {
  delayTime = 1.2;
  static traitKey = "TaskBannerAutoNext";
  onLoad() {
    var e, a;
    super.onLoad.call(this);
    this.delayTime = null !== (a = null === (e = this._traitData) || void 0 === e ? void 0 : e.delayTime) && void 0 !== a ? a : 1.2;
  }
  onTaskTrait_showBanner(t, e) {
    t.args[0] = t.args[0] || {};
    t.args[0].immediateNext = true;
    var a = t.args[1],
      o = t.args[2],
      i = t.args[3],
      r = t.ins;
    this.pushController("TaskBannerController", {
      data: o,
      isShowAction: false,
      noBlock: !r.checkNeedBlock(),
      bgStyle: {
        blackOpacity: 0
      }
    });
    var n = 1000 * this.delayTime;
    setTimeout(function () {
      if (i) {
        r.showTask(a, true);
      } else {
        a();
      }
    }, n);
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
}
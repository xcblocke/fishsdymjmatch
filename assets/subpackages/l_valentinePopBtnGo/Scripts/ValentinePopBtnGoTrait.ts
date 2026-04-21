import Trait from '../../../Scripts/framework/trait/Trait';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("ValentinePopBtnGoTrait")
export default class ValentinePopBtnGoTrait extends Trait {
  static traitKey = "ValentinePopBtnGo";
  onVltnIntroVw_goto(t, e) {
    var r = t.ins;
    ControllerManager.getInstance().pushViewByController("MainGameController", {}, function () {
      var t;
      null === (t = null == r ? void 0 : r.delegate) || void 0 === t || t.close();
    });
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onVltnActVw_goto(t, e) {
    var r = t.ins;
    ControllerManager.getInstance().pushViewByController("MainGameController", {}, function () {
      var t;
      null === (t = null == r ? void 0 : r.delegate) || void 0 === t || t.close();
    });
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("FailTrait")
export default class FailTrait extends Trait {
  static traitKey = "Fail";
  onLoad() {
    super.onLoad.call(this);
  }
  onFailBhv_start(e, t) {
    var i,
      o = e.ins,
      a = null === (i = e.args[0].data) || void 0 === i ? void 0 : i.isGM;
    if (!o || !o.context || a || o.context.getTileMapObject().checkIsDead([])) {
      var n = e.args[0];
      if (n && n.data) {
        var r = n.data.shuffleNum || 0;
        this.showFailView(r);
        t();
      } else t();
    } else t();
  }
  showFailView(e) {
    ControllerManager.getInstance().pushViewByController("FailController", {
      shuffleNum: e
    });
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import HallBadgeBtn from './HallBadgeBtn';
@mj.trait
@mj.class("BadgeTrait")
export default class BadgeTrait extends Trait {
  static traitKey = "Badge";
  onLoad() {
    super.onLoad.call(this);
  }
  onHallVw_initBtns(t, e) {
    var r;
    this.createHallButton(null === (r = t.ins) || void 0 === r ? void 0 : r.node);
    e();
  }
  onHallVw_updateUI(t, e) {
    e();
  }
  createHallButton(t) {
    cc.isValid(t) && HallBadgeBtn.createUI().then(function (e) {
      cc.isValid(e) && cc.isValid(t) && t.addChild(e);
    }).catch(function (t) {
      console.error("[" + BadgeTrait.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallBadgeBtn按钮加载失败"));
    });
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import HallSettingBtn from './HallSettingBtn';
@mj.trait
@mj.class("HallSettingTrait")
export default class HallSettingTrait extends Trait {
  static traitKey = "HallSetting";
  onLoad() {
    super.onLoad.call(this);
  }
  onHallVw_initBtns(t, e) {
    var n;
    this.createHallButton(null === (n = t.ins) || void 0 === n ? void 0 : n.node);
    e();
  }
  onHallVw_updateUI(t, e) {
    e();
  }
  createHallButton(t) {
    cc.isValid(t) && HallSettingBtn.createUI().then(function (e) {
      cc.isValid(e) && cc.isValid(t) && t.addChild(e);
    }).catch(function (t) {
      console.error("[" + HallSettingTrait.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallSettingBtn按钮加载失败"));
    });
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
@mj.trait
@mj.class("SettingsBackBtnTuning")
export default class SettingsBackBtnTuningTrait extends Trait {
  static traitKey = "SettingsBackBtnTuning";
  onLoad() {
    super.onLoad.call(this);
  }
  onUISetDlgCtrl_initDRes(t, e) {
    var r = t.ins;
    (null == r ? void 0 : r.addPreloadRes) && r.addPreloadRes("SpriteFrame", ["r_settingsBackBtnTuning:texture/com_btn_red"]);
    e();
  }
  onUISetBtnBack_onLoad(t, e) {
    var r = t.ins;
    if ((null == r ? void 0 : r.node) && cc.isValid(r.node)) {
      var n = r.node.getChildByName("bg");
      if (cc.isValid(n)) {
        BaseSprite.refreshWithNode(n, "texture/com_btn_red", false, true, "r_settingsBackBtnTuning");
        var i = n.getChildByName("btn_text");
        if (cc.isValid(i)) {
          i.color = new cc.Color().fromHEX("#fce8e8");
          I18NStrings.setText(i, "Exit", "Mahjong_InGameSettings_Exit");
        }
      }
      e();
    } else e();
  }
}
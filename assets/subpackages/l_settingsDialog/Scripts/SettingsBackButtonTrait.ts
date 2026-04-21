import Trait from '../../../Scripts/framework/trait/Trait';
import { UISettingBtnBack } from './UISettingBtnBack';
@mj.trait
@mj.class("SettingsBackButtonTrait")
export default class SettingsBackButtonTrait extends Trait {
  static traitKey = "SettingsBackButton";
  onLoad() {
    super.onLoad.call(this);
  }
  onUISetDlgCtrl_initDRes(t, e) {
    var i = t.ins;
    i && "function" == typeof i.addPreloadRes && i.addPreloadRes("Prefab", UISettingBtnBack.getUrl());
    e();
  }
  onUISetDlg_chkAddBack(t, e) {
    var i = t.beforReturnVal;
    if (i && cc.isValid(i.dialogContent) && cc.isValid(i.replayBtn)) {
      var o = i.dialogContent,
        n = i.replayBtn;
      this.addBackButton(o, n);
      e();
    } else e();
  }
  addBackButton(t) {
    UISettingBtnBack.createUI().then(function (e) {
      if (cc.isValid(t) && cc.isValid(e)) {
        var i = t.getChildByName("bottom_layout");
        if (cc.isValid(i)) {
          e.parent = i;
          e.setSiblingIndex(1);
          var o = e.height,
            n = i.getComponent(cc.Layout);
          n && (o = e.height + n.spacingY);
          t.height += o;
        }
      }
    });
  }
}
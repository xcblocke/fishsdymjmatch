import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("LangDlgCloseSettingsTrait")
export default class LangDlgCloseSettingsTrait extends Trait {
  _previousSettingsController = null;
  static traitKey = "LangDlgCloseSettings";
  onLoad() {
    super.onLoad.call(this);
  }
  onLangSelTrt_showLangSel(t, e) {
    this._previousSettingsController = null;
    var r = ControllerManager.getInstance(),
      o = r.getControByName("UISettingsDialogController");
    if (o) {
      this._previousSettingsController = "UISettingsDialogController";
      r.closeView(o);
      e();
    } else {
      var n = r.getControByName("UISettingsHomeController");
      if (n) {
        this._previousSettingsController = "UISettingsHomeController";
        r.closeView(n);
      }
      e();
    }
  }
  onUILangSelCtrl_UIDestroy(t, e) {
    if (this._previousSettingsController) {
      this.pushController(this._previousSettingsController, {});
      this._previousSettingsController = null;
    }
    e();
  }
}
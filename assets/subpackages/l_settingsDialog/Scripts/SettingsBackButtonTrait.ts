import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("SettingsBackButtonTrait")
export default class SettingsBackButtonTrait extends Trait {
  static traitKey = "SettingsBackButton";
  onLoad() {
    super.onLoad.call(this);
  }
  onUISetDlgCtrl_initDRes(t, e) {
    // Home(back-to-hall) button is disabled in hall-less flow.
    e();
  }
  onUISetDlg_chkAddBack(t, e) {
    // Do not create Home button in settings dialog.
    e();
  }
}
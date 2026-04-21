import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("SettingsHomeTrait")
export default class SettingsHomeTrait extends Trait {
  static traitKey = "SettingsHome";
  onLoad() {
    super.onLoad.call(this);
    this.setNewUserDefaultSettings();
    this.applySavedSettings();
  }
  setNewUserDefaultSettings() {
    if (!this.localData.isFirstInit) {
      this.localData.isFirstInit = 1;
      var t = UserModel.getInstance();
      if (t) {
        "boolean" != typeof t.isMusicEnabled() && t.setMusicEnabled(true);
        "boolean" != typeof t.isSoundEnabled() && t.setSoundEnabled(true);
        "boolean" != typeof t.isVibrationEnabled() && t.setVibrationEnabled(true);
      }
    }
  }
  onHallSetBtn_onClick(t, e) {
    this.showSettingsHome();
    e();
  }
  applySavedSettings() {
    mj.audioManager.setBGMMuted(!UserModel.getInstance().isMusicEnabled());
    mj.audioManager.setEffectMuted(!UserModel.getInstance().isSoundEnabled());
  }
  showSettingsHome() {
    this.pushController("UISettingsHomeController", {});
  }
  isUseSimpleUI() {
    var t;
    return !(null === (t = this._traitData) || void 0 === t || !t.useSimple);
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("SettingsDialogTrait")
export default class SettingsDialogTrait extends Trait {
  static traitKey = "SettingsDialog";
  onLoad() {
    super.onLoad.call(this);
    this.setNewUserDefaultSettings();
    this.applySavedSettings();
  }
  setNewUserDefaultSettings() {
    if (this.localData.isFirstInit) {
      mj.sdk.setGameBGMStatus(UserModel.getInstance().isMusicEnabled() ? "1" : "0");
      mj.sdk.setGameSoundStatus(UserModel.getInstance().isSoundEnabled() ? "1" : "0");
    } else {
      this.localData.isFirstInit = 1;
      UserModel.getInstance().setMusicEnabled(this._traitData.enableMusic);
      UserModel.getInstance().setSoundEnabled(this._traitData.enableSound);
      UserModel.getInstance().setVibrationEnabled(true);
      UserModel.getInstance().setLockHighlightEnabled(false);
    }
  }
  onGameUI_onBtnSettings(t, e) {
    this.showSettingsDialog();
    e();
  }
  applySavedSettings() {
    mj.audioManager.setBGMMuted(!UserModel.getInstance().isMusicEnabled());
    mj.audioManager.setEffectMuted(!UserModel.getInstance().isSoundEnabled());
  }
  showSettingsDialog() {
    this.pushController("UISettingsDialogController", {});
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("SettingsVibrateTrait")
export default class SettingsVibrateTrait extends Trait {
  static traitKey = "SettingsVibrate";
  onLoad() {
    super.onLoad.call(this);
  }
  onLoginM_showLoad(t, e) {
    if (!this.localData.isFirstInit) {
      this.localData.isFirstInit = 1;
      UserModel.getInstance().setVibrationEnabled(this._traitData.enableVibration);
    }
    e();
  }
}
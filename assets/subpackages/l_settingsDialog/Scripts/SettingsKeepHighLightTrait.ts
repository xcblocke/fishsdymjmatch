import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("SettingsKeepHighLightTrait")
export default class SettingsKeepHighLightTrait extends Trait {
  static traitKey = "SettingsKeepHighLight";
  onLoad() {
    super.onLoad.call(this);
  }
  onLoginM_showLoad(t, e) {
    if (!this.localData.isFirstInit) {
      this.localData.isFirstInit = 1;
      if ("1" == this._traitData.defaultOff) {
        this.localData.enableLockHighlight = false;
      } else {
        this.localData.enableLockHighlight = UserModel.getInstance().isLockHighlightEnabled() || false;
      }
    }
    UserModel.getInstance().setLockHighlightEnabled(this.localData.enableLockHighlight);
    e();
  }
}
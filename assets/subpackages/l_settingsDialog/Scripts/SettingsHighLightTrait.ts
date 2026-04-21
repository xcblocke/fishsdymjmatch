import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("SettingsHighLightTrait")
export default class SettingsHighLightTrait extends Trait {
  static traitKey = "SettingsHighLight";
  onLoad() {
    super.onLoad.call(this);
  }
  onLoginM_showLoad(t, e) {
    if (!this.localData.isFirstInit) {
      this.localData.isFirstInit = 1;
      UserModel.getInstance().setLockHighlightEnabled(this._traitData.enableLockHighlight);
    }
    e();
  }
}
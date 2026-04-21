import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import UserInfoManager from '../../../Scripts/gamePlay/base/user/UserInfoManager';
import { DotGameBtnClick, EGameSettingClickType } from '../../../Scripts/dot/DGameBtnClick';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import SettingsHomeTrait from './SettingsHomeTrait';
import { UISettingsHome } from './UISettingsHome';
@mj.class("UISettingsHomeController")
export default class UISettingsHomeController extends ViewController {
  viewClass = UISettingsHome;
  viewMode = viewMode.ALERT;
  @mj.traitEvent("UISetHomeCtrl_initDRes")
  initDependRes() {
    SettingsHomeTrait.getInstance().isUseSimpleUI() && (this.bundleName = "l_settingsHome");
  }
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.rootView.zIndex = 10000;
    this.refreshAvatorAndNickname();
  }
  @mj.traitEvent("UISetHomeCtrl_onUIEnable")
  onUIEnable() {
    super.onUIEnable.call(this);
  }
  refreshAvatorAndNickname() {
    var t = this,
      e = UserModel.getInstance().getAvatarId() || 1,
      i = UserModel.getInstance().getFrameId() || 1;
    UserInfoManager.getInstance().loadUserAvatarAndFrame(e, i, this).then(function (e) {
      var i = e.avatar,
        n = e.frame;
      t.viewDoAction("refreshAvator", {
        avatarSprite: i,
        frameSprite: n
      });
    });
  }
  viewDidShow(e) {
    super.viewDidShow.call(this, e);
    DotGameBtnClick.dotSetting(EGameSettingClickType.HomePageSetting_DialogDisplayed);
  }
  viewDidHide() {
    super.viewDidHide.call(this);
  }
}
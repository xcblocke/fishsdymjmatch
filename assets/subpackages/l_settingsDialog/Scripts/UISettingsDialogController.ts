import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import { DotGameBtnClick, EGameSettingClickType } from '../../../Scripts/dot/DGameBtnClick';
import { UIResetSkinBtn } from './UIResetSkinBtn';
import { UISettingsDialog } from './UISettingsDialog';
@mj.class("UISettingsDialogController")
export default class UISettingsDialogController extends ViewController {
  viewClass = UISettingsDialog;
  viewMode = viewMode.ALERT;
  @mj.traitEvent("UISetDlgCtrl_initDRes")
  initDependRes() {
    this.showResetSkinBtn() && this.addPreloadRes("Prefab", UIResetSkinBtn.getUrl());
  }
  @mj.traitEvent("UISetDlgCtrl_showRstSkin")
  showResetSkinBtn() {
    return false;
  }
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.rootView.zIndex = 10000;
  }
  viewDidShow(e) {
    super.viewDidShow.call(this, e);
    DotGameBtnClick.dotSetting(EGameSettingClickType.InGameSetting_DialogDisplayed);
  }
  viewDidHide() {
    super.viewDidHide.call(this);
  }
}
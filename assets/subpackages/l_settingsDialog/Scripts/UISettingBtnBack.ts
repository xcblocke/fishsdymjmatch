import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
import { DotGamePageShow, EPageShowType } from '../../../Scripts/dot/DGamePageShow';
@mj.class
export class UISettingBtnBack extends BaseUI {
  static prefabUrl = "prefabs/ui/settingsDialog/UISettingBtnBack";
  @mj.traitEvent("UISetBtnBack_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.initEvents();
  }
  initEvents() {
    cc.isValid(this.node) && this.OnButtonClick(this.node, this.onButtonClick.bind(this));
  }
  @mj.traitEvent("UISetBtnBack_onBtnClk")
  onButtonClick() {
    ControllerManager.getInstance().closeViewByName("UISettingsDialogController");
    var t = ControllerManager.getInstance().getTopSceneController();
    JumpManager.getInstance().jumpToHall();
    t && t.gameType === MjGameType.Normal && DotGamePageShow.dot(EPageShowType.LevelToMainPage);
  }
}
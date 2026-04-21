import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
@mj.class
export default class UIBackHallBtn extends BaseUI {
  static prefabUrl = "prefabs/hall/UIBackHallBtn";
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.node, this.onBackHallBtnClick.bind(this));
  }
  onBackHallBtnClick() {
    ControllerManager.getInstance().closeViewByName("UISettingsDialogController");
    JumpManager.getInstance().jumpToHall();
  }
}
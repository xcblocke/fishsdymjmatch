import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { DotGameBtnClick, EHomePageClickType } from '../../../Scripts/dot/DGameBtnClick';
@mj.class
export default class HallBadgeBtn extends BaseUI {
  static prefabUrl = "prefabs/badge/HallBadgeBtn";
  @mj.traitEvent("HallBadgeBtn_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.node, this.onBtnClick.bind(this));
  }
  onBtnClick() {
    DotGameBtnClick.dotHall(EHomePageClickType.ExhibitionHall);
    ControllerManager.getInstance().pushViewByController("DailyCollController", {
      isShowAction: false,
      enterType: 3
    });
  }
}
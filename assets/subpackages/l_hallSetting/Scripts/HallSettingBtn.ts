import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { DotGameBtnClick, EHomePageClickType } from '../../../Scripts/dot/DGameBtnClick';
@mj.class
export default class HallSettingBtn extends BaseUI {
  static prefabUrl = "prefabs/setting/HallSettingBtn";
  @mj.traitEvent("HallSetBtn_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.node, this.onBtnClick.bind(this));
  }
  @mj.traitEvent("HallSetBtn_onClick")
  onBtnClick() {
    DotGameBtnClick.dotHall(EHomePageClickType.Setting);
  }
}
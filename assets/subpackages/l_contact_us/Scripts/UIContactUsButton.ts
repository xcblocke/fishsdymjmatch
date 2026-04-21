import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import ContactUsButtonTrait from './ContactUsButtonTrait';
@mj.class
export default class UIContactUsButton extends BaseUI {
  static prefabUrl = "prefabs/ui/settingsDialog/UIContactUsButton";
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.node.getChildByName("btn_rect"), this.onContactUsBtnClick.bind(this));
    this.isLargeHitArea() && this.OnButtonClick(this.node, this.onContactUsBtnClick.bind(this));
  }
  onContactUsBtnClick() {
    ContactUsButtonTrait.getInstance().onContactUsBtnClick();
  }
  @mj.traitEvent("UIContactUs_isLarge")
  isLargeHitArea() {
    return false;
  }
}
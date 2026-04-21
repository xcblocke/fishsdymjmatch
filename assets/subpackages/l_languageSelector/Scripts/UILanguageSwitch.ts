import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import LanguageSelectorTrait from './LanguageSelectorTrait';
@mj.class
export class UILanguageSwitch extends BaseUI {
  _buttonNode = null;
  static prefabUrl = "prefabs/ui/settingsDialog/UILanguageSwitch";
  onLoad() {
    super.onLoad.call(this);
    this.initUI();
    this.initEvents();
  }
  initUI() {
    cc.isValid(this.node) && (this._buttonNode = this.node.getChildByName("btn_rect"));
  }
  initEvents() {
    if (this._buttonNode) {
      this.OnButtonClick(this._buttonNode, this.onButtonClick.bind(this));
      this.isLargeHitArea() && this.OnButtonClick(this.node, this.onButtonClick.bind(this));
    }
  }
  onButtonClick() {
    var t = LanguageSelectorTrait.getInstance();
    t && t.showLanguageSelector();
  }
  @mj.traitEvent("UILangSwitch_isLarge")
  isLargeHitArea() {
    return false;
  }
}
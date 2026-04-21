import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import AutoClearSwitchTrait from './AutoClearSwitchTrait';
@mj.class
export default class UIAutoClearSwitch extends BaseUI {
  _onNode = null;
  _offNode = null;
  static prefabUrl = "prefabs/ui/settingsDialog/UIAutoClearSwitch";
  onLoad() {
    super.onLoad.call(this);
    this._onNode = this.node.getChildByName("on");
    this._offNode = this.node.getChildByName("off");
    var e = this.node.getChildByName("btn_rect"),
      o = cc.isValid(e) ? e : this.node;
    this.OnButtonClick(o, this.onSwitchClick.bind(this));
    this.updateDisplay();
  }
  onSwitchClick() {
    var t = AutoClearSwitchTrait.getInstance();
    if (t) {
      t.toggleSwitch();
      this.updateDisplay();
    }
  }
  updateDisplay() {
    var t = AutoClearSwitchTrait.getInstance();
    if (t) {
      var e = t.isAutoClearEnabled();
      cc.isValid(this._onNode) && (this._onNode.active = e);
      cc.isValid(this._offNode) && (this._offNode.active = !e);
    }
  }
}
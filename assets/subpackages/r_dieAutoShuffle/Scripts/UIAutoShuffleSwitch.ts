import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import DieAutoShuffleTrait from './DieAutoShuffleTrait';
@mj.class
export default class UIAutoShuffleSwitch extends BaseUI {
  _onNode = null;
  _offNode = null;
  static prefabUrl = "prefabs/ui/settingsDialog/UIAutoShuffleSwitch";
  onLoad() {
    super.onLoad.call(this);
    this._onNode = this.node.getChildByName("on");
    this._offNode = this.node.getChildByName("off");
    var e = this.node.getChildByName("btn_rect"),
      i = cc.isValid(e) ? e : this.node;
    this.OnButtonClick(i, this.onSwitchClick.bind(this));
    this.updateDisplay();
  }
  onSwitchClick() {
    var t = DieAutoShuffleTrait.getActiveSettingsInstance();
    if (t) {
      t.toggleSwitch();
      this.updateDisplay();
    }
  }
  updateDisplay() {
    var t = DieAutoShuffleTrait.getActiveSettingsInstance();
    if (t) {
      var e = t.isAutoShuffleEnabled();
      cc.isValid(this._onNode) && (this._onNode.active = e);
      cc.isValid(this._offNode) && (this._offNode.active = !e);
    }
  }
}
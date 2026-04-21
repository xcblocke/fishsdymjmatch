import I18NAdBtnLayout from '../../../Scripts/component/I18NAdBtnLayout';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
@mj.class
export class UIResetSkinBtn extends BaseUI {
  _data = null;
  _titleLabel = null;
  static prefabUrl = "prefabs/ui/settingsDialog/UIResetSkinBtn";
  onLoad() {
    super.onLoad.call(this);
    this.initEvents();
  }
  initEvents() {
    if (cc.isValid(this.node)) {
      this.OnButtonClick(this.node, this.onButtonClick.bind(this));
      cc.find("bg/layout/btn_text", this.node).on(cc.Node.EventType.SIZE_CHANGED, this.onTextLengthChanged, this);
    }
  }
  onTextLengthChanged() {
    if (cc.isValid(this.node)) {
      var t = this.node.getChildByName("bg");
      cc.isValid(t) && I18NAdBtnLayout.setupLayout(t, "layout/btn_icon", "layout/btn_text", 505, 10);
    }
  }
  setData(t) {
    this._data = t;
  }
  onButtonClick() {
    var t;
    (null === (t = this._data) || void 0 === t ? void 0 : t.onReset) && this._data.onReset();
  }
}
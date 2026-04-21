import BaseUI from '../../../Scripts/framework/ui/BaseUI';
export var TILE4_SLOT_FULL_WARN_NODE = "tile4SlotFullWarn";
@mj.class
export default class Tile4GuideMask extends BaseUI {
  _slotZIndex = -1;
  _slotSiblingIndex = -1;
  _richNode = null;
  _delayTime = 0.5;
  _canClose = false;
  static prefabUrl = "prefabs/Tile4GuideMask";
  static bundleName = "l_tile4Guide";
  onLoad() {
    super.onLoad.call(this);
    this.OnButtonClick(this.node.getChildByName("mask"), this.onClickClose.bind(this));
    this._richNode = this.node.getChildByName("nodeTip").getChildByName("labelDesc");
    this._richNode.on(cc.Node.EventType.SIZE_CHANGED, this._updateFontSize, this);
    this._updateFontSize();
    this._delayClose();
  }
  _delayClose() {
    var e = this;
    cc.tween(this.node).delay(this._delayTime).call(function () {
      e._canClose = true;
    }).start();
  }
  _updateFontSize() {
    if (this._richNode.getContentSize().height > 100) {
      this._richNode.getComponent(cc.RichText).fontSize = 48;
    } else {
      this._richNode.getComponent(cc.RichText).fontSize = 62;
    }
  }
  setCloseCallback(e, t, i) {
    this._slotZIndex = e;
    this._slotSiblingIndex = t;
    this._onClose = i;
  }
  onClickClose() {
    if (this._canClose) {
      this.node.destroy();
      this._onClose && this._onClose(this._slotZIndex, this._slotSiblingIndex);
    }
  }
  onDestroy() {
    super.onDestroy && super.onDestroy.call(this);
    this._onClose = null;
  }
}
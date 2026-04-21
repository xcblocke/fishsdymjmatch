import UIView from '../framework/ui/UIView';
@mj.class
export default class Tile2TipsView extends UIView {
  _contentNode = null;
  _lbNode = null;
  static prefabUrl = "prefabs/ui/tile2/Tile2TipsView";
  onLoad() {
    super.onLoad.call(this);
    this._contentNode = this.node.getChildByName("content");
    this._lbNode = this._contentNode.getChildByName("string");
    this._lbNode.on(cc.Node.EventType.SIZE_CHANGED, this.updateBgSize, this);
    this.updateBgSize();
  }
  stopAndHide() {
    this.stopAnimation();
    this._contentNode.active = false;
  }
  playAnimation() {
    var e = this;
    this._contentNode.active = true;
    this._contentNode.scale = 0.5;
    this._contentNode.opacity = 0;
    cc.tween(this._contentNode).to(0.06, {
      scale: 1,
      opacity: 255
    }).delay(1.106).to(0.494, {
      scale: 0.5,
      opacity: 0
    }).call(function () {
      e.stopAndHide();
    }).start();
  }
  showTile2Tips(e) {
    null != e && (this._lbNode.getComponent(cc.Label).string = e);
    this.stopAnimation();
    this.playAnimation();
  }
  stopAnimation() {
    this._contentNode.stopAllActions();
  }
  updateBgSize() {
    if (cc.isValid(this._lbNode) && cc.isValid(this._contentNode)) {
      var e = this._lbNode.getContentSize();
      this._contentNode.setContentSize(e.width + 20, e.height + 20);
    }
  }
}
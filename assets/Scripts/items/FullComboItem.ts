import BaseUI from '../framework/ui/BaseUI';
import { createSingleColorSpriteFrame } from '../framework/utils/CommonUtils';
import GameUtils from '../core/simulator/util/GameUtils';
@mj.class
export default class FullComboItem extends BaseUI {
  _spineAnim = null;
  _maskNode = null;
  static prefabUrl = "prefabs/effects/EffectFullCombo";
  onLoad() {
    super.onLoad.call(this);
    this._initComponents();
  }
  _initComponents() {
    this.initSpine();
    this._maskNode = this.node.getChildByName("mask");
    this._maskNode;
  }
  startPlayAni(e, t, o) {
    var n = this;
    if (this._maskNode) {
      var i = this._maskNode.getComponent(cc.Sprite);
      i && (i.spriteFrame = createSingleColorSpriteFrame(new cc.Color(0, 0, 0, 0)));
      cc.tween(this._maskNode).to(this.fadeInTime(), {
        opacity: 204
      }).start();
    }
    this.playAnimation(e, this._spineAnim);
    cc.tween(this.node).delay(this.animDlyTime()).call(function () {
      null == t || t();
      n._maskNode && cc.tween(n._maskNode).to(n.fadeOutTime(), {
        opacity: 0
      }).call(function () {
        null == o || o();
        n.node.destroy();
      }).start();
    }).start();
  }
  @mj.traitEvent("FullComboItem_fadeInTime")
  fadeInTime() {
    return 0.33;
  }
  @mj.traitEvent("FullComboItem_animDlyTime")
  animDlyTime() {
    return 1.66;
  }
  @mj.traitEvent("FullComboItem_fadeOutTime")
  fadeOutTime() {
    return 0.33;
  }
  @mj.traitEvent("FullComboItem_playAni")
  playAnimation() {
    GameUtils.playSpine(this._spineAnim, "in", false, function () {});
  }
  @mj.traitEvent("FullComboItem_initSpine")
  initSpine() {
    this._spineAnim = this.node.getComponentInChildren(sp.Skeleton);
    this._spineAnim;
  }
}
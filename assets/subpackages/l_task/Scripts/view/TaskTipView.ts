import BaseUI from '../../../../Scripts/framework/ui/BaseUI';
@mj.class
export default class TaskTipView extends BaseUI {
  @mj.component("tipBg/lb_title", cc.Label)
  titleLabel: "tipBg/lb_title" = null;
  static prefabUrl = "prefabs/task/TaskTip";
  onLoad() {
    super.onLoad.call(this);
    this.reset();
  }
  reset() {
    if (cc.isValid(this.node)) {
      this.node.opacity = 0;
      this.node.scale = 1;
      this.node.active = false;
    }
  }
  showTip(t) {
    var e = this;
    cc.isValid(this.titleLabel) && (this.titleLabel.string = t || "");
    this.node.setPosition(0, 0);
    cc.Tween.stopAllByTarget(this.node);
    this.node.active = true;
    this.node.opacity = 0;
    this.node.scale = 0.5;
    cc.tween(this.node).to(0.1, {
      opacity: 255,
      scale: 1
    }, {
      easing: cc.easing.sineOut
    }).delay(1).to(0.1, {
      opacity: 0
    }, {
      easing: cc.easing.sineInOut
    }).call(function () {
      e.node.active = false;
    }).start();
  }
  hideTip() {
    var t = this;
    cc.Tween.stopAllByTarget(this.node);
    cc.isValid(this.node) && cc.tween(this.node).to(0.1, {
      opacity: 0
    }, {
      easing: cc.easing.sineInOut
    }).call(function () {
      t.node.active = false;
    }).start();
  }
}
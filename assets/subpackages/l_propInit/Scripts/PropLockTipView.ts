import UIView from '../../../Scripts/framework/ui/UIView';
const {
  ccclass,
  property
} = cc._decorator;
@mj.class
export default class PropLockTipView extends UIView {
  contentNode = null;
  tipNode = null;
  static prefabUrl = "prefabs/PropLockTip";
  onLoad() {
    super.onLoad.call(this);
    this.contentNode = this.node.getChildByName("Content");
    this.tipNode = this.contentNode.getChildByName("Tip");
  }
  doAction(t = 2.73) {
    var e = this;
    this.node.stopActionByTag(10000);
    cc.tween(this.node).tag(10000).set({
      opacity: 0,
      scale: 0.7
    }).to(0.17, {
      opacity: 255,
      scale: 1.05
    }, {
      easing: cc.easing.sineInOut
    }).to(0.1, {
      scale: 1
    }).delay(t).to(0.2, {
      opacity: 0
    }).call(function () {
      e.delegate.close();
    }).start();
  }
  showTips(t, e, r = 2.73) {
    "string" != typeof t && (t += "");
    cc.isValid(this.tipNode) && (this.tipNode.getComponent(cc.Label).string = t);
    var o = e || cc.v3(0, 0, 0);
    this.contentNode.setPosition(o);
    this.doAction(r);
  }
}
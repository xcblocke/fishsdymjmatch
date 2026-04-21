import UIView from './framework/ui/UIView';
const {
  ccclass,
  property
} = cc._decorator;
@mj.class
export default class LockTipsView extends UIView {
  _txtContent = null;
  static prefabUrl = "prefabs/daily/LockTipsItem";
  onLoad() {
    var t;
    super.onLoad.call(this);
    this._txtContent = null === (t = this.node.getChildByName("txt_content")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
  }
  doAction(e = 2.73) {
    var t = this;
    cc.tween(this.node).set({
      opacity: 0,
      scale: 0.7
    }).to(0.17, {
      opacity: 255,
      scale: 1.05
    }, {
      easing: cc.easing.sineInOut
    }).to(0.1, {
      scale: 1
    }).delay(e).to(0.2, {
      opacity: 0
    }).call(function () {
      t.delegate.close();
    }).start();
  }
  showTips(e, t, o = 2.73) {
    "string" != typeof e && (e += "");
    this._txtContent && (this._txtContent.string = e);
    var n = t || cc.v3(0, 0, 0);
    this.node.setPosition(n);
    this.doAction(o);
  }
}
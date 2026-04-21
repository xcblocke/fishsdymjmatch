import UIView from '../framework/ui/UIView';
const {
  ccclass,
  property
} = cc._decorator;
@mj.class
export default class TipsView extends UIView {
  _bg = null;
  _label1 = null;
  _label2 = null;
  _pos1 = null;
  _pos2 = null;
  static prefabUrl = "prefabs/common/Tips";
  onLoad() {
    super.onLoad.call(this);
    this._bg = this.node.getChildByName("bg1");
    this._label1 = this._bg.getChildByName("label1");
    this._label2 = this._bg.getChildByName("label2");
    this._label1.opacity = 0;
    this._label2.opacity = 0;
    this._pos1 = this._bg.position;
    this._pos2 = this._bg.position;
    this._bg.opacity = 0;
  }
  doAction(e) {
    e.stopAllActions();
    e.runAction(cc.sequence(cc.delayTime(0.1), cc.spawn(cc.fadeOut(0.5), cc.moveBy(0.5, 0, 200))));
  }
  showTips(e, t) {
    var o = this;
    this._label1.opacity = 255;
    this._label2.opacity = 0;
    this._bg.position = t || this._pos1;
    this._bg.opacity = 255;
    "string" != typeof e && (e += "");
    this._label1.getComponent(cc.Label).string = "" + e;
    this.scheduleOnce(function () {
      o.updateBgSize(o._label1);
    }, 0);
    this.doAction(this._bg);
  }
  showRichTips(e, t) {
    var o = this;
    this._label1.opacity = 0;
    this._label2.opacity = 255;
    this._bg.position = t || this._pos2;
    this._bg.opacity = 255;
    this._label2.getComponent(cc.RichText).string = "" + e;
    this.scheduleOnce(function () {
      o.updateBgSize(o._label2);
    }, 0);
    this.doAction(this._bg);
  }
  @mj.traitEvent("TipsView_updateBgSize")
  updateBgSize(e) {
    if (cc.isValid(e) && cc.isValid(this._bg)) {
      var t = e.getContentSize();
      this._bg.setContentSize(t.width + 20, t.height + 16);
    }
  }
}
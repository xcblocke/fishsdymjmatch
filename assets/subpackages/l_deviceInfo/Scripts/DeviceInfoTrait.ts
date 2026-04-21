import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DeviceInfoTrait")
export default class DeviceInfoTrait extends Trait {
  _clickCount = 0;
  _triggerClickCount = 12;
  _resetTimer = null;
  _clickTimeout = 500;
  _boundNode = null;
  static traitKey = "DeviceInfo";
  onLoad() {
    super.onLoad.call(this);
  }
  onLangSelVw_start(e, t) {
    var i = e.ins.node;
    this.bindTitleClick(i);
    t();
  }
  bindTitleClick(e) {
    if (cc.isValid(e)) {
      var t = e.getChildByName("content");
      if (cc.isValid(t)) {
        var i = t.getChildByName("top_bg");
        if (cc.isValid(i)) {
          var o = i.getChildByName("title_img");
          if (cc.isValid(o)) {
            this._clickCount = 0;
            if (null !== this._resetTimer) {
              clearTimeout(this._resetTimer);
              this._resetTimer = null;
            }
            cc.isValid(this._boundNode) && this._boundNode.off(cc.Node.EventType.TOUCH_END, this.onTitleClick, this);
            o.on(cc.Node.EventType.TOUCH_END, this.onTitleClick, this);
            this._boundNode = o;
          }
        }
      }
    }
  }
  onTitleClick() {
    var e = this;
    if (null !== this._resetTimer) {
      clearTimeout(this._resetTimer);
      this._resetTimer = null;
    }
    this._clickCount++;
    if (this._clickCount >= this._triggerClickCount) {
      this._clickCount = 0;
      this.showDeviceInfoPanel();
    } else this._resetTimer = window['setTimeout'](function () {
      e._clickCount = 0;
      e._resetTimer = null;
    }, this._clickTimeout);
  }
  showDeviceInfoPanel() {
    this.pushController("DeviceInfoPanelController", {});
  }
  isShowPlanInfo() {
    return this._traitData.isShowPlanInfo;
  }
}
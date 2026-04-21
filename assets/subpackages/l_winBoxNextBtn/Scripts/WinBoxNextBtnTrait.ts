import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("WinBoxNextBtnTrait")
export default class WinBoxNextBtnTrait extends Trait {
  _zIndex = 2;
  static traitKey = "WinBoxNextBtn";
  onLoad() {
    super.onLoad.call(this);
  }
  onWinCtrl_viewShow(t, e) {
    var n = t.ins;
    if (n && cc.isValid(n.rootView)) {
      n.viewDoAction("setBtnNextZIndex", this._zIndex);
      e();
    } else e();
  }
  onTLWinCtrl_viewShow(t, e) {
    var n = t.ins;
    if (n && cc.isValid(n.rootView)) {
      n.viewDoAction("setBtnNextZIndex", this._zIndex);
      e();
    } else e();
  }
  onTile2WinCtrl_viewShow(t, e) {
    var n = t.ins;
    if (n && cc.isValid(n.rootView)) {
      n.viewDoAction("setBtnNextZIndex", this._zIndex);
      e();
    } else e();
  }
  onBoxRwdUI_initCpts(t, e) {
    var n = t.ins;
    n && n.hideBoxBtn && cc.isValid(n.hideBoxBtn) && (n.hideBoxBtn.zIndex = -1);
    e();
  }
  onLvBoxPrgs_initCpts(t, e) {
    var n = t.ins;
    n && n.hideBoxBtn && cc.isValid(n.hideBoxBtn) && (n.hideBoxBtn.zIndex = -1);
    e();
  }
  onTLWinVw_showTLWinVw(t, e) {
    var n = t.ins;
    n && n.fullScreenBtn && cc.isValid(n.fullScreenBtn) && (n.fullScreenBtn.zIndex = -1);
    e();
  }
}
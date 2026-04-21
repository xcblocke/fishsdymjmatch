import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import AdManager from '../../../Scripts/base/ad/AdManager';
@mj.trait
@mj.class("GameLayoutAdaptTrait")
export default class GameLayoutAdaptTrait extends Trait {
  _isWideScreen = false;
  _config = {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    bottomNodeOffsetY: 0
  };
  static traitKey = "GameLayoutAdapt";
  onLoad() {
    super.onLoad.call(this);
    this._isWideScreen = this.checkIsWideScreen();
    this._config = {
      paddingLeft: this.getValueByScreenType("paddingLeft"),
      paddingRight: this.getValueByScreenType("paddingRight"),
      paddingTop: this.getValueByScreenType("paddingTop"),
      paddingBottom: this.getValueByScreenType("paddingBottom"),
      bottomNodeOffsetY: this.getValueByScreenType("bottomNodeOffsetY")
    };
  }
  checkIsWideScreen() {
    var t = cc.view.getFrameSize();
    return t.height / t.width <= cc.Canvas.instance.designResolution.height / cc.Canvas.instance.designResolution.width;
  }
  getValueByScreenType(t) {
    var e, o, n;
    if (this._isWideScreen) {
      var r = "wide" + t.charAt(0).toUpperCase() + t.slice(1),
        i = null === (e = this._traitData) || void 0 === e ? void 0 : e[r];
      if (null != i) return i;
    }
    return null !== (n = null === (o = this._traitData) || void 0 === o ? void 0 : o[t]) && void 0 !== n ? n : 0;
  }
  updateConfig(t) {
    this._config = Object.assign(Object.assign({}, this._config), t);
  }
  getConfig() {
    return Object.assign({}, this._config);
  }
  onLayoutSel_getPadLeft(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config.paddingLeft
    });
  }
  onLayoutSel_getPadRight(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config.paddingRight
    });
  }
  onLayoutSel_getPadTop(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config.paddingTop
    });
  }
  onLayoutSel_getPadBottom(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config.paddingBottom
    });
  }
  @mj.traitEvent("GmLtApt_getBtmNOffsetY")
  getBottomNodeOffsetY() {
    return this._config.bottomNodeOffsetY;
  }
  onMainGmVw_calcAreaSz(t, e) {
    var o,
      n,
      r,
      i = t.ins,
      a = this.getBottomNodeOffsetY();
    if (0 !== a && cc.isValid(i)) {
      var p = null === (n = null === (o = i._gameNode) || void 0 === o ? void 0 : o.getChildByName) || void 0 === n ? void 0 : n.call(o, "nodeBottom"),
        c = null === (r = null == p ? void 0 : p.getComponent) || void 0 === r ? void 0 : r.call(p, cc.Widget);
      if (c) {
        c.bottom = a;
        c.updateAlignment();
      }
    }
    this.isHideBottomBanner() && AdManager.getInstance().hideBanner();
    e();
  }
  onMainGmVw_getMidY(t, e) {
    if (t.args[0] && t.args[1]) {
      t.args[0].y -= this._config.paddingTop;
      t.args[1].y += this._config.paddingBottom;
      e();
    } else e();
  }
  onAdMgr_showBanner(t, e) {
    if (this.isHideBottomBanner()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      e();
    }
  }
  isHideBottomBanner() {
    var t;
    return !(null === (t = this._traitData) || void 0 === t ? void 0 : t.showBanner);
  }
}
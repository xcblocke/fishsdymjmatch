import Trait from './framework/trait/Trait';
import { TraitCallbackReturnType } from './framework/trait/TraitManager';
@mj.trait
@mj.class("AdBtnScaleTrait")
export default class AdBtnScaleTrait extends Trait {
  static traitKey = "AdBtnScale";
  get scale() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.scale) && void 0 !== e ? e : 1.1;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onBoxOpenUI_getAdBtnScale(t, e) {
    e({
      returnVal: this.scale,
      returnType: TraitCallbackReturnType.return
    });
  }
  onLvBoxVw_getAdBtnScale(t, e) {
    e({
      returnVal: this.scale,
      returnType: TraitCallbackReturnType.return
    });
  }
  onFailVw_show(t, e) {
    var r = t.ins,
      n = r.nodeAd;
    if (n && n.active) {
      var o = r.btnUse;
      this.scaleButton(o, "FailVw_show");
    }
    e();
  }
  scaleButton(t) {
    if (t && cc.isValid(t)) {
      var e = this.scale,
        r = t.getComponent(cc.Button);
      t.scale = e;
      if (null == r ? void 0 : r._originalScale) {
        r._originalScale.x = e;
        r._originalScale.y = e;
        r._transitionFinished = true;
      }
    }
  }
  onAdUnavailVw_onLoad(t, e) {
    var r = t.ins._btnRetry;
    r && cc.isValid(r) && this.scaleButton(r, "AdUnavailVw");
    e();
  }
  onWatchAdVw_onLoad(t, e) {
    var r = t.ins._btnConfirm;
    r && cc.isValid(r) && this.scaleButton(r, "WatchAdVw");
    e();
  }
  onTaskRwdVw_getAdBtnScale(t, e) {
    e({
      returnVal: this.scale,
      returnType: TraitCallbackReturnType.return
    });
  }
  onRankBoxVw_getAdBtnScale(t, e) {
    e({
      returnVal: this.scale,
      returnType: TraitCallbackReturnType.return
    });
  }
  onTLBoxVw_getAdBtnScale(t, e) {
    e({
      returnVal: this.scale,
      returnType: TraitCallbackReturnType.return
    });
  }
  onDSSimRwdVw_getAdBtnScale(t, e) {
    e({
      returnVal: this.scale,
      returnType: TraitCallbackReturnType.return
    });
  }
  onAgeRwdVw_getAdBtnScale(t, e) {
    e({
      returnVal: this.scale,
      returnType: TraitCallbackReturnType.return
    });
  }
}
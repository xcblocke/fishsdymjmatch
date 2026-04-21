import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("AdUnavailableBtnVisibleTrait")
export default class AdUnavailableBtnVisibleTrait extends Trait {
  _showCloseBtn = true;
  _showCancelBtn = true;
  static traitKey = "AdUnavailableBtnVisible";
  onLoad() {
    var e, o;
    super.onLoad.call(this);
    this._showCloseBtn = null === (e = this._traitData.showCloseBtn) || void 0 === e || e;
    this._showCancelBtn = null === (o = this._traitData.showCancelBtn) || void 0 === o || o;
  }
  onAdUnavailVw_onLoad(t, e) {
    var o = t.ins;
    if (o && o.node) {
      var r = cc.find("content_node/btn_close", o.node),
        i = cc.find("content_node/btn_cancel", o.node);
      r && (r.active = this._showCloseBtn);
      i && (i.active = this._showCancelBtn);
      e();
    } else e();
  }
}
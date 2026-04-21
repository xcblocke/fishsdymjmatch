import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ValentineFullComboTrait")
export default class ValentineFullComboTrait extends Trait {
  _currSkData = null;
  static traitKey = "ValentineFullCombo";
  getAniCfg() {
    return {
      bundleName: "r_valentineFullCombo",
      spinePath: "spine/gameplay_perfectCombo"
    };
  }
  loadSpine(t) {
    var e,
      n = this,
      r = this.getAniCfg(),
      o = r.bundleName,
      i = r.spinePath;
    this._currSkData = null;
    null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(i, sp.SkeletonData, o).then(function (t) {
      var e = Array.isArray(t) ? t[0] : t;
      n._currSkData = e || null;
    }).catch(function () {
      n._currSkData = null;
    });
  }
  onInitViewBhv_crtTls(t, e) {
    if (this.isFullComboEffectActive()) {
      this.loadSpine(t.ins.context);
      e();
    } else e();
  }
  onFullComboItem_initSpine(t, e) {
    var n = t.ins,
      r = null == n ? void 0 : n._spineAnim;
    cc.isValid(r.skeletonData) || (r.skeletonData = null);
    if (this.isFullComboEffectActive()) {
      if (cc.isValid(this._currSkData)) {
        var o = this._currSkData;
        r.skeletonData !== o && (r.skeletonData = o);
        e();
      } else e();
    } else e();
  }
  isFullComboEffectActive() {
    if (null != this._traitData.fullComboEffect) return this._traitData.fullComboEffect;
    var t = mj.getClassByName("ValentineModel");
    return null != t && t.getInstance().isEffectActive();
  }
}
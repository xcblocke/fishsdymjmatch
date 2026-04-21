import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ValentineClearEffTrait")
export default class ValentineClearEffTrait extends Trait {
  _currSkData = null;
  _isBaseClear = true;
  static traitKey = "ValentineClearEff";
  static BundleName = "r_ValentineClearEff";
  onChangeCEffTrait_bundle(e, t) {
    if (this.isClearEffActive()) {
      var r = e.args[0];
      if (r < 1 || r > 4) {
        t();
      } else {
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: this.getBundleName(r)
        });
      }
    } else t();
  }
  getBundleName(e) {
    this._isBaseClear = false;
    return "r_resValentineClear" + e;
  }
  getAniCfg() {
    return {
      bundleName: "" + ValentineClearEffTrait.BundleName,
      spinePath: "spine/gameplay_elimination_a"
    };
  }
  loadSpine(e) {
    var t,
      r = this,
      n = this.getAniCfg(),
      a = n.bundleName,
      i = n.spinePath;
    this._currSkData = null;
    null === (t = null == e ? void 0 : e.gameCtr) || void 0 === t || t.loadRes(i, sp.SkeletonData, a).then(function (e) {
      var t = Array.isArray(e) ? e[0] : e;
      r._currSkData = t || null;
    }).catch(function () {
      r._currSkData = null;
    });
  }
  onInitViewBhv_crtTls(e, t) {
    if (this.isClearEffActive()) {
      this.loadSpine(e.ins.context);
      t();
    } else t();
  }
  onClearEffBhv_changeSkd(e, t) {
    var r = e.args[0];
    cc.isValid(r.skeletonData) || (r.skeletonData = null);
    if (this._isBaseClear) {
      if (this.isClearEffActive()) {
        if (cc.isValid(this._currSkData)) {
          var n = this._currSkData;
          r.skeletonData !== n && (r.skeletonData = n);
          t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        } else t();
      } else t();
    } else t();
  }
  onChangeCEffTrait_isGTOpen(e, t) {
    if (this.isClearEffActive()) {
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    } else {
      t();
    }
  }
  isClearEffActive() {
    if (null != this._traitData.clearEffect) return this._traitData.clearEffect;
    var e = mj.getClassByName("ValentineModel");
    return null != e && e.getInstance().isEffectActive();
  }
}
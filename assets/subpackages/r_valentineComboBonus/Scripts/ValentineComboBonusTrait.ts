import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ValentineComboBonusTrait")
export default class ValentineComboBonusTrait extends Trait {
  _currSkData = null;
  static traitKey = "ValentineComboBonus";
  getAniCfg() {
    return {
      bundleName: "r_valentineComboBonus",
      spinePath: "spine/gameplay_comboBonus"
    };
  }
  loadSpine(t) {
    var e,
      n = this,
      o = this.getAniCfg(),
      r = o.bundleName,
      i = o.spinePath;
    this._currSkData = null;
    null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(i, sp.SkeletonData, r).then(function (t) {
      var e = Array.isArray(t) ? t[0] : t;
      n._currSkData = e || null;
    }).catch(function () {
      n._currSkData = null;
    });
  }
  onInitViewBhv_crtTls(t, e) {
    if (this.isComboBonusEffectActive()) {
      this.loadSpine(t.ins.context);
      e();
    } else e();
  }
  onRwdComboItem_initComp(t, e) {
    var n = t.ins,
      o = null == n ? void 0 : n._spineAnim;
    cc.isValid(o.skeletonData) || (o.skeletonData = null);
    if (this.isComboBonusEffectActive()) {
      if (cc.isValid(this._currSkData)) {
        var r = this._currSkData;
        o.skeletonData !== r && (o.skeletonData = r);
        e();
      } else e();
    } else e();
  }
  isComboBonusEffectActive() {
    if (null != this._traitData.comboBonusEffect) return this._traitData.comboBonusEffect;
    var t = mj.getClassByName("ValentineModel");
    return null != t && t.getInstance().isEffectActive();
  }
}
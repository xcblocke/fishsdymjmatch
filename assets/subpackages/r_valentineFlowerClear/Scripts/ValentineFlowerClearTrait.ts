import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ValentineFlowerClearTrait")
export default class ValentineFlowerClearTrait extends Trait {
  _currSkData = null;
  static traitKey = "ValentineFlowerClear";
  getAniCfg() {
    return {
      bundleName: "r_valentineFlowerClear",
      spinePath: "spine/gameplay_special_elimination"
    };
  }
  loadSpine(t) {
    var e,
      r = this,
      n = this.getAniCfg(),
      i = n.bundleName,
      a = n.spinePath;
    this._currSkData = null;
    null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(a, sp.SkeletonData, i).then(function (t) {
      var e = Array.isArray(t) ? t[0] : t;
      r._currSkData = e || null;
    }).catch(function () {
      r._currSkData = null;
    });
  }
  onInitViewBhv_crtTls(t, e) {
    if (this.isFlowerClearEffectActive()) {
      this.loadSpine(t.ins.context);
      e();
    } else e();
  }
  onClearEffBhv_changeSpSkd(t, e) {
    if (this.isFlowerClearEffectActive()) {
      var r = t.args[0],
        n = this._currSkData;
      n && cc.isValid(n) && r && r.skeletonData !== n && (r.skeletonData = n);
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
  isFlowerClearEffectActive() {
    if (null != this._traitData.flowerClearEffect) return this._traitData.flowerClearEffect;
    var t = mj.getClassByName("ValentineModel");
    return null != t && t.getInstance().isEffectActive();
  }
}
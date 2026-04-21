import Trait from '../../../Scripts/framework/trait/Trait';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("ValentineComboEffectTrait")
export default class ValentineComboEffectTrait extends Trait {
  _url = "prefabs/EffectCombo";
  static traitKey = "ValentineComboEffect";
  static ValentineComboEffect = "ValentineComboEffect";
  static BundleName = "r_valentineComboEffect";
  onMainGameCtrl_vwLoad(t, e) {
    e();
    this.enterGameView();
    this.isComboEffectActive() && this.loadResPools();
  }
  @mj.traitEvent("ValComboEff_enter")
  enterGameView() {}
  loadResPools() {
    var t = ControllerManager.getInstance().getControByName("MainGameController");
    t && (t.gameObjectPool.isHasPool(ValentineComboEffectTrait.ValentineComboEffect) || t.loadRes(this._url, cc.Prefab, ValentineComboEffectTrait.BundleName).then(function (e) {
      var r = Array.isArray(e) ? e[0] : e;
      r && t.gameObjectPool.createObjectPool(ValentineComboEffectTrait.ValentineComboEffect, r, 1);
    }).catch(function () {}));
  }
  onUpdComboBhv_poolName(t, e) {
    if (this.isComboEffectActive()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: ValentineComboEffectTrait.ValentineComboEffect
      });
    } else {
      e();
    }
  }
  isComboEffectActive() {
    if (null != this._traitData.comboEffect) return this._traitData.comboEffect;
    var t = mj.getClassByName("ValentineModel");
    return null != t && t.getInstance().isEffectActive();
  }
}
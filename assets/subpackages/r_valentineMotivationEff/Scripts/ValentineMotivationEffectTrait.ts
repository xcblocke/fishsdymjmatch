import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("ValentineMotivationEffectTrait")
export default class ValentineMotivationEffectTrait extends Trait {
  _url = "prefabs/EffectMotivationalWords";
  static traitKey = "ValentineMotivationEffect";
  static ValentineMotivationEffect = "ValentineMotivationEffect";
  static BundleName = "r_valentineMotivationEff";
  onMainGameCtrl_vwLoad(t, e) {
    e();
    this.isValentineMotivationEffectActive() && this.loadResPools();
  }
  loadResPools() {
    var t = ControllerManager.getInstance().getControByName("MainGameController");
    t && (t.gameObjectPool.isHasPool(ValentineMotivationEffectTrait.ValentineMotivationEffect) || t.loadRes(this._url, cc.Prefab, ValentineMotivationEffectTrait.BundleName).then(function (e) {
      var n = Array.isArray(e) ? e[0] : e;
      n && t.gameObjectPool.createObjectPool(ValentineMotivationEffectTrait.ValentineMotivationEffect, n, 1);
    }).catch(function () {}));
  }
  onMotivWdsEff_poolName(t, e) {
    if (this.isValentineMotivationEffectActive()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: ValentineMotivationEffectTrait.ValentineMotivationEffect
      });
    } else {
      e();
    }
  }
  isValentineMotivationEffectActive() {
    if (null != this._traitData.valentineMotivationEffect) return this._traitData.valentineMotivationEffect;
    var t = mj.getClassByName("ValentineModel");
    return null != t && t.getInstance().isEffectActive();
  }
}
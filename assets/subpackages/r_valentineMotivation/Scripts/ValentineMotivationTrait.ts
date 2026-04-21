import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("ValentineMotivationTrait")
export default class ValentineMotivationTrait extends Trait {
  _url = "prefabs/EffectMotivationalWordsItem";
  static traitKey = "ValentineMotivation";
  static ValentineMotivation = "ValentineMotivation";
  onMainGameCtrl_vwLoad(t, e) {
    e();
    this.isValentineMotivationActive() && this.loadResPools();
  }
  loadResPools() {
    var t = ControllerManager.getInstance().getControByName("MainGameController");
    t && (t.gameObjectPool.isHasPool(ValentineMotivationTrait.ValentineMotivation) || t.loadRes(this._url, cc.Prefab, "r_valentineMotivation").then(function (e) {
      var n = Array.isArray(e) ? e[0] : e;
      n && t.gameObjectPool.createObjectPool(ValentineMotivationTrait.ValentineMotivation, n, 1);
    }).catch(function () {}));
  }
  onMotivWordsBhv_nodeName(t, e) {
    if (this.isValentineMotivationActive()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: ValentineMotivationTrait.ValentineMotivation
      });
    } else {
      e();
    }
  }
  isValentineMotivationActive() {
    if (null != this._traitData.valentineMotivation) return this._traitData.valentineMotivation;
    var t = mj.getClassByName("ValentineModel");
    return null != t && t.getInstance().isEffectActive();
  }
}
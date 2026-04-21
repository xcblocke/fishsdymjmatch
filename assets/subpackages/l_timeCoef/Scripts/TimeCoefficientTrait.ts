import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("TimeCoefficientTrait")
export default class TimeCoefficientTrait extends ExtractTrait {
  static traitKey = "TimeCoefficient";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this._config = {
      m: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.m) && void 0 !== r ? r : 6
    };
  }
  onExtNormLv_getM(t, e) {
    if (this.checkGameMode()) {
      var r = this._config.m;
      e({
        returnType: TraitCallbackReturnType.jump,
        isBreak: true,
        returnVal: r
      });
    } else e();
  }
}
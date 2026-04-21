import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("FactorRateNTrait")
export default class FactorRateNTrait extends ExtractTrait {
  static traitKey = "FactorRateN";
  onExtNormLv_getFactorRN(t, r) {
    var e, o;
    if (this.checkGameMode()) {
      var n = null !== (o = null === (e = this._traitData) || void 0 === e ? void 0 : e.rate) && void 0 !== o ? o : 1;
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: n
      });
    } else r();
  }
}
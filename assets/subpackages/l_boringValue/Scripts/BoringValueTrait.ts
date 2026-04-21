import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("BoringValueTrait")
export default class BoringValueTrait extends ExtractTrait {
  static traitKey = "BoringValue";
  onLoad() {
    var r, e;
    super.onLoad.call(this);
    this._config = {
      patch0401: null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.patch0401) && void 0 !== e ? e : 0.35
    };
  }
  onExtNormLv_getPatch0401(t, r) {
    if (this.checkGameMode()) {
      var e = this._config.patch0401;
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: e
      });
    } else r();
  }
}
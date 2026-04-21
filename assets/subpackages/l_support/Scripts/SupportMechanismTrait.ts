import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("SupportMechanismTrait")
export default class SupportMechanismTrait extends ExtractTrait {
  static traitKey = "SupportMechanism";
  onLoad() {
    var r, e;
    super.onLoad.call(this);
    this._config = {
      patch0301: null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.patch0301) && void 0 !== e ? e : 0.7
    };
  }
  onExtNormLv_getPatch0301(t, r) {
    if (this.checkGameMode()) {
      var e = this._config.patch0301;
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: e
      });
    } else r();
  }
}
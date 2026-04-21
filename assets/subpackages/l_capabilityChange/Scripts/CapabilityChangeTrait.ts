import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("CapabilityChangeTrait")
export default class CapabilityChangeTrait extends ExtractTrait {
  static traitKey = "CapabilityChange";
  onLoad() {
    var r, e;
    super.onLoad.call(this);
    this._config = {
      logBase: null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.logBase) && void 0 !== e ? e : 1.2
    };
  }
  onExtNormLv_getLogBase(t, r) {
    if (this.checkGameMode()) {
      var e = this._config.logBase;
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: e
      });
    } else r();
  }
}
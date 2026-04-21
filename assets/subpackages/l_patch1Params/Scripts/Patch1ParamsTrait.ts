import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Patch1ParamsTrait")
export default class Patch1ParamsTrait extends ExtractTrait {
  static traitKey = "Patch1Params";
  onLoad() {
    var r, e;
    super.onLoad.call(this);
    this._config = {
      patch0101: null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.patch0101) && void 0 !== e ? e : -1
    };
  }
  onExtNormLv_getPatch0101(t, r) {
    if (this.checkGameMode()) {
      var e = this._config.patch0101;
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: e
      });
    } else r();
  }
}
import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Patch2ParamsTrait")
export default class Patch2ParamsTrait extends ExtractTrait {
  static traitKey = "Patch2Params";
  onLoad() {
    var r, e, o, a;
    super.onLoad.call(this);
    this._config = {
      patch0201: null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.patch0201) && void 0 !== e ? e : 0.5,
      patch0202: null !== (a = null === (o = this._traitData) || void 0 === o ? void 0 : o.patch0202) && void 0 !== a ? a : 5
    };
  }
  onExtNormLv_getPatch0201(t, r) {
    if (this.checkGameMode()) {
      var e = this._config.patch0201;
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: e
      });
    } else r();
  }
  onExtNormLv_getPatch0202(t, r) {
    if (this.checkGameMode()) {
      var e = this._config.patch0202;
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: e
      });
    } else r();
  }
}
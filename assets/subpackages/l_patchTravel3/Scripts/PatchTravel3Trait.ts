import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("PatchTravel3Trait")
export default class PatchTravel3Trait extends ExtractTrait {
  static traitKey = "PatchTravel3";
  onLoad() {
    var r, e;
    super.onLoad.call(this);
    this._config = {
      isOpen: null === (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.isOpen) || void 0 === e || e
    };
  }
  onExtNormLv_isOpenPatch3(t, r) {
    if (this.checkGameMode()) {
      var e = this._config.isOpen;
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: e
      });
    } else r();
  }
}
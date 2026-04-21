import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("DuPatchTrait")
export default class DuPatchTrait extends ExtractTrait {
  static traitKey = "DuPatch";
  onExtNormLv_getInitDu(t, r) {
    if (this.checkGameMode()) {
      var e = this.getInitialDu();
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: e
      });
    } else r();
  }
  getInitialDu() {
    var t, r;
    return null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.initialDu) && void 0 !== r ? r : 400;
  }
}
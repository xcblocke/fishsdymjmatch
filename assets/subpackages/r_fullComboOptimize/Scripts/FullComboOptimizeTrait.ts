import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("FullComboOptimizeTrait")
export default class FullComboOptimizeTrait extends Trait {
  static traitKey = "FullComboOptimize";
  onLoad() {
    super.onLoad.call(this);
  }
  onChgFullCombo_getAniCfg(t, r) {
    var e,
      o = null === (e = this._traitData) || void 0 === e ? void 0 : e.configs;
    if (o) {
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: {
          bundleName: o.comboBundleName || "r_fullCombo_2",
          spinePath: o.comboSpinePath || "spine/gameplay_perfectCombo"
        }
      });
    } else {
      r();
    }
  }
}
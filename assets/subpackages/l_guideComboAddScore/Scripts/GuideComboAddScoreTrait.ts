import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("GuideComboAddScoreTrait")
export default class GuideComboAddScoreTrait extends Trait {
  static traitKey = "GuideComboAddScore";
  onLoad() {
    super.onLoad.call(this);
  }
  onScoreMod_set1stComboScr(t, r) {
    r({
      returnVal: t.args[0],
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
}
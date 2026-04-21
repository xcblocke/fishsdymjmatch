import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("TravelModeSupportTrait")
export default class TravelModeSupportTrait extends Trait {
  static traitKey = "TravelModeSupport";
  onExtractTool_isSupCapUp(t, r) {
    if (t.args[0] !== MjGameType.Travel) {
      r();
    } else {
      r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: true
      });
    }
  }
}
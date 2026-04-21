import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("MinDeathRateTrait")
export default class MinDeathRateTrait extends ExtractTrait {
  static traitKey = "MinDeathRate";
  onLoad() {
    super.onLoad.call(this);
  }
  onExtNormLv_getDeathFail(t, e) {
    if (this.checkGameMode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: -4
      });
    } else {
      e();
    }
  }
  onExtNormLv_getDeathPass(t, e) {
    if (this.checkGameMode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: 1
      });
    } else {
      e();
    }
  }
}
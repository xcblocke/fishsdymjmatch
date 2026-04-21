import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("GetMaxNoDieLevelTrait")
export default class GetMaxNoDieLevelTrait extends ExtractTrait {
  static traitKey = "GetMaxNoDieLevel";
  onLoad() {
    super.onLoad.call(this);
  }
  onExtNormLv_getMaxNDieLevel(t, e) {
    if (this.checkGameMode()) {
      var r = this._traitData.maxNoDieLevel;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: r
      });
    } else e();
  }
}
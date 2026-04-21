import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("LogValueLimitTrait")
export default class LogValueLimitTrait extends ExtractTrait {
  static traitKey = "LogValueLimit";
  onLoad() {
    super.onLoad.call(this);
  }
  onExtDimension_getLogLimit(t, e) {
    if (this.checkGameMode()) {
      var r = this._traitData.logLimit;
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: r
      });
    } else e();
  }
}
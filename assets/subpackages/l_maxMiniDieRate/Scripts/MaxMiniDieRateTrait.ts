import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("MaxMiniDieRateTrait")
export default class MaxMiniDieRateTrait extends ExtractTrait {
  static traitKey = "MaxMiniDieRate";
  onLoad() {
    super.onLoad.call(this);
    this.localData.hasNon01Occurred || (this.localData.hasNon01Occurred = false);
    void 0 === this.localData.cycleIndex && (this.localData.cycleIndex = 0);
  }
  onExtNormLv_getDeathLv(t, e) {
    if (this.checkGameMode()) {
      var r = t.beforReturnVal;
      if (r && "string" == typeof r) {
        if (!this.localData.hasNon01Occurred && "01" !== r) {
          this.localData.hasNon01Occurred = true;
          this.localData.cycleIndex = 0;
        }
        if (this.localData.hasNon01Occurred) {
          var a = this.localData.cycleIndex % 2 == 0 ? "04" : "01";
          this.localData.cycleIndex = (this.localData.cycleIndex + 1) % 2;
          e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: a
          });
        } else e();
      } else e();
    } else e();
  }
}
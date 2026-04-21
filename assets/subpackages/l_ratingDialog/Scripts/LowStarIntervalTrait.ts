import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("LowStarIntervalTrait")
export default class LowStarIntervalTrait extends Trait {
  static traitKey = "LowStarInterval";
  onLoad() {
    var e, o;
    super.onLoad.call(this);
    this._config = {
      submitIndex: null !== (e = this._traitData.submitIndex) && void 0 !== e ? e : 1,
      intervalDays: null !== (o = this._traitData.intervalDays) && void 0 !== o ? o : 4
    };
    void 0 === this.localData.shouldApplyInterval && (this.localData.shouldApplyInterval = false);
  }
  onRatingDlg_onUserRating(t, e) {
    this.localData.totalShowCount++;
    var o = t.args[0];
    o >= 1 && o <= 3 && this.localData.totalShowCount === this._config.submitIndex && (this.localData.shouldApplyInterval = true);
    e();
  }
  onRatingDlg_getLowStarIntv(t, e) {
    if (this.localData.shouldApplyInterval) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this._config.intervalDays
      });
    } else {
      e();
    }
  }
}
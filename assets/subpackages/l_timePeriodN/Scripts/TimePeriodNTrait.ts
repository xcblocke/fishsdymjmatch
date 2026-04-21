import DateManager, { ETimePeriod } from '../../../Scripts/core/simulator/util/DateManager';
import ExtractTrait from '../../../Scripts/ExtractTrait';
@mj.trait
@mj.class("TimePeriodNTrait")
export default class TimePeriodNTrait extends ExtractTrait {
  static traitKey = "TimePeriodN";
  onLoad() {
    super.onLoad.call(this);
    var e = this._traitData.valueArr || [0.8, 1];
    this._config = {
      valueArr: e
    };
  }
  onExtNormLv_getAdNengRU(t, e) {
    if (this.checkGameMode()) {
      if (null != t.args[0]) {
        var r;
        r = DateManager.getInstance().getCurrentTimePeriod() === ETimePeriod.Day ? this._config.valueArr[0] : this._config.valueArr[1];
        var o = t.args.length >= 2 ? t.args[1] : null;
        if (o && Array.isArray(o)) {
          o.push(r);
          e();
        } else {
          t.args[1] = [r];
          e();
        }
      } else e();
    } else e();
  }
}
import DateManager from '../../../Scripts/core/simulator/util/DateManager';
import ExtractTrait from '../../../Scripts/ExtractTrait';
@mj.trait
@mj.class("WeekdayPeriodTrait")
export default class WeekdayPeriodTrait extends ExtractTrait {
  _config = [];
  static traitKey = "WeekdayPeriod";
  onLoad() {
    super.onLoad.call(this);
    this._config = this._traitData.configVal;
  }
  onExtNormLv_getAdjRU(t, e) {
    if (this.checkGameMode()) {
      if (null != t.args[0]) {
        var r = DateManager.getInstance().getCurrentDayOfWeek(),
          o = this._config[r],
          i = t.args.length >= 2 ? t.args[1] : null;
        if (i && Array.isArray(i)) {
          i.push(o);
          e();
        } else {
          t.args[1] = [o];
          e();
        }
      } else e();
    } else e();
  }
}
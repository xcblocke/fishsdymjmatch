import { EDDAFilter } from '../../../Scripts/types/IDynamicCurve';
import { ddaStrategy } from '../../../Scripts/FactoryDDA';
import { DDAStrategyBase } from '../../../Scripts/DDAStrategyBase';
@ddaStrategy(1)
export class DDAStrategy2 extends DDAStrategyBase {
  name = "DDA2";
  desc = "之前连续x关都不能首次挑战通关【用了洗牌/有过restart】,则本关默认选通关率=1的关";
  filter(t) {
    var e = this.getStrategyParam().x,
      r = void 0 === e ? 3 : e,
      o = t.extractModel.getLastLevelRecord(r);
    if (o.length < r) return [EDDAFilter.NONE, null];
    for (var n = 0; n < o.length; n++) {
      var i = o[n];
      if (i.replay <= 0 && i.shuffle <= 0) return [EDDAFilter.NONE, null];
    }
    var c = t.levels.filter(function (t) {
      return 1 === t.rateSuccess;
    });
    if (c.length <= 0) return [EDDAFilter.NONE, null];
    var u = c[Math.floor(Math.random() * c.length)];
    return [EDDAFilter.LEVEL, u];
  }
}
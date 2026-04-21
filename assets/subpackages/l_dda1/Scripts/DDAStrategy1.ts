import { EDDAFilter } from '../../../Scripts/types/IDynamicCurve';
import { ddaStrategy } from '../../../Scripts/FactoryDDA';
import { DDAStrategyBase } from '../../../Scripts/DDAStrategyBase';
@ddaStrategy(1)
export class DDAStrategy1 extends DDAStrategyBase {
  name = "DDA1";
  desc = "上关连续死了>=x次，则本关默认选通关率=1的关。";
  filter(t) {
    var e = this.getStrategyParam().x,
      r = void 0 === e ? 3 : e,
      o = t.extractModel.getLastLevelRecord();
    if (o.length <= 0) return [EDDAFilter.NONE, null];
    if (o[0].replay < r) return [EDDAFilter.NONE, null];
    var n = t.levels.filter(function (t) {
      return 1 === t.rateSuccess;
    });
    if (n.length <= 0) return [EDDAFilter.NONE, null];
    var i = n[Math.floor(Math.random() * n.length)];
    return [EDDAFilter.LEVEL, i];
  }
}
import { EDDAFilter } from '../../../Scripts/types/IDynamicCurve';
import { getPercentileKey } from '../../../Scripts/types/Common';
import { DDAStrategyBase } from '../../../Scripts/DDAStrategyBase';
import { ddaStrategy } from '../../../Scripts/FactoryDDA';
@ddaStrategy(1)
export class DDAStrategy4 extends DDAStrategyBase {
  name = "DDA4";
  desc = "之前连续x关>=y秒通关，则本关只从通关时长处于最低z分位的关卡里挑。";
  filter(t) {
    if (t.levels.length <= 0) return [EDDAFilter.NONE, null];
    var e = this.getStrategyParam(),
      r = e.x,
      o = void 0 === r ? 3 : r,
      n = e.y,
      i = void 0 === n ? 60 : n,
      s = e.z,
      u = void 0 === s ? 10 : s,
      p = t.extractModel.getLastLevelRecord(o);
    if (p.length < o) return [EDDAFilter.NONE, null];
    for (var f = 0; f < p.length; f++) {
      if (p[f].passTime < i) return [EDDAFilter.NONE, null];
    }
    var l = getPercentileKey("predictTime"),
      y = u / 100,
      d = t.levels.filter(function (t) {
        return t[l] <= y;
      });
    if (d.length <= 0) return [EDDAFilter.NONE, null];
    var D = d[Math.floor(Math.random() * d.length)];
    return [EDDAFilter.LEVEL, D];
  }
}
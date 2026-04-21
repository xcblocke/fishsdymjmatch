import { EDDAFilter } from '../../../Scripts/types/IDynamicCurve';
import { DDAStrategyBase } from '../../../Scripts/DDAStrategyBase';
import { ddaStrategy } from '../../../Scripts/FactoryDDA';
import { getCustomDataKey, getPercentileKey } from '../../../Scripts/types/Common';
@ddaStrategy(1)
export class DDAStrategy3 extends DDAStrategyBase {
  name = "DDA3";
  desc = "每累计出现x次关卡时长<y秒失败，则本关只从时长处于最高{z}分位的关里挑。";
  filter(t) {
    if (t.levels.length <= 0) return [EDDAFilter.NONE, null];
    var e = this.getStrategyParam(),
      r = e.x,
      o = void 0 === r ? 3 : r,
      n = e.y,
      i = void 0 === n ? 240 : n,
      c = e.z,
      s = void 0 === c ? 10 : c,
      p = t.extractModel,
      f = getCustomDataKey(this.name, [o, i, s]);
    if (p.getCachedData(f, 0) < o) return [EDDAFilter.NONE, null];
    var y = getPercentileKey("predictTime"),
      l = 1 - s / 100,
      d = t.levels.filter(function (t) {
        return t[y] >= l;
      });
    if (d.length <= 0) return [EDDAFilter.NONE, null];
    var D = d[Math.floor(Math.random() * d.length)];
    return [EDDAFilter.LEVEL, D];
  }
}
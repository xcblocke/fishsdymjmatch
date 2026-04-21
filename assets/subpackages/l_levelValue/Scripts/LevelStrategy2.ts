import { getPercentileKey } from '../../../Scripts/types/Common';
import { levelStrategy } from '../../../Scripts/FactoryLevelValue';
import { LevelStrategyBase } from '../../../Scripts/LevelStrategyBase';
@levelStrategy("Level2")
export class LevelStrategy2 extends LevelStrategyBase {
  name = "Level2";
  desc = "关卡值=x*Percentile(期望时长)+y*Percentile(理论通关率)";
  calculateLevelValue(e) {
    var t = getPercentileKey("predictTime"),
      r = getPercentileKey("rateSuccess"),
      o = this.getStrategyParam(),
      n = o.x,
      i = void 0 === n ? 0.5 : n,
      a = o.y,
      l = void 0 === a ? 0.5 : a;
    return e.levels.map(function (e) {
      var o, n;
      return i * (null !== (o = e[t]) && void 0 !== o ? o : 1) + l * (null !== (n = e[r]) && void 0 !== n ? n : 1);
    });
  }
}
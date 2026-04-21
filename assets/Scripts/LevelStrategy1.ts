import { getPercentileKey } from './types/Common';
import { levelStrategy } from './FactoryLevelValue';
import { LevelStrategyBase } from './LevelStrategyBase';
@levelStrategy("Level1")
export class LevelStrategy1 extends LevelStrategyBase {
  name = "Level1";
  desc = "关卡值 = 指定参数在题库中的百分位数";
  calculateLevelValue(e) {
    var t = this.getStrategyParam().x,
      o = void 0 === t ? "predictTime" : t,
      n = getPercentileKey(o);
    return e.levels.map(function (e) {
      var t;
      return null !== (t = e[n]) && void 0 !== t ? t : 1;
    });
  }
}
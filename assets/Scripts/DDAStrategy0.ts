import { EDDAFilter } from './types/IDynamicCurve';
import { ddaStrategy } from './FactoryDDA';
import { DDAStrategyBase } from './DDAStrategyBase';
@ddaStrategy(999999)
export class DDAStrategy0 extends DDAStrategyBase {
  name = "DDA0";
  desc = "最近x关不重复";
  filter(e) {
    var t = this.getStrategyParam().x,
      o = void 0 === t ? 100 : t,
      n = e.extractModel.getLastLevelRecord(o).map(function (e) {
        return e.levelData.index;
      });
    if (n.length <= 0) return [EDDAFilter.NONE, null];
    e.levels = e.levels.filter(function (e) {
      return !n.includes(e.index);
    });
    return [EDDAFilter.FILTER, null];
  }
}
import { LevelValueKey } from '../../../Scripts/types/Common';
import { mappingStrategy } from '../../../Scripts/FactoryMapping';
import { MappingStrategyBase } from '../../../Scripts/MappingStrategyBase';
@mappingStrategy("Mapping3")
export class MappingStrategy3 extends MappingStrategyBase {
  name = "Mapping3";
  desc = "受限随机策略";
  mapping(t) {
    var e,
      r = t.levels,
      n = t.capability;
    if (!r || 0 === r.length) return null;
    for (var o = this.getStrategyParam(), i = o.x, p = void 0 === i ? 0.1 : i, c = o.y, s = void 0 === c ? 0.1 : c, u = Math.max(0, n - p), l = Math.min(1, n + s), y = [], g = 0; g < r.length; g++) {
      var f = null !== (e = r[g][LevelValueKey]) && void 0 !== e ? e : 0;
      f >= u && f <= l && y.push(r[g]);
    }
    return 0 === y.length ? null : y[Math.floor(Math.random() * y.length)];
  }
}
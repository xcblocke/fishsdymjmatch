import { LevelValueKey } from './types/Common';
import { mappingStrategy } from './FactoryMapping';
import { MappingStrategyBase } from './MappingStrategyBase';
@mappingStrategy("Mapping1")
export class MappingStrategy1 extends MappingStrategyBase {
  name = "Mapping1";
  desc = "高精确度匹配策略";
  mapping(e) {
    var t,
      o,
      n = e.levels,
      i = e.capability;
    if (!n || 0 === n.length) return null;
    for (var r = n[0], l = Math.abs((null !== (t = n[0][LevelValueKey]) && void 0 !== t ? t : 0) - i), s = 1; s < n.length; s++) {
      var c = null !== (o = n[s][LevelValueKey]) && void 0 !== o ? o : 0,
        u = Math.abs(c - i);
      if (u < l) {
        l = u;
        r = n[s];
      }
    }
    return r;
  }
}
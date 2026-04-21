import { LevelValueKey } from '../../../Scripts/types/Common';
import { mappingStrategy } from '../../../Scripts/FactoryMapping';
import { MappingStrategyBase } from '../../../Scripts/MappingStrategyBase';
@mappingStrategy("Mapping2")
export class MappingStrategy2 extends MappingStrategyBase {
  name = "Mapping2";
  desc = "高精确度反向匹配策略";
  mapping(t) {
    var e,
      r,
      n = t.levels,
      o = t.capability;
    if (!n || 0 === n.length) return null;
    for (var i = n[0], p = Math.abs((null !== (e = n[0][LevelValueKey]) && void 0 !== e ? e : 0) + o - 1), c = 1; c < n.length; c++) {
      var s = null !== (r = n[c][LevelValueKey]) && void 0 !== r ? r : 0,
        u = Math.abs(s + o - 1);
      if (u < p) {
        p = u;
        i = n[c];
      }
    }
    return i;
  }
}
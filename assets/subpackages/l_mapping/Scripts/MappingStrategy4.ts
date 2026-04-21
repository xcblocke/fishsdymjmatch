import { LevelValueKey } from '../../../Scripts/types/Common';
import { mappingStrategy } from '../../../Scripts/FactoryMapping';
import { MappingStrategyBase } from '../../../Scripts/MappingStrategyBase';
@mappingStrategy("Mapping4")
export class MappingStrategy4 extends MappingStrategyBase {
  name = "Mapping4";
  desc = "无视能力值随机策略";
  mapping(t) {
    var e,
      r,
      n = t.levels;
    if (!n || 0 === n.length) return null;
    var o = t.extractModel.getLastLevelRecord();
    if (o.length <= 0) return null;
    for (var i = o[0], p = this.getStrategyParam(), c = p.x, s = void 0 === c ? 0.25 : c, u = p.y, l = void 0 === u ? 0.25 : u, y = null !== (e = i.levelData[LevelValueKey]) && void 0 !== e ? e : 0, g = y - s, f = y + l, v = [], d = 0; d < n.length; d++) {
      var h = null !== (r = n[d][LevelValueKey]) && void 0 !== r ? r : 0;
      (h < g && h >= 0 || h > f && h <= 1) && v.push(n[d]);
    }
    return 0 === v.length ? null : v[Math.floor(Math.random() * v.length)];
  }
}
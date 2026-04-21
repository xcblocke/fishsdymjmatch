import { mappingStrategy } from './FactoryMapping';
import { MappingStrategyBase } from './MappingStrategyBase';
@mappingStrategy("Mapping0")
export class MappingStrategy0 extends MappingStrategyBase {
  name = "Mapping0";
  desc = "兜底随机策略";
  mapping(e) {
    var t = e.levels;
    return t && 0 !== t.length ? t[Math.floor(Math.random() * t.length)] : null;
  }
}
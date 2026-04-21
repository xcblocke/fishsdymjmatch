import { EDCColor } from './types/Common';
export class MappingStrategyBase {
  name = "MappingStrategyBase";
  desc = "映射策略基类";
  param = {};
  setStrategyParam(e) {
    this.param = e;
  }
  getStrategyParam() {
    return this.param;
  }
  logInfo(e, t = EDCColor.LAYER_MAPPING) {}
}
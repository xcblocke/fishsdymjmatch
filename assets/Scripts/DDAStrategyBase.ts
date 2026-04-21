import { EDCColor } from './types/Common';
export class DDAStrategyBase {
  priority = 0;
  param = {};
  setPriority(e) {
    this.priority = e;
  }
  getPriority() {
    return this.priority;
  }
  setStrategyParam(e) {
    this.param = e;
  }
  getStrategyParam() {
    return this.param;
  }
  logInfo(e, t = EDCColor.LAYER_DDA) {}
}
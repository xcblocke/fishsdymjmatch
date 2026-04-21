import { BaseCoreObject } from '../../BaseCoreObject';
export default class DuoxiaoModifier extends BaseCoreObject {
  modifyDuoxiaoClearCount(e) {
    var t = this._context.getDuoxiaoClearCount() + e;
    this._context.setDuoxiaoClearCount(t);
  }
  resetDuoxiaoClearCount() {
    this._context.setDuoxiaoClearCount(0);
  }
  decreaseDuoxiaoClearCount() {
    this._context.setDuoxiaoClearCount(this._context.getDuoxiaoClearCount() - 1);
  }
}
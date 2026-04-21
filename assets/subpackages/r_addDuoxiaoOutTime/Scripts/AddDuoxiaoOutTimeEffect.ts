import BaseEffect from '../../../Scripts/BaseEffect';
export var ADD_DUOXIAO_OUT_TIME_BEHAVIOR = "addDuoxiaoOutTime";
export class AddDuoxiaoOutTimeEffect extends BaseEffect {
  _name = ADD_DUOXIAO_OUT_TIME_BEHAVIOR;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
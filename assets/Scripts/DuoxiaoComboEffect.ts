import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class DuoxiaoComboEffect extends BaseEffect {
  _name = BehaviorsMapping.DuoxiaoCombo;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
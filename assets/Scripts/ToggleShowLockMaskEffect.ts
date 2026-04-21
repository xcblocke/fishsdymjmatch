import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class ToggleShowLockMaskEffect extends BaseEffect {
  _name = BehaviorsMapping.ToggleShowLockMask;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
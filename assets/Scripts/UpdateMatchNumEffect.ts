import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class UpdateMatchNumEffect extends BaseEffect {
  _name = BehaviorsMapping.UpdateMatchNum;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class BlockInputEffect extends BaseEffect {
  _name = BehaviorsMapping.BlockInput;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
    void 0 === this._data.block && (this._data.block = true);
  }
}
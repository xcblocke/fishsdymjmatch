import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class Tile2RestartEffect extends BaseEffect {
  _name = BehaviorsMapping.Tile2Restart;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
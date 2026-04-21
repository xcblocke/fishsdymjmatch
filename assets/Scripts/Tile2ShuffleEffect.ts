import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class Tile2ShuffleEffect extends BaseEffect {
  _name = BehaviorsMapping.Tile2Shuffle;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
import BaseEffect from './BaseEffect';
import { BehaviorsMapping } from './mapping/BehaviorsMapping';
export class Tile2MagnetEffect extends BaseEffect {
  _name = BehaviorsMapping.Tile2Magnet;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
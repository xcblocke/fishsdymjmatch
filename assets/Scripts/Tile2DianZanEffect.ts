import BaseEffect from './BaseEffect';
import { BehaviorsMapping } from './mapping/BehaviorsMapping';
export class Tile2DianZanEffect extends BaseEffect {
  _name = BehaviorsMapping.Tile2DianZan;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
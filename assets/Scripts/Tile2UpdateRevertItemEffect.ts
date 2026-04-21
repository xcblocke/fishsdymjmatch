import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class Tile2UpdateRevertItemEffect extends BaseEffect {
  _name = BehaviorsMapping.Tile2UpdateRevertItem;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
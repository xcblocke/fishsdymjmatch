import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class Tile2ScreenEdgeEffect extends BaseEffect {
  _name = BehaviorsMapping.Tile2ScreenEdgeEffect;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
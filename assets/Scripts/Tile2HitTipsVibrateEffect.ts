import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class Tile2HitTipsVibrateEffect extends BaseEffect {
  _name = BehaviorsMapping.Tile2HitTipsVibrate;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
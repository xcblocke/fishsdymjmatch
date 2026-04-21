import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class UnSelectEffect extends BaseEffect {
  _name = BehaviorsMapping.UnSelect;
  _data = null;
  get tileId() {
    return this._data.tileId;
  }
  get withAnimation() {
    return this._data.withAnimation;
  }
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
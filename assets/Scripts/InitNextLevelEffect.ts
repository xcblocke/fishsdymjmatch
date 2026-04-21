import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class InitNextLevelEffect extends BaseEffect {
  _name = BehaviorsMapping.InitNextLevel;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
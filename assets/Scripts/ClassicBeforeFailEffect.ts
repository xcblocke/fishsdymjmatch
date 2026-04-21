import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class ClassicBeforeFailEffect extends BaseEffect {
  _name = BehaviorsMapping.ClassicBeforeFail;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
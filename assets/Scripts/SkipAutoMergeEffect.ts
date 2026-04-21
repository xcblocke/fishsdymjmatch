import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class SkipAutoMergeEffect extends BaseEffect {
  _name = BehaviorsMapping.SkipAutoMerge;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
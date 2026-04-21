import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class UpdateCollectTargetEffect extends BaseEffect {
  _name = BehaviorsMapping.UpdateCollectTarget;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
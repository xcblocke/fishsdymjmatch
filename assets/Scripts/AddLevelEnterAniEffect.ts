import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class AddLevelEnterAniEffect extends BaseEffect {
  _name = BehaviorsMapping.AddLevelEnterAni;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
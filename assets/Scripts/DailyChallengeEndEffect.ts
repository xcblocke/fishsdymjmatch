import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class DailyChallengeEndEffect extends BaseEffect {
  _name = BehaviorsMapping.DailyChallengeEnd;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
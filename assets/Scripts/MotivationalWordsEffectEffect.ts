import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class MotivationalWordsEffectEffect extends BaseEffect {
  _name = BehaviorsMapping.MotivationalWordsEffect;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import BaseEffect from '../../../Scripts/BaseEffect';
export class BreakBestScoreEffect extends BaseEffect {
  _name = BehaviorsMapping.BreakBestScore;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
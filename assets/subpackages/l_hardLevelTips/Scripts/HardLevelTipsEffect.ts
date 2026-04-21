import BaseEffect from '../../../Scripts/BaseEffect';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
export class HardLevelTipsEffect extends BaseEffect {
  _name = BehaviorsMapping.HardLevelTips;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
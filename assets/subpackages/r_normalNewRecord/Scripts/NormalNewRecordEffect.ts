import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import BaseEffect from '../../../Scripts/BaseEffect';
export class NormalNewRecordEffect extends BaseEffect {
  _name = BehaviorsMapping.NormalNewRecord;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
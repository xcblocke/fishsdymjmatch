import BaseEffect from '../../../Scripts/BaseEffect';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
export class GuideEffect extends BaseEffect {
  _name = BehaviorsMapping.Guide;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(e) {
    super(e);
    this._data = e;
  }
}
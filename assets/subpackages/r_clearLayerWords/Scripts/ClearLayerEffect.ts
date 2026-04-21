import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import BaseEffect from '../../../Scripts/BaseEffect';
export class ClearLayerEffect extends BaseEffect {
  _name = BehaviorsMapping.ClearLayer;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(r) {
    super(r);
    this._data = r;
  }
}
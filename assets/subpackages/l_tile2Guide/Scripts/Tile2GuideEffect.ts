import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import BaseEffect from '../../../Scripts/BaseEffect';
export class Tile2GuideEffect extends BaseEffect {
  _name = BehaviorsMapping.Tile2Guide;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
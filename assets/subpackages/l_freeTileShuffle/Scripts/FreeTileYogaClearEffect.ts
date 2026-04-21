import BaseEffect from '../../../Scripts/BaseEffect';
export var FreeTileYogaClearMapping = "freeTileYogaClear";
export class FreeTileYogaClearEffect extends BaseEffect {
  _name = FreeTileYogaClearMapping;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
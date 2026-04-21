import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("SelectScaleTrait")
export default class SelectScaleTrait extends Trait {
  _selectScale = 1.2;
  static traitKey = "SelectScaleTrait";
  getSelectScale() {
    return this._selectScale;
  }
  onLoad() {
    super.onLoad.call(this);
    this._selectScale = this._traitData.selectScale || 1.2;
  }
  onTileNodeObj_getScale(t, e) {
    t.ins;
    t.args[0] = this._selectScale;
    e({
      returnType: TraitCallbackReturnType.jump,
      returnVal: this._selectScale
    });
  }
}
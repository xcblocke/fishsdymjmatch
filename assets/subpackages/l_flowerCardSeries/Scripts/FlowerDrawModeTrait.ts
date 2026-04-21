import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { EFlowerDrawMode } from './FlowerCardSeriesTrait';
@mj.trait
@mj.class("FlowerDrawModeTrait")
export default class FlowerDrawModeTrait extends Trait {
  _mode = EFlowerDrawMode.Sequence;
  static traitKey = "FlowerDrawMode";
  onLoad() {
    super.onLoad.call(this);
    this._mode = this._traitData.mode || EFlowerDrawMode.Sequence;
  }
  onFlowerCS_drawMode(e, t) {
    t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._mode
    });
  }
}
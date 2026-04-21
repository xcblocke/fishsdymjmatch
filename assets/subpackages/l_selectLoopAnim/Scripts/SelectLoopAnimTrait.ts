import Trait from '../../../Scripts/framework/trait/Trait';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
@mj.trait
@mj.class("SelectLoopAnimTrait")
export default class SelectLoopAnimTrait extends Trait {
  _config = {
    moveUpOffset: 8,
    upDuration: 0.66,
    downDuration: 0.66
  };
  static traitKey = "SelectLoopAnim";
  onLoad() {
    super.onLoad.call(this);
  }
  getMessageListeners() {
    var _t = {};
    _t[EGameEvent.TileNode_SelectedFinish] = this.onTileNodeSelectedFinish.bind(this);
    _t[EGameEvent.TileNode_BeginUnSelected] = this.onTileNodeBeginUnSelected.bind(this);
    return _t;
  }
  onTileNodeSelectedFinish(t) {
    t && cc.isValid(t.cardNode) && t.playSelectLoopAnimation(this._config);
  }
  onTileNodeBeginUnSelected(t) {
    t && cc.isValid(t.cardNode) && t.stopSelectLoopAnimation();
  }
}
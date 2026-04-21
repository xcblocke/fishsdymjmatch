import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2DZUnlockRollCardTrait")
export default class Tile2DZUnlockRollCardTrait extends Trait {
  static traitKey = "Tile2DZUnlockRollCard";
  onLoad() {
    super.onLoad.call(this);
  }
  onT2DianZCheck_isChkDZState(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: true
    });
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2MagnetTimeDownTrait")
export default class Tile2MagnetTimeDownTrait extends Trait {
  static traitKey = "Tile2MagnetTimeDown";
  onLoad() {
    super.onLoad.call(this);
  }
  onTile2MagnetBhv_downTime(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.traitData.downTime || 5
    });
  }
  onTile2Magnet_slotLimit(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.traitData.slotBarLimit || 3
    });
  }
}
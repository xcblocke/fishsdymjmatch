import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2MagnetPopupTrait")
export default class Tile2MagnetPopupTrait extends Trait {
  static traitKey = "Tile2MagnetPopup";
  onLoad() {
    super.onLoad.call(this);
  }
  onTile2Magnet_popCnt(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.traitData.popupCount || 2
    });
  }
}
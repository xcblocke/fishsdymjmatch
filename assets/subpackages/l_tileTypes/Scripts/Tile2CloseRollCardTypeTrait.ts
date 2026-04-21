import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2CloseRollCardTypeTrait")
export default class Tile2CloseRollCardTypeTrait extends Trait {
  static traitKey = "Tile2CloseRollCardType";
  onLoad() {
    super.onLoad.call(this);
  }
  onT2GameCtrl_getTileTypes(t, e) {
    t.beforReturnVal && (t.beforReturnVal = t.beforReturnVal.replace(new RegExp(ETileType.RollCard, "g"), ""));
    e({
      returnVal: t.beforReturnVal
    });
  }
}
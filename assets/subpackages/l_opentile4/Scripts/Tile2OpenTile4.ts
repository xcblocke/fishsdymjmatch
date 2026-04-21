import { ETile2SlotType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2OpenTile4")
export default class Tile2OpenTile4 extends Trait {
  static traitKey = "Tile2OpenTile4";
  onT2GameCtrl_gT2SlotT(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: ETile2SlotType.Slot4
    });
  }
}
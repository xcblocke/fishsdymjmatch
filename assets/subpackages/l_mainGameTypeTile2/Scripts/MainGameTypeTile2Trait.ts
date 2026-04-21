import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("MainGameTypeTile2Trait")
export default class MainGameTypeTile2Trait extends Trait {
  static traitKey = "MainGameTypeTile2";
  onLoad() {
    super.onLoad.call(this);
  }
  onUserModel_getMainGameType(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: MjGameType.Tile2Normal
    });
  }
}
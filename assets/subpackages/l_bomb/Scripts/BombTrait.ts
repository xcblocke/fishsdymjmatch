import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("BombTrait")
export default class BombTrait extends Trait {
  static traitKey = "Bomb";
  onLoad() {
    super.onLoad.call(this);
  }
  onMainGameCtrl_getTile(t, e) {
    t.args[0].getLevelId() >= this._traitData.level && this._traitData.level > 0 && (t.beforReturnVal = t.beforReturnVal + "," + ETileType.Bomb);
    e({
      returnVal: t.beforReturnVal
    });
  }
}
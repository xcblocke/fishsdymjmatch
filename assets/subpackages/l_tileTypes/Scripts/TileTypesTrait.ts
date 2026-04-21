import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("TileTypesTrait")
export default class TileTypesTrait extends Trait {
  static traitKey = "TileTypes";
  onLoad() {
    super.onLoad.call(this);
    this.registerTile2Event();
  }
  registerTile2Event() {
    this.registerEvent([{
      event: "T2GameCtrl_getTileTypes",
      type: 2
    }]);
  }
  onMainGameCtrl_getTile(t, e) {
    t.args[0].getLevelId() >= this._traitData.level && (t.beforReturnVal = t.beforReturnVal + "," + ETileType.RollCard);
    e({
      returnVal: t.beforReturnVal
    });
  }
  onT2GameCtrl_getTileTypes(t, e) {
    t.args[0].getLevelId() >= this._traitData.level && (t.beforReturnVal = t.beforReturnVal + "," + ETileType.RollCard);
    e({
      returnVal: t.beforReturnVal
    });
  }
}
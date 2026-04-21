import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DaxiaoDailyTrait")
export default class DaxiaoDailyTrait extends Trait {
  static traitKey = "DaxiaoDaily";
  onLoad() {
    super.onLoad.call(this);
  }
  onDailyChCtrl_getTileTypes(t, r) {
    t.beforReturnVal = t.beforReturnVal + "," + ETileType.DaxiaoCard;
    r({
      returnVal: t.beforReturnVal
    });
  }
  onDaxiaoCardType_getCount(t, r) {
    r({
      returnVal: this._traitData.count || 0,
      returnType: TraitCallbackReturnType.jump,
      isBreak: true
    });
  }
  onDaxiaoCardType_cenRange(t, r) {
    r({
      returnVal: this._traitData.cenRange || [3, 3],
      isBreak: true
    });
  }
  onDaxiaoCardType_cInCenter(t, r) {
    r({
      returnVal: this._traitData.cInCenter || false,
      isBreak: true
    });
  }
}
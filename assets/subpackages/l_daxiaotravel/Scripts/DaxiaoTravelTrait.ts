import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DaxiaoTravelTrait")
export default class DaxiaoTravelTrait extends Trait {
  static traitKey = "DaxiaoTravel";
  onLoad() {
    super.onLoad.call(this);
  }
  onTravelGaCtl_gTileTypes(t, e) {
    t.beforReturnVal = t.beforReturnVal + "," + ETileType.DaxiaoCard;
    e({
      returnVal: t.beforReturnVal
    });
  }
  onDaxiaoCardType_getCount(t, e) {
    e({
      returnVal: this._traitData.count || 0,
      returnType: TraitCallbackReturnType.jump,
      isBreak: true
    });
  }
  onIptInCollectCd_cTileTypes(t, e) {
    var r = t.beforReturnVal || "";
    e({
      returnVal: r = r.replace(ETileType.DaxiaoCard, "")
    });
  }
  onDaxiaoCardType_cenRange(t, e) {
    e({
      returnVal: this._traitData.cenRange || [3, 3],
      isBreak: true
    });
  }
  onDaxiaoCardType_cInCenter(t, e) {
    e({
      returnVal: this._traitData.cInCenter || false,
      isBreak: true
    });
  }
}
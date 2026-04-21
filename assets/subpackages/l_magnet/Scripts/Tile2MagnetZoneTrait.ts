import Trait from '../../../Scripts/framework/trait/Trait';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
@mj.trait
@mj.class("Tile2MagnetZoneTrait")
export default class Tile2MagnetZoneTrait extends Trait {
  static traitKey = "Tile2MagnetZone";
  get country() {
    return LoginModel.getInstance().countryIso || "";
  }
  onLoad() {
    super.onLoad.call(this);
  }
  getCountryConfig() {
    var t;
    return null === (t = this._traitData) || void 0 === t ? void 0 : t.countries;
  }
  isPreconMet() {
    var t = this.country;
    return this.getCountryConfig().includes(t);
  }
  onT2MagSlotStep_preMet(t, e) {
    t.beforReturnVal && (t.beforReturnVal = this.isPreconMet());
    e({
      returnVal: t.beforReturnVal
    });
  }
  onT2MagSlotStep_breakCon(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: false
    });
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
@mj.trait
@mj.class("InterAdStartLvCountryTrait")
export default class InterAdStartLvCountryTrait extends Trait {
  _startLevel = -1;
  static traitKey = "InterAdStartLvCountry";
  get country() {
    return LoginModel.getInstance().country || "";
  }
  onLoad() {
    super.onLoad.call(this);
    this._startLevel = this._resolveStartLevel();
  }
  _resolveStartLevel() {
    var t,
      r = null === (t = this._traitData) || void 0 === t ? void 0 : t.countryLevels;
    if (!r || "object" != typeof r) return -1;
    var e = this.country.toUpperCase();
    return void 0 !== r[e] ? r[e] : void 0 !== r.default ? r.default : -1;
  }
  onInterAdStart_getStartLv(t, r) {
    if (this._startLevel <= 0) {
      r();
    } else {
      r({
        returnVal: this._startLevel,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
}
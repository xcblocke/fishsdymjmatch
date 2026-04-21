import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Tile2UsAdReviveLimitTrait")
export default class Tile2UsAdReviveLimitTrait extends Trait {
  _maxAdReviveUs = 2;
  static traitKey = "Tile2UsAdReviveLimit";
  onLoad() {
    var e;
    super.onLoad.call(this);
    var r = null !== (e = this._traitData) && void 0 !== e ? e : {};
    void 0 !== r.maxAdReviveUs && (this._maxAdReviveUs = r.maxAdReviveUs);
  }
  _isUS() {
    var t;
    return "US" === (null !== (t = LoginModel.getInstance().countryIso) && void 0 !== t ? t : "").toUpperCase();
  }
  onT2FailAdRevi_getMaxCnt(t, e) {
    if (this._isUS()) {
      e({
        returnType: TraitCallbackReturnType.jump,
        returnVal: this._maxAdReviveUs
      });
    } else {
      e();
    }
  }
}
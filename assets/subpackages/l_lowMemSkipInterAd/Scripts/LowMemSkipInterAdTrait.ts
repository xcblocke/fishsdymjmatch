import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("LowMemSkipInterAdTrait")
export default class LowMemSkipInterAdTrait extends Trait {
  static traitKey = "LowMemSkipInterAd";
  get ramLimit() {
    var t, e;
    return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.memory) && void 0 !== e ? e : 4096;
  }
  get probability() {
    var t, e;
    return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.probability) && void 0 !== e ? e : 5;
  }
  get curDeviceRam() {
    var t;
    return null === (t = LoginModel.getInstance().deviceInfo) || void 0 === t ? void 0 : t.all_memory;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onAdMgr_chkInterAd(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var r = this.curDeviceRam;
      if (void 0 !== r && r <= this.ramLimit) {
        if (100 * Math.random() < this.probability) {
          e({
            returnVal: false,
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
          return;
        }
      }
      e();
    } else e();
  }
}
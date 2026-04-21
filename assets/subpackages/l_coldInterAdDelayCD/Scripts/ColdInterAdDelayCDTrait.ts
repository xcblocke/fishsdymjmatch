import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("ColdInterAdDelayCDTrait")
export default class ColdInterAdDelayCDTrait extends Trait {
  _coldStartFreeTime = 70000;
  static traitKey = "ColdInterAdDelayCD";
  onLoad() {
    var e;
    super.onLoad.call(this);
    void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.coldStartFreeTime) && (this._coldStartFreeTime = 1000 * this._traitData.coldStartFreeTime);
  }
  onAdMgr_chkInterAd(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var r = UserModel.getInstance().getAppStartTime(),
        o = Date.now() - r;
      if (o < this._coldStartFreeTime) {
        Math.ceil((this._coldStartFreeTime - o) / 1000);
        e({
          returnVal: false,
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      } else e();
    } else e();
  }
}
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("BeforeInterAdGapTimeTrait")
export default class BeforeInterAdGapTimeTrait extends Trait {
  _gapTime = 86400000;
  _shouldSkipInterAd = false;
  static traitKey = "BeforeInterAdGapTime";
  onLoad() {
    var e;
    super.onLoad.call(this);
    void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.gapTimeHours) && (this._gapTime = 3600000 * this._traitData.gapTimeHours);
    var r = UserModel.getInstance(),
      i = this.localData.lastColdStartTime || 0,
      o = r.getAppStartTime();
    if (i > 0 && (0 === i ? 0 : o - i) > this._gapTime) {
      this._shouldSkipInterAd = true;
    } else {
      this._shouldSkipInterAd = false;
    }
    this.localData.lastColdStartTime = o;
    this.localData = this.localData;
  }
  onAdMgr_chkInterAd(t, e) {
    var r;
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      var i = null === (r = t.args) || void 0 === r ? void 0 : r[3];
      if ("beforeInterAd" === (null == i ? void 0 : i.adTimeType) && this._shouldSkipInterAd) {
        e({
          returnVal: false,
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      } else {
        e();
      }
    } else e();
  }
}
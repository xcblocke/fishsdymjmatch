import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("DailyInterAdCDDecreaseTrait")
export default class DailyInterAdCDDecreaseTrait extends Trait {
  _cdTimeList = [90000, 75000, 60000];
  static traitKey = "DailyInterAdCDDecrease";
  onLoad() {
    var e;
    super.onLoad.call(this);
    (null === (e = this._traitData) || void 0 === e ? void 0 : e.cdTimeList) && Array.isArray(this._traitData.cdTimeList) && (this._cdTimeList = this._traitData.cdTimeList.map(function (t) {
      return 1000 * t;
    }));
    if (!this.localData.date) {
      this.localData.date = "";
      this.localData.playCount = 0;
    }
    this.checkAndResetDaily();
  }
  checkAndResetDaily() {
    var t = this.getTodayDate();
    if (this.localData.date !== t) {
      this.localData.date = t;
      this.localData.playCount = 0;
      this.localData = this.localData;
    }
  }
  getTodayDate() {
    var t = new Date();
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  getCurrentCDTime() {
    var t = this.localData.playCount || 0;
    return t >= this._cdTimeList.length ? this._cdTimeList[this._cdTimeList.length - 1] : this._cdTimeList[t];
  }
  onInterAdCD_getCDTime(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.checkAndResetDaily();
      e({
        returnVal: this.getCurrentCDTime(),
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
  onAdMgr_interAdClose(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.localData.playCount = (this.localData.playCount || 0) + 1;
      this.getCurrentCDTime();
      e();
    } else e();
  }
}
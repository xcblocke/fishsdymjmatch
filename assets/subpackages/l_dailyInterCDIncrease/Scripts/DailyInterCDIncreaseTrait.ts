import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("DailyInterCDIncreaseTrait")
export default class DailyInterCDIncreaseTrait extends Trait {
  static traitKey = "DailyInterCDIncrease";
  onLoad() {
    var e, r, i, o, a, n;
    super.onLoad.call(this);
    this._config = {
      threshold: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.threshold) && void 0 !== r ? r : 15,
      baseCDTime: null !== (o = null === (i = this._traitData) || void 0 === i ? void 0 : i.baseCDTime) && void 0 !== o ? o : 180,
      resetHour: null !== (n = null === (a = this._traitData) || void 0 === a ? void 0 : a.resetHour) && void 0 !== n ? n : 5
    };
    this.isLocalEmpty(this.localData.cycleStartTime) && (this.localData.cycleStartTime = 0);
    this.isLocalEmpty(this.localData.gameEndCount) && (this.localData.gameEndCount = 0);
    this.checkAndResetCycle();
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  getLogicCycleStart(t) {
    var e = new Date(t);
    e.getHours() < this._config.resetHour && e.setDate(e.getDate() - 1);
    e.setHours(this._config.resetHour, 0, 0, 0);
    return e.getTime();
  }
  checkAndResetCycle() {
    var t = Date.now(),
      e = this.getLogicCycleStart(t);
    if (e !== this.localData.cycleStartTime) {
      this.localData.cycleStartTime = e;
      this.localData.gameEndCount = 0;
      return true;
    }
    return false;
  }
  isThresholdReached() {
    return this.localData.gameEndCount >= this._config.threshold;
  }
  getCurrentCDTime() {
    return 1000 * (this._config.baseCDTime + this.localData.gameEndCount);
  }
  onDGameEnd_adjust(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.checkAndResetCycle();
      this.localData.gameEndCount += 1;
      this.isThresholdReached() && this.getCurrentCDTime();
      e();
    } else e();
  }
  onInterAdCD_getCDTime(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.checkAndResetCycle();
      if (this.isThresholdReached()) {
        e({
          returnVal: this.getCurrentCDTime(),
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      } else e();
    } else e();
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("FirstGameTypeSkipInterTrait")
export default class FirstGameTypeSkipInterTrait extends Trait {
  _mode = "coldStart";
  _skipCount = 1;
  _coldStartUsageCount = null;
  static traitKey = "FirstGameTypeSkipInter";
  constructor() {
    super(arguments);
    var _e = {};
    _e[MjGameType.Normal] = 0;
    _e[MjGameType.DailyChallenge] = 0;
    _e[MjGameType.Travel] = 0;
    _e[MjGameType.Tile2Normal] = 0;
    this._coldStartUsageCount = _e;
  }
  onLoad() {
    var a, r;
    super.onLoad.call(this);
    this._mode = (null === (a = this._traitData) || void 0 === a ? void 0 : a.mode) || "coldStart";
    this._skipCount = (null === (r = this._traitData) || void 0 === r ? void 0 : r.skipCount) || 1;
    var _e = {};
    _e[MjGameType.Normal] = 0;
    _e[MjGameType.DailyChallenge] = 0;
    _e[MjGameType.Travel] = 0;
    _e[MjGameType.Tile2Normal] = 0;
    if ("coldStart" === this._mode) this._coldStartUsageCount = _e;else {
      this.initDailyUsageData();
      this.checkAndResetDaily();
      this.getDailyUsageData();
    }
  }
  initDailyUsageData() {
    var t;
    this.localData.dailyUsageData || (this.localData.dailyUsageData = {
      lastResetDate: this.getTodayDateString(),
      usageCount: (t = {}, t[MjGameType.Normal] = 0, t[MjGameType.DailyChallenge] = 0, t[MjGameType.Travel] = 0, t[MjGameType.Tile2Normal] = 0, t)
    });
  }
  getDailyUsageData() {
    return this.localData.dailyUsageData;
  }
  saveDailyUsageData(t) {
    this.localData.dailyUsageData = t;
  }
  checkAndResetDaily() {
    var e = this.getTodayDateString(),
      a = this.getDailyUsageData();
    var _t = {};
    _t[MjGameType.Normal] = 0;
    _t[MjGameType.DailyChallenge] = 0;
    _t[MjGameType.Travel] = 0;
    _t[MjGameType.Tile2Normal] = 0;
    if (a.lastResetDate !== e) {
      a.lastResetDate = e;
      a.usageCount = _t;
      this.saveDailyUsageData(a);
    }
  }
  getTodayDateString() {
    var t = new Date();
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  getCurrentGameType() {
    return UserModel.getInstance().getCurrentGameType();
  }
  shouldSkipInterAd(t) {
    if (t !== MjGameType.Normal && t !== MjGameType.DailyChallenge && t !== MjGameType.Travel && t !== MjGameType.Tile2Normal) return false;
    if ("coldStart" === this._mode) return this._coldStartUsageCount[t] < this._skipCount;
    this.checkAndResetDaily();
    return this.getDailyUsageData().usageCount[t] < this._skipCount;
  }
  markAsUsed(t) {
    if ("coldStart" === this._mode) this._coldStartUsageCount[t]++;else {
      var e = this.getDailyUsageData();
      e.usageCount[t]++;
      this.saveDailyUsageData(e);
    }
  }
  onAdMgr_chkInterAd(t, e) {
    var a = this.getCurrentGameType();
    if (this.shouldSkipInterAd(a)) {
      this.markAsUsed(a);
      e({
        returnVal: false,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
}
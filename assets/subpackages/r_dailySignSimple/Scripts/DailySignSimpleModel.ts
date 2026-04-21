import Model from '../../../Scripts/framework/data/Model';
export enum DailySignSimpleState {
  Uncompleted = 0,
  Ready = 1,
  Claimed = 2,
}
@mj.class("DailySignSimpleModel")
export default class DailySignSimpleModel extends Model {
  _rewardsConfig = [];
  static DAY_COUNT = 7;
  static ITEM_ID = {
    SHUFFLE: 1001,
    HINT: 1002
  };
  constructor() {
    super();
    this.initialize();
  }
  setRewardsConfig(t) {
    if (t && t.length === DailySignSimpleModel.DAY_COUNT) {
      this._rewardsConfig = t;
    } else {
      this._rewardsConfig = this.getDefaultRewardsConfig();
    }
  }
  getRewardForDay(t) {
    if (t < 0 || t >= DailySignSimpleModel.DAY_COUNT) return {
      hintCount: 0,
      shuffleCount: 0
    };
    0 === this._rewardsConfig.length && (this._rewardsConfig = this.getDefaultRewardsConfig());
    return this.convertRewardItems(this._rewardsConfig[t]);
  }
  convertRewardItems(t) {
    var e = 0,
      o = 0;
    t && t.length > 0 && t.forEach(function (t) {
      if (t.itemId === DailySignSimpleModel.ITEM_ID.HINT) {
        e += t.count;
      } else {
        t.itemId === DailySignSimpleModel.ITEM_ID.SHUFFLE && (o += t.count);
      }
    });
    return {
      hintCount: e,
      shuffleCount: o
    };
  }
  getDefaultRewardsConfig() {
    var t = DailySignSimpleModel.ITEM_ID.SHUFFLE,
      e = DailySignSimpleModel.ITEM_ID.HINT;
    return [[{
      itemId: t,
      count: 1
    }, {
      itemId: e,
      count: 1
    }], [{
      itemId: t,
      count: 1
    }, {
      itemId: e,
      count: 1
    }], [{
      itemId: t,
      count: 2
    }, {
      itemId: e,
      count: 2
    }], [{
      itemId: t,
      count: 2
    }, {
      itemId: e,
      count: 2
    }], [{
      itemId: t,
      count: 3
    }, {
      itemId: e,
      count: 3
    }], [{
      itemId: t,
      count: 3
    }, {
      itemId: e,
      count: 3
    }], [{
      itemId: t,
      count: 5
    }, {
      itemId: e,
      count: 5
    }]];
  }
  initialize() {
    this.isLocalEmpty(this.localData.currentDay) && (this.localData.currentDay = 0);
    this.isLocalEmpty(this.localData.accumulatedDays) && (this.localData.accumulatedDays = 0);
    this.isLocalEmpty(this.localData.lastLoginDate) && (this.localData.lastLoginDate = "");
    this.isLocalEmpty(this.localData.lastClaimDate) && (this.localData.lastClaimDate = "");
    this.isLocalEmpty(this.localData.todayShown) && (this.localData.todayShown = false);
    this.isLocalEmpty(this.localData.lastShownDate) && (this.localData.lastShownDate = "");
    this.isLocalEmpty(this.localData.cycleStartDate) && (this.localData.cycleStartDate = "");
    this.ensureDays();
    this.updateAccumulatedDays();
    this.isLocalEmpty(this.localData.lastShownProgress) && (this.localData.lastShownProgress = this.localData.accumulatedDays);
    var t = this.getTodayDateString();
    this.localData.lastShownDate !== t && (this.localData.todayShown = false);
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  updateAccumulatedDays() {
    var t = this.getTodayDateString();
    if (this.localData.lastLoginDate !== t) {
      this.localData.lastLoginDate && !this.isConsecutiveDay(this.localData.lastLoginDate, t) && this.resetCycle();
      this.localData.accumulatedDays >= DailySignSimpleModel.DAY_COUNT && this.resetCycle();
      this.localData.accumulatedDays += 1;
      this.localData.lastLoginDate = t;
    }
  }
  ensureDays() {
    if (!this.localData.days || this.localData.days.length !== DailySignSimpleModel.DAY_COUNT) {
      this.localData.days = [];
      for (var t = 0; t < DailySignSimpleModel.DAY_COUNT; t++) this.localData.days.push({
        dayIndex: t,
        claimed: false,
        claimTime: 0
      });
    }
  }
  getTodayDateString() {
    var t = new Date();
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  getDaysBetween(t, e) {
    var i = new Date(t).getTime(),
      o = new Date(e).getTime();
    return Math.floor((o - i) / 86400000);
  }
  isConsecutiveDay(t, e) {
    return 1 === this.getDaysBetween(t, e);
  }
  resetCycle() {
    this.localData.currentDay = 0;
    this.localData.accumulatedDays = 0;
    this.localData.lastLoginDate = "";
    this.localData.lastClaimDate = "";
    this.localData.cycleStartDate = this.getTodayDateString();
    this.localData.todayShown = false;
    this.localData.lastShownDate = "";
    this.localData.lastShownProgress = 0;
    for (var t = 0; t < DailySignSimpleModel.DAY_COUNT; t++) {
      this.localData.days[t].claimed = false;
      this.localData.days[t].claimTime = 0;
    }
    this.localData.days = this.localData.days;
  }
  getCurrentDay() {
    return this.localData.currentDay;
  }
  getDays() {
    return this.localData.days;
  }
  getDay(t) {
    return t < 0 || t >= DailySignSimpleModel.DAY_COUNT ? null : this.localData.days[t];
  }
  getDayState(t) {
    return t < 0 || t >= DailySignSimpleModel.DAY_COUNT ? DailySignSimpleState.Uncompleted : this.localData.days[t].claimed ? DailySignSimpleState.Claimed : t === this.localData.currentDay && this.canClaimToday() ? DailySignSimpleState.Ready : DailySignSimpleState.Uncompleted;
  }
  canClaimToday() {
    var t = this.getTodayDateString();
    return this.localData.lastClaimDate !== t && !this.localData.days[this.localData.currentDay].claimed;
  }
  isTodayClaimed() {
    var t = this.getTodayDateString();
    return this.localData.lastClaimDate === t;
  }
  claimToday() {
    if (!this.canClaimToday()) return false;
    var t = this.getTodayDateString(),
      e = this.localData.currentDay;
    this.localData.days[e].claimed = true;
    this.localData.days[e].claimTime = Date.now();
    this.localData.lastClaimDate = t;
    e < DailySignSimpleModel.DAY_COUNT - 1 && (this.localData.currentDay = e + 1);
    this.localData.days = this.localData.days;
    return true;
  }
  needShowPopup() {
    var t = this.getTodayDateString();
    return this.localData.lastShownDate !== t || !this.localData.todayShown;
  }
  markPopupShown() {
    var t = this.getTodayDateString();
    this.localData.todayShown = true;
    this.localData.lastShownDate = t;
  }
  getProgressText() {
    return this.localData.days.filter(function (t) {
      return t.claimed;
    }).length + "/" + DailySignSimpleModel.DAY_COUNT;
  }
  getClaimedCount() {
    return this.localData.days.filter(function (t) {
      return t.claimed;
    }).length;
  }
  isCurrentCycleCompleted() {
    return this.localData.days.every(function (t) {
      return t.claimed;
    });
  }
  debugReset() {}
  hasNewProgress() {
    return this.localData.accumulatedDays > (this.localData.lastShownProgress || 0);
  }
  markProgressShown() {
    var t = this.localData.accumulatedDays;
    this.localData.lastShownProgress = t;
  }
  getCurrentProgress() {
    return this.localData.accumulatedDays;
  }
  debugSetDay() {}
}
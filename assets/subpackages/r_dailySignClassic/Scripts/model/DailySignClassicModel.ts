import Model from '../../../../Scripts/framework/data/Model';
import { EDailySignState } from '../DailySignClassicTypes';
import NormalGameData from '../../../../Scripts/core/simulator/data/NormalGameData';
@mj.class("DailySignClassicModel")
export default class DailySignClassicModel extends Model {
  defaultConfig = {
    unlockLevel: 2,
    maxLongTermDays: 12,
    weeklyRewards: this.getDefaultWeeklyRewards(),
    longTermRewards: this.getDefaultLongTermRewards()
  };
  static ITEM_ID = {
    SHUFFLE: 1001,
    HINT: 1002
  };
  constructor() {
    super();
    this.initSignData();
  }
  initSignData() {
    this.isLocalEmpty(this.localData.consecutiveDays) && (this.localData.consecutiveDays = 0);
    this.isLocalEmpty(this.localData.longTermDays) && (this.localData.longTermDays = 0);
    this.isLocalEmpty(this.localData.lastSignTime) && (this.localData.lastSignTime = 0);
    this.isLocalEmpty(this.localData.hasSigned) && (this.localData.hasSigned = false);
    this.isLocalEmpty(this.localData.claimedLongTermRewards) && (this.localData.claimedLongTermRewards = []);
    this.isLocalEmpty(this.localData.lastAutoPopTime) && (this.localData.lastAutoPopTime = 0);
    this.isLocalEmpty(this.localData.hasOpenedSignView) && (this.localData.hasOpenedSignView = false);
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  getDefaultWeeklyRewards() {
    var t = DailySignClassicModel.ITEM_ID.SHUFFLE,
      e = DailySignClassicModel.ITEM_ID.HINT,
      o = [[{
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
        count: 1
      }, {
        itemId: e,
        count: 1
      }]];
    return this.convertRewardItems(o);
  }
  getDefaultLongTermRewards() {
    var t = this,
      e = DailySignClassicModel.ITEM_ID.SHUFFLE,
      o = DailySignClassicModel.ITEM_ID.HINT;
    return [{
      totalDays: 3,
      items: [{
        itemId: e,
        count: 2
      }, {
        itemId: o,
        count: 2
      }]
    }, {
      totalDays: 6,
      items: [{
        itemId: e,
        count: 3
      }, {
        itemId: o,
        count: 3
      }]
    }, {
      totalDays: 9,
      items: [{
        itemId: e,
        count: 5
      }, {
        itemId: o,
        count: 5
      }]
    }, {
      totalDays: 12,
      items: [{
        itemId: e,
        count: 10
      }, {
        itemId: o,
        count: 10
      }]
    }].map(function (e) {
      var i = t.convertRewardItemsToInternal(e.items);
      return {
        totalDays: e.totalDays,
        hint: i.hint,
        shuffle: i.shuffle
      };
    });
  }
  convertRewardItems(t) {
    var e = this;
    return t.map(function (t, i) {
      var o = e.convertRewardItemsToInternal(t);
      return {
        day: i + 1,
        hint: o.hint,
        shuffle: o.shuffle
      };
    });
  }
  convertRewardItemsToInternal(t) {
    var e = 0,
      o = 0;
    t && t.length > 0 && t.forEach(function (t) {
      if (t.itemId === DailySignClassicModel.ITEM_ID.HINT) {
        e += t.count;
      } else {
        t.itemId === DailySignClassicModel.ITEM_ID.SHUFFLE && (o += t.count);
      }
    });
    return {
      hint: e,
      shuffle: o
    };
  }
  setWeeklyRewardsFromConfig(t) {
    t && 7 === t.length && (this.defaultConfig.weeklyRewards = this.convertRewardItems(t));
  }
  setLongTermRewardsFromConfig(t) {
    var e = this;
    t && 0 !== t.length && (this.defaultConfig.longTermRewards = t.map(function (t) {
      var i = e.convertRewardItemsToInternal(t.items);
      return {
        totalDays: t.totalDays,
        hint: i.hint,
        shuffle: i.shuffle
      };
    }));
  }
  getConfig() {
    return this.defaultConfig;
  }
  isUnlocked() {
    return NormalGameData.getInstance().getLevelId() >= this.defaultConfig.unlockLevel;
  }
  checkTodaySigned() {
    var t = Date.now(),
      e = this.localData.lastSignTime;
    if (!e) return false;
    var i = new Date(e),
      o = new Date(t);
    return this.isSameDay(i, o);
  }
  hasOpenedSignView() {
    return this.localData.hasOpenedSignView;
  }
  markSignViewOpened() {
    this.localData.hasOpenedSignView = true;
  }
  getDayState(t) {
    var e = this.localData.consecutiveDays,
      i = this.checkTodaySigned(),
      o = this.isConsecutiveSign();
    return !this.localData.lastSignTime || i || o ? e >= 7 && !i ? 1 === t ? EDailySignState.Claimable : EDailySignState.Locked : t <= e ? EDailySignState.Claimed : t !== e + 1 || i ? EDailySignState.Locked : EDailySignState.Claimable : 1 === t ? EDailySignState.Claimable : EDailySignState.Locked;
  }
  isSameDay(t, e) {
    return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
  }
  isConsecutiveSign() {
    var t = Date.now(),
      e = this.localData.lastSignTime;
    if (!e) return false;
    var i = new Date(e),
      o = new Date(t),
      n = new Date(o);
    n.setDate(n.getDate() - 1);
    return this.isSameDay(i, n);
  }
  signIn() {
    var t = Date.now();
    if (!this.checkTodaySigned()) {
      if (this.isConsecutiveSign()) {
        this.localData.consecutiveDays++;
        this.localData.longTermDays++;
      } else {
        this.localData.consecutiveDays = 1;
        this.localData.longTermDays++;
      }
      this.localData.consecutiveDays > 7 && (this.localData.consecutiveDays = 1);
      if (this.localData.longTermDays > this.defaultConfig.maxLongTermDays) if (this.areAllLongTermRewardsClaimed()) {
        this.localData.longTermDays = 1;
        this.localData.claimedLongTermRewards = [];
      } else this.localData.longTermDays = this.defaultConfig.maxLongTermDays;
      this.localData.lastSignTime = t;
      this.localData.hasSigned = true;
      this.localData.consecutiveDays = this.localData.consecutiveDays;
      this.localData.longTermDays = this.localData.longTermDays;
      this.localData.lastSignTime = this.localData.lastSignTime;
      this.localData.hasSigned = this.localData.hasSigned;
      this.localData.claimedLongTermRewards = this.localData.claimedLongTermRewards;
    }
  }
  getCurrentWeeklyReward() {
    var t = this.localData.consecutiveDays,
      e = this.checkTodaySigned();
    if (t >= 7 && !e) return this.defaultConfig.weeklyRewards[0];
    var i = t || 1;
    return this.defaultConfig.weeklyRewards.find(function (t) {
      return t.day === i;
    }) || this.defaultConfig.weeklyRewards[0];
  }
  getWeeklyRewards() {
    return this.defaultConfig.weeklyRewards;
  }
  getLongTermRewards() {
    return this.defaultConfig.longTermRewards;
  }
  getConsecutiveDays() {
    return this.localData.consecutiveDays || 0;
  }
  getLongTermDays() {
    return this.localData.longTermDays || 0;
  }
  canClaimLongTermReward(t) {
    return !(this.localData.claimedLongTermRewards.includes(t) || this.localData.longTermDays < t);
  }
  claimLongTermReward(t) {
    if (!this.canClaimLongTermReward(t)) return false;
    this.localData.claimedLongTermRewards.push(t);
    this.localData.claimedLongTermRewards = this.localData.claimedLongTermRewards;
    return true;
  }
  isLongTermRewardClaimed(t) {
    return this.localData.claimedLongTermRewards.includes(t);
  }
  areAllLongTermRewardsClaimed() {
    var t,
      e,
      i = this.defaultConfig.longTermRewards;
    try {
      for (var o = __values(i), n = o.next(); !n.done; n = o.next()) {
        var a = n.value;
        if (this.localData.longTermDays >= a.totalDays && !this.localData.claimedLongTermRewards.includes(a.totalDays)) return false;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        n && !n.done && (e = o.return) && e.call(o);
      } finally {
        if (t) throw t.error;
      }
    }
    return true;
  }
  hasAutoPopedToday() {
    var t = this.localData.lastAutoPopTime;
    if (!t) return false;
    var e = Date.now(),
      i = new Date(t),
      o = new Date(e);
    return i.getFullYear() === o.getFullYear() && i.getMonth() === o.getMonth() && i.getDate() === o.getDate();
  }
  markAutoPopedToday() {
    this.localData.lastAutoPopTime = Date.now();
  }
  resetTodaySign() {
    this.localData.hasSigned = false;
    this.localData.lastAutoPopTime = 0;
  }
  getTimeToNextDay() {
    var t = new Date(),
      e = new Date(t);
    e.setDate(e.getDate() + 1);
    e.setHours(0, 0, 0, 0);
    return Math.floor((e.getTime() - t.getTime()) / 1000);
  }
  formatCountdown(t) {
    var e = Math.floor(t / 3600),
      i = Math.floor(t % 3600 / 60),
      o = t % 60;
    return this.pad(e) + ":" + this.pad(i) + ":" + this.pad(o);
  }
  pad(t) {
    return t < 10 ? "0" + t : "" + t;
  }
}
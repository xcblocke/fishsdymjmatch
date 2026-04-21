import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Model from '../../../Scripts/framework/data/Model';
import BadgeMode, { BadgeType } from '../../../Scripts/gamePlay/badge/mode/BadgeMode';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import { DisplayType, DailyStatus } from './DailyTypes';
@mj.class("DailyModel")
export default class DailyModel extends Model {
  showDoneDay = {
    id: 0,
    day: 0,
    timestamp: 0
  };
  isSelectedDay = false;
  _challengeInfo = null;
  _inDoneShowIds = {};
  _isFristGame = true;
  _currentType = DisplayType.Daily;
  Month_TXT_MAP = new Map([[1, ["Jan", "Badges_Daily_Month_1"]], [2, ["Feb", "Badges_Daily_Month_2"]], [3, ["Mar", "Badges_Daily_Month_3"]], [4, ["Apr", "Badges_Daily_Month_4"]], [5, ["May", "Badges_Daily_Month_5"]], [6, ["Jun", "Badges_Daily_Month_6"]], [7, ["Jul", "Badges_Daily_Month_7"]], [8, ["Aug", "Badges_Daily_Month_8"]], [9, ["Sep", "Badges_Daily_Month_9"]], [10, ["Oct", "Badges_Daily_Month_10"]], [11, ["Nov", "Badges_Daily_Month_11"]], [12, ["Dec", "Badges_Daily_Month_12"]]]);
  get currentType() {
    return this._currentType;
  }
  set currentType(t) {
    this._currentType = t;
  }
  constructor() {
    super();
    this.initialize();
  }
  initialize() {
    this._challengeInfo = this.localData.challengeInfo || this.createEmptyInfo();
    var t = this.getToday();
    this.ensureMonthData(t.id);
    this.refreshExpiredData();
  }
  createEmptyInfo() {
    return {
      dailyChallengeData: {},
      dailyChallengeStatus: {},
      played: null,
      currentDay: null,
      isOpen: false,
      enterCnt: 0
    };
  }
  isOpen() {
    return this._challengeInfo.isOpen;
  }
  setOpen(t) {
    this._challengeInfo.isOpen = t;
    this.save();
  }
  getEnterCnt() {
    return this._challengeInfo && this._challengeInfo.enterCnt ? this._challengeInfo.enterCnt : 0;
  }
  setOpenCnt(t) {
    if (this._challengeInfo) {
      this._challengeInfo.enterCnt += t;
      this.save();
    }
  }
  getToday() {
    var t,
      e,
      i = new Date(),
      o = i.getFullYear(),
      n = i.getMonth() + 1,
      a = i.getDate(),
      s = this.getDateTimestamp(o, n, a),
      c = DataReader.getList(ConfigType.daily_challenge),
      h = 1;
    try {
      for (var p = __values(c), y = p.next(); !y.done; y = p.next()) {
        var u = y.value;
        u.Year === o && u.Month === n && (h = u.ID);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        y && !y.done && (e = p.return) && e.call(p);
      } finally {
        if (t) throw t.error;
      }
    }
    return {
      id: h,
      day: a,
      timestamp: s
    };
  }
  getDateTimestamp(t, e, i) {
    return new Date(t, e - 1, i, 0, 0, 0, 0).getTime();
  }
  ensureMonthData(t) {
    if (DataReader.getByKey(ConfigType.daily_challenge, t)) {
      var e = "" + t;
      if (this._challengeInfo.dailyChallengeData[e]) this.refreshDailyData(t);else {
        this._challengeInfo.dailyChallengeData[e] = this.createMonthData(t);
        this.save();
      }
    }
  }
  createMonthData(t) {
    var e = DataReader.getByKey(ConfigType.daily_challenge, t);
    if (e) {
      for (var i = new Date(e.Year, e.Month, 0).getDate(), o = this.getToday(), n = [], a = 1; a <= i; a++) {
        var l = DailyStatus.Locked,
          s = this.getDateTimestamp(e.Year, e.Month, a);
        this.isDateBeforeOrEqual({
          id: t,
          day: a,
          timestamp: s
        }, o) && (l = DailyStatus.Unlocked);
        n.push({
          id: t,
          day: a,
          status: l,
          timestamp: s
        });
      }
      return n;
    }
  }
  refreshDailyData(t) {
    var e = this,
      i = "" + t,
      o = this._challengeInfo.dailyChallengeData[i];
    if (o) {
      var n = this.getToday(),
        a = false;
      o.forEach(function (t) {
        if ((t.status === DailyStatus.Locked || t.status === DailyStatus.Unopened) && e.isDateBeforeOrEqual(t, n)) {
          t.status = DailyStatus.Unlocked;
          a = true;
        }
      });
      a && this.save();
    }
  }
  refreshExpiredData() {
    var t = this;
    this.getToday();
    Object.keys(this._challengeInfo.dailyChallengeData).forEach(function (e) {
      t.refreshDailyData(parseInt(e));
    });
  }
  isDateBeforeOrEqual(t, e) {
    return t.id < e.id || !(t.id > e.id) && t.day <= e.day;
  }
  getMonthData(t) {
    this.ensureMonthData(t);
    var e = "" + t;
    return this._challengeInfo.dailyChallengeData[e] || [];
  }
  getLastAvailableDay(t) {
    for (var e = this.getMonthData(t), i = e.length - 1; i >= 0; i--) if (e[i].status === DailyStatus.Unlocked) return e[i];
    for (i = e.length - 1; i >= 0; i--) if (e[i].status === DailyStatus.Unlocked || e[i].status === DailyStatus.Completed) return e[i];
    return null;
  }
  getCurrentDay() {
    return this._challengeInfo.currentDay;
  }
  setCurrentDay(t) {
    this._challengeInfo.currentDay = t;
    this.save();
  }
  updateDayStatus(t, e, i) {
    var o = "" + t,
      n = this._challengeInfo.dailyChallengeData[o];
    if (n) {
      var a = n.find(function (t) {
        return t.day === e;
      });
      if (a && (a.status !== DailyStatus.Completed || i !== DailyStatus.Completed)) {
        a.status = i;
        this._challengeInfo.currentDay && this._challengeInfo.currentDay.id === t && this._challengeInfo.currentDay.day === e && (this._challengeInfo.currentDay.status = i);
        i === DailyStatus.Completed && this.checkMonthComplete(t);
        this.save();
      }
    }
  }
  checkMonthComplete(t) {
    var e = "" + t,
      i = this._challengeInfo.dailyChallengeData[e];
    if (i && !this._challengeInfo.dailyChallengeStatus[e] && i.every(function (t) {
      return t.status === DailyStatus.Completed;
    })) {
      this._challengeInfo.dailyChallengeStatus[e] = this.getToday();
      new Date();
      BadgeMode.getInstance().addBadge(this.getMonthRewardItemId(t), BadgeType.Daily, "" + t);
      this.save();
    }
  }
  isMonthCompleted(t) {
    var e = "" + t;
    return !!this._challengeInfo.dailyChallengeStatus[e];
  }
  getMonthStartBlankDays(t, e) {
    return new Date(t, e - 1, 1).getDay();
  }
  setPlayed(t, e, i) {
    var o = DataReader.getByKey(ConfigType.daily_challenge, t);
    if (o) {
      var n = this.getDateTimestamp(o.Year, o.Month, e);
      this._challengeInfo.played = {
        id: t,
        day: e,
        timestamp: n,
        preState: i
      };
      this.save();
    }
  }
  save() {
    this.localData.challengeInfo = this._challengeInfo;
  }
  clearAll() {
    this._challengeInfo = this.createEmptyInfo();
    this.save();
  }
  getDailyDataList() {
    if (!this.isOpen()) return [];
    for (var t = DataReader.getList(ConfigType.daily_challenge), e = new Date(), i = e.getMonth() + 1, o = e.getFullYear(), n = [], a = [], l = 0; l < t.length; l++) {
      var s = t[l];
      if (s && s.Year <= o) {
        if (s.Year == o && s.Month > i) continue;
        var p = this.getMonthRewardItemId(s.ID);
        p > 0 && a.push({
          id: s.ID,
          status: this.isMonthCompleted(s.ID) ? DailyStatus.Completed : DailyStatus.Unopened,
          rewardItemId: p,
          month: s.Month,
          monthTxt: this.Month_TXT_MAP.get(s.Month) || []
        });
      }
    }
    a.reverse();
    var y = a.length % 3;
    if (y > 0) {
      var u = [];
      for (l = 0; l < y; l++) u.push(a[l]);
      var f = {
        items: u,
        first: true,
        start: true,
        type: BadgeType.Daily
      };
      n.push(f);
    }
    for (l = 0; l < a.length - y; l += 3) {
      for (var _ = [], m = 0; m < 3; m++) _.push(a[l + m + y]);
      var g = {
        items: _,
        first: _[0].month >= 10,
        type: BadgeType.Daily,
        start: 0 == y && 0 == l
      };
      n.push(g);
    }
    return n;
  }
  getJourneyDataList() {
    var t,
      e,
      i = BadgeMode.getInstance().getBadgesByType(BadgeType.Journey),
      o = [],
      n = [];
    try {
      for (var a = __values(i), r = a.next(); !r.done; r = a.next()) {
        var s = r.value;
        n[d = s.session] || (n[d] = []);
        n[d].push(s);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (e = a.return) && e.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
    for (var d in n) for (var h = n[d], p = 0; p < h.length; p += 3) {
      for (var y = [], u = 0; u < 3; u++) y.push(h[p + u]);
      var f = {
        items: y,
        first: false,
        start: false,
        type: BadgeType.Journey,
        session: d
      };
      o.push(f);
    }
    o[0] && (o[0].start = true);
    return o;
  }
  getMonthRewardItemId(t) {
    var e = DataReader.getByKey(ConfigType.daily_challenge, t);
    if (e) {
      var i = DataReader.getByKey(ConfigType.reward_config, e.RewardID);
      if (i && i.Items.length > 0) return i.Items[0];
    }
    return 0;
  }
  saveDailyData() {
    var t, e, i, o, n;
    if (null === (t = this._challengeInfo) || void 0 === t ? void 0 : t.played) {
      var a = DailyStatus.Completed;
      this.updateDayStatus(null === (e = this._challengeInfo) || void 0 === e ? void 0 : e.played.id, null === (i = this._challengeInfo) || void 0 === i ? void 0 : i.played.day, a);
      this._inDoneShowIds[(null === (o = this._challengeInfo) || void 0 === o ? void 0 : o.played.id) + "_" + (null === (n = this._challengeInfo) || void 0 === n ? void 0 : n.played.day)] = true;
    }
  }
  isInDoneShow(t, e) {
    return this._inDoneShowIds[t + "_" + e];
  }
  isFirstGame() {
    return this._isFristGame;
  }
  setIsFirstGame(t) {
    this._isFristGame = t;
  }
  getSelectedData() {
    var t;
    return null === (t = this._challengeInfo) || void 0 === t ? void 0 : t.played;
  }
  resetShowDoneDay() {
    this.showDoneDay = {
      id: 0,
      day: 0,
      timestamp: 0
    };
  }
  getDayStatus(t, e) {
    var i = this._challengeInfo.dailyChallengeData["" + t];
    if (i) {
      var o = i.find(function (t) {
        return t.day === e;
      });
      if (o) return o.status;
    }
    return DailyStatus.Unlocked;
  }
  @mj.traitEvent("DailyMdl_itemUrl")
  getItemIconUrl(t) {
    var e = DataReader.getByKey(ConfigType.item_config, t);
    return e ? "texture/badge/" + e.Icon : "";
  }
}
import Model from '../../../framework/data/Model';
import { getNaturalDayDiff } from '../../../framework/utils/CommonUtils';
import { EUserPropertyType } from '../../analyze/AnalyzeTypes';
import UserModel from '../../user/UserModel';
export var EAdType = {
  Inter: "inter",
  InterAd: "interAd",
  reward: "reward",
  RewardAd: "rewardAd"
};
@mj.class("AdModel")
export default class AdModel extends Model {
  constructor() {
    super();
    this.isLocalEmpty(this.localData.first3InterIncomeList) && (this.localData.first3InterIncomeList = []);
    this.isLocalEmpty(this.localData.first3InterEcpm) && (this.localData.first3InterEcpm = 0);
    this.isLocalEmpty(this.localData.first3InterGroup) && (this.localData.first3InterGroup = 0);
    this.isLocalEmpty(this.localData.last3InterIncomeList) && (this.localData.last3InterIncomeList = []);
    this.isLocalEmpty(this.localData.last3InterEcpm) && (this.localData.last3InterEcpm = 0);
    this.isLocalEmpty(this.localData.last3InterGroup) && (this.localData.last3InterGroup = 0);
    this.isLocalEmpty(this.localData.requestInterAdCount) && (this.localData.requestInterAdCount = 0);
    this.isLocalEmpty(this.localData.requestRewardAdCount) && (this.localData.requestRewardAdCount = 0);
    this.isLocalEmpty(this.localData.interAdSuccessCount) && (this.localData.interAdSuccessCount = 0);
    this.isLocalEmpty(this.localData.rewardAdSuccessCount) && (this.localData.rewardAdSuccessCount = 0);
    this.isLocalEmpty(this.localData.interAdRevenue) && (this.localData.interAdRevenue = 0);
    this.isLocalEmpty(this.localData.interAdCount) && (this.localData.interAdCount = 0);
    this.isLocalEmpty(this.localData.rewardAdRevenue) && (this.localData.rewardAdRevenue = 0);
    this.isLocalEmpty(this.localData.rewardAdCount) && (this.localData.rewardAdCount = 0);
    this.isLocalEmpty(this.localData.last30DayTimestamp) && (this.localData.last30DayTimestamp = 0);
    this.isLocalEmpty(this.localData.last30DayAdRevenues) && (this.localData.last30DayAdRevenues = []);
  }
  isLocalEmpty(e) {
    return null == e || "" === e;
  }
  updateNewDate(e, t) {
    var o = getNaturalDayDiff(e, this.localData.last30DayTimestamp),
      n = this.localData.last30DayAdRevenues;
    if (o > 0 || 0 === n.length) {
      o > 0 && this.reportLast7dAdRevenueInfo(t);
      var i = {
        interAdRevenue: 0,
        interAdCount: 0,
        rewardAdRevenue: 0,
        rewardAdCount: 0,
        gameTimeReal: 0,
        gameEndNum: 0,
        gameWinNum: 0,
        date: e
      };
      n.push(i);
      n.length >= 30 && n.splice(0, n.length - 30);
      this.localData.last30DayAdRevenues = n;
      this.localData.last30DayTimestamp = e;
      return true;
    }
    return false;
  }
  updateOneDayInterAdRevenue(e, t) {
    var o = Date.now();
    this.updateNewDate(o, t);
    var n = this.localData.last30DayAdRevenues;
    n[n.length - 1].interAdRevenue += e;
    n[n.length - 1].interAdCount++;
    this.localData.last30DayAdRevenues = n;
  }
  updateOneDayRewardAdRevenue(e, t) {
    var o = Date.now();
    this.updateNewDate(o, t);
    var n = this.localData.last30DayAdRevenues;
    n[n.length - 1].rewardAdRevenue += e;
    n[n.length - 1].rewardAdCount++;
    this.localData.last30DayAdRevenues = n;
  }
  updateOneDayAdGameEnd(e, t) {
    var o = Date.now();
    this.updateNewDate(o);
    var n = this.localData.last30DayAdRevenues;
    n[n.length - 1].gameEndNum += 1;
    n[n.length - 1].gameTimeReal += e;
    n[n.length - 1].gameWinNum += t ? 1 : 0;
    this.localData.last30DayAdRevenues = n;
  }
  updateInterAdRevenue(e) {
    this.localData.interAdRevenue += e;
    this.localData.interAdCount++;
  }
  updateRewardAdRevenue(e) {
    this.localData.rewardAdRevenue += e;
    this.localData.rewardAdCount++;
  }
  updateFirst3Inter(e, t) {
    var o = this.localData.first3InterIncomeList;
    if (!(o.length >= 3)) {
      o.push(1000 * e);
      this.localData.first3InterIncomeList = o;
      this.localData.first3InterEcpm = o.reduce(function (e, t) {
        return e + t;
      }, 0) / o.length;
      t[EUserPropertyType.first3InterEcpm] = this.localData.first3InterEcpm.toString();
      var n = this.localData.first3InterGroup;
      if (this.localData.first3InterEcpm <= 4) {
        this.localData.first3InterGroup = 1;
      } else {
        if (this.localData.first3InterEcpm <= 10) {
          this.localData.first3InterGroup = 2;
        } else {
          if (this.localData.first3InterEcpm <= 50) {
            this.localData.first3InterGroup = 3;
          } else {
            this.localData.first3InterGroup = 4;
          }
        }
      }
      UserModel.getInstance().setTierGroup(this.localData.first3InterGroup);
      n !== this.localData.first3InterGroup && (t[EUserPropertyType.first3InterGroup] = this.localData.first3InterGroup);
    }
  }
  updateLast3Inter(e, t) {
    var o = this.localData.last3InterIncomeList;
    o.push(1000 * e);
    o.length > 3 && o.splice(0, o.length - 3);
    this.localData.last3InterIncomeList = o;
    this.localData.last3InterEcpm = o.reduce(function (e, t) {
      return e + t;
    }, 0) / o.length;
    t[EUserPropertyType.last3InterEcpm] = this.localData.last3InterEcpm.toString();
    var n = this.localData.last3InterGroup;
    if (this.localData.last3InterEcpm <= 4) {
      this.localData.last3InterGroup = 1;
    } else {
      if (this.localData.last3InterEcpm <= 10) {
        this.localData.last3InterGroup = 2;
      } else {
        if (this.localData.last3InterEcpm <= 50) {
          this.localData.last3InterGroup = 3;
        } else {
          this.localData.last3InterGroup = 4;
        }
      }
    }
    UserModel.getInstance().setTierGroup(this.localData.last3InterGroup);
    n !== this.localData.last3InterGroup && (t[EUserPropertyType.last3InterGroup] = this.localData.last3InterGroup);
  }
  updateInterAdIncome(e) {
    var t = {};
    this.updateFirst3Inter(e, t);
    this.updateLast3Inter(e, t);
    this.updateInterAdRevenue(e);
    this.updateOneDayInterAdRevenue(e, t);
    this.reportAdRevenue(t);
    mj.sdk.userDataUpload(t);
  }
  updateRewardAdIncome(e) {
    var t = {};
    this.updateRewardAdRevenue(e);
    this.updateOneDayRewardAdRevenue(e, t);
    this.reportAdRevenue(t);
    mj.sdk.userDataUpload(t);
  }
  updateRequestAdInter() {
    this.localData.requestInterAdCount++;
  }
  updateRequestAdReward() {
    this.localData.requestRewardAdCount++;
  }
  updateAdInterSuccess(e) {
    e && this.localData.interAdSuccessCount++;
    this.reportAdRequestInfo();
  }
  updateAdRewardSuccess(e) {
    e && this.localData.rewardAdSuccessCount++;
    this.reportAdRequestInfo();
  }
  reportAdRevenue(e) {
    var t = this.localData.interAdRevenue + this.localData.rewardAdRevenue,
      o = this.localData.interAdCount + this.localData.rewardAdCount,
      n = o ? t / o : 0,
      i = this.localData.interAdRevenue,
      r = this.localData.interAdCount,
      a = r ? i / r : 0,
      l = this.localData.rewardAdRevenue,
      c = this.localData.rewardAdCount,
      u = {
        total_revenue: t,
        total_count: o,
        total_avg: n,
        interstitialad_revenue: i,
        interstitialad_count: r,
        interstitialad_avg: a,
        rewardad_revenue: l,
        rewardad_count: c,
        rewardad_avg: c ? l / c : 0
      };
    e[EUserPropertyType.adRevenueInfo] = u;
  }
  reportAdRequestInfo(e) {
    var o = this.localData.requestInterAdCount,
      n = this.localData.requestRewardAdCount,
      i = this.localData.interAdSuccessCount,
      r = this.localData.rewardAdSuccessCount,
      a = o + n,
      l = {
        request_ad_total: a,
        request_ad_insert_total: o,
        request_ad_reward_total: n,
        request_ad_ratio: a ? (i + r) / a : 0,
        request_ad_insert_ratio: o ? i / o : 0,
        request_ad_reward_ratio: n ? r / n : 0
      };
    var _t = {};
    _t[EUserPropertyType.adRequestInfo] = l;
    if (e) {
      e[EUserPropertyType.adRequestInfo] = l;
    } else {
      mj.sdk.userDataUpload(_t);
    }
  }
  startReportLast7dAdRevenueInfo(e) {
    var t = Date.now();
    if (0 !== this.localData.last30DayTimestamp) getNaturalDayDiff(t, this.localData.last30DayTimestamp) > 1 && this.updateNewDate(t, e);else {
      this.updateNewDate(t, e);
      e[EUserPropertyType.last7dInfo] = {
        last_7d_game_time_real: 0,
        last_7d_ecpm: 0,
        last_7d_game_num_all: 0,
        last_7d_ad_revenue: 0,
        last_7d_ad_count: 0
      };
    }
  }
  reportLast7dAdRevenueInfo(e) {
    var _t = {};
    _t[EUserPropertyType.last7dInfo] = a;
    if (!(this.localData.last30DayAdRevenues.length < 7)) {
      var o = this.localData.last30DayAdRevenues.slice(-7),
        n = o.reduce(function (e, t) {
          return e + t.gameTimeReal;
        }, 0),
        i = o.reduce(function (e, t) {
          return e + t.gameEndNum;
        }, 0),
        r = o.reduce(function (e, t) {
          return e + t.interAdRevenue + t.rewardAdRevenue;
        }, 0),
        a = {
          last_7d_game_time_real: n,
          last_7d_ecpm: i ? r / i * 1000 : 0,
          last_7d_game_num_all: i,
          last_7d_ad_revenue: r,
          last_7d_ad_count: o.reduce(function (e, t) {
            return e + t.interAdCount + t.rewardAdCount;
          }, 0)
        };
      if (e) {
        e[EUserPropertyType.last7dInfo] = a;
      } else {
        mj.sdk.userDataUpload(_t);
      }
    }
  }
  startupReport(e) {
    e[EUserPropertyType.first3InterEcpm] = this.localData.first3InterEcpm.toString();
    e[EUserPropertyType.first3InterGroup] = this.localData.first3InterGroup;
    e[EUserPropertyType.last3InterEcpm] = this.localData.last3InterEcpm.toString();
    e[EUserPropertyType.last3InterGroup] = this.localData.last3InterGroup;
    this.reportAdRequestInfo(e);
    this.reportAdRevenue(e);
    this.startReportLast7dAdRevenueInfo(e);
  }
  getFirst3InterGroup() {
    return this.localData.first3InterGroup;
  }
  getFirstInterEcpm() {
    return this.localData.first3InterIncomeList[0];
  }
  setFirstInterLoadEcpm(e) {
    this.localData.firstInterLoadEcpm = e;
  }
  getFirstInterLoadEcpm() {
    return this.localData.firstInterLoadEcpm;
  }
  gmSetFirstInterEcpm(e) {
    var t = this.localData.first3InterIncomeList;
    t && "object" == typeof t || (t = []);
    t[0] = e;
    this.localData.first3InterIncomeList = t;
  }
  gmSetFirstInterLoadEcpm(e) {
    this.localData.firstInterLoadEcpm = e;
  }
  getFirst3InterEcpm() {
    return this.localData.first3InterEcpm;
  }
}
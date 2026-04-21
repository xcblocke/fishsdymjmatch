"use strict";
cc._RF.push(module, '5b2bbEJm9BN+Z8/9jI/Hdiq', 'AdModel');
// Scripts/gamePlay/base/ad/AdModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EAdType = void 0;
var Model_1 = require("../../../framework/data/Model");
var CommonUtils_1 = require("../../../framework/utils/CommonUtils");
var AnalyzeTypes_1 = require("../../analyze/AnalyzeTypes");
var UserModel_1 = require("../../user/UserModel");
exports.EAdType = {
    Inter: "inter",
    InterAd: "interAd",
    reward: "reward",
    RewardAd: "rewardAd"
};
var AdModel = /** @class */ (function (_super) {
    __extends(AdModel, _super);
    function AdModel() {
        var _this = _super.call(this) || this;
        _this.isLocalEmpty(_this.localData.first3InterIncomeList) && (_this.localData.first3InterIncomeList = []);
        _this.isLocalEmpty(_this.localData.first3InterEcpm) && (_this.localData.first3InterEcpm = 0);
        _this.isLocalEmpty(_this.localData.first3InterGroup) && (_this.localData.first3InterGroup = 0);
        _this.isLocalEmpty(_this.localData.last3InterIncomeList) && (_this.localData.last3InterIncomeList = []);
        _this.isLocalEmpty(_this.localData.last3InterEcpm) && (_this.localData.last3InterEcpm = 0);
        _this.isLocalEmpty(_this.localData.last3InterGroup) && (_this.localData.last3InterGroup = 0);
        _this.isLocalEmpty(_this.localData.requestInterAdCount) && (_this.localData.requestInterAdCount = 0);
        _this.isLocalEmpty(_this.localData.requestRewardAdCount) && (_this.localData.requestRewardAdCount = 0);
        _this.isLocalEmpty(_this.localData.interAdSuccessCount) && (_this.localData.interAdSuccessCount = 0);
        _this.isLocalEmpty(_this.localData.rewardAdSuccessCount) && (_this.localData.rewardAdSuccessCount = 0);
        _this.isLocalEmpty(_this.localData.interAdRevenue) && (_this.localData.interAdRevenue = 0);
        _this.isLocalEmpty(_this.localData.interAdCount) && (_this.localData.interAdCount = 0);
        _this.isLocalEmpty(_this.localData.rewardAdRevenue) && (_this.localData.rewardAdRevenue = 0);
        _this.isLocalEmpty(_this.localData.rewardAdCount) && (_this.localData.rewardAdCount = 0);
        _this.isLocalEmpty(_this.localData.last30DayTimestamp) && (_this.localData.last30DayTimestamp = 0);
        _this.isLocalEmpty(_this.localData.last30DayAdRevenues) && (_this.localData.last30DayAdRevenues = []);
        return _this;
    }
    AdModel.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    AdModel.prototype.updateNewDate = function (e, t) {
        var o = CommonUtils_1.getNaturalDayDiff(e, this.localData.last30DayTimestamp), n = this.localData.last30DayAdRevenues;
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
    };
    AdModel.prototype.updateOneDayInterAdRevenue = function (e, t) {
        var o = Date.now();
        this.updateNewDate(o, t);
        var n = this.localData.last30DayAdRevenues;
        n[n.length - 1].interAdRevenue += e;
        n[n.length - 1].interAdCount++;
        this.localData.last30DayAdRevenues = n;
    };
    AdModel.prototype.updateOneDayRewardAdRevenue = function (e, t) {
        var o = Date.now();
        this.updateNewDate(o, t);
        var n = this.localData.last30DayAdRevenues;
        n[n.length - 1].rewardAdRevenue += e;
        n[n.length - 1].rewardAdCount++;
        this.localData.last30DayAdRevenues = n;
    };
    AdModel.prototype.updateOneDayAdGameEnd = function (e, t) {
        var o = Date.now();
        this.updateNewDate(o);
        var n = this.localData.last30DayAdRevenues;
        n[n.length - 1].gameEndNum += 1;
        n[n.length - 1].gameTimeReal += e;
        n[n.length - 1].gameWinNum += t ? 1 : 0;
        this.localData.last30DayAdRevenues = n;
    };
    AdModel.prototype.updateInterAdRevenue = function (e) {
        this.localData.interAdRevenue += e;
        this.localData.interAdCount++;
    };
    AdModel.prototype.updateRewardAdRevenue = function (e) {
        this.localData.rewardAdRevenue += e;
        this.localData.rewardAdCount++;
    };
    AdModel.prototype.updateFirst3Inter = function (e, t) {
        var o = this.localData.first3InterIncomeList;
        if (!(o.length >= 3)) {
            o.push(1000 * e);
            this.localData.first3InterIncomeList = o;
            this.localData.first3InterEcpm = o.reduce(function (e, t) {
                return e + t;
            }, 0) / o.length;
            t[AnalyzeTypes_1.EUserPropertyType.first3InterEcpm] = this.localData.first3InterEcpm.toString();
            var n = this.localData.first3InterGroup;
            if (this.localData.first3InterEcpm <= 4) {
                this.localData.first3InterGroup = 1;
            }
            else {
                if (this.localData.first3InterEcpm <= 10) {
                    this.localData.first3InterGroup = 2;
                }
                else {
                    if (this.localData.first3InterEcpm <= 50) {
                        this.localData.first3InterGroup = 3;
                    }
                    else {
                        this.localData.first3InterGroup = 4;
                    }
                }
            }
            UserModel_1.default.getInstance().setTierGroup(this.localData.first3InterGroup);
            n !== this.localData.first3InterGroup && (t[AnalyzeTypes_1.EUserPropertyType.first3InterGroup] = this.localData.first3InterGroup);
        }
    };
    AdModel.prototype.updateLast3Inter = function (e, t) {
        var o = this.localData.last3InterIncomeList;
        o.push(1000 * e);
        o.length > 3 && o.splice(0, o.length - 3);
        this.localData.last3InterIncomeList = o;
        this.localData.last3InterEcpm = o.reduce(function (e, t) {
            return e + t;
        }, 0) / o.length;
        t[AnalyzeTypes_1.EUserPropertyType.last3InterEcpm] = this.localData.last3InterEcpm.toString();
        var n = this.localData.last3InterGroup;
        if (this.localData.last3InterEcpm <= 4) {
            this.localData.last3InterGroup = 1;
        }
        else {
            if (this.localData.last3InterEcpm <= 10) {
                this.localData.last3InterGroup = 2;
            }
            else {
                if (this.localData.last3InterEcpm <= 50) {
                    this.localData.last3InterGroup = 3;
                }
                else {
                    this.localData.last3InterGroup = 4;
                }
            }
        }
        UserModel_1.default.getInstance().setTierGroup(this.localData.last3InterGroup);
        n !== this.localData.last3InterGroup && (t[AnalyzeTypes_1.EUserPropertyType.last3InterGroup] = this.localData.last3InterGroup);
    };
    AdModel.prototype.updateInterAdIncome = function (e) {
        var t = {};
        this.updateFirst3Inter(e, t);
        this.updateLast3Inter(e, t);
        this.updateInterAdRevenue(e);
        this.updateOneDayInterAdRevenue(e, t);
        this.reportAdRevenue(t);
        mj.sdk.userDataUpload(t);
    };
    AdModel.prototype.updateRewardAdIncome = function (e) {
        var t = {};
        this.updateRewardAdRevenue(e);
        this.updateOneDayRewardAdRevenue(e, t);
        this.reportAdRevenue(t);
        mj.sdk.userDataUpload(t);
    };
    AdModel.prototype.updateRequestAdInter = function () {
        this.localData.requestInterAdCount++;
    };
    AdModel.prototype.updateRequestAdReward = function () {
        this.localData.requestRewardAdCount++;
    };
    AdModel.prototype.updateAdInterSuccess = function (e) {
        e && this.localData.interAdSuccessCount++;
        this.reportAdRequestInfo();
    };
    AdModel.prototype.updateAdRewardSuccess = function (e) {
        e && this.localData.rewardAdSuccessCount++;
        this.reportAdRequestInfo();
    };
    AdModel.prototype.reportAdRevenue = function (e) {
        var t = this.localData.interAdRevenue + this.localData.rewardAdRevenue, o = this.localData.interAdCount + this.localData.rewardAdCount, n = o ? t / o : 0, i = this.localData.interAdRevenue, r = this.localData.interAdCount, a = r ? i / r : 0, l = this.localData.rewardAdRevenue, c = this.localData.rewardAdCount, u = {
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
        e[AnalyzeTypes_1.EUserPropertyType.adRevenueInfo] = u;
    };
    AdModel.prototype.reportAdRequestInfo = function (e) {
        var o = this.localData.requestInterAdCount, n = this.localData.requestRewardAdCount, i = this.localData.interAdSuccessCount, r = this.localData.rewardAdSuccessCount, a = o + n, l = {
            request_ad_total: a,
            request_ad_insert_total: o,
            request_ad_reward_total: n,
            request_ad_ratio: a ? (i + r) / a : 0,
            request_ad_insert_ratio: o ? i / o : 0,
            request_ad_reward_ratio: n ? r / n : 0
        };
        var _t = {};
        _t[AnalyzeTypes_1.EUserPropertyType.adRequestInfo] = l;
        if (e) {
            e[AnalyzeTypes_1.EUserPropertyType.adRequestInfo] = l;
        }
        else {
            mj.sdk.userDataUpload(_t);
        }
    };
    AdModel.prototype.startReportLast7dAdRevenueInfo = function (e) {
        var t = Date.now();
        if (0 !== this.localData.last30DayTimestamp)
            CommonUtils_1.getNaturalDayDiff(t, this.localData.last30DayTimestamp) > 1 && this.updateNewDate(t, e);
        else {
            this.updateNewDate(t, e);
            e[AnalyzeTypes_1.EUserPropertyType.last7dInfo] = {
                last_7d_game_time_real: 0,
                last_7d_ecpm: 0,
                last_7d_game_num_all: 0,
                last_7d_ad_revenue: 0,
                last_7d_ad_count: 0
            };
        }
    };
    AdModel.prototype.reportLast7dAdRevenueInfo = function (e) {
        var _t = {};
        _t[AnalyzeTypes_1.EUserPropertyType.last7dInfo] = a;
        if (!(this.localData.last30DayAdRevenues.length < 7)) {
            var o = this.localData.last30DayAdRevenues.slice(-7), n = o.reduce(function (e, t) {
                return e + t.gameTimeReal;
            }, 0), i = o.reduce(function (e, t) {
                return e + t.gameEndNum;
            }, 0), r = o.reduce(function (e, t) {
                return e + t.interAdRevenue + t.rewardAdRevenue;
            }, 0), a = {
                last_7d_game_time_real: n,
                last_7d_ecpm: i ? r / i * 1000 : 0,
                last_7d_game_num_all: i,
                last_7d_ad_revenue: r,
                last_7d_ad_count: o.reduce(function (e, t) {
                    return e + t.interAdCount + t.rewardAdCount;
                }, 0)
            };
            if (e) {
                e[AnalyzeTypes_1.EUserPropertyType.last7dInfo] = a;
            }
            else {
                mj.sdk.userDataUpload(_t);
            }
        }
    };
    AdModel.prototype.startupReport = function (e) {
        e[AnalyzeTypes_1.EUserPropertyType.first3InterEcpm] = this.localData.first3InterEcpm.toString();
        e[AnalyzeTypes_1.EUserPropertyType.first3InterGroup] = this.localData.first3InterGroup;
        e[AnalyzeTypes_1.EUserPropertyType.last3InterEcpm] = this.localData.last3InterEcpm.toString();
        e[AnalyzeTypes_1.EUserPropertyType.last3InterGroup] = this.localData.last3InterGroup;
        this.reportAdRequestInfo(e);
        this.reportAdRevenue(e);
        this.startReportLast7dAdRevenueInfo(e);
    };
    AdModel.prototype.getFirst3InterGroup = function () {
        return this.localData.first3InterGroup;
    };
    AdModel.prototype.getFirstInterEcpm = function () {
        return this.localData.first3InterIncomeList[0];
    };
    AdModel.prototype.setFirstInterLoadEcpm = function (e) {
        this.localData.firstInterLoadEcpm = e;
    };
    AdModel.prototype.getFirstInterLoadEcpm = function () {
        return this.localData.firstInterLoadEcpm;
    };
    AdModel.prototype.gmSetFirstInterEcpm = function (e) {
        var t = this.localData.first3InterIncomeList;
        t && "object" == typeof t || (t = []);
        t[0] = e;
        this.localData.first3InterIncomeList = t;
    };
    AdModel.prototype.gmSetFirstInterLoadEcpm = function (e) {
        this.localData.firstInterLoadEcpm = e;
    };
    AdModel.prototype.getFirst3InterEcpm = function () {
        return this.localData.first3InterEcpm;
    };
    AdModel = __decorate([
        mj.class("AdModel")
    ], AdModel);
    return AdModel;
}(Model_1.default));
exports.default = AdModel;

cc._RF.pop();
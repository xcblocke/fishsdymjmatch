"use strict";
cc._RF.push(module, '88df30QlLVMPoUlImRK2j3Q', 'DailyModel');
// subpackages/l_daily/Scripts/DailyModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Model_1 = require("../../../Scripts/framework/data/Model");
var BadgeMode_1 = require("../../../Scripts/gamePlay/badge/mode/BadgeMode");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var DailyTypes_1 = require("./DailyTypes");
var DailyModel = /** @class */ (function (_super) {
    __extends(DailyModel, _super);
    function DailyModel() {
        var _this = _super.call(this) || this;
        _this.showDoneDay = {
            id: 0,
            day: 0,
            timestamp: 0
        };
        _this.isSelectedDay = false;
        _this._challengeInfo = null;
        _this._inDoneShowIds = {};
        _this._isFristGame = true;
        _this._currentType = DailyTypes_1.DisplayType.Daily;
        _this.Month_TXT_MAP = new Map([[1, ["Jan", "Badges_Daily_Month_1"]], [2, ["Feb", "Badges_Daily_Month_2"]], [3, ["Mar", "Badges_Daily_Month_3"]], [4, ["Apr", "Badges_Daily_Month_4"]], [5, ["May", "Badges_Daily_Month_5"]], [6, ["Jun", "Badges_Daily_Month_6"]], [7, ["Jul", "Badges_Daily_Month_7"]], [8, ["Aug", "Badges_Daily_Month_8"]], [9, ["Sep", "Badges_Daily_Month_9"]], [10, ["Oct", "Badges_Daily_Month_10"]], [11, ["Nov", "Badges_Daily_Month_11"]], [12, ["Dec", "Badges_Daily_Month_12"]]]);
        _this.initialize();
        return _this;
    }
    Object.defineProperty(DailyModel.prototype, "currentType", {
        get: function () {
            return this._currentType;
        },
        set: function (t) {
            this._currentType = t;
        },
        enumerable: false,
        configurable: true
    });
    DailyModel.prototype.initialize = function () {
        this._challengeInfo = this.localData.challengeInfo || this.createEmptyInfo();
        var t = this.getToday();
        this.ensureMonthData(t.id);
        this.refreshExpiredData();
    };
    DailyModel.prototype.createEmptyInfo = function () {
        return {
            dailyChallengeData: {},
            dailyChallengeStatus: {},
            played: null,
            currentDay: null,
            isOpen: false,
            enterCnt: 0
        };
    };
    DailyModel.prototype.isOpen = function () {
        return this._challengeInfo.isOpen;
    };
    DailyModel.prototype.setOpen = function (t) {
        this._challengeInfo.isOpen = t;
        this.save();
    };
    DailyModel.prototype.getEnterCnt = function () {
        return this._challengeInfo && this._challengeInfo.enterCnt ? this._challengeInfo.enterCnt : 0;
    };
    DailyModel.prototype.setOpenCnt = function (t) {
        if (this._challengeInfo) {
            this._challengeInfo.enterCnt += t;
            this.save();
        }
    };
    DailyModel.prototype.getToday = function () {
        var t, e, i = new Date(), o = i.getFullYear(), n = i.getMonth() + 1, a = i.getDate(), s = this.getDateTimestamp(o, n, a), c = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.daily_challenge), h = 1;
        try {
            for (var p = __values(c), y = p.next(); !y.done; y = p.next()) {
                var u = y.value;
                u.Year === o && u.Month === n && (h = u.ID);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                y && !y.done && (e = p.return) && e.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return {
            id: h,
            day: a,
            timestamp: s
        };
    };
    DailyModel.prototype.getDateTimestamp = function (t, e, i) {
        return new Date(t, e - 1, i, 0, 0, 0, 0).getTime();
    };
    DailyModel.prototype.ensureMonthData = function (t) {
        if (DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, t)) {
            var e = "" + t;
            if (this._challengeInfo.dailyChallengeData[e])
                this.refreshDailyData(t);
            else {
                this._challengeInfo.dailyChallengeData[e] = this.createMonthData(t);
                this.save();
            }
        }
    };
    DailyModel.prototype.createMonthData = function (t) {
        var e = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, t);
        if (e) {
            for (var i = new Date(e.Year, e.Month, 0).getDate(), o = this.getToday(), n = [], a = 1; a <= i; a++) {
                var l = DailyTypes_1.DailyStatus.Locked, s = this.getDateTimestamp(e.Year, e.Month, a);
                this.isDateBeforeOrEqual({
                    id: t,
                    day: a,
                    timestamp: s
                }, o) && (l = DailyTypes_1.DailyStatus.Unlocked);
                n.push({
                    id: t,
                    day: a,
                    status: l,
                    timestamp: s
                });
            }
            return n;
        }
    };
    DailyModel.prototype.refreshDailyData = function (t) {
        var e = this, i = "" + t, o = this._challengeInfo.dailyChallengeData[i];
        if (o) {
            var n = this.getToday(), a = false;
            o.forEach(function (t) {
                if ((t.status === DailyTypes_1.DailyStatus.Locked || t.status === DailyTypes_1.DailyStatus.Unopened) && e.isDateBeforeOrEqual(t, n)) {
                    t.status = DailyTypes_1.DailyStatus.Unlocked;
                    a = true;
                }
            });
            a && this.save();
        }
    };
    DailyModel.prototype.refreshExpiredData = function () {
        var t = this;
        this.getToday();
        Object.keys(this._challengeInfo.dailyChallengeData).forEach(function (e) {
            t.refreshDailyData(parseInt(e));
        });
    };
    DailyModel.prototype.isDateBeforeOrEqual = function (t, e) {
        return t.id < e.id || !(t.id > e.id) && t.day <= e.day;
    };
    DailyModel.prototype.getMonthData = function (t) {
        this.ensureMonthData(t);
        var e = "" + t;
        return this._challengeInfo.dailyChallengeData[e] || [];
    };
    DailyModel.prototype.getLastAvailableDay = function (t) {
        for (var e = this.getMonthData(t), i = e.length - 1; i >= 0; i--)
            if (e[i].status === DailyTypes_1.DailyStatus.Unlocked)
                return e[i];
        for (i = e.length - 1; i >= 0; i--)
            if (e[i].status === DailyTypes_1.DailyStatus.Unlocked || e[i].status === DailyTypes_1.DailyStatus.Completed)
                return e[i];
        return null;
    };
    DailyModel.prototype.getCurrentDay = function () {
        return this._challengeInfo.currentDay;
    };
    DailyModel.prototype.setCurrentDay = function (t) {
        this._challengeInfo.currentDay = t;
        this.save();
    };
    DailyModel.prototype.updateDayStatus = function (t, e, i) {
        var o = "" + t, n = this._challengeInfo.dailyChallengeData[o];
        if (n) {
            var a = n.find(function (t) {
                return t.day === e;
            });
            if (a && (a.status !== DailyTypes_1.DailyStatus.Completed || i !== DailyTypes_1.DailyStatus.Completed)) {
                a.status = i;
                this._challengeInfo.currentDay && this._challengeInfo.currentDay.id === t && this._challengeInfo.currentDay.day === e && (this._challengeInfo.currentDay.status = i);
                i === DailyTypes_1.DailyStatus.Completed && this.checkMonthComplete(t);
                this.save();
            }
        }
    };
    DailyModel.prototype.checkMonthComplete = function (t) {
        var e = "" + t, i = this._challengeInfo.dailyChallengeData[e];
        if (i && !this._challengeInfo.dailyChallengeStatus[e] && i.every(function (t) {
            return t.status === DailyTypes_1.DailyStatus.Completed;
        })) {
            this._challengeInfo.dailyChallengeStatus[e] = this.getToday();
            new Date();
            BadgeMode_1.default.getInstance().addBadge(this.getMonthRewardItemId(t), BadgeMode_1.BadgeType.Daily, "" + t);
            this.save();
        }
    };
    DailyModel.prototype.isMonthCompleted = function (t) {
        var e = "" + t;
        return !!this._challengeInfo.dailyChallengeStatus[e];
    };
    DailyModel.prototype.getMonthStartBlankDays = function (t, e) {
        return new Date(t, e - 1, 1).getDay();
    };
    DailyModel.prototype.setPlayed = function (t, e, i) {
        var o = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, t);
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
    };
    DailyModel.prototype.save = function () {
        this.localData.challengeInfo = this._challengeInfo;
    };
    DailyModel.prototype.clearAll = function () {
        this._challengeInfo = this.createEmptyInfo();
        this.save();
    };
    DailyModel.prototype.getDailyDataList = function () {
        if (!this.isOpen())
            return [];
        for (var t = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.daily_challenge), e = new Date(), i = e.getMonth() + 1, o = e.getFullYear(), n = [], a = [], l = 0; l < t.length; l++) {
            var s = t[l];
            if (s && s.Year <= o) {
                if (s.Year == o && s.Month > i)
                    continue;
                var p = this.getMonthRewardItemId(s.ID);
                p > 0 && a.push({
                    id: s.ID,
                    status: this.isMonthCompleted(s.ID) ? DailyTypes_1.DailyStatus.Completed : DailyTypes_1.DailyStatus.Unopened,
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
            for (l = 0; l < y; l++)
                u.push(a[l]);
            var f = {
                items: u,
                first: true,
                start: true,
                type: BadgeMode_1.BadgeType.Daily
            };
            n.push(f);
        }
        for (l = 0; l < a.length - y; l += 3) {
            for (var _ = [], m = 0; m < 3; m++)
                _.push(a[l + m + y]);
            var g = {
                items: _,
                first: _[0].month >= 10,
                type: BadgeMode_1.BadgeType.Daily,
                start: 0 == y && 0 == l
            };
            n.push(g);
        }
        return n;
    };
    DailyModel.prototype.getJourneyDataList = function () {
        var t, e, i = BadgeMode_1.default.getInstance().getBadgesByType(BadgeMode_1.BadgeType.Journey), o = [], n = [];
        try {
            for (var a = __values(i), r = a.next(); !r.done; r = a.next()) {
                var s = r.value;
                n[d = s.session] || (n[d] = []);
                n[d].push(s);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (e = a.return) && e.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        for (var d in n)
            for (var h = n[d], p = 0; p < h.length; p += 3) {
                for (var y = [], u = 0; u < 3; u++)
                    y.push(h[p + u]);
                var f = {
                    items: y,
                    first: false,
                    start: false,
                    type: BadgeMode_1.BadgeType.Journey,
                    session: d
                };
                o.push(f);
            }
        o[0] && (o[0].start = true);
        return o;
    };
    DailyModel.prototype.getMonthRewardItemId = function (t) {
        var e = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, t);
        if (e) {
            var i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.reward_config, e.RewardID);
            if (i && i.Items.length > 0)
                return i.Items[0];
        }
        return 0;
    };
    DailyModel.prototype.saveDailyData = function () {
        var t, e, i, o, n;
        if (null === (t = this._challengeInfo) || void 0 === t ? void 0 : t.played) {
            var a = DailyTypes_1.DailyStatus.Completed;
            this.updateDayStatus(null === (e = this._challengeInfo) || void 0 === e ? void 0 : e.played.id, null === (i = this._challengeInfo) || void 0 === i ? void 0 : i.played.day, a);
            this._inDoneShowIds[(null === (o = this._challengeInfo) || void 0 === o ? void 0 : o.played.id) + "_" + (null === (n = this._challengeInfo) || void 0 === n ? void 0 : n.played.day)] = true;
        }
    };
    DailyModel.prototype.isInDoneShow = function (t, e) {
        return this._inDoneShowIds[t + "_" + e];
    };
    DailyModel.prototype.isFirstGame = function () {
        return this._isFristGame;
    };
    DailyModel.prototype.setIsFirstGame = function (t) {
        this._isFristGame = t;
    };
    DailyModel.prototype.getSelectedData = function () {
        var t;
        return null === (t = this._challengeInfo) || void 0 === t ? void 0 : t.played;
    };
    DailyModel.prototype.resetShowDoneDay = function () {
        this.showDoneDay = {
            id: 0,
            day: 0,
            timestamp: 0
        };
    };
    DailyModel.prototype.getDayStatus = function (t, e) {
        var i = this._challengeInfo.dailyChallengeData["" + t];
        if (i) {
            var o = i.find(function (t) {
                return t.day === e;
            });
            if (o)
                return o.status;
        }
        return DailyTypes_1.DailyStatus.Unlocked;
    };
    DailyModel.prototype.getItemIconUrl = function (t) {
        var e = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, t);
        return e ? "texture/badge/" + e.Icon : "";
    };
    __decorate([
        mj.traitEvent("DailyMdl_itemUrl")
    ], DailyModel.prototype, "getItemIconUrl", null);
    DailyModel = __decorate([
        mj.class("DailyModel")
    ], DailyModel);
    return DailyModel;
}(Model_1.default));
exports.default = DailyModel;

cc._RF.pop();
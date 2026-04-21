
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXdFO0FBQ3hFLCtEQUEwRDtBQUMxRCw0RUFBc0Y7QUFDdEYsNkVBQTRFO0FBQzVFLDJDQUF3RDtBQUV4RDtJQUF3Qyw4QkFBSztJQWtCM0M7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFwQkQsaUJBQVcsR0FBRztZQUNaLEVBQUUsRUFBRSxDQUFDO1lBQ0wsR0FBRyxFQUFFLENBQUM7WUFDTixTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUM7UUFDRixtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixrQkFBWSxHQUFHLHdCQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2pDLG1CQUFhLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsc0JBQXNCLENBQUMs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QURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7b0RBSWpDO0lBeFZrQixVQUFVO1FBRDlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO09BQ0YsVUFBVSxDQXlWOUI7SUFBRCxpQkFBQztDQXpWRCxBQXlWQyxDQXpWdUMsZUFBSyxHQXlWNUM7a0JBelZvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9Nb2RlbCc7XG5pbXBvcnQgQmFkZ2VNb2RlLCB7IEJhZGdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFkZ2UvbW9kZS9CYWRnZU1vZGUnO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IHsgRGlzcGxheVR5cGUsIERhaWx5U3RhdHVzIH0gZnJvbSAnLi9EYWlseVR5cGVzJztcbkBtai5jbGFzcyhcIkRhaWx5TW9kZWxcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5TW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gIHNob3dEb25lRGF5ID0ge1xuICAgIGlkOiAwLFxuICAgIGRheTogMCxcbiAgICB0aW1lc3RhbXA6IDBcbiAgfTtcbiAgaXNTZWxlY3RlZERheSA9IGZhbHNlO1xuICBfY2hhbGxlbmdlSW5mbyA9IG51bGw7XG4gIF9pbkRvbmVTaG93SWRzID0ge307XG4gIF9pc0ZyaXN0R2FtZSA9IHRydWU7XG4gIF9jdXJyZW50VHlwZSA9IERpc3BsYXlUeXBlLkRhaWx5O1xuICBNb250aF9UWFRfTUFQID0gbmV3IE1hcChbWzEsIFtcIkphblwiLCBcIkJhZGdlc19EYWlseV9Nb250aF8xXCJdXSwgWzIsIFtcIkZlYlwiLCBcIkJhZGdlc19EYWlseV9Nb250aF8yXCJdXSwgWzMsIFtcIk1hclwiLCBcIkJhZGdlc19EYWlseV9Nb250aF8zXCJdXSwgWzQsIFtcIkFwclwiLCBcIkJhZGdlc19EYWlseV9Nb250aF80XCJdXSwgWzUsIFtcIk1heVwiLCBcIkJhZGdlc19EYWlseV9Nb250aF81XCJdXSwgWzYsIFtcIkp1blwiLCBcIkJhZGdlc19EYWlseV9Nb250aF82XCJdXSwgWzcsIFtcIkp1bFwiLCBcIkJhZGdlc19EYWlseV9Nb250aF83XCJdXSwgWzgsIFtcIkF1Z1wiLCBcIkJhZGdlc19EYWlseV9Nb250aF84XCJdXSwgWzksIFtcIlNlcFwiLCBcIkJhZGdlc19EYWlseV9Nb250aF85XCJdXSwgWzEwLCBbXCJPY3RcIiwgXCJCYWRnZXNfRGFpbHlfTW9udGhfMTBcIl1dLCBbMTEsIFtcIk5vdlwiLCBcIkJhZGdlc19EYWlseV9Nb250aF8xMVwiXV0sIFsxMiwgW1wiRGVjXCIsIFwiQmFkZ2VzX0RhaWx5X01vbnRoXzEyXCJdXV0pO1xuICBnZXQgY3VycmVudFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUeXBlO1xuICB9XG4gIHNldCBjdXJyZW50VHlwZSh0KSB7XG4gICAgdGhpcy5fY3VycmVudFR5cGUgPSB0O1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9jaGFsbGVuZ2VJbmZvID0gdGhpcy5sb2NhbERhdGEuY2hhbGxlbmdlSW5mbyB8fCB0aGlzLmNyZWF0ZUVtcHR5SW5mbygpO1xuICAgIHZhciB0ID0gdGhpcy5nZXRUb2RheSgpO1xuICAgIHRoaXMuZW5zdXJlTW9udGhEYXRhKHQuaWQpO1xuICAgIHRoaXMucmVmcmVzaEV4cGlyZWREYXRhKCk7XG4gIH1cbiAgY3JlYXRlRW1wdHlJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYWlseUNoYWxsZW5nZURhdGE6IHt9LFxuICAgICAgZGFpbHlDaGFsbGVuZ2VTdGF0dXM6IHt9LFxuICAgICAgcGxheWVkOiBudWxsLFxuICAgICAgY3VycmVudERheTogbnVsbCxcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICBlbnRlckNudDogMFxuICAgIH07XG4gIH1cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGFsbGVuZ2VJbmZvLmlzT3BlbjtcbiAgfVxuICBzZXRPcGVuKHQpIHtcbiAgICB0aGlzLl9jaGFsbGVuZ2VJbmZvLmlzT3BlbiA9IHQ7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cbiAgZ2V0RW50ZXJDbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYWxsZW5nZUluZm8gJiYgdGhpcy5fY2hhbGxlbmdlSW5mby5lbnRlckNudCA/IHRoaXMuX2NoYWxsZW5nZUluZm8uZW50ZXJDbnQgOiAwO1xuICB9XG4gIHNldE9wZW5DbnQodCkge1xuICAgIGlmICh0aGlzLl9jaGFsbGVuZ2VJbmZvKSB7XG4gICAgICB0aGlzLl9jaGFsbGVuZ2VJbmZvLmVudGVyQ250ICs9IHQ7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9XG4gIH1cbiAgZ2V0VG9kYXkoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgaSA9IG5ldyBEYXRlKCksXG4gICAgICBvID0gaS5nZXRGdWxsWWVhcigpLFxuICAgICAgbiA9IGkuZ2V0TW9udGgoKSArIDEsXG4gICAgICBhID0gaS5nZXREYXRlKCksXG4gICAgICBzID0gdGhpcy5nZXREYXRlVGltZXN0YW1wKG8sIG4sIGEpLFxuICAgICAgYyA9IERhdGFSZWFkZXIuZ2V0TGlzdChDb25maWdUeXBlLmRhaWx5X2NoYWxsZW5nZSksXG4gICAgICBoID0gMTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKGMpLCB5ID0gcC5uZXh0KCk7ICF5LmRvbmU7IHkgPSBwLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IHkudmFsdWU7XG4gICAgICAgIHUuWWVhciA9PT0gbyAmJiB1Lk1vbnRoID09PSBuICYmIChoID0gdS5JRCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHkgJiYgIXkuZG9uZSAmJiAoZSA9IHAucmV0dXJuKSAmJiBlLmNhbGwocCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBoLFxuICAgICAgZGF5OiBhLFxuICAgICAgdGltZXN0YW1wOiBzXG4gICAgfTtcbiAgfVxuICBnZXREYXRlVGltZXN0YW1wKHQsIGUsIGkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodCwgZSAtIDEsIGksIDAsIDAsIDAsIDApLmdldFRpbWUoKTtcbiAgfVxuICBlbnN1cmVNb250aERhdGEodCkge1xuICAgIGlmIChEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuZGFpbHlfY2hhbGxlbmdlLCB0KSkge1xuICAgICAgdmFyIGUgPSBcIlwiICsgdDtcbiAgICAgIGlmICh0aGlzLl9jaGFsbGVuZ2VJbmZvLmRhaWx5Q2hhbGxlbmdlRGF0YVtlXSkgdGhpcy5yZWZyZXNoRGFpbHlEYXRhKHQpO2Vsc2Uge1xuICAgICAgICB0aGlzLl9jaGFsbGVuZ2VJbmZvLmRhaWx5Q2hhbGxlbmdlRGF0YVtlXSA9IHRoaXMuY3JlYXRlTW9udGhEYXRhKHQpO1xuICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY3JlYXRlTW9udGhEYXRhKHQpIHtcbiAgICB2YXIgZSA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5kYWlseV9jaGFsbGVuZ2UsIHQpO1xuICAgIGlmIChlKSB7XG4gICAgICBmb3IgKHZhciBpID0gbmV3IERhdGUoZS5ZZWFyLCBlLk1vbnRoLCAwKS5nZXREYXRlKCksIG8gPSB0aGlzLmdldFRvZGF5KCksIG4gPSBbXSwgYSA9IDE7IGEgPD0gaTsgYSsrKSB7XG4gICAgICAgIHZhciBsID0gRGFpbHlTdGF0dXMuTG9ja2VkLFxuICAgICAgICAgIHMgPSB0aGlzLmdldERhdGVUaW1lc3RhbXAoZS5ZZWFyLCBlLk1vbnRoLCBhKTtcbiAgICAgICAgdGhpcy5pc0RhdGVCZWZvcmVPckVxdWFsKHtcbiAgICAgICAgICBpZDogdCxcbiAgICAgICAgICBkYXk6IGEsXG4gICAgICAgICAgdGltZXN0YW1wOiBzXG4gICAgICAgIH0sIG8pICYmIChsID0gRGFpbHlTdGF0dXMuVW5sb2NrZWQpO1xuICAgICAgICBuLnB1c2goe1xuICAgICAgICAgIGlkOiB0LFxuICAgICAgICAgIGRheTogYSxcbiAgICAgICAgICBzdGF0dXM6IGwsXG4gICAgICAgICAgdGltZXN0YW1wOiBzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICB9XG4gIHJlZnJlc2hEYWlseURhdGEodCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIGkgPSBcIlwiICsgdCxcbiAgICAgIG8gPSB0aGlzLl9jaGFsbGVuZ2VJbmZvLmRhaWx5Q2hhbGxlbmdlRGF0YVtpXTtcbiAgICBpZiAobykge1xuICAgICAgdmFyIG4gPSB0aGlzLmdldFRvZGF5KCksXG4gICAgICAgIGEgPSBmYWxzZTtcbiAgICAgIG8uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoKHQuc3RhdHVzID09PSBEYWlseVN0YXR1cy5Mb2NrZWQgfHwgdC5zdGF0dXMgPT09IERhaWx5U3RhdHVzLlVub3BlbmVkKSAmJiBlLmlzRGF0ZUJlZm9yZU9yRXF1YWwodCwgbikpIHtcbiAgICAgICAgICB0LnN0YXR1cyA9IERhaWx5U3RhdHVzLlVubG9ja2VkO1xuICAgICAgICAgIGEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGEgJiYgdGhpcy5zYXZlKCk7XG4gICAgfVxuICB9XG4gIHJlZnJlc2hFeHBpcmVkRGF0YSgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5nZXRUb2RheSgpO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuX2NoYWxsZW5nZUluZm8uZGFpbHlDaGFsbGVuZ2VEYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB0LnJlZnJlc2hEYWlseURhdGEocGFyc2VJbnQoZSkpO1xuICAgIH0pO1xuICB9XG4gIGlzRGF0ZUJlZm9yZU9yRXF1YWwodCwgZSkge1xuICAgIHJldHVybiB0LmlkIDwgZS5pZCB8fCAhKHQuaWQgPiBlLmlkKSAmJiB0LmRheSA8PSBlLmRheTtcbiAgfVxuICBnZXRNb250aERhdGEodCkge1xuICAgIHRoaXMuZW5zdXJlTW9udGhEYXRhKHQpO1xuICAgIHZhciBlID0gXCJcIiArIHQ7XG4gICAgcmV0dXJuIHRoaXMuX2NoYWxsZW5nZUluZm8uZGFpbHlDaGFsbGVuZ2VEYXRhW2VdIHx8IFtdO1xuICB9XG4gIGdldExhc3RBdmFpbGFibGVEYXkodCkge1xuICAgIGZvciAodmFyIGUgPSB0aGlzLmdldE1vbnRoRGF0YSh0KSwgaSA9IGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChlW2ldLnN0YXR1cyA9PT0gRGFpbHlTdGF0dXMuVW5sb2NrZWQpIHJldHVybiBlW2ldO1xuICAgIGZvciAoaSA9IGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChlW2ldLnN0YXR1cyA9PT0gRGFpbHlTdGF0dXMuVW5sb2NrZWQgfHwgZVtpXS5zdGF0dXMgPT09IERhaWx5U3RhdHVzLkNvbXBsZXRlZCkgcmV0dXJuIGVbaV07XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZ2V0Q3VycmVudERheSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbGxlbmdlSW5mby5jdXJyZW50RGF5O1xuICB9XG4gIHNldEN1cnJlbnREYXkodCkge1xuICAgIHRoaXMuX2NoYWxsZW5nZUluZm8uY3VycmVudERheSA9IHQ7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cbiAgdXBkYXRlRGF5U3RhdHVzKHQsIGUsIGkpIHtcbiAgICB2YXIgbyA9IFwiXCIgKyB0LFxuICAgICAgbiA9IHRoaXMuX2NoYWxsZW5nZUluZm8uZGFpbHlDaGFsbGVuZ2VEYXRhW29dO1xuICAgIGlmIChuKSB7XG4gICAgICB2YXIgYSA9IG4uZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5kYXkgPT09IGU7XG4gICAgICB9KTtcbiAgICAgIGlmIChhICYmIChhLnN0YXR1cyAhPT0gRGFpbHlTdGF0dXMuQ29tcGxldGVkIHx8IGkgIT09IERhaWx5U3RhdHVzLkNvbXBsZXRlZCkpIHtcbiAgICAgICAgYS5zdGF0dXMgPSBpO1xuICAgICAgICB0aGlzLl9jaGFsbGVuZ2VJbmZvLmN1cnJlbnREYXkgJiYgdGhpcy5fY2hhbGxlbmdlSW5mby5jdXJyZW50RGF5LmlkID09PSB0ICYmIHRoaXMuX2NoYWxsZW5nZUluZm8uY3VycmVudERheS5kYXkgPT09IGUgJiYgKHRoaXMuX2NoYWxsZW5nZUluZm8uY3VycmVudERheS5zdGF0dXMgPSBpKTtcbiAgICAgICAgaSA9PT0gRGFpbHlTdGF0dXMuQ29tcGxldGVkICYmIHRoaXMuY2hlY2tNb250aENvbXBsZXRlKHQpO1xuICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2hlY2tNb250aENvbXBsZXRlKHQpIHtcbiAgICB2YXIgZSA9IFwiXCIgKyB0LFxuICAgICAgaSA9IHRoaXMuX2NoYWxsZW5nZUluZm8uZGFpbHlDaGFsbGVuZ2VEYXRhW2VdO1xuICAgIGlmIChpICYmICF0aGlzLl9jaGFsbGVuZ2VJbmZvLmRhaWx5Q2hhbGxlbmdlU3RhdHVzW2VdICYmIGkuZXZlcnkoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LnN0YXR1cyA9PT0gRGFpbHlTdGF0dXMuQ29tcGxldGVkO1xuICAgIH0pKSB7XG4gICAgICB0aGlzLl9jaGFsbGVuZ2VJbmZvLmRhaWx5Q2hhbGxlbmdlU3RhdHVzW2VdID0gdGhpcy5nZXRUb2RheSgpO1xuICAgICAgbmV3IERhdGUoKTtcbiAgICAgIEJhZGdlTW9kZS5nZXRJbnN0YW5jZSgpLmFkZEJhZGdlKHRoaXMuZ2V0TW9udGhSZXdhcmRJdGVtSWQodCksIEJhZGdlVHlwZS5EYWlseSwgXCJcIiArIHQpO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuICB9XG4gIGlzTW9udGhDb21wbGV0ZWQodCkge1xuICAgIHZhciBlID0gXCJcIiArIHQ7XG4gICAgcmV0dXJuICEhdGhpcy5fY2hhbGxlbmdlSW5mby5kYWlseUNoYWxsZW5nZVN0YXR1c1tlXTtcbiAgfVxuICBnZXRNb250aFN0YXJ0QmxhbmtEYXlzKHQsIGUpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodCwgZSAtIDEsIDEpLmdldERheSgpO1xuICB9XG4gIHNldFBsYXllZCh0LCBlLCBpKSB7XG4gICAgdmFyIG8gPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuZGFpbHlfY2hhbGxlbmdlLCB0KTtcbiAgICBpZiAobykge1xuICAgICAgdmFyIG4gPSB0aGlzLmdldERhdGVUaW1lc3RhbXAoby5ZZWFyLCBvLk1vbnRoLCBlKTtcbiAgICAgIHRoaXMuX2NoYWxsZW5nZUluZm8ucGxheWVkID0ge1xuICAgICAgICBpZDogdCxcbiAgICAgICAgZGF5OiBlLFxuICAgICAgICB0aW1lc3RhbXA6IG4sXG4gICAgICAgIHByZVN0YXRlOiBpXG4gICAgICB9O1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuICB9XG4gIHNhdmUoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuY2hhbGxlbmdlSW5mbyA9IHRoaXMuX2NoYWxsZW5nZUluZm87XG4gIH1cbiAgY2xlYXJBbGwoKSB7XG4gICAgdGhpcy5fY2hhbGxlbmdlSW5mbyA9IHRoaXMuY3JlYXRlRW1wdHlJbmZvKCk7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cbiAgZ2V0RGFpbHlEYXRhTGlzdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHJldHVybiBbXTtcbiAgICBmb3IgKHZhciB0ID0gRGF0YVJlYWRlci5nZXRMaXN0KENvbmZpZ1R5cGUuZGFpbHlfY2hhbGxlbmdlKSwgZSA9IG5ldyBEYXRlKCksIGkgPSBlLmdldE1vbnRoKCkgKyAxLCBvID0gZS5nZXRGdWxsWWVhcigpLCBuID0gW10sIGEgPSBbXSwgbCA9IDA7IGwgPCB0Lmxlbmd0aDsgbCsrKSB7XG4gICAgICB2YXIgcyA9IHRbbF07XG4gICAgICBpZiAocyAmJiBzLlllYXIgPD0gbykge1xuICAgICAgICBpZiAocy5ZZWFyID09IG8gJiYgcy5Nb250aCA+IGkpIGNvbnRpbnVlO1xuICAgICAgICB2YXIgcCA9IHRoaXMuZ2V0TW9udGhSZXdhcmRJdGVtSWQocy5JRCk7XG4gICAgICAgIHAgPiAwICYmIGEucHVzaCh7XG4gICAgICAgICAgaWQ6IHMuSUQsXG4gICAgICAgICAgc3RhdHVzOiB0aGlzLmlzTW9udGhDb21wbGV0ZWQocy5JRCkgPyBEYWlseVN0YXR1cy5Db21wbGV0ZWQgOiBEYWlseVN0YXR1cy5Vbm9wZW5lZCxcbiAgICAgICAgICByZXdhcmRJdGVtSWQ6IHAsXG4gICAgICAgICAgbW9udGg6IHMuTW9udGgsXG4gICAgICAgICAgbW9udGhUeHQ6IHRoaXMuTW9udGhfVFhUX01BUC5nZXQocy5Nb250aCkgfHwgW11cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGEucmV2ZXJzZSgpO1xuICAgIHZhciB5ID0gYS5sZW5ndGggJSAzO1xuICAgIGlmICh5ID4gMCkge1xuICAgICAgdmFyIHUgPSBbXTtcbiAgICAgIGZvciAobCA9IDA7IGwgPCB5OyBsKyspIHUucHVzaChhW2xdKTtcbiAgICAgIHZhciBmID0ge1xuICAgICAgICBpdGVtczogdSxcbiAgICAgICAgZmlyc3Q6IHRydWUsXG4gICAgICAgIHN0YXJ0OiB0cnVlLFxuICAgICAgICB0eXBlOiBCYWRnZVR5cGUuRGFpbHlcbiAgICAgIH07XG4gICAgICBuLnB1c2goZik7XG4gICAgfVxuICAgIGZvciAobCA9IDA7IGwgPCBhLmxlbmd0aCAtIHk7IGwgKz0gMykge1xuICAgICAgZm9yICh2YXIgXyA9IFtdLCBtID0gMDsgbSA8IDM7IG0rKykgXy5wdXNoKGFbbCArIG0gKyB5XSk7XG4gICAgICB2YXIgZyA9IHtcbiAgICAgICAgaXRlbXM6IF8sXG4gICAgICAgIGZpcnN0OiBfWzBdLm1vbnRoID49IDEwLFxuICAgICAgICB0eXBlOiBCYWRnZVR5cGUuRGFpbHksXG4gICAgICAgIHN0YXJ0OiAwID09IHkgJiYgMCA9PSBsXG4gICAgICB9O1xuICAgICAgbi5wdXNoKGcpO1xuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfVxuICBnZXRKb3VybmV5RGF0YUxpc3QoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgaSA9IEJhZGdlTW9kZS5nZXRJbnN0YW5jZSgpLmdldEJhZGdlc0J5VHlwZShCYWRnZVR5cGUuSm91cm5leSksXG4gICAgICBvID0gW10sXG4gICAgICBuID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyhpKSwgciA9IGEubmV4dCgpOyAhci5kb25lOyByID0gYS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSByLnZhbHVlO1xuICAgICAgICBuW2QgPSBzLnNlc3Npb25dIHx8IChuW2RdID0gW10pO1xuICAgICAgICBuW2RdLnB1c2gocyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHIgJiYgIXIuZG9uZSAmJiAoZSA9IGEucmV0dXJuKSAmJiBlLmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgZCBpbiBuKSBmb3IgKHZhciBoID0gbltkXSwgcCA9IDA7IHAgPCBoLmxlbmd0aDsgcCArPSAzKSB7XG4gICAgICBmb3IgKHZhciB5ID0gW10sIHUgPSAwOyB1IDwgMzsgdSsrKSB5LnB1c2goaFtwICsgdV0pO1xuICAgICAgdmFyIGYgPSB7XG4gICAgICAgIGl0ZW1zOiB5LFxuICAgICAgICBmaXJzdDogZmFsc2UsXG4gICAgICAgIHN0YXJ0OiBmYWxzZSxcbiAgICAgICAgdHlwZTogQmFkZ2VUeXBlLkpvdXJuZXksXG4gICAgICAgIHNlc3Npb246IGRcbiAgICAgIH07XG4gICAgICBvLnB1c2goZik7XG4gICAgfVxuICAgIG9bMF0gJiYgKG9bMF0uc3RhcnQgPSB0cnVlKTtcbiAgICByZXR1cm4gbztcbiAgfVxuICBnZXRNb250aFJld2FyZEl0ZW1JZCh0KSB7XG4gICAgdmFyIGUgPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuZGFpbHlfY2hhbGxlbmdlLCB0KTtcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIGkgPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUucmV3YXJkX2NvbmZpZywgZS5SZXdhcmRJRCk7XG4gICAgICBpZiAoaSAmJiBpLkl0ZW1zLmxlbmd0aCA+IDApIHJldHVybiBpLkl0ZW1zWzBdO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuICBzYXZlRGFpbHlEYXRhKCkge1xuICAgIHZhciB0LCBlLCBpLCBvLCBuO1xuICAgIGlmIChudWxsID09PSAodCA9IHRoaXMuX2NoYWxsZW5nZUluZm8pIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQucGxheWVkKSB7XG4gICAgICB2YXIgYSA9IERhaWx5U3RhdHVzLkNvbXBsZXRlZDtcbiAgICAgIHRoaXMudXBkYXRlRGF5U3RhdHVzKG51bGwgPT09IChlID0gdGhpcy5fY2hhbGxlbmdlSW5mbykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5wbGF5ZWQuaWQsIG51bGwgPT09IChpID0gdGhpcy5fY2hhbGxlbmdlSW5mbykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5wbGF5ZWQuZGF5LCBhKTtcbiAgICAgIHRoaXMuX2luRG9uZVNob3dJZHNbKG51bGwgPT09IChvID0gdGhpcy5fY2hhbGxlbmdlSW5mbykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5wbGF5ZWQuaWQpICsgXCJfXCIgKyAobnVsbCA9PT0gKG4gPSB0aGlzLl9jaGFsbGVuZ2VJbmZvKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLnBsYXllZC5kYXkpXSA9IHRydWU7XG4gICAgfVxuICB9XG4gIGlzSW5Eb25lU2hvdyh0LCBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luRG9uZVNob3dJZHNbdCArIFwiX1wiICsgZV07XG4gIH1cbiAgaXNGaXJzdEdhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRnJpc3RHYW1lO1xuICB9XG4gIHNldElzRmlyc3RHYW1lKHQpIHtcbiAgICB0aGlzLl9pc0ZyaXN0R2FtZSA9IHQ7XG4gIH1cbiAgZ2V0U2VsZWN0ZWREYXRhKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiBudWxsID09PSAodCA9IHRoaXMuX2NoYWxsZW5nZUluZm8pIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQucGxheWVkO1xuICB9XG4gIHJlc2V0U2hvd0RvbmVEYXkoKSB7XG4gICAgdGhpcy5zaG93RG9uZURheSA9IHtcbiAgICAgIGlkOiAwLFxuICAgICAgZGF5OiAwLFxuICAgICAgdGltZXN0YW1wOiAwXG4gICAgfTtcbiAgfVxuICBnZXREYXlTdGF0dXModCwgZSkge1xuICAgIHZhciBpID0gdGhpcy5fY2hhbGxlbmdlSW5mby5kYWlseUNoYWxsZW5nZURhdGFbXCJcIiArIHRdO1xuICAgIGlmIChpKSB7XG4gICAgICB2YXIgbyA9IGkuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5kYXkgPT09IGU7XG4gICAgICB9KTtcbiAgICAgIGlmIChvKSByZXR1cm4gby5zdGF0dXM7XG4gICAgfVxuICAgIHJldHVybiBEYWlseVN0YXR1cy5VbmxvY2tlZDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRhaWx5TWRsX2l0ZW1VcmxcIilcbiAgZ2V0SXRlbUljb25VcmwodCkge1xuICAgIHZhciBlID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLml0ZW1fY29uZmlnLCB0KTtcbiAgICByZXR1cm4gZSA/IFwidGV4dHVyZS9iYWRnZS9cIiArIGUuSWNvbiA6IFwiXCI7XG4gIH1cbn0iXX0=
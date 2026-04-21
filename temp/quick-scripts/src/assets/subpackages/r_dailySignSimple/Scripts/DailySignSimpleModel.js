"use strict";
cc._RF.push(module, '80f98FOHyBD/KIWoQMZXby/', 'DailySignSimpleModel');
// subpackages/r_dailySignSimple/Scripts/DailySignSimpleModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DailySignSimpleState = void 0;
var Model_1 = require("../../../Scripts/framework/data/Model");
var DailySignSimpleState;
(function (DailySignSimpleState) {
    DailySignSimpleState[DailySignSimpleState["Uncompleted"] = 0] = "Uncompleted";
    DailySignSimpleState[DailySignSimpleState["Ready"] = 1] = "Ready";
    DailySignSimpleState[DailySignSimpleState["Claimed"] = 2] = "Claimed";
})(DailySignSimpleState = exports.DailySignSimpleState || (exports.DailySignSimpleState = {}));
var DailySignSimpleModel = /** @class */ (function (_super) {
    __extends(DailySignSimpleModel, _super);
    function DailySignSimpleModel() {
        var _this = _super.call(this) || this;
        _this._rewardsConfig = [];
        _this.initialize();
        return _this;
    }
    DailySignSimpleModel_1 = DailySignSimpleModel;
    DailySignSimpleModel.prototype.setRewardsConfig = function (t) {
        if (t && t.length === DailySignSimpleModel_1.DAY_COUNT) {
            this._rewardsConfig = t;
        }
        else {
            this._rewardsConfig = this.getDefaultRewardsConfig();
        }
    };
    DailySignSimpleModel.prototype.getRewardForDay = function (t) {
        if (t < 0 || t >= DailySignSimpleModel_1.DAY_COUNT)
            return {
                hintCount: 0,
                shuffleCount: 0
            };
        0 === this._rewardsConfig.length && (this._rewardsConfig = this.getDefaultRewardsConfig());
        return this.convertRewardItems(this._rewardsConfig[t]);
    };
    DailySignSimpleModel.prototype.convertRewardItems = function (t) {
        var e = 0, o = 0;
        t && t.length > 0 && t.forEach(function (t) {
            if (t.itemId === DailySignSimpleModel_1.ITEM_ID.HINT) {
                e += t.count;
            }
            else {
                t.itemId === DailySignSimpleModel_1.ITEM_ID.SHUFFLE && (o += t.count);
            }
        });
        return {
            hintCount: e,
            shuffleCount: o
        };
    };
    DailySignSimpleModel.prototype.getDefaultRewardsConfig = function () {
        var t = DailySignSimpleModel_1.ITEM_ID.SHUFFLE, e = DailySignSimpleModel_1.ITEM_ID.HINT;
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
    };
    DailySignSimpleModel.prototype.initialize = function () {
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
    };
    DailySignSimpleModel.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    DailySignSimpleModel.prototype.updateAccumulatedDays = function () {
        var t = this.getTodayDateString();
        if (this.localData.lastLoginDate !== t) {
            this.localData.lastLoginDate && !this.isConsecutiveDay(this.localData.lastLoginDate, t) && this.resetCycle();
            this.localData.accumulatedDays >= DailySignSimpleModel_1.DAY_COUNT && this.resetCycle();
            this.localData.accumulatedDays += 1;
            this.localData.lastLoginDate = t;
        }
    };
    DailySignSimpleModel.prototype.ensureDays = function () {
        if (!this.localData.days || this.localData.days.length !== DailySignSimpleModel_1.DAY_COUNT) {
            this.localData.days = [];
            for (var t = 0; t < DailySignSimpleModel_1.DAY_COUNT; t++)
                this.localData.days.push({
                    dayIndex: t,
                    claimed: false,
                    claimTime: 0
                });
        }
    };
    DailySignSimpleModel.prototype.getTodayDateString = function () {
        var t = new Date();
        return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
    };
    DailySignSimpleModel.prototype.getDaysBetween = function (t, e) {
        var i = new Date(t).getTime(), o = new Date(e).getTime();
        return Math.floor((o - i) / 86400000);
    };
    DailySignSimpleModel.prototype.isConsecutiveDay = function (t, e) {
        return 1 === this.getDaysBetween(t, e);
    };
    DailySignSimpleModel.prototype.resetCycle = function () {
        this.localData.currentDay = 0;
        this.localData.accumulatedDays = 0;
        this.localData.lastLoginDate = "";
        this.localData.lastClaimDate = "";
        this.localData.cycleStartDate = this.getTodayDateString();
        this.localData.todayShown = false;
        this.localData.lastShownDate = "";
        this.localData.lastShownProgress = 0;
        for (var t = 0; t < DailySignSimpleModel_1.DAY_COUNT; t++) {
            this.localData.days[t].claimed = false;
            this.localData.days[t].claimTime = 0;
        }
        this.localData.days = this.localData.days;
    };
    DailySignSimpleModel.prototype.getCurrentDay = function () {
        return this.localData.currentDay;
    };
    DailySignSimpleModel.prototype.getDays = function () {
        return this.localData.days;
    };
    DailySignSimpleModel.prototype.getDay = function (t) {
        return t < 0 || t >= DailySignSimpleModel_1.DAY_COUNT ? null : this.localData.days[t];
    };
    DailySignSimpleModel.prototype.getDayState = function (t) {
        return t < 0 || t >= DailySignSimpleModel_1.DAY_COUNT ? DailySignSimpleState.Uncompleted : this.localData.days[t].claimed ? DailySignSimpleState.Claimed : t === this.localData.currentDay && this.canClaimToday() ? DailySignSimpleState.Ready : DailySignSimpleState.Uncompleted;
    };
    DailySignSimpleModel.prototype.canClaimToday = function () {
        var t = this.getTodayDateString();
        return this.localData.lastClaimDate !== t && !this.localData.days[this.localData.currentDay].claimed;
    };
    DailySignSimpleModel.prototype.isTodayClaimed = function () {
        var t = this.getTodayDateString();
        return this.localData.lastClaimDate === t;
    };
    DailySignSimpleModel.prototype.claimToday = function () {
        if (!this.canClaimToday())
            return false;
        var t = this.getTodayDateString(), e = this.localData.currentDay;
        this.localData.days[e].claimed = true;
        this.localData.days[e].claimTime = Date.now();
        this.localData.lastClaimDate = t;
        e < DailySignSimpleModel_1.DAY_COUNT - 1 && (this.localData.currentDay = e + 1);
        this.localData.days = this.localData.days;
        return true;
    };
    DailySignSimpleModel.prototype.needShowPopup = function () {
        var t = this.getTodayDateString();
        return this.localData.lastShownDate !== t || !this.localData.todayShown;
    };
    DailySignSimpleModel.prototype.markPopupShown = function () {
        var t = this.getTodayDateString();
        this.localData.todayShown = true;
        this.localData.lastShownDate = t;
    };
    DailySignSimpleModel.prototype.getProgressText = function () {
        return this.localData.days.filter(function (t) {
            return t.claimed;
        }).length + "/" + DailySignSimpleModel_1.DAY_COUNT;
    };
    DailySignSimpleModel.prototype.getClaimedCount = function () {
        return this.localData.days.filter(function (t) {
            return t.claimed;
        }).length;
    };
    DailySignSimpleModel.prototype.isCurrentCycleCompleted = function () {
        return this.localData.days.every(function (t) {
            return t.claimed;
        });
    };
    DailySignSimpleModel.prototype.debugReset = function () { };
    DailySignSimpleModel.prototype.hasNewProgress = function () {
        return this.localData.accumulatedDays > (this.localData.lastShownProgress || 0);
    };
    DailySignSimpleModel.prototype.markProgressShown = function () {
        var t = this.localData.accumulatedDays;
        this.localData.lastShownProgress = t;
    };
    DailySignSimpleModel.prototype.getCurrentProgress = function () {
        return this.localData.accumulatedDays;
    };
    DailySignSimpleModel.prototype.debugSetDay = function () { };
    var DailySignSimpleModel_1;
    DailySignSimpleModel.DAY_COUNT = 7;
    DailySignSimpleModel.ITEM_ID = {
        SHUFFLE: 1001,
        HINT: 1002
    };
    DailySignSimpleModel = DailySignSimpleModel_1 = __decorate([
        mj.class("DailySignSimpleModel")
    ], DailySignSimpleModel);
    return DailySignSimpleModel;
}(Model_1.default));
exports.default = DailySignSimpleModel;

cc._RF.pop();
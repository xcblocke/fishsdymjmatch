"use strict";
cc._RF.push(module, 'd0783PiJi5DYafh+3KLzwwb', 'DailySignClassicModel');
// subpackages/r_dailySignClassic/Scripts/model/DailySignClassicModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../../../Scripts/framework/data/Model");
var DailySignClassicTypes_1 = require("../DailySignClassicTypes");
var NormalGameData_1 = require("../../../../Scripts/core/simulator/data/NormalGameData");
var DailySignClassicModel = /** @class */ (function (_super) {
    __extends(DailySignClassicModel, _super);
    function DailySignClassicModel() {
        var _this = _super.call(this) || this;
        _this.defaultConfig = {
            unlockLevel: 2,
            maxLongTermDays: 12,
            weeklyRewards: _this.getDefaultWeeklyRewards(),
            longTermRewards: _this.getDefaultLongTermRewards()
        };
        _this.initSignData();
        return _this;
    }
    DailySignClassicModel_1 = DailySignClassicModel;
    DailySignClassicModel.prototype.initSignData = function () {
        this.isLocalEmpty(this.localData.consecutiveDays) && (this.localData.consecutiveDays = 0);
        this.isLocalEmpty(this.localData.longTermDays) && (this.localData.longTermDays = 0);
        this.isLocalEmpty(this.localData.lastSignTime) && (this.localData.lastSignTime = 0);
        this.isLocalEmpty(this.localData.hasSigned) && (this.localData.hasSigned = false);
        this.isLocalEmpty(this.localData.claimedLongTermRewards) && (this.localData.claimedLongTermRewards = []);
        this.isLocalEmpty(this.localData.lastAutoPopTime) && (this.localData.lastAutoPopTime = 0);
        this.isLocalEmpty(this.localData.hasOpenedSignView) && (this.localData.hasOpenedSignView = false);
    };
    DailySignClassicModel.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    DailySignClassicModel.prototype.getDefaultWeeklyRewards = function () {
        var t = DailySignClassicModel_1.ITEM_ID.SHUFFLE, e = DailySignClassicModel_1.ITEM_ID.HINT, o = [[{
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
    };
    DailySignClassicModel.prototype.getDefaultLongTermRewards = function () {
        var t = this, e = DailySignClassicModel_1.ITEM_ID.SHUFFLE, o = DailySignClassicModel_1.ITEM_ID.HINT;
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
    };
    DailySignClassicModel.prototype.convertRewardItems = function (t) {
        var e = this;
        return t.map(function (t, i) {
            var o = e.convertRewardItemsToInternal(t);
            return {
                day: i + 1,
                hint: o.hint,
                shuffle: o.shuffle
            };
        });
    };
    DailySignClassicModel.prototype.convertRewardItemsToInternal = function (t) {
        var e = 0, o = 0;
        t && t.length > 0 && t.forEach(function (t) {
            if (t.itemId === DailySignClassicModel_1.ITEM_ID.HINT) {
                e += t.count;
            }
            else {
                t.itemId === DailySignClassicModel_1.ITEM_ID.SHUFFLE && (o += t.count);
            }
        });
        return {
            hint: e,
            shuffle: o
        };
    };
    DailySignClassicModel.prototype.setWeeklyRewardsFromConfig = function (t) {
        t && 7 === t.length && (this.defaultConfig.weeklyRewards = this.convertRewardItems(t));
    };
    DailySignClassicModel.prototype.setLongTermRewardsFromConfig = function (t) {
        var e = this;
        t && 0 !== t.length && (this.defaultConfig.longTermRewards = t.map(function (t) {
            var i = e.convertRewardItemsToInternal(t.items);
            return {
                totalDays: t.totalDays,
                hint: i.hint,
                shuffle: i.shuffle
            };
        }));
    };
    DailySignClassicModel.prototype.getConfig = function () {
        return this.defaultConfig;
    };
    DailySignClassicModel.prototype.isUnlocked = function () {
        return NormalGameData_1.default.getInstance().getLevelId() >= this.defaultConfig.unlockLevel;
    };
    DailySignClassicModel.prototype.checkTodaySigned = function () {
        var t = Date.now(), e = this.localData.lastSignTime;
        if (!e)
            return false;
        var i = new Date(e), o = new Date(t);
        return this.isSameDay(i, o);
    };
    DailySignClassicModel.prototype.hasOpenedSignView = function () {
        return this.localData.hasOpenedSignView;
    };
    DailySignClassicModel.prototype.markSignViewOpened = function () {
        this.localData.hasOpenedSignView = true;
    };
    DailySignClassicModel.prototype.getDayState = function (t) {
        var e = this.localData.consecutiveDays, i = this.checkTodaySigned(), o = this.isConsecutiveSign();
        return !this.localData.lastSignTime || i || o ? e >= 7 && !i ? 1 === t ? DailySignClassicTypes_1.EDailySignState.Claimable : DailySignClassicTypes_1.EDailySignState.Locked : t <= e ? DailySignClassicTypes_1.EDailySignState.Claimed : t !== e + 1 || i ? DailySignClassicTypes_1.EDailySignState.Locked : DailySignClassicTypes_1.EDailySignState.Claimable : 1 === t ? DailySignClassicTypes_1.EDailySignState.Claimable : DailySignClassicTypes_1.EDailySignState.Locked;
    };
    DailySignClassicModel.prototype.isSameDay = function (t, e) {
        return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
    };
    DailySignClassicModel.prototype.isConsecutiveSign = function () {
        var t = Date.now(), e = this.localData.lastSignTime;
        if (!e)
            return false;
        var i = new Date(e), o = new Date(t), n = new Date(o);
        n.setDate(n.getDate() - 1);
        return this.isSameDay(i, n);
    };
    DailySignClassicModel.prototype.signIn = function () {
        var t = Date.now();
        if (!this.checkTodaySigned()) {
            if (this.isConsecutiveSign()) {
                this.localData.consecutiveDays++;
                this.localData.longTermDays++;
            }
            else {
                this.localData.consecutiveDays = 1;
                this.localData.longTermDays++;
            }
            this.localData.consecutiveDays > 7 && (this.localData.consecutiveDays = 1);
            if (this.localData.longTermDays > this.defaultConfig.maxLongTermDays)
                if (this.areAllLongTermRewardsClaimed()) {
                    this.localData.longTermDays = 1;
                    this.localData.claimedLongTermRewards = [];
                }
                else
                    this.localData.longTermDays = this.defaultConfig.maxLongTermDays;
            this.localData.lastSignTime = t;
            this.localData.hasSigned = true;
            this.localData.consecutiveDays = this.localData.consecutiveDays;
            this.localData.longTermDays = this.localData.longTermDays;
            this.localData.lastSignTime = this.localData.lastSignTime;
            this.localData.hasSigned = this.localData.hasSigned;
            this.localData.claimedLongTermRewards = this.localData.claimedLongTermRewards;
        }
    };
    DailySignClassicModel.prototype.getCurrentWeeklyReward = function () {
        var t = this.localData.consecutiveDays, e = this.checkTodaySigned();
        if (t >= 7 && !e)
            return this.defaultConfig.weeklyRewards[0];
        var i = t || 1;
        return this.defaultConfig.weeklyRewards.find(function (t) {
            return t.day === i;
        }) || this.defaultConfig.weeklyRewards[0];
    };
    DailySignClassicModel.prototype.getWeeklyRewards = function () {
        return this.defaultConfig.weeklyRewards;
    };
    DailySignClassicModel.prototype.getLongTermRewards = function () {
        return this.defaultConfig.longTermRewards;
    };
    DailySignClassicModel.prototype.getConsecutiveDays = function () {
        return this.localData.consecutiveDays || 0;
    };
    DailySignClassicModel.prototype.getLongTermDays = function () {
        return this.localData.longTermDays || 0;
    };
    DailySignClassicModel.prototype.canClaimLongTermReward = function (t) {
        return !(this.localData.claimedLongTermRewards.includes(t) || this.localData.longTermDays < t);
    };
    DailySignClassicModel.prototype.claimLongTermReward = function (t) {
        if (!this.canClaimLongTermReward(t))
            return false;
        this.localData.claimedLongTermRewards.push(t);
        this.localData.claimedLongTermRewards = this.localData.claimedLongTermRewards;
        return true;
    };
    DailySignClassicModel.prototype.isLongTermRewardClaimed = function (t) {
        return this.localData.claimedLongTermRewards.includes(t);
    };
    DailySignClassicModel.prototype.areAllLongTermRewardsClaimed = function () {
        var t, e, i = this.defaultConfig.longTermRewards;
        try {
            for (var o = __values(i), n = o.next(); !n.done; n = o.next()) {
                var a = n.value;
                if (this.localData.longTermDays >= a.totalDays && !this.localData.claimedLongTermRewards.includes(a.totalDays))
                    return false;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                n && !n.done && (e = o.return) && e.call(o);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return true;
    };
    DailySignClassicModel.prototype.hasAutoPopedToday = function () {
        var t = this.localData.lastAutoPopTime;
        if (!t)
            return false;
        var e = Date.now(), i = new Date(t), o = new Date(e);
        return i.getFullYear() === o.getFullYear() && i.getMonth() === o.getMonth() && i.getDate() === o.getDate();
    };
    DailySignClassicModel.prototype.markAutoPopedToday = function () {
        this.localData.lastAutoPopTime = Date.now();
    };
    DailySignClassicModel.prototype.resetTodaySign = function () {
        this.localData.hasSigned = false;
        this.localData.lastAutoPopTime = 0;
    };
    DailySignClassicModel.prototype.getTimeToNextDay = function () {
        var t = new Date(), e = new Date(t);
        e.setDate(e.getDate() + 1);
        e.setHours(0, 0, 0, 0);
        return Math.floor((e.getTime() - t.getTime()) / 1000);
    };
    DailySignClassicModel.prototype.formatCountdown = function (t) {
        var e = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
        return this.pad(e) + ":" + this.pad(i) + ":" + this.pad(o);
    };
    DailySignClassicModel.prototype.pad = function (t) {
        return t < 10 ? "0" + t : "" + t;
    };
    var DailySignClassicModel_1;
    DailySignClassicModel.ITEM_ID = {
        SHUFFLE: 1001,
        HINT: 1002
    };
    DailySignClassicModel = DailySignClassicModel_1 = __decorate([
        mj.class("DailySignClassicModel")
    ], DailySignClassicModel);
    return DailySignClassicModel;
}(Model_1.default));
exports.default = DailySignClassicModel;

cc._RF.pop();
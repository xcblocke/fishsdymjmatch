
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dailySignClassic/Scripts/model/DailySignClassicModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RhaWx5U2lnbkNsYXNzaWMvU2NyaXB0cy9tb2RlbC9EYWlseVNpZ25DbGFzc2ljTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCxrRUFBMkQ7QUFDM0QseUZBQW9GO0FBRXBGO0lBQW1ELHlDQUFLO0lBV3REO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBYkQsbUJBQWEsR0FBRztZQUNkLFdBQVcsRUFBRSxDQUFDO1lBQ2QsZUFBZSxFQUFFLEVBQUU7WUFDbkIsYUFBYSxFQUFFLEtBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUM3QyxlQUFlLEVBQUUsS0FBSSxDQUFDLHlCQUF5QixFQUFFO1NBQ2xELENBQUM7UUFPQSxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O0lBQ3RCLENBQUM7OEJBZGtCLHFCQUFxQjtJQWV4Qyw0Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFD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QzdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxtQ0FBRyxHQUFILFVBQUksQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDOztJQWpUTSw2QkFBTyxHQUFHO1FBQ2YsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUM7SUFWaUIscUJBQXFCO1FBRHpDLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0F5VHpDO0lBQUQsNEJBQUM7Q0F6VEQsQUF5VEMsQ0F6VGtELGVBQUssR0F5VHZEO2tCQXpUb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvTW9kZWwnO1xuaW1wb3J0IHsgRURhaWx5U2lnblN0YXRlIH0gZnJvbSAnLi4vRGFpbHlTaWduQ2xhc3NpY1R5cGVzJztcbmltcG9ydCBOb3JtYWxHYW1lRGF0YSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvTm9ybWFsR2FtZURhdGEnO1xuQG1qLmNsYXNzKFwiRGFpbHlTaWduQ2xhc3NpY01vZGVsXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseVNpZ25DbGFzc2ljTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gIGRlZmF1bHRDb25maWcgPSB7XG4gICAgdW5sb2NrTGV2ZWw6IDIsXG4gICAgbWF4TG9uZ1Rlcm1EYXlzOiAxMixcbiAgICB3ZWVrbHlSZXdhcmRzOiB0aGlzLmdldERlZmF1bHRXZWVrbHlSZXdhcmRzKCksXG4gICAgbG9uZ1Rlcm1SZXdhcmRzOiB0aGlzLmdldERlZmF1bHRMb25nVGVybVJld2FyZHMoKVxuICB9O1xuICBzdGF0aWMgSVRFTV9JRCA9IHtcbiAgICBTSFVGRkxFOiAxMDAxLFxuICAgIEhJTlQ6IDEwMDJcbiAgfTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluaXRTaWduRGF0YSgpO1xuICB9XG4gIGluaXRTaWduRGF0YSgpIHtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5jb25zZWN1dGl2ZURheXMpICYmICh0aGlzLmxvY2FsRGF0YS5jb25zZWN1dGl2ZURheXMgPSAwKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5sb25nVGVybURheXMpICYmICh0aGlzLmxvY2FsRGF0YS5sb25nVGVybURheXMgPSAwKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5sYXN0U2lnblRpbWUpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0U2lnblRpbWUgPSAwKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5oYXNTaWduZWQpICYmICh0aGlzLmxvY2FsRGF0YS5oYXNTaWduZWQgPSBmYWxzZSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY2xhaW1lZExvbmdUZXJtUmV3YXJkcykgJiYgKHRoaXMubG9jYWxEYXRhLmNsYWltZWRMb25nVGVybVJld2FyZHMgPSBbXSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdEF1dG9Qb3BUaW1lKSAmJiAodGhpcy5sb2NhbERhdGEubGFzdEF1dG9Qb3BUaW1lID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuaGFzT3BlbmVkU2lnblZpZXcpICYmICh0aGlzLmxvY2FsRGF0YS5oYXNPcGVuZWRTaWduVmlldyA9IGZhbHNlKTtcbiAgfVxuICBpc0xvY2FsRW1wdHkodCkge1xuICAgIHJldHVybiBudWxsID09IHQgfHwgXCJcIiA9PT0gdDtcbiAgfVxuICBnZXREZWZhdWx0V2Vla2x5UmV3YXJkcygpIHtcbiAgICB2YXIgdCA9IERhaWx5U2lnbkNsYXNzaWNNb2RlbC5JVEVNX0lELlNIVUZGTEUsXG4gICAgICBlID0gRGFpbHlTaWduQ2xhc3NpY01vZGVsLklURU1fSUQuSElOVCxcbiAgICAgIG8gPSBbW3tcbiAgICAgICAgaXRlbUlkOiB0LFxuICAgICAgICBjb3VudDogMVxuICAgICAgfSwge1xuICAgICAgICBpdGVtSWQ6IGUsXG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9XSwgW3tcbiAgICAgICAgaXRlbUlkOiB0LFxuICAgICAgICBjb3VudDogMVxuICAgICAgfSwge1xuICAgICAgICBpdGVtSWQ6IGUsXG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9XSwgW3tcbiAgICAgICAgaXRlbUlkOiB0LFxuICAgICAgICBjb3VudDogMVxuICAgICAgfSwge1xuICAgICAgICBpdGVtSWQ6IGUsXG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9XSwgW3tcbiAgICAgICAgaXRlbUlkOiB0LFxuICAgICAgICBjb3VudDogMVxuICAgICAgfSwge1xuICAgICAgICBpdGVtSWQ6IGUsXG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9XSwgW3tcbiAgICAgICAgaXRlbUlkOiB0LFxuICAgICAgICBjb3VudDogMVxuICAgICAgfSwge1xuICAgICAgICBpdGVtSWQ6IGUsXG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9XSwgW3tcbiAgICAgICAgaXRlbUlkOiB0LFxuICAgICAgICBjb3VudDogMVxuICAgICAgfSwge1xuICAgICAgICBpdGVtSWQ6IGUsXG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9XSwgW3tcbiAgICAgICAgaXRlbUlkOiB0LFxuICAgICAgICBjb3VudDogMVxuICAgICAgfSwge1xuICAgICAgICBpdGVtSWQ6IGUsXG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9XV07XG4gICAgcmV0dXJuIHRoaXMuY29udmVydFJld2FyZEl0ZW1zKG8pO1xuICB9XG4gIGdldERlZmF1bHRMb25nVGVybVJld2FyZHMoKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgZSA9IERhaWx5U2lnbkNsYXNzaWNNb2RlbC5JVEVNX0lELlNIVUZGTEUsXG4gICAgICBvID0gRGFpbHlTaWduQ2xhc3NpY01vZGVsLklURU1fSUQuSElOVDtcbiAgICByZXR1cm4gW3tcbiAgICAgIHRvdGFsRGF5czogMyxcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBpdGVtSWQ6IGUsXG4gICAgICAgIGNvdW50OiAyXG4gICAgICB9LCB7XG4gICAgICAgIGl0ZW1JZDogbyxcbiAgICAgICAgY291bnQ6IDJcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgdG90YWxEYXlzOiA2LFxuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGl0ZW1JZDogZSxcbiAgICAgICAgY291bnQ6IDNcbiAgICAgIH0sIHtcbiAgICAgICAgaXRlbUlkOiBvLFxuICAgICAgICBjb3VudDogM1xuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICB0b3RhbERheXM6IDksXG4gICAgICBpdGVtczogW3tcbiAgICAgICAgaXRlbUlkOiBlLFxuICAgICAgICBjb3VudDogNVxuICAgICAgfSwge1xuICAgICAgICBpdGVtSWQ6IG8sXG4gICAgICAgIGNvdW50OiA1XG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIHRvdGFsRGF5czogMTIsXG4gICAgICBpdGVtczogW3tcbiAgICAgICAgaXRlbUlkOiBlLFxuICAgICAgICBjb3VudDogMTBcbiAgICAgIH0sIHtcbiAgICAgICAgaXRlbUlkOiBvLFxuICAgICAgICBjb3VudDogMTBcbiAgICAgIH1dXG4gICAgfV0ubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgaSA9IHQuY29udmVydFJld2FyZEl0ZW1zVG9JbnRlcm5hbChlLml0ZW1zKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvdGFsRGF5czogZS50b3RhbERheXMsXG4gICAgICAgIGhpbnQ6IGkuaGludCxcbiAgICAgICAgc2h1ZmZsZTogaS5zaHVmZmxlXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIGNvbnZlcnRSZXdhcmRJdGVtcyh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHJldHVybiB0Lm1hcChmdW5jdGlvbiAodCwgaSkge1xuICAgICAgdmFyIG8gPSBlLmNvbnZlcnRSZXdhcmRJdGVtc1RvSW50ZXJuYWwodCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXk6IGkgKyAxLFxuICAgICAgICBoaW50OiBvLmhpbnQsXG4gICAgICAgIHNodWZmbGU6IG8uc2h1ZmZsZVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBjb252ZXJ0UmV3YXJkSXRlbXNUb0ludGVybmFsKHQpIHtcbiAgICB2YXIgZSA9IDAsXG4gICAgICBvID0gMDtcbiAgICB0ICYmIHQubGVuZ3RoID4gMCAmJiB0LmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGlmICh0Lml0ZW1JZCA9PT0gRGFpbHlTaWduQ2xhc3NpY01vZGVsLklURU1fSUQuSElOVCkge1xuICAgICAgICBlICs9IHQuY291bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0Lml0ZW1JZCA9PT0gRGFpbHlTaWduQ2xhc3NpY01vZGVsLklURU1fSUQuU0hVRkZMRSAmJiAobyArPSB0LmNvdW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgaGludDogZSxcbiAgICAgIHNodWZmbGU6IG9cbiAgICB9O1xuICB9XG4gIHNldFdlZWtseVJld2FyZHNGcm9tQ29uZmlnKHQpIHtcbiAgICB0ICYmIDcgPT09IHQubGVuZ3RoICYmICh0aGlzLmRlZmF1bHRDb25maWcud2Vla2x5UmV3YXJkcyA9IHRoaXMuY29udmVydFJld2FyZEl0ZW1zKHQpKTtcbiAgfVxuICBzZXRMb25nVGVybVJld2FyZHNGcm9tQ29uZmlnKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdCAmJiAwICE9PSB0Lmxlbmd0aCAmJiAodGhpcy5kZWZhdWx0Q29uZmlnLmxvbmdUZXJtUmV3YXJkcyA9IHQubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgaSA9IGUuY29udmVydFJld2FyZEl0ZW1zVG9JbnRlcm5hbCh0Lml0ZW1zKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvdGFsRGF5czogdC50b3RhbERheXMsXG4gICAgICAgIGhpbnQ6IGkuaGludCxcbiAgICAgICAgc2h1ZmZsZTogaS5zaHVmZmxlXG4gICAgICB9O1xuICAgIH0pKTtcbiAgfVxuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbmZpZztcbiAgfVxuICBpc1VubG9ja2VkKCkge1xuICAgIHJldHVybiBOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldExldmVsSWQoKSA+PSB0aGlzLmRlZmF1bHRDb25maWcudW5sb2NrTGV2ZWw7XG4gIH1cbiAgY2hlY2tUb2RheVNpZ25lZCgpIHtcbiAgICB2YXIgdCA9IERhdGUubm93KCksXG4gICAgICBlID0gdGhpcy5sb2NhbERhdGEubGFzdFNpZ25UaW1lO1xuICAgIGlmICghZSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBpID0gbmV3IERhdGUoZSksXG4gICAgICBvID0gbmV3IERhdGUodCk7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lRGF5KGksIG8pO1xuICB9XG4gIGhhc09wZW5lZFNpZ25WaWV3KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5oYXNPcGVuZWRTaWduVmlldztcbiAgfVxuICBtYXJrU2lnblZpZXdPcGVuZWQoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuaGFzT3BlbmVkU2lnblZpZXcgPSB0cnVlO1xuICB9XG4gIGdldERheVN0YXRlKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMubG9jYWxEYXRhLmNvbnNlY3V0aXZlRGF5cyxcbiAgICAgIGkgPSB0aGlzLmNoZWNrVG9kYXlTaWduZWQoKSxcbiAgICAgIG8gPSB0aGlzLmlzQ29uc2VjdXRpdmVTaWduKCk7XG4gICAgcmV0dXJuICF0aGlzLmxvY2FsRGF0YS5sYXN0U2lnblRpbWUgfHwgaSB8fCBvID8gZSA+PSA3ICYmICFpID8gMSA9PT0gdCA/IEVEYWlseVNpZ25TdGF0ZS5DbGFpbWFibGUgOiBFRGFpbHlTaWduU3RhdGUuTG9ja2VkIDogdCA8PSBlID8gRURhaWx5U2lnblN0YXRlLkNsYWltZWQgOiB0ICE9PSBlICsgMSB8fCBpID8gRURhaWx5U2lnblN0YXRlLkxvY2tlZCA6IEVEYWlseVNpZ25TdGF0ZS5DbGFpbWFibGUgOiAxID09PSB0ID8gRURhaWx5U2lnblN0YXRlLkNsYWltYWJsZSA6IEVEYWlseVNpZ25TdGF0ZS5Mb2NrZWQ7XG4gIH1cbiAgaXNTYW1lRGF5KHQsIGUpIHtcbiAgICByZXR1cm4gdC5nZXRGdWxsWWVhcigpID09PSBlLmdldEZ1bGxZZWFyKCkgJiYgdC5nZXRNb250aCgpID09PSBlLmdldE1vbnRoKCkgJiYgdC5nZXREYXRlKCkgPT09IGUuZ2V0RGF0ZSgpO1xuICB9XG4gIGlzQ29uc2VjdXRpdmVTaWduKCkge1xuICAgIHZhciB0ID0gRGF0ZS5ub3coKSxcbiAgICAgIGUgPSB0aGlzLmxvY2FsRGF0YS5sYXN0U2lnblRpbWU7XG4gICAgaWYgKCFlKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGkgPSBuZXcgRGF0ZShlKSxcbiAgICAgIG8gPSBuZXcgRGF0ZSh0KSxcbiAgICAgIG4gPSBuZXcgRGF0ZShvKTtcbiAgICBuLnNldERhdGUobi5nZXREYXRlKCkgLSAxKTtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWVEYXkoaSwgbik7XG4gIH1cbiAgc2lnbkluKCkge1xuICAgIHZhciB0ID0gRGF0ZS5ub3coKTtcbiAgICBpZiAoIXRoaXMuY2hlY2tUb2RheVNpZ25lZCgpKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbnNlY3V0aXZlU2lnbigpKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmNvbnNlY3V0aXZlRGF5cysrO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sb25nVGVybURheXMrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmNvbnNlY3V0aXZlRGF5cyA9IDE7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxvbmdUZXJtRGF5cysrO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2NhbERhdGEuY29uc2VjdXRpdmVEYXlzID4gNyAmJiAodGhpcy5sb2NhbERhdGEuY29uc2VjdXRpdmVEYXlzID0gMSk7XG4gICAgICBpZiAodGhpcy5sb2NhbERhdGEubG9uZ1Rlcm1EYXlzID4gdGhpcy5kZWZhdWx0Q29uZmlnLm1heExvbmdUZXJtRGF5cykgaWYgKHRoaXMuYXJlQWxsTG9uZ1Rlcm1SZXdhcmRzQ2xhaW1lZCgpKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxvbmdUZXJtRGF5cyA9IDE7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmNsYWltZWRMb25nVGVybVJld2FyZHMgPSBbXTtcbiAgICAgIH0gZWxzZSB0aGlzLmxvY2FsRGF0YS5sb25nVGVybURheXMgPSB0aGlzLmRlZmF1bHRDb25maWcubWF4TG9uZ1Rlcm1EYXlzO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFNpZ25UaW1lID0gdDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmhhc1NpZ25lZCA9IHRydWU7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5jb25zZWN1dGl2ZURheXMgPSB0aGlzLmxvY2FsRGF0YS5jb25zZWN1dGl2ZURheXM7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sb25nVGVybURheXMgPSB0aGlzLmxvY2FsRGF0YS5sb25nVGVybURheXM7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0U2lnblRpbWUgPSB0aGlzLmxvY2FsRGF0YS5sYXN0U2lnblRpbWU7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5oYXNTaWduZWQgPSB0aGlzLmxvY2FsRGF0YS5oYXNTaWduZWQ7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5jbGFpbWVkTG9uZ1Rlcm1SZXdhcmRzID0gdGhpcy5sb2NhbERhdGEuY2xhaW1lZExvbmdUZXJtUmV3YXJkcztcbiAgICB9XG4gIH1cbiAgZ2V0Q3VycmVudFdlZWtseVJld2FyZCgpIHtcbiAgICB2YXIgdCA9IHRoaXMubG9jYWxEYXRhLmNvbnNlY3V0aXZlRGF5cyxcbiAgICAgIGUgPSB0aGlzLmNoZWNrVG9kYXlTaWduZWQoKTtcbiAgICBpZiAodCA+PSA3ICYmICFlKSByZXR1cm4gdGhpcy5kZWZhdWx0Q29uZmlnLndlZWtseVJld2FyZHNbMF07XG4gICAgdmFyIGkgPSB0IHx8IDE7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbmZpZy53ZWVrbHlSZXdhcmRzLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LmRheSA9PT0gaTtcbiAgICB9KSB8fCB0aGlzLmRlZmF1bHRDb25maWcud2Vla2x5UmV3YXJkc1swXTtcbiAgfVxuICBnZXRXZWVrbHlSZXdhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRDb25maWcud2Vla2x5UmV3YXJkcztcbiAgfVxuICBnZXRMb25nVGVybVJld2FyZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbmZpZy5sb25nVGVybVJld2FyZHM7XG4gIH1cbiAgZ2V0Q29uc2VjdXRpdmVEYXlzKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5jb25zZWN1dGl2ZURheXMgfHwgMDtcbiAgfVxuICBnZXRMb25nVGVybURheXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmxvbmdUZXJtRGF5cyB8fCAwO1xuICB9XG4gIGNhbkNsYWltTG9uZ1Rlcm1SZXdhcmQodCkge1xuICAgIHJldHVybiAhKHRoaXMubG9jYWxEYXRhLmNsYWltZWRMb25nVGVybVJld2FyZHMuaW5jbHVkZXModCkgfHwgdGhpcy5sb2NhbERhdGEubG9uZ1Rlcm1EYXlzIDwgdCk7XG4gIH1cbiAgY2xhaW1Mb25nVGVybVJld2FyZCh0KSB7XG4gICAgaWYgKCF0aGlzLmNhbkNsYWltTG9uZ1Rlcm1SZXdhcmQodCkpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5jbGFpbWVkTG9uZ1Rlcm1SZXdhcmRzLnB1c2godCk7XG4gICAgdGhpcy5sb2NhbERhdGEuY2xhaW1lZExvbmdUZXJtUmV3YXJkcyA9IHRoaXMubG9jYWxEYXRhLmNsYWltZWRMb25nVGVybVJld2FyZHM7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaXNMb25nVGVybVJld2FyZENsYWltZWQodCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5jbGFpbWVkTG9uZ1Rlcm1SZXdhcmRzLmluY2x1ZGVzKHQpO1xuICB9XG4gIGFyZUFsbExvbmdUZXJtUmV3YXJkc0NsYWltZWQoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgaSA9IHRoaXMuZGVmYXVsdENvbmZpZy5sb25nVGVybVJld2FyZHM7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyhpKSwgbiA9IG8ubmV4dCgpOyAhbi5kb25lOyBuID0gby5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGEgPSBuLnZhbHVlO1xuICAgICAgICBpZiAodGhpcy5sb2NhbERhdGEubG9uZ1Rlcm1EYXlzID49IGEudG90YWxEYXlzICYmICF0aGlzLmxvY2FsRGF0YS5jbGFpbWVkTG9uZ1Rlcm1SZXdhcmRzLmluY2x1ZGVzKGEudG90YWxEYXlzKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBuICYmICFuLmRvbmUgJiYgKGUgPSBvLnJldHVybikgJiYgZS5jYWxsKG8pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGhhc0F1dG9Qb3BlZFRvZGF5KCkge1xuICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEubGFzdEF1dG9Qb3BUaW1lO1xuICAgIGlmICghdCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBlID0gRGF0ZS5ub3coKSxcbiAgICAgIGkgPSBuZXcgRGF0ZSh0KSxcbiAgICAgIG8gPSBuZXcgRGF0ZShlKTtcbiAgICByZXR1cm4gaS5nZXRGdWxsWWVhcigpID09PSBvLmdldEZ1bGxZZWFyKCkgJiYgaS5nZXRNb250aCgpID09PSBvLmdldE1vbnRoKCkgJiYgaS5nZXREYXRlKCkgPT09IG8uZ2V0RGF0ZSgpO1xuICB9XG4gIG1hcmtBdXRvUG9wZWRUb2RheSgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0QXV0b1BvcFRpbWUgPSBEYXRlLm5vdygpO1xuICB9XG4gIHJlc2V0VG9kYXlTaWduKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmhhc1NpZ25lZCA9IGZhbHNlO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RBdXRvUG9wVGltZSA9IDA7XG4gIH1cbiAgZ2V0VGltZVRvTmV4dERheSgpIHtcbiAgICB2YXIgdCA9IG5ldyBEYXRlKCksXG4gICAgICBlID0gbmV3IERhdGUodCk7XG4gICAgZS5zZXREYXRlKGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoZS5nZXRUaW1lKCkgLSB0LmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgfVxuICBmb3JtYXRDb3VudGRvd24odCkge1xuICAgIHZhciBlID0gTWF0aC5mbG9vcih0IC8gMzYwMCksXG4gICAgICBpID0gTWF0aC5mbG9vcih0ICUgMzYwMCAvIDYwKSxcbiAgICAgIG8gPSB0ICUgNjA7XG4gICAgcmV0dXJuIHRoaXMucGFkKGUpICsgXCI6XCIgKyB0aGlzLnBhZChpKSArIFwiOlwiICsgdGhpcy5wYWQobyk7XG4gIH1cbiAgcGFkKHQpIHtcbiAgICByZXR1cm4gdCA8IDEwID8gXCIwXCIgKyB0IDogXCJcIiArIHQ7XG4gIH1cbn0iXX0=
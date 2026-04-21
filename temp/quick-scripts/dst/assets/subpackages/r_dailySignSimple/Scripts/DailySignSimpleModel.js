
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dailySignSimple/Scripts/DailySignSimpleModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RhaWx5U2lnblNpbXBsZS9TY3JpcHRzL0RhaWx5U2lnblNpbXBsZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELElBQVksb0JBSVg7QUFKRCxXQUFZLG9CQUFvQjtJQUM5Qiw2RUFBZSxDQUFBO0lBQ2YsaUVBQVMsQ0FBQTtJQUNULHFFQUFXLENBQUE7QUFDYixDQUFDLEVBSlcsb0JBQW9CLEdBQXBCLDRCQUFvQixLQUFwQiw0QkFBb0IsUUFJL0I7QUFFRDtJQUFrRCx3Q0FBSztJQU9yRDtRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQVRELG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBUWxCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7SUFDcEIsQ0FBQzs2QkFWa0Isb0JBQW9CO0lBV3ZDLCtDQUFnQixHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssc0JBQW9CLENBQUMsU0FBUyxFQUFFO1lBQ3BELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUNELDhDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksc0JBQW9CLENBQUMsU0FBUztZQUFFLE9BQU87Z0JBQ3ZELFNBQVMsRUFBRSxDQUFDO2dCQUNaLFlBQVksRUFBRSxDQUFDO2FBQ2hCLENBQUM7UUFDRixDQUFDLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUM7UUFDM0YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENB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QUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QseUNBQVUsR0FBVixjQUFjLENBQUM7SUFDZiw2Q0FBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNELGdEQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxpREFBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO0lBQ3hDLENBQUM7SUFDRCwwQ0FBVyxHQUFYLGNBQWUsQ0FBQzs7SUF2TlQsOEJBQVMsR0FBRyxDQUFDLENBQUM7SUFDZCw0QkFBTyxHQUFHO1FBQ2YsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUM7SUFOaUIsb0JBQW9CO1FBRHhDLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0EwTnhDO0lBQUQsMkJBQUM7Q0ExTkQsQUEwTkMsQ0ExTmlELGVBQUssR0EwTnREO2tCQTFOb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvTW9kZWwnO1xuZXhwb3J0IGVudW0gRGFpbHlTaWduU2ltcGxlU3RhdGUge1xuICBVbmNvbXBsZXRlZCA9IDAsXG4gIFJlYWR5ID0gMSxcbiAgQ2xhaW1lZCA9IDIsXG59XG5AbWouY2xhc3MoXCJEYWlseVNpZ25TaW1wbGVNb2RlbFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlTaWduU2ltcGxlTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gIF9yZXdhcmRzQ29uZmlnID0gW107XG4gIHN0YXRpYyBEQVlfQ09VTlQgPSA3O1xuICBzdGF0aWMgSVRFTV9JRCA9IHtcbiAgICBTSFVGRkxFOiAxMDAxLFxuICAgIEhJTlQ6IDEwMDJcbiAgfTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuICBzZXRSZXdhcmRzQ29uZmlnKHQpIHtcbiAgICBpZiAodCAmJiB0Lmxlbmd0aCA9PT0gRGFpbHlTaWduU2ltcGxlTW9kZWwuREFZX0NPVU5UKSB7XG4gICAgICB0aGlzLl9yZXdhcmRzQ29uZmlnID0gdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmV3YXJkc0NvbmZpZyA9IHRoaXMuZ2V0RGVmYXVsdFJld2FyZHNDb25maWcoKTtcbiAgICB9XG4gIH1cbiAgZ2V0UmV3YXJkRm9yRGF5KHQpIHtcbiAgICBpZiAodCA8IDAgfHwgdCA+PSBEYWlseVNpZ25TaW1wbGVNb2RlbC5EQVlfQ09VTlQpIHJldHVybiB7XG4gICAgICBoaW50Q291bnQ6IDAsXG4gICAgICBzaHVmZmxlQ291bnQ6IDBcbiAgICB9O1xuICAgIDAgPT09IHRoaXMuX3Jld2FyZHNDb25maWcubGVuZ3RoICYmICh0aGlzLl9yZXdhcmRzQ29uZmlnID0gdGhpcy5nZXREZWZhdWx0UmV3YXJkc0NvbmZpZygpKTtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0UmV3YXJkSXRlbXModGhpcy5fcmV3YXJkc0NvbmZpZ1t0XSk7XG4gIH1cbiAgY29udmVydFJld2FyZEl0ZW1zKHQpIHtcbiAgICB2YXIgZSA9IDAsXG4gICAgICBvID0gMDtcbiAgICB0ICYmIHQubGVuZ3RoID4gMCAmJiB0LmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGlmICh0Lml0ZW1JZCA9PT0gRGFpbHlTaWduU2ltcGxlTW9kZWwuSVRFTV9JRC5ISU5UKSB7XG4gICAgICAgIGUgKz0gdC5jb3VudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQuaXRlbUlkID09PSBEYWlseVNpZ25TaW1wbGVNb2RlbC5JVEVNX0lELlNIVUZGTEUgJiYgKG8gKz0gdC5jb3VudCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhpbnRDb3VudDogZSxcbiAgICAgIHNodWZmbGVDb3VudDogb1xuICAgIH07XG4gIH1cbiAgZ2V0RGVmYXVsdFJld2FyZHNDb25maWcoKSB7XG4gICAgdmFyIHQgPSBEYWlseVNpZ25TaW1wbGVNb2RlbC5JVEVNX0lELlNIVUZGTEUsXG4gICAgICBlID0gRGFpbHlTaWduU2ltcGxlTW9kZWwuSVRFTV9JRC5ISU5UO1xuICAgIHJldHVybiBbW3tcbiAgICAgIGl0ZW1JZDogdCxcbiAgICAgIGNvdW50OiAxXG4gICAgfSwge1xuICAgICAgaXRlbUlkOiBlLFxuICAgICAgY291bnQ6IDFcbiAgICB9XSwgW3tcbiAgICAgIGl0ZW1JZDogdCxcbiAgICAgIGNvdW50OiAxXG4gICAgfSwge1xuICAgICAgaXRlbUlkOiBlLFxuICAgICAgY291bnQ6IDFcbiAgICB9XSwgW3tcbiAgICAgIGl0ZW1JZDogdCxcbiAgICAgIGNvdW50OiAyXG4gICAgfSwge1xuICAgICAgaXRlbUlkOiBlLFxuICAgICAgY291bnQ6IDJcbiAgICB9XSwgW3tcbiAgICAgIGl0ZW1JZDogdCxcbiAgICAgIGNvdW50OiAyXG4gICAgfSwge1xuICAgICAgaXRlbUlkOiBlLFxuICAgICAgY291bnQ6IDJcbiAgICB9XSwgW3tcbiAgICAgIGl0ZW1JZDogdCxcbiAgICAgIGNvdW50OiAzXG4gICAgfSwge1xuICAgICAgaXRlbUlkOiBlLFxuICAgICAgY291bnQ6IDNcbiAgICB9XSwgW3tcbiAgICAgIGl0ZW1JZDogdCxcbiAgICAgIGNvdW50OiAzXG4gICAgfSwge1xuICAgICAgaXRlbUlkOiBlLFxuICAgICAgY291bnQ6IDNcbiAgICB9XSwgW3tcbiAgICAgIGl0ZW1JZDogdCxcbiAgICAgIGNvdW50OiA1XG4gICAgfSwge1xuICAgICAgaXRlbUlkOiBlLFxuICAgICAgY291bnQ6IDVcbiAgICB9XV07XG4gIH1cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5jdXJyZW50RGF5KSAmJiAodGhpcy5sb2NhbERhdGEuY3VycmVudERheSA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmFjY3VtdWxhdGVkRGF5cykgJiYgKHRoaXMubG9jYWxEYXRhLmFjY3VtdWxhdGVkRGF5cyA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RMb2dpbkRhdGUpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0TG9naW5EYXRlID0gXCJcIik7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdENsYWltRGF0ZSkgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RDbGFpbURhdGUgPSBcIlwiKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS50b2RheVNob3duKSAmJiAodGhpcy5sb2NhbERhdGEudG9kYXlTaG93biA9IGZhbHNlKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5sYXN0U2hvd25EYXRlKSAmJiAodGhpcy5sb2NhbERhdGEubGFzdFNob3duRGF0ZSA9IFwiXCIpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmN5Y2xlU3RhcnREYXRlKSAmJiAodGhpcy5sb2NhbERhdGEuY3ljbGVTdGFydERhdGUgPSBcIlwiKTtcbiAgICB0aGlzLmVuc3VyZURheXMoKTtcbiAgICB0aGlzLnVwZGF0ZUFjY3VtdWxhdGVkRGF5cygpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RTaG93blByb2dyZXNzKSAmJiAodGhpcy5sb2NhbERhdGEubGFzdFNob3duUHJvZ3Jlc3MgPSB0aGlzLmxvY2FsRGF0YS5hY2N1bXVsYXRlZERheXMpO1xuICAgIHZhciB0ID0gdGhpcy5nZXRUb2RheURhdGVTdHJpbmcoKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0U2hvd25EYXRlICE9PSB0ICYmICh0aGlzLmxvY2FsRGF0YS50b2RheVNob3duID0gZmFsc2UpO1xuICB9XG4gIGlzTG9jYWxFbXB0eSh0KSB7XG4gICAgcmV0dXJuIG51bGwgPT0gdCB8fCBcIlwiID09PSB0O1xuICB9XG4gIHVwZGF0ZUFjY3VtdWxhdGVkRGF5cygpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0VG9kYXlEYXRlU3RyaW5nKCk7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLmxhc3RMb2dpbkRhdGUgIT09IHQpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RMb2dpbkRhdGUgJiYgIXRoaXMuaXNDb25zZWN1dGl2ZURheSh0aGlzLmxvY2FsRGF0YS5sYXN0TG9naW5EYXRlLCB0KSAmJiB0aGlzLnJlc2V0Q3ljbGUoKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmFjY3VtdWxhdGVkRGF5cyA+PSBEYWlseVNpZ25TaW1wbGVNb2RlbC5EQVlfQ09VTlQgJiYgdGhpcy5yZXNldEN5Y2xlKCk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5hY2N1bXVsYXRlZERheXMgKz0gMTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RMb2dpbkRhdGUgPSB0O1xuICAgIH1cbiAgfVxuICBlbnN1cmVEYXlzKCkge1xuICAgIGlmICghdGhpcy5sb2NhbERhdGEuZGF5cyB8fCB0aGlzLmxvY2FsRGF0YS5kYXlzLmxlbmd0aCAhPT0gRGFpbHlTaWduU2ltcGxlTW9kZWwuREFZX0NPVU5UKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5kYXlzID0gW107XG4gICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IERhaWx5U2lnblNpbXBsZU1vZGVsLkRBWV9DT1VOVDsgdCsrKSB0aGlzLmxvY2FsRGF0YS5kYXlzLnB1c2goe1xuICAgICAgICBkYXlJbmRleDogdCxcbiAgICAgICAgY2xhaW1lZDogZmFsc2UsXG4gICAgICAgIGNsYWltVGltZTogMFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdldFRvZGF5RGF0ZVN0cmluZygpIHtcbiAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIHQuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgU3RyaW5nKHQuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKSArIFwiLVwiICsgU3RyaW5nKHQuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIH1cbiAgZ2V0RGF5c0JldHdlZW4odCwgZSkge1xuICAgIHZhciBpID0gbmV3IERhdGUodCkuZ2V0VGltZSgpLFxuICAgICAgbyA9IG5ldyBEYXRlKGUpLmdldFRpbWUoKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigobyAtIGkpIC8gODY0MDAwMDApO1xuICB9XG4gIGlzQ29uc2VjdXRpdmVEYXkodCwgZSkge1xuICAgIHJldHVybiAxID09PSB0aGlzLmdldERheXNCZXR3ZWVuKHQsIGUpO1xuICB9XG4gIHJlc2V0Q3ljbGUoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuY3VycmVudERheSA9IDA7XG4gICAgdGhpcy5sb2NhbERhdGEuYWNjdW11bGF0ZWREYXlzID0gMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TG9naW5EYXRlID0gXCJcIjtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0Q2xhaW1EYXRlID0gXCJcIjtcbiAgICB0aGlzLmxvY2FsRGF0YS5jeWNsZVN0YXJ0RGF0ZSA9IHRoaXMuZ2V0VG9kYXlEYXRlU3RyaW5nKCk7XG4gICAgdGhpcy5sb2NhbERhdGEudG9kYXlTaG93biA9IGZhbHNlO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RTaG93bkRhdGUgPSBcIlwiO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RTaG93blByb2dyZXNzID0gMDtcbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IERhaWx5U2lnblNpbXBsZU1vZGVsLkRBWV9DT1VOVDsgdCsrKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5kYXlzW3RdLmNsYWltZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmRheXNbdF0uY2xhaW1UaW1lID0gMDtcbiAgICB9XG4gICAgdGhpcy5sb2NhbERhdGEuZGF5cyA9IHRoaXMubG9jYWxEYXRhLmRheXM7XG4gIH1cbiAgZ2V0Q3VycmVudERheSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuY3VycmVudERheTtcbiAgfVxuICBnZXREYXlzKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5kYXlzO1xuICB9XG4gIGdldERheSh0KSB7XG4gICAgcmV0dXJuIHQgPCAwIHx8IHQgPj0gRGFpbHlTaWduU2ltcGxlTW9kZWwuREFZX0NPVU5UID8gbnVsbCA6IHRoaXMubG9jYWxEYXRhLmRheXNbdF07XG4gIH1cbiAgZ2V0RGF5U3RhdGUodCkge1xuICAgIHJldHVybiB0IDwgMCB8fCB0ID49IERhaWx5U2lnblNpbXBsZU1vZGVsLkRBWV9DT1VOVCA/IERhaWx5U2lnblNpbXBsZVN0YXRlLlVuY29tcGxldGVkIDogdGhpcy5sb2NhbERhdGEuZGF5c1t0XS5jbGFpbWVkID8gRGFpbHlTaWduU2ltcGxlU3RhdGUuQ2xhaW1lZCA6IHQgPT09IHRoaXMubG9jYWxEYXRhLmN1cnJlbnREYXkgJiYgdGhpcy5jYW5DbGFpbVRvZGF5KCkgPyBEYWlseVNpZ25TaW1wbGVTdGF0ZS5SZWFkeSA6IERhaWx5U2lnblNpbXBsZVN0YXRlLlVuY29tcGxldGVkO1xuICB9XG4gIGNhbkNsYWltVG9kYXkoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldFRvZGF5RGF0ZVN0cmluZygpO1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0Q2xhaW1EYXRlICE9PSB0ICYmICF0aGlzLmxvY2FsRGF0YS5kYXlzW3RoaXMubG9jYWxEYXRhLmN1cnJlbnREYXldLmNsYWltZWQ7XG4gIH1cbiAgaXNUb2RheUNsYWltZWQoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldFRvZGF5RGF0ZVN0cmluZygpO1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0Q2xhaW1EYXRlID09PSB0O1xuICB9XG4gIGNsYWltVG9kYXkoKSB7XG4gICAgaWYgKCF0aGlzLmNhbkNsYWltVG9kYXkoKSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciB0ID0gdGhpcy5nZXRUb2RheURhdGVTdHJpbmcoKSxcbiAgICAgIGUgPSB0aGlzLmxvY2FsRGF0YS5jdXJyZW50RGF5O1xuICAgIHRoaXMubG9jYWxEYXRhLmRheXNbZV0uY2xhaW1lZCA9IHRydWU7XG4gICAgdGhpcy5sb2NhbERhdGEuZGF5c1tlXS5jbGFpbVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RDbGFpbURhdGUgPSB0O1xuICAgIGUgPCBEYWlseVNpZ25TaW1wbGVNb2RlbC5EQVlfQ09VTlQgLSAxICYmICh0aGlzLmxvY2FsRGF0YS5jdXJyZW50RGF5ID0gZSArIDEpO1xuICAgIHRoaXMubG9jYWxEYXRhLmRheXMgPSB0aGlzLmxvY2FsRGF0YS5kYXlzO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG5lZWRTaG93UG9wdXAoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldFRvZGF5RGF0ZVN0cmluZygpO1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0U2hvd25EYXRlICE9PSB0IHx8ICF0aGlzLmxvY2FsRGF0YS50b2RheVNob3duO1xuICB9XG4gIG1hcmtQb3B1cFNob3duKCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRUb2RheURhdGVTdHJpbmcoKTtcbiAgICB0aGlzLmxvY2FsRGF0YS50b2RheVNob3duID0gdHJ1ZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0U2hvd25EYXRlID0gdDtcbiAgfVxuICBnZXRQcm9ncmVzc1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmRheXMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5jbGFpbWVkO1xuICAgIH0pLmxlbmd0aCArIFwiL1wiICsgRGFpbHlTaWduU2ltcGxlTW9kZWwuREFZX0NPVU5UO1xuICB9XG4gIGdldENsYWltZWRDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuZGF5cy5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LmNsYWltZWQ7XG4gICAgfSkubGVuZ3RoO1xuICB9XG4gIGlzQ3VycmVudEN5Y2xlQ29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5kYXlzLmV2ZXJ5KGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5jbGFpbWVkO1xuICAgIH0pO1xuICB9XG4gIGRlYnVnUmVzZXQoKSB7fVxuICBoYXNOZXdQcm9ncmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuYWNjdW11bGF0ZWREYXlzID4gKHRoaXMubG9jYWxEYXRhLmxhc3RTaG93blByb2dyZXNzIHx8IDApO1xuICB9XG4gIG1hcmtQcm9ncmVzc1Nob3duKCkge1xuICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEuYWNjdW11bGF0ZWREYXlzO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RTaG93blByb2dyZXNzID0gdDtcbiAgfVxuICBnZXRDdXJyZW50UHJvZ3Jlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmFjY3VtdWxhdGVkRGF5cztcbiAgfVxuICBkZWJ1Z1NldERheSgpIHt9XG59Il19
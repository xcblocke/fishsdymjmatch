
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/travel/model/TravelGameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5646eVjZRNAsJMLx01Y8haT', 'TravelGameModel');
// Scripts/gamePlay/travel/model/TravelGameModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ETravelRedPointState = void 0;
var TravelGameData_1 = require("../../../core/simulator/data/TravelGameData");
var DataReader_1 = require("../../../framework/data/DataReader");
var Model_1 = require("../../../framework/data/Model");
var BadgeMode_1 = require("../../badge/mode/BadgeMode");
var ConfigType_1 = require("../../base/data/ConfigType");
var TravelConfig_1 = require("../../../config/TravelConfig");
var ETravelRedPointState;
(function (ETravelRedPointState) {
    ETravelRedPointState[ETravelRedPointState["None"] = 0] = "None";
    ETravelRedPointState[ETravelRedPointState["Show"] = 1] = "Show";
    ETravelRedPointState[ETravelRedPointState["Hide"] = 2] = "Hide";
})(ETravelRedPointState = exports.ETravelRedPointState || (exports.ETravelRedPointState = {}));
var TravelGameModel = /** @class */ (function (_super) {
    __extends(TravelGameModel, _super);
    function TravelGameModel() {
        var _this = _super.call(this) || this;
        _this.isLocalEmpty(_this.localData.unlocked) && (_this.localData.unlocked = false);
        _this.isLocalEmpty(_this.localData.curSession) && (_this.localData.curSession = -1);
        _this.isLocalEmpty(_this.localData.curSessionIndex) && (_this.localData.curSessionIndex = _this.localData.curSession);
        _this.isLocalEmpty(_this.localData.startTime) && (_this.localData.startTime = -1);
        _this.isLocalEmpty(_this.localData.endTime) && (_this.localData.endTime = -1);
        _this.isLocalEmpty(_this.localData.curJourney) && (_this.localData.curJourney = "");
        _this.isLocalEmpty(_this.localData.historyJourneys) && (_this.localData.historyJourneys = []);
        _this.isLocalEmpty(_this.localData.lastMapLevel) && (_this.localData.lastMapLevel = 1);
        _this.isLocalEmpty(_this.localData.redPointState) && (_this.localData.redPointState = ETravelRedPointState.None);
        _this.isLocalEmpty(_this.localData.curSpecial) && (_this.localData.curSpecial = false);
        _this.isLocalEmpty(_this.localData.firstOpen) && (_this.localData.firstOpen = false);
        return _this;
    }
    TravelGameModel.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    TravelGameModel.prototype.activeSession = function (e, t, o, n) {
        var i = this.localData.historyJourneys;
        "" !== this.localData.curJourney && i.push(this.localData.curJourney);
        i.length > 20 && (i = i.slice(-20));
        this.localData.historyJourneys = i;
        this.localData.curJourney = e;
        this.localData.startTime = t;
        this.localData.endTime = -1 === o ? -1 : t + 1000 * o;
        this.localData.curSession++;
        if (n < 0)
            this.localData.curSpecial = true;
        else {
            this.localData.curSessionIndex = n;
            this.localData.curSpecial = false;
        }
        this.setFirstOpen(false);
    };
    TravelGameModel.prototype.getCurSession = function () {
        return this.localData.curSession;
    };
    TravelGameModel.prototype.getCurSessionIndex = function () {
        return this.localData.curSessionIndex;
    };
    TravelGameModel.prototype.getStartTime = function () {
        return this.localData.startTime;
    };
    TravelGameModel.prototype.getEndTime = function () {
        return this.localData.endTime;
    };
    TravelGameModel.prototype.getLastMapLevel = function () {
        return this.localData.lastMapLevel;
    };
    TravelGameModel.prototype.setLastMapLevel = function (e) {
        this.localData.lastMapLevel = e;
    };
    TravelGameModel.prototype.isSessionActive = function () {
        return !!this.isUnlocked() && !(this.localData.curSession < 0) && (this.localData.endTime < 0 && this.localData.startTime > 0 || Date.now() >= this.localData.startTime && Date.now() <= this.localData.endTime);
    };
    TravelGameModel.prototype.isUnlocked = function () {
        return this.localData.unlocked;
    };
    TravelGameModel.prototype.setUnlocked = function (e) {
        this.localData.unlocked = e;
    };
    TravelGameModel.prototype.getCurJourney = function () {
        return this.localData.curJourney;
    };
    TravelGameModel.prototype.getRemainTime = function () {
        return this.localData.endTime < 0 ? -1 : Math.floor((this.localData.endTime - Date.now()) / 1000);
    };
    TravelGameModel.prototype.getConfig = function (e) {
        return DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, e);
    };
    TravelGameModel.prototype.getLevelConfig = function (e) {
        var t = this.getConfig(e);
        return t ? DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.LevelConfig, t.levelConfig) : null;
    };
    TravelGameModel.prototype.getAllLevel = function (e) {
        var t = this.getLevelConfig(e);
        if (!t)
            return [];
        var o = ConfigType_1.MapConfigMap[t.mapConfig];
        return DataReader_1.DataReader.getList(o).filter(function (e) {
            return e.level > 0;
        });
    };
    TravelGameModel.prototype.getLevelById = function (e, t) {
        return this.getAllLevel(t).find(function (t) {
            return t.level === e;
        });
    };
    TravelGameModel.prototype.getRewardInfo = function (e) {
        var t = this.getLevelConfig(e);
        if (!t)
            return [];
        for (var o = [], n = 0; n < t.gift.length; n++)
            o.push({
                lv: t.gift[n],
                reward: t.giftRewards[n],
                type: TravelConfig_1.ETravelRewardType.EGiftBox,
                gain: false
            });
        for (n = 0; n < t.badge.length; n++)
            o.push({
                lv: t.badge[n],
                reward: t.badgeRewards[n],
                type: TravelConfig_1.ETravelRewardType.EBadge,
                gain: this.isBadgeRewardGain(t.badgeRewards[n])
            });
        o.sort(function (e, t) {
            return e.lv - t.lv;
        });
        return o;
    };
    TravelGameModel.prototype.getPlayType = function (e) {
        return this.getLevelById(e, this.getCurJourney()).playType;
    };
    TravelGameModel.prototype.isLevelEnd = function (e) {
        var t = this.getCurJourney(), o = this.getLevelConfig(t);
        return !o || e > o.levelCount;
    };
    TravelGameModel.prototype.isBadgeRewardGain = function (e) {
        var t = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.reward_config, e);
        return !(t && 1 === t.Items.length && !BadgeMode_1.default.getInstance().hasBadge(t.Items[0]));
    };
    TravelGameModel.prototype.isBadgeComplete = function (e) {
        var t, o;
        if ("" === e)
            return true;
        var n = this.getRewardInfo(e);
        try {
            for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
                var l = r.value;
                if (l.type === TravelConfig_1.ETravelRewardType.EBadge && !l.gain)
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
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return true;
    };
    TravelGameModel.prototype.isComplete = function (e) {
        if ("" === e)
            return true;
        var t = TravelGameData_1.default.getInstance().getLevelId(), o = this.getLevelConfig(e);
        return !o || t > o.levelCount;
    };
    TravelGameModel.prototype.setRedPointState = function (e) {
        this.localData.redPointState = e;
    };
    TravelGameModel.prototype.getRedPointState = function () {
        return this.localData.redPointState;
    };
    TravelGameModel.prototype.isSpecialSession = function () {
        return this.localData.curSpecial;
    };
    TravelGameModel.prototype.isHardLevel = function (e) {
        var t = this.getCurJourney(), o = this.getLevelConfig(t);
        return !(!o || !o.hards.includes(e));
    };
    TravelGameModel.prototype.getHistoryJourneys = function () {
        return this.localData.historyJourneys;
    };
    TravelGameModel.prototype.setFirstOpen = function (e) {
        this.localData.firstOpen = e;
    };
    TravelGameModel.prototype.isFirstOpen = function () {
        return this.localData.firstOpen;
    };
    __decorate([
        mj.traitEvent("TLGameModel_activeSession")
    ], TravelGameModel.prototype, "activeSession", null);
    __decorate([
        mj.traitEvent("TLGameModel_getReward")
    ], TravelGameModel.prototype, "getRewardInfo", null);
    __decorate([
        mj.traitEvent("TLGameModel_isHardLv")
    ], TravelGameModel.prototype, "isHardLevel", null);
    TravelGameModel = __decorate([
        mj.class("TravelGameModel")
    ], TravelGameModel);
    return TravelGameModel;
}(Model_1.default));
exports.default = TravelGameModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBeUU7QUFDekUsaUVBQWdFO0FBQ2hFLHVEQUFrRDtBQUNsRCx3REFBbUQ7QUFDbkQseURBQXNFO0FBQ3RFLDZEQUFpRTtBQUNqRSxJQUFZLG9CQUlYO0FBSkQsV0FBWSxvQkFBb0I7SUFDOUIsK0RBQVEsQ0FBQTtJQUNSLCtEQUFRLENBQUE7SUFDUiwrREFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLG9CQUFvQixHQUFwQiw0QkFBb0IsS0FBcEIsNEJBQW9CLFFBSS9CO0FBRUQ7SUFBNkMsbUNBQUs7SUFDaEQ7UUFBQSxZQUNFLGlCQUFPLFNBWVI7UUFYQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNoRixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEgsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMs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LEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztJQUNuQyxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQzFCLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsNENBQWtCLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztJQUN4QyxDQUFDO0lBQ0Qsc0NBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELHFDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUF4SkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDO3dEQWUxQztJQXVERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7d0RBb0J0QztJQW1ERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7c0RBS3JDO0lBbEtrQixlQUFlO1FBRG5DLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7T0FDUCxlQUFlLENBNEtuQztJQUFELHNCQUFDO0NBNUtELEFBNEtDLENBNUs0QyxlQUFLLEdBNEtqRDtrQkE1S29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhdmVsR2FtZURhdGEgZnJvbSAnLi4vLi4vLi4vY29yZS9zaW11bGF0b3IvZGF0YS9UcmF2ZWxHYW1lRGF0YSc7XG5pbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL2RhdGEvTW9kZWwnO1xuaW1wb3J0IEJhZGdlTW9kZSBmcm9tICcuLi8uLi9iYWRnZS9tb2RlL0JhZGdlTW9kZSc7XG5pbXBvcnQgeyBDb25maWdUeXBlLCBNYXBDb25maWdNYXAgfSBmcm9tICcuLi8uLi9iYXNlL2RhdGEvQ29uZmlnVHlwZSc7XG5pbXBvcnQgeyBFVHJhdmVsUmV3YXJkVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9UcmF2ZWxDb25maWcnO1xuZXhwb3J0IGVudW0gRVRyYXZlbFJlZFBvaW50U3RhdGUge1xuICBOb25lID0gMCxcbiAgU2hvdyA9IDEsXG4gIEhpZGUgPSAyLFxufVxuQG1qLmNsYXNzKFwiVHJhdmVsR2FtZU1vZGVsXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxHYW1lTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEudW5sb2NrZWQpICYmICh0aGlzLmxvY2FsRGF0YS51bmxvY2tlZCA9IGZhbHNlKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5jdXJTZXNzaW9uKSAmJiAodGhpcy5sb2NhbERhdGEuY3VyU2Vzc2lvbiA9IC0xKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5jdXJTZXNzaW9uSW5kZXgpICYmICh0aGlzLmxvY2FsRGF0YS5jdXJTZXNzaW9uSW5kZXggPSB0aGlzLmxvY2FsRGF0YS5jdXJTZXNzaW9uKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5zdGFydFRpbWUpICYmICh0aGlzLmxvY2FsRGF0YS5zdGFydFRpbWUgPSAtMSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuZW5kVGltZSkgJiYgKHRoaXMubG9jYWxEYXRhLmVuZFRpbWUgPSAtMSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY3VySm91cm5leSkgJiYgKHRoaXMubG9jYWxEYXRhLmN1ckpvdXJuZXkgPSBcIlwiKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5oaXN0b3J5Sm91cm5leXMpICYmICh0aGlzLmxvY2FsRGF0YS5oaXN0b3J5Sm91cm5leXMgPSBbXSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdE1hcExldmVsKSAmJiAodGhpcy5sb2NhbERhdGEubGFzdE1hcExldmVsID0gMSk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEucmVkUG9pbnRTdGF0ZSkgJiYgKHRoaXMubG9jYWxEYXRhLnJlZFBvaW50U3RhdGUgPSBFVHJhdmVsUmVkUG9pbnRTdGF0ZS5Ob25lKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5jdXJTcGVjaWFsKSAmJiAodGhpcy5sb2NhbERhdGEuY3VyU3BlY2lhbCA9IGZhbHNlKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5maXJzdE9wZW4pICYmICh0aGlzLmxvY2FsRGF0YS5maXJzdE9wZW4gPSBmYWxzZSk7XG4gIH1cbiAgaXNMb2NhbEVtcHR5KGUpIHtcbiAgICByZXR1cm4gbnVsbCA9PSBlIHx8IFwiXCIgPT09IGU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUTEdhbWVNb2RlbF9hY3RpdmVTZXNzaW9uXCIpXG4gIGFjdGl2ZVNlc3Npb24oZSwgdCwgbywgbikge1xuICAgIHZhciBpID0gdGhpcy5sb2NhbERhdGEuaGlzdG9yeUpvdXJuZXlzO1xuICAgIFwiXCIgIT09IHRoaXMubG9jYWxEYXRhLmN1ckpvdXJuZXkgJiYgaS5wdXNoKHRoaXMubG9jYWxEYXRhLmN1ckpvdXJuZXkpO1xuICAgIGkubGVuZ3RoID4gMjAgJiYgKGkgPSBpLnNsaWNlKC0yMCkpO1xuICAgIHRoaXMubG9jYWxEYXRhLmhpc3RvcnlKb3VybmV5cyA9IGk7XG4gICAgdGhpcy5sb2NhbERhdGEuY3VySm91cm5leSA9IGU7XG4gICAgdGhpcy5sb2NhbERhdGEuc3RhcnRUaW1lID0gdDtcbiAgICB0aGlzLmxvY2FsRGF0YS5lbmRUaW1lID0gLTEgPT09IG8gPyAtMSA6IHQgKyAxMDAwICogbztcbiAgICB0aGlzLmxvY2FsRGF0YS5jdXJTZXNzaW9uKys7XG4gICAgaWYgKG4gPCAwKSB0aGlzLmxvY2FsRGF0YS5jdXJTcGVjaWFsID0gdHJ1ZTtlbHNlIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmN1clNlc3Npb25JbmRleCA9IG47XG4gICAgICB0aGlzLmxvY2FsRGF0YS5jdXJTcGVjaWFsID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2V0Rmlyc3RPcGVuKGZhbHNlKTtcbiAgfVxuICBnZXRDdXJTZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5jdXJTZXNzaW9uO1xuICB9XG4gIGdldEN1clNlc3Npb25JbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuY3VyU2Vzc2lvbkluZGV4O1xuICB9XG4gIGdldFN0YXJ0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuc3RhcnRUaW1lO1xuICB9XG4gIGdldEVuZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmVuZFRpbWU7XG4gIH1cbiAgZ2V0TGFzdE1hcExldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0TWFwTGV2ZWw7XG4gIH1cbiAgc2V0TGFzdE1hcExldmVsKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TWFwTGV2ZWwgPSBlO1xuICB9XG4gIGlzU2Vzc2lvbkFjdGl2ZSgpIHtcbiAgICByZXR1cm4gISF0aGlzLmlzVW5sb2NrZWQoKSAmJiAhKHRoaXMubG9jYWxEYXRhLmN1clNlc3Npb24gPCAwKSAmJiAodGhpcy5sb2NhbERhdGEuZW5kVGltZSA8IDAgJiYgdGhpcy5sb2NhbERhdGEuc3RhcnRUaW1lID4gMCB8fCBEYXRlLm5vdygpID49IHRoaXMubG9jYWxEYXRhLnN0YXJ0VGltZSAmJiBEYXRlLm5vdygpIDw9IHRoaXMubG9jYWxEYXRhLmVuZFRpbWUpO1xuICB9XG4gIGlzVW5sb2NrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLnVubG9ja2VkO1xuICB9XG4gIHNldFVubG9ja2VkKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS51bmxvY2tlZCA9IGU7XG4gIH1cbiAgZ2V0Q3VySm91cm5leSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuY3VySm91cm5leTtcbiAgfVxuICBnZXRSZW1haW5UaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5lbmRUaW1lIDwgMCA/IC0xIDogTWF0aC5mbG9vcigodGhpcy5sb2NhbERhdGEuZW5kVGltZSAtIERhdGUubm93KCkpIC8gMTAwMCk7XG4gIH1cbiAgZ2V0Q29uZmlnKGUpIHtcbiAgICByZXR1cm4gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLlRyYXZlbCwgZSk7XG4gIH1cbiAgZ2V0TGV2ZWxDb25maWcoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRDb25maWcoZSk7XG4gICAgcmV0dXJuIHQgPyBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuTGV2ZWxDb25maWcsIHQubGV2ZWxDb25maWcpIDogbnVsbDtcbiAgfVxuICBnZXRBbGxMZXZlbChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldExldmVsQ29uZmlnKGUpO1xuICAgIGlmICghdCkgcmV0dXJuIFtdO1xuICAgIHZhciBvID0gTWFwQ29uZmlnTWFwW3QubWFwQ29uZmlnXTtcbiAgICByZXR1cm4gRGF0YVJlYWRlci5nZXRMaXN0KG8pLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUubGV2ZWwgPiAwO1xuICAgIH0pO1xuICB9XG4gIGdldExldmVsQnlJZChlLCB0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWxsTGV2ZWwodCkuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQubGV2ZWwgPT09IGU7XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUTEdhbWVNb2RlbF9nZXRSZXdhcmRcIilcbiAgZ2V0UmV3YXJkSW5mbyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldExldmVsQ29uZmlnKGUpO1xuICAgIGlmICghdCkgcmV0dXJuIFtdO1xuICAgIGZvciAodmFyIG8gPSBbXSwgbiA9IDA7IG4gPCB0LmdpZnQubGVuZ3RoOyBuKyspIG8ucHVzaCh7XG4gICAgICBsdjogdC5naWZ0W25dLFxuICAgICAgcmV3YXJkOiB0LmdpZnRSZXdhcmRzW25dLFxuICAgICAgdHlwZTogRVRyYXZlbFJld2FyZFR5cGUuRUdpZnRCb3gsXG4gICAgICBnYWluOiBmYWxzZVxuICAgIH0pO1xuICAgIGZvciAobiA9IDA7IG4gPCB0LmJhZGdlLmxlbmd0aDsgbisrKSBvLnB1c2goe1xuICAgICAgbHY6IHQuYmFkZ2Vbbl0sXG4gICAgICByZXdhcmQ6IHQuYmFkZ2VSZXdhcmRzW25dLFxuICAgICAgdHlwZTogRVRyYXZlbFJld2FyZFR5cGUuRUJhZGdlLFxuICAgICAgZ2FpbjogdGhpcy5pc0JhZGdlUmV3YXJkR2Fpbih0LmJhZGdlUmV3YXJkc1tuXSlcbiAgICB9KTtcbiAgICBvLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBlLmx2IC0gdC5sdjtcbiAgICB9KTtcbiAgICByZXR1cm4gbztcbiAgfVxuICBnZXRQbGF5VHlwZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWxCeUlkKGUsIHRoaXMuZ2V0Q3VySm91cm5leSgpKS5wbGF5VHlwZTtcbiAgfVxuICBpc0xldmVsRW5kKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgbyA9IHRoaXMuZ2V0TGV2ZWxDb25maWcodCk7XG4gICAgcmV0dXJuICFvIHx8IGUgPiBvLmxldmVsQ291bnQ7XG4gIH1cbiAgaXNCYWRnZVJld2FyZEdhaW4oZSkge1xuICAgIHZhciB0ID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLnJld2FyZF9jb25maWcsIGUpO1xuICAgIHJldHVybiAhKHQgJiYgMSA9PT0gdC5JdGVtcy5sZW5ndGggJiYgIUJhZGdlTW9kZS5nZXRJbnN0YW5jZSgpLmhhc0JhZGdlKHQuSXRlbXNbMF0pKTtcbiAgfVxuICBpc0JhZGdlQ29tcGxldGUoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIGlmIChcIlwiID09PSBlKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgbiA9IHRoaXMuZ2V0UmV3YXJkSW5mbyhlKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaSA9IF9fdmFsdWVzKG4pLCByID0gaS5uZXh0KCk7ICFyLmRvbmU7IHIgPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IHIudmFsdWU7XG4gICAgICAgIGlmIChsLnR5cGUgPT09IEVUcmF2ZWxSZXdhcmRUeXBlLkVCYWRnZSAmJiAhbC5nYWluKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHIgJiYgIXIuZG9uZSAmJiAobyA9IGkucmV0dXJuKSAmJiBvLmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaXNDb21wbGV0ZShlKSB7XG4gICAgaWYgKFwiXCIgPT09IGUpIHJldHVybiB0cnVlO1xuICAgIHZhciB0ID0gVHJhdmVsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbElkKCksXG4gICAgICBvID0gdGhpcy5nZXRMZXZlbENvbmZpZyhlKTtcbiAgICByZXR1cm4gIW8gfHwgdCA+IG8ubGV2ZWxDb3VudDtcbiAgfVxuICBzZXRSZWRQb2ludFN0YXRlKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZWRQb2ludFN0YXRlID0gZTtcbiAgfVxuICBnZXRSZWRQb2ludFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5yZWRQb2ludFN0YXRlO1xuICB9XG4gIGlzU3BlY2lhbFNlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmN1clNwZWNpYWw7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUTEdhbWVNb2RlbF9pc0hhcmRMdlwiKVxuICBpc0hhcmRMZXZlbChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldEN1ckpvdXJuZXkoKSxcbiAgICAgIG8gPSB0aGlzLmdldExldmVsQ29uZmlnKHQpO1xuICAgIHJldHVybiAhKCFvIHx8ICFvLmhhcmRzLmluY2x1ZGVzKGUpKTtcbiAgfVxuICBnZXRIaXN0b3J5Sm91cm5leXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmhpc3RvcnlKb3VybmV5cztcbiAgfVxuICBzZXRGaXJzdE9wZW4oZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLmZpcnN0T3BlbiA9IGU7XG4gIH1cbiAgaXNGaXJzdE9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmZpcnN0T3BlbjtcbiAgfVxufSJdfQ==
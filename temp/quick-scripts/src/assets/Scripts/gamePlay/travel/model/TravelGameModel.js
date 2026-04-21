"use strict";
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
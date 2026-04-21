"use strict";
cc._RF.push(module, '0c3ad2r+KtHyLiuwzwfEG8l', 'JourneyTrait');
// subpackages/l_journey/Scripts/JourneyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TravelConfig_1 = require("../../../Scripts/config/TravelConfig");
var TravelGameData_1 = require("../../../Scripts/core/simulator/data/TravelGameData");
var DGameUnlock_1 = require("../../../Scripts/gamePlay/dot/DGameUnlock");
var HallTravelBtn_1 = require("../../../Scripts/HallTravelBtn");
var BadgeMode_1 = require("../../../Scripts/gamePlay/badge/mode/BadgeMode");
var JourneyTrait = /** @class */ (function (_super) {
    __extends(JourneyTrait, _super);
    function JourneyTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createdHallButton = true;
        _this.curSession = -1;
        return _this;
    }
    JourneyTrait_1 = JourneyTrait;
    JourneyTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initJourneyList();
    };
    JourneyTrait.prototype.initJourneyList = function () {
        if (this.getCachedJourney().length <= 0)
            this.cacheJourney(this.traitData.journeys);
        else {
            this.fixTraitJourneyList();
            this.sortJourneyByConfig();
        }
    };
    JourneyTrait.prototype.sortJourneyByConfig = function () {
        var t = this.getCachedJourney(), e = this.traitData.journeys;
        if (t.filter(function (t) {
            return e.includes(t);
        }).join(",") !== e.join(",")) {
            t.sort(function (t, r) {
                return e.includes(t) && e.includes(r) ? e.indexOf(t) - e.indexOf(r) : 0;
            });
            this.cacheJourney(t);
        }
    };
    JourneyTrait.prototype.fixTraitJourneyList = function () {
        var t, e, r = this.getLastTraitJourney(), o = this.getCachedJourney();
        if (r.length <= 0) {
            this.setLastTraitJourney(o);
            r = this.getLastTraitJourney();
        }
        var n = this.traitData.journeys.filter(function (t) {
            return !r.includes(t);
        });
        if (!(n.length <= 0)) {
            try {
                for (var i = __values(n), s = i.next(); !s.done; s = i.next()) {
                    var c = s.value;
                    o.includes(c) || o.push(c);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    s && !s.done && (e = i.return) && e.call(i);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            this.cacheJourney(o);
            this.setLastTraitJourney(this.traitData.journeys);
        }
    };
    JourneyTrait.prototype.cacheJourney = function (t) {
        0 !== t.length && (this.localData.cachedJourneys = t);
    };
    JourneyTrait.prototype.setLastTraitJourney = function (t) {
        0 !== t.length && (this.localData.lastTraitJourney = t);
    };
    JourneyTrait.prototype.getLastTraitJourney = function () {
        var t = this.localData.lastTraitJourney;
        return null == t || "" === t ? [] : t;
    };
    JourneyTrait.prototype.getCachedJourney = function () {
        var t = this.localData.cachedJourneys;
        return null == t || "" === t ? [] : t;
    };
    JourneyTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[TravelConfig_1.TRAVEL_GAME_SESSION_END] = this.onTravelGameSessionEnd.bind(this);
        _t[TravelConfig_1.TRAVEL_GAME_SESSION_START] = this.onTravelGameSessionStart.bind(this);
        return _t;
    };
    JourneyTrait.prototype.onHallCtl_initVwRes = function (t, e) {
        this.tryAddSeason();
        this.orderJourney();
        e({
            returnType: TraitCallbackReturnType.return
        });
    };
    JourneyTrait.prototype.orderJourney = function () { };
    JourneyTrait.prototype.tryAddSeason = function () { };
    JourneyTrait.prototype.reissueRewards = function () {
        var t, e;
        if (this.isActiveJourney() && TravelGameModel_1.default.getInstance().isSessionActive()) {
            var o = TravelGameModel_1.default.getInstance(), n = o.getCurJourney();
            try {
                var i = TravelGameData_1.default.getInstance().getLevelId(), s = o.getRewardInfo(n);
                try {
                    for (var l = __values(s), u = l.next(); !u.done; u = l.next()) {
                        var y = u.value;
                        if (y.type === TravelConfig_1.ETravelRewardType.EBadge && !y.gain && i > y.lv) {
                            var d = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.reward_config, y.reward);
                            if (d && d.Items.length > 0) {
                                var g = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, d.Items[0]);
                                BadgeMode_1.default.getInstance().addBadge(g.ID, BadgeMode_1.BadgeType.Journey, n);
                            }
                        }
                    }
                }
                catch (e) {
                    t = {
                        error: e
                    };
                }
                finally {
                    try {
                        u && !u.done && (e = l.return) && e.call(l);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
            }
            catch (t) {
                var _ = (null == t ? void 0 : t.message) || "未知错误";
                console.error("[" + JourneyTrait_1.traitKey + "] 兜底发放:" + n + "期未领取的勋章奖励失败:" + _);
            }
        }
    };
    JourneyTrait.prototype.replaceHallTheme = function (t) {
        var e = "Hall";
        "string" == typeof this.traitData.replace && "" !== this.traitData.replace && (e = this.traitData.replace);
        t.hallTheme = e;
    };
    JourneyTrait.prototype.getLimeDay = function () {
        return this.traitData.installDay;
    };
    JourneyTrait.prototype.getLimitLevel = function () {
        return this.traitData.levelLimit;
    };
    JourneyTrait.prototype.getJourneyList = function () {
        return this.getCachedJourney();
    };
    JourneyTrait.prototype.isActiveDayValid = function () {
        return UserModel_1.default.getInstance().getGameActiveDays() > this.getLimeDay();
    };
    JourneyTrait.prototype.isLevelValid = function () {
        return UserModel_1.default.getInstance().getMainGameData().getLevelId() > this.getLimitLevel();
    };
    JourneyTrait.prototype.isActiveJourney = function () {
        var t = TravelGameModel_1.default.getInstance();
        if (t.isUnlocked())
            return true;
        if (this.isActiveDayValid() && this.isLevelValid()) {
            t.setUnlocked(true);
            return true;
        }
        return false;
    };
    JourneyTrait.prototype.tryChangeJourney = function () {
        return this.changeJourney();
    };
    JourneyTrait.prototype.onHallVw_initBtns = function (t, e) {
        this.reissueRewards();
        t.args[0] = t.args[0] || {};
        this.replaceHallTheme(t.args[0]);
        e();
    };
    JourneyTrait.prototype.onHallVw_updateUI = function (t, e) {
        var r;
        this.isActiveJourney();
        this.tryChangeJourney();
        this.createHallButton(null === (r = t.ins) || void 0 === r ? void 0 : r.node);
        t.args[0] = t.args[0] || {};
        this.replaceHallTheme(t.args[0]);
        e();
    };
    JourneyTrait.prototype.onHallVw_onPopView = function (t, e) {
        e({
            isBreak: this.showJourneyActiveView()
        });
    };
    JourneyTrait.prototype.canShowActiveView = function () {
        if (!this.isActiveJourney())
            return false;
        if (!TravelGameModel_1.default.getInstance().isSessionActive())
            return false;
        var t = TravelGameModel_1.default.getInstance().getCurSession();
        if (this.curSession === t)
            return false;
        this.curSession = t;
        return true;
    };
    JourneyTrait.prototype.showJourneyActiveView = function () {
        if (this.canShowActiveView()) {
            var t = TravelGameModel_1.default.getInstance().getCurJourney(), e = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, t);
            if (!e)
                return false;
            this.doShowActiveView({
                config: e,
                isNewSession: false
            });
            return true;
        }
        return false;
    };
    JourneyTrait.prototype.createHallButton = function (t) {
        if (cc.isValid(t)) {
            if (!this.isActiveJourney())
                return;
            var e = TravelGameModel_1.default.getInstance(), r = t.getChildByName("HallJourneyBtn");
            if (!e.isSessionActive()) {
                cc.isValid(r, true) && r.destroy();
                return;
            }
            if (!this.createdHallButton && cc.isValid(r))
                return;
            cc.isValid(r) && r.destroy();
            var o = e.getCurJourney();
            if (!e.getConfig(o))
                return;
            this.doCreateHallButton(t, o, false);
        }
    };
    JourneyTrait.prototype.doCreateHallButton = function (t, e, o, n, i) {
        var a = this;
        this.createdHallButton = false;
        HallTravelBtn_1.default.createUI(n, i).then(function (r) {
            if (cc.isValid(r) && cc.isValid(t)) {
                t.addChild(r);
                var n = r.getComponent(HallTravelBtn_1.default);
                n.delegate = t.getComponent(UIView_1.default).delegate;
                n.updateUI(e, a.getLimitLevel(), o);
            }
        }).catch(function (t) {
            console.error("[" + JourneyTrait_1.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallJourneyBtn按钮加载失败"));
        });
    };
    JourneyTrait.prototype.onTravelGameSessionEnd = function () {
        if (this.tryChangeJourney()) {
            this.doHideActiveView();
            var t = ControllerManager_1.default.getInstance().getControByName("HallController");
            if (!t)
                return;
            this.createHallButton(t.rootView.getChildByName("Hall"));
            this.showJourneyActiveView();
        }
    };
    JourneyTrait.prototype.onTravelGameSessionStart = function () { };
    JourneyTrait.prototype.isSessionValid = function (t) {
        var e = this.getJourneyList();
        if (t < 0 || t >= e.length)
            return false;
        var r = e[t], o = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, r);
        if (!o)
            return false;
        var n = new Date(), i = Math.floor(n.getTime() / 1000);
        return !(o.endTime > 0 && i >= o.endTime);
    };
    JourneyTrait.prototype.isSessionEnd = function () {
        return !TravelGameModel_1.default.getInstance().isSessionActive();
    };
    JourneyTrait.prototype.getNextSession = function () {
        var t = TravelGameModel_1.default.getInstance().getCurSessionIndex(), e = this.getJourneyList(), r = e.length;
        if (0 === r)
            return ["", -1];
        var o = t + 1;
        return o >= r ? ["", -1] : this.isSessionValid(o) ? [e[o], o] : ["", -1];
    };
    JourneyTrait.prototype.canChangeJourney = function () {
        if (!TravelGameModel_1.default.getInstance().isUnlocked())
            return false;
        if (!this.isSessionEnd())
            return false;
        var t = __read(this.getNextSession(), 2), e = t[0];
        t[1];
        return "" !== e;
    };
    JourneyTrait.prototype.getSessionStartTime = function () {
        return new Date().setHours(0, 0, 0, 0);
    };
    JourneyTrait.prototype.changeJourney = function () {
        if (!this.canChangeJourney())
            return false;
        var t = __read(this.getNextSession(), 2), e = t[0], r = t[1];
        return this.doChangeJourney(e, r);
    };
    JourneyTrait.prototype.doChangeJourney = function (t, e) {
        var r = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, t);
        if (!r)
            return false;
        var o = new Date(), n = Math.floor(o.getTime() / 1000);
        if (r.startTime > 0 && n < r.startTime)
            return false;
        var i = this.getSessionStartTime(), a = r.duration;
        r.endTime > 0 && (a = r.endTime - n);
        TravelGameModel_1.default.getInstance().activeSession(t, i, a, e);
        TravelGameData_1.default.getInstance().resetTravel();
        DGameUnlock_1.DotGameUnlock.dotByType(DGameUnlock_1.EFuncUnlockType.Travel);
        this.createdHallButton = true;
        mj.EventManager.emit(TravelConfig_1.TRAVEL_GAME_SESSION_CHANGE, [t, e]);
        return true;
    };
    JourneyTrait.prototype.doShowActiveView = function (t) {
        ControllerManager_1.default.getInstance().pushViewByController("TravelActiveController", t);
    };
    JourneyTrait.prototype.doHideActiveView = function () {
        ControllerManager_1.default.getInstance().closeViewByName("TravelActiveController");
    };
    JourneyTrait.prototype.getCurOrNextJourney = function () {
        if (!this.isActiveJourney())
            return {
                journey: __read(this.getNextSession(), 1)[0],
                isNewSession: true,
                unlocked: false
            };
        var t = TravelGameModel_1.default.getInstance();
        return t.isSessionActive() ? {
            journey: t.getCurJourney(),
            isNewSession: false,
            unlocked: true
        } : {
            journey: __read(this.getNextSession(), 1)[0],
            isNewSession: true,
            unlocked: true
        };
    };
    var JourneyTrait_1;
    JourneyTrait.traitKey = "Journey";
    __decorate([
        mj.traitEvent("Journey_Order")
    ], JourneyTrait.prototype, "orderJourney", null);
    __decorate([
        mj.traitEvent("Journey_tryAddSeason")
    ], JourneyTrait.prototype, "tryAddSeason", null);
    __decorate([
        mj.traitEvent("Journey_replaceHall")
    ], JourneyTrait.prototype, "replaceHallTheme", null);
    __decorate([
        mj.traitEvent("Journey_getLimitDay")
    ], JourneyTrait.prototype, "getLimeDay", null);
    __decorate([
        mj.traitEvent("Journey_getLimitLevel")
    ], JourneyTrait.prototype, "getLimitLevel", null);
    __decorate([
        mj.traitEvent("Journey_getJourneyList")
    ], JourneyTrait.prototype, "getJourneyList", null);
    __decorate([
        mj.traitEvent("Journey_IsDayValid")
    ], JourneyTrait.prototype, "isActiveDayValid", null);
    __decorate([
        mj.traitEvent("Journey_IsLevelValid")
    ], JourneyTrait.prototype, "isLevelValid", null);
    __decorate([
        mj.traitEvent("Journey_TryChange")
    ], JourneyTrait.prototype, "tryChangeJourney", null);
    __decorate([
        mj.traitEvent("Journey_CanShowActiveVw")
    ], JourneyTrait.prototype, "canShowActiveView", null);
    __decorate([
        mj.traitEvent("Journey_ShowActiveVw")
    ], JourneyTrait.prototype, "showJourneyActiveView", null);
    __decorate([
        mj.traitEvent("Journey_CreateBtn")
    ], JourneyTrait.prototype, "createHallButton", null);
    __decorate([
        mj.traitEvent("Journey_doCreateBtn")
    ], JourneyTrait.prototype, "doCreateHallButton", null);
    __decorate([
        mj.traitEvent("Journey_SessionEnd")
    ], JourneyTrait.prototype, "onTravelGameSessionEnd", null);
    __decorate([
        mj.traitEvent("Journey_SeasonStart")
    ], JourneyTrait.prototype, "onTravelGameSessionStart", null);
    __decorate([
        mj.traitEvent("Journey_IsSessionEnd")
    ], JourneyTrait.prototype, "isSessionEnd", null);
    __decorate([
        mj.traitEvent("Journey_NextSession")
    ], JourneyTrait.prototype, "getNextSession", null);
    __decorate([
        mj.traitEvent("Journey_GetStartTime")
    ], JourneyTrait.prototype, "getSessionStartTime", null);
    __decorate([
        mj.traitEvent("Journey_DoChange")
    ], JourneyTrait.prototype, "doChangeJourney", null);
    __decorate([
        mj.traitEvent("Journey_doShwActiveVw")
    ], JourneyTrait.prototype, "doShowActiveView", null);
    __decorate([
        mj.traitEvent("Journey_doHideActiveVw")
    ], JourneyTrait.prototype, "doHideActiveView", null);
    JourneyTrait = JourneyTrait_1 = __decorate([
        mj.trait,
        mj.class("JourneyTrait")
    ], JourneyTrait);
    return JourneyTrait;
}(Trait_1.default));
exports.default = JourneyTrait;

cc._RF.pop();
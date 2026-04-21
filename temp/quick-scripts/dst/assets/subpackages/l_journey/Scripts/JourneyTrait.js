
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/JourneyTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9Kb3VybmV5VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUF3RTtBQUN4RSxnRUFBMkQ7QUFDM0QsK0RBQTBEO0FBQzFELDZFQUE0RTtBQUM1RSwwRkFBcUY7QUFDckYsMEZBQXFGO0FBQ3JGLHNFQUFpRTtBQUNqRSxxRUFBeUo7QUFDekosc0ZBQWlGO0FBQ2pGLHlFQUEyRjtBQUMzRixnRUFBMkQ7QUFDM0QsNEVBQXNGO0FBR3RGO0lBQTBDLGdDQUFLO0lBQS9DO1FBQUEscUVBZ1ZDO1FBL1VDLHVCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixnQkFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQThVbEIsQ0FBQztxQkFoVm9CLFlBQVk7SUFJL0IsNkJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxzQ0FBZSxHQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUFLO1lBQ3ZGLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUNELDBDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUM3QixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN0QixPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUNuQixPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUNELDBDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQzlCLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNwQixJQUFJO2dCQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDNUI7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLENBQUMsR0FBRztvQkFDRixLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDO2FBQ0g7b0JBQVM7Z0JBQ1IsSUFBSTtvQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3Qzt3QkFBUztvQkFDUixJQUFJLENBQUM7d0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUN0QjthQUNGO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFDRCxtQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELDBDQUFtQixHQUFuQixVQUFvQixDQUFDO1FBQ25CLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsMENBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN4QyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELHVDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsMENBQW1CLEdBQW5CO1FBQ0UsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osRUFBRSxDQUFDLHNDQUF1QixDQUFDLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRSxFQUFFLENBQUMsd0NBQXlCLENBQUMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELDBDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBWSxHQUFaLGNBQWdCLENBQUM7SUFFakIsbUNBQVksR0FBWixjQUFnQixDQUFDO0lBQ2pCLHFDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQzdFLElBQUksQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLEVBQ25DLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsSUFBSTtnQkFDRixJQUFJLENBQUMsR0FBRyx3QkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUMvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBSTtvQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNoQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssZ0NBQWlCLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTs0QkFDOUQsSUFBSSxDQUFDLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0NBQzNCLElBQUksQ0FBQyxHQUFHLHVCQUFVLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDaEUsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxxQkFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQzs2QkFDOUQ7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1YsQ0FBQyxHQUFHO3dCQUNGLEtBQUssRUFBRSxDQUFDO3FCQUNULENBQUM7aUJBQ0g7d0JBQVM7b0JBQ1IsSUFBSTt3QkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3Qzs0QkFBUzt3QkFDUixJQUFJLENBQUM7NEJBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO3FCQUN0QjtpQkFDRjthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQztnQkFDbkQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsY0FBWSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNqRjtTQUNGO0lBQ0gsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNmLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNHLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxpQ0FBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7SUFDbkMsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekUsQ0FBQztJQUVELG1DQUFZLEdBQVo7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZGLENBQUM7SUFDRCxzQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUNsRCxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ0Qsd0NBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsd0NBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QseUNBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUU7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDbkUsSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDRDQUFxQixHQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDbkQsQ0FBQyxHQUFHLHVCQUFVLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxDQUFDO2dCQUFFLE9BQU8sS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDcEIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsWUFBWSxFQUFFLEtBQUs7YUFDcEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFBRSxPQUFPO1lBQ3BDLElBQUksQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLEVBQ25DLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtnQkFDeEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQyxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUFFLE9BQU87WUFDckQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPO1lBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVELHlDQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLHVCQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzNDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNsQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsdUJBQWEsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxjQUFZLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDN0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQXNCLEdBQXRCO1FBQ0UsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsR0FBRywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsQ0FBQztnQkFBRSxPQUFPO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsK0NBQXdCLEdBQXhCLGNBQTRCLENBQUM7SUFDN0IscUNBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDVixDQUFDLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxFQUNoQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsbUNBQVksR0FBWjtRQUNFLE9BQU8sQ0FBQyx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFRCxxQ0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxFQUN4RCxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUN6QixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELHVDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDdEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsMENBQW1CLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLHVCQUFVLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsRUFDaEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQ2hDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEQsd0JBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQywyQkFBYSxDQUFDLFNBQVMsQ0FBQyw2QkFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDOUIsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMseUNBQTBCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQiwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO1FBQ0UsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNELDBDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQUUsT0FBTztnQkFDbEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFLEtBQUs7YUFDaEIsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsT0FBTyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQzFCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDRixPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDO0lBQ0osQ0FBQzs7SUE1VU0scUJBQVEsR0FBRyxTQUFTLENBQUM7SUFvRjVCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7b0RBQ2Q7SUFFakI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO29EQUNyQjtJQXNDakI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO3dEQUtwQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztrREFHcEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7cURBR3RDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3NEQUd2QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzt3REFHbkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7b0RBR3JDO0lBV0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO3dEQUdsQztJQXNCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7eURBUXhDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOzZEQWFyQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQzt3REFnQmxDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDOzBEQWNwQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzs4REFTbkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7Z0VBQ1I7SUFZN0I7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO29EQUdyQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztzREFRcEM7SUFVRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7MkRBR3JDO0lBU0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO3VEQWdCakM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7d0RBR3RDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3dEQUd2QztJQTlUa0IsWUFBWTtRQUZoQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO09BQ0osWUFBWSxDQWdWaEM7SUFBRCxtQkFBQztDQWhWRCxBQWdWQyxDQWhWeUMsZUFBSyxHQWdWOUM7a0JBaFZvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IFRSQVZFTF9HQU1FX1NFU1NJT05fRU5ELCBUUkFWRUxfR0FNRV9TRVNTSU9OX1NUQVJULCBFVHJhdmVsUmV3YXJkVHlwZSwgVFJBVkVMX0dBTUVfU0VTU0lPTl9DSEFOR0UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbmZpZy9UcmF2ZWxDb25maWcnO1xuaW1wb3J0IFRyYXZlbEdhbWVEYXRhIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZGF0YS9UcmF2ZWxHYW1lRGF0YSc7XG5pbXBvcnQgeyBEb3RHYW1lVW5sb2NrLCBFRnVuY1VubG9ja1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZVVubG9jayc7XG5pbXBvcnQgSGFsbFRyYXZlbEJ0biBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0hhbGxUcmF2ZWxCdG4nO1xuaW1wb3J0IEJhZGdlTW9kZSwgeyBCYWRnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2JhZGdlL21vZGUvQmFkZ2VNb2RlJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSm91cm5leVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb3VybmV5VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIGNyZWF0ZWRIYWxsQnV0dG9uID0gdHJ1ZTtcbiAgY3VyU2Vzc2lvbiA9IC0xO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkpvdXJuZXlcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdEpvdXJuZXlMaXN0KCk7XG4gIH1cbiAgaW5pdEpvdXJuZXlMaXN0KCkge1xuICAgIGlmICh0aGlzLmdldENhY2hlZEpvdXJuZXkoKS5sZW5ndGggPD0gMCkgdGhpcy5jYWNoZUpvdXJuZXkodGhpcy50cmFpdERhdGEuam91cm5leXMpO2Vsc2Uge1xuICAgICAgdGhpcy5maXhUcmFpdEpvdXJuZXlMaXN0KCk7XG4gICAgICB0aGlzLnNvcnRKb3VybmV5QnlDb25maWcoKTtcbiAgICB9XG4gIH1cbiAgc29ydEpvdXJuZXlCeUNvbmZpZygpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Q2FjaGVkSm91cm5leSgpLFxuICAgICAgZSA9IHRoaXMudHJhaXREYXRhLmpvdXJuZXlzO1xuICAgIGlmICh0LmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGUuaW5jbHVkZXModCk7XG4gICAgfSkuam9pbihcIixcIikgIT09IGUuam9pbihcIixcIikpIHtcbiAgICAgIHQuc29ydChmdW5jdGlvbiAodCwgcikge1xuICAgICAgICByZXR1cm4gZS5pbmNsdWRlcyh0KSAmJiBlLmluY2x1ZGVzKHIpID8gZS5pbmRleE9mKHQpIC0gZS5pbmRleE9mKHIpIDogMDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jYWNoZUpvdXJuZXkodCk7XG4gICAgfVxuICB9XG4gIGZpeFRyYWl0Sm91cm5leUxpc3QoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgciA9IHRoaXMuZ2V0TGFzdFRyYWl0Sm91cm5leSgpLFxuICAgICAgbyA9IHRoaXMuZ2V0Q2FjaGVkSm91cm5leSgpO1xuICAgIGlmIChyLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLnNldExhc3RUcmFpdEpvdXJuZXkobyk7XG4gICAgICByID0gdGhpcy5nZXRMYXN0VHJhaXRKb3VybmV5KCk7XG4gICAgfVxuICAgIHZhciBuID0gdGhpcy50cmFpdERhdGEuam91cm5leXMuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gIXIuaW5jbHVkZXModCk7XG4gICAgfSk7XG4gICAgaWYgKCEobi5sZW5ndGggPD0gMCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyhuKSwgcyA9IGkubmV4dCgpOyAhcy5kb25lOyBzID0gaS5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgYyA9IHMudmFsdWU7XG4gICAgICAgICAgby5pbmNsdWRlcyhjKSB8fCBvLnB1c2goYyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzICYmICFzLmRvbmUgJiYgKGUgPSBpLnJldHVybikgJiYgZS5jYWxsKGkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNhY2hlSm91cm5leShvKTtcbiAgICAgIHRoaXMuc2V0TGFzdFRyYWl0Sm91cm5leSh0aGlzLnRyYWl0RGF0YS5qb3VybmV5cyk7XG4gICAgfVxuICB9XG4gIGNhY2hlSm91cm5leSh0KSB7XG4gICAgMCAhPT0gdC5sZW5ndGggJiYgKHRoaXMubG9jYWxEYXRhLmNhY2hlZEpvdXJuZXlzID0gdCk7XG4gIH1cbiAgc2V0TGFzdFRyYWl0Sm91cm5leSh0KSB7XG4gICAgMCAhPT0gdC5sZW5ndGggJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RUcmFpdEpvdXJuZXkgPSB0KTtcbiAgfVxuICBnZXRMYXN0VHJhaXRKb3VybmV5KCkge1xuICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEubGFzdFRyYWl0Sm91cm5leTtcbiAgICByZXR1cm4gbnVsbCA9PSB0IHx8IFwiXCIgPT09IHQgPyBbXSA6IHQ7XG4gIH1cbiAgZ2V0Q2FjaGVkSm91cm5leSgpIHtcbiAgICB2YXIgdCA9IHRoaXMubG9jYWxEYXRhLmNhY2hlZEpvdXJuZXlzO1xuICAgIHJldHVybiBudWxsID09IHQgfHwgXCJcIiA9PT0gdCA/IFtdIDogdDtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W1RSQVZFTF9HQU1FX1NFU1NJT05fRU5EXSA9IHRoaXMub25UcmF2ZWxHYW1lU2Vzc2lvbkVuZC5iaW5kKHRoaXMpO1xuICAgIF90W1RSQVZFTF9HQU1FX1NFU1NJT05fU1RBUlRdID0gdGhpcy5vblRyYXZlbEdhbWVTZXNzaW9uU3RhcnQuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgb25IYWxsQ3RsX2luaXRWd1Jlcyh0LCBlKSB7XG4gICAgdGhpcy50cnlBZGRTZWFzb24oKTtcbiAgICB0aGlzLm9yZGVySm91cm5leSgpO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJKb3VybmV5X09yZGVyXCIpXG4gIG9yZGVySm91cm5leSgpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiSm91cm5leV90cnlBZGRTZWFzb25cIilcbiAgdHJ5QWRkU2Vhc29uKCkge31cbiAgcmVpc3N1ZVJld2FyZHMoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmVKb3VybmV5KCkgJiYgVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuaXNTZXNzaW9uQWN0aXZlKCkpIHtcbiAgICAgIHZhciBvID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICAgIG4gPSBvLmdldEN1ckpvdXJuZXkoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBpID0gVHJhdmVsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbElkKCksXG4gICAgICAgICAgcyA9IG8uZ2V0UmV3YXJkSW5mbyhuKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMocyksIHUgPSBsLm5leHQoKTsgIXUuZG9uZTsgdSA9IGwubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgeSA9IHUudmFsdWU7XG4gICAgICAgICAgICBpZiAoeS50eXBlID09PSBFVHJhdmVsUmV3YXJkVHlwZS5FQmFkZ2UgJiYgIXkuZ2FpbiAmJiBpID4geS5sdikge1xuICAgICAgICAgICAgICB2YXIgZCA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5yZXdhcmRfY29uZmlnLCB5LnJld2FyZCk7XG4gICAgICAgICAgICAgIGlmIChkICYmIGQuSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBnID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLml0ZW1fY29uZmlnLCBkLkl0ZW1zWzBdKTtcbiAgICAgICAgICAgICAgICBCYWRnZU1vZGUuZ2V0SW5zdGFuY2UoKS5hZGRCYWRnZShnLklELCBCYWRnZVR5cGUuSm91cm5leSwgbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0ID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1ICYmICF1LmRvbmUgJiYgKGUgPSBsLnJldHVybikgJiYgZS5jYWxsKGwpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgdmFyIF8gPSAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIuacquefpemUmeivr1wiO1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgSm91cm5leVRyYWl0LnRyYWl0S2V5ICsgXCJdIOWFnOW6leWPkeaUvjpcIiArIG4gKyBcIuacn+acqumihuWPlueahOWLi+eroOWlluWKseWksei0pTpcIiArIF8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkpvdXJuZXlfcmVwbGFjZUhhbGxcIilcbiAgcmVwbGFjZUhhbGxUaGVtZSh0KSB7XG4gICAgdmFyIGUgPSBcIkhhbGxcIjtcbiAgICBcInN0cmluZ1wiID09IHR5cGVvZiB0aGlzLnRyYWl0RGF0YS5yZXBsYWNlICYmIFwiXCIgIT09IHRoaXMudHJhaXREYXRhLnJlcGxhY2UgJiYgKGUgPSB0aGlzLnRyYWl0RGF0YS5yZXBsYWNlKTtcbiAgICB0LmhhbGxUaGVtZSA9IGU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJKb3VybmV5X2dldExpbWl0RGF5XCIpXG4gIGdldExpbWVEYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaXREYXRhLmluc3RhbGxEYXk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJKb3VybmV5X2dldExpbWl0TGV2ZWxcIilcbiAgZ2V0TGltaXRMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFpdERhdGEubGV2ZWxMaW1pdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkpvdXJuZXlfZ2V0Sm91cm5leUxpc3RcIilcbiAgZ2V0Sm91cm5leUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FjaGVkSm91cm5leSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSm91cm5leV9Jc0RheVZhbGlkXCIpXG4gIGlzQWN0aXZlRGF5VmFsaWQoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVBY3RpdmVEYXlzKCkgPiB0aGlzLmdldExpbWVEYXkoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkpvdXJuZXlfSXNMZXZlbFZhbGlkXCIpXG4gIGlzTGV2ZWxWYWxpZCgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpID4gdGhpcy5nZXRMaW1pdExldmVsKCk7XG4gIH1cbiAgaXNBY3RpdmVKb3VybmV5KCkge1xuICAgIHZhciB0ID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKHQuaXNVbmxvY2tlZCgpKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZURheVZhbGlkKCkgJiYgdGhpcy5pc0xldmVsVmFsaWQoKSkge1xuICAgICAgdC5zZXRVbmxvY2tlZCh0cnVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJKb3VybmV5X1RyeUNoYW5nZVwiKVxuICB0cnlDaGFuZ2VKb3VybmV5KCkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZUpvdXJuZXkoKTtcbiAgfVxuICBvbkhhbGxWd19pbml0QnRucyh0LCBlKSB7XG4gICAgdGhpcy5yZWlzc3VlUmV3YXJkcygpO1xuICAgIHQuYXJnc1swXSA9IHQuYXJnc1swXSB8fCB7fTtcbiAgICB0aGlzLnJlcGxhY2VIYWxsVGhlbWUodC5hcmdzWzBdKTtcbiAgICBlKCk7XG4gIH1cbiAgb25IYWxsVndfdXBkYXRlVUkodCwgZSkge1xuICAgIHZhciByO1xuICAgIHRoaXMuaXNBY3RpdmVKb3VybmV5KCk7XG4gICAgdGhpcy50cnlDaGFuZ2VKb3VybmV5KCk7XG4gICAgdGhpcy5jcmVhdGVIYWxsQnV0dG9uKG51bGwgPT09IChyID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIubm9kZSk7XG4gICAgdC5hcmdzWzBdID0gdC5hcmdzWzBdIHx8IHt9O1xuICAgIHRoaXMucmVwbGFjZUhhbGxUaGVtZSh0LmFyZ3NbMF0pO1xuICAgIGUoKTtcbiAgfVxuICBvbkhhbGxWd19vblBvcFZpZXcodCwgZSkge1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdGhpcy5zaG93Sm91cm5leUFjdGl2ZVZpZXcoKVxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSm91cm5leV9DYW5TaG93QWN0aXZlVndcIilcbiAgY2FuU2hvd0FjdGl2ZVZpZXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlSm91cm5leSgpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc1Nlc3Npb25BY3RpdmUoKSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciB0ID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VyU2Vzc2lvbigpO1xuICAgIGlmICh0aGlzLmN1clNlc3Npb24gPT09IHQpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmN1clNlc3Npb24gPSB0O1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSm91cm5leV9TaG93QWN0aXZlVndcIilcbiAgc2hvd0pvdXJuZXlBY3RpdmVWaWV3KCkge1xuICAgIGlmICh0aGlzLmNhblNob3dBY3RpdmVWaWV3KCkpIHtcbiAgICAgIHZhciB0ID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgICBlID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLlRyYXZlbCwgdCk7XG4gICAgICBpZiAoIWUpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuZG9TaG93QWN0aXZlVmlldyh7XG4gICAgICAgIGNvbmZpZzogZSxcbiAgICAgICAgaXNOZXdTZXNzaW9uOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSm91cm5leV9DcmVhdGVCdG5cIilcbiAgY3JlYXRlSGFsbEJ1dHRvbih0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgIGlmICghdGhpcy5pc0FjdGl2ZUpvdXJuZXkoKSkgcmV0dXJuO1xuICAgICAgdmFyIGUgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgciA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJIYWxsSm91cm5leUJ0blwiKTtcbiAgICAgIGlmICghZS5pc1Nlc3Npb25BY3RpdmUoKSkge1xuICAgICAgICBjYy5pc1ZhbGlkKHIsIHRydWUpICYmIHIuZGVzdHJveSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuY3JlYXRlZEhhbGxCdXR0b24gJiYgY2MuaXNWYWxpZChyKSkgcmV0dXJuO1xuICAgICAgY2MuaXNWYWxpZChyKSAmJiByLmRlc3Ryb3koKTtcbiAgICAgIHZhciBvID0gZS5nZXRDdXJKb3VybmV5KCk7XG4gICAgICBpZiAoIWUuZ2V0Q29uZmlnKG8pKSByZXR1cm47XG4gICAgICB0aGlzLmRvQ3JlYXRlSGFsbEJ1dHRvbih0LCBvLCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSm91cm5leV9kb0NyZWF0ZUJ0blwiKVxuICBkb0NyZWF0ZUhhbGxCdXR0b24odCwgZSwgbywgbiwgaSkge1xuICAgIHZhciBhID0gdGhpcztcbiAgICB0aGlzLmNyZWF0ZWRIYWxsQnV0dG9uID0gZmFsc2U7XG4gICAgSGFsbFRyYXZlbEJ0bi5jcmVhdGVVSShuLCBpKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZChyKSAmJiBjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgIHQuYWRkQ2hpbGQocik7XG4gICAgICAgIHZhciBuID0gci5nZXRDb21wb25lbnQoSGFsbFRyYXZlbEJ0bik7XG4gICAgICAgIG4uZGVsZWdhdGUgPSB0LmdldENvbXBvbmVudChVSVZpZXcpLmRlbGVnYXRlO1xuICAgICAgICBuLnVwZGF0ZVVJKGUsIGEuZ2V0TGltaXRMZXZlbCgpLCBvKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIEpvdXJuZXlUcmFpdC50cmFpdEtleSArIFwiXSDmuLjmiI/lhoXliJvlu7rmjInpkq7lpLHotKU6XCIgKyAoKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkgfHwgXCJIYWxsSm91cm5leUJ0buaMiemSruWKoOi9veWksei0pVwiKSk7XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJKb3VybmV5X1Nlc3Npb25FbmRcIilcbiAgb25UcmF2ZWxHYW1lU2Vzc2lvbkVuZCgpIHtcbiAgICBpZiAodGhpcy50cnlDaGFuZ2VKb3VybmV5KCkpIHtcbiAgICAgIHRoaXMuZG9IaWRlQWN0aXZlVmlldygpO1xuICAgICAgdmFyIHQgPSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldENvbnRyb0J5TmFtZShcIkhhbGxDb250cm9sbGVyXCIpO1xuICAgICAgaWYgKCF0KSByZXR1cm47XG4gICAgICB0aGlzLmNyZWF0ZUhhbGxCdXR0b24odC5yb290Vmlldy5nZXRDaGlsZEJ5TmFtZShcIkhhbGxcIikpO1xuICAgICAgdGhpcy5zaG93Sm91cm5leUFjdGl2ZVZpZXcoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJKb3VybmV5X1NlYXNvblN0YXJ0XCIpXG4gIG9uVHJhdmVsR2FtZVNlc3Npb25TdGFydCgpIHt9XG4gIGlzU2Vzc2lvblZhbGlkKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Sm91cm5leUxpc3QoKTtcbiAgICBpZiAodCA8IDAgfHwgdCA+PSBlLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciByID0gZVt0XSxcbiAgICAgIG8gPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuVHJhdmVsLCByKTtcbiAgICBpZiAoIW8pIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbiA9IG5ldyBEYXRlKCksXG4gICAgICBpID0gTWF0aC5mbG9vcihuLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiAhKG8uZW5kVGltZSA+IDAgJiYgaSA+PSBvLmVuZFRpbWUpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSm91cm5leV9Jc1Nlc3Npb25FbmRcIilcbiAgaXNTZXNzaW9uRW5kKCkge1xuICAgIHJldHVybiAhVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuaXNTZXNzaW9uQWN0aXZlKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJKb3VybmV5X05leHRTZXNzaW9uXCIpXG4gIGdldE5leHRTZXNzaW9uKCkge1xuICAgIHZhciB0ID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VyU2Vzc2lvbkluZGV4KCksXG4gICAgICBlID0gdGhpcy5nZXRKb3VybmV5TGlzdCgpLFxuICAgICAgciA9IGUubGVuZ3RoO1xuICAgIGlmICgwID09PSByKSByZXR1cm4gW1wiXCIsIC0xXTtcbiAgICB2YXIgbyA9IHQgKyAxO1xuICAgIHJldHVybiBvID49IHIgPyBbXCJcIiwgLTFdIDogdGhpcy5pc1Nlc3Npb25WYWxpZChvKSA/IFtlW29dLCBvXSA6IFtcIlwiLCAtMV07XG4gIH1cbiAgY2FuQ2hhbmdlSm91cm5leSgpIHtcbiAgICBpZiAoIVRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLmlzVW5sb2NrZWQoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghdGhpcy5pc1Nlc3Npb25FbmQoKSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciB0ID0gX19yZWFkKHRoaXMuZ2V0TmV4dFNlc3Npb24oKSwgMiksXG4gICAgICBlID0gdFswXTtcbiAgICB0WzFdO1xuICAgIHJldHVybiBcIlwiICE9PSBlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSm91cm5leV9HZXRTdGFydFRpbWVcIilcbiAgZ2V0U2Vzc2lvblN0YXJ0VGltZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgfVxuICBjaGFuZ2VKb3VybmV5KCkge1xuICAgIGlmICghdGhpcy5jYW5DaGFuZ2VKb3VybmV5KCkpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgdCA9IF9fcmVhZCh0aGlzLmdldE5leHRTZXNzaW9uKCksIDIpLFxuICAgICAgZSA9IHRbMF0sXG4gICAgICByID0gdFsxXTtcbiAgICByZXR1cm4gdGhpcy5kb0NoYW5nZUpvdXJuZXkoZSwgcik7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJKb3VybmV5X0RvQ2hhbmdlXCIpXG4gIGRvQ2hhbmdlSm91cm5leSh0LCBlKSB7XG4gICAgdmFyIHIgPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuVHJhdmVsLCB0KTtcbiAgICBpZiAoIXIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbyA9IG5ldyBEYXRlKCksXG4gICAgICBuID0gTWF0aC5mbG9vcihvLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIGlmIChyLnN0YXJ0VGltZSA+IDAgJiYgbiA8IHIuc3RhcnRUaW1lKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGkgPSB0aGlzLmdldFNlc3Npb25TdGFydFRpbWUoKSxcbiAgICAgIGEgPSByLmR1cmF0aW9uO1xuICAgIHIuZW5kVGltZSA+IDAgJiYgKGEgPSByLmVuZFRpbWUgLSBuKTtcbiAgICBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5hY3RpdmVTZXNzaW9uKHQsIGksIGEsIGUpO1xuICAgIFRyYXZlbEdhbWVEYXRhLmdldEluc3RhbmNlKCkucmVzZXRUcmF2ZWwoKTtcbiAgICBEb3RHYW1lVW5sb2NrLmRvdEJ5VHlwZShFRnVuY1VubG9ja1R5cGUuVHJhdmVsKTtcbiAgICB0aGlzLmNyZWF0ZWRIYWxsQnV0dG9uID0gdHJ1ZTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChUUkFWRUxfR0FNRV9TRVNTSU9OX0NIQU5HRSwgW3QsIGVdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkpvdXJuZXlfZG9TaHdBY3RpdmVWd1wiKVxuICBkb1Nob3dBY3RpdmVWaWV3KHQpIHtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiVHJhdmVsQWN0aXZlQ29udHJvbGxlclwiLCB0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkpvdXJuZXlfZG9IaWRlQWN0aXZlVndcIilcbiAgZG9IaWRlQWN0aXZlVmlldygpIHtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNsb3NlVmlld0J5TmFtZShcIlRyYXZlbEFjdGl2ZUNvbnRyb2xsZXJcIik7XG4gIH1cbiAgZ2V0Q3VyT3JOZXh0Sm91cm5leSgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmVKb3VybmV5KCkpIHJldHVybiB7XG4gICAgICBqb3VybmV5OiBfX3JlYWQodGhpcy5nZXROZXh0U2Vzc2lvbigpLCAxKVswXSxcbiAgICAgIGlzTmV3U2Vzc2lvbjogdHJ1ZSxcbiAgICAgIHVubG9ja2VkOiBmYWxzZVxuICAgIH07XG4gICAgdmFyIHQgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICByZXR1cm4gdC5pc1Nlc3Npb25BY3RpdmUoKSA/IHtcbiAgICAgIGpvdXJuZXk6IHQuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgaXNOZXdTZXNzaW9uOiBmYWxzZSxcbiAgICAgIHVubG9ja2VkOiB0cnVlXG4gICAgfSA6IHtcbiAgICAgIGpvdXJuZXk6IF9fcmVhZCh0aGlzLmdldE5leHRTZXNzaW9uKCksIDEpWzBdLFxuICAgICAgaXNOZXdTZXNzaW9uOiB0cnVlLFxuICAgICAgdW5sb2NrZWQ6IHRydWVcbiAgICB9O1xuICB9XG59Il19
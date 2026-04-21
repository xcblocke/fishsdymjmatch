import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import UIView from '../../../Scripts/framework/ui/UIView';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { TRAVEL_GAME_SESSION_END, TRAVEL_GAME_SESSION_START, ETravelRewardType, TRAVEL_GAME_SESSION_CHANGE } from '../../../Scripts/config/TravelConfig';
import TravelGameData from '../../../Scripts/core/simulator/data/TravelGameData';
import { DotGameUnlock, EFuncUnlockType } from '../../../Scripts/gamePlay/dot/DGameUnlock';
import HallTravelBtn from '../../../Scripts/HallTravelBtn';
import BadgeMode, { BadgeType } from '../../../Scripts/gamePlay/badge/mode/BadgeMode';
@mj.trait
@mj.class("JourneyTrait")
export default class JourneyTrait extends Trait {
  createdHallButton = true;
  curSession = -1;
  static traitKey = "Journey";
  onLoad() {
    super.onLoad.call(this);
    this.initJourneyList();
  }
  initJourneyList() {
    if (this.getCachedJourney().length <= 0) this.cacheJourney(this.traitData.journeys);else {
      this.fixTraitJourneyList();
      this.sortJourneyByConfig();
    }
  }
  sortJourneyByConfig() {
    var t = this.getCachedJourney(),
      e = this.traitData.journeys;
    if (t.filter(function (t) {
      return e.includes(t);
    }).join(",") !== e.join(",")) {
      t.sort(function (t, r) {
        return e.includes(t) && e.includes(r) ? e.indexOf(t) - e.indexOf(r) : 0;
      });
      this.cacheJourney(t);
    }
  }
  fixTraitJourneyList() {
    var t,
      e,
      r = this.getLastTraitJourney(),
      o = this.getCachedJourney();
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
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          s && !s.done && (e = i.return) && e.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      this.cacheJourney(o);
      this.setLastTraitJourney(this.traitData.journeys);
    }
  }
  cacheJourney(t) {
    0 !== t.length && (this.localData.cachedJourneys = t);
  }
  setLastTraitJourney(t) {
    0 !== t.length && (this.localData.lastTraitJourney = t);
  }
  getLastTraitJourney() {
    var t = this.localData.lastTraitJourney;
    return null == t || "" === t ? [] : t;
  }
  getCachedJourney() {
    var t = this.localData.cachedJourneys;
    return null == t || "" === t ? [] : t;
  }
  getMessageListeners() {
    var _t = {};
    _t[TRAVEL_GAME_SESSION_END] = this.onTravelGameSessionEnd.bind(this);
    _t[TRAVEL_GAME_SESSION_START] = this.onTravelGameSessionStart.bind(this);
    return _t;
  }
  onHallCtl_initVwRes(t, e) {
    this.tryAddSeason();
    this.orderJourney();
    e({
      returnType: TraitCallbackReturnType.return
    });
  }
  @mj.traitEvent("Journey_Order")
  orderJourney() {}
  @mj.traitEvent("Journey_tryAddSeason")
  tryAddSeason() {}
  reissueRewards() {
    var t, e;
    if (this.isActiveJourney() && TravelGameModel.getInstance().isSessionActive()) {
      var o = TravelGameModel.getInstance(),
        n = o.getCurJourney();
      try {
        var i = TravelGameData.getInstance().getLevelId(),
          s = o.getRewardInfo(n);
        try {
          for (var l = __values(s), u = l.next(); !u.done; u = l.next()) {
            var y = u.value;
            if (y.type === ETravelRewardType.EBadge && !y.gain && i > y.lv) {
              var d = DataReader.getByKey(ConfigType.reward_config, y.reward);
              if (d && d.Items.length > 0) {
                var g = DataReader.getByKey(ConfigType.item_config, d.Items[0]);
                BadgeMode.getInstance().addBadge(g.ID, BadgeType.Journey, n);
              }
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            u && !u.done && (e = l.return) && e.call(l);
          } finally {
            if (t) throw t.error;
          }
        }
      } catch (t) {
        var _ = (null == t ? void 0 : t.message) || "未知错误";
        console.error("[" + JourneyTrait.traitKey + "] 兜底发放:" + n + "期未领取的勋章奖励失败:" + _);
      }
    }
  }
  @mj.traitEvent("Journey_replaceHall")
  replaceHallTheme(t) {
    var e = "Hall";
    "string" == typeof this.traitData.replace && "" !== this.traitData.replace && (e = this.traitData.replace);
    t.hallTheme = e;
  }
  @mj.traitEvent("Journey_getLimitDay")
  getLimeDay() {
    return this.traitData.installDay;
  }
  @mj.traitEvent("Journey_getLimitLevel")
  getLimitLevel() {
    return this.traitData.levelLimit;
  }
  @mj.traitEvent("Journey_getJourneyList")
  getJourneyList() {
    return this.getCachedJourney();
  }
  @mj.traitEvent("Journey_IsDayValid")
  isActiveDayValid() {
    return UserModel.getInstance().getGameActiveDays() > this.getLimeDay();
  }
  @mj.traitEvent("Journey_IsLevelValid")
  isLevelValid() {
    return UserModel.getInstance().getMainGameData().getLevelId() > this.getLimitLevel();
  }
  isActiveJourney() {
    var t = TravelGameModel.getInstance();
    if (t.isUnlocked()) return true;
    if (this.isActiveDayValid() && this.isLevelValid()) {
      t.setUnlocked(true);
      return true;
    }
    return false;
  }
  @mj.traitEvent("Journey_TryChange")
  tryChangeJourney() {
    return this.changeJourney();
  }
  onHallVw_initBtns(t, e) {
    this.reissueRewards();
    t.args[0] = t.args[0] || {};
    this.replaceHallTheme(t.args[0]);
    e();
  }
  onHallVw_updateUI(t, e) {
    var r;
    this.isActiveJourney();
    this.tryChangeJourney();
    this.createHallButton(null === (r = t.ins) || void 0 === r ? void 0 : r.node);
    t.args[0] = t.args[0] || {};
    this.replaceHallTheme(t.args[0]);
    e();
  }
  onHallVw_onPopView(t, e) {
    e({
      isBreak: this.showJourneyActiveView()
    });
  }
  @mj.traitEvent("Journey_CanShowActiveVw")
  canShowActiveView() {
    if (!this.isActiveJourney()) return false;
    if (!TravelGameModel.getInstance().isSessionActive()) return false;
    var t = TravelGameModel.getInstance().getCurSession();
    if (this.curSession === t) return false;
    this.curSession = t;
    return true;
  }
  @mj.traitEvent("Journey_ShowActiveVw")
  showJourneyActiveView() {
    if (this.canShowActiveView()) {
      var t = TravelGameModel.getInstance().getCurJourney(),
        e = DataReader.getByKey(ConfigType.Travel, t);
      if (!e) return false;
      this.doShowActiveView({
        config: e,
        isNewSession: false
      });
      return true;
    }
    return false;
  }
  @mj.traitEvent("Journey_CreateBtn")
  createHallButton(t) {
    if (cc.isValid(t)) {
      if (!this.isActiveJourney()) return;
      var e = TravelGameModel.getInstance(),
        r = t.getChildByName("HallJourneyBtn");
      if (!e.isSessionActive()) {
        cc.isValid(r, true) && r.destroy();
        return;
      }
      if (!this.createdHallButton && cc.isValid(r)) return;
      cc.isValid(r) && r.destroy();
      var o = e.getCurJourney();
      if (!e.getConfig(o)) return;
      this.doCreateHallButton(t, o, false);
    }
  }
  @mj.traitEvent("Journey_doCreateBtn")
  doCreateHallButton(t, e, o, n, i) {
    var a = this;
    this.createdHallButton = false;
    HallTravelBtn.createUI(n, i).then(function (r) {
      if (cc.isValid(r) && cc.isValid(t)) {
        t.addChild(r);
        var n = r.getComponent(HallTravelBtn);
        n.delegate = t.getComponent(UIView).delegate;
        n.updateUI(e, a.getLimitLevel(), o);
      }
    }).catch(function (t) {
      console.error("[" + JourneyTrait.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallJourneyBtn按钮加载失败"));
    });
  }
  @mj.traitEvent("Journey_SessionEnd")
  onTravelGameSessionEnd() {
    if (this.tryChangeJourney()) {
      this.doHideActiveView();
      var t = ControllerManager.getInstance().getControByName("HallController");
      if (!t) return;
      this.createHallButton(t.rootView.getChildByName("Hall"));
      this.showJourneyActiveView();
    }
  }
  @mj.traitEvent("Journey_SeasonStart")
  onTravelGameSessionStart() {}
  isSessionValid(t) {
    var e = this.getJourneyList();
    if (t < 0 || t >= e.length) return false;
    var r = e[t],
      o = DataReader.getByKey(ConfigType.Travel, r);
    if (!o) return false;
    var n = new Date(),
      i = Math.floor(n.getTime() / 1000);
    return !(o.endTime > 0 && i >= o.endTime);
  }
  @mj.traitEvent("Journey_IsSessionEnd")
  isSessionEnd() {
    return !TravelGameModel.getInstance().isSessionActive();
  }
  @mj.traitEvent("Journey_NextSession")
  getNextSession() {
    var t = TravelGameModel.getInstance().getCurSessionIndex(),
      e = this.getJourneyList(),
      r = e.length;
    if (0 === r) return ["", -1];
    var o = t + 1;
    return o >= r ? ["", -1] : this.isSessionValid(o) ? [e[o], o] : ["", -1];
  }
  canChangeJourney() {
    if (!TravelGameModel.getInstance().isUnlocked()) return false;
    if (!this.isSessionEnd()) return false;
    var t = __read(this.getNextSession(), 2),
      e = t[0];
    t[1];
    return "" !== e;
  }
  @mj.traitEvent("Journey_GetStartTime")
  getSessionStartTime() {
    return new Date().setHours(0, 0, 0, 0);
  }
  changeJourney() {
    if (!this.canChangeJourney()) return false;
    var t = __read(this.getNextSession(), 2),
      e = t[0],
      r = t[1];
    return this.doChangeJourney(e, r);
  }
  @mj.traitEvent("Journey_DoChange")
  doChangeJourney(t, e) {
    var r = DataReader.getByKey(ConfigType.Travel, t);
    if (!r) return false;
    var o = new Date(),
      n = Math.floor(o.getTime() / 1000);
    if (r.startTime > 0 && n < r.startTime) return false;
    var i = this.getSessionStartTime(),
      a = r.duration;
    r.endTime > 0 && (a = r.endTime - n);
    TravelGameModel.getInstance().activeSession(t, i, a, e);
    TravelGameData.getInstance().resetTravel();
    DotGameUnlock.dotByType(EFuncUnlockType.Travel);
    this.createdHallButton = true;
    mj.EventManager.emit(TRAVEL_GAME_SESSION_CHANGE, [t, e]);
    return true;
  }
  @mj.traitEvent("Journey_doShwActiveVw")
  doShowActiveView(t) {
    ControllerManager.getInstance().pushViewByController("TravelActiveController", t);
  }
  @mj.traitEvent("Journey_doHideActiveVw")
  doHideActiveView() {
    ControllerManager.getInstance().closeViewByName("TravelActiveController");
  }
  getCurOrNextJourney() {
    if (!this.isActiveJourney()) return {
      journey: __read(this.getNextSession(), 1)[0],
      isNewSession: true,
      unlocked: false
    };
    var t = TravelGameModel.getInstance();
    return t.isSessionActive() ? {
      journey: t.getCurJourney(),
      isNewSession: false,
      unlocked: true
    } : {
      journey: __read(this.getNextSession(), 1)[0],
      isNewSession: true,
      unlocked: true
    };
  }
}
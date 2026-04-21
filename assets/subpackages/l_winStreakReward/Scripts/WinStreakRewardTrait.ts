import { MjGameType, EGetItemReasonId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("WinStreakRewardTrait")
export default class WinStreakRewardTrait extends Trait {
  _config = {
    gameTypes: [MjGameType.Normal]
  };
  _stateByMode = new Map();
  _isRestartCurrentLevel = false;
  static traitKey = "WinStreakReward";
  onLoad() {
    var e, i;
    super.onLoad.call(this);
    this._config = {
      gameTypes: null !== (i = null === (e = this._traitData) || void 0 === e ? void 0 : e.gameTypes) && void 0 !== i ? i : [MjGameType.Normal]
    };
    this.applyColdStartResidualCheck();
  }
  applyColdStartResidualCheck() {
    var t,
      e,
      i,
      n,
      o = this._config.gameTypes;
    if (Array.isArray(o)) {
      var r = UserModel.getInstance();
      try {
        for (var s = __values(o), c = s.next(); !c.done; c = s.next()) {
          var l = c.value,
            d = r.getGameDataByGameType(l);
          if (d) {
            var p = null === (i = d.getLevelData) || void 0 === i ? void 0 : i.call(d),
              h = null === (n = d.getOriginalLevelData) || void 0 === n ? void 0 : n.call(d);
            p && h && (this.getState(l).lastRoundHadDeadLock = true);
          }
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          c && !c.done && (e = s.return) && e.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
    }
  }
  getCurrentGameType() {
    return UserModel.getInstance().getCurrentGameType();
  }
  isGameTypeEnabled(t) {
    return this._config.gameTypes.includes(t);
  }
  getState(t) {
    this._stateByMode.has(t) || this._stateByMode.set(t, {
      lastRoundWin: false,
      lastRoundHadDeadLock: false,
      hadPostInterAdThisRound: false,
      hadPreInterAdThisRound: false,
      hasShownReward: false
    });
    return this._stateByMode.get(t);
  }
  isWinStreak(t) {
    var e = this.getState(t);
    return e.lastRoundWin && !e.lastRoundHadDeadLock;
  }
  shouldShowReward(t) {
    var e = this.getState(t),
      i = e.hadPostInterAdThisRound || e.hadPreInterAdThisRound;
    return this.isGameTypeEnabled(t) && this.isWinStreak(t) && i && !e.hasShownReward;
  }
  resetWinStreak(t) {
    var e = this.getState(t);
    e.lastRoundWin = false;
    e.lastRoundHadDeadLock = false;
    e.hadPostInterAdThisRound = false;
    e.hadPreInterAdThisRound = false;
  }
  onAdMgr_interAdClose(t, e) {
    var i,
      n = this.getCurrentGameType(),
      o = this.getState(n),
      r = null === (i = t.args) || void 0 === i ? void 0 : i[0];
    if ("beforeInterAd" === (null == r ? void 0 : r.adTimeType)) {
      o.hadPreInterAdThisRound = true;
    } else {
      "afterInterAd" === (null == r ? void 0 : r.adTimeType) && (o.hadPostInterAdThisRound = true);
    }
    e();
  }
  onWinCtrl_viewShow(t, e) {
    var i = this.getCurrentGameType(),
      n = this.getState(i);
    n.lastRoundWin = true;
    n.hasShownReward = false;
    e();
  }
  onTLWinVw_onLoad(t, e) {
    var i = this.getCurrentGameType(),
      n = this.getState(i);
    n.lastRoundWin = true;
    n.hasShownReward = false;
    e();
  }
  onDCWinVw_onLoad(t, e) {
    var i = this.getCurrentGameType(),
      n = this.getState(i);
    n.lastRoundWin = true;
    n.hasShownReward = false;
    e();
  }
  onTile2WinVw_onLoad(t, e) {
    var i = this.getCurrentGameType(),
      n = this.getState(i);
    n.lastRoundWin = true;
    n.hasShownReward = false;
    e();
  }
  onFailBhv_start(t, e) {
    var i = this.getCurrentGameType();
    this.getState(i).lastRoundHadDeadLock = true;
    e();
  }
  onTile2FailBhv_start(t, e) {
    var i = this.getCurrentGameType();
    this.getState(i).lastRoundHadDeadLock = true;
    e();
  }
  onFailVw_show(t, e) {
    var i = this.getCurrentGameType();
    this.getState(i).lastRoundWin = false;
    e();
  }
  onIptSetLv_newGComp(t, e) {
    var i = t.ins,
      n = null == i ? void 0 : i.gameContext,
      o = (!!n && n.getIsNewGame(), !!n && n.getIsRestart());
    this._isRestartCurrentLevel = o;
    e();
  }
  onIptT2SetLv_newGmComplete(t, e) {
    var i = t.ins,
      n = null == i ? void 0 : i.gameContext,
      o = !!n && n.getIsRestart();
    this._isRestartCurrentLevel = o;
    e();
  }
  onEntAniFiBhv_start(t, e) {
    if (this._isRestartCurrentLevel) {
      this._isRestartCurrentLevel = false;
      e();
    } else {
      var i = this.getCurrentGameType(),
        n = this.getState(i);
      if (this.shouldShowReward(i)) {
        n.hasShownReward = true;
        n.hadPostInterAdThisRound = false;
        n.hadPreInterAdThisRound = false;
        this.showWinStreakReward();
      } else {
        n.hasShownReward = false;
        n.hadPostInterAdThisRound = false;
      }
      n.lastRoundHadDeadLock = false;
      e();
    }
  }
  showWinStreakReward() {
    var t = this.getRandomReward(),
      e = this.getRandomReward(),
      i = this.getCurrentGameType(),
      n = GameUtils.getInputAddPropType(i);
    GameInteraction.input({
      inputType: n,
      propType: "shuffle",
      num: t,
      reasonId: EGetItemReasonId.WinStreakReward,
      reasonInfo: "连胜奖励"
    });
    GameInteraction.input({
      inputType: n,
      propType: "hitTips",
      num: e,
      reasonId: EGetItemReasonId.WinStreakReward,
      reasonInfo: "连胜奖励"
    });
    var o = {
      hint: e,
      shuffle: t
    };
    ControllerManager.getInstance().pushViewByController("WinStreakRewardController", {
      config: o
    });
  }
  getRandomReward() {
    return Math.floor(3 * Math.random()) + 1;
  }
}
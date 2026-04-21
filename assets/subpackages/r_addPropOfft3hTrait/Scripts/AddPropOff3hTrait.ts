import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { EGameInputEnum, EShuffleFrom } from '../../../Scripts/simulator/constant/GameInputEnum';
import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { AddPropOff3hEffect } from '../../../Scripts/AddPropOff3hEffect';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("AddPropOff3hTrait")
export default class AddPropOff3hTrait extends Trait {
  _config = {
    noMatchTime: 15,
    offlineHours: 3.5,
    offlineType: 0,
    gameTypes: [MjGameType.Normal]
  };
  _has3hFreeProp = false;
  _levelTriggered = false;
  _freePropPending = false;
  _isExecutingFreeHint = false;
  _isReplayFree = false;
  _needStop = false;
  static traitKey = "AddPropOff3h";
  onLoad() {
    var t, i, o, r, n, s, a, l;
    super.onLoad.call(this);
    this._config = {
      noMatchTime: null !== (i = null === (t = this._traitData) || void 0 === t ? void 0 : t.noMatchTime) && void 0 !== i ? i : 15,
      offlineHours: null !== (r = null === (o = this._traitData) || void 0 === o ? void 0 : o.offlineHours) && void 0 !== r ? r : 3.5,
      offlineType: null !== (s = null === (n = this._traitData) || void 0 === n ? void 0 : n.offlineType) && void 0 !== s ? s : 0,
      gameTypes: null !== (l = null === (a = this._traitData) || void 0 === a ? void 0 : a.gameTypes) && void 0 !== l ? l : [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge]
    };
    this.localData.lastOperateTime || (this.localData.lastOperateTime = 0);
    this.localData.sessionTriggerCount || (this.localData.sessionTriggerCount = 0);
    this.registerEvent([{
      event: "FailBhv_start",
      priority: 0,
      type: TraitEventPositionType.befor
    }]);
  }
  isGameTypeEnabled() {
    var e = this._config.gameTypes;
    if (!e || 0 === e.length) return true;
    var t = UserModel.getInstance().getCurrentGameType();
    return e.includes(t);
  }
  check3hReturn() {
    if (this._config.offlineHours < 0) return false;
    var e = this.localData.lastOperateTime || 0;
    return 0 !== e && (Date.now() - e) / 3600000 >= this._config.offlineHours;
  }
  shouldStartTimer() {
    var e = UserModel.getInstance();
    return !(!e.isGuideFinished() || 1 === e.normalData.getLevelId()) && !this._has3hFreeProp && !this._levelTriggered && this.localData.sessionTriggerCount < 2;
  }
  getNextTriggerButton() {
    return 0 === this.localData.sessionTriggerCount ? "btnPropHint" : "btnShuffle";
  }
  hasFreeHint() {
    return this._has3hFreeProp && 1 === this._config.offlineType || this._freePropPending && 0 === this.localData.sessionTriggerCount;
  }
  hasFreeShuffle() {
    return this._has3hFreeProp && 0 === this._config.offlineType || this._freePropPending && 1 === this.localData.sessionTriggerCount;
  }
  pushEffect(e, t) {
    e && "function" == typeof e.pushEffect && e.pushEffect(new AddPropOff3hEffect(t), EInsertType.Parallel);
  }
  onFailBhv_start(e, t) {
    if (this.isGameTypeEnabled()) {
      if (!this._has3hFreeProp || this._freePropPending) {
        GameInteraction.input({
          inputType: EGameInputEnum.AddPropOff3h,
          type: "stopAll"
        });
        this._freePropPending = false;
      }
      t();
    } else t();
  }
  onIptInitView_pushEff(e, t) {
    if (this.isGameTypeEnabled()) {
      var i = e.ins;
      this._levelTriggered = false;
      this._freePropPending = false;
      !this._has3hFreeProp && this.check3hReturn() && (this._has3hFreeProp = true);
      this.localData.lastOperateTime = Date.now();
      if (this._has3hFreeProp) {
        var o = 1 === this._config.offlineType ? "btnPropHint" : "btnShuffle";
        this.pushEffect(i, {
          action: "start",
          buttonName: o
        });
      }
      this.shouldStartTimer() && !this._isReplayFree && this.pushEffect(i, {
        action: "startTimer",
        delayTime: this._config.noMatchTime,
        timeoutButton: this.getNextTriggerButton()
      });
      t();
    } else t();
  }
  onIptSetLv_newGComp(e, t) {
    if (this.isGameTypeEnabled()) {
      var i = e.ins,
        o = null == i ? void 0 : i.gameContext;
      if (o && o.getIsRestart()) {
        this._isReplayFree = this._freePropPending;
        this._levelTriggered = false;
        this._freePropPending = false;
        if (this._has3hFreeProp) {
          var r = 1 === this._config.offlineType ? "btnPropHint" : "btnShuffle";
          this.pushEffect(i, {
            action: "start",
            buttonName: r
          });
        }
        this.shouldStartTimer() && this._isReplayFree && this.pushEffect(i, {
          action: "startTimer",
          delayTime: 0,
          timeoutButton: this.getNextTriggerButton()
        });
        t();
      } else {
        this._freePropPending && (this.localData.sessionTriggerCount = this.localData.sessionTriggerCount + 1);
        this._levelTriggered = false;
        this._freePropPending = false;
        this._isReplayFree = false;
        this._has3hFreeProp || this.pushEffect(i, {
          action: "stopAll"
        });
        t();
      }
    } else t();
  }
  onIptBase_pushClrEff(e, t) {
    var i, o, r, n, s, a, l;
    if (this.isGameTypeEnabled()) {
      this._isReplayFree = false;
      var p = e.ins,
        f = null === (o = null === (i = null == p ? void 0 : p.gameContext) || void 0 === i ? void 0 : i.getGameData) || void 0 === o ? void 0 : o.call(i),
        u = null === (s = null === (n = null === (r = null == p ? void 0 : p.gameContext) || void 0 === r ? void 0 : r.resultChecker) || void 0 === n ? void 0 : n.checkIsEndOrDead) || void 0 === s ? void 0 : s.call(n);
      if (this._freePropPending && u) {
        var h = this.getNextTriggerButton();
        this.pushEffect(p, {
          action: "stopAll",
          buttonName: h
        });
        this._freePropPending = false;
        this.localData.sessionTriggerCount = this.localData.sessionTriggerCount + 1;
        t();
      } else {
        if (u) {
          h = this.getNextTriggerButton();
          this.pushEffect(p, {
            action: "stopAll",
            buttonName: h
          });
        }
        if ((null === (a = null == f ? void 0 : f.getHasTriggeredFullCombo) || void 0 === a ? void 0 : a.call(f)) || (null === (l = null == f ? void 0 : f.getHasTriggeredRewardCombo) || void 0 === l ? void 0 : l.call(f))) {
          t();
          this._has3hFreeProp || this.pushEffect(p, {
            action: "stopAll"
          });
        } else {
          !u && this.shouldStartTimer() && this.pushEffect(p, {
            action: "resetTimer",
            delayTime: this._config.noMatchTime,
            timeoutButton: this.getNextTriggerButton()
          });
          this.localData.lastOperateTime = Date.now();
          t();
        }
      }
    } else t();
  }
  onAddPropOff3h_timeout(e, t) {
    if (!this.isGameTypeEnabled() || this._levelTriggered || this.localData.sessionTriggerCount >= 2) t();else {
      this._levelTriggered = true;
      this._freePropPending = true;
      t();
    }
  }
  onIptHitTips_exec(e, t) {
    var i, o, r, n, s, l, p, f, u, h, c, d, g, v, T, m, _, y, P, E, C, b, D, F;
    if (this.isGameTypeEnabled()) {
      var H = e.ins;
      if (this.hasFreeHint()) {
        if (null !== (n = null === (r = null === (o = null === (i = H.gameController) || void 0 === i ? void 0 : i.gameContext) || void 0 === o ? void 0 : o.getCanHitTips) || void 0 === r ? void 0 : r.call(o)) && void 0 !== n && n.length) t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });else {
          var O = null !== (f = null === (p = null === (l = null === (s = H.gameController) || void 0 === s ? void 0 : s.tileMapObject) || void 0 === l ? void 0 : l.getCanMatchTilesHint) || void 0 === p ? void 0 : p.call(l)) && void 0 !== f ? f : [];
          if (0 === O.length) {
            null === (c = null === (h = null === (u = H.gameController) || void 0 === u ? void 0 : u.tileMapObject) || void 0 === h ? void 0 : h.updateCanMatchTiles) || void 0 === c || c.call(h);
            O = null !== (T = null === (v = null === (g = null === (d = H.gameController) || void 0 === d ? void 0 : d.tileMapObject) || void 0 === g ? void 0 : g.getCanMatchTilesHint) || void 0 === v ? void 0 : v.call(g)) && void 0 !== T ? T : [];
          }
          if (O.length <= 0) t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });else {
            if (this._has3hFreeProp && 1 === this._config.offlineType) this._has3hFreeProp = false;else {
              this._freePropPending = false;
              this.localData.sessionTriggerCount = this.localData.sessionTriggerCount + 1;
            }
            if (O.length > 0) {
              var G = O[Math.floor(Math.random() * O.length)].slice(0, 2),
                x = G[0].id,
                M = G[1].id;
              null === (y = null === (_ = null === (m = H.gameContext) || void 0 === m ? void 0 : m.trackerModifier) || void 0 === _ ? void 0 : _.triggerHint) || void 0 === y || y.call(_, x, M);
              var B = null === (P = H.gameController) || void 0 === P ? void 0 : P.tileMapObject;
              if (B) {
                var I = B.getTileObject(x),
                  w = B.getTileObject(M);
                I && (I.isHint = true);
                w && (w.isHint = true);
              }
              null === (C = null === (E = H.gameContext) || void 0 === E ? void 0 : E.setCanHitTips) || void 0 === C || C.call(E, [x, M]);
              "function" == typeof H.pushHitTipsEffect && H.pushHitTipsEffect(x, M, false);
            }
            var j = null !== (F = null === (D = null === (b = H.gameContext) || void 0 === b ? void 0 : b.getGameData()) || void 0 === D ? void 0 : D.getHitTipsNums()) && void 0 !== F ? F : 0;
            "function" == typeof H.pushUpdateHitTipsPropEffect && H.pushUpdateHitTipsPropEffect(j);
            this.pushEffect(H, {
              action: "stop",
              buttonName: "btnPropHint"
            });
            t({
              isBreak: true,
              returnType: TraitCallbackReturnType.return
            });
          }
        }
      } else t();
    } else t();
  }
  onIptHitTips_chgPropDef(e, t) {
    var i, o;
    if (this._isExecutingFreeHint) {
      this._isExecutingFreeHint = false;
      this._needStop = true;
      var r = e.ins;
      if (null == r ? void 0 : r.pushUpdateHitTipsPropEffect) {
        var n = (null === (o = null === (i = r.gameContext) || void 0 === i ? void 0 : i.getGameData()) || void 0 === o ? void 0 : o.getHitTipsNums()) || 0;
        r.pushUpdateHitTipsPropEffect(n);
      }
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else t();
  }
  onIptHitTips_execTempFix(e, t) {
    if (this._needStop) {
      this._needStop = false;
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.jump
      });
    } else t();
  }
  onIptShuffle_exec(e, t) {
    var i;
    if (this.isGameTypeEnabled()) {
      var o = e.ins;
      if ((null === (i = e.args[0]) || void 0 === i ? void 0 : i.from) !== EShuffleFrom.Free) {
        var r = this.hasFreeShuffle();
        if (r) {
          if (this._has3hFreeProp && 0 === this._config.offlineType) this._has3hFreeProp = false;else {
            this._freePropPending = false;
            this.localData.sessionTriggerCount = this.localData.sessionTriggerCount + 1;
          }
          e.args[0] = e.args[0] || {};
          e.args[0].from = EShuffleFrom.Free;
        }
        t();
        r && this.pushEffect(o, {
          action: "stop",
          buttonName: "btnShuffle"
        });
        this.shouldStartTimer() && this.pushEffect(o, {
          action: "resetTimer",
          delayTime: this._config.noMatchTime,
          timeoutButton: this.getNextTriggerButton()
        });
        this.localData.lastOperateTime = Date.now();
      } else t();
    } else t();
  }
  onMainGameCtrl_uiDes(e, t) {
    if (this.isGameTypeEnabled()) {
      var i = e.ins;
      this.pushEffect(i, {
        action: "stopAll"
      });
      if (this._freePropPending) {
        var o = this.getNextTriggerButton();
        this.pushEffect(i, {
          action: "stop",
          buttonName: o
        });
        this._freePropPending = false;
        this.localData.sessionTriggerCount = this.localData.sessionTriggerCount + 1;
      }
      t();
    } else t();
  }
}
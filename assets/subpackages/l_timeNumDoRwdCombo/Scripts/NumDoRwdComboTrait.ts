import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("NumDoRwdComboTrait")
export default class NumDoRwdComboTrait extends Trait {
  _lastClearTimestamp = 0;
  _gameType = MjGameType.None;
  static traitKey = "NumDoRwdCombo";
  onLoad() {
    var t, a, i, o, l, r, n, s, c, u, d, m, p, h, v, y, T, f;
    super.onLoad.call(this);
    if (this.localData && (!this.localData.byGameType || "object" != typeof this.localData.byGameType)) {
      this.localData.byGameType = {};
      this.localData = this.localData;
    }
    this._config = {
      comboExcute: null !== (a = null === (t = this._traitData) || void 0 === t ? void 0 : t.comboExcute) && void 0 !== a ? a : 3,
      comboNum: null !== (o = null === (i = this._traitData) || void 0 === i ? void 0 : i.comboNum) && void 0 !== o ? o : 3,
      timeMax: null !== (r = null === (l = this._traitData) || void 0 === l ? void 0 : l.timeMax) && void 0 !== r ? r : 28,
      paramAMax: null !== (s = null === (n = this._traitData) || void 0 === n ? void 0 : n.paramAMax) && void 0 !== s ? s : 6,
      paramBMax: null !== (u = null === (c = this._traitData) || void 0 === c ? void 0 : c.paramBMax) && void 0 !== u ? u : 10,
      roundTime: null !== (m = null === (d = this._traitData) || void 0 === d ? void 0 : d.roundTime) && void 0 !== m ? m : 4,
      timeRate: null !== (h = null === (p = this._traitData) || void 0 === p ? void 0 : p.timeRate) && void 0 !== h ? h : 1.5,
      valMax: null !== (y = null === (v = this._traitData) || void 0 === v ? void 0 : v.valMax) && void 0 !== y ? y : 12,
      gameType: null !== (f = null === (T = this._traitData) || void 0 === T ? void 0 : T.gameType) && void 0 !== f ? f : ["Normal", "Travel", "DailyChallenge"]
    };
  }
  isGameTypeEnabled() {
    var e,
      t = null === (e = this._config) || void 0 === e ? void 0 : e.gameType;
    return !t || 0 === t.length || t.includes(this._gameType);
  }
  onInitViewBhv_crtTls(e, t) {
    var a, i, o;
    this._gameType = null !== (o = null === (i = null === (a = e.ins) || void 0 === a ? void 0 : a._context) || void 0 === i ? void 0 : i.gameType) && void 0 !== o ? o : MjGameType.None;
    this._lastClearTimestamp = Date.now();
    this.clearPersistedRoundTimes(this._gameType);
    t();
  }
  onRwdComboChk_sTriNow(e, t) {
    var a,
      i,
      o,
      l,
      r,
      n,
      u,
      d,
      m,
      p,
      h,
      v,
      y = (null === (a = e.ins) || void 0 === a ? void 0 : a.context) || (null === (i = e.ins) || void 0 === i ? void 0 : i._context),
      T = null === (o = null == y ? void 0 : y.getGameData) || void 0 === o ? void 0 : o.call(y),
      f = null === (l = null == y ? void 0 : y.getTileMapObject) || void 0 === l ? void 0 : l.call(y);
    if (T && f) {
      if (this.isGameTypeEnabled()) {
        if (1 !== (null !== (n = null === (r = T.getLevelId) || void 0 === r ? void 0 : r.call(T)) && void 0 !== n ? n : 0)) {
          if (UserModel.getInstance().isGuideFinished()) {
            if (null !== (u = T.getHasTriggeredFullCombo) && void 0 !== u && u.call(T)) t();else if (null !== (d = T.getHasTriggeredRewardCombo) && void 0 !== d && d.call(T)) t({
              isBreak: true,
              returnType: TraitCallbackReturnType.return,
              returnVal: true
            });else {
              var _ = null !== (p = null === (m = T.getComboNum) || void 0 === m ? void 0 : m.call(T)) && void 0 !== p ? p : 0;
              this.updateLastRoundTime();
              if (_ < this._config.comboExcute) t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: false
              });else {
                var b = this.calcExpectedTileCount(_),
                  g = null !== (v = null === (h = f.getCurTilesCnt) || void 0 === h ? void 0 : h.call(f)) && void 0 !== v ? v : 0,
                  D = b > 0 && g > 0 && g <= b;
                t({
                  isBreak: true,
                  returnType: TraitCallbackReturnType.return,
                  returnVal: D
                });
              }
            }
          } else t();
        } else t();
      } else t();
    } else t();
  }
  updateLastRoundTime() {
    var e = Date.now();
    if (0 !== this._lastClearTimestamp) {
      var t = Math.max(0, (e - this._lastClearTimestamp) / 1000);
      this._lastClearTimestamp = e;
      var a = this.getStore(this._gameType),
        i = a.lastRoundTimes;
      i.push(t);
      var o = Math.max(1, Math.floor(this._config.roundTime));
      i.length > o && (a.lastRoundTimes = i.slice(i.length - o));
      this.localData.byGameType = this.localData.byGameType;
    } else this._lastClearTimestamp = e;
  }
  getLastRoundsTotalTime() {
    var e = Math.max(1, Math.floor(this._config.roundTime)),
      t = this.getStore(this._gameType).lastRoundTimes;
    return !t || t.length < e ? this._config.timeMax : t.reduce(function (e, t) {
      return e + t;
    }, 0);
  }
  calcExpectedTileCount(e) {
    var t = Math.max(1, Number(this._config.comboNum) || 1),
      a = Math.max(0, Number(this._config.paramAMax) || 0),
      i = Math.max(0, Number(this._config.paramBMax) || 0),
      o = Math.max(0, Number(this._config.timeMax) || 0),
      l = Math.max(0.0001, Number(this._config.timeRate) || 1),
      r = Math.max(0, Number(this._config.valMax) || 0),
      n = Math.min(a, Math.floor(e / t)),
      s = this.getLastRoundsTotalTime(),
      c = Math.floor((o - s) / l),
      u = Math.min(i, c);
    return Math.min(r, n + u);
  }
  getStore(e) {
    this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
    var t = this.localData.byGameType[e];
    if (!t || "object" != typeof t || !Array.isArray(t.lastRoundTimes)) {
      var a = {
        lastRoundTimes: []
      };
      this.localData.byGameType[e] = a;
      this.localData.byGameType = this.localData.byGameType;
      return a;
    }
    return t;
  }
  clearPersistedRoundTimes(e) {
    this.getStore(e).lastRoundTimes = [];
    this.localData.byGameType = this.localData.byGameType;
  }
}
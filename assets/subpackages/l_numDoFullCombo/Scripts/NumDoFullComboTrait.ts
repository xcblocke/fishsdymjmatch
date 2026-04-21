import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("NumDoFullComboTrait")
export default class NumDoFullComboTrait extends Trait {
  _lastClearTimestamp = 0;
  _gameType = MjGameType.None;
  static traitKey = "NumDoFullCombo";
  onLoad() {
    var e, a, o, i, r, l, n, s, u, c, m, p, d, h, f, v;
    super.onLoad.call(this);
    if (this.localData && (!this.localData.byGameType || "object" != typeof this.localData.byGameType)) {
      this.localData.byGameType = {};
      this.localData = this.localData;
    }
    this._config = {
      comboExcute: null !== (a = null === (e = this._traitData) || void 0 === e ? void 0 : e.comboExcute) && void 0 !== a ? a : 3,
      comboNum: null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.comboNum) && void 0 !== i ? i : 3,
      timeMax: null !== (l = null === (r = this._traitData) || void 0 === r ? void 0 : r.timeMax) && void 0 !== l ? l : 28,
      paramAMax: null !== (s = null === (n = this._traitData) || void 0 === n ? void 0 : n.paramAMax) && void 0 !== s ? s : 6,
      paramBMax: null !== (c = null === (u = this._traitData) || void 0 === u ? void 0 : u.paramBMax) && void 0 !== c ? c : 10,
      roundTime: null !== (p = null === (m = this._traitData) || void 0 === m ? void 0 : m.roundTime) && void 0 !== p ? p : 4,
      timeRate: null !== (h = null === (d = this._traitData) || void 0 === d ? void 0 : d.timeRate) && void 0 !== h ? h : 1.5,
      valMax: null !== (v = null === (f = this._traitData) || void 0 === f ? void 0 : f.valMax) && void 0 !== v ? v : 16
    };
  }
  onInitViewBhv_crtTls(t, e) {
    var a, o, i;
    this._gameType = null !== (i = null === (o = null === (a = t.ins) || void 0 === a ? void 0 : a._context) || void 0 === o ? void 0 : o.gameType) && void 0 !== i ? i : MjGameType.None;
    this._lastClearTimestamp = Date.now();
    this.clearPersistedRoundTimes(this._gameType);
    e();
  }
  onFullComboChk_canFullCb(t, e) {
    var a,
      o,
      i,
      r,
      l,
      n,
      c,
      m,
      p = t.ins,
      d = (null == p ? void 0 : p.context) || (null == p ? void 0 : p._context),
      h = null === (a = null == d ? void 0 : d.getGameData) || void 0 === a ? void 0 : a.call(d),
      f = null === (o = null == d ? void 0 : d.getTileMapObject) || void 0 === o ? void 0 : o.call(d);
    if (h && f) {
      if (UserModel.getInstance().isGuideFinished()) {
        if (null !== (i = h.getHasBrokenCombo) && void 0 !== i && i.call(h)) e();else if (null !== (r = h.getHasTriggeredFullCombo) && void 0 !== r && r.call(h)) e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: true
        });else {
          var v = null !== (n = null === (l = h.getComboNum) || void 0 === l ? void 0 : l.call(h)) && void 0 !== n ? n : 0;
          this.updateLastRoundTime();
          if (v < this._config.comboExcute) e();else {
            var y = this.calcExpectedTileCount(v),
              T = null !== (m = null === (c = f.getCurTilesCnt) || void 0 === c ? void 0 : c.call(f)) && void 0 !== m ? m : 0;
            if (y > 0 && T > 0 && T <= y) {
              e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: true
              });
            } else {
              e();
            }
          }
        }
      } else e();
    } else e();
  }
  updateLastRoundTime() {
    var t = Date.now();
    if (0 !== this._lastClearTimestamp) {
      var e = Math.max(0, (t - this._lastClearTimestamp) / 1000);
      this._lastClearTimestamp = t;
      var a = this.getStore(this._gameType),
        o = a.lastRoundTimes;
      o.push(e);
      var i = Math.max(1, Math.floor(this._config.roundTime));
      o.length > i && (a.lastRoundTimes = o.slice(o.length - i));
      this.localData.byGameType = this.localData.byGameType;
    } else this._lastClearTimestamp = t;
  }
  getLastRoundsTotalTime() {
    var t = Math.max(1, Math.floor(this._config.roundTime)),
      e = this.getStore(this._gameType).lastRoundTimes;
    return !e || e.length < t ? this._config.timeMax : e.reduce(function (t, e) {
      return t + e;
    }, 0);
  }
  calcExpectedTileCount(t) {
    var e = Math.max(1, Number(this._config.comboNum) || 1),
      a = Math.max(0, Number(this._config.paramAMax) || 0),
      o = Math.max(0, Number(this._config.paramBMax) || 0),
      i = Math.max(0, Number(this._config.timeMax) || 0),
      r = Math.max(0.0001, Number(this._config.timeRate) || 1),
      l = Math.max(0, Number(this._config.valMax) || 0),
      n = Math.min(a, Math.floor(t / e)),
      s = this.getLastRoundsTotalTime(),
      u = Math.floor((i - s) / r),
      c = Math.min(o, u);
    return Math.min(l, n + c);
  }
  getStore(t) {
    this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
    var e = this.localData.byGameType[t];
    if (!e || "object" != typeof e || !Array.isArray(e.lastRoundTimes)) {
      var a = {
        lastRoundTimes: []
      };
      this.localData.byGameType[t] = a;
      this.localData.byGameType = this.localData.byGameType;
      return a;
    }
    return e;
  }
  clearPersistedRoundTimes(t) {
    this.getStore(t).lastRoundTimes = [];
    this.localData.byGameType = this.localData.byGameType;
  }
}
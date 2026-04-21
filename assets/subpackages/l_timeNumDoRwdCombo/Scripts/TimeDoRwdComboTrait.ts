import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("TimeDoRwdComboTrait")
export default class TimeDoRwdComboTrait extends Trait {
  _gameType = MjGameType.None;
  _levelId = 0;
  _hasDecidedThisLevel = false;
  _enabledThisLevel = false;
  _lastClearTimestamp = 0;
  static traitKey = "TimeDoRwdCombo";
  isGameTypeEnabled() {
    var e,
      t = null === (e = this._config) || void 0 === e ? void 0 : e.gameType;
    return !t || 0 === t.length || t.includes(this._gameType);
  }
  getStore(e) {
    this.localData && "object" == typeof this.localData || (this.localData = {});
    if (!this.localData.byGameType || "object" != typeof this.localData.byGameType) {
      this.localData.byGameType = {};
      this.localData = this.localData;
    }
    var t = this.localData.byGameType[e];
    if (!t || "object" != typeof t) {
      var a = {
        levelId: 0,
        hasDecided: false,
        enabled: false
      };
      this.localData.byGameType[e] = a;
      this.localData.byGameType = this.localData.byGameType;
      return a;
    }
    return t;
  }
  resetForLevel(e, t) {
    this._levelId = e;
    this._hasDecidedThisLevel = false;
    this._enabledThisLevel = false;
    this._lastClearTimestamp = Date.now();
    t.levelId = e;
    t.hasDecided = false;
    t.enabled = false;
    this.localData.byGameType = this.localData.byGameType;
  }
  onLoad() {
    var t, a, i, o, l, n, s, c, u, d, m, p;
    super.onLoad.call(this);
    this._config = {
      hardRate: null !== (a = null === (t = this._traitData) || void 0 === t ? void 0 : t.hardRate) && void 0 !== a ? a : 100,
      executeRate: null !== (o = null === (i = this._traitData) || void 0 === i ? void 0 : i.executeRate) && void 0 !== o ? o : 34,
      timeMax: null !== (n = null === (l = this._traitData) || void 0 === l ? void 0 : l.timeMax) && void 0 !== n ? n : 0,
      tileMax: null !== (c = null === (s = this._traitData) || void 0 === s ? void 0 : s.tileMax) && void 0 !== c ? c : 8,
      timeMin: null !== (d = null === (u = this._traitData) || void 0 === u ? void 0 : u.timeMin) && void 0 !== d ? d : 0,
      gameType: null !== (p = null === (m = this._traitData) || void 0 === m ? void 0 : m.gameType) && void 0 !== p ? p : [MjGameType.Normal]
    };
  }
  onInitViewBhv_crtTls(e, t) {
    var a, i, o;
    this._gameType = null !== (o = null === (i = null === (a = e.ins) || void 0 === a ? void 0 : a._context) || void 0 === i ? void 0 : i.gameType) && void 0 !== o ? o : MjGameType.None;
    this._levelId = 0;
    this._hasDecidedThisLevel = false;
    this._enabledThisLevel = false;
    this._lastClearTimestamp = Date.now();
    t();
  }
  onRwdComboChk_sTriNow(e, t) {
    var a,
      i,
      o,
      l,
      r,
      s,
      d,
      m,
      p,
      h,
      v = (null === (a = e.ins) || void 0 === a ? void 0 : a.context) || (null === (i = e.ins) || void 0 === i ? void 0 : i._context),
      y = null === (o = null == v ? void 0 : v.getGameData) || void 0 === o ? void 0 : o.call(v),
      T = null === (l = null == v ? void 0 : v.getTileMapObject) || void 0 === l ? void 0 : l.call(v);
    if (y && T) {
      if (this.isGameTypeEnabled()) {
        if (UserModel.getInstance().isGuideFinished()) {
          var f = null !== (s = null === (r = y.getLevelId) || void 0 === r ? void 0 : r.call(y)) && void 0 !== s ? s : 0;
          if (1 !== f) {
            if (null !== (d = y.getHasTriggeredFullCombo) && void 0 !== d && d.call(y)) t();else if (null !== (m = y.getHasTriggeredRewardCombo) && void 0 !== m && m.call(y)) t({
              isBreak: true,
              returnType: TraitCallbackReturnType.return,
              returnVal: true
            });else {
              var _ = this.getStore(this._gameType);
              if (_.levelId !== f) {
                this.resetForLevel(f, _);
              } else {
                this._levelId = f;
              }
              if (!this._hasDecidedThisLevel) if (_.levelId === f && _.hasDecided) {
                this._enabledThisLevel = _.enabled;
                this._hasDecidedThisLevel = true;
              } else {
                var b = ExtractTool.getInstance().isHardLevel(f) ? this._config.hardRate : this._config.executeRate,
                  g = Math.max(0, Math.min(100, Number(b) || 0)),
                  D = Math.floor(100 * Math.random());
                this._enabledThisLevel = D < g;
                this._hasDecidedThisLevel = true;
                _.levelId = f;
                _.hasDecided = true;
                _.enabled = this._enabledThisLevel;
                this.localData.byGameType = this.localData.byGameType;
              }
              if (this._enabledThisLevel) {
                var M = Date.now(),
                  x = this._lastClearTimestamp || M,
                  R = Math.max(0, (M - x) / 1000);
                this._lastClearTimestamp = M;
                var C,
                  w = null !== (h = null === (p = T.getCurTilesCnt) || void 0 === p ? void 0 : p.call(T)) && void 0 !== h ? h : 0,
                  G = Math.max(0, Number(this._config.timeMax) || 0),
                  j = Math.max(0, Math.floor(Number(this._config.tileMax) || 0));
                C = G > 0 ? R >= G && w > 0 && w <= j : this._config.timeMin > 0 ? R < this._config.timeMin && w > 0 && w <= j : w > 0 && w <= j;
                t({
                  isBreak: true,
                  returnType: TraitCallbackReturnType.return,
                  returnVal: C
                });
              } else t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: false
              });
            }
          } else t();
        } else t();
      } else t();
    } else t();
  }
}
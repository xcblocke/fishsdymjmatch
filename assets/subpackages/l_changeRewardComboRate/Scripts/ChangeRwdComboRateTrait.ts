import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
@mj.trait
@mj.class("ChangeRwdComboRateTrait")
export default class ChangeRwdComboRateTrait extends Trait {
  _gameType = MjGameType.Normal;
  _rate = 1;
  _failShown = false;
  static traitKey = "ChangeRwdComboRate";
  onLoad() {
    var e, o;
    super.onLoad.call(this);
    this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
    var a = Number(null !== (o = null === (e = this._traitData) || void 0 === e ? void 0 : e.rate) && void 0 !== o ? o : 1);
    this._rate = Number.isFinite(a) && a > 0 ? a : 1;
  }
  getMessageListeners() {
    var e = this;
    var _t = {};
    _t[EGameEvent.Fail_Auto] = function () {
      e.markFailShown();
    };
    return _t;
  }
  onInitViewBhv_crtTls(t, e) {
    var o,
      a,
      i = null === (a = null === (o = t.ins) || void 0 === o ? void 0 : o.context) || void 0 === a ? void 0 : a.gameType;
    this._gameType = i;
    this._failShown = false;
    e();
  }
  onIptSetLv_newGComp(t, e) {
    var o,
      a,
      i,
      n,
      r = t.ins,
      l = null !== (a = null === (o = null == r ? void 0 : r.gameContext) || void 0 === o ? void 0 : o.gameType) && void 0 !== a ? a : null === (n = null === (i = null == r ? void 0 : r.tileMapObject) || void 0 === i ? void 0 : i.gameContext) || void 0 === n ? void 0 : n.gameType;
    if (l) {
      this._gameType = l;
      this.ensureStore(l);
      if (this.localData.byGameType[l]) {
        this.localData.byGameType[l] = false;
        this.localData.byGameType = this.localData.byGameType;
      }
    }
    e();
  }
  onFailVw_show(t, e) {
    this.markFailShown();
    e();
  }
  onIptShuffle_exec(t, e) {
    var o,
      a,
      i,
      n = t.ins,
      r = null == n ? void 0 : n.gameContext;
    if (this.hasFailShown()) {
      null === (i = null === (a = null === (o = null == r ? void 0 : r.getGameData) || void 0 === o ? void 0 : o.call(r)) || void 0 === a ? void 0 : a.setCurLvCanTriRewardCombo) || void 0 === i || i.call(a, 0);
      this.markReviveShuffle(this._gameType);
      this._failShown = false;
    }
    e();
  }
  onRwdComboChk_getTrigRate(t, e) {
    var o, a, i, n, r;
    if (this.hasReviveShuffle(this._gameType)) {
      var l = Number(t.beforReturnVal);
      if (Number.isFinite(l)) {
        var s = Math.max(0, Math.min(1, l * this._rate)),
          c = 0;
        try {
          var u = t.ins,
            p = null == u ? void 0 : u.context;
          if (p) {
            var f = null === (o = p.getGameData) || void 0 === o ? void 0 : o.call(p),
              h = null === (a = p.getTileMapObject) || void 0 === a ? void 0 : a.call(p);
            if (f && h) {
              c = 2 * ((null === (i = f.getCurLevelComboMaxLimit) || void 0 === i ? void 0 : i.call(f)) || 0);
              null === (n = h.getCurTilesCnt) || void 0 === n || n.call(h);
              if (0 === ((null === (r = f.getRewardComboTriTileCnt) || void 0 === r ? void 0 : r.call(f)) || 0) && c > 0) {
                var y = u;
                "function" == typeof y.calculateTriTileCnt && y.calculateTriTileCnt(c);
              }
            }
          }
        } catch (t) {}
        e({
          isBreak: true,
          returnVal: s
        });
      } else e();
    } else e();
  }
  ensureStore(t) {
    this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
    if ("boolean" != typeof this.localData.byGameType[t]) {
      this.localData.byGameType[t] = false;
      this.localData.byGameType = this.localData.byGameType;
    }
  }
  hasReviveShuffle(t) {
    var e;
    if (!t) return false;
    this.ensureStore(t);
    return !!(null === (e = this.localData.byGameType) || void 0 === e ? void 0 : e[t]);
  }
  hasFailShown() {
    return !!this._failShown;
  }
  markReviveShuffle(t) {
    if (t) {
      this.ensureStore(t);
      if (!this.localData.byGameType[t]) {
        this.localData.byGameType[t] = true;
        this.localData.byGameType = this.localData.byGameType;
      }
    }
  }
  markFailShown() {
    this._failShown || (this._failShown = true);
  }
}
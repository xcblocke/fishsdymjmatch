import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
@mj.trait
@mj.class("ChangeAllClearTrait")
export default class ChangeAllClearTrait extends Trait {
  static traitKey = "ChangeAllClear";
  onLoad() {
    var e = this;
    super.onLoad.call(this);
    Promise.resolve().then(function () {
      e.registerEvent([{
        event: "AllClearTt_minTiles"
      }]);
    });
  }
  onIptT2SetLv_reGenFaces(t, e) {
    this.localData.watchedAdThisGame = false;
    this.localData = this.localData;
    e();
  }
  onAdMgr_videoSuccess(t, e) {
    this.localData.watchedAdThisGame = true;
    this.localData = this.localData;
    e();
  }
  onAllClrChk_canTrig(t, e) {
    var r,
      o = null === (r = t.ins) || void 0 === r ? void 0 : r.context;
    if (o) {
      var i = this._checkTagConditions(o);
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: i
      });
    } else e();
  }
  onAllClearTt_minTiles(t, e) {
    var r,
      o,
      i,
      n = null !== (i = null === (o = (null !== (r = this._traitData) && void 0 !== r ? r : {}).cards) || void 0 === o ? void 0 : o[0]) && void 0 !== i ? i : 6;
    e({
      returnType: TraitCallbackReturnType.jump,
      isBreak: true,
      returnVal: n
    });
  }
  _checkTagConditions(t) {
    var e,
      r,
      o,
      i,
      n,
      l,
      a,
      u,
      c,
      d,
      p,
      v,
      f = null === (e = t.getTileMapObject) || void 0 === e ? void 0 : e.call(t),
      h = null === (r = t.getGameData) || void 0 === r ? void 0 : r.call(t);
    if (!f || !h) return false;
    if (h.getHasBrokenCombo()) return false;
    var y = null !== (o = this._traitData) && void 0 !== o ? o : {},
      T = null !== (n = null === (i = y.cards) || void 0 === i ? void 0 : i[0]) && void 0 !== n ? n : 6,
      _ = null !== (a = null === (l = y.cards) || void 0 === l ? void 0 : l[1]) && void 0 !== a ? a : 10;
    if ((null !== (u = h.slotBarIds) && void 0 !== u ? u : []).length > 0) return false;
    var g = null !== (d = null === (c = f.getCurTilesCnt) || void 0 === c ? void 0 : c.call(f)) && void 0 !== d ? d : 0;
    return !(g > _ || g < T) && !!this._isSingleLayer(f) && (1 == y.spCards && !f.isBoardTileHasType(ETileType.RankCard) && !f.isBoardTileHasType(ETileType.RollCard) || !(1 != y.useProps || !this._hasUsedTool(h)) || !(1 != y.ads || !this._hasWatchedRewardAd()) || y.rates > 0 && this._getLevelProgress(h) >= y.rates || y.replayCnt > 0 && (null === (v = (p = h).getReplayCount) || void 0 === v ? void 0 : v.call(p)) >= y.replayCnt);
  }
  _isSingleLayer(t) {
    var e,
      r,
      o,
      i,
      n = null !== (i = null === (o = t.getEachLayerTileCount) || void 0 === o ? void 0 : o.call(t)) && void 0 !== i ? i : [],
      a = 0;
    try {
      for (var u = __values(n), s = u.next(); !s.done; s = u.next()) s.value > 0 && a++;
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        s && !s.done && (r = u.return) && r.call(u);
      } finally {
        if (e) throw e.error;
      }
    }
    return a <= 1;
  }
  _hasUsedTool(t) {
    var e, r, o;
    return (null === (e = t.getUsedShuffle) || void 0 === e ? void 0 : e.call(t)) > 0 || (null === (r = t.getUsedHitTips) || void 0 === r ? void 0 : r.call(t)) > 0 || (null === (o = t.getUsedRevert) || void 0 === o ? void 0 : o.call(t)) > 0;
  }
  _hasWatchedRewardAd() {
    return true === this.localData.watchedAdThisGame;
  }
  _getLevelProgress(t) {
    var e,
      r,
      o,
      i,
      n = null !== (r = null === (e = t.getTotalTileCount) || void 0 === e ? void 0 : e.call(t)) && void 0 !== r ? r : 0;
    return n <= 0 ? 0 : (null !== (i = null === (o = t.getClearTileCount) || void 0 === o ? void 0 : o.call(t)) && void 0 !== i ? i : 0) / n * 100;
  }
}
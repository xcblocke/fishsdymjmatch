import { EInsertType } from './constant/BehaviorsEnum';
import { EGameInputEnum } from './simulator/constant/GameInputEnum';
import { ETileType } from './simulator/constant/TileTypeEnum';
import { BlockInputEffect } from './BlockInputEffect';
import { BlockInputRefEffect } from './BlockInputRefEffect';
import { BombEffect } from './BombEffect';
import { ClearEffectEffect } from './ClearEffectEffect';
import { CollectFlyEffect } from './CollectFlyEffect';
import { DaxiaoClearEffectEffect } from './DaxiaoClearEffectEffect';
import { DaxiaoClearTipEffect } from './DaxiaoClearTipEffect';
import { DuoxiaoComboEffect } from './DuoxiaoComboEffect';
import { EmptyEffect } from './EmptyEffect';
import { FailEffect } from './FailEffect';
import { GoalAchieveEffect } from './GoalAchieveEffect';
import { HitTipsEffect } from './HitTipsEffect';
import { TravelEndEffect } from './TravelEndEffect';
import { UpdateCollectTargetEffect } from './UpdateCollectTargetEffect';
import { UpdateMatchNumEffect } from './UpdateMatchNumEffect';
import { YogaCardEffect } from './YogaCardEffect';
import { BehaviorsMapping } from './mapping/BehaviorsMapping';
export default class ClearTravelHelper {
  static _gameContext = null;
  static _input = null;
  static _baseInput = null;
  static _options = null;
  static modifyClear() {
    return this._gameContext.clearModifier.modifyClear(this._input);
  }
  static modifyTileTypesClear() {
    return this._gameContext.clearModifier.modifyTileTypesClear(this._input);
  }
  static getCollectDetails(e) {
    var t = this._gameContext.getTileMapObject(),
      o = [];
    e.forEach(function (e) {
      var n,
        i = t.getTileObject(e),
        r = null === (n = null == t ? void 0 : t.collectSystem) || void 0 === n ? void 0 : n.getCollectDetailByCardId(i.type, i.cardId);
      r && o.push(r);
    });
    return o;
  }
  static updateCanMatchTiles() {
    this._gameContext.getTileMapObject().updateCanMatchTiles();
  }
  static modifyClearHitTips(e) {
    return this._gameContext.gameModifier.modifyClearHitTips(e[0], e[1]);
  }
  static getDaxiaoCardMathInfos(e) {
    var t = this._gameContext.daxiaoChecker.getCanClearDaxiaoCardInfos(e);
    if (t && t.length > 0) return t;
  }
  static parseDaxiao(e) {
    this._gameContext.daxiaoModifier.modifyDaxiaoCard(this._input, e);
    return {
      combo: e.length
    };
  }
  static runClear(e, t, o) {
    this._gameContext = e;
    this._input = t;
    this._baseInput = o;
    var n = this.modifyClear(),
      r = this.getDaxiaoCardMathInfos(n);
    r && this.parseDaxiao(r);
    var a = this.modifyTileTypesClear(),
      l = __read(this.modifyClearHitTips(n), 2),
      s = l[0],
      c = l[1],
      u = this._gameContext.getGameData().isAutoMerging();
    this.updateCanMatchTiles();
    var p = false;
    u || (p = this._gameContext.duoxiaoChecker.canShowDuoxiaoCombo(n)) && this.parseDuoxiaoCard(n);
    this._options = {
      input: t,
      tileIds: n,
      specialClearResult: a,
      clearHit: s,
      hideHitIds: c,
      isShowDuoxiaoCombo: p,
      isAutoMerging: u,
      daxiaoCardMatchInfos: r
    };
    this.pushClearEffects();
  }
  static pushDaxiaoClearEffectEffect() {
    var e = new EmptyEffect({
        inputType: this._input.inputType,
        name: "Empty"
      }),
      t = this._baseInput.pushEffect(e, EInsertType.Serial, this._options.clearEffectOptions.newEffectId, false);
    this.pushClearEffectEffect(t.newEffectId);
    var o = new DaxiaoClearEffectEffect({
      tileIds: this._options.tileIds,
      finalMatchInfos: this._options.daxiaoCardMatchInfos
    });
    return this._baseInput.pushEffect(o, EInsertType.Parallel, t.newEffectId, false);
  }
  static pushEmptyEffect() {
    var e = new EmptyEffect({
      inputType: this._input.inputType,
      name: "Empty"
    });
    return this._baseInput.pushEffect(e, EInsertType.Root);
  }
  static parseDuoxiaoCard(e) {
    var t = this._gameContext.duoxiaoChecker.getCanClearDuoxiaoCardInfos(e);
    if (!t) return false;
    this._gameContext.duoxiaoModifier.modifyDuoxiaoClearCount(t.count);
    return true;
  }
  static pushDaxiaoClearTipEffect() {
    var e = new DaxiaoClearTipEffect({
      tileIds: this._options.tileIds,
      finalMatchInfos: this._options.daxiaoCardMatchInfos
    });
    return this._baseInput.pushEffectWithNodeByName(BehaviorsMapping.Clear, e, EInsertType.Parallel);
  }
  static pushClearEffects() {
    this.tryPushClearHitTipsEffect();
    var e = this._baseInput.pushClearEffect(this._options.tileIds[0], this._options.tileIds[1], false, false);
    this._options.clearEffectOptions = e;
    this._options.daxiaoCardMatchInfos && this.pushDaxiaoClearEffectEffect();
    this._options.isShowDuoxiaoCombo && this.pushBlockInputRefEffect(true, "duoxiaoComboStart");
    var t = new Map();
    t.set("clearEffectOptions", e);
    var o = this.pushAfterClearEffect(t);
    this._options.afterClearEffectOptions = o;
    var n = null;
    this._options.daxiaoCardMatchInfos || (n = this.pushClearEffectEffect());
    this._options.daxiaoCardMatchInfos && this.pushDaxiaoClearTipEffect();
    if (!this._options.isAutoMerging) {
      var i,
        r = this.tryPushCollectSpecialCardEffect(t);
      i = r ? this.pushUpdateSpecialCollectTargetEffect(r) : this.pushUpdateNormalCollectTargetEffect(n);
      this.tryExcuteDuoxiaoCombo();
      this.tryExcuteEnd(i);
    }
    this.pushClearBehaviorFinishEffect();
  }
  static tryExcuteDuoxiaoCombo() {
    if (this._options.isShowDuoxiaoCombo) {
      var e;
      if (this._gameContext.resultChecker.checkIsEndOrDead()) this._gameContext.duoxiaoModifier.resetDuoxiaoClearCount();else {
        var t = new DuoxiaoComboEffect({
          duoxiaoCount: this._gameContext.getDuoxiaoClearCount()
        });
        e = this._baseInput.pushEffect(t, EInsertType.Parallel);
      }
      this.pushBlockInputRefEffect(false, "duoxiaoComboEnd");
      return e;
    }
  }
  static tryPushCollectSpecialCardEffect(e) {
    if (this._options.specialClearResult) {
      var t = this._options.specialClearResult.yogaCardIds;
      return t.length > 0 ? this.pushYogaCardEffect(e, t) : void 0;
    }
  }
  static pushYogaCardEffect(e, t) {
    var o = new YogaCardEffect({
        tileIds: t
      }),
      n = e.get("clearEffectOptions");
    return this._baseInput.pushEffect(o, EInsertType.Parallel, n.lastEffectId, false);
  }
  static pushUpdateSpecialCollectTargetEffect(e) {
    var t = this._options.specialClearResult.yogaCardIds,
      o = this.getCollectDetails(t);
    if (o.length > 0) return this.pushUpdateCollectTargetEffect(o, e);
  }
  @mj.traitEvent("ClrTravelHlp_collTagEff")
  static pushUpdateCollectTargetEffect(e, t) {
    var o = new UpdateCollectTargetEffect({
      collectDetails: e
    });
    return this._baseInput.pushEffect(o, EInsertType.Serial, t.newEffectId, false);
  }
  static pushCollectFlyEffect(e, t) {
    var o, n;
    if (0 === e.length) return t;
    var i = this._gameContext.getTileMapObject(),
      l = null;
    try {
      for (var c = __values(e), u = c.next(); !u.done; u = c.next()) {
        var p = u.value,
          f = i.getTileObject(p);
        if (f && f.type === ETileType.RollCard) {
          l = p;
          break;
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (n = c.return) && n.call(c);
      } finally {
        if (o) throw o.error;
      }
    }
    l || (l = e[0]);
    var h = i.getTileObject(l);
    if (!h) return t;
    var y = h.type === ETileType.RollCard ? "" + h.type : h.type + "_" + h.cardId,
      m = new CollectFlyEffect({
        collectKey: y,
        tileType: h.type
      });
    return this._baseInput.pushEffect(m, EInsertType.Parallel);
  }
  static pushUpdateNormalCollectTargetEffect(e) {
    var t = this.getCollectDetails(this._options.tileIds);
    if (t.length > 0) {
      var o = this.pushCollectFlyEffect(this._options.tileIds, e);
      return this.pushUpdateCollectTargetEffect(t, o);
    }
  }
  static tryPushClearHitTipsEffect() {
    if (this._options.clearHit && this._options.hideHitIds && this._options.hideHitIds.length > 0) return this.pushClearHitTipsEffect(this._options.hideHitIds);
  }
  static pushClearHitTipsEffect(e) {
    var t = new HitTipsEffect({
      isClearHit: true,
      tileId1: e[0] || "",
      tileId2: e[1] || ""
    });
    return this._baseInput.pushEffect(t, EInsertType.Parallel);
  }
  static pushAfterClearEffect(e) {
    var t = this._options.tileIds[0],
      o = this._options.tileIds[1],
      n = new EmptyEffect({
        inputType: EGameInputEnum.TouchStart,
        name: "touchStart"
      }),
      i = e.get("clearEffectOptions"),
      r = this._baseInput.pushEffect(n, EInsertType.Serial, i.newEffectId),
      s = {
        lastEffectId: r.lastEffectId,
        newEffectId: r.newEffectId,
        tileId: t,
        lastTileId: o,
        options: this._options
      };
    this._baseInput.dispatchClearAfterEvent(s);
    return r;
  }
  static pushClearEffectEffect(e) {
    var t = this._options.tileIds[0],
      o = this._options.tileIds[1],
      n = new ClearEffectEffect({
        tileId: t,
        lastTileId: o
      });
    return e ? this._baseInput.pushEffect(n, EInsertType.Parallel, e, false) : this._baseInput.pushEffect(n, EInsertType.Parallel);
  }
  static parseBombCard() {
    var e = this,
      t = null,
      o = function o(n) {
        var i = e._gameContext.tileTypeChecker.parseBombCard(n);
        if (i) {
          t || (t = e._baseInput.pushParallerEffect().newEffectId);
          e._gameContext.tileTypesModifier.modifyBombCard_travel(e._input, i.bombIds);
          var r = new BombEffect({
              pos1: i.pos1,
              pos2: i.pos2,
              bombIds: i.bombIds
            }),
            l = e._baseInput.pushEffect(r, EInsertType.Serial, t, false).newEffectId,
            s = new EmptyEffect({
              inputType: e._input.inputType,
              name: "BombParallelGroup"
            }),
            c = e._baseInput.pushEffect(s, EInsertType.Serial, l, false).newEffectId;
          e._options.insertEndEffectId = c;
          e._options.insertEndEffectType = EInsertType.Serial;
          o(i.bombIds);
        }
      };
    o(this._options.tileIds);
    this._gameContext.getTileMapObject().updateCanMatchTiles();
  }
  static pushUpdateMatchNumEffect() {
    var e = new UpdateMatchNumEffect({
      canMatchCardPairNum: this._gameContext.getTileMapObject().getCanMatchCardPairNum()
    });
    return this._baseInput.pushEffect(e, EInsertType.Parallel);
  }
  static tryExcuteEnd(e) {
    if (this._gameContext.resultChecker.checkResult()) {
      var t = this._gameContext.gameTimeData.time;
      this._gameContext.getGameData().updateAvgClearIntervals();
      this._gameContext.gameModifier.modifyWinForTravel(t);
      this.pushBlockInputEffect();
      return this.pushGoalAchieveEffect(e);
    }
    this.shouldCheckFail() && this.tryExcuteFail();
  }
  static pushBlockInputEffect() {
    var e = new BlockInputEffect({
      block: true
    });
    this._baseInput.pushEffect(e, EInsertType.Parallel);
  }
  static pushGoalAchieveEffect(e) {
    this._gameContext.getGameData().setAutoMerging(true);
    var t = new GoalAchieveEffect({});
    return e && e.newEffectId ? this._baseInput.pushEffect(t, EInsertType.Serial, e.newEffectId, false) : this._baseInput.pushEffect(t, EInsertType.Root);
  }
  static pushEndEffect() {
    var e,
      t,
      o,
      n = null !== (o = null === (t = null === (e = this._gameContext.getTileMapObject()) || void 0 === e ? void 0 : e.collectSystem) || void 0 === t ? void 0 : t.getAllCollectDetails()) && void 0 !== o ? o : [],
      i = new TravelEndEffect({
        curLv: this._gameContext.getGameData().getLevelId(),
        collects: n
      });
    return this._options.insertEndEffectId ? this._baseInput.pushEffect(i, this._options.insertEndEffectType, this._options.insertEndEffectId, false) : this._baseInput.pushEffect(i, EInsertType.Root);
  }
  @mj.traitEvent("ClrTravelHlp_shldChkFail")
  static shouldCheckFail() {
    return true;
  }
  @mj.traitEvent("ClrTravelHlp_tryExcFail")
  static tryExcuteFail() {
    var e = this._options.tileIds || [];
    if (this._gameContext.getTileMapObject().checkIsDead(e)) return this.pushFailEffect();
  }
  @mj.traitEvent("ClrTravelHlp_getPreShf")
  static getPreShuffleData() {
    return null;
  }
  static pushFailEffect() {
    var e = this._gameContext.getGameData(),
      t = new FailEffect({
        shuffleNum: e.getShuffleNums(),
        preShuffleData: this.getPreShuffleData()
      });
    return this._baseInput.pushEffect(t, EInsertType.Root);
  }
  static pushClearBehaviorFinishEffect() {
    var e = new EmptyEffect({
      inputType: this._input.inputType,
      name: "ClearBehaviorFinish"
    });
    return this._baseInput.pushEffect(e, EInsertType.Root);
  }
  static pushBlockInputRefEffect(e, t) {
    var o = new BlockInputRefEffect({
      block: e,
      from: t
    });
    this._baseInput.pushEffect(o, EInsertType.Parallel);
  }
}
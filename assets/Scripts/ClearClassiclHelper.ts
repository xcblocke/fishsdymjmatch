import { DDebugInfo } from './gamePlay/dot/DDebugInfo';
import LoginModel from './gamePlay/login/model/LoginModel';
import { EInsertType } from './constant/BehaviorsEnum';
import { EGameInputEnum } from './simulator/constant/GameInputEnum';
import { BeforeEndEffect } from './BeforeEndEffect';
import { BlockInputRefEffect } from './BlockInputRefEffect';
import { BlockInputRefWithParamEffect } from './BlockInputRefWithParamEffect';
import { BombEffect } from './BombEffect';
import { ChangeBatchAnimEffect } from './ChangeBatchAnimEffect';
import { ClassicBeforeFailEffect } from './ClassicBeforeFailEffect';
import { ClassicFailEffect } from './ClassicFailEffect';
import { ClassicReviveEffect } from './ClassicReviveEffect';
import { ClearEffectEffect } from './ClearEffectEffect';
import { ComboEffect } from './ComboEffect';
import { DaxiaoClearEffectEffect } from './DaxiaoClearEffectEffect';
import { DaxiaoClearTipEffect } from './DaxiaoClearTipEffect';
import { DuoxiaoComboEffect } from './DuoxiaoComboEffect';
import { EmptyEffect } from './EmptyEffect';
import { EndEffect } from './EndEffect';
import { FullComboEffect } from './FullComboEffect';
import { HitTipsEffect } from './HitTipsEffect';
import { MotivationalWordsEffect } from './MotivationalWordsEffect';
import { MotivationalWordsEffectEffect } from './MotivationalWordsEffectEffect';
import { PushBatchInfoEffect } from './PushBatchInfoEffect';
import { RewardComboEffect } from './RewardComboEffect';
import { ScoreFlotEffect } from './ScoreFlotEffect';
import { UpdateMatchNumEffect } from './UpdateMatchNumEffect';
import { UpdateScoreEffect } from './UpdateScoreEffect';
export default class ClearClassiclHelper {
  static _gameContext = null;
  static _input = null;
  static _baseInput = null;
  static _options = null;
  static modifyClear() {
    return this._gameContext.clearModifier.modifyClear(this._input);
  }
  static updateCanMatchTiles() {
    this._gameContext.getTileMapObject().updateCanMatchTiles();
  }
  static addCombo(e = 1) {
    this._gameContext.comboModifier.addCombo(e);
  }
  static calAddScore() {
    var e = this.getBreakBestState();
    return {
      addScore: this._gameContext.scoreModifier.calAddScoreClassic(),
      breakBestState: this.getBreakBestState().map(function (t, o) {
        return 1 == t && 0 == e[o];
      })
    };
  }
  static getBreakBestState() {
    var e = this._gameContext.getGameData();
    return [e.isBreakBest(), e.isBreakWeek(), e.isBreakToday()];
  }
  static modifyClearHitTips(e) {
    return this._gameContext.gameModifier.modifyClearHitTips(e[0], e[1]);
  }
  static canShowCombo() {
    return this._gameContext.comboChecker.canShowCombo();
  }
  static getComboNum() {
    return this._gameContext.getGameData().getComboNum();
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
    if (r) {
      var a = this.parseDaxiao(r).combo;
      this.addCombo(a);
    }
    this.updateCanMatchTiles();
    this.addCombo(1);
    var l = this.calAddScore(),
      c = l.addScore,
      u = l.breakBestState,
      p = __read(this.modifyClearHitTips(n), 2),
      f = p[0],
      d = p[1],
      h = this.canShowCombo(),
      y = this.getComboNum(),
      m = false,
      v = 0,
      g = false,
      _ = false,
      T = false;
    if (t.inputType === EGameInputEnum.AutoMerge) {
      m = false;
      g = this._gameContext.getGameData().getHasTriggeredFullCombo();
      _ = this._gameContext.getGameData().getHasTriggeredRewardCombo();
    } else {
      var C = this._gameContext.motivationalWordsChecker.canShowMotivationalWords();
      m = C.isShow;
      v = C.index;
      (T = this._gameContext.duoxiaoChecker.canShowDuoxiaoCombo(n)) && this.parseDuoxiaoCard(n);
    }
    this._options = {
      input: t,
      tileIds: n,
      addScore: c,
      breakBestState: u,
      showCombo: h,
      comboNum: y,
      isShowMotivationalWords: m,
      indexMotivationalWords: v,
      isShowFullCombo: g,
      isShowRewardCombo: _,
      isShowDuoxiaoCombo: T,
      clearHit: f,
      hideHitIds: d,
      daxiaoCardMatchInfos: r
    };
    var b = this.pushBlockInputRefEffectRoot(true, "clearClassiclStart");
    this.pushClearEffects();
    var E = this.pushBlockInputRefEffectRoot(false, "clearClassiclEnd"),
      S = this.checkNeedBlockInput(b, E);
    b.data.isValid = S;
    E.data.isValid = S;
  }
  static checkNeedBlockInput() {
    return this._options.isGetNextBatchInfo ? 1 : 0;
  }
  static pushDaxiaoClearEffectEffect(e) {
    var t = new DaxiaoClearEffectEffect({
      tileIds: this._options.tileIds,
      finalMatchInfos: e
    });
    return this._baseInput.pushEffect(t, EInsertType.Root);
  }
  static pushEmptyEffect() {
    var e = new EmptyEffect({
      inputType: this._input.inputType,
      name: "Empty"
    });
    return this._baseInput.pushEffect(e, EInsertType.Root);
  }
  static pushDaxiaoClearTipEffect() {
    var e = new DaxiaoClearTipEffect({
      tileIds: this._options.tileIds,
      finalMatchInfos: this._options.daxiaoCardMatchInfos
    });
    return this._baseInput.pushEffect(e, EInsertType.Parallel);
  }
  static parseDuoxiaoCard(e) {
    var t = this._gameContext.duoxiaoChecker.getCanClearDuoxiaoCardInfos(e);
    if (!t) return false;
    this._gameContext.duoxiaoModifier.modifyDuoxiaoClearCount(t.count);
    return true;
  }
  static pushClearEffects() {
    this.tryPushClearHitTipsEffect();
    var e = this._baseInput.pushClearEffect(this._options.tileIds[0], this._options.tileIds[1], this._options.isShowRewardCombo, this._options.isShowFullCombo);
    this._options.daxiaoCardMatchInfos && this.pushDaxiaoClearTipEffect();
    this._options.clearEffectOptions = e;
    this._options.isShowDuoxiaoCombo && this.pushBlockInputRefEffect(true, "duoxiaoComboStart");
    if (this._options.daxiaoCardMatchInfos) {
      this.pushDaxiaoClearEffectEffect(this._options.daxiaoCardMatchInfos);
      this.pushClearEffectEffect();
      this.pushEmptyEffect();
    }
    this.pushAfterClearEffect();
    this._options.daxiaoCardMatchInfos || this.pushClearEffectEffect();
    this.tryGetNextBatchInfoPre(EInsertType.Parallel);
    this.parseBombCard();
    this.pushUpdateMatchNumEffect(), this.tryShowMotivationalWords();
    this.pushScoreFlotEffect();
    this.pushBreakBestEffect();
    this.tryExcuteShowCombo();
    this.tryExcuteRewardCombo();
    this.tryExcuteFullCombo();
    this.tryExcuteDuoxiaoCombo();
    this.tryExcuteEnd();
    this.pushClearBehaviorFinishEffect();
  }
  @mj.traitEvent("ClrClsHlp_pushBreakBest")
  static pushBreakBestEffect() {}
  static tryGetNextBatchInfoPre(e = EInsertType.Root) {
    if (this._gameContext.classicLevelChecker.getNeedInitNextLevel(this._options.tileIds)) {
      this._gameContext.getOpenGenerateState() || (this._options.isGetNextBatchInfo = true);
      this.pushPushBatchInfoEffectPre(e);
      this.pushChangeBatchAnimEffectPre();
    }
  }
  static pushPushBatchInfoEffectPre(e = EInsertType.Root) {
    var t = new PushBatchInfoEffect({
      isOpenGenerateState: this._gameContext.getOpenGenerateState()
    });
    this._baseInput.pushEffect(t, e);
  }
  static pushChangeBatchAnimEffectPre() {
    var e = this._gameContext.getGameData().getNextBatchId(),
      t = new ChangeBatchAnimEffect({
        batchId: e,
        isOpenGenerateState: this._gameContext.getOpenGenerateState()
      });
    this._baseInput.pushEffect(t, EInsertType.Parallel);
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
  static pushAfterClearEffect() {
    var e = this._options.tileIds[0],
      t = this._options.tileIds[1],
      o = new EmptyEffect({
        inputType: EGameInputEnum.TouchStart,
        name: "touchStart"
      }),
      n = this._baseInput.pushEffect(o, EInsertType.Root),
      i = {
        lastEffectId: n.lastEffectId,
        newEffectId: n.newEffectId,
        tileId: e,
        lastTileId: t,
        options: this._options
      };
    this._baseInput.dispatchClearAfterEvent(i);
    return n;
  }
  static pushClearEffectEffect() {
    var e = this._options.tileIds[0],
      t = this._options.tileIds[1],
      o = new ClearEffectEffect({
        tileId: e,
        lastTileId: t
      });
    return this._baseInput.pushEffect(o, EInsertType.Parallel);
  }
  static parseBombCard() {
    var e = this,
      t = null,
      o = function o(n) {
        var i = e._gameContext.tileTypeChecker.parseBombCard(n);
        if (i) {
          t || (t = e._baseInput.pushParallerEffect().newEffectId);
          var r = e.getDaxiaoCardMathInfos(i.bombIds);
          if (r) {
            var a = e.parseDaxiao(r).combo;
            e.addCombo(a);
          }
          var s = e._gameContext.tileTypesModifier.modifyBombCard(e._input, i.bombIds),
            c = s.addScore,
            p = s.combo,
            d = s.showCombo,
            h = new BombEffect({
              pos1: i.pos1,
              pos2: i.pos2,
              bombIds: i.bombIds
            }),
            y = e._baseInput.pushEffect(h, EInsertType.Serial, t, false).newEffectId;
          if (r) {
            var m = new DaxiaoClearTipEffect({
              tileIds: e._options.tileIds,
              finalMatchInfos: r
            });
            e._baseInput.pushEffect(m, EInsertType.Serial, y, false);
            var v = new DaxiaoClearEffectEffect({
              tileIds: e._options.tileIds,
              finalMatchInfos: r
            });
            e._baseInput.pushEffect(v, EInsertType.Serial, y, false);
          }
          var E = e._gameContext.duoxiaoChecker.isHasDuoxiaoCard(i.bombIds),
            S = e._gameContext.duoxiaoChecker.isInDuoxiaoCombo();
          if (E) {
            e.parseDuoxiaoCard(i.bombIds);
            if (!S) {
              var I = new BlockInputRefEffect({
                block: true,
                from: "bombDuoxiao"
              });
              e._baseInput.pushEffect(I, EInsertType.Serial, y, false);
            }
          }
          var w = new EmptyEffect({
              inputType: e._input.inputType,
              name: "BombParallelGroup"
            }),
            B = e._baseInput.pushEffect(w, EInsertType.Serial, y, false).newEffectId,
            x = new ScoreFlotEffect({
              tileId: i.bombIds[0],
              lastTileId: i.bombIds[1],
              isCombo: d,
              addScore: c,
              size: e._gameContext.getTileMapObject().getTileObject(i.bombIds[0]).getContentSize()
            }),
            M = e._baseInput.pushEffect(x, EInsertType.Parallel, B).newEffectId,
            D = e._gameContext.getGameData(),
            A = new UpdateScoreEffect({
              addScore: c,
              targetScore: D.getScore(),
              isShowCombo: d
            });
          e._baseInput.pushEffect(A, EInsertType.Serial, M, false);
          if (d) {
            var R = new ComboEffect({
              comboNum: p
            });
            e._baseInput.pushEffect(R, EInsertType.Parallel, B);
          }
          e.checkBombMotivWords(i.bombIds, B);
          if (E && !S) {
            if (e._gameContext.resultChecker.checkIsEndOrDead()) e._gameContext.duoxiaoModifier.resetDuoxiaoClearCount();else {
              var N = new DuoxiaoComboEffect({
                duoxiaoCount: e._gameContext.getDuoxiaoClearCount()
              });
              e._baseInput.pushEffect(N, EInsertType.Serial, y, false);
            }
            I = new BlockInputRefEffect({
              block: false,
              from: "bombDuoxiaoComboEnd"
            });
            e._baseInput.pushEffect(I, EInsertType.Serial, y, false);
          }
          e._options.insertEndEffectId = B;
          e._options.insertEndEffectType = EInsertType.Serial;
          o(i.bombIds);
        }
      };
    o(this._options.tileIds);
    this._gameContext.getTileMapObject().updateCanMatchTiles();
  }
  static checkBombMotivWords() {}
  static pushUpdateMatchNumEffect() {
    var e = new UpdateMatchNumEffect({
      canMatchCardPairNum: this._gameContext.getTileMapObject().getCanMatchCardPairNum()
    });
    return this._baseInput.pushEffect(e, EInsertType.Parallel);
  }
  static pushMotivationalWordsEffect(e, t, o, n) {
    var i = new MotivationalWordsEffect({
      index: e,
      comboNum: t,
      tileId1: o,
      tileId2: n
    });
    return this._baseInput.pushEffect(i, EInsertType.Parallel);
  }
  static pushMotivationalWordsEffectEffect(e) {
    var t = new MotivationalWordsEffectEffect({
      index: e
    });
    return this._baseInput.pushEffect(t, EInsertType.Parallel);
  }
  static tryShowMotivationalWords() {
    if (this._options.isShowMotivationalWords) {
      this.pushMotivationalWordsEffect(this._options.indexMotivationalWords, this._gameContext.getGameData().getComboNum(), this._options.tileIds[1], this._options.tileIds[0]);
      return this.pushMotivationalWordsEffectEffect(this._options.indexMotivationalWords);
    }
  }
  static pushScoreFlotEffect() {
    var e = this._options.tileIds[0],
      t = this._options.tileIds[1],
      o = this._options.showCombo,
      n = this._options.addScore,
      i = new ScoreFlotEffect({
        tileId: e,
        lastTileId: t,
        isCombo: o,
        addScore: n,
        size: this._gameContext.getTileMapObject().getTileObject(e).getContentSize()
      }),
      r = this._baseInput.pushEffect(i, EInsertType.Parallel),
      a = (r.lastEffectId, r.newEffectId),
      s = this._gameContext.getGameData(),
      c = new UpdateScoreEffect({
        addScore: n,
        targetScore: s.getScore(),
        isShowCombo: o
      });
    return this._baseInput.pushEffect(c, EInsertType.Serial, a, false);
  }
  static tryExcuteShowCombo() {
    this._options.showCombo && this.pushComboEffect(this._options.comboNum);
  }
  static pushComboEffect(e) {
    var t = new ComboEffect({
      comboNum: e
    });
    return this._baseInput.pushEffect(t, EInsertType.Parallel);
  }
  static tryExcuteRewardCombo() {
    if (this._options.isShowRewardCombo) {
      var e = this._gameContext.getGameData();
      if (!e.getHasTriggeredRewardCombo()) {
        e.setHasTriggeredRewardCombo(true);
        return this.pushRewardComboEffect();
      }
    }
  }
  static pushRewardComboEffect() {
    var e = new RewardComboEffect({});
    return this._baseInput.pushEffect(e, EInsertType.Parallel);
  }
  static tryExcuteFullCombo() {
    if (this._options.isShowFullCombo && !this._options.isShowRewardCombo) {
      var e = this._gameContext.getGameData();
      if (!e.getHasTriggeredFullCombo()) {
        e.setHasTriggeredFullCombo(true);
        return this.pushFullComboEffect();
      }
    }
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
  static pushFullComboEffect() {
    var e = new FullComboEffect({});
    return this._baseInput.pushEffect(e, EInsertType.Parallel);
  }
  static tryExcuteEnd() {
    if (this._gameContext.resultChecker.checkResult()) {
      this._gameContext.gameTimeData.time;
      this._gameContext.getGameData().updateAvgClearIntervals();
    } else this._options.isShowFullCombo || this._options.isShowRewardCombo || this.tryExcuteFail();
  }
  static pushDefaultLevelEffect() {
    this._gameContext.gameSimulator.input({
      inputType: EGameInputEnum.AddLevelClassic,
      levelData: {
        levelStr: this._gameContext.getGameData().getOriginalLevelData()
      }
    });
    var e = (LoginModel.getInstance().version || "") + " || " + (LoginModel.getInstance().isOnline() ? "线上" : "本地") + " || 保底推关卡 批次ID:" + this._gameContext.classicLevelModifier.getCurrentBatchId();
    DDebugInfo.dot(e);
  }
  static pushBeforeEndEffect() {
    var e = new BeforeEndEffect({});
    return this._options.insertEndEffectId ? this._baseInput.pushEffect(e, this._options.insertEndEffectType, this._options.insertEndEffectId, false) : this._baseInput.pushEffect(e, EInsertType.Parallel);
  }
  static pushEndEffect(e) {
    var t = new EndEffect({
      score: this._gameContext.getGameData().getScore(),
      settlementScore: this._gameContext.getGameData().getSettlementScore(),
      perfectMaxScore: this._gameContext.scoreModifier.getPerfectMaxScore(),
      curLv: this._gameContext.getGameData().getLevelId()
    });
    return this._baseInput.pushEffect(t, EInsertType.Serial, e.newEffectId, false);
  }
  static tryExcuteFail() {
    var e = this._options.tileIds || [];
    if (this._gameContext.getTileMapObject().checkIsDead(e)) {
      if (this._gameContext.classicReviveChecker.canRevive()) return this.pushReviveEffect();
      this._gameContext.gameModifier.modifyClassicEnd();
      this.pushClassicBeforeFailEffect();
      return this.pushFailEffect();
    }
  }
  static pushClassicBeforeFailEffect() {
    var e = new ClassicBeforeFailEffect({});
    this._baseInput.pushEffect(e, EInsertType.Root);
  }
  static pushFailEffect() {
    var e = new ClassicFailEffect({});
    return this._baseInput.pushEffect(e, EInsertType.Root);
  }
  static pushReviveEffect() {
    this._gameContext.getGameData();
    var e = new ClassicReviveEffect({});
    return this._baseInput.pushEffect(e, EInsertType.Root);
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
  static pushBlockInputRefEffectRoot(e, t) {
    var o = new BlockInputRefWithParamEffect({
      block: e,
      from: t,
      isValid: 1
    });
    this._baseInput.pushEffect(o, EInsertType.Root);
    return o;
  }
}
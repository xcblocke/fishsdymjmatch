import { EInsertType } from './constant/BehaviorsEnum';
import { EGameInputEnum } from './simulator/constant/GameInputEnum';
import { BeforeEndEffect } from './BeforeEndEffect';
import { BlockInputRefEffect } from './BlockInputRefEffect';
import { BombEffect } from './BombEffect';
import { ClearEffectEffect } from './ClearEffectEffect';
import { ComboEffect } from './ComboEffect';
import { DaxiaoClearEffectEffect } from './DaxiaoClearEffectEffect';
import { DaxiaoClearTipEffect } from './DaxiaoClearTipEffect';
import { DuoxiaoComboEffect } from './DuoxiaoComboEffect';
import { EmptyEffect } from './EmptyEffect';
import { EndEffect } from './EndEffect';
import { FailEffect } from './FailEffect';
import { FullComboEffect } from './FullComboEffect';
import { HitTipsEffect } from './HitTipsEffect';
import { MotivationalWordsEffect } from './MotivationalWordsEffect';
import { MotivationalWordsEffectEffect } from './MotivationalWordsEffectEffect';
import { RewardComboEffect } from './RewardComboEffect';
import { ScoreFlotEffect } from './ScoreFlotEffect';
import { UpdateMatchNumEffect } from './UpdateMatchNumEffect';
import { UpdateScoreEffect } from './UpdateScoreEffect';
export default class ClearNormalHelper {
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
    return this._gameContext.scoreModifier.calAddScore();
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
    var n = this._gameContext.getGameData(),
      r = this.modifyClear(),
      l = this.getDaxiaoCardMathInfos(r);
    if (l) {
      var s = this.parseDaxiao(l).combo;
      this.addCombo(s);
    }
    this.updateCanMatchTiles();
    this.addCombo(1);
    var c = n.isBreakBest(),
      u = this.calAddScore(),
      p = n.isBreakBest(),
      f = __read(this.modifyClearHitTips(r), 2),
      d = f[0],
      h = f[1],
      y = this.canShowCombo(),
      m = this.getComboNum(),
      v = false,
      g = 0,
      _ = false,
      T = false,
      C = false,
      b = c != p && p;
    if (t.inputType === EGameInputEnum.AutoMerge) {
      v = false;
      _ = this._gameContext.getGameData().getHasTriggeredFullCombo();
      T = this._gameContext.getGameData().getHasTriggeredRewardCombo();
    } else {
      var E = this._gameContext.motivationalWordsChecker.canShowMotivationalWords(),
        S = E.isShow,
        I = E.index;
      mj.triggerInternalEvent("ClrNormHlp_motiv", this, [S, I]);
      v = S;
      g = I;
      if (!(C = this._gameContext.duoxiaoChecker.canShowDuoxiaoCombo(r))) {
        _ = this._gameContext.fullComboChecker.canFullCombo();
        T = this._gameContext.rewardComboChecker.shouldTriNow();
      }
      C && this.parseDuoxiaoCard(r);
    }
    this._options = {
      input: t,
      tileIds: r,
      addScore: u,
      showCombo: y,
      comboNum: m,
      isShowMotivationalWords: v,
      indexMotivationalWords: g,
      isShowFullCombo: _,
      isShowRewardCombo: T,
      isShowDuoxiaoCombo: C,
      isBreakBest: b,
      clearHit: d,
      hideHitIds: h,
      daxiaoCardMatchInfos: l
    };
    this.pushClearEffects();
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
    this.parseBombCard();
    this.pushUpdateMatchNumEffect(), this.tryShowMotivationalWords();
    this.pushScoreFlotEffect();
    this.tryExcuteShowCombo();
    this.tryExcuteRewardCombo();
    this.tryExcuteFullCombo();
    this.tryExcuteDuoxiaoCombo();
    this.tryExcuteEnd();
    this.pushClearBehaviorFinishEffect();
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
  @mj.traitEvent("ClrNormHlp_parseBomb")
  static parseBombCard() {
    var e = this,
      t = null,
      o = function o(n) {
        var i = e._gameContext.tileTypeChecker.parseBombCard(n);
        if (i) {
          t || (t = e._baseInput.pushParallerEffect().newEffectId);
          var a = e.getDaxiaoCardMathInfos(i.bombIds);
          if (a) {
            var l = e.parseDaxiao(a).combo;
            e.addCombo(l);
          }
          var u = e._gameContext.tileTypesModifier.modifyBombCard(e._input, i.bombIds),
            m = u.addScore,
            v = u.combo,
            g = u.showCombo,
            _ = new BombEffect({
              pos1: i.pos1,
              pos2: i.pos2,
              bombIds: i.bombIds
            }),
            T = e._baseInput.pushEffect(_, EInsertType.Serial, t, false).newEffectId;
          if (a) {
            var C = new DaxiaoClearTipEffect({
              tileIds: e._options.tileIds,
              finalMatchInfos: a
            });
            e._baseInput.pushEffect(C, EInsertType.Serial, T, false);
            var b = new DaxiaoClearEffectEffect({
              tileIds: e._options.tileIds,
              finalMatchInfos: a
            });
            e._baseInput.pushEffect(b, EInsertType.Serial, T, false);
          }
          var S = e._gameContext.duoxiaoChecker.isHasDuoxiaoCard(i.bombIds),
            w = e._gameContext.duoxiaoChecker.isInDuoxiaoCombo();
          if (S) {
            e.parseDuoxiaoCard(i.bombIds);
            if (!w) {
              var B = new BlockInputRefEffect({
                block: true,
                from: "bombDuoxiao"
              });
              e._baseInput.pushEffect(B, EInsertType.Serial, T, false);
            }
          }
          var x = new EmptyEffect({
              inputType: e._input.inputType,
              name: "BombParallelGroup"
            }),
            M = e._baseInput.pushEffect(x, EInsertType.Serial, T, false).newEffectId,
            O = new ScoreFlotEffect({
              tileId: i.bombIds[0],
              lastTileId: i.bombIds[1],
              isCombo: g,
              addScore: m,
              size: e._gameContext.getTileMapObject().getTileObject(i.bombIds[0]).getContentSize()
            }),
            D = e._baseInput.pushEffect(O, EInsertType.Parallel, M).newEffectId,
            P = e._gameContext.getGameData(),
            A = new UpdateScoreEffect({
              addScore: m,
              targetScore: P.getScore(),
              isShowCombo: g
            });
          e._baseInput.pushEffect(A, EInsertType.Serial, D, false);
          if (g) {
            var R = new ComboEffect({
              comboNum: v
            });
            e._baseInput.pushEffect(R, EInsertType.Parallel, M);
          }
          e.checkBombMotivWords(i.bombIds, M);
          if (S && !w) {
            if (e._gameContext.resultChecker.checkIsEndOrDead()) e._gameContext.duoxiaoModifier.resetDuoxiaoClearCount();else {
              var N = new DuoxiaoComboEffect({
                duoxiaoCount: e._gameContext.getDuoxiaoClearCount()
              });
              e._baseInput.pushEffect(N, EInsertType.Serial, T, false);
            }
            B = new BlockInputRefEffect({
              block: false,
              from: "bombDuoxiaoComboEnd"
            });
            e._baseInput.pushEffect(B, EInsertType.Serial, T, false);
          }
          e._options.insertEndEffectId = M;
          e._options.insertEndEffectType = EInsertType.Serial;
          o(i.bombIds);
        }
      };
    o(this._options.tileIds);
    this._gameContext.getTileMapObject().updateCanMatchTiles();
  }
  @mj.traitEvent("ClrNormHlp_chkBombMotiv")
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
  @mj.traitEvent("ClrNormHlp_tryShwMotWrd")
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
      a = this._baseInput.pushEffect(i, EInsertType.Parallel),
      l = (a.lastEffectId, a.newEffectId),
      s = this._gameContext.getGameData(),
      c = new UpdateScoreEffect({
        addScore: n,
        targetScore: s.getScore(),
        isShowCombo: o
      });
    return this._baseInput.pushEffect(c, EInsertType.Serial, l, false);
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
        var t = this.pushFullComboEffect();
        this._options.fullComboEffectOptions = t;
        return t;
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
      var e = this._gameContext.gameTimeData.time;
      this._gameContext.getGameData().updateAvgClearIntervals();
      this._gameContext.gameModifier.modifyWin(e);
      var t = this.pushBeforeEndEffect();
      return this.pushEndEffect(t);
    }
    this.shouldCheckFail(this._options.isShowFullCombo, this._options.isShowRewardCombo) && this.tryExcuteFail();
  }
  static pushBeforeEndEffect() {
    this.beforePushEndEffect();
    var e = new BeforeEndEffect({});
    return this._options.insertEndEffectId ? this._baseInput.pushEffect(e, this._options.insertEndEffectType, this._options.insertEndEffectId, false) : this._baseInput.pushEffect(e, EInsertType.Parallel);
  }
  @mj.traitEvent("ClrNormHlp_bfrPushEnd")
  static beforePushEndEffect() {}
  static pushEndEffect(e) {
    var t = new EndEffect({
      score: this._gameContext.getGameData().getScore(),
      settlementScore: this._gameContext.getGameData().getSettlementScore(),
      perfectMaxScore: this._gameContext.scoreModifier.getPerfectMaxScore(),
      curLv: this._gameContext.getGameData().getLevelId()
    });
    return this._baseInput.pushEffect(t, EInsertType.Serial, e.newEffectId, false);
  }
  @mj.traitEvent("ClrNormHlp_shldChkFail")
  static shouldCheckFail(e, t) {
    return !e && !t;
  }
  @mj.traitEvent("ClrNormHlp_tryExcFail")
  static tryExcuteFail() {
    var e = this._options.tileIds || [];
    if (this._gameContext.getTileMapObject().checkIsDead(e)) return this.pushFailEffect();
  }
  @mj.traitEvent("ClrNormHlp_getPreShf")
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
  @mj.traitEvent("ClrNormHlp_pushClrFinish")
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
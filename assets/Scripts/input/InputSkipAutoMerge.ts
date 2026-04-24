import { EInsertType } from '../constant/BehaviorsEnum';
import { EGameEvent } from '../simulator/constant/GameEvent';
import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { BeforeEndEffect } from '../BeforeEndEffect';
import { BeforeDailyChallengeEndEffect } from '../BeforeDailyChallengeEndEffect';
import { CleanViewEffect } from '../CleanViewEffect';
import { DailyChallengeEndEffect } from '../DailyChallengeEndEffect';
import { EndEffect } from '../EndEffect';
import { SkipAutoMergeEffect } from '../SkipAutoMergeEffect';
import { TravelEndEffect } from '../TravelEndEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputSkipAutoMerge extends InputBase {
  excute(e) {
    var t = this,
      o = this.gameContext.getTileMapObject(),
      n = (this.gameContext.getGameData(), o.unselectAllTileIds());
    console.log("[AutoMatch] skip type=" + e.type + " levelId=" + this.gameContext.getGameData().getLevelId() + " remain_before=" + o.getRemainCount());
    n && n.length > 0 && n.forEach(function (e) {
      t.pushSelectEffect(e, true);
    });
    var i = new SkipAutoMergeEffect({
      type: e.type
    });
    this.pushEffect(i, EInsertType.Root);
    var l = o.getAllCardTiles(),
      s = l.length;
    if (0 !== s) {
      for (var c = Math.floor(s / 2), p = 0; p < c; p++) {
        this.gameContext.comboModifier.addCombo(1);
        this.gameContext.scoreModifier.calAddScore();
      }
      var f = [];
      l.forEach(function (e) {
        if (e.isValid) {
          e.isValid = false;
          f.push(e);
        }
      });
      o.onClear(f);
      var h = new CleanViewEffect({});
      this.pushEffect(h, EInsertType.Parallel);
      o.updateCanMatchTiles();
      console.log("[AutoMatch] skip cleared=" + f.length + " remain_after=" + o.getRemainCount());
      this.finishSkipAndWin(e);
      mj.EventManager.emit(EGameEvent.Effect_SkipAutoMerge, this);
    }
  }
  finishSkipAndWin() {
    var e = this.gameController.gameTimeData.time,
      t = this.gameContext.gameType;
    this.gameContext.getGameData().updateAvgClearIntervals();
    if (t === MjGameType.DailyChallenge) {
      this.gameContext.gameModifier.modifyWinForDailyChallenge(e);
      var o = this.pushBeforeDailyChallengeEndEffect();
      this.pushDailyChallengeEndEffect(o);
    } else if (t === MjGameType.Travel) {
      this.gameContext.gameModifier.modifyWinForTravel(e);
      this.pushTravelEndEffect();
    } else {
      this.gameContext.gameModifier.modifyWin(e);
      o = this.pushBeforeEndEffect();
      this.pushNormalEndEffect(o);
    }
  }
  pushBeforeEndEffect() {
    var e = new BeforeEndEffect({});
    return this.pushEffect(e, EInsertType.Parallel);
  }
  pushNormalEndEffect(e) {
    var t = this.gameContext.getGameData(),
      o = new EndEffect({
        score: t.getScore(),
        settlementScore: t.getSettlementScore(),
        perfectMaxScore: this.gameContext.scoreModifier.getPerfectMaxScore(),
        curLv: t.getLevelId()
      });
    this.pushEffect(o, EInsertType.Serial, e.newEffectId, false);
  }
  pushBeforeDailyChallengeEndEffect() {
    var e = new BeforeDailyChallengeEndEffect({});
    return this.pushEffect(e, EInsertType.Parallel);
  }
  pushDailyChallengeEndEffect(e) {
    var t = this.gameContext.getGameData(),
      o = new DailyChallengeEndEffect({
        score: t.getScore(),
        settlementScore: t.getSettlementScore(),
        perfectMaxScore: this.gameContext.scoreModifier.getPerfectMaxScore(),
        challengeDate: t.getDailyChallengeTimestamp()
      });
    this.pushEffect(o, EInsertType.Serial, e.newEffectId);
  }
  pushTravelEndEffect() {
    var e,
      t,
      o,
      n = this.gameContext.getGameData(),
      i = null !== (o = null === (t = null === (e = this.gameContext.getTileMapObject()) || void 0 === e ? void 0 : e.collectSystem) || void 0 === t ? void 0 : t.getAllCollectDetails()) && void 0 !== o ? o : [],
      a = new TravelEndEffect({
        curLv: n.getLevelId(),
        collects: i
      });
    this.pushEffect(a, EInsertType.Parallel);
  }
}
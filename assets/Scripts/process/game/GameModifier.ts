import AdModel from '../../gamePlay/base/ad/AdModel';
import { DGameAdRevenue } from '../../gamePlay/dot/DGameAdRevenue';
import { DotGameEnd } from '../../gamePlay/dot/DGameEnd';
import { DotGameLog } from '../../gamePlay/dot/DGameLog';
import ExtractTool from '../../core/extractQuestion/ExtractTool';
import { BaseCoreObject } from '../../BaseCoreObject';
import { MjGameType } from '../../core/simulator/constant/GameTypeEnums';
import DynamicCurve from '../../types/DynamicCurve';
export class GameModifier extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  @mj.traitEvent("GameMod_modifyLayout")
  modifyLayout(e, t = 1) {
    this.context.setCardLayoutConfig(e);
    this.context.setLayoutScale(t);
    this.context.getTileMapObject().updatePositonOffset();
  }
  modifyClearHitTips(e, t) {
    var o = this,
      n = false,
      i = this.context.getTileMapObject().getTileObject(e),
      r = this.context.getTileMapObject().getTileObject(t),
      a = this.context.getCanHitTips();
    if ((a.includes(e) || a.includes(t)) && a.length > 0) {
      var l = a.map(function (e) {
        return o.context.getTileMapObject().getTileObject(e);
      }).map(function (e) {
        return e.cardId;
      });
      if ([i.cardId, r.cardId].some(function (e) {
        return l.includes(e);
      })) {
        var s = this.context.getTileMapObject();
        Array.from(s._tileObjectMap.keys()).forEach(function (e) {
          var t = s.getTileObject(e);
          t && t.isValid && l.includes(t.cardId) && (t.isHint = false);
        });
        this.context.setCanHitTips([]);
        n = true;
      }
    }
    i.isHint && (i.isHint = false);
    r.isHint && (r.isHint = false);
    return [n, a.concat([e, t])];
  }
  @mj.traitEvent("GameMod_modifyShuffle")
  modifyShuffle() {
    this.context.setCanHitTips([]);
    this.context.saveModifier.saveLevelDataToLocalStorage();
  }
  @mj.traitEvent("GameMod_modifyWin")
  modifyWin(e) {
    var t = this.context.getGameData(),
      o = void 0 !== e ? e : this.context.gameTimeData.time,
      n = this.updateCapability(true, o);
    this.context.scoreModifier.calSettlementScore(o, n);
    t.updateLast10GameRecord(true);
    t.updateManualMatchSample();
    t.stopPlayTime();
    this.doGameEnd({
      isWin: true,
      expectTime: n,
      gameTime: t.getCurrentRoundTime()
    });
    this.context.gameTimeData.stop();
    t.setIsEnd(true);
    this.context.clearAllData();
  }
  modifyWinForTravel(e) {
    var t = this.context.getGameData(),
      o = void 0 !== e ? e : this.context.gameTimeData.time;
    this.updateCapability(true, o);
    var n = t.getLevelDifficulty(),
      i = ExtractTool.getInstance().getExpectTime(n, MjGameType.Travel);
    t.updateLast10GameRecord(true);
    t.updateManualMatchSample();
    t.stopPlayTime();
    this.doGameEnd({
      isWin: true,
      expectTime: i,
      gameTime: t.getCurrentRoundTime()
    });
    this.context.gameTimeData.stop();
    t.setIsEnd(true);
    this.context.clearAllData();
  }
  modifyWinForDailyChallenge(e) {
    var t = this.context.getGameData(),
      o = void 0 !== e ? e : this.context.gameTimeData.time;
    this.updateCapability(true, o);
    var n = t.getLevelDifficulty(),
      i = ExtractTool.getInstance().getExpectTime(n, MjGameType.DailyChallenge);
    this.context.scoreModifier.calSettlementScore(o, i);
    t.updateLast10GameRecord(true);
    t.updateManualMatchSample();
    t.stopPlayTime();
    this.doGameEnd({
      isWin: true,
      expectTime: i,
      gameTime: t.getCurrentRoundTime()
    });
    this.context.gameTimeData.stop();
    t.setIsEnd(true);
    this.context.clearAllData();
  }
  modifyClassicEnd() {
    var e = this.context.getGameData();
    e.updateLast10GameRecord(false);
    e.updateManualMatchSample();
    e.stopPlayTime();
    this.doGameEnd({
      isWin: false,
      expectTime: 0,
      gameTime: e.getCurrentRoundTime(),
      from: "fail"
    });
    this.context.gameTimeData.stop();
    e.setIsEnd(true);
    this.context.clearAllData();
  }
  updateCapability(e, t) {
    var o,
      n = this.context.getGameData(),
      i = n.getLevelId(),
      r = e ? Math.floor(n.getTotalTileCount() / 2) : Math.floor(n.getClearTileCount() / 2);
    if (DynamicCurve.instance.supportMode(this.context.gameType)) {
      DynamicCurve.instance.updateCapability({
        gameType: this.context.gameType,
        levelId: n.getLevelId(),
        win: e,
        time: t,
        clearPair: r
      });
      return DynamicCurve.instance.getExtractInfo(this.context.gameType).predictTime;
    }
    var a = 0;
    if (ExtractTool.getInstance().isSupportCapabilityUpdate(this.context.gameType) && e) {
      var l = n.getLevelDifficulty(),
        s = n.getLevelGenIndex(),
        c = ExtractTool.getInstance().UpdateCapability(l, t, s, i, this.context.gameType);
      a = null !== (o = null == c ? void 0 : c.expectTime) && void 0 !== o ? o : 0;
    }
    return a;
  }
  @mj.traitEvent("GameMod_modifyWinTile2")
  modifyWinForTile2() {
    var e = this.context.getGameData(),
      t = this.context.gameTimeData.time,
      o = this.updateCapability(true, t);
    this.context.scoreModifier.calSettlementScore(t, o);
    e.updateLast10GameRecord(true);
    e.updateAvgClearIntervals();
    e.updateManualMatchSample();
    e.stopPlayTime();
    this.doGameEnd({
      isWin: true,
      expectTime: o,
      gameTime: t
    });
    this.context.gameTimeData.stop();
    e.setIsEnd(true);
    this.context.clearAllData();
  }
  modifyStepCount() {
    this.context.getGameData().addStepCount(1);
  }
  enterGame() {
    this.context.getGameData().enterGame();
  }
  failRelay() {
    var e = this.context.getGameData();
    e.updateLast10GameRecord(false);
    e.updateManualMatchSample();
    e.stopPlayTime();
    var t = e.getCurrentRoundTime();
    this.updateCapability(false, t);
    var o = ExtractTool.getInstance().getExpectTime(e.getLevelDifficulty(), this.context.gameType);
    this.doGameEnd({
      isWin: false,
      expectTime: o,
      gameTime: t,
      from: "fail"
    });
  }
  settingRelay() {
    var e = this.context.getGameData();
    e.updateLast10GameRecord(false);
    e.stopPlayTime();
    var t = e.getCurrentRoundTime();
    this.updateCapability(false, t);
    var o = ExtractTool.getInstance().getExpectTime(e.getLevelDifficulty(), this.context.gameType);
    this.doGameEnd({
      isWin: false,
      expectTime: o,
      gameTime: t,
      from: "setting"
    });
  }
  doGameEnd(e) {
    DotGameLog.dot(this.context);
    DotGameEnd.dot(this.context, {
      win: e.isWin,
      expectTime: e.expectTime,
      from: e.from
    });
    DGameAdRevenue.recordGameAdRevenueData();
    AdModel.getInstance().updateOneDayAdGameEnd(e.gameTime, e.isWin);
  }
}
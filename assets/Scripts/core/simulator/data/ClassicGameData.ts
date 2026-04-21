import { MjGameType } from '../constant/GameTypeEnums';
import GameData from './GameData';
import GameUtils from '../util/GameUtils';
@mj.class("ClassicGameData")
export default class ClassicGameData extends GameData {
  _gameType = MjGameType.Classic;
  _swimlaneStartTime = Date.now();
  constructor() {
    super();
    this.isLocalEmpty(this.localData.currentBatchId) && (this.localData.currentBatchId = 0);
    this.isLocalEmpty(this.localData.waitExcuteDrop) && (this.localData.waitExcuteDrop = 0);
    this.isLocalEmpty(this.localData.batchInfosMap) && (this.localData.batchInfosMap = {});
    this.isLocalEmpty(this.localData.tileBatchInfos) && (this.localData.tileBatchInfos = []);
    this.isLocalEmpty(this.localData.reviveCount) && (this.localData.reviveCount = 0);
    this.isLocalEmpty(this.localData.scoreCombo) && (this.localData.scoreCombo = 0);
    this.isLocalEmpty(this.localData.preBestScore) && (this.localData.preBestScore = 0);
    this.isLocalEmpty(this.localData.preTodayScore) && (this.localData.preTodayScore = [0, -1]);
    this.isLocalEmpty(this.localData.preWeekScore) && (this.localData.preWeekScore = [0, -1]);
    this.isLocalEmpty(this.localData.todayScore) && (this.localData.todayScore = [0, -1]);
    this.isLocalEmpty(this.localData.weekScore) && (this.localData.weekScore = [0, -1]);
    this.isLocalEmpty(this.localData.swimlaneRotationCount) && (this.localData.swimlaneRotationCount = 0);
    this.isLocalEmpty(this.localData.isBreakBest) && (this.localData.isBreakBest = false);
    this.isLocalEmpty(this.localData.isBreakToday) && (this.localData.isBreakToday = false);
    this.isLocalEmpty(this.localData.isBreakWeek) && (this.localData.isBreakWeek = false);
  }
  setWaitExcuteDrop(e) {
    this.localData.waitExcuteDrop = e;
  }
  getWaitExcuteDrop() {
    return this.localData.waitExcuteDrop;
  }
  resetWaitExcuteDrop() {
    this.localData.waitExcuteDrop = 0;
  }
  getGameId() {
    return this.localData.levelIndex + ":1";
  }
  getSwimlaneTimeSeconds() {
    return Math.floor((Date.now() - this._swimlaneStartTime) / 1000);
  }
  resetSwimlaneTime() {
    this._swimlaneStartTime = Date.now();
  }
  getSwimlaneRotationCount() {
    return this.localData.swimlaneRotationCount || 0;
  }
  incrementSwimlaneRotationCount() {
    var e = this.localData.swimlaneRotationCount || 0;
    this.localData.swimlaneRotationCount = e + 1;
  }
  setCurrentBatchId(e) {
    this.localData.currentBatchId = e;
  }
  getCurrentBatchId() {
    return this.localData.currentBatchId;
  }
  getNextBatchId() {
    return this.getCurrentBatchId() + 1;
  }
  generateNewBatchId() {
    var e = Object.keys(this.localData.batchInfosMap).map(Number),
      t = this.getCurrentBatchId(),
      o = e.length > 0 ? Math.max.apply(Math, [...e]) : t;
    return Math.max(t, o) + 1;
  }
  addBatchInfo(e, t) {
    this.localData.batchInfosMap[e] = t;
    this.localData.batchInfosMap = this.localData.batchInfosMap;
  }
  getLevelStrByBatchId(e) {
    return this.localData.batchInfosMap[e];
  }
  removeNextLevelStr(e) {
    if (this.localData.batchInfosMap[e]) {
      delete this.localData.batchInfosMap[e];
      this.localData.batchInfosMap = this.localData.batchInfosMap;
    }
  }
  saveTileBatchInfos(e) {
    this.localData.tileBatchInfos = e;
  }
  getBatchIdByXyz(e, t, o) {
    var n = e + "-" + t + "-" + o,
      i = this.localData.tileBatchInfos.find(function (e) {
        return e.key === n;
      });
    return i ? i.batchId : 0;
  }
  getNextBatchInfo() {
    var e = this.getCurrentBatchId();
    return {
      batchId: e + 1,
      levelStr: this.localData.batchInfosMap[e + 1]
    };
  }
  resetGameData() {
    super.resetGameData.call(this);
    this.localData.waitExcuteDrop = 0;
    this.localData.batchInfosMap = {};
    this.localData.currentBatchId = 0;
    this.localData.swimlaneRotationCount = 0;
    this.localData.tileBatchInfos = [];
    this.localData.reviveCount = 0;
    this.localData.scoreCombo = 0;
    this.localData.preBestScore = this.localData.maxScore;
    this.localData.preTodayScore = this.localData.todayScore;
    this.localData.preWeekScore = this.localData.weekScore;
    this.localData.isBreakBest = false;
    this.localData.isBreakToday = false;
    this.localData.isBreakWeek = false;
    this.localData.tileTypes = "";
    this.localData.tileId2Type = "";
    this.localData.cardId2Type = "";
    this.localData.tileTypesExtra = "";
    this.localData.replaceInfo = "";
  }
  addScore(t, o = true) {
    super.addScore.call(this, t, o);
    var n = this.localData.score,
      i = this.localData.preBestScore;
    i > 0 && n > i && !this.localData.isBreakBest && (this.localData.isBreakBest = true);
    var r = Date.now(),
      l = __read(this.localData.preTodayScore, 2),
      s = l[0],
      c = l[1],
      p = __read(this.localData.preWeekScore, 2),
      f = p[0],
      d = p[1];
    if (GameUtils.isSameDay(r, c)) {
      n > s && !this.localData.isBreakToday && (this.localData.isBreakToday = true);
      n > this.localData.todayScore[0] && (this.localData.todayScore = [n, r]);
    } else this.localData.todayScore = [n, r];
    if (GameUtils.isSameWeek(r, d)) {
      n > f && !this.localData.isBreakWeek && (this.localData.isBreakWeek = true);
      n > this.localData.weekScore[0] && (this.localData.weekScore = [n, r]);
    } else this.localData.weekScore = [n, r];
  }
  getReviveCount() {
    return this.localData.reviveCount;
  }
  addReviveCount() {
    this.localData.reviveCount += 1;
  }
  getScoreCombo() {
    return this.localData.scoreCombo || 0;
  }
  addScoreCombo(e = 1) {
    this.localData.scoreCombo = (this.localData.scoreCombo || 0) + e;
  }
  resetScoreCombo() {
    this.localData.scoreCombo = 0;
  }
  addComboNum(t, o = true) {
    super.addComboNum.call(this, t, o);
    this.addScoreCombo(t);
  }
  resetComboNum() {
    super.resetComboNum.call(this);
    this.resetScoreCombo();
  }
  isBreakBest() {
    return this.localData.isBreakBest;
  }
  isBreakToday() {
    return this.localData.isBreakToday;
  }
  isBreakWeek() {
    return this.localData.isBreakWeek;
  }
  getPreBestScore() {
    return this.localData.preBestScore;
  }
  getPreTodayScore() {
    return this.localData.preTodayScore;
  }
  getPreWeekScore() {
    return this.localData.preWeekScore;
  }
  getTodayScore() {
    return this.localData.todayScore;
  }
  getWeekScore() {
    return this.localData.weekScore;
  }
}
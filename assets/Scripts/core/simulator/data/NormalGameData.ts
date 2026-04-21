import { MjGameType } from '../constant/GameTypeEnums';
import GameData from './GameData';
@mj.class("NormalGameData")
export default class NormalGameData extends GameData {
  _gameType = MjGameType.Normal;
  constructor() {
    super();
    this.isLocalEmpty(this.localData.rankCardCount) && (this.localData.rankCardCount = 0);
    this.isLocalEmpty(this.localData.isBreakBest) && (this.localData.isBreakBest = false);
    this.isLocalEmpty(this.localData.preBestScore) && (this.localData.preBestScore = 0);
  }
  resetGameData() {
    super.resetGameData.call(this);
    this.localData.isBreakBest = false;
    this.localData.preBestScore = this.localData.maxScore;
  }
  setRankCardCount(e) {
    this.localData.rankCardCount = e;
  }
  getRankCardCount() {
    return this.localData.rankCardCount;
  }
  updateMaxScore(t) {
    super.updateMaxScore.call(this, t);
    t > this.localData.preBestScore && !this.localData.isBreakBest && (this.localData.isBreakBest = true);
  }
  getPreBestScore() {
    return this.localData.preBestScore;
  }
  isBreakBest() {
    return this.localData.isBreakBest;
  }
}
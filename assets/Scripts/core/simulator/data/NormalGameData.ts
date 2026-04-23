import { MjGameType } from '../constant/GameTypeEnums';
import GameData from './GameData';
@mj.class("NormalGameData")
export default class NormalGameData extends GameData {
  _gameType = MjGameType.Normal;
  /** 主线本地调试：改成目标关卡号 (>0) 后进关会抽该关；须配合下面重写避免走「续关」旧棋盘。上线务必改回 0。 */
  static DEBUG_FORCE_LEVEL = 0;
  constructor() {
    super();
    this.isLocalEmpty(this.localData.rankCardCount) && (this.localData.rankCardCount = 0);
    this.isLocalEmpty(this.localData.isBreakBest) && (this.localData.isBreakBest = false);
    this.isLocalEmpty(this.localData.preBestScore) && (this.localData.preBestScore = 0);
  }
  getLevelId() {
    return NormalGameData.DEBUG_FORCE_LEVEL || super.getLevelId();
  }
  getLevelData() {
    if (NormalGameData.DEBUG_FORCE_LEVEL > 0 && this.localData.levelId !== NormalGameData.DEBUG_FORCE_LEVEL) {
      return "";
    }
    return super.getLevelData();
  }
  getOriginalLevelData() {
    if (NormalGameData.DEBUG_FORCE_LEVEL > 0 && this.localData.levelId !== NormalGameData.DEBUG_FORCE_LEVEL) {
      return "";
    }
    return super.getOriginalLevelData();
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
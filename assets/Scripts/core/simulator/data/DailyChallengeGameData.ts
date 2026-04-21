import { MjGameType } from '../constant/GameTypeEnums';
import GameData from './GameData';
@mj.class("DailyChallengeGameData")
export default class DailyChallengeGameData extends GameData {
  _gameType = MjGameType.DailyChallenge;
  constructor() {
    super();
    this.isLocalEmpty(this.localData.dailyChallengeTimestamp) && (this.localData.dailyChallengeTimestamp = "");
  }
  getDailyChallengeTimestamp() {
    return this.localData.dailyChallengeTimestamp;
  }
  setDailyChallengeTimestamp(e) {
    this.localData.dailyChallengeTimestamp = e;
    this.localData.lastUpdateTime = Date.now();
  }
  resetGameData() {
    super.resetGameData.call(this);
    this.localData.originalLevelData = "";
    this.localData.originalLevelDataWithSpecialCards = "";
  }
}
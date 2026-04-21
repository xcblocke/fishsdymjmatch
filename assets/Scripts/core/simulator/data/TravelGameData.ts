import { MjGameType } from '../constant/GameTypeEnums';
import GameData from './GameData';
@mj.class("TravelGameData")
export default class TravelGameData extends GameData {
  _gameType = MjGameType.Travel;
  _isAutoMerging = false;
  constructor() {
    super();
    this.isLocalEmpty(this.localData.collectData) && (this.localData.collectData = "");
  }
  setJourneyType(e) {
    this.localData.journeyType = e;
  }
  getJourneyType() {
    return this.localData.journeyType;
  }
  getCollectData() {
    return this.localData.collectData;
  }
  setCollectData(e) {
    this.localData.collectData = e;
    this.localData.lastUpdateTime = Date.now();
  }
  setAutoMerging(e) {
    this._isAutoMerging = e;
  }
  isAutoMerging() {
    return this._isAutoMerging;
  }
  resetGameData() {
    super.resetGameData.call(this);
    this.localData.collectData = "";
    this._isAutoMerging = false;
  }
  resetTravel() {
    this.resetGameData();
    this.localData.levelId = 1;
    this.localData.currentLevelId = 1;
    this.localData.levelData = "";
    this.localData.originalLevelData = "";
    this.localData.originalLevelDataWithSpecialCards = "";
  }
}
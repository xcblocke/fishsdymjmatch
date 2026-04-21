import { DotGameGetItem } from '../../../gamePlay/dot/DGameGetItem';
import { MjGameType, EItemId, EGetItemReasonId } from '../constant/GameTypeEnums';
import GameData from './GameData';
@mj.class("Tile2GameData")
export default class Tile2GameData extends GameData {
  _gameType = MjGameType.Tile2Normal;
  get slotBarIds() {
    return this.localData.slotBarIds || [];
  }
  get slotBarCount() {
    return this.localData.slotBarCount || 0;
  }
  constructor() {
    super();
    this.isLocalEmpty(this.localData.rankCardCount) && (this.localData.rankCardCount = 0);
    this.isLocalEmpty(this.localData.isBreakBest) && (this.localData.isBreakBest = false);
    this.isLocalEmpty(this.localData.preBestScore) && (this.localData.preBestScore = 0);
    this.isLocalEmpty(this.localData.slotBarIds) && (this.localData.slotBarIds = []);
    this.isLocalEmpty(this.localData.slotBarCount) && (this.localData.slotBarCount = 0);
    this.isLocalEmpty(this.localData.lastWinScore) && (this.localData.lastWinScore = 0);
    this.isLocalEmpty(this.localData.lastWinComboNum) && (this.localData.lastWinComboNum = 0);
    this.isLocalEmpty(this.localData.lastWinDuration) && (this.localData.lastWinDuration = 0);
    this.isLocalEmpty(this.localData.tileTypesExtra) && (this.localData.tileTypesExtra = "");
    this.isLocalEmpty(this.localData.originalTileTypesExtra) && (this.localData.originalTileTypesExtra = "");
    this.isLocalEmpty(this.localData.originalReplaceInfo) && (this.localData.originalReplaceInfo = "");
    this.isLocalEmpty(this.localData.slotLevel) && (this.localData.slotLevel = 0);
  }
  @mj.traitEvent("T2GD_getFrRvInitCnt")
  getFreeReviveInitCount() {
    return 5;
  }
  ensureReviveCountInit() {
    if (this.isLocalEmpty(this.localData.reviveCount)) {
      var e = this.getFreeReviveInitCount();
      this.localData.reviveCount = e;
      e > 0 && DotGameGetItem.dotGetItem(this, {
        itemId: EItemId.Revive,
        number: e,
        afterNum: e,
        reasonId: EGetItemReasonId.SystemGift,
        reasonInfo: "首次进入送" + e + "次复活"
      });
    }
  }
  setTileTypesExtra(e) {
    this.localData.tileTypesExtra = e;
    this.localData.lastUpdateTime = Date.now();
  }
  getTileTypesExtra() {
    return this.localData.tileTypesExtra;
  }
  setOriginalTileTypesExtra(e) {
    this.localData.originalTileTypesExtra = e;
    this.localData.lastUpdateTime = Date.now();
  }
  getOriginalTileTypesExtra() {
    return this.localData.originalTileTypesExtra || "";
  }
  setOriginalReplaceInfo(e) {
    this.localData.originalReplaceInfo = e;
    this.localData.lastUpdateTime = Date.now();
  }
  getOriginalReplaceInfo() {
    var e = {};
    try {
      if (this.localData.originalReplaceInfo) {
        var t = JSON.parse(this.localData.originalReplaceInfo);
        "object" == typeof t && (e = t);
      }
    } catch (e) {}
    return e;
  }
  onNewGameReset() {
    this.setRankCardCount(0);
    this.isLocalEmpty(this.localData.hasTriggeredAllClear) && (this.localData.hasTriggeredAllClear = false);
  }
  resetGameData() {
    super.resetGameData.call(this);
    this.localData.hasTriggeredAllClear = false;
    this.localData.isBreakBest = false;
    this.localData.preBestScore = this.localData.maxScore;
    this.localData.slotBarIds = [];
    this.localData.slotBarIds = this.localData.slotBarIds;
    this.localData.slotLevel = 0;
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
  addSlotBarId(e, t = -1) {
    this.localData.slotBarIds.splice(t, 0, e);
    this.localData.slotBarIds = this.localData.slotBarIds;
  }
  removeSlotBarId(e) {
    this.localData.slotBarIds = this.localData.slotBarIds.filter(function (t) {
      return t !== e;
    });
    this.localData.slotBarIds = this.localData.slotBarIds;
  }
  resetSlotBarIds(e) {
    this.localData.slotBarIds = e;
    this.localData.slotBarIds = this.localData.slotBarIds;
  }
  resetSlotBarCount(e) {
    this.localData.slotBarCount = e;
  }
  getReviveNums() {
    this.ensureReviveCountInit();
    return this.localData.reviveCount || 0;
  }
  changeReviveNums(e, t = false) {
    if (t) this.localData.reviveCount = e;else {
      this.ensureReviveCountInit();
      this.localData.reviveCount = this.localData.reviveCount + e;
    }
  }
  hasRevive() {
    return this.getReviveNums() > 0;
  }
  getLastWinScore() {
    return this.localData.lastWinScore || 0;
  }
  getLastWinComboNum() {
    return this.localData.lastWinComboNum || 0;
  }
  getLastWinDuration() {
    return this.localData.lastWinDuration || 0;
  }
  getSlotLevel() {
    return this.localData.slotLevel || 0;
  }
  setSlotLevel(e) {
    this.localData.slotLevel = e;
  }
  saveLastWinResult(e, t, o) {
    this.localData.lastWinScore = e;
    this.localData.lastWinComboNum = t;
    this.localData.lastWinDuration = o;
    this.localData.lastWinScore = this.localData.lastWinScore;
    this.localData.lastWinComboNum = this.localData.lastWinComboNum;
    this.localData.lastWinDuration = this.localData.lastWinDuration;
  }
  getHasTriggeredAllClear() {
    return this.localData.hasTriggeredAllClear;
  }
  setHasTriggeredAllClear(e = true) {
    this.localData.hasTriggeredAllClear = e;
    this.localData.lastUpdateTime = Date.now();
  }
}
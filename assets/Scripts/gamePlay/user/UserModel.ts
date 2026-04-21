import { MjGameType, ResId } from '../../core/simulator/constant/GameTypeEnums';
import ClassicGameData from '../../core/simulator/data/ClassicGameData';
import DailyChallengeGameData from '../../core/simulator/data/DailyChallengeGameData';
import NormalGameData from '../../core/simulator/data/NormalGameData';
import Tile2NormalGameData from '../../core/simulator/data/Tile2NormalGameData';
import TravelGameData from '../../core/simulator/data/TravelGameData';
import { ClassicTracker } from '../../core/simulator/tracker/ClassicTracker';
import { DailyChallengeTracker } from '../../core/simulator/tracker/DailyChallengeTracker';
import { NormalTracker } from '../../tracker/NormalTracker';
import { TravelTracker } from '../../tracker/TravelTracker';
import DateManager from '../../core/simulator/util/DateManager';
import Model from '../../framework/data/Model';
import ControllerManager from '../../framework/manager/ControllerManager';
import LoginModel from '../login/model/LoginModel';
import CardUtil from './CardUtil';
import { Tile2NormalTracker } from '../../dotTracker/Tile2NormalTracker';
@mj.class("UserModel")
export default class UserModel extends Model {
  _isFirstOpen = false;
  _tempLastGameType = MjGameType.Normal;
  _autoClearEnabled = true;
  _manGameTypes = [];
  get isFirstOpen() {
    return this._isFirstOpen;
  }
  get normalData() {
    return NormalGameData.getInstance();
  }
  get travelData() {
    return TravelGameData.getInstance();
  }
  get dailyChallengeData() {
    return DailyChallengeGameData.getInstance();
  }
  get classicData() {
    return ClassicGameData.getInstance();
  }
  get tile2NormalData() {
    return Tile2NormalGameData.getInstance();
  }
  get normalTracker() {
    return NormalTracker.getInstance();
  }
  get travelTracker() {
    return TravelTracker.getInstance();
  }
  get dailyChallengeTracker() {
    return DailyChallengeTracker.getInstance();
  }
  get classicTracker() {
    return ClassicTracker.getInstance();
  }
  get distinct_id() {
    var e;
    return (null === (e = LoginModel.getInstance().deviceInfo) || void 0 === e ? void 0 : e.distinct_id) || "";
  }
  get game_id() {
    return this.localData.game_id;
  }
  constructor() {
    super();
    if (this.localData.is_first_open) this._isFirstOpen = false;else {
      this.localData.is_first_open = true;
      this.localData.shuffle = 2;
      this.localData.hitTips = 2;
      this.localData.revertItem = 2;
      this._isFirstOpen = true;
    }
    this.localData.game_id || (this.localData.game_id = 0);
    this.localData.totalGames || (this.localData.totalGames = 0);
    this.localData.totalWinGames || (this.localData.totalWinGames = 0);
    this.localData.totalRewardAdCount || (this.localData.totalRewardAdCount = 0);
    this.localData.maxScore || (this.localData.maxScore = 0);
    this.isLocalEmpty(this.localData.firstVibration) && (this.localData.firstVibration = false);
    this.isLocalEmpty(this.localData.unlockFunctionList) && (this.localData.unlockFunctionList = []);
    this.isLocalEmpty(this.localData.installTime) && (this.localData.installTime = Date.now());
    this.isLocalEmpty(this.localData.isGuideFinished) && (this.localData.isGuideFinished = true);
    this.isLocalEmpty(this.localData.lastGameType) && (this.localData.lastGameType = MjGameType.None);
    this.localData.appUseSecondsTime || (this.localData.appUseSecondsTime = 0);
    this.setAppStartTime(Date.now());
    this.updateGameActiveDays();
    this.syncMainGameProgress();
  }
  syncMainGameProgress() {
    var e = this.normalData.getLevelId(),
      t = this.tile2NormalData.getLevelId();
    if (e > t) {
      this.tile2NormalData.setLevelInfo(e, "", "", "");
    } else {
      t > e && this.normalData.setLevelInfo(t, "", "", "");
    }
  }
  isLocalEmpty(e) {
    return null == e || "" === e;
  }
  getGameDataByGameType(e) {
    e == MjGameType.None && (e = this._tempLastGameType);
    return e == MjGameType.Normal ? this.normalData : e == MjGameType.Travel ? this.travelData : e == MjGameType.DailyChallenge ? this.dailyChallengeData : e == MjGameType.Classic ? this.classicData : e == MjGameType.Tile2Normal ? this.tile2NormalData : this.normalData;
  }
  getCurrentGameData() {
    return this.getGameDataByGameType(this.getCurrentGameType());
  }
  getGameTrackerByGameType(e) {
    return e == MjGameType.Normal ? this.normalTracker : e == MjGameType.Travel ? this.travelTracker : e == MjGameType.DailyChallenge ? this.dailyChallengeTracker : e == MjGameType.Classic ? this.classicTracker : this.normalTracker;
  }
  getCurrentGameTracker() {
    return this.getGameTrackerByGameType(this.getCurrentGameType());
  }
  getCurrentDotTracker() {
    return this.getDotTrackerByGameType(this.getCurrentGameType());
  }
  getDotTrackerByGameType(e) {
    return e == MjGameType.Tile2Normal ? Tile2NormalTracker.getInstance() : null;
  }
  getCurrentGameType() {
    var e = ControllerManager.getInstance().getTopSceneController();
    if (!e) return MjGameType.None;
    var t = MjGameType.None;
    e.gameType && (t = e.gameType);
    if (t == MjGameType.Normal || t == MjGameType.Travel || t == MjGameType.DailyChallenge || t == MjGameType.Classic || t == MjGameType.Tile2Normal) {
      this.localData.lastGameType = t;
      this._tempLastGameType = t;
    }
    return t;
  }
  isInGameView() {
    var e = this.getCurrentGameType();
    if ([MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge, MjGameType.Classic, MjGameType.Tile2Normal].includes(e)) {
      var t = ControllerManager.getInstance().getTopSceneController();
      if (null == t ? void 0 : t._gameSimulator) return true;
    }
    return false;
  }
  @mj.traitEvent("UserModel_updateGameId")
  updateGameId() {
    this.localData.game_id = this.localData.game_id + 1;
  }
  isMusicEnabled() {
    return this.localData.musicEnabled;
  }
  setMusicEnabled(e) {
    this.localData.musicEnabled = e;
    mj.sdk.setGameBGMStatus(e ? "1" : "0");
  }
  isSoundEnabled() {
    return this.localData.soundEnabled;
  }
  setSoundEnabled(e) {
    this.localData.soundEnabled = e;
    mj.sdk.setGameSoundStatus(e ? "1" : "0");
  }
  isVibrationEnabled() {
    return this.localData.vibrationEnabled;
  }
  setVibrationEnabled(e) {
    this.localData.vibrationEnabled = e;
  }
  isLockHighlightEnabled() {
    return this.localData.lockHighlightEnabled;
  }
  setLockHighlightEnabled(e) {
    this.localData.lockHighlightEnabled = e;
  }
  isAutoClearEnabled() {
    return this._autoClearEnabled;
  }
  setAutoClearEnabled(e) {
    this._autoClearEnabled = e;
  }
  isGuideFinished() {
    return this.localData.isGuideFinished;
  }
  @mj.traitEvent("UserModel_setGuideFin")
  setGuideFinished(e) {
    this.localData.isGuideFinished = e;
  }
  getTotalGames() {
    return this.localData.totalGames;
  }
  getTotalWinGames() {
    return this.localData.totalWinGames;
  }
  addTotalGames() {
    this.localData.totalGames += 1;
  }
  addTotalWinGames() {
    this.localData.totalWinGames += 1;
  }
  getAppStartTime() {
    return this.localData.appStartTime;
  }
  setAppStartTime(e) {
    this.localData.appStartTime = e;
  }
  setTotalRewardAdCount(e) {
    this.localData.totalRewardAdCount = e;
  }
  getTotalRewardAdCount() {
    return this.localData.totalRewardAdCount;
  }
  setTierGroup(e) {
    this.localData.tierGroup = e;
  }
  getTierGroup() {
    return this.localData.tierGroup;
  }
  setMaxScore(e) {
    this.localData.maxScore = e;
  }
  getMaxScore() {
    return this.localData.maxScore;
  }
  setFirstVibration(e) {
    this.localData.firstVibration = e;
  }
  isFirstVibration() {
    return this.localData.firstVibration;
  }
  isFunctionUnlocked(e) {
    return this.localData.unlockFunctionList.includes(e);
  }
  addFunctionUnlocked(e) {
    var t = this.localData.unlockFunctionList;
    if (!t.includes(e)) {
      t.push(e);
      this.localData.unlockFunctionList = t;
    }
  }
  setAvatarId(e) {
    this.localData.avatarId = e;
  }
  setFrameId(e) {
    this.localData.frameId = e;
  }
  getAvatarId() {
    return this.localData.avatarId;
  }
  getFrameId() {
    return this.localData.frameId;
  }
  setUserName(e) {
    this.localData.userName = e;
  }
  getUserName() {
    return this.localData.userName;
  }
  @mj.traitEvent("UserModel_getRankCardRes")
  getRankCardResName() {
    return CardUtil.getByKey(ResId.emRankId).resName;
  }
  getInstallTime() {
    return this.localData.installTime;
  }
  updateGameActiveDays() {
    var e = Date.now(),
      t = this.localData.lastActiveDate;
    if (DateManager.getInstance().isNewDay(t, e)) {
      this.localData.activeDays++;
      this.localData.lastActiveDate = e;
    }
  }
  getGameActiveDays() {
    return this.localData.activeDays;
  }
  getLastGameActiveDate() {
    return this.localData.lastActiveDate;
  }
  @mj.traitEvent("UserModel_cardBackColor")
  getCardBackColor() {
    return this.localData.cardBackColor || "default";
  }
  setCardBackColor(e) {
    this.localData.cardBackColor = e;
  }
  getAppUseSecondsTime() {
    return this.localData.appUseSecondsTime;
  }
  setAppUseSecondsTime(e) {
    this.localData.appUseSecondsTime = e;
  }
  addAppUseSecondsTime(e) {
    this.localData.appUseSecondsTime += e;
  }
  setManGameTypes(e) {
    this._manGameTypes = e;
  }
  getManGameTypes() {
    return this._manGameTypes;
  }
  getMainGameData() {
    return this.getGameDataByGameType(this.getMainGameType());
  }
  @mj.traitEvent("UserModel_getMainGameType")
  getMainGameType() {
    return MjGameType.Normal;
  }
}
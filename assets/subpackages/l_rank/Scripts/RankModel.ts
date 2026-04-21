import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import Tile2NormalGameData from '../../../Scripts/core/simulator/data/Tile2NormalGameData';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Model from '../../../Scripts/framework/data/Model';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import { DChampaignStart } from '../../../Scripts/DChampaignStart';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import RankRobotLogic, { DEFAULT_ROBOT_LOGIC_PARAM } from './RankRobotLogic';
export enum RankActivityState {
  NotStarted = 0,
  InProgress = 1,
  CD = 2,
  BeyondNext = 3,
}
var y = function y(t) {
  return null != t && ("string" != typeof t || 0 != t.length);
};
@mj.class("RankModel")
export default class RankModel extends Model {
  devCfg = null;
  _boardConfig = [];
  _robotLogic = null;
  _isInitialized = false;
  _curActState = RankActivityState.NotStarted;
  get boardConfig() {
    if (!this._boardConfig || 0 == this._boardConfig.length) {
      Date.now();
      var t = DataReader.getList(ConfigType.rank_col_leader_board),
        e = Math.min(this.getLoopLen(), t.length);
      this._boardConfig = t.slice(0, e);
    }
    return this._boardConfig;
  }
  constructor() {
    super();
    this._isInitialized = false;
    this._curActState = RankActivityState.NotStarted;
    this.loadFromCache();
    this.initialize();
  }
  loadFromCache() {
    this.localData.totalPeriodCount = y(this.localData.totalPeriodCount) ? this.localData.totalPeriodCount : 0;
    this.localData.gameCount = y(this.localData.gameCount) ? this.localData.gameCount : 0;
    this.localData.myRank = y(this.localData.myRank) ? this.localData.myRank : 0;
    this.localData.myScore = y(this.localData.myScore) ? this.localData.myScore : 0;
    this.localData.myName = y(this.localData.myName) ? this.localData.myName : "";
    this.localData.myAvatar = y(this.localData.myAvatar) ? this.localData.myAvatar : "";
    this.localData.curActStartTime = y(this.localData.curActStartTime) ? this.localData.curActStartTime : -1;
    this.localData.curActEndTime = y(this.localData.curActEndTime) ? this.localData.curActEndTime : -1;
    this.localData.curActIndex = y(this.localData.curActIndex) ? this.localData.curActIndex : -1;
    this.localData.nextActStartTime = y(this.localData.nextActStartTime) ? this.localData.nextActStartTime : -1;
    this.localData.usedActPeriodList = y(this.localData.usedActPeriodList) ? this.localData.usedActPeriodList : [];
    this.localData.isPrompted = y(this.localData.isPrompted) ? this.localData.isPrompted : "no";
    this.localData.isClaimed = y(this.localData.isClaimed) ? this.localData.isClaimed : "no";
  }
  createRankGameData() {
    return {
      expectationBase: 0,
      lastUpdateTime: 0,
      joinActInfo: {
        rank: 0,
        score: 0,
        passCount: 0,
        winStreakCount: 0,
        currentWinStreakRate: 1,
        isNeedRefreshRank: false,
        levelCollectCount: 0,
        totalCollectCount: 0
      },
      rankList: [],
      rankRobotCfg: Object.assign({}, DEFAULT_ROBOT_LOGIC_PARAM)
    };
  }
  hasPrompted() {
    return "yes" == this.localData.isPrompted;
  }
  setPrompted() {
    this.localData.isPrompted = "yes";
  }
  setClaimed() {
    this.localData.isClaimed = "yes";
  }
  hasClaimed() {
    return "yes" === this.localData.isClaimed;
  }
  @mj.traitEvent("RankModel_addCount")
  addPeriodCount(t = 1) {
    this.localData.totalPeriodCount += t;
  }
  getPeriodCount() {
    return this.localData.totalPeriodCount;
  }
  addGameCount(t = 1) {
    this.localData.gameCount += t;
  }
  resetGameCount() {
    this.localData.gameCount = 0;
  }
  isActivityOver() {
    return Date.now() >= this.localData.curActEndTime;
  }
  getCanRewardCount() {
    var t;
    return (null === (t = this.devCfg) || void 0 === t ? void 0 : t.canRewardCount) || 6;
  }
  getNowState() {
    if (this.localData.curActStartTime < 0 || this.localData.curActEndTime < 0 || this.localData.curActIndex < 0) return RankActivityState.NotStarted;
    var t = Date.now();
    return t < this.localData.curActStartTime ? RankActivityState.NotStarted : t < this.localData.curActEndTime ? RankActivityState.InProgress : t < this.localData.nextActStartTime ? RankActivityState.CD : RankActivityState.BeyondNext;
  }
  getActIndex() {
    return this.localData.curActIndex;
  }
  getSelfRank() {
    return this.localData.myRank;
  }
  getSelfReward() {
    return this.getRewardIdByRank(this.localData.myRank);
  }
  getCurBoardData() {
    return this.localData.curActIndex >= 0 && this.localData.curActIndex < this.boardConfig.length ? this.boardConfig[this.localData.curActIndex] : null;
  }
  isNowActivityFinished() {
    var t = this.getNowState();
    return RankActivityState.CD == t || RankActivityState.BeyondNext == t;
  }
  hasOpeningActivity() {
    if (this.localData.curActStartTime < 0 || this.localData.nextActStartTime < 0 || this.localData.curActEndTime < 0 || this.localData.curActIndex < 0) return false;
    var t = Date.now();
    return t >= this.localData.curActStartTime && t < this.localData.curActEndTime;
  }
  hasOpenedActivity() {
    return this.localData.curActStartTime > 0 && this.localData.curActEndTime > 0 && this.localData.curActIndex >= 0;
  }
  isOnList() {
    var t, e;
    return (null === (e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || void 0 === e ? void 0 : e.score) > 0;
  }
  isBetweenCD() {
    return Date.now() >= this.localData.nextActStartTime;
  }
  @mj.traitEvent("RankModel_getLoopLen")
  getLoopLen() {
    return 5;
  }
  setDevCfg(t) {
    this.devCfg = t;
  }
  getMessageListeners() {
    var _t = {};
    _t.RankModel_updTime = this.updateStartTime.bind(this);
    return _t;
  }
  getChampaignStartData() {
    return {
      champaign_num: this.localData.totalPeriodCount,
      init_active_days: UserModel.getInstance().getGameActiveDays(),
      init_total_num: UserModel.getInstance().getTotalGames(),
      champaign_init_rank: this.localData.myRank
    };
  }
  getChampaignEndData() {
    var t,
      e,
      o,
      n,
      a,
      i = this.localData.rankGameData;
    return {
      champaign_num: this.localData.totalPeriodCount,
      end_active_days: UserModel.getInstance().getGameActiveDays(),
      end_total_num: UserModel.getInstance().getTotalGames(),
      champaign_end_rank: this.localData.myRank,
      champaign_end_score: this.localData.myScore,
      champaign_end_game_cnt: this.localData.gameCount,
      champaign_end_score_1st: (null === (t = null == i ? void 0 : i.rankList[0]) || void 0 === t ? void 0 : t.score) || 0,
      champaign_end_score_2nd: (null === (e = null == i ? void 0 : i.rankList[1]) || void 0 === e ? void 0 : e.score) || 0,
      champaign_end_score_3rd: (null === (o = null == i ? void 0 : i.rankList[2]) || void 0 === o ? void 0 : o.score) || 0,
      champaign_end_score_10th: (null === (n = null == i ? void 0 : i.rankList[9]) || void 0 === n ? void 0 : n.score) || 0,
      champaign_end_collect_cards_num: (null === (a = null == i ? void 0 : i.joinActInfo) || void 0 === a ? void 0 : a.totalCollectCount) || 0
    };
  }
  @mj.traitEvent("RankModel_checkOpen")
  checkIfOpenNewActivity() {
    var t = Date.now();
    return this.localData.curActStartTime < 0 || t >= this.localData.nextActStartTime;
  }
  @mj.traitEvent("RankModel_getUnlockLevel")
  getUnlockLevel() {
    var t;
    return (null === (t = this.devCfg) || void 0 === t ? void 0 : t.unLockLevel) || 10;
  }
  @mj.traitEvent("RankModel_updTime")
  updateStartTime() {
    var t,
      e,
      o,
      n = UserModel.getInstance().getMainGameData().getLevelId();
    if (n <= this.getUnlockLevel()) this._curActState = RankActivityState.NotStarted;else {
      var a = Date.now();
      if (this.checkIfOpenNewActivity()) {
        this.localData.curActStartTime;
        if (!this.boardConfig || 0 === this.boardConfig.length) {
          this._curActState = RankActivityState.NotStarted;
          return;
        }
        this.localData.curActStartTime = a;
        this.localData.curActIndex = this.getRandomBoardIndex();
        var r = this.boardConfig[this.localData.curActIndex].Period,
          l = this.boardConfig[this.localData.curActIndex].TimeLimit;
        this.localData.curActEndTime = this.localData.curActStartTime + 1000 * l;
        this.localData.nextActStartTime = this.localData.curActStartTime + 1000 * l + 1000 * ((null === (t = this.devCfg) || void 0 === t ? void 0 : t.difActTimeCD) || 0);
        this.localData.isPrompted = "no";
        this.localData.isClaimed = "no";
        this.localData.usedActPeriodList.push(r);
        this.localData.usedActPeriodList = this.localData.usedActPeriodList;
        if (null === (e = this.devCfg) || void 0 === e ? void 0 : e.robotParams) {
          this.localData.rankGameData.rankRobotCfg = Object.assign({}, this.devCfg.robotParams);
        } else {
          this.localData.rankGameData.rankRobotCfg = Object.assign({}, DEFAULT_ROBOT_LOGIC_PARAM);
        }
        this._robotLogic.loadConfig();
        this._robotLogic && this._robotLogic.activeNewActivity(this.localData.rankGameData, n, r, l, (null === (o = this.devCfg) || void 0 === o ? void 0 : o.difActTimeCD) || 0);
        this.syncPlayerDataToLocal();
        this.localData.rankGameData = this.localData.rankGameData;
        this._curActState = RankActivityState.InProgress;
        this.resetGameCount();
        this.addPeriodCount();
        var c = this.getChampaignStartData();
        DChampaignStart.dot(c);
      } else if (a <= this.localData.curActEndTime) {
        this._curActState = RankActivityState.InProgress;
      } else {
        this._curActState = RankActivityState.CD;
      }
    }
  }
  @mj.traitEvent("RankModel_getSameActCD")
  getSameActCD() {
    var t, e;
    return null !== (e = null === (t = this.devCfg) || void 0 === t ? void 0 : t.sameActTimesCD) && void 0 !== e ? e : 0;
  }
  getRandomBoardIndex() {
    if (!this.boardConfig || 0 === this.boardConfig.length) return -1;
    for (var t = [], e = this.getSameActCD(), o = this.localData.usedActPeriodList.length - 1; o >= 0 && e > 0; o--, e--) t.push(this.localData.usedActPeriodList[o]);
    return this.getIndexByExclude(t);
  }
  @mj.traitEvent("RankModel_getIdxByExc")
  getIndexByExclude(t) {
    for (var e, o, n = -1, a = -1, i = 0; (n < 0 || t.includes(n)) && i < 100;) {
      a = Math.floor(Math.random() * this.boardConfig.length);
      n = null !== (o = null === (e = this.boardConfig[a]) || void 0 === e ? void 0 : e.Period) && void 0 !== o ? o : -1;
      i++;
    }
    (a < 0 || a >= this.boardConfig.length) && (a = Math.floor(Math.random() * this.boardConfig.length));
    return a;
  }
  syncPlayerDataToLocal() {
    if (this.localData.rankGameData) {
      this.localData.rankGameData.joinActInfo.isNeedRefreshRank && this._robotLogic.updateScoreToRankList(this.localData.rankGameData);
      var t = this.localData.rankGameData;
      this.localData.myRank = t.joinActInfo.rank;
      this.localData.myScore = t.joinActInfo.score;
      this.localData.myWinStreakRate = t.joinActInfo.currentWinStreakRate;
      this.localData.myWinStreakCount = t.joinActInfo.winStreakCount;
    }
  }
  initialize() {
    var t, e;
    if (!this._isInitialized) {
      try {
        this.localData.rankGameData || (this.localData.rankGameData = this.createRankGameData());
        this.localData.rankGameData.rankRobotCfg || (this.localData.rankGameData.rankRobotCfg = Object.assign({}, DEFAULT_ROBOT_LOGIC_PARAM));
        this._robotLogic = new RankRobotLogic();
        this._robotLogic.initialize();
        this.syncPlayerDataToLocal();
        this.localData.rankGameData = this.localData.rankGameData;
        this.localData.rankGameData, null === (e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.rankList) || void 0 === e || e.length;
      } catch (t) {
        console.error("[RankModel] 初始化失败: " + (t.message || t));
        throw t;
      }
      this._isInitialized = true;
    }
  }
  getRobotLogic() {
    return this._robotLogic;
  }
  getRankGameData() {
    return this.localData.rankGameData;
  }
  getRankList(t = false) {
    if (t && this.localData.rankGameData.joinActInfo.isNeedRefreshRank) {
      this.syncPlayerDataToLocal();
      this.localData.rankGameData = this.localData.rankGameData;
    }
    return this.getFilterRankList();
  }
  @mj.traitEvent("RankModel_filterList")
  getFilterRankList() {
    for (var t, e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.rankList, o = e.length - 1, n = o; n >= 0; n--) {
      if (0 != e[n].score) {
        o = n;
        break;
      }
      if (this.isMySelf(e[n].id) && this.localData.rankGameData.joinActInfo.score > 0) {
        o = n;
        break;
      }
    }
    return e.slice(0, o + 1);
  }
  getJoinActInfo() {
    var t;
    return (null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || {
      rank: 0,
      score: 0,
      passCount: 0,
      winStreakCount: 0,
      currentWinStreakRate: 1,
      isNeedRefreshRank: false,
      levelCollectCount: 0,
      totalCollectCount: 0
    };
  }
  isRobotSystemInitialized() {
    return this._isInitialized;
  }
  levelPassed() {
    if (this._robotLogic) try {
      this.localData.rankGameData.joinActInfo.isNeedRefreshRank && this.syncPlayerDataToLocal();
      this.localData.rankGameData.joinActInfo.levelCollectCount = 0;
      var t = NormalGameData.getInstance(),
        e = Tile2NormalGameData.getInstance(),
        o = UserModel.getInstance().getMainGameType(),
        n = MjGameType.Tile2Normal == o ? e.getRankCardCount() : t.getRankCardCount();
      this._robotLogic.levelPassed(this.localData.rankGameData, n);
      this.localData.myRank = this.localData.rankGameData.joinActInfo.rank;
      this.localData.rankGameData = this.localData.rankGameData;
    } catch (t) {
      console.error("[RankModel] 关卡通关处理失败: " + (t.message || t));
    }
  }
  @mj.traitEvent("RankModel_lvFailed")
  levelFailed() {
    this.resetWinStreakCount();
    this.resetLevelCollectCount();
  }
  resetWinStreakCount() {
    if (this._robotLogic) {
      this._robotLogic.resetWinStreakCount(this.localData.rankGameData);
      this.syncPlayerDataToLocal();
      this.localData.rankGameData = this.localData.rankGameData;
    }
  }
  @mj.traitEvent("RankModel_autoUpd")
  checkAutoUpdate() {
    var t, e, o;
    if (this._robotLogic && this.hasOpeningActivity() && (null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.rankList) && 0 !== (null === (o = null === (e = this.localData.rankGameData) || void 0 === e ? void 0 : e.rankList) || void 0 === o ? void 0 : o.length)) try {
      this._robotLogic.autoUpdRbtScore(this);
      this.syncPlayerDataToLocal();
      this.localData.rankGameData = this.localData.rankGameData;
    } catch (t) {}
  }
  getWinStreakRate() {
    var t, e;
    return this._robotLogic ? this._robotLogic.getWinStreakRate((null === (e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || void 0 === e ? void 0 : e.winStreakCount) || 0) : 1;
  }
  canClaimReward() {
    return !(!(this.localData.myRank > 0 && this.localData.myRank <= 6) || this.hasClaimed()) && (void 0 === this.localData.curActEndTime || -1 === this.localData.curActEndTime || this.isActivityOver());
  }
  getPlayerRankData() {
    return this.localData.myRank <= 0 ? null : {
      id: "player",
      rank: this.localData.myRank,
      name: this.localData.myName,
      avatarId: UserModel.getInstance().getAvatarId(),
      score: this.localData.myScore,
      avatarFrameId: UserModel.getInstance().getFrameId()
    };
  }
  getRewardIdByRank(t) {
    return this._robotLogic ? this._robotLogic.getRewardByRank(t) : null;
  }
  getLeftTime() {
    return this.hasOpeningActivity() ? Math.max(0, (this.localData.curActEndTime - Date.now()) / 1000) : 0;
  }
  syncMyScore() {
    this.syncPlayerDataToLocal();
    this.localData.rankGameData = this.localData.rankGameData;
  }
  isMySelf(t) {
    return this._robotLogic ? this._robotLogic.isMySelf(t) : "player" === t;
  }
  getRankAvatarAndFrame(t, e) {
    return {
      avatarId: e ? UserModel.getInstance().getAvatarId() : t.avatarId,
      frameId: e ? UserModel.getInstance().getFrameId() : t.avatarFrameId
    };
  }
  getRankName(t, e) {
    return e ? UserModel.getInstance().getUserName() : t.name;
  }
  addLevelCollectCount(t = 2) {
    var e;
    if (null === (e = this.localData.rankGameData) || void 0 === e ? void 0 : e.joinActInfo) {
      this.localData.rankGameData.joinActInfo.levelCollectCount += t;
      this.localData.rankGameData = this.localData.rankGameData;
    }
  }
  resetLevelCollectCount() {
    var t;
    if (null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) {
      this.localData.rankGameData.joinActInfo.levelCollectCount = 0;
      this.localData.rankGameData = this.localData.rankGameData;
    }
  }
  getLevelCollectCount() {
    var t, e;
    return (null === (e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || void 0 === e ? void 0 : e.levelCollectCount) || 0;
  }
  getTotalCollectCount() {
    var t, e;
    return (null === (e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || void 0 === e ? void 0 : e.totalCollectCount) || 0;
  }
  getRankListCount() {
    var t, e;
    return (null === (e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.rankList) || void 0 === e ? void 0 : e.length) || DEFAULT_ROBOT_LOGIC_PARAM.robotsNum;
  }
}
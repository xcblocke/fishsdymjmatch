"use strict";
cc._RF.push(module, '982d9oTolZIuaeyJQ815Yqd', 'RankModel');
// subpackages/l_rank/Scripts/RankModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RankActivityState = void 0;
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var Tile2NormalGameData_1 = require("../../../Scripts/core/simulator/data/Tile2NormalGameData");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Model_1 = require("../../../Scripts/framework/data/Model");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var DChampaignStart_1 = require("../../../Scripts/DChampaignStart");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RankRobotLogic_1 = require("./RankRobotLogic");
var RankActivityState;
(function (RankActivityState) {
    RankActivityState[RankActivityState["NotStarted"] = 0] = "NotStarted";
    RankActivityState[RankActivityState["InProgress"] = 1] = "InProgress";
    RankActivityState[RankActivityState["CD"] = 2] = "CD";
    RankActivityState[RankActivityState["BeyondNext"] = 3] = "BeyondNext";
})(RankActivityState = exports.RankActivityState || (exports.RankActivityState = {}));
var y = function y(t) {
    return null != t && ("string" != typeof t || 0 != t.length);
};
var RankModel = /** @class */ (function (_super) {
    __extends(RankModel, _super);
    function RankModel() {
        var _this = _super.call(this) || this;
        _this.devCfg = null;
        _this._boardConfig = [];
        _this._robotLogic = null;
        _this._isInitialized = false;
        _this._curActState = RankActivityState.NotStarted;
        _this._isInitialized = false;
        _this._curActState = RankActivityState.NotStarted;
        _this.loadFromCache();
        _this.initialize();
        return _this;
    }
    Object.defineProperty(RankModel.prototype, "boardConfig", {
        get: function () {
            if (!this._boardConfig || 0 == this._boardConfig.length) {
                Date.now();
                var t = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.rank_col_leader_board), e = Math.min(this.getLoopLen(), t.length);
                this._boardConfig = t.slice(0, e);
            }
            return this._boardConfig;
        },
        enumerable: false,
        configurable: true
    });
    RankModel.prototype.loadFromCache = function () {
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
    };
    RankModel.prototype.createRankGameData = function () {
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
            rankRobotCfg: Object.assign({}, RankRobotLogic_1.DEFAULT_ROBOT_LOGIC_PARAM)
        };
    };
    RankModel.prototype.hasPrompted = function () {
        return "yes" == this.localData.isPrompted;
    };
    RankModel.prototype.setPrompted = function () {
        this.localData.isPrompted = "yes";
    };
    RankModel.prototype.setClaimed = function () {
        this.localData.isClaimed = "yes";
    };
    RankModel.prototype.hasClaimed = function () {
        return "yes" === this.localData.isClaimed;
    };
    RankModel.prototype.addPeriodCount = function (t) {
        if (t === void 0) { t = 1; }
        this.localData.totalPeriodCount += t;
    };
    RankModel.prototype.getPeriodCount = function () {
        return this.localData.totalPeriodCount;
    };
    RankModel.prototype.addGameCount = function (t) {
        if (t === void 0) { t = 1; }
        this.localData.gameCount += t;
    };
    RankModel.prototype.resetGameCount = function () {
        this.localData.gameCount = 0;
    };
    RankModel.prototype.isActivityOver = function () {
        return Date.now() >= this.localData.curActEndTime;
    };
    RankModel.prototype.getCanRewardCount = function () {
        var t;
        return (null === (t = this.devCfg) || void 0 === t ? void 0 : t.canRewardCount) || 6;
    };
    RankModel.prototype.getNowState = function () {
        if (this.localData.curActStartTime < 0 || this.localData.curActEndTime < 0 || this.localData.curActIndex < 0)
            return RankActivityState.NotStarted;
        var t = Date.now();
        return t < this.localData.curActStartTime ? RankActivityState.NotStarted : t < this.localData.curActEndTime ? RankActivityState.InProgress : t < this.localData.nextActStartTime ? RankActivityState.CD : RankActivityState.BeyondNext;
    };
    RankModel.prototype.getActIndex = function () {
        return this.localData.curActIndex;
    };
    RankModel.prototype.getSelfRank = function () {
        return this.localData.myRank;
    };
    RankModel.prototype.getSelfReward = function () {
        return this.getRewardIdByRank(this.localData.myRank);
    };
    RankModel.prototype.getCurBoardData = function () {
        return this.localData.curActIndex >= 0 && this.localData.curActIndex < this.boardConfig.length ? this.boardConfig[this.localData.curActIndex] : null;
    };
    RankModel.prototype.isNowActivityFinished = function () {
        var t = this.getNowState();
        return RankActivityState.CD == t || RankActivityState.BeyondNext == t;
    };
    RankModel.prototype.hasOpeningActivity = function () {
        if (this.localData.curActStartTime < 0 || this.localData.nextActStartTime < 0 || this.localData.curActEndTime < 0 || this.localData.curActIndex < 0)
            return false;
        var t = Date.now();
        return t >= this.localData.curActStartTime && t < this.localData.curActEndTime;
    };
    RankModel.prototype.hasOpenedActivity = function () {
        return this.localData.curActStartTime > 0 && this.localData.curActEndTime > 0 && this.localData.curActIndex >= 0;
    };
    RankModel.prototype.isOnList = function () {
        var t, e;
        return (null === (e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || void 0 === e ? void 0 : e.score) > 0;
    };
    RankModel.prototype.isBetweenCD = function () {
        return Date.now() >= this.localData.nextActStartTime;
    };
    RankModel.prototype.getLoopLen = function () {
        return 5;
    };
    RankModel.prototype.setDevCfg = function (t) {
        this.devCfg = t;
    };
    RankModel.prototype.getMessageListeners = function () {
        var _t = {};
        _t.RankModel_updTime = this.updateStartTime.bind(this);
        return _t;
    };
    RankModel.prototype.getChampaignStartData = function () {
        return {
            champaign_num: this.localData.totalPeriodCount,
            init_active_days: UserModel_1.default.getInstance().getGameActiveDays(),
            init_total_num: UserModel_1.default.getInstance().getTotalGames(),
            champaign_init_rank: this.localData.myRank
        };
    };
    RankModel.prototype.getChampaignEndData = function () {
        var t, e, o, n, a, i = this.localData.rankGameData;
        return {
            champaign_num: this.localData.totalPeriodCount,
            end_active_days: UserModel_1.default.getInstance().getGameActiveDays(),
            end_total_num: UserModel_1.default.getInstance().getTotalGames(),
            champaign_end_rank: this.localData.myRank,
            champaign_end_score: this.localData.myScore,
            champaign_end_game_cnt: this.localData.gameCount,
            champaign_end_score_1st: (null === (t = null == i ? void 0 : i.rankList[0]) || void 0 === t ? void 0 : t.score) || 0,
            champaign_end_score_2nd: (null === (e = null == i ? void 0 : i.rankList[1]) || void 0 === e ? void 0 : e.score) || 0,
            champaign_end_score_3rd: (null === (o = null == i ? void 0 : i.rankList[2]) || void 0 === o ? void 0 : o.score) || 0,
            champaign_end_score_10th: (null === (n = null == i ? void 0 : i.rankList[9]) || void 0 === n ? void 0 : n.score) || 0,
            champaign_end_collect_cards_num: (null === (a = null == i ? void 0 : i.joinActInfo) || void 0 === a ? void 0 : a.totalCollectCount) || 0
        };
    };
    RankModel.prototype.checkIfOpenNewActivity = function () {
        var t = Date.now();
        return this.localData.curActStartTime < 0 || t >= this.localData.nextActStartTime;
    };
    RankModel.prototype.getUnlockLevel = function () {
        var t;
        return (null === (t = this.devCfg) || void 0 === t ? void 0 : t.unLockLevel) || 10;
    };
    RankModel.prototype.updateStartTime = function () {
        var t, e, o, n = UserModel_1.default.getInstance().getMainGameData().getLevelId();
        if (n <= this.getUnlockLevel())
            this._curActState = RankActivityState.NotStarted;
        else {
            var a = Date.now();
            if (this.checkIfOpenNewActivity()) {
                this.localData.curActStartTime;
                if (!this.boardConfig || 0 === this.boardConfig.length) {
                    this._curActState = RankActivityState.NotStarted;
                    return;
                }
                this.localData.curActStartTime = a;
                this.localData.curActIndex = this.getRandomBoardIndex();
                var r = this.boardConfig[this.localData.curActIndex].Period, l = this.boardConfig[this.localData.curActIndex].TimeLimit;
                this.localData.curActEndTime = this.localData.curActStartTime + 1000 * l;
                this.localData.nextActStartTime = this.localData.curActStartTime + 1000 * l + 1000 * ((null === (t = this.devCfg) || void 0 === t ? void 0 : t.difActTimeCD) || 0);
                this.localData.isPrompted = "no";
                this.localData.isClaimed = "no";
                this.localData.usedActPeriodList.push(r);
                this.localData.usedActPeriodList = this.localData.usedActPeriodList;
                if (null === (e = this.devCfg) || void 0 === e ? void 0 : e.robotParams) {
                    this.localData.rankGameData.rankRobotCfg = Object.assign({}, this.devCfg.robotParams);
                }
                else {
                    this.localData.rankGameData.rankRobotCfg = Object.assign({}, RankRobotLogic_1.DEFAULT_ROBOT_LOGIC_PARAM);
                }
                this._robotLogic.loadConfig();
                this._robotLogic && this._robotLogic.activeNewActivity(this.localData.rankGameData, n, r, l, (null === (o = this.devCfg) || void 0 === o ? void 0 : o.difActTimeCD) || 0);
                this.syncPlayerDataToLocal();
                this.localData.rankGameData = this.localData.rankGameData;
                this._curActState = RankActivityState.InProgress;
                this.resetGameCount();
                this.addPeriodCount();
                var c = this.getChampaignStartData();
                DChampaignStart_1.DChampaignStart.dot(c);
            }
            else if (a <= this.localData.curActEndTime) {
                this._curActState = RankActivityState.InProgress;
            }
            else {
                this._curActState = RankActivityState.CD;
            }
        }
    };
    RankModel.prototype.getSameActCD = function () {
        var t, e;
        return null !== (e = null === (t = this.devCfg) || void 0 === t ? void 0 : t.sameActTimesCD) && void 0 !== e ? e : 0;
    };
    RankModel.prototype.getRandomBoardIndex = function () {
        if (!this.boardConfig || 0 === this.boardConfig.length)
            return -1;
        for (var t = [], e = this.getSameActCD(), o = this.localData.usedActPeriodList.length - 1; o >= 0 && e > 0; o--, e--)
            t.push(this.localData.usedActPeriodList[o]);
        return this.getIndexByExclude(t);
    };
    RankModel.prototype.getIndexByExclude = function (t) {
        for (var e, o, n = -1, a = -1, i = 0; (n < 0 || t.includes(n)) && i < 100;) {
            a = Math.floor(Math.random() * this.boardConfig.length);
            n = null !== (o = null === (e = this.boardConfig[a]) || void 0 === e ? void 0 : e.Period) && void 0 !== o ? o : -1;
            i++;
        }
        (a < 0 || a >= this.boardConfig.length) && (a = Math.floor(Math.random() * this.boardConfig.length));
        return a;
    };
    RankModel.prototype.syncPlayerDataToLocal = function () {
        if (this.localData.rankGameData) {
            this.localData.rankGameData.joinActInfo.isNeedRefreshRank && this._robotLogic.updateScoreToRankList(this.localData.rankGameData);
            var t = this.localData.rankGameData;
            this.localData.myRank = t.joinActInfo.rank;
            this.localData.myScore = t.joinActInfo.score;
            this.localData.myWinStreakRate = t.joinActInfo.currentWinStreakRate;
            this.localData.myWinStreakCount = t.joinActInfo.winStreakCount;
        }
    };
    RankModel.prototype.initialize = function () {
        var t, e;
        if (!this._isInitialized) {
            try {
                this.localData.rankGameData || (this.localData.rankGameData = this.createRankGameData());
                this.localData.rankGameData.rankRobotCfg || (this.localData.rankGameData.rankRobotCfg = Object.assign({}, RankRobotLogic_1.DEFAULT_ROBOT_LOGIC_PARAM));
                this._robotLogic = new RankRobotLogic_1.default();
                this._robotLogic.initialize();
                this.syncPlayerDataToLocal();
                this.localData.rankGameData = this.localData.rankGameData;
                this.localData.rankGameData, null === (e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.rankList) || void 0 === e || e.length;
            }
            catch (t) {
                console.error("[RankModel] 初始化失败: " + (t.message || t));
                throw t;
            }
            this._isInitialized = true;
        }
    };
    RankModel.prototype.getRobotLogic = function () {
        return this._robotLogic;
    };
    RankModel.prototype.getRankGameData = function () {
        return this.localData.rankGameData;
    };
    RankModel.prototype.getRankList = function (t) {
        if (t === void 0) { t = false; }
        if (t && this.localData.rankGameData.joinActInfo.isNeedRefreshRank) {
            this.syncPlayerDataToLocal();
            this.localData.rankGameData = this.localData.rankGameData;
        }
        return this.getFilterRankList();
    };
    RankModel.prototype.getFilterRankList = function () {
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
    };
    RankModel.prototype.getJoinActInfo = function () {
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
    };
    RankModel.prototype.isRobotSystemInitialized = function () {
        return this._isInitialized;
    };
    RankModel.prototype.levelPassed = function () {
        if (this._robotLogic)
            try {
                this.localData.rankGameData.joinActInfo.isNeedRefreshRank && this.syncPlayerDataToLocal();
                this.localData.rankGameData.joinActInfo.levelCollectCount = 0;
                var t = NormalGameData_1.default.getInstance(), e = Tile2NormalGameData_1.default.getInstance(), o = UserModel_1.default.getInstance().getMainGameType(), n = GameTypeEnums_1.MjGameType.Tile2Normal == o ? e.getRankCardCount() : t.getRankCardCount();
                this._robotLogic.levelPassed(this.localData.rankGameData, n);
                this.localData.myRank = this.localData.rankGameData.joinActInfo.rank;
                this.localData.rankGameData = this.localData.rankGameData;
            }
            catch (t) {
                console.error("[RankModel] 关卡通关处理失败: " + (t.message || t));
            }
    };
    RankModel.prototype.levelFailed = function () {
        this.resetWinStreakCount();
        this.resetLevelCollectCount();
    };
    RankModel.prototype.resetWinStreakCount = function () {
        if (this._robotLogic) {
            this._robotLogic.resetWinStreakCount(this.localData.rankGameData);
            this.syncPlayerDataToLocal();
            this.localData.rankGameData = this.localData.rankGameData;
        }
    };
    RankModel.prototype.checkAutoUpdate = function () {
        var t, e, o;
        if (this._robotLogic && this.hasOpeningActivity() && (null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.rankList) && 0 !== (null === (o = null === (e = this.localData.rankGameData) || void 0 === e ? void 0 : e.rankList) || void 0 === o ? void 0 : o.length))
            try {
                this._robotLogic.autoUpdRbtScore(this);
                this.syncPlayerDataToLocal();
                this.localData.rankGameData = this.localData.rankGameData;
            }
            catch (t) { }
    };
    RankModel.prototype.getWinStreakRate = function () {
        var t, e;
        return this._robotLogic ? this._robotLogic.getWinStreakRate((null === (e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || void 0 === e ? void 0 : e.winStreakCount) || 0) : 1;
    };
    RankModel.prototype.canClaimReward = function () {
        return !(!(this.localData.myRank > 0 && this.localData.myRank <= 6) || this.hasClaimed()) && (void 0 === this.localData.curActEndTime || -1 === this.localData.curActEndTime || this.isActivityOver());
    };
    RankModel.prototype.getPlayerRankData = function () {
        return this.localData.myRank <= 0 ? null : {
            id: "player",
            rank: this.localData.myRank,
            name: this.localData.myName,
            avatarId: UserModel_1.default.getInstance().getAvatarId(),
            score: this.localData.myScore,
            avatarFrameId: UserModel_1.default.getInstance().getFrameId()
        };
    };
    RankModel.prototype.getRewardIdByRank = function (t) {
        return this._robotLogic ? this._robotLogic.getRewardByRank(t) : null;
    };
    RankModel.prototype.getLeftTime = function () {
        return this.hasOpeningActivity() ? Math.max(0, (this.localData.curActEndTime - Date.now()) / 1000) : 0;
    };
    RankModel.prototype.syncMyScore = function () {
        this.syncPlayerDataToLocal();
        this.localData.rankGameData = this.localData.rankGameData;
    };
    RankModel.prototype.isMySelf = function (t) {
        return this._robotLogic ? this._robotLogic.isMySelf(t) : "player" === t;
    };
    RankModel.prototype.getRankAvatarAndFrame = function (t, e) {
        return {
            avatarId: e ? UserModel_1.default.getInstance().getAvatarId() : t.avatarId,
            frameId: e ? UserModel_1.default.getInstance().getFrameId() : t.avatarFrameId
        };
    };
    RankModel.prototype.getRankName = function (t, e) {
        return e ? UserModel_1.default.getInstance().getUserName() : t.name;
    };
    RankModel.prototype.addLevelCollectCount = function (t) {
        if (t === void 0) { t = 2; }
        var e;
        if (null === (e = this.localData.rankGameData) || void 0 === e ? void 0 : e.joinActInfo) {
            this.localData.rankGameData.joinActInfo.levelCollectCount += t;
            this.localData.rankGameData = this.localData.rankGameData;
        }
    };
    RankModel.prototype.resetLevelCollectCount = function () {
        var t;
        if (null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) {
            this.localData.rankGameData.joinActInfo.levelCollectCount = 0;
            this.localData.rankGameData = this.localData.rankGameData;
        }
    };
    RankModel.prototype.getLevelCollectCount = function () {
        var t, e;
        return (null === (e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || void 0 === e ? void 0 : e.levelCollectCount) || 0;
    };
    RankModel.prototype.getTotalCollectCount = function () {
        var t, e;
        return (null === (e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || void 0 === e ? void 0 : e.totalCollectCount) || 0;
    };
    RankModel.prototype.getRankListCount = function () {
        var t, e;
        return (null === (e = null === (t = this.localData.rankGameData) || void 0 === t ? void 0 : t.rankList) || void 0 === e ? void 0 : e.length) || RankRobotLogic_1.DEFAULT_ROBOT_LOGIC_PARAM.robotsNum;
    };
    __decorate([
        mj.traitEvent("RankModel_addCount")
    ], RankModel.prototype, "addPeriodCount", null);
    __decorate([
        mj.traitEvent("RankModel_getLoopLen")
    ], RankModel.prototype, "getLoopLen", null);
    __decorate([
        mj.traitEvent("RankModel_checkOpen")
    ], RankModel.prototype, "checkIfOpenNewActivity", null);
    __decorate([
        mj.traitEvent("RankModel_getUnlockLevel")
    ], RankModel.prototype, "getUnlockLevel", null);
    __decorate([
        mj.traitEvent("RankModel_updTime")
    ], RankModel.prototype, "updateStartTime", null);
    __decorate([
        mj.traitEvent("RankModel_getSameActCD")
    ], RankModel.prototype, "getSameActCD", null);
    __decorate([
        mj.traitEvent("RankModel_getIdxByExc")
    ], RankModel.prototype, "getIndexByExclude", null);
    __decorate([
        mj.traitEvent("RankModel_filterList")
    ], RankModel.prototype, "getFilterRankList", null);
    __decorate([
        mj.traitEvent("RankModel_lvFailed")
    ], RankModel.prototype, "levelFailed", null);
    __decorate([
        mj.traitEvent("RankModel_autoUpd")
    ], RankModel.prototype, "checkAutoUpdate", null);
    RankModel = __decorate([
        mj.class("RankModel")
    ], RankModel);
    return RankModel;
}(Model_1.default));
exports.default = RankModel;

cc._RF.pop();
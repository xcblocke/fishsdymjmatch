
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0Y7QUFDcEYsc0ZBQWlGO0FBQ2pGLGdHQUEyRjtBQUMzRix5RUFBd0U7QUFDeEUsK0RBQTBEO0FBQzFELDZFQUE0RTtBQUM1RSxvRUFBbUU7QUFDbkUsc0VBQWlFO0FBQ2pFLG1EQUE2RTtBQUM3RSxJQUFZLGlCQUtYO0FBTEQsV0FBWSxpQkFBaUI7SUFDM0IscUVBQWMsQ0FBQTtJQUNkLHFFQUFjLENBQUE7SUFDZCxxREFBTSxDQUFBO0lBQ04scUVBQWMsQ0FBQTtBQUNoQixDQUFDLEVBTFcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFLNUI7QUFDRCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQztBQUVGO0lBQXVDLDZCQUFLO0lBZTFDO1FBQUEsWUFDRSxpQkFBTyxTQUtSO1FBcEJELFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixrQkFBWSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztRQVkxQyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixLQUFJLENBQUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztRQUNqRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztJQUNwQixDQUFDO0lBZkQsc0JBQUksa0NBQVc7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LElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSwwQ0FBeUIsQ0FBQyxTQUFTLENBQUM7SUFDdEwsQ0FBQztJQXRWRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7bURBR25DO0lBc0REO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzsrQ0FHckM7SUF1Q0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDOzJEQUlwQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzttREFJekM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7b0RBNENsQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztpREFJdkM7SUFPRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7c0RBU3RDO0lBMkNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztzREFhckM7SUFpQ0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO2dEQUluQztJQVNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztvREFRbEM7SUF6VmtCLFNBQVM7UUFEN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7T0FDRCxTQUFTLENBMlo3QjtJQUFELGdCQUFDO0NBM1pELEFBMlpDLENBM1pzQyxlQUFLLEdBMlozQztrQkEzWm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBOb3JtYWxHYW1lRGF0YSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvTm9ybWFsR2FtZURhdGEnO1xuaW1wb3J0IFRpbGUyTm9ybWFsR2FtZURhdGEgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9kYXRhL1RpbGUyTm9ybWFsR2FtZURhdGEnO1xuaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9Nb2RlbCc7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL2RhdGEvQ29uZmlnVHlwZSc7XG5pbXBvcnQgeyBEQ2hhbXBhaWduU3RhcnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0RDaGFtcGFpZ25TdGFydCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IFJhbmtSb2JvdExvZ2ljLCB7IERFRkFVTFRfUk9CT1RfTE9HSUNfUEFSQU0gfSBmcm9tICcuL1JhbmtSb2JvdExvZ2ljJztcbmV4cG9ydCBlbnVtIFJhbmtBY3Rpdml0eVN0YXRlIHtcbiAgTm90U3RhcnRlZCA9IDAsXG4gIEluUHJvZ3Jlc3MgPSAxLFxuICBDRCA9IDIsXG4gIEJleW9uZE5leHQgPSAzLFxufVxudmFyIHkgPSBmdW5jdGlvbiB5KHQpIHtcbiAgcmV0dXJuIG51bGwgIT0gdCAmJiAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgdCB8fCAwICE9IHQubGVuZ3RoKTtcbn07XG5AbWouY2xhc3MoXCJSYW5rTW9kZWxcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgZGV2Q2ZnID0gbnVsbDtcbiAgX2JvYXJkQ29uZmlnID0gW107XG4gIF9yb2JvdExvZ2ljID0gbnVsbDtcbiAgX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgX2N1ckFjdFN0YXRlID0gUmFua0FjdGl2aXR5U3RhdGUuTm90U3RhcnRlZDtcbiAgZ2V0IGJvYXJkQ29uZmlnKCkge1xuICAgIGlmICghdGhpcy5fYm9hcmRDb25maWcgfHwgMCA9PSB0aGlzLl9ib2FyZENvbmZpZy5sZW5ndGgpIHtcbiAgICAgIERhdGUubm93KCk7XG4gICAgICB2YXIgdCA9IERhdGFSZWFkZXIuZ2V0TGlzdChDb25maWdUeXBlLnJhbmtfY29sX2xlYWRlcl9ib2FyZCksXG4gICAgICAgIGUgPSBNYXRoLm1pbih0aGlzLmdldExvb3BMZW4oKSwgdC5sZW5ndGgpO1xuICAgICAgdGhpcy5fYm9hcmRDb25maWcgPSB0LnNsaWNlKDAsIGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYm9hcmRDb25maWc7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5fY3VyQWN0U3RhdGUgPSBSYW5rQWN0aXZpdHlTdGF0ZS5Ob3RTdGFydGVkO1xuICAgIHRoaXMubG9hZEZyb21DYWNoZSgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG4gIGxvYWRGcm9tQ2FjaGUoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEudG90YWxQZXJpb2RDb3VudCA9IHkodGhpcy5sb2NhbERhdGEudG90YWxQZXJpb2RDb3VudCkgPyB0aGlzLmxvY2FsRGF0YS50b3RhbFBlcmlvZENvdW50IDogMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5nYW1lQ291bnQgPSB5KHRoaXMubG9jYWxEYXRhLmdhbWVDb3VudCkgPyB0aGlzLmxvY2FsRGF0YS5nYW1lQ291bnQgOiAwO1xuICAgIHRoaXMubG9jYWxEYXRhLm15UmFuayA9IHkodGhpcy5sb2NhbERhdGEubXlSYW5rKSA/IHRoaXMubG9jYWxEYXRhLm15UmFuayA6IDA7XG4gICAgdGhpcy5sb2NhbERhdGEubXlTY29yZSA9IHkodGhpcy5sb2NhbERhdGEubXlTY29yZSkgPyB0aGlzLmxvY2FsRGF0YS5teVNjb3JlIDogMDtcbiAgICB0aGlzLmxvY2FsRGF0YS5teU5hbWUgPSB5KHRoaXMubG9jYWxEYXRhLm15TmFtZSkgPyB0aGlzLmxvY2FsRGF0YS5teU5hbWUgOiBcIlwiO1xuICAgIHRoaXMubG9jYWxEYXRhLm15QXZhdGFyID0geSh0aGlzLmxvY2FsRGF0YS5teUF2YXRhcikgPyB0aGlzLmxvY2FsRGF0YS5teUF2YXRhciA6IFwiXCI7XG4gICAgdGhpcy5sb2NhbERhdGEuY3VyQWN0U3RhcnRUaW1lID0geSh0aGlzLmxvY2FsRGF0YS5jdXJBY3RTdGFydFRpbWUpID8gdGhpcy5sb2NhbERhdGEuY3VyQWN0U3RhcnRUaW1lIDogLTE7XG4gICAgdGhpcy5sb2NhbERhdGEuY3VyQWN0RW5kVGltZSA9IHkodGhpcy5sb2NhbERhdGEuY3VyQWN0RW5kVGltZSkgPyB0aGlzLmxvY2FsRGF0YS5jdXJBY3RFbmRUaW1lIDogLTE7XG4gICAgdGhpcy5sb2NhbERhdGEuY3VyQWN0SW5kZXggPSB5KHRoaXMubG9jYWxEYXRhLmN1ckFjdEluZGV4KSA/IHRoaXMubG9jYWxEYXRhLmN1ckFjdEluZGV4IDogLTE7XG4gICAgdGhpcy5sb2NhbERhdGEubmV4dEFjdFN0YXJ0VGltZSA9IHkodGhpcy5sb2NhbERhdGEubmV4dEFjdFN0YXJ0VGltZSkgPyB0aGlzLmxvY2FsRGF0YS5uZXh0QWN0U3RhcnRUaW1lIDogLTE7XG4gICAgdGhpcy5sb2NhbERhdGEudXNlZEFjdFBlcmlvZExpc3QgPSB5KHRoaXMubG9jYWxEYXRhLnVzZWRBY3RQZXJpb2RMaXN0KSA/IHRoaXMubG9jYWxEYXRhLnVzZWRBY3RQZXJpb2RMaXN0IDogW107XG4gICAgdGhpcy5sb2NhbERhdGEuaXNQcm9tcHRlZCA9IHkodGhpcy5sb2NhbERhdGEuaXNQcm9tcHRlZCkgPyB0aGlzLmxvY2FsRGF0YS5pc1Byb21wdGVkIDogXCJub1wiO1xuICAgIHRoaXMubG9jYWxEYXRhLmlzQ2xhaW1lZCA9IHkodGhpcy5sb2NhbERhdGEuaXNDbGFpbWVkKSA/IHRoaXMubG9jYWxEYXRhLmlzQ2xhaW1lZCA6IFwibm9cIjtcbiAgfVxuICBjcmVhdGVSYW5rR2FtZURhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cGVjdGF0aW9uQmFzZTogMCxcbiAgICAgIGxhc3RVcGRhdGVUaW1lOiAwLFxuICAgICAgam9pbkFjdEluZm86IHtcbiAgICAgICAgcmFuazogMCxcbiAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgIHBhc3NDb3VudDogMCxcbiAgICAgICAgd2luU3RyZWFrQ291bnQ6IDAsXG4gICAgICAgIGN1cnJlbnRXaW5TdHJlYWtSYXRlOiAxLFxuICAgICAgICBpc05lZWRSZWZyZXNoUmFuazogZmFsc2UsXG4gICAgICAgIGxldmVsQ29sbGVjdENvdW50OiAwLFxuICAgICAgICB0b3RhbENvbGxlY3RDb3VudDogMFxuICAgICAgfSxcbiAgICAgIHJhbmtMaXN0OiBbXSxcbiAgICAgIHJhbmtSb2JvdENmZzogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9ST0JPVF9MT0dJQ19QQVJBTSlcbiAgICB9O1xuICB9XG4gIGhhc1Byb21wdGVkKCkge1xuICAgIHJldHVybiBcInllc1wiID09IHRoaXMubG9jYWxEYXRhLmlzUHJvbXB0ZWQ7XG4gIH1cbiAgc2V0UHJvbXB0ZWQoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuaXNQcm9tcHRlZCA9IFwieWVzXCI7XG4gIH1cbiAgc2V0Q2xhaW1lZCgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5pc0NsYWltZWQgPSBcInllc1wiO1xuICB9XG4gIGhhc0NsYWltZWQoKSB7XG4gICAgcmV0dXJuIFwieWVzXCIgPT09IHRoaXMubG9jYWxEYXRhLmlzQ2xhaW1lZDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtNb2RlbF9hZGRDb3VudFwiKVxuICBhZGRQZXJpb2RDb3VudCh0ID0gMSkge1xuICAgIHRoaXMubG9jYWxEYXRhLnRvdGFsUGVyaW9kQ291bnQgKz0gdDtcbiAgfVxuICBnZXRQZXJpb2RDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEudG90YWxQZXJpb2RDb3VudDtcbiAgfVxuICBhZGRHYW1lQ291bnQodCA9IDEpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5nYW1lQ291bnQgKz0gdDtcbiAgfVxuICByZXNldEdhbWVDb3VudCgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5nYW1lQ291bnQgPSAwO1xuICB9XG4gIGlzQWN0aXZpdHlPdmVyKCkge1xuICAgIHJldHVybiBEYXRlLm5vdygpID49IHRoaXMubG9jYWxEYXRhLmN1ckFjdEVuZFRpbWU7XG4gIH1cbiAgZ2V0Q2FuUmV3YXJkQ291bnQoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAodCA9IHRoaXMuZGV2Q2ZnKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNhblJld2FyZENvdW50KSB8fCA2O1xuICB9XG4gIGdldE5vd1N0YXRlKCkge1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5jdXJBY3RTdGFydFRpbWUgPCAwIHx8IHRoaXMubG9jYWxEYXRhLmN1ckFjdEVuZFRpbWUgPCAwIHx8IHRoaXMubG9jYWxEYXRhLmN1ckFjdEluZGV4IDwgMCkgcmV0dXJuIFJhbmtBY3Rpdml0eVN0YXRlLk5vdFN0YXJ0ZWQ7XG4gICAgdmFyIHQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiB0IDwgdGhpcy5sb2NhbERhdGEuY3VyQWN0U3RhcnRUaW1lID8gUmFua0FjdGl2aXR5U3RhdGUuTm90U3RhcnRlZCA6IHQgPCB0aGlzLmxvY2FsRGF0YS5jdXJBY3RFbmRUaW1lID8gUmFua0FjdGl2aXR5U3RhdGUuSW5Qcm9ncmVzcyA6IHQgPCB0aGlzLmxvY2FsRGF0YS5uZXh0QWN0U3RhcnRUaW1lID8gUmFua0FjdGl2aXR5U3RhdGUuQ0QgOiBSYW5rQWN0aXZpdHlTdGF0ZS5CZXlvbmROZXh0O1xuICB9XG4gIGdldEFjdEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5jdXJBY3RJbmRleDtcbiAgfVxuICBnZXRTZWxmUmFuaygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEubXlSYW5rO1xuICB9XG4gIGdldFNlbGZSZXdhcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmV3YXJkSWRCeVJhbmsodGhpcy5sb2NhbERhdGEubXlSYW5rKTtcbiAgfVxuICBnZXRDdXJCb2FyZERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmN1ckFjdEluZGV4ID49IDAgJiYgdGhpcy5sb2NhbERhdGEuY3VyQWN0SW5kZXggPCB0aGlzLmJvYXJkQ29uZmlnLmxlbmd0aCA/IHRoaXMuYm9hcmRDb25maWdbdGhpcy5sb2NhbERhdGEuY3VyQWN0SW5kZXhdIDogbnVsbDtcbiAgfVxuICBpc05vd0FjdGl2aXR5RmluaXNoZWQoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldE5vd1N0YXRlKCk7XG4gICAgcmV0dXJuIFJhbmtBY3Rpdml0eVN0YXRlLkNEID09IHQgfHwgUmFua0FjdGl2aXR5U3RhdGUuQmV5b25kTmV4dCA9PSB0O1xuICB9XG4gIGhhc09wZW5pbmdBY3Rpdml0eSgpIHtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEuY3VyQWN0U3RhcnRUaW1lIDwgMCB8fCB0aGlzLmxvY2FsRGF0YS5uZXh0QWN0U3RhcnRUaW1lIDwgMCB8fCB0aGlzLmxvY2FsRGF0YS5jdXJBY3RFbmRUaW1lIDwgMCB8fCB0aGlzLmxvY2FsRGF0YS5jdXJBY3RJbmRleCA8IDApIHJldHVybiBmYWxzZTtcbiAgICB2YXIgdCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHQgPj0gdGhpcy5sb2NhbERhdGEuY3VyQWN0U3RhcnRUaW1lICYmIHQgPCB0aGlzLmxvY2FsRGF0YS5jdXJBY3RFbmRUaW1lO1xuICB9XG4gIGhhc09wZW5lZEFjdGl2aXR5KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5jdXJBY3RTdGFydFRpbWUgPiAwICYmIHRoaXMubG9jYWxEYXRhLmN1ckFjdEVuZFRpbWUgPiAwICYmIHRoaXMubG9jYWxEYXRhLmN1ckFjdEluZGV4ID49IDA7XG4gIH1cbiAgaXNPbkxpc3QoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIChudWxsID09PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmpvaW5BY3RJbmZvKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnNjb3JlKSA+IDA7XG4gIH1cbiAgaXNCZXR3ZWVuQ0QoKSB7XG4gICAgcmV0dXJuIERhdGUubm93KCkgPj0gdGhpcy5sb2NhbERhdGEubmV4dEFjdFN0YXJ0VGltZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtNb2RlbF9nZXRMb29wTGVuXCIpXG4gIGdldExvb3BMZW4oKSB7XG4gICAgcmV0dXJuIDU7XG4gIH1cbiAgc2V0RGV2Q2ZnKHQpIHtcbiAgICB0aGlzLmRldkNmZyA9IHQ7XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX3QgPSB7fTtcbiAgICBfdC5SYW5rTW9kZWxfdXBkVGltZSA9IHRoaXMudXBkYXRlU3RhcnRUaW1lLmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIGdldENoYW1wYWlnblN0YXJ0RGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhbXBhaWduX251bTogdGhpcy5sb2NhbERhdGEudG90YWxQZXJpb2RDb3VudCxcbiAgICAgIGluaXRfYWN0aXZlX2RheXM6IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVBY3RpdmVEYXlzKCksXG4gICAgICBpbml0X3RvdGFsX251bTogVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0VG90YWxHYW1lcygpLFxuICAgICAgY2hhbXBhaWduX2luaXRfcmFuazogdGhpcy5sb2NhbERhdGEubXlSYW5rXG4gICAgfTtcbiAgfVxuICBnZXRDaGFtcGFpZ25FbmREYXRhKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgYSxcbiAgICAgIGkgPSB0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGE7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW1wYWlnbl9udW06IHRoaXMubG9jYWxEYXRhLnRvdGFsUGVyaW9kQ291bnQsXG4gICAgICBlbmRfYWN0aXZlX2RheXM6IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVBY3RpdmVEYXlzKCksXG4gICAgICBlbmRfdG90YWxfbnVtOiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRUb3RhbEdhbWVzKCksXG4gICAgICBjaGFtcGFpZ25fZW5kX3Jhbms6IHRoaXMubG9jYWxEYXRhLm15UmFuayxcbiAgICAgIGNoYW1wYWlnbl9lbmRfc2NvcmU6IHRoaXMubG9jYWxEYXRhLm15U2NvcmUsXG4gICAgICBjaGFtcGFpZ25fZW5kX2dhbWVfY250OiB0aGlzLmxvY2FsRGF0YS5nYW1lQ291bnQsXG4gICAgICBjaGFtcGFpZ25fZW5kX3Njb3JlXzFzdDogKG51bGwgPT09ICh0ID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS5yYW5rTGlzdFswXSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5zY29yZSkgfHwgMCxcbiAgICAgIGNoYW1wYWlnbl9lbmRfc2NvcmVfMm5kOiAobnVsbCA9PT0gKGUgPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLnJhbmtMaXN0WzFdKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnNjb3JlKSB8fCAwLFxuICAgICAgY2hhbXBhaWduX2VuZF9zY29yZV8zcmQ6IChudWxsID09PSAobyA9IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkucmFua0xpc3RbMl0pIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uc2NvcmUpIHx8IDAsXG4gICAgICBjaGFtcGFpZ25fZW5kX3Njb3JlXzEwdGg6IChudWxsID09PSAobiA9IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkucmFua0xpc3RbOV0pIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uc2NvcmUpIHx8IDAsXG4gICAgICBjaGFtcGFpZ25fZW5kX2NvbGxlY3RfY2FyZHNfbnVtOiAobnVsbCA9PT0gKGEgPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLmpvaW5BY3RJbmZvKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLnRvdGFsQ29sbGVjdENvdW50KSB8fCAwXG4gICAgfTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtNb2RlbF9jaGVja09wZW5cIilcbiAgY2hlY2tJZk9wZW5OZXdBY3Rpdml0eSgpIHtcbiAgICB2YXIgdCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLmN1ckFjdFN0YXJ0VGltZSA8IDAgfHwgdCA+PSB0aGlzLmxvY2FsRGF0YS5uZXh0QWN0U3RhcnRUaW1lO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua01vZGVsX2dldFVubG9ja0xldmVsXCIpXG4gIGdldFVubG9ja0xldmVsKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiAobnVsbCA9PT0gKHQgPSB0aGlzLmRldkNmZykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC51bkxvY2tMZXZlbCkgfHwgMTA7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rTW9kZWxfdXBkVGltZVwiKVxuICB1cGRhdGVTdGFydFRpbWUoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgbyxcbiAgICAgIG4gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCk7XG4gICAgaWYgKG4gPD0gdGhpcy5nZXRVbmxvY2tMZXZlbCgpKSB0aGlzLl9jdXJBY3RTdGF0ZSA9IFJhbmtBY3Rpdml0eVN0YXRlLk5vdFN0YXJ0ZWQ7ZWxzZSB7XG4gICAgICB2YXIgYSA9IERhdGUubm93KCk7XG4gICAgICBpZiAodGhpcy5jaGVja0lmT3Blbk5ld0FjdGl2aXR5KCkpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuY3VyQWN0U3RhcnRUaW1lO1xuICAgICAgICBpZiAoIXRoaXMuYm9hcmRDb25maWcgfHwgMCA9PT0gdGhpcy5ib2FyZENvbmZpZy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9jdXJBY3RTdGF0ZSA9IFJhbmtBY3Rpdml0eVN0YXRlLk5vdFN0YXJ0ZWQ7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmN1ckFjdFN0YXJ0VGltZSA9IGE7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmN1ckFjdEluZGV4ID0gdGhpcy5nZXRSYW5kb21Cb2FyZEluZGV4KCk7XG4gICAgICAgIHZhciByID0gdGhpcy5ib2FyZENvbmZpZ1t0aGlzLmxvY2FsRGF0YS5jdXJBY3RJbmRleF0uUGVyaW9kLFxuICAgICAgICAgIGwgPSB0aGlzLmJvYXJkQ29uZmlnW3RoaXMubG9jYWxEYXRhLmN1ckFjdEluZGV4XS5UaW1lTGltaXQ7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmN1ckFjdEVuZFRpbWUgPSB0aGlzLmxvY2FsRGF0YS5jdXJBY3RTdGFydFRpbWUgKyAxMDAwICogbDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubmV4dEFjdFN0YXJ0VGltZSA9IHRoaXMubG9jYWxEYXRhLmN1ckFjdFN0YXJ0VGltZSArIDEwMDAgKiBsICsgMTAwMCAqICgobnVsbCA9PT0gKHQgPSB0aGlzLmRldkNmZykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5kaWZBY3RUaW1lQ0QpIHx8IDApO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5pc1Byb21wdGVkID0gXCJub1wiO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5pc0NsYWltZWQgPSBcIm5vXCI7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnVzZWRBY3RQZXJpb2RMaXN0LnB1c2gocik7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnVzZWRBY3RQZXJpb2RMaXN0ID0gdGhpcy5sb2NhbERhdGEudXNlZEFjdFBlcmlvZExpc3Q7XG4gICAgICAgIGlmIChudWxsID09PSAoZSA9IHRoaXMuZGV2Q2ZnKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnJvYm90UGFyYW1zKSB7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhLnJhbmtSb2JvdENmZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGV2Q2ZnLnJvYm90UGFyYW1zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGEucmFua1JvYm90Q2ZnID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9ST0JPVF9MT0dJQ19QQVJBTSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9ib3RMb2dpYy5sb2FkQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuX3JvYm90TG9naWMgJiYgdGhpcy5fcm9ib3RMb2dpYy5hY3RpdmVOZXdBY3Rpdml0eSh0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGEsIG4sIHIsIGwsIChudWxsID09PSAobyA9IHRoaXMuZGV2Q2ZnKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmRpZkFjdFRpbWVDRCkgfHwgMCk7XG4gICAgICAgIHRoaXMuc3luY1BsYXllckRhdGFUb0xvY2FsKCk7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSA9IHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YTtcbiAgICAgICAgdGhpcy5fY3VyQWN0U3RhdGUgPSBSYW5rQWN0aXZpdHlTdGF0ZS5JblByb2dyZXNzO1xuICAgICAgICB0aGlzLnJlc2V0R2FtZUNvdW50KCk7XG4gICAgICAgIHRoaXMuYWRkUGVyaW9kQ291bnQoKTtcbiAgICAgICAgdmFyIGMgPSB0aGlzLmdldENoYW1wYWlnblN0YXJ0RGF0YSgpO1xuICAgICAgICBEQ2hhbXBhaWduU3RhcnQuZG90KGMpO1xuICAgICAgfSBlbHNlIGlmIChhIDw9IHRoaXMubG9jYWxEYXRhLmN1ckFjdEVuZFRpbWUpIHtcbiAgICAgICAgdGhpcy5fY3VyQWN0U3RhdGUgPSBSYW5rQWN0aXZpdHlTdGF0ZS5JblByb2dyZXNzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY3VyQWN0U3RhdGUgPSBSYW5rQWN0aXZpdHlTdGF0ZS5DRDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rTW9kZWxfZ2V0U2FtZUFjdENEXCIpXG4gIGdldFNhbWVBY3RDRCgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMuZGV2Q2ZnKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnNhbWVBY3RUaW1lc0NEKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMDtcbiAgfVxuICBnZXRSYW5kb21Cb2FyZEluZGV4KCkge1xuICAgIGlmICghdGhpcy5ib2FyZENvbmZpZyB8fCAwID09PSB0aGlzLmJvYXJkQ29uZmlnLmxlbmd0aCkgcmV0dXJuIC0xO1xuICAgIGZvciAodmFyIHQgPSBbXSwgZSA9IHRoaXMuZ2V0U2FtZUFjdENEKCksIG8gPSB0aGlzLmxvY2FsRGF0YS51c2VkQWN0UGVyaW9kTGlzdC5sZW5ndGggLSAxOyBvID49IDAgJiYgZSA+IDA7IG8tLSwgZS0tKSB0LnB1c2godGhpcy5sb2NhbERhdGEudXNlZEFjdFBlcmlvZExpc3Rbb10pO1xuICAgIHJldHVybiB0aGlzLmdldEluZGV4QnlFeGNsdWRlKHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua01vZGVsX2dldElkeEJ5RXhjXCIpXG4gIGdldEluZGV4QnlFeGNsdWRlKHQpIHtcbiAgICBmb3IgKHZhciBlLCBvLCBuID0gLTEsIGEgPSAtMSwgaSA9IDA7IChuIDwgMCB8fCB0LmluY2x1ZGVzKG4pKSAmJiBpIDwgMTAwOykge1xuICAgICAgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYm9hcmRDb25maWcubGVuZ3RoKTtcbiAgICAgIG4gPSBudWxsICE9PSAobyA9IG51bGwgPT09IChlID0gdGhpcy5ib2FyZENvbmZpZ1thXSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5QZXJpb2QpICYmIHZvaWQgMCAhPT0gbyA/IG8gOiAtMTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgKGEgPCAwIHx8IGEgPj0gdGhpcy5ib2FyZENvbmZpZy5sZW5ndGgpICYmIChhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ib2FyZENvbmZpZy5sZW5ndGgpKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuICBzeW5jUGxheWVyRGF0YVRvTG9jYWwoKSB7XG4gICAgaWYgKHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhLmpvaW5BY3RJbmZvLmlzTmVlZFJlZnJlc2hSYW5rICYmIHRoaXMuX3JvYm90TG9naWMudXBkYXRlU2NvcmVUb1JhbmtMaXN0KHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSk7XG4gICAgICB2YXIgdCA9IHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLm15UmFuayA9IHQuam9pbkFjdEluZm8ucmFuaztcbiAgICAgIHRoaXMubG9jYWxEYXRhLm15U2NvcmUgPSB0LmpvaW5BY3RJbmZvLnNjb3JlO1xuICAgICAgdGhpcy5sb2NhbERhdGEubXlXaW5TdHJlYWtSYXRlID0gdC5qb2luQWN0SW5mby5jdXJyZW50V2luU3RyZWFrUmF0ZTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLm15V2luU3RyZWFrQ291bnQgPSB0LmpvaW5BY3RJbmZvLndpblN0cmVha0NvdW50O1xuICAgIH1cbiAgfVxuICBpbml0aWFsaXplKCkge1xuICAgIHZhciB0LCBlO1xuICAgIGlmICghdGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhIHx8ICh0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGEgPSB0aGlzLmNyZWF0ZVJhbmtHYW1lRGF0YSgpKTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhLnJhbmtSb2JvdENmZyB8fCAodGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhLnJhbmtSb2JvdENmZyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfUk9CT1RfTE9HSUNfUEFSQU0pKTtcbiAgICAgICAgdGhpcy5fcm9ib3RMb2dpYyA9IG5ldyBSYW5rUm9ib3RMb2dpYygpO1xuICAgICAgICB0aGlzLl9yb2JvdExvZ2ljLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5zeW5jUGxheWVyRGF0YVRvTG9jYWwoKTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhID0gdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGEsIG51bGwgPT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQucmFua0xpc3QpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmxlbmd0aDtcbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltSYW5rTW9kZWxdIOWIneWni+WMluWksei0pTogXCIgKyAodC5tZXNzYWdlIHx8IHQpKTtcbiAgICAgICAgdGhyb3cgdDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBnZXRSb2JvdExvZ2ljKCkge1xuICAgIHJldHVybiB0aGlzLl9yb2JvdExvZ2ljO1xuICB9XG4gIGdldFJhbmtHYW1lRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhO1xuICB9XG4gIGdldFJhbmtMaXN0KHQgPSBmYWxzZSkge1xuICAgIGlmICh0ICYmIHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YS5qb2luQWN0SW5mby5pc05lZWRSZWZyZXNoUmFuaykge1xuICAgICAgdGhpcy5zeW5jUGxheWVyRGF0YVRvTG9jYWwoKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSA9IHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0RmlsdGVyUmFua0xpc3QoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtNb2RlbF9maWx0ZXJMaXN0XCIpXG4gIGdldEZpbHRlclJhbmtMaXN0KCkge1xuICAgIGZvciAodmFyIHQsIGUgPSBudWxsID09PSAodCA9IHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5yYW5rTGlzdCwgbyA9IGUubGVuZ3RoIC0gMSwgbiA9IG87IG4gPj0gMDsgbi0tKSB7XG4gICAgICBpZiAoMCAhPSBlW25dLnNjb3JlKSB7XG4gICAgICAgIG8gPSBuO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzTXlTZWxmKGVbbl0uaWQpICYmIHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YS5qb2luQWN0SW5mby5zY29yZSA+IDApIHtcbiAgICAgICAgbyA9IG47XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZS5zbGljZSgwLCBvICsgMSk7XG4gIH1cbiAgZ2V0Sm9pbkFjdEluZm8oKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAodCA9IHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5qb2luQWN0SW5mbykgfHwge1xuICAgICAgcmFuazogMCxcbiAgICAgIHNjb3JlOiAwLFxuICAgICAgcGFzc0NvdW50OiAwLFxuICAgICAgd2luU3RyZWFrQ291bnQ6IDAsXG4gICAgICBjdXJyZW50V2luU3RyZWFrUmF0ZTogMSxcbiAgICAgIGlzTmVlZFJlZnJlc2hSYW5rOiBmYWxzZSxcbiAgICAgIGxldmVsQ29sbGVjdENvdW50OiAwLFxuICAgICAgdG90YWxDb2xsZWN0Q291bnQ6IDBcbiAgICB9O1xuICB9XG4gIGlzUm9ib3RTeXN0ZW1Jbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNJbml0aWFsaXplZDtcbiAgfVxuICBsZXZlbFBhc3NlZCgpIHtcbiAgICBpZiAodGhpcy5fcm9ib3RMb2dpYykgdHJ5IHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YS5qb2luQWN0SW5mby5pc05lZWRSZWZyZXNoUmFuayAmJiB0aGlzLnN5bmNQbGF5ZXJEYXRhVG9Mb2NhbCgpO1xuICAgICAgdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhLmpvaW5BY3RJbmZvLmxldmVsQ29sbGVjdENvdW50ID0gMDtcbiAgICAgIHZhciB0ID0gTm9ybWFsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgZSA9IFRpbGUyTm9ybWFsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgbyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lVHlwZSgpLFxuICAgICAgICBuID0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCA9PSBvID8gZS5nZXRSYW5rQ2FyZENvdW50KCkgOiB0LmdldFJhbmtDYXJkQ291bnQoKTtcbiAgICAgIHRoaXMuX3JvYm90TG9naWMubGV2ZWxQYXNzZWQodGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhLCBuKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLm15UmFuayA9IHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YS5qb2luQWN0SW5mby5yYW5rO1xuICAgICAgdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhID0gdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbUmFua01vZGVsXSDlhbPljaHpgJrlhbPlpITnkIblpLHotKU6IFwiICsgKHQubWVzc2FnZSB8fCB0KSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua01vZGVsX2x2RmFpbGVkXCIpXG4gIGxldmVsRmFpbGVkKCkge1xuICAgIHRoaXMucmVzZXRXaW5TdHJlYWtDb3VudCgpO1xuICAgIHRoaXMucmVzZXRMZXZlbENvbGxlY3RDb3VudCgpO1xuICB9XG4gIHJlc2V0V2luU3RyZWFrQ291bnQoKSB7XG4gICAgaWYgKHRoaXMuX3JvYm90TG9naWMpIHtcbiAgICAgIHRoaXMuX3JvYm90TG9naWMucmVzZXRXaW5TdHJlYWtDb3VudCh0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGEpO1xuICAgICAgdGhpcy5zeW5jUGxheWVyRGF0YVRvTG9jYWwoKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSA9IHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rTW9kZWxfYXV0b1VwZFwiKVxuICBjaGVja0F1dG9VcGRhdGUoKSB7XG4gICAgdmFyIHQsIGUsIG87XG4gICAgaWYgKHRoaXMuX3JvYm90TG9naWMgJiYgdGhpcy5oYXNPcGVuaW5nQWN0aXZpdHkoKSAmJiAobnVsbCA9PT0gKHQgPSB0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQucmFua0xpc3QpICYmIDAgIT09IChudWxsID09PSAobyA9IG51bGwgPT09IChlID0gdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnJhbmtMaXN0KSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmxlbmd0aCkpIHRyeSB7XG4gICAgICB0aGlzLl9yb2JvdExvZ2ljLmF1dG9VcGRSYnRTY29yZSh0aGlzKTtcbiAgICAgIHRoaXMuc3luY1BsYXllckRhdGFUb0xvY2FsKCk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGEgPSB0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGE7XG4gICAgfSBjYXRjaCAodCkge31cbiAgfVxuICBnZXRXaW5TdHJlYWtSYXRlKCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiB0aGlzLl9yb2JvdExvZ2ljID8gdGhpcy5fcm9ib3RMb2dpYy5nZXRXaW5TdHJlYWtSYXRlKChudWxsID09PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmpvaW5BY3RJbmZvKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLndpblN0cmVha0NvdW50KSB8fCAwKSA6IDE7XG4gIH1cbiAgY2FuQ2xhaW1SZXdhcmQoKSB7XG4gICAgcmV0dXJuICEoISh0aGlzLmxvY2FsRGF0YS5teVJhbmsgPiAwICYmIHRoaXMubG9jYWxEYXRhLm15UmFuayA8PSA2KSB8fCB0aGlzLmhhc0NsYWltZWQoKSkgJiYgKHZvaWQgMCA9PT0gdGhpcy5sb2NhbERhdGEuY3VyQWN0RW5kVGltZSB8fCAtMSA9PT0gdGhpcy5sb2NhbERhdGEuY3VyQWN0RW5kVGltZSB8fCB0aGlzLmlzQWN0aXZpdHlPdmVyKCkpO1xuICB9XG4gIGdldFBsYXllclJhbmtEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5teVJhbmsgPD0gMCA/IG51bGwgOiB7XG4gICAgICBpZDogXCJwbGF5ZXJcIixcbiAgICAgIHJhbms6IHRoaXMubG9jYWxEYXRhLm15UmFuayxcbiAgICAgIG5hbWU6IHRoaXMubG9jYWxEYXRhLm15TmFtZSxcbiAgICAgIGF2YXRhcklkOiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRBdmF0YXJJZCgpLFxuICAgICAgc2NvcmU6IHRoaXMubG9jYWxEYXRhLm15U2NvcmUsXG4gICAgICBhdmF0YXJGcmFtZUlkOiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRGcmFtZUlkKClcbiAgICB9O1xuICB9XG4gIGdldFJld2FyZElkQnlSYW5rKHQpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9ib3RMb2dpYyA/IHRoaXMuX3JvYm90TG9naWMuZ2V0UmV3YXJkQnlSYW5rKHQpIDogbnVsbDtcbiAgfVxuICBnZXRMZWZ0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNPcGVuaW5nQWN0aXZpdHkoKSA/IE1hdGgubWF4KDAsICh0aGlzLmxvY2FsRGF0YS5jdXJBY3RFbmRUaW1lIC0gRGF0ZS5ub3coKSkgLyAxMDAwKSA6IDA7XG4gIH1cbiAgc3luY015U2NvcmUoKSB7XG4gICAgdGhpcy5zeW5jUGxheWVyRGF0YVRvTG9jYWwoKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGEgPSB0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGE7XG4gIH1cbiAgaXNNeVNlbGYodCkge1xuICAgIHJldHVybiB0aGlzLl9yb2JvdExvZ2ljID8gdGhpcy5fcm9ib3RMb2dpYy5pc015U2VsZih0KSA6IFwicGxheWVyXCIgPT09IHQ7XG4gIH1cbiAgZ2V0UmFua0F2YXRhckFuZEZyYW1lKHQsIGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXZhdGFySWQ6IGUgPyBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRBdmF0YXJJZCgpIDogdC5hdmF0YXJJZCxcbiAgICAgIGZyYW1lSWQ6IGUgPyBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRGcmFtZUlkKCkgOiB0LmF2YXRhckZyYW1lSWRcbiAgICB9O1xuICB9XG4gIGdldFJhbmtOYW1lKHQsIGUpIHtcbiAgICByZXR1cm4gZSA/IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFVzZXJOYW1lKCkgOiB0Lm5hbWU7XG4gIH1cbiAgYWRkTGV2ZWxDb2xsZWN0Q291bnQodCA9IDIpIHtcbiAgICB2YXIgZTtcbiAgICBpZiAobnVsbCA9PT0gKGUgPSB0aGlzLmxvY2FsRGF0YS5yYW5rR2FtZURhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuam9pbkFjdEluZm8pIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YS5qb2luQWN0SW5mby5sZXZlbENvbGxlY3RDb3VudCArPSB0O1xuICAgICAgdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhID0gdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhO1xuICAgIH1cbiAgfVxuICByZXNldExldmVsQ29sbGVjdENvdW50KCkge1xuICAgIHZhciB0O1xuICAgIGlmIChudWxsID09PSAodCA9IHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5qb2luQWN0SW5mbykge1xuICAgICAgdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhLmpvaW5BY3RJbmZvLmxldmVsQ29sbGVjdENvdW50ID0gMDtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSA9IHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YTtcbiAgICB9XG4gIH1cbiAgZ2V0TGV2ZWxDb2xsZWN0Q291bnQoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIChudWxsID09PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy5sb2NhbERhdGEucmFua0dhbWVEYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmpvaW5BY3RJbmZvKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmxldmVsQ29sbGVjdENvdW50KSB8fCAwO1xuICB9XG4gIGdldFRvdGFsQ29sbGVjdENvdW50KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiAobnVsbCA9PT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5qb2luQWN0SW5mbykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS50b3RhbENvbGxlY3RDb3VudCkgfHwgMDtcbiAgfVxuICBnZXRSYW5rTGlzdENvdW50KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiAobnVsbCA9PT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5yYW5rTGlzdCkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5sZW5ndGgpIHx8IERFRkFVTFRfUk9CT1RfTE9HSUNfUEFSQU0ucm9ib3RzTnVtO1xuICB9XG59Il19
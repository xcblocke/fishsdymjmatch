"use strict";
cc._RF.push(module, '3ba12HMpyxBHr9vZ1SgD9U0', 'RankRobotConfig');
// subpackages/l_rank/Scripts/RankRobotConfig.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var RankRobotConfig = /** @class */ (function () {
    function RankRobotConfig() {
        this._robotNames = [];
        this._leaderboards = [];
        this._rewards = [];
        this._winStreaks = [];
        this.CONFIG_BASE_PATH = "config/rank/";
        this._loaded = false;
        this._lastPeriodUsedNames = new Set();
        this._currentPeriodUsedNames = new Set();
    }
    RankRobotConfig_1 = RankRobotConfig;
    Object.defineProperty(RankRobotConfig.prototype, "isLoaded", {
        get: function () {
            return this._loaded;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankRobotConfig.prototype, "robotNameCount", {
        get: function () {
            return this._robotNames.length;
        },
        enumerable: false,
        configurable: true
    });
    RankRobotConfig.getInstance = function () {
        this._instance || (this._instance = new RankRobotConfig_1());
        return this._instance;
    };
    RankRobotConfig.prototype.loadAll = function () {
        if (this._loaded)
            return true;
        try {
            this._robotNames = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.robot_name);
            this._leaderboards = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.rank_col_leader_board);
            this._rewards = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.rank_col_reward);
            this._winStreaks = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.rank_win_streak_boost);
            if (0 === this._robotNames.length || 0 === this._leaderboards.length || 0 === this._rewards.length || 0 === this._winStreaks.length) {
                console.error("[RankRobotConfig] 配置加载失败: 配置为空");
                return false;
            }
            this._loaded = true;
            return true;
        }
        catch (t) {
            console.error("[RankRobotConfig] 配置加载失败: " + (t.message || t));
            return false;
        }
    };
    RankRobotConfig.prototype.getRandomRobotName = function (t) {
        this._loaded || this.loadAll();
        if (0 === this._robotNames.length) {
            console.error("[RankRobotConfig] 机器人名字配置为空");
            return {
                name: "Bot" + Math.random(),
                index: -1
            };
        }
        var e, o = 0, n = 2 * this._robotNames.length;
        do {
            e = Math.floor(Math.random() * this._robotNames.length);
            if (++o > n) {
                do {
                    e = Math.floor(Math.random() * this._robotNames.length);
                } while (t.has(e));
                break;
            }
        } while (t.has(e) || this._lastPeriodUsedNames.has(e));
        var a = this._robotNames[e].RobotName;
        this._currentPeriodUsedNames.add(e);
        return {
            name: a,
            index: e
        };
    };
    RankRobotConfig.prototype.startNewPeriod = function () {
        this._lastPeriodUsedNames.clear();
        this._lastPeriodUsedNames = new Set(this._currentPeriodUsedNames);
        this._currentPeriodUsedNames.clear();
    };
    RankRobotConfig.prototype.getNameCDInfo = function () {
        return {
            total: this._robotNames.length,
            inCD: this._lastPeriodUsedNames.size,
            available: this._robotNames.length - this._lastPeriodUsedNames.size - this._currentPeriodUsedNames.size,
            currentUsed: this._currentPeriodUsedNames.size
        };
    };
    RankRobotConfig.prototype.resetNameCD = function () {
        this._lastPeriodUsedNames.clear();
        this._currentPeriodUsedNames.clear();
    };
    RankRobotConfig.prototype.getRewards = function () {
        return this._rewards;
    };
    RankRobotConfig.prototype.getRewardByRank = function (t) {
        var e = this.getRewards().find(function (e) {
            return e.Rank === t;
        });
        return e ? e.Reward : 0;
    };
    RankRobotConfig.prototype.getWinStreakConfig = function () {
        return 0 === this._winStreaks.length ? {
            ID: 1,
            WinStreak1: 1,
            WinStreak2: 1.5,
            WinStreak3: 2
        } : this._winStreaks[0];
    };
    RankRobotConfig.prototype.getWinStreakRates = function () {
        var t = this.getWinStreakConfig(), e = [];
        for (var o in t)
            if (o.startsWith("WinStreak")) {
                var n = o.match(/WinStreak(\d+)/);
                if (n) {
                    var a = parseInt(n[1]);
                    e.push({
                        index: a,
                        value: t[o]
                    });
                }
            }
        e.sort(function (t, e) {
            return t.index - e.index;
        });
        return e.map(function (t) {
            return t.value;
        });
    };
    RankRobotConfig.prototype.getWinStreakRate = function (t) {
        var e = this.getWinStreakRates();
        if (0 === e.length)
            return 1;
        var o = Math.min(t - 1, e.length - 1);
        return e[Math.max(0, o)] || 1;
    };
    RankRobotConfig.prototype.clear = function () {
        this._robotNames = [];
        this._leaderboards = [];
        this._rewards = [];
        this._winStreaks = [];
        this._loaded = false;
        this._lastPeriodUsedNames.clear();
        this._currentPeriodUsedNames.clear();
    };
    var RankRobotConfig_1;
    RankRobotConfig._instance = null;
    __decorate([
        mj.traitEvent("RankRobotCfg_getRewards")
    ], RankRobotConfig.prototype, "getRewards", null);
    __decorate([
        mj.traitEvent("RankRobotCfg_winRates")
    ], RankRobotConfig.prototype, "getWinStreakRates", null);
    RankRobotConfig = RankRobotConfig_1 = __decorate([
        mj.class("RankRobotConfigLoader")
    ], RankRobotConfig);
    return RankRobotConfig;
}());
exports.default = RankRobotConfig;

cc._RF.pop();
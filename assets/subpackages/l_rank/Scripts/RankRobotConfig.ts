import { DataReader } from '../../../Scripts/framework/data/DataReader';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
@mj.class("RankRobotConfigLoader")
export default class RankRobotConfig {
  _robotNames = [];
  _leaderboards = [];
  _rewards = [];
  _winStreaks = [];
  CONFIG_BASE_PATH = "config/rank/";
  _loaded = false;
  _lastPeriodUsedNames = new Set();
  _currentPeriodUsedNames = new Set();
  static _instance = null;
  get isLoaded() {
    return this._loaded;
  }
  get robotNameCount() {
    return this._robotNames.length;
  }
  static getInstance() {
    this._instance || (this._instance = new RankRobotConfig());
    return this._instance;
  }
  loadAll() {
    if (this._loaded) return true;
    try {
      this._robotNames = DataReader.getList(ConfigType.robot_name);
      this._leaderboards = DataReader.getList(ConfigType.rank_col_leader_board);
      this._rewards = DataReader.getList(ConfigType.rank_col_reward);
      this._winStreaks = DataReader.getList(ConfigType.rank_win_streak_boost);
      if (0 === this._robotNames.length || 0 === this._leaderboards.length || 0 === this._rewards.length || 0 === this._winStreaks.length) {
        console.error("[RankRobotConfig] 配置加载失败: 配置为空");
        return false;
      }
      this._loaded = true;
      return true;
    } catch (t) {
      console.error("[RankRobotConfig] 配置加载失败: " + (t.message || t));
      return false;
    }
  }
  getRandomRobotName(t) {
    this._loaded || this.loadAll();
    if (0 === this._robotNames.length) {
      console.error("[RankRobotConfig] 机器人名字配置为空");
      return {
        name: "Bot" + Math.random(),
        index: -1
      };
    }
    var e,
      o = 0,
      n = 2 * this._robotNames.length;
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
  }
  startNewPeriod() {
    this._lastPeriodUsedNames.clear();
    this._lastPeriodUsedNames = new Set(this._currentPeriodUsedNames);
    this._currentPeriodUsedNames.clear();
  }
  getNameCDInfo() {
    return {
      total: this._robotNames.length,
      inCD: this._lastPeriodUsedNames.size,
      available: this._robotNames.length - this._lastPeriodUsedNames.size - this._currentPeriodUsedNames.size,
      currentUsed: this._currentPeriodUsedNames.size
    };
  }
  resetNameCD() {
    this._lastPeriodUsedNames.clear();
    this._currentPeriodUsedNames.clear();
  }
  @mj.traitEvent("RankRobotCfg_getRewards")
  getRewards() {
    return this._rewards;
  }
  getRewardByRank(t) {
    var e = this.getRewards().find(function (e) {
      return e.Rank === t;
    });
    return e ? e.Reward : 0;
  }
  getWinStreakConfig() {
    return 0 === this._winStreaks.length ? {
      ID: 1,
      WinStreak1: 1,
      WinStreak2: 1.5,
      WinStreak3: 2
    } : this._winStreaks[0];
  }
  @mj.traitEvent("RankRobotCfg_winRates")
  getWinStreakRates() {
    var t = this.getWinStreakConfig(),
      e = [];
    for (var o in t) if (o.startsWith("WinStreak")) {
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
  }
  getWinStreakRate(t) {
    var e = this.getWinStreakRates();
    if (0 === e.length) return 1;
    var o = Math.min(t - 1, e.length - 1);
    return e[Math.max(0, o)] || 1;
  }
  clear() {
    this._robotNames = [];
    this._leaderboards = [];
    this._rewards = [];
    this._winStreaks = [];
    this._loaded = false;
    this._lastPeriodUsedNames.clear();
    this._currentPeriodUsedNames.clear();
  }
}
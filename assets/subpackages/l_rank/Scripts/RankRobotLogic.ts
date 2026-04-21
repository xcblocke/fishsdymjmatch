import UserInfoManager from '../../../Scripts/gamePlay/base/user/UserInfoManager';
import RankRobotConfig from './RankRobotConfig';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
export var DEFAULT_ROBOT_COUNT = 49;
export var DEFAULT_ROBOT_LOGIC_PARAM = {
  robotsNum: DEFAULT_ROBOT_COUNT,
  baseLevelConst: 7,
  minPoint: 2,
  rankThreshold: 10,
  rewardLimit: 3.6,
  timeThreshold: 0.6,
  intervalThreshold: 3600,
  initialBotsMin: 5,
  botsChasingLevel: 5,
  logBase: 2
};
@mj.class("RankRobotLogic")
export default class RankRobotLogic {
  _covertMap = new Map();
  _winStreakStrategies = [1, 1.5, 2];
  _lastWinStreakCount = 0;
  _configLoader = null;
  get configLoader() {
    this._configLoader || (this._configLoader = RankRobotConfig.getInstance());
    this._configLoader.isLoaded || this.loadConfig();
    return this._configLoader;
  }
  get nowTime() {
    return Date.now();
  }
  initialize() {
    this._configLoader = RankRobotConfig.getInstance();
  }
  @mj.traitEvent("RankRbtLgc_loadConfig")
  loadConfig() {
    this._configLoader.loadAll();
    if (this._configLoader.isLoaded) {
      this._winStreakStrategies = this._configLoader.getWinStreakRates();
    } else {
      console.error("[RankRobotLogic] 配置加载失败");
    }
  }
  activeNewActivity(t, e) {
    try {
      this.initRanks(t, e);
      this.initScore(t);
      this.startNewPeriod();
      t.rankList;
    } catch (t) {
      console.error("[RankRobotLogic] 激活新活动失败: " + (t.message || t));
    }
  }
  @mj.traitEvent("RankRbtLgc_initRanks")
  initRanks(t, e) {
    var o = t.rankRobotCfg;
    this._covertMap.clear();
    if (t) {
      t.expectationBase = this.calcPBase(o, e);
      t.lastUpdateTime = this.nowTime;
      t.joinActInfo = {
        rank: 0,
        score: 0,
        passCount: 0,
        winStreakCount: 0,
        currentWinStreakRate: 1,
        isNeedRefreshRank: false,
        levelCollectCount: 0,
        totalCollectCount: 0
      };
      t.rankList = [];
      for (var n = UserInfoManager.getInstance(), i = new Set(), r = 0; r < o.robotsNum; r++) {
        var s = n.getRandomAvatarId(),
          c = n.getRandomFrameId(),
          d = this.getRandomRobotName(i),
          p = d.name,
          u = d.index;
        i.add(u);
        t.rankList.push({
          id: "r" + (r + 1),
          rank: r + 1,
          name: p,
          avatarId: s,
          score: 0,
          avatarFrameId: c
        });
        this._covertMap.set("r" + (r + 1), 0);
      }
      var h = UserModel.getInstance();
      t.rankList.push({
        id: "player",
        rank: o.robotsNum + 1,
        name: h.getUserName(),
        avatarId: h.getAvatarId(),
        score: 0,
        avatarFrameId: h.getFrameId()
      });
      this._covertMap.set("player", 0);
    }
  }
  @mj.traitEvent("RankRbtLgc_initScore")
  initScore(t) {
    if (t && t.rankList.length) for (var e = t.rankRobotCfg, o = this.initBotCnt(e.robotsNum, e.initialBotsMin), n = 0; n < e.robotsNum; n++) {
      var a = n < o ? e.minPoint : 0,
        i = n < o ? e.minPoint : 0;
      t.rankList[n].score = a;
      t.rankList[n].rank = n + 1;
      this._covertMap.set(t.rankList[n].id, i);
    }
  }
  @mj.traitEvent("RankRbtLgc_initBotCnt")
  initBotCnt(t, e) {
    return Math.floor(Math.random() * (t - e)) + e;
  }
  @mj.traitEvent("RankRbtLgc_calcPBase")
  calcPBase(t, e) {
    return !t || !e || e <= 0 ? 0 : 2 * (Math.floor(t.baseLevelConst - Math.log10(e)) + t.minPoint / 2);
  }
  @mj.traitEvent("RankRbtLgc_levelPassed")
  levelPassed(t, e) {
    if (t) {
      t.joinActInfo.winStreakCount++;
      t.joinActInfo.totalCollectCount += e;
      var o = this.getWinStreakRate(t.joinActInfo.winStreakCount);
      t.joinActInfo.currentWinStreakRate = o;
      var n = Math.floor(e * o),
        a = 0 === t.joinActInfo.passCount;
      this.updateScore(t, n, a);
    }
  }
  resetWinStreakCount(t) {
    if (t) {
      this._lastWinStreakCount = 0;
      t.joinActInfo.winStreakCount;
      t.joinActInfo.winStreakCount = 0;
      t.joinActInfo.currentWinStreakRate = 1;
    }
  }
  resumeLastWinStreak(t) {
    if (t) {
      t.joinActInfo.winStreakCount = this._lastWinStreakCount;
      if (this._lastWinStreakCount >= 3) {
        t.joinActInfo.currentWinStreakRate = this._winStreakStrategies[2];
      } else {
        if (2 === this._lastWinStreakCount) {
          t.joinActInfo.currentWinStreakRate = this._winStreakStrategies[1];
        } else {
          t.joinActInfo.currentWinStreakRate = this._winStreakStrategies[0];
        }
      }
    }
  }
  updateScore(t, e, o) {
    if (t) {
      t.joinActInfo.passCount++;
      t.joinActInfo.score += e;
      t.joinActInfo.isNeedRefreshRank = true;
      this.updRbtScore(t, o, e);
    }
  }
  updateScoreToRankList(t) {
    if (t) {
      for (var e = 0; e < t.rankList.length; e++) {
        var o = t.rankList[e];
        if (this.isMySelf(o.id)) {
          o.score = t.joinActInfo.score;
          break;
        }
      }
      this.sortRankList(t);
      this.updateRankAfterSort(t);
      t.joinActInfo.isNeedRefreshRank = false;
    }
  }
  updateRankAfterSort(t) {
    if (null != t) for (var e = 0; e < t.rankList.length; e++) {
      t.rankList[e].rank = e + 1;
      if (this.isMySelf(t.rankList[e].id)) {
        t.joinActInfo.rank = e + 1;
        t.rankList[e].name = UserModel.getInstance().getUserName();
      }
    }
  }
  sortRankList(t) {
    var e = this;
    if (t && t.rankList) {
      this.sortByScore(t);
      var o = t.rankList.findIndex(function (t) {
        return e.isMySelf(t.id);
      });
      if (-1 !== o) {
        var n = t.rankList[o].score,
          a = this.getSameScoreRange(o, n, t),
          i = a.sameScoreStart,
          r = a.sameScoreEnd;
        i !== r && this.updateRankForSameScore(t, o, n, i, r);
      }
    }
  }
  updateRankForSameScore(t, e, o, n, a) {
    var i = n + 1,
      r = this.getTargetIdx(i, o, n, a);
    if (e !== r) {
      var s = t.rankList.splice(e, 1)[0];
      t.rankList.splice(r, 0, s);
    }
  }
  @mj.traitEvent("RankRbtLgc_sortByScore")
  sortByScore(t) {
    t && t.rankList && t.rankList.sort(function (t, e) {
      return e.score - t.score;
    });
  }
  @mj.traitEvent("RankRbtLgc_getTargetIdx")
  getTargetIdx(t, e, o, n) {
    return t < 6 || 0 == e ? o : n;
  }
  getSameScoreRange(t, e, o) {
    for (var n = t, a = t; n > 0 && o.rankList[n - 1].score === e;) n--;
    for (; a < o.rankList.length - 1 && o.rankList[a + 1].score === e;) a++;
    return {
      sameScoreStart: n,
      sameScoreEnd: a
    };
  }
  @mj.traitEvent("RankRbtLgc_fstPassScore")
  fstPassScore(t, e, o = 0) {
    var n = t.rankRobotCfg,
      a = 2 * (t.expectationBase / this.getR(t.rankRobotCfg.robotsNum, t, e) + n.minPoint / 2),
      i = Math.floor(a);
    if (e <= 6 && o > 0) {
      var r = Math.max(n.minPoint, o - 2),
        s = o + 2;
      a = (i = Math.floor(Math.random() * (s - r + 1)) + r) + Math.random();
    }
    return {
      score: i,
      covert: a
    };
  }
  @mj.traitEvent("RankRbtLgc_getR")
  getR(t, e, o) {
    var n = e.rankRobotCfg,
      a = e.expectationBase;
    return o <= n.rankThreshold && o >= 1 ? Math.random() * (a / n.rewardLimit - 1) + 1 : o <= (t - n.rankThreshold) / 2 + n.rankThreshold && o >= 11 ? Math.random() * (a - a / n.rewardLimit) + a / n.rewardLimit : Math.random() * (t - a) + a;
  }
  @mj.traitEvent("RankRbtLgc_fix3PtBots")
  fix3PtBots(t) {
    if (t) {
      for (var e = t.rankRobotCfg, o = [], n = t.joinActInfo.score, a = 0; a < t.rankList.length; a++) {
        var i = t.rankList[a];
        3 === i.score && i.score !== n && o.push(a);
      }
      if (0 !== o.length) {
        o.sort(function () {
          return Math.random() - 0.5;
        });
        var r = Math.ceil(0.5 * o.length);
        for (a = 0; a < o.length; a++) {
          var s,
            l = o[a];
          s = a < r ? e.initialBotsMin : Math.floor(11 * Math.random()) + 5;
          t.rankList[l].score = s;
          this._covertMap.set(t.rankList[l].id, s + Math.random());
        }
      }
    }
  }
  @mj.traitEvent("RankRbtLgc_othPassScore")
  othPassScore(t, e, o, n, a, i) {
    var r = t.rankRobotCfg,
      s = 0,
      l = 0,
      c = o;
    l = e > t.joinActInfo.rank && t.joinActInfo.passCount < r.baseLevelConst + r.botsChasingLevel ? (0 === a ? t.joinActInfo.score : a) - n + i : Math.abs(t.joinActInfo.rank - e) / (t.joinActInfo.passCount + 50 / r.minPoint);
    c += Math.random() * l;
    if (3 === (s = Math.floor(c)) || s < 2) {
      var d = [2, 4, 5, 6, 7, 8];
      c = (s = d[Math.floor(Math.random() * d.length)]) + Math.random();
    }
    return {
      score: s,
      covert: c
    };
  }
  @mj.traitEvent("RankRbtLgc_updRbtScore")
  updRbtScore(t, e, o) {
    var n = this;
    if (t) {
      for (var a = t.rankList.findIndex(function (t) {
          return n.isMySelf(t.id);
        }), i = t.joinActInfo.score, r = t.rankList.length - 1; r >= 0; r--) if (r !== a) {
        var s,
          l = t.rankList[r].rank,
          c = t.rankList[r],
          d = this._covertMap.get(c.id) || c.score,
          p = r > 0 && r - 1 !== a ? t.rankList[r - 1].score : r - 1 === a && r > 1 ? t.rankList[r - 2].score : 0;
        s = e ? this.fstPassScore(t, l, i) : this.othPassScore(t, l, d, c.score, p, o);
        c.score = s.score;
        this._covertMap.set(c.id, s.covert);
      }
      e && this.fix3PtBots(t);
      this.sortRankList(t);
      t.lastUpdateTime = this.nowTime;
      for (var u = t.rankList.find(function (t) {
        return n.isMySelf(t.id);
      }); t.rankList.length > t.rankRobotCfg.robotsNum + 1;) {
        var h = t.rankList[t.rankList.length - 1];
        if (this.isMySelf(h.id)) break;
        this._covertMap.delete(h.id);
        t.rankList.pop();
      }
      for (r = 0; r < t.rankList.length; r++) t.rankList[r].rank = r + 1;
      if (u) {
        var f = t.rankList.findIndex(function (t) {
          return n.isMySelf(t.id);
        });
        -1 !== f && (t.joinActInfo.rank = f + 1);
      }
    }
  }
  @mj.traitEvent("RankRbtLgc_autoUpdScore")
  autoUpdRbtScore(t) {
    if (t.localData.rankGameData) {
      var e = t.localData.rankGameData;
      if (e && e.rankRobotCfg) {
        var o = e.rankRobotCfg,
          n = this.nowTime - e.lastUpdateTime,
          a = 1000 * o.intervalThreshold,
          i = 86400000 * o.timeThreshold,
          r = t.getLeftTime();
        n > a && 1000 * r > i && this.updRbtScore(e, false, 0);
      }
    }
  }
  startNewPeriod() {
    this.configLoader.startNewPeriod();
  }
  getRandomRobotName(t) {
    return this.configLoader.isLoaded ? this.configLoader.getRandomRobotName(t) : {
      name: "Bot" + Math.random(),
      index: -1
    };
  }
  getRewardByRank(t) {
    if (this.configLoader.isLoaded) {
      var e = this.configLoader.getRewardByRank(t);
      if (e > 0) return DataReader.getByKey(ConfigType.reward_config, e);
    }
    return null;
  }
  getWinStreakRate(t) {
    if (t <= 0) return 1;
    if (this.configLoader.isLoaded) return this._configLoader.getWinStreakRate(t);
    if (0 === this._winStreakStrategies.length) return 1;
    var e = Math.min(t - 1, this._winStreakStrategies.length - 1);
    return this._winStreakStrategies[Math.max(0, e)] || 1;
  }
  getWinStreakRateLevel(t) {
    if (0 === this._winStreakStrategies.length || t <= 0) return 0;
    var e = Math.min(t - 1, this._winStreakStrategies.length - 1);
    return Math.max(0, e);
  }
  isMySelf(t) {
    return "player" === t;
  }
}
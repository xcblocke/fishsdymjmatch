import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("RankChasing2Trait")
export default class RankChasing2Trait extends Trait {
  static traitKey = "RankChasing2";
  onLoad() {
    super.onLoad.call(this);
    try {
      this.initLocalDataDefaults();
    } catch (t) {
      console.error("[" + RankChasing2Trait.traitKey + "] 加载失败: " + ((null == t ? void 0 : t.message) || t));
    }
  }
  @mj.traitEvent("RkChasing2_baseCfg")
  getBaseConfig() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.baseConfig) || {
      botsNum: 50,
      gradCoef: 0.018
    };
  }
  @mj.traitEvent("RkChasing2_activeCfg")
  getActiveConfig() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.activeConfig) || {
      expGamesDefault: 11,
      activeDaysCount: 2,
      expGamesActiveBase: 1.8,
      expGamesActiveOffset: 6.5
    };
  }
  @mj.traitEvent("RkChasing2_jumpCfg")
  getJumpConfig() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.jumpConfig) || {
      jumpCoef: 0.4,
      jumpOffsetX: 1,
      jumpOffsetY: 0.2
    };
  }
  @mj.traitEvent("RkChasing2_pointsCfg")
  getPointsConfig() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.pointsConfig) || {
      initPoints: {
        0: 4,
        2: 3,
        4: 3
      },
      addPointsTop: {
        2: 3,
        3: 2,
        4: 5,
        6: 3,
        8: 1
      },
      stagPoints: {
        0: 1,
        2: 1
      }
    };
  }
  @mj.traitEvent("RkChasing2_chasingCfg")
  getChasingConfig() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.chasingConfig) || {
      botChasingCount: 5,
      botChasingInterval: 4,
      chasingBotsMaxPoint: 6
    };
  }
  @mj.traitEvent("RkChasing2_timeCfg")
  getTimeConfig() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.timeConfig) || {
      stagTimeInterval: 3600,
      stagTimeControl: 0.6,
      periodTime: 86400
    };
  }
  initLocalDataDefaults() {
    this.localData.activityStartTime || (this.localData.activityStartTime = 0);
    this.localData.botPointMaxMap || (this.localData.botPointMaxMap = {});
    this.localData.clearLevels || (this.localData.clearLevels = 0);
    this.localData.timeRefresh || (this.localData.timeRefresh = 0);
    this.localData.cachedExpGames || (this.localData.cachedExpGames = 0);
  }
  onRankRbtLgc_levelPassed(t, a) {
    this.localData.timeRefresh = Date.now();
    this.localData.clearLevels = (this.localData.clearLevels || 0) + 1;
    a();
  }
  onRankRbtLgc_initScore(t, a) {
    var r, o, i, s;
    try {
      var l = t.args[0],
        f = t.ins;
      if (!(null == l ? void 0 : l.rankList)) {
        a();
        return;
      }
      var u = this.getPointsConfig(),
        h = l.rankList;
      this.localData.activityStartTime = l.actStartTime || 0;
      this.localData.botPointMaxMap = {};
      this.localData.clearLevels = 0;
      this.localData.timeRefresh = 0;
      try {
        for (var p = __values(h), d = p.next(); !d.done; d = p.next()) {
          var g = d.value;
          f.isMySelf(g.id) || (g.score = this.weightedRandom(u.initPoints));
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          d && !d.done && (o = p.return) && o.call(p);
        } finally {
          if (r) throw r.error;
        }
      }
      f.sortRankList(l);
      f.updateRankAfterSort(l);
      this.localData.botPointMaxMap = {};
      try {
        for (var v = __values(h), y = v.next(); !y.done; y = v.next()) {
          g = y.value;
          f.isMySelf(g.id) || (this.localData.botPointMaxMap[g.id] = this.calculateBotPointMax(g.rank));
        }
      } catch (t) {
        i = {
          error: t
        };
      } finally {
        try {
          y && !y.done && (s = v.return) && s.call(v);
        } finally {
          if (i) throw i.error;
        }
      }
      this.localData.cachedExpGames = this.calculateExpGames();
      this.localData.botPointMaxMap = this.localData.botPointMaxMap;
      a({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } catch (t) {
      console.error("[" + RankChasing2Trait.traitKey + "] 初始化积分失败: " + ((null == t ? void 0 : t.message) || t));
      a();
    }
  }
  onRankRbtLgc_updRbtScore(t, a) {
    try {
      var r = t.args[0],
        o = t.args[1],
        i = t.args[2] || 0,
        n = t.ins;
      if (!(null == r ? void 0 : r.rankList) || 0 == r.rankList.length) {
        a();
        return;
      }
      if (o) {
        this.handleFirstPass(n, r, i);
      } else {
        this.handleSubsequentPass(n, r, i);
      }
      a({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } catch (t) {
      console.error("[" + RankChasing2Trait.traitKey + "] 通关处理失败: " + ((null == t ? void 0 : t.message) || t));
      a();
    }
  }
  onRankRbtLgc_autoUpdScore(t, a) {
    var r, o;
    try {
      var i = t.args[0],
        n = t.ins,
        s = null === (r = null == i ? void 0 : i.localData) || void 0 === r ? void 0 : r.rankGameData,
        l = null == s ? void 0 : s.rankList;
      if (!l || 0 == l.length) {
        a();
        return;
      }
      var f = this.getTimeConfig(),
        u = Date.now(),
        h = this.localData.timeRefresh || 0,
        p = 1000 * ((null === (o = i.getLeftTime) || void 0 === o ? void 0 : o.call(i)) || 0),
        d = h > 0 && u - h > 1000 * f.stagTimeInterval,
        g = p > f.stagTimeControl * f.periodTime * 1000;
      if (d && g) {
        this.handleStagScore(n, l, 0, false);
        this.localData.timeRefresh = Date.now();
        n.sortRankList(s);
        n.updateRankAfterSort(s);
      }
      a({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } catch (t) {
      console.error("[" + RankChasing2Trait.traitKey + "] 自动更新失败: " + ((null == t ? void 0 : t.message) || t));
      a();
    }
  }
  handleFirstPass(t, a) {
    var e,
      r,
      o = this.getJumpConfig(),
      i = a.rankList,
      s = this.localData.botPointMaxMap || {};
    try {
      for (var l = __values(i), c = l.next(); !c.done; c = l.next()) {
        var f = c.value;
        if (!t.isMySelf(f.id)) {
          var u = s[f.id] || this.calculateBotPointMax(f.rank),
            h = (f.score, Math.floor(u * (o.jumpCoef / (f.rank + o.jumpOffsetX) + o.jumpOffsetY)));
          h < 2 && (h = 2);
          3 === h && h++;
          f.score += h;
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        c && !c.done && (r = l.return) && r.call(l);
      } finally {
        if (e) throw e.error;
      }
    }
    t.sortRankList(a);
    t.updateRankAfterSort(a);
  }
  handleSubsequentPass(t, a, e) {
    var r = a.rankList,
      o = this.getActiveConfig(),
      i = this.getBaseConfig(),
      n = this.localData.cachedExpGames || o.expGamesDefault,
      s = this.localData.clearLevels || 0,
      l = r.find(function (a) {
        return t.isMySelf(a.id);
      }),
      c = (null == l ? void 0 : l.rank) || i.botsNum + 1,
      f = (null == l ? void 0 : l.score) || 0,
      u = n - s;
    if (u > 0) {
      var h = Math.floor(c / u);
      this.handleNormalChasing(t, r, c, f, h, e);
    } else this.handleAdvancedChasing(t, r, c, f, e, n, s);
    t.sortRankList(a);
    t.updateRankAfterSort(a);
  }
  handleNormalChasing(t, a, e, r, o, i) {
    var s,
      l,
      c = this.getChasingConfig(),
      f = this.getPointsConfig(),
      u = this.localData.botPointMaxMap || {};
    try {
      for (var h = __values(a), p = h.next(); !p.done; p = h.next()) {
        var d = p.value;
        if (!t.isMySelf(d.id)) {
          d.score;
          if (d.rank > e) {
            var g = r - d.score;
            (y = Math.floor(Math.random() * (g + i + 1))) < 2 && (y = 0);
            y > c.chasingBotsMaxPoint && (y = c.chasingBotsMaxPoint - 2);
            d.score += y;
          } else if (d.rank >= e - o) {
            g = d.score - r;
            (y = Math.floor(Math.random() * (g + 1))) < 2 && (y = 0);
            d.score += y;
          } else {
            var v = u[d.id] || 0;
            if (d.score < v) {
              var y = this.weightedRandom(f.addPointsTop);
              d.score += y;
            }
          }
        }
      }
    } catch (t) {
      s = {
        error: t
      };
    } finally {
      try {
        p && !p.done && (l = h.return) && l.call(h);
      } finally {
        if (s) throw s.error;
      }
    }
  }
  handleAdvancedChasing(t, a, e, r, o, i, n) {
    var s = this.getChasingConfig(),
      l = i - n,
      c = Math.floor(-l / (s.botChasingCount + s.botChasingInterval));
    if (n < (s.botChasingCount + s.botChasingInterval) * c + i + s.botChasingCount) {
      var f = Math.floor(e / Math.max(1, -l));
      this.handleNormalChasing(t, a, e, r, f, o);
    } else this.handleStagScore(t, a, r, true);
  }
  handleStagScore(t, a, e, r) {
    var o,
      i,
      s = this.getPointsConfig();
    try {
      for (var l = __values(a), c = l.next(); !c.done; c = l.next()) {
        var f = c.value;
        if (!t.isMySelf(f.id)) {
          var u = this.weightedRandom(s.stagPoints);
          r && f.score + u > e && (u = 0);
          f.score += u;
        }
      }
    } catch (t) {
      o = {
        error: t
      };
    } finally {
      try {
        c && !c.done && (i = l.return) && i.call(l);
      } finally {
        if (o) throw o.error;
      }
    }
  }
  getRankRecordLevelTrait() {
    var t = mj.getClassByName("RankRecordLevelTrait");
    return t ? t.getInstance() : null;
  }
  calculateExpGames() {
    var t = this.getActiveConfig(),
      a = this.getPastDaysPassCount(t.activeDaysCount),
      e = this.getActiveDays(t.activeDaysCount);
    if (e < 1) return t.expGamesDefault;
    var r = a / e;
    return Math.floor(Math.log(r) / Math.log(t.expGamesActiveBase) + t.expGamesActiveOffset) + 1;
  }
  getPastDaysPassCount(t) {
    var a,
      e = this.getRankRecordLevelTrait();
    if (!e) return 1;
    var r = (null === (a = e.getDailyPassCounts) || void 0 === a ? void 0 : a.call(e)) || [],
      o = e.getLastUpdateZeroTimeMS(),
      i = r.length;
    if (0 === i || !o) return 1;
    for (var n = 0, s = o === new Date().setHours(0, 0, 0, 0) ? i - 2 : i - 1, l = 0; s >= 0 && l < t; s--, l++) n += r[s];
    return Math.max(1, n);
  }
  getActiveDays(t) {
    var a,
      e = this.getRankRecordLevelTrait();
    if (!e) return 0;
    var r = (null === (a = e.getDailyPassCounts) || void 0 === a ? void 0 : a.call(e)) || [],
      o = e.getLastUpdateZeroTimeMS(),
      i = r.length;
    if (0 === i || !o) return 0;
    for (var n = o === new Date().setHours(0, 0, 0, 0) ? i - 2 : i - 1, s = Math.max(0, n - t + 1), l = 0, c = n; c >= s; c--) r[c] > 0 && l++;
    return l;
  }
  calculateBotPointMax(t) {
    var a = this.getBaseConfig();
    return Math.floor(a.gradCoef * Math.pow(a.botsNum - t, 2));
  }
  weightedRandom(t) {
    var a,
      e,
      r = Object.entries(t),
      o = r.reduce(function (t, a) {
        return t + __read(a, 2)[1];
      }, 0),
      i = Math.random() * o;
    try {
      for (var l = __values(r), c = l.next(); !c.done; c = l.next()) {
        var f = __read(c.value, 2),
          u = f[0];
        if ((i -= f[1]) <= 0) return Number(u);
      }
    } catch (t) {
      a = {
        error: t
      };
    } finally {
      try {
        c && !c.done && (e = l.return) && e.call(l);
      } finally {
        if (a) throw a.error;
      }
    }
    return Number(r[0][0]);
  }
}
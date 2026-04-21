import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("RankDynScoreTrait")
export default class RankDynScoreTrait extends Trait {
  config = null;
  static traitKey = "RankDynScore";
  onLoad() {
    var e, n, a;
    super.onLoad.call(this);
    try {
      this.config = {
        activeDaysCount: (null === (e = this._traitData.config) || void 0 === e ? void 0 : e.activeDaysCount) || 3,
        dynamicLogBase: (null === (n = this._traitData.config) || void 0 === n ? void 0 : n.dynamicLogBase) || 1.8,
        dynamicDecayedLogBase: (null === (a = this._traitData.config) || void 0 === a ? void 0 : a.dynamicDecayedLogBase) || 3.6
      };
      this.cleanupOldData(this.config.activeDaysCount);
    } catch (t) {
      console.error("[" + RankDynScoreTrait.traitKey + "] 加载失败: " + (t.message || t));
    }
  }
  onGameMod_modifyWin(t, e) {
    try {
      this.recordPassToday();
    } catch (t) {
      console.error("[" + RankDynScoreTrait.traitKey + "] 记录通关失败: " + (t.message || t));
    } finally {
      e();
    }
  }
  onRankRbtLgc_fstPassScore(t, e) {
    try {
      var n = t.args[0],
        a = t.args[1],
        i = t.args[2] || 0;
      if (!n || !n.rankRobotCfg) {
        e();
        return;
      }
      var r = n.rankRobotCfg,
        s = 2 * (n.expectationBase / this.getR(n.rankRobotCfg.robotsNum, n, a, r) + r.minPoint / 2),
        l = Math.floor(s);
      if (a <= 6 && i > 0) {
        var c = Math.max(r.minPoint, i - 2),
          d = i + 2;
        s = (l = Math.floor(Math.random() * (d - c + 1)) + c) + Math.random();
      }
      var p = this.calculateActivityGap(this.config.activeDaysCount, r.baseLevelConst),
        u = r.rankThreshold || 10,
        h = Math.floor((50 - u) / 2) + u,
        f = 0;
      if (a >= 1 && a <= u) {
        f = p >= 0 ? Math.log(1 + p) / Math.log(this.config.dynamicLogBase) : -Math.log(1 - p) / Math.log(this.config.dynamicLogBase);
      } else {
        a > u && a <= h && (f = p >= 0 ? Math.log(1 + p) / Math.log(this.config.dynamicDecayedLogBase) : -Math.log(1 - p) / Math.log(this.config.dynamicDecayedLogBase));
      }
      if (0 !== f) {
        s += f;
        if ((l = Math.floor(s)) < r.minPoint) {
          l = r.minPoint;
          s = r.minPoint + Math.random();
        }
      }
      var m = {
        score: l,
        covert: s
      };
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: m
      });
    } catch (t) {
      console.error("[" + RankDynScoreTrait.traitKey + "] 调整首次通关积分失败: " + (t.message || t));
      e();
    }
  }
  getR(t, e, o, n) {
    var a = e.expectationBase;
    return o <= n.rankThreshold && o >= 1 ? Math.random() * (a / n.rewardLimit - 1) + 1 : o <= (t - n.rankThreshold) / 2 + n.rankThreshold && o >= 11 ? Math.random() * (a - a / n.rewardLimit) + a / n.rewardLimit : Math.random() * (t - a) + a;
  }
  recordPassToday() {
    var t = this.localData,
      e = new Date();
    e.setHours(0, 0, 0, 0);
    var o = e.getTime(),
      n = t.lastUpdateZeroTimeMS || 0;
    t.dailyPassCounts || (t.dailyPassCounts = []);
    var a = t.dailyPassCounts.length;
    if (0 == a || n !== o) t.dailyPassCounts.push(1);else {
      t.dailyPassCounts[a - 1]++;
      t.dailyPassCounts[a - 1];
    }
    t.lastUpdateZeroTimeMS = o;
    this.localData.lastUpdateZeroTimeMS = this.localData.lastUpdateZeroTimeMS || 0;
    this.localData.dailyPassCounts = this.localData.dailyPassCounts || [];
  }
  getPastDaysPassCount(t, e) {
    var o,
      n = 0,
      a = new Date();
    a.setHours(0, 0, 0, 0);
    var i = a.getTime(),
      r = 0,
      s = (null === (o = t.dailyPassCounts) || void 0 === o ? void 0 : o.length) || 0;
    if (0 == s || 0 == t.lastUpdateZeroTimeMS) return 0;
    var l = s - 1;
    t.lastUpdateZeroTimeMS && i == t.lastUpdateZeroTimeMS && l--;
    if (l >= 0) for (var c = l; c >= 0; c--) {
      n += t.dailyPassCounts[c];
      if (++r == e) break;
    }
    return n;
  }
  calculateActivityGap(t, e) {
    var o = this.localData;
    return !o.dailyPassCounts || o.dailyPassCounts.length <= 1 ? 0 : this.getPastDaysPassCount(o, t) / t - e;
  }
  cleanupOldData(t) {
    var e,
      o = (null === (e = this.localData.dailyPassCounts) || void 0 === e ? void 0 : e.length) || 0;
    if (!(o <= t)) {
      var n = o - t;
      this.localData.dailyPassCounts.splice(0, n);
      this.localData.dailyPassCounts = this.localData.dailyPassCounts;
    }
  }
}
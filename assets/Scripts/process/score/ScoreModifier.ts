import { BaseCoreObject } from '../../BaseCoreObject';
import UserModel from '../../gamePlay/user/UserModel';
export class ScoreModifier extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  @mj.traitEvent("ScoreMod_setlmTmRt")
  getSettlementTimeRate() {
    return {
      minRatio: 0.5,
      maxRatio: 2
    };
  }
  @mj.traitEvent("ScoreMod_setlmWRt")
  getSettlementWRate() {
    return 1;
  }
  calSettlementScore(e = 0, t?) {
    var o,
      n = this.context.getGameData(),
      i = n.getScore(),
      r = n.getCurLevelComboMaxLimit(),
      a = this.getSettlementTimeRate(),
      l = a.minRatio,
      s = a.maxRatio;
    if (t && t > 0) {
      var c = t / Math.max(e, 0.1);
      o = 45 * r * Math.max(l, Math.min(s, c));
    } else {
      c = 1.25 * r / Math.max(e, 0.1);
      o = 45 * r * Math.max(l, Math.min(s, c));
    }
    var u = this.getSettlementWRate(),
      p = (o = Math.floor(o * u)) + i,
      f = i,
      d = 2 * i,
      h = Math.max(f, Math.min(d, p)),
      y = Math.floor(h);
    n.setSettlementScore(y);
    return y;
  }
  getPerfectMaxScore() {
    var e = this.getBaseScore(),
      t = this.getBaseComboScore(),
      o = this.getComboMaxScore(),
      n = this.context.getGameData().getCurLevelComboMaxLimit(),
      i = 0,
      r = 0,
      a = 0;
    if (o > 0) {
      var l = Math.floor(o / t) + 1,
        s = Math.max(0, n - l + 1),
        c = n - s;
      c > 0 && (i = c * e + t * (c - 1) * c / 2);
      r = s * (e + o);
      a = Math.floor(i + r);
    } else {
      n > 0 && (i = n * e + t * (n - 1) * n / 2);
      a = Math.floor(i + r);
    }
    return a;
  }
  calAddScore(e = 1) {
    var t = this.context.getGameData(),
      o = t.getComboNum(),
      n = this.getBaseScore() * e,
      i = o > 1 ? (o - 1) * this.getBaseComboScore() : 0,
      r = this.getComboMaxScore();
    1 === t.getLevelId() && (i = this.setFirstLevelComboScore(i));
    r > 0 && i > r && (i = r);
    var a = n + i;
    t.addScore(a);
    return a;
  }
  calAddScoreClassic() {
    var e = this.context.getGameData(),
      t = e.getScoreCombo(),
      o = e.getCurrentBatchId() + 1,
      n = this.getBaseScore(),
      i = t > 1 ? (t - 1) * this.getBaseComboScore() : 0,
      r = this.getComboMaxScore();
    r > 0 && i > r && (i = r);
    var a = n + i,
      l = this.getBaseStepMScore();
    a = Math.min(a, l);
    var s = this.getBatchRate(),
      c = 1 + Math.log(o * s),
      u = this.getDayMultiplier(),
      p = Math.floor(a * c * u);
    p = this.applyScoreMultiplier(p);
    e.addScore(p);
    return p;
  }
  @mj.traitEvent("ScoreMod_applyMultiplier")
  applyScoreMultiplier(e) {
    return e;
  }
  @mj.traitEvent("ScoreMod_baseStepMScore")
  getBaseStepMScore() {
    return 500;
  }
  @mj.traitEvent("ScoreMod_dayMul")
  getDayMultiplier() {
    return 1;
  }
  @mj.traitEvent("ScoreMod_batchRate")
  getBatchRate() {
    return 1;
  }
  getLoginDays() {
    return UserModel.getInstance().getGameActiveDays() || 1;
  }
  @mj.traitEvent("ScoreMod_set1stComboScr")
  setFirstLevelComboScore() {
    return 0;
  }
  @mj.traitEvent("ScoreMod_baseScr")
  getBaseScore() {
    return 30;
  }
  @mj.traitEvent("ScoreMod_baseComboScr")
  getBaseComboScore() {
    return 10;
  }
  @mj.traitEvent("ScoreMod_maxComboScr")
  getComboMaxScore() {
    return 90;
  }
}
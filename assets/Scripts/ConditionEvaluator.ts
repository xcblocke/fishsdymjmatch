import { EConditionType } from './IRuleTypes';
enum i {
  Condition = 0,
  And = 1,
  Or = 2,
}
export default class ConditionEvaluator {
  static evaluate(t, o, r) {
    var a, l;
    if (!t) return false;
    var s = ConditionEvaluator.tokenize(t),
      c = o ? o.split("|") : [],
      u = 0,
      p = false,
      f = null;
    try {
      for (var d = __values(s), h = d.next(); !h.done; h = d.next()) {
        var y = h.value;
        if (y.type !== i.And && y.type !== i.Or) {
          var m = y.value,
            v = c[u] || "";
          u++;
          var g = ConditionEvaluator.evaluateCondition(m, v, r);
          if (null === f) {
            p = g;
          } else {
            if (f === i.And) {
              p = p && g;
            } else {
              f === i.Or && (p = p || g);
            }
          }
          f = null;
        } else f = y.type;
      }
    } catch (e) {
      a = {
        error: e
      };
    } finally {
      try {
        h && !h.done && (l = d.return) && l.call(d);
      } finally {
        if (a) throw a.error;
      }
    }
    return p;
  }
  static tokenize(e) {
    for (var t = [], o = "", n = 0; n < e.length; n++) {
      var r = e[n];
      if ("&" === r || "|" === r) {
        if (o) {
          t.push({
            type: i.Condition,
            value: parseInt(o)
          });
          o = "";
        }
        t.push({
          type: "&" === r ? i.And : i.Or
        });
      } else o += r;
    }
    o && t.push({
      type: i.Condition,
      value: parseInt(o)
    });
    return t;
  }
  static evaluateCondition(t, o, n) {
    var i = o.split(",").map(function (e) {
      return e.trim();
    });
    switch (t) {
      case EConditionType.LevelRange:
        return ConditionEvaluator.evalLevelRange(i, n);
      case EConditionType.LevelCycle:
        return ConditionEvaluator.evalLevelCycle(i, n);
      case EConditionType.TotalGames:
        return ConditionEvaluator.evalTotalGames(i, n);
      case EConditionType.ActiveDays:
        return ConditionEvaluator.evalActiveDays(i, n);
      case EConditionType.StageType:
        return ConditionEvaluator.evalStageType(i, n);
      case EConditionType.PlayerGroup:
        return ConditionEvaluator.evalPlayerGroup(i, n);
      default:
        return false;
    }
  }
  static evalLevelRange(e, t) {
    var o = Number(e[0]),
      n = Number(e[1]);
    return t.levelId >= o && (-1 === n || t.levelId <= n);
  }
  static evalLevelCycle(e, t) {
    var o = Number(e[0]);
    if (o <= 0) return false;
    var n = t.levelId % o;
    return e.slice(1).map(Number).includes(n);
  }
  static evalTotalGames(e, t) {
    var o = Number(e[0]);
    return e.length > 1 && 0 === Number(e[1]) ? t.totalGames < o : t.totalGames >= o;
  }
  static evalActiveDays(e, t) {
    var o = Number(e[0]);
    return e.length > 1 && 0 === Number(e[1]) ? t.activeDays < o : t.activeDays >= o;
  }
  static evalStageType(e, t) {
    return e.map(Number).includes(t.stageType);
  }
  static evalPlayerGroup(e, t) {
    var o = e.map(Number).filter(function (e) {
      return !isNaN(e) && 0 !== e;
    });
    return 0 !== o.length && o.every(function (e) {
      return t.playerGroupIds.includes(e);
    });
  }
}
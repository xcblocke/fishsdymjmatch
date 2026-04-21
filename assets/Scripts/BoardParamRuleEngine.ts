import { DataReader } from './framework/data/DataReader';
import ConditionEvaluator from './ConditionEvaluator';
import { getParentType } from './IRuleTypes';
export default class BoardParamRuleEngine {
  _allRules = [];
  _activeRulesCache = null;
  _playerGroupIds = [];
  static getInstance() {
    BoardParamRuleEngine._instance || (BoardParamRuleEngine._instance = new BoardParamRuleEngine());
    return BoardParamRuleEngine._instance;
  }
  setPlayerGroupIds(e) {
    this._playerGroupIds = e || [];
    this.invalidateCache();
  }
  addPlayerGroupIds(e) {
    var t, o;
    if (e) {
      try {
        for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
          var a = r.value;
          a && !this._playerGroupIds.includes(a) && this._playerGroupIds.push(a);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          r && !r.done && (o = i.return) && o.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      this.invalidateCache();
    }
  }
  getPlayerGroupIds() {
    return this._playerGroupIds;
  }
  getAllRules() {
    return this._allRules;
  }
  loadConfig() {
    var e = DataReader.getList("BoardParamRuleConfig");
    this._allRules = e || [];
    this.invalidateCache();
  }
  mergeJsonData(e) {
    var t,
      o,
      i,
      r,
      a,
      l,
      s = new Set(this._allRules.map(function (e) {
        return e.id;
      }));
    try {
      for (var c = __values(e), u = c.next(); !u.done; u = c.next()) {
        var p = u.value;
        if (Array.isArray(p)) {
          var f = p[0];
          s.has(f) || this._allRules.push({
            id: f,
            logicId: p[1],
            groupId: String(null !== (i = p[2]) && void 0 !== i ? i : ""),
            executeOrder: p[3],
            priority: p[4],
            allowCoexist: p[5],
            conditionExpr: String(null !== (r = p[6]) && void 0 !== r ? r : ""),
            conditionParams: String(null !== (a = p[7]) && void 0 !== a ? a : ""),
            bankParam: String(null !== (l = p[8]) && void 0 !== l ? l : "")
          });
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (o = c.return) && o.call(c);
      } finally {
        if (t) throw t.error;
      }
    }
    this.invalidateCache();
  }
  invalidateCache() {
    this._activeRulesCache = null;
  }
  getActiveRules(e) {
    if (this._activeRulesCache) return this._activeRulesCache;
    var t = this.evaluateRules(e);
    this._activeRulesCache = t;
    return t;
  }
  parseGroupIds(e) {
    return e.split(",").map(function (e) {
      return Number(e.trim());
    }).filter(function (e) {
      return !isNaN(e) && 0 !== e;
    });
  }
  evaluateRules(e) {
    var t,
      o,
      i,
      l,
      s = this,
      c = this._allRules.filter(function (e) {
        if (e.executeOrder <= 0) return false;
        var t = s.parseGroupIds(e.groupId);
        return !!t.includes(-1) || t.some(function (e) {
          return s._playerGroupIds.includes(e);
        });
      });
    if (0 === c.length) return [];
    var u = [];
    try {
      for (var p = __values(c), f = p.next(); !f.done; f = p.next()) {
        var d = f.value,
          h = getParentType(d.logicId);
        h && (!d.conditionExpr || ConditionEvaluator.evaluate(d.conditionExpr, d.conditionParams, e)) && u.push({
          rule: d,
          parentType: h
        });
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (o = p.return) && o.call(p);
      } finally {
        if (t) throw t.error;
      }
    }
    if (0 === u.length) return [];
    u.sort(function (e, t) {
      return e.rule.executeOrder !== t.rule.executeOrder ? e.rule.executeOrder - t.rule.executeOrder : e.rule.priority - t.rule.priority;
    });
    var y = [],
      m = new Set();
    try {
      for (var v = __values(u), g = v.next(); !g.done; g = v.next()) {
        var _ = g.value;
        if (!m.has(_.parentType)) {
          y.push(_);
          _.rule.allowCoexist || m.add(_.parentType);
        }
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        g && !g.done && (l = v.return) && l.call(v);
      } finally {
        if (i) throw i.error;
      }
    }
    return y;
  }
}
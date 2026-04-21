"use strict";
cc._RF.push(module, 'c3071W+Zr5NiZVBVFi45hO2', 'BoardParamRuleEngine');
// Scripts/BoardParamRuleEngine.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("./framework/data/DataReader");
var ConditionEvaluator_1 = require("./ConditionEvaluator");
var IRuleTypes_1 = require("./IRuleTypes");
var BoardParamRuleEngine = /** @class */ (function () {
    function BoardParamRuleEngine() {
        this._allRules = [];
        this._activeRulesCache = null;
        this._playerGroupIds = [];
    }
    BoardParamRuleEngine.getInstance = function () {
        BoardParamRuleEngine._instance || (BoardParamRuleEngine._instance = new BoardParamRuleEngine());
        return BoardParamRuleEngine._instance;
    };
    BoardParamRuleEngine.prototype.setPlayerGroupIds = function (e) {
        this._playerGroupIds = e || [];
        this.invalidateCache();
    };
    BoardParamRuleEngine.prototype.addPlayerGroupIds = function (e) {
        var t, o;
        if (e) {
            try {
                for (var i = __values(e), r = i.next(); !r.done; r = i.next()) {
                    var a = r.value;
                    a && !this._playerGroupIds.includes(a) && this._playerGroupIds.push(a);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    r && !r.done && (o = i.return) && o.call(i);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            this.invalidateCache();
        }
    };
    BoardParamRuleEngine.prototype.getPlayerGroupIds = function () {
        return this._playerGroupIds;
    };
    BoardParamRuleEngine.prototype.getAllRules = function () {
        return this._allRules;
    };
    BoardParamRuleEngine.prototype.loadConfig = function () {
        var e = DataReader_1.DataReader.getList("BoardParamRuleConfig");
        this._allRules = e || [];
        this.invalidateCache();
    };
    BoardParamRuleEngine.prototype.mergeJsonData = function (e) {
        var t, o, i, r, a, l, s = new Set(this._allRules.map(function (e) {
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
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        this.invalidateCache();
    };
    BoardParamRuleEngine.prototype.invalidateCache = function () {
        this._activeRulesCache = null;
    };
    BoardParamRuleEngine.prototype.getActiveRules = function (e) {
        if (this._activeRulesCache)
            return this._activeRulesCache;
        var t = this.evaluateRules(e);
        this._activeRulesCache = t;
        return t;
    };
    BoardParamRuleEngine.prototype.parseGroupIds = function (e) {
        return e.split(",").map(function (e) {
            return Number(e.trim());
        }).filter(function (e) {
            return !isNaN(e) && 0 !== e;
        });
    };
    BoardParamRuleEngine.prototype.evaluateRules = function (e) {
        var t, o, i, l, s = this, c = this._allRules.filter(function (e) {
            if (e.executeOrder <= 0)
                return false;
            var t = s.parseGroupIds(e.groupId);
            return !!t.includes(-1) || t.some(function (e) {
                return s._playerGroupIds.includes(e);
            });
        });
        if (0 === c.length)
            return [];
        var u = [];
        try {
            for (var p = __values(c), f = p.next(); !f.done; f = p.next()) {
                var d = f.value, h = IRuleTypes_1.getParentType(d.logicId);
                h && (!d.conditionExpr || ConditionEvaluator_1.default.evaluate(d.conditionExpr, d.conditionParams, e)) && u.push({
                    rule: d,
                    parentType: h
                });
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (o = p.return) && o.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        if (0 === u.length)
            return [];
        u.sort(function (e, t) {
            return e.rule.executeOrder !== t.rule.executeOrder ? e.rule.executeOrder - t.rule.executeOrder : e.rule.priority - t.rule.priority;
        });
        var y = [], m = new Set();
        try {
            for (var v = __values(u), g = v.next(); !g.done; g = v.next()) {
                var _ = g.value;
                if (!m.has(_.parentType)) {
                    y.push(_);
                    _.rule.allowCoexist || m.add(_.parentType);
                }
            }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                g && !g.done && (l = v.return) && l.call(v);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        return y;
    };
    return BoardParamRuleEngine;
}());
exports.default = BoardParamRuleEngine;

cc._RF.pop();
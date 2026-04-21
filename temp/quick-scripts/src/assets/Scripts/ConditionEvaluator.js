"use strict";
cc._RF.push(module, 'f3f9bGITehK15ZMS1EhyUeo', 'ConditionEvaluator');
// Scripts/ConditionEvaluator.ts

Object.defineProperty(exports, "__esModule", { value: true });
var IRuleTypes_1 = require("./IRuleTypes");
var i;
(function (i) {
    i[i["Condition"] = 0] = "Condition";
    i[i["And"] = 1] = "And";
    i[i["Or"] = 2] = "Or";
})(i || (i = {}));
var ConditionEvaluator = /** @class */ (function () {
    function ConditionEvaluator() {
    }
    ConditionEvaluator.evaluate = function (t, o, r) {
        var a, l;
        if (!t)
            return false;
        var s = ConditionEvaluator.tokenize(t), c = o ? o.split("|") : [], u = 0, p = false, f = null;
        try {
            for (var d = __values(s), h = d.next(); !h.done; h = d.next()) {
                var y = h.value;
                if (y.type !== i.And && y.type !== i.Or) {
                    var m = y.value, v = c[u] || "";
                    u++;
                    var g = ConditionEvaluator.evaluateCondition(m, v, r);
                    if (null === f) {
                        p = g;
                    }
                    else {
                        if (f === i.And) {
                            p = p && g;
                        }
                        else {
                            f === i.Or && (p = p || g);
                        }
                    }
                    f = null;
                }
                else
                    f = y.type;
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                h && !h.done && (l = d.return) && l.call(d);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        return p;
    };
    ConditionEvaluator.tokenize = function (e) {
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
            }
            else
                o += r;
        }
        o && t.push({
            type: i.Condition,
            value: parseInt(o)
        });
        return t;
    };
    ConditionEvaluator.evaluateCondition = function (t, o, n) {
        var i = o.split(",").map(function (e) {
            return e.trim();
        });
        switch (t) {
            case IRuleTypes_1.EConditionType.LevelRange:
                return ConditionEvaluator.evalLevelRange(i, n);
            case IRuleTypes_1.EConditionType.LevelCycle:
                return ConditionEvaluator.evalLevelCycle(i, n);
            case IRuleTypes_1.EConditionType.TotalGames:
                return ConditionEvaluator.evalTotalGames(i, n);
            case IRuleTypes_1.EConditionType.ActiveDays:
                return ConditionEvaluator.evalActiveDays(i, n);
            case IRuleTypes_1.EConditionType.StageType:
                return ConditionEvaluator.evalStageType(i, n);
            case IRuleTypes_1.EConditionType.PlayerGroup:
                return ConditionEvaluator.evalPlayerGroup(i, n);
            default:
                return false;
        }
    };
    ConditionEvaluator.evalLevelRange = function (e, t) {
        var o = Number(e[0]), n = Number(e[1]);
        return t.levelId >= o && (-1 === n || t.levelId <= n);
    };
    ConditionEvaluator.evalLevelCycle = function (e, t) {
        var o = Number(e[0]);
        if (o <= 0)
            return false;
        var n = t.levelId % o;
        return e.slice(1).map(Number).includes(n);
    };
    ConditionEvaluator.evalTotalGames = function (e, t) {
        var o = Number(e[0]);
        return e.length > 1 && 0 === Number(e[1]) ? t.totalGames < o : t.totalGames >= o;
    };
    ConditionEvaluator.evalActiveDays = function (e, t) {
        var o = Number(e[0]);
        return e.length > 1 && 0 === Number(e[1]) ? t.activeDays < o : t.activeDays >= o;
    };
    ConditionEvaluator.evalStageType = function (e, t) {
        return e.map(Number).includes(t.stageType);
    };
    ConditionEvaluator.evalPlayerGroup = function (e, t) {
        var o = e.map(Number).filter(function (e) {
            return !isNaN(e) && 0 !== e;
        });
        return 0 !== o.length && o.every(function (e) {
            return t.playerGroupIds.includes(e);
        });
    };
    return ConditionEvaluator;
}());
exports.default = ConditionEvaluator;

cc._RF.pop();
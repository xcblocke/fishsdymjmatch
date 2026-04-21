
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ConditionEvaluator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NvbmRpdGlvbkV2YWx1YXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQThDO0FBQzlDLElBQUssQ0FJSjtBQUpELFdBQUssQ0FBQztJQUNKLG1DQUFhLENBQUE7SUFDYix1QkFBTyxDQUFBO0lBQ1AscUJBQU0sQ0FBQTtBQUNSLENBQUMsRUFKSSxDQUFDLEtBQUQsQ0FBQyxRQUlMO0FBQ0Q7SUFBQTtJQW1IQSxDQUFDO0lBbEhRLDJCQUFRLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUNwQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ3pCLENBQUMsR0FBRyxDQUFDLEVBQ0wsQ0FBQyxHQUFHLEtBQUssRUFDVCxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ1gsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDakIsQ0FBQyxFQUFFLENBQUM7b0JBQ0osSUFBSSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO3dCQUNkLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ1A7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRTs0QkFDZixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDWjs2QkFBTTs0QkFDTCxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7eUJBQzVCO3FCQUNGO29CQUNELENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ1Y7O29CQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ25CO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTSwyQkFBUSxHQUFmLFVBQWdCLENBQUM7UUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxFQUFFO29CQUNMLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ0wsSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTO3dCQUNqQixLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztxQkFDbkIsQ0FBQyxDQUFDO29CQUNILENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ1I7Z0JBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDTCxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQy9CLENBQUMsQ0FBQzthQUNKOztnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2Y7UUFDRCxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNWLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUztZQUNqQixLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNuQixDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTSxvQ0FBaUIsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNsQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxFQUFFO1lBQ1QsS0FBSywyQkFBYyxDQUFDLFVBQVU7Z0JBQzVCLE9BQU8sa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRCxLQUFLLDJCQUFjLENBQUMsVUFBVTtnQkFDNUIsT0FBTyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pELEtBQUssMkJBQWMsQ0FBQyxVQUFVO2dCQUM1QixPQUFPLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsS0FBSywyQkFBYyxDQUFDLFVBQVU7Z0JBQzVCLE9BQU8sa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRCxLQUFLLDJCQUFjLENBQUMsU0FBUztnQkFDM0IsT0FBTyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEtBQUssMkJBQWMsQ0FBQyxXQUFXO2dCQUM3QixPQUFPLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEQ7Z0JBQ0UsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBQ00saUNBQWMsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNsQixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ00saUNBQWMsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ00saUNBQWMsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDTSxpQ0FBYyxHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUNNLGdDQUFhLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTSxrQ0FBZSxHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUMxQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FuSEEsQUFtSEMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVDb25kaXRpb25UeXBlIH0gZnJvbSAnLi9JUnVsZVR5cGVzJztcbmVudW0gaSB7XG4gIENvbmRpdGlvbiA9IDAsXG4gIEFuZCA9IDEsXG4gIE9yID0gMixcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmRpdGlvbkV2YWx1YXRvciB7XG4gIHN0YXRpYyBldmFsdWF0ZSh0LCBvLCByKSB7XG4gICAgdmFyIGEsIGw7XG4gICAgaWYgKCF0KSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHMgPSBDb25kaXRpb25FdmFsdWF0b3IudG9rZW5pemUodCksXG4gICAgICBjID0gbyA/IG8uc3BsaXQoXCJ8XCIpIDogW10sXG4gICAgICB1ID0gMCxcbiAgICAgIHAgPSBmYWxzZSxcbiAgICAgIGYgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBkID0gX192YWx1ZXMocyksIGggPSBkLm5leHQoKTsgIWguZG9uZTsgaCA9IGQubmV4dCgpKSB7XG4gICAgICAgIHZhciB5ID0gaC52YWx1ZTtcbiAgICAgICAgaWYgKHkudHlwZSAhPT0gaS5BbmQgJiYgeS50eXBlICE9PSBpLk9yKSB7XG4gICAgICAgICAgdmFyIG0gPSB5LnZhbHVlLFxuICAgICAgICAgICAgdiA9IGNbdV0gfHwgXCJcIjtcbiAgICAgICAgICB1Kys7XG4gICAgICAgICAgdmFyIGcgPSBDb25kaXRpb25FdmFsdWF0b3IuZXZhbHVhdGVDb25kaXRpb24obSwgdiwgcik7XG4gICAgICAgICAgaWYgKG51bGwgPT09IGYpIHtcbiAgICAgICAgICAgIHAgPSBnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZiA9PT0gaS5BbmQpIHtcbiAgICAgICAgICAgICAgcCA9IHAgJiYgZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGYgPT09IGkuT3IgJiYgKHAgPSBwIHx8IGcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGYgPSB5LnR5cGU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGggJiYgIWguZG9uZSAmJiAobCA9IGQucmV0dXJuKSAmJiBsLmNhbGwoZCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgc3RhdGljIHRva2VuaXplKGUpIHtcbiAgICBmb3IgKHZhciB0ID0gW10sIG8gPSBcIlwiLCBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciByID0gZVtuXTtcbiAgICAgIGlmIChcIiZcIiA9PT0gciB8fCBcInxcIiA9PT0gcikge1xuICAgICAgICBpZiAobykge1xuICAgICAgICAgIHQucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiBpLkNvbmRpdGlvbixcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUludChvKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG8gPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHQucHVzaCh7XG4gICAgICAgICAgdHlwZTogXCImXCIgPT09IHIgPyBpLkFuZCA6IGkuT3JcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgbyArPSByO1xuICAgIH1cbiAgICBvICYmIHQucHVzaCh7XG4gICAgICB0eXBlOiBpLkNvbmRpdGlvbixcbiAgICAgIHZhbHVlOiBwYXJzZUludChvKVxuICAgIH0pO1xuICAgIHJldHVybiB0O1xuICB9XG4gIHN0YXRpYyBldmFsdWF0ZUNvbmRpdGlvbih0LCBvLCBuKSB7XG4gICAgdmFyIGkgPSBvLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLnRyaW0oKTtcbiAgICB9KTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgRUNvbmRpdGlvblR5cGUuTGV2ZWxSYW5nZTpcbiAgICAgICAgcmV0dXJuIENvbmRpdGlvbkV2YWx1YXRvci5ldmFsTGV2ZWxSYW5nZShpLCBuKTtcbiAgICAgIGNhc2UgRUNvbmRpdGlvblR5cGUuTGV2ZWxDeWNsZTpcbiAgICAgICAgcmV0dXJuIENvbmRpdGlvbkV2YWx1YXRvci5ldmFsTGV2ZWxDeWNsZShpLCBuKTtcbiAgICAgIGNhc2UgRUNvbmRpdGlvblR5cGUuVG90YWxHYW1lczpcbiAgICAgICAgcmV0dXJuIENvbmRpdGlvbkV2YWx1YXRvci5ldmFsVG90YWxHYW1lcyhpLCBuKTtcbiAgICAgIGNhc2UgRUNvbmRpdGlvblR5cGUuQWN0aXZlRGF5czpcbiAgICAgICAgcmV0dXJuIENvbmRpdGlvbkV2YWx1YXRvci5ldmFsQWN0aXZlRGF5cyhpLCBuKTtcbiAgICAgIGNhc2UgRUNvbmRpdGlvblR5cGUuU3RhZ2VUeXBlOlxuICAgICAgICByZXR1cm4gQ29uZGl0aW9uRXZhbHVhdG9yLmV2YWxTdGFnZVR5cGUoaSwgbik7XG4gICAgICBjYXNlIEVDb25kaXRpb25UeXBlLlBsYXllckdyb3VwOlxuICAgICAgICByZXR1cm4gQ29uZGl0aW9uRXZhbHVhdG9yLmV2YWxQbGF5ZXJHcm91cChpLCBuKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGV2YWxMZXZlbFJhbmdlKGUsIHQpIHtcbiAgICB2YXIgbyA9IE51bWJlcihlWzBdKSxcbiAgICAgIG4gPSBOdW1iZXIoZVsxXSk7XG4gICAgcmV0dXJuIHQubGV2ZWxJZCA+PSBvICYmICgtMSA9PT0gbiB8fCB0LmxldmVsSWQgPD0gbik7XG4gIH1cbiAgc3RhdGljIGV2YWxMZXZlbEN5Y2xlKGUsIHQpIHtcbiAgICB2YXIgbyA9IE51bWJlcihlWzBdKTtcbiAgICBpZiAobyA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG4gPSB0LmxldmVsSWQgJSBvO1xuICAgIHJldHVybiBlLnNsaWNlKDEpLm1hcChOdW1iZXIpLmluY2x1ZGVzKG4pO1xuICB9XG4gIHN0YXRpYyBldmFsVG90YWxHYW1lcyhlLCB0KSB7XG4gICAgdmFyIG8gPSBOdW1iZXIoZVswXSk7XG4gICAgcmV0dXJuIGUubGVuZ3RoID4gMSAmJiAwID09PSBOdW1iZXIoZVsxXSkgPyB0LnRvdGFsR2FtZXMgPCBvIDogdC50b3RhbEdhbWVzID49IG87XG4gIH1cbiAgc3RhdGljIGV2YWxBY3RpdmVEYXlzKGUsIHQpIHtcbiAgICB2YXIgbyA9IE51bWJlcihlWzBdKTtcbiAgICByZXR1cm4gZS5sZW5ndGggPiAxICYmIDAgPT09IE51bWJlcihlWzFdKSA/IHQuYWN0aXZlRGF5cyA8IG8gOiB0LmFjdGl2ZURheXMgPj0gbztcbiAgfVxuICBzdGF0aWMgZXZhbFN0YWdlVHlwZShlLCB0KSB7XG4gICAgcmV0dXJuIGUubWFwKE51bWJlcikuaW5jbHVkZXModC5zdGFnZVR5cGUpO1xuICB9XG4gIHN0YXRpYyBldmFsUGxheWVyR3JvdXAoZSwgdCkge1xuICAgIHZhciBvID0gZS5tYXAoTnVtYmVyKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiAhaXNOYU4oZSkgJiYgMCAhPT0gZTtcbiAgICB9KTtcbiAgICByZXR1cm4gMCAhPT0gby5sZW5ndGggJiYgby5ldmVyeShmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHQucGxheWVyR3JvdXBJZHMuaW5jbHVkZXMoZSk7XG4gICAgfSk7XG4gIH1cbn0iXX0=
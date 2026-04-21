
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BoardParamRuleEngine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0JvYXJkUGFyYW1SdWxlRW5naW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBeUQ7QUFDekQsMkRBQXNEO0FBQ3RELDJDQUE2QztBQUM3QztJQUFBO1FBQ0UsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztJQWlLdkIsQ0FBQztJQWhLUSxnQ0FBVyxHQUFsQjtRQUNFLG9CQUFvQixDQUFDLFNBQVMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUNoRyxPQUFPLG9CQUFvQixDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCLFVBQWtCLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCLFVBQWtCLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJO2dCQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ2hCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN4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RUFBRSxDQUFDO1FBQ2hCLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzVDO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FwS0EsQUFvS0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuL2ZyYW1ld29yay9kYXRhL0RhdGFSZWFkZXInO1xuaW1wb3J0IENvbmRpdGlvbkV2YWx1YXRvciBmcm9tICcuL0NvbmRpdGlvbkV2YWx1YXRvcic7XG5pbXBvcnQgeyBnZXRQYXJlbnRUeXBlIH0gZnJvbSAnLi9JUnVsZVR5cGVzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkUGFyYW1SdWxlRW5naW5lIHtcbiAgX2FsbFJ1bGVzID0gW107XG4gIF9hY3RpdmVSdWxlc0NhY2hlID0gbnVsbDtcbiAgX3BsYXllckdyb3VwSWRzID0gW107XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBCb2FyZFBhcmFtUnVsZUVuZ2luZS5faW5zdGFuY2UgfHwgKEJvYXJkUGFyYW1SdWxlRW5naW5lLl9pbnN0YW5jZSA9IG5ldyBCb2FyZFBhcmFtUnVsZUVuZ2luZSgpKTtcbiAgICByZXR1cm4gQm9hcmRQYXJhbVJ1bGVFbmdpbmUuX2luc3RhbmNlO1xuICB9XG4gIHNldFBsYXllckdyb3VwSWRzKGUpIHtcbiAgICB0aGlzLl9wbGF5ZXJHcm91cElkcyA9IGUgfHwgW107XG4gICAgdGhpcy5pbnZhbGlkYXRlQ2FjaGUoKTtcbiAgfVxuICBhZGRQbGF5ZXJHcm91cElkcyhlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgaWYgKGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyhlKSwgciA9IGkubmV4dCgpOyAhci5kb25lOyByID0gaS5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgYSA9IHIudmFsdWU7XG4gICAgICAgICAgYSAmJiAhdGhpcy5fcGxheWVyR3JvdXBJZHMuaW5jbHVkZXMoYSkgJiYgdGhpcy5fcGxheWVyR3JvdXBJZHMucHVzaChhKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHIgJiYgIXIuZG9uZSAmJiAobyA9IGkucmV0dXJuKSAmJiBvLmNhbGwoaSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuaW52YWxpZGF0ZUNhY2hlKCk7XG4gICAgfVxuICB9XG4gIGdldFBsYXllckdyb3VwSWRzKCkge1xuICAgIHJldHVybiB0aGlzLl9wbGF5ZXJHcm91cElkcztcbiAgfVxuICBnZXRBbGxSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsUnVsZXM7XG4gIH1cbiAgbG9hZENvbmZpZygpIHtcbiAgICB2YXIgZSA9IERhdGFSZWFkZXIuZ2V0TGlzdChcIkJvYXJkUGFyYW1SdWxlQ29uZmlnXCIpO1xuICAgIHRoaXMuX2FsbFJ1bGVzID0gZSB8fCBbXTtcbiAgICB0aGlzLmludmFsaWRhdGVDYWNoZSgpO1xuICB9XG4gIG1lcmdlSnNvbkRhdGEoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIGksXG4gICAgICByLFxuICAgICAgYSxcbiAgICAgIGwsXG4gICAgICBzID0gbmV3IFNldCh0aGlzLl9hbGxSdWxlcy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaWQ7XG4gICAgICB9KSk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyhlKSwgdSA9IGMubmV4dCgpOyAhdS5kb25lOyB1ID0gYy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHAgPSB1LnZhbHVlO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwKSkge1xuICAgICAgICAgIHZhciBmID0gcFswXTtcbiAgICAgICAgICBzLmhhcyhmKSB8fCB0aGlzLl9hbGxSdWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBmLFxuICAgICAgICAgICAgbG9naWNJZDogcFsxXSxcbiAgICAgICAgICAgIGdyb3VwSWQ6IFN0cmluZyhudWxsICE9PSAoaSA9IHBbMl0pICYmIHZvaWQgMCAhPT0gaSA/IGkgOiBcIlwiKSxcbiAgICAgICAgICAgIGV4ZWN1dGVPcmRlcjogcFszXSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBwWzRdLFxuICAgICAgICAgICAgYWxsb3dDb2V4aXN0OiBwWzVdLFxuICAgICAgICAgICAgY29uZGl0aW9uRXhwcjogU3RyaW5nKG51bGwgIT09IChyID0gcFs2XSkgJiYgdm9pZCAwICE9PSByID8gciA6IFwiXCIpLFxuICAgICAgICAgICAgY29uZGl0aW9uUGFyYW1zOiBTdHJpbmcobnVsbCAhPT0gKGEgPSBwWzddKSAmJiB2b2lkIDAgIT09IGEgPyBhIDogXCJcIiksXG4gICAgICAgICAgICBiYW5rUGFyYW06IFN0cmluZyhudWxsICE9PSAobCA9IHBbOF0pICYmIHZvaWQgMCAhPT0gbCA/IGwgOiBcIlwiKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHUgJiYgIXUuZG9uZSAmJiAobyA9IGMucmV0dXJuKSAmJiBvLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pbnZhbGlkYXRlQ2FjaGUoKTtcbiAgfVxuICBpbnZhbGlkYXRlQ2FjaGUoKSB7XG4gICAgdGhpcy5fYWN0aXZlUnVsZXNDYWNoZSA9IG51bGw7XG4gIH1cbiAgZ2V0QWN0aXZlUnVsZXMoZSkge1xuICAgIGlmICh0aGlzLl9hY3RpdmVSdWxlc0NhY2hlKSByZXR1cm4gdGhpcy5fYWN0aXZlUnVsZXNDYWNoZTtcbiAgICB2YXIgdCA9IHRoaXMuZXZhbHVhdGVSdWxlcyhlKTtcbiAgICB0aGlzLl9hY3RpdmVSdWxlc0NhY2hlID0gdDtcbiAgICByZXR1cm4gdDtcbiAgfVxuICBwYXJzZUdyb3VwSWRzKGUpIHtcbiAgICByZXR1cm4gZS5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKGUudHJpbSgpKTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiAhaXNOYU4oZSkgJiYgMCAhPT0gZTtcbiAgICB9KTtcbiAgfVxuICBldmFsdWF0ZVJ1bGVzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBpLFxuICAgICAgbCxcbiAgICAgIHMgPSB0aGlzLFxuICAgICAgYyA9IHRoaXMuX2FsbFJ1bGVzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5leGVjdXRlT3JkZXIgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgdCA9IHMucGFyc2VHcm91cElkcyhlLmdyb3VwSWQpO1xuICAgICAgICByZXR1cm4gISF0LmluY2x1ZGVzKC0xKSB8fCB0LnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gcy5fcGxheWVyR3JvdXBJZHMuaW5jbHVkZXMoZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgaWYgKDAgPT09IGMubGVuZ3RoKSByZXR1cm4gW107XG4gICAgdmFyIHUgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKGMpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICB2YXIgZCA9IGYudmFsdWUsXG4gICAgICAgICAgaCA9IGdldFBhcmVudFR5cGUoZC5sb2dpY0lkKTtcbiAgICAgICAgaCAmJiAoIWQuY29uZGl0aW9uRXhwciB8fCBDb25kaXRpb25FdmFsdWF0b3IuZXZhbHVhdGUoZC5jb25kaXRpb25FeHByLCBkLmNvbmRpdGlvblBhcmFtcywgZSkpICYmIHUucHVzaCh7XG4gICAgICAgICAgcnVsZTogZCxcbiAgICAgICAgICBwYXJlbnRUeXBlOiBoXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBmICYmICFmLmRvbmUgJiYgKG8gPSBwLnJldHVybikgJiYgby5jYWxsKHApO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgwID09PSB1Lmxlbmd0aCkgcmV0dXJuIFtdO1xuICAgIHUuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIGUucnVsZS5leGVjdXRlT3JkZXIgIT09IHQucnVsZS5leGVjdXRlT3JkZXIgPyBlLnJ1bGUuZXhlY3V0ZU9yZGVyIC0gdC5ydWxlLmV4ZWN1dGVPcmRlciA6IGUucnVsZS5wcmlvcml0eSAtIHQucnVsZS5wcmlvcml0eTtcbiAgICB9KTtcbiAgICB2YXIgeSA9IFtdLFxuICAgICAgbSA9IG5ldyBTZXQoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdiA9IF9fdmFsdWVzKHUpLCBnID0gdi5uZXh0KCk7ICFnLmRvbmU7IGcgPSB2Lm5leHQoKSkge1xuICAgICAgICB2YXIgXyA9IGcudmFsdWU7XG4gICAgICAgIGlmICghbS5oYXMoXy5wYXJlbnRUeXBlKSkge1xuICAgICAgICAgIHkucHVzaChfKTtcbiAgICAgICAgICBfLnJ1bGUuYWxsb3dDb2V4aXN0IHx8IG0uYWRkKF8ucGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZyAmJiAhZy5kb25lICYmIChsID0gdi5yZXR1cm4pICYmIGwuY2FsbCh2KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geTtcbiAgfVxufSJdfQ==
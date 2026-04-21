
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_deathAnalyze/Scripts/DuoxiaoAvoidDeadTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82835bwKAJGz5atpp/etfEY', 'DuoxiaoAvoidDeadTrait');
// subpackages/l_deathAnalyze/Scripts/DuoxiaoAvoidDeadTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractNormalLevels_1 = require("../../../Scripts/core/extractQuestion/ExtractNormalLevels");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DeadSelectUtils_1 = require("./DeadSelectUtils");
var DeathAnalyserMgr_1 = require("../../../Scripts/DeathAnalyserMgr");
var u;
(function (u) {
    u[u["NonDeathGroupHint"] = 1] = "NonDeathGroupHint";
    u[u["DeathGroupHint"] = 2] = "DeathGroupHint";
    u[u["DeathRateHint"] = 3] = "DeathRateHint";
})(u || (u = {}));
var DuoxiaoAvoidDeadTrait = /** @class */ (function (_super) {
    __extends(DuoxiaoAvoidDeadTrait, _super);
    function DuoxiaoAvoidDeadTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DuoxiaoAvoidDeadTrait.prototype, "deathLimit", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.deathLimit) && void 0 !== e ? e : 3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DuoxiaoAvoidDeadTrait.prototype, "strategy", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.strategy) && void 0 !== e ? e : u.NonDeathGroupHint;
        },
        enumerable: false,
        configurable: true
    });
    DuoxiaoAvoidDeadTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DuoxiaoAvoidDeadTrait.prototype.onIptDuoxiaoAuto_findMatch = function (t, e) {
        var r, n = mj.getClassByName("DeathAnalyserTrait");
        if (n && n.getInstance() && n.getInstance().eventEnabled) {
            var i = DeathAnalyserMgr_1.default.instance.analyzeCardPair(null === (r = t.ins) || void 0 === r ? void 0 : r.gameContext);
            if (i.levelAllDeathPairs.length <= 0)
                e();
            else {
                var a = this.findHintTile(t.args[0], i);
                if (!a || a.length <= 0) {
                    e();
                }
                else {
                    e({
                        returnType: TraitCallbackReturnType.return,
                        returnVal: a.map(function (t) {
                            return t.id;
                        }),
                        isBreak: true
                    });
                }
            }
        }
        else
            e();
    };
    DuoxiaoAvoidDeadTrait.prototype.findHintTile = function (t, e) {
        switch (this.strategy) {
            case u.NonDeathGroupHint:
                return this.nonDeathGroupHint(t, e);
            case u.DeathGroupHint:
                return this.deathGroupHint(t, e);
            case u.DeathRateHint:
                return this.deathRateHint(t, e);
        }
        return [];
    };
    DuoxiaoAvoidDeadTrait.prototype.randomHintTile = function (t) {
        if (t.length <= 0)
            return [];
        var e = t[Math.floor(Math.random() * t.length)];
        return [e.tile1, e.tile2];
    };
    DuoxiaoAvoidDeadTrait.prototype.deathGroupHint = function (t, e) {
        var r, n, i, a, l = [];
        try {
            for (var u = __values(t), c = u.next(); !c.done; c = u.next()) {
                var f = c.value, d = DeadSelectUtils_1.DeadSelectUtils.getAllMatchTiles(f);
                try {
                    for (var y = (i = void 0, __values(d)), h = y.next(); !h.done; h = y.next()) {
                        var p = h.value, v = this.isDeathGroup(p, e);
                        l.push({
                            tile1: p[0],
                            tile2: p[1],
                            priority: v
                        });
                    }
                }
                catch (t) {
                    i = {
                        error: t
                    };
                }
                finally {
                    try {
                        h && !h.done && (a = y.return) && a.call(y);
                    }
                    finally {
                        if (i)
                            throw i.error;
                    }
                }
            }
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                c && !c.done && (n = u.return) && n.call(u);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        if (l.length <= 0)
            return [];
        l.sort(function (t, e) {
            return e.priority - t.priority;
        });
        var D = l[0].priority, g = l.filter(function (t) {
            return t.priority === D;
        });
        return this.randomHintTile(g);
    };
    DuoxiaoAvoidDeadTrait.prototype.nonDeathGroupHint = function (t, e) {
        var r, n, i, a, l = [];
        try {
            for (var u = __values(t), c = u.next(); !c.done; c = u.next()) {
                var f = c.value, d = DeadSelectUtils_1.DeadSelectUtils.getAllMatchTiles(f);
                try {
                    for (var y = (i = void 0, __values(d)), h = y.next(); !h.done; h = y.next()) {
                        var p = h.value, v = this.isDeathGroup(p, e);
                        l.push({
                            tile1: p[0],
                            tile2: p[1],
                            priority: v
                        });
                    }
                }
                catch (t) {
                    i = {
                        error: t
                    };
                }
                finally {
                    try {
                        h && !h.done && (a = y.return) && a.call(y);
                    }
                    finally {
                        if (i)
                            throw i.error;
                    }
                }
            }
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                c && !c.done && (n = u.return) && n.call(u);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        if (l.length <= 0)
            return [];
        l.sort(function (t, e) {
            return t.priority - e.priority;
        });
        var D = l[0].priority, g = l.filter(function (t) {
            return t.priority === D;
        });
        return this.randomHintTile(g);
    };
    DuoxiaoAvoidDeadTrait.prototype.isDeathGroup = function (t, e) {
        var r, n, i, a, u = __read(t, 2), c = u[0], f = u[1], s = 0;
        try {
            for (var d = __values(e.levelAllDeathPairs), y = d.next(); !y.done; y = d.next()) {
                var h = y.value;
                try {
                    for (var p = (i = void 0, __values(h)), v = p.next(); !v.done; v = p.next()) {
                        var D = v.value;
                        if (D.isEqual({
                            tile1Id: c.id,
                            tile2Id: f.id
                        }))
                            return s = 2;
                        (D.containsTile(c.id) || D.containsTile(f.id)) && (s = 1);
                    }
                }
                catch (t) {
                    i = {
                        error: t
                    };
                }
                finally {
                    try {
                        v && !v.done && (a = p.return) && a.call(p);
                    }
                    finally {
                        if (i)
                            throw i.error;
                    }
                }
            }
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                y && !y.done && (n = d.return) && n.call(d);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return s;
    };
    DuoxiaoAvoidDeadTrait.prototype.deathRateHint = function (t, e) {
        var r, n;
        return (null !== (n = null === (r = ExtractNormalLevels_1.default.getInstance().getData()) || void 0 === r ? void 0 : r.dieDimensionValue) && void 0 !== n ? n : 1) >= this.deathLimit ? this.deathGroupHint(t, e) : this.nonDeathGroupHint(t, e);
    };
    DuoxiaoAvoidDeadTrait.traitKey = "DuoxiaoAvoidDead";
    DuoxiaoAvoidDeadTrait = __decorate([
        mj.trait,
        mj.class("DuoxiaoAvoidDeadTrait")
    ], DuoxiaoAvoidDeadTrait);
    return DuoxiaoAvoidDeadTrait;
}(Trait_1.default));
exports.default = DuoxiaoAvoidDeadTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RlYXRoQW5hbHl6ZS9TY3JpcHRzL0R1b3hpYW9Bdm9pZERlYWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUdBQTRGO0FBQzVGLGdFQUEyRDtBQUMzRCxxREFBb0Q7QUFDcEQsc0VBQWlFO0FBQ2pFLElBQUssQ0FJSjtBQUpELFdBQUssQ0FBQztJQUNKLG1EQUFxQixDQUFBO0lBQ3JCLDZDQUFrQixDQUFBO0lBQ2xCLDJDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKSSxDQUFDLEtBQUQsQ0FBQyxRQUlMO0FBR0Q7SUFBbUQseUNBQUs7SUFBeEQ7O0lBOE1BLENBQUM7SUE1TUMsc0JBQUksNkNBQVU7YUFBZDtZQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEgsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSwyQ0FBUTthQUFaO1lBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FB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QUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0E4TXpDO0lBQUQsNEJBQUM7Q0E5TUQsQUE4TUMsQ0E5TWtELGVBQUssR0E4TXZEO2tCQTlNb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3ROb3JtYWxMZXZlbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0Tm9ybWFsTGV2ZWxzJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBEZWFkU2VsZWN0VXRpbHMgfSBmcm9tICcuL0RlYWRTZWxlY3RVdGlscyc7XG5pbXBvcnQgRGVhdGhBbmFseXNlck1nciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0RlYXRoQW5hbHlzZXJNZ3InO1xuZW51bSB1IHtcbiAgTm9uRGVhdGhHcm91cEhpbnQgPSAxLFxuICBEZWF0aEdyb3VwSGludCA9IDIsXG4gIERlYXRoUmF0ZUhpbnQgPSAzLFxufVxuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEdW94aWFvQXZvaWREZWFkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER1b3hpYW9Bdm9pZERlYWRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEdW94aWFvQXZvaWREZWFkXCI7XG4gIGdldCBkZWF0aExpbWl0KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZGVhdGhMaW1pdCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDM7XG4gIH1cbiAgZ2V0IHN0cmF0ZWd5KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuc3RyYXRlZ3kpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiB1Lk5vbkRlYXRoR3JvdXBIaW50O1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbklwdER1b3hpYW9BdXRvX2ZpbmRNYXRjaCh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBuID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJEZWF0aEFuYWx5c2VyVHJhaXRcIik7XG4gICAgaWYgKG4gJiYgbi5nZXRJbnN0YW5jZSgpICYmIG4uZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQpIHtcbiAgICAgIHZhciBpID0gRGVhdGhBbmFseXNlck1nci5pbnN0YW5jZS5hbmFseXplQ2FyZFBhaXIobnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nYW1lQ29udGV4dCk7XG4gICAgICBpZiAoaS5sZXZlbEFsbERlYXRoUGFpcnMubGVuZ3RoIDw9IDApIGUoKTtlbHNlIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmZpbmRIaW50VGlsZSh0LmFyZ3NbMF0sIGkpO1xuICAgICAgICBpZiAoIWEgfHwgYS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlKHtcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgIHJldHVyblZhbDogYS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHQuaWQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgZmluZEhpbnRUaWxlKHQsIGUpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RyYXRlZ3kpIHtcbiAgICAgIGNhc2UgdS5Ob25EZWF0aEdyb3VwSGludDpcbiAgICAgICAgcmV0dXJuIHRoaXMubm9uRGVhdGhHcm91cEhpbnQodCwgZSk7XG4gICAgICBjYXNlIHUuRGVhdGhHcm91cEhpbnQ6XG4gICAgICAgIHJldHVybiB0aGlzLmRlYXRoR3JvdXBIaW50KHQsIGUpO1xuICAgICAgY2FzZSB1LkRlYXRoUmF0ZUhpbnQ6XG4gICAgICAgIHJldHVybiB0aGlzLmRlYXRoUmF0ZUhpbnQodCwgZSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuICByYW5kb21IaW50VGlsZSh0KSB7XG4gICAgaWYgKHQubGVuZ3RoIDw9IDApIHJldHVybiBbXTtcbiAgICB2YXIgZSA9IHRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdC5sZW5ndGgpXTtcbiAgICByZXR1cm4gW2UudGlsZTEsIGUudGlsZTJdO1xuICB9XG4gIGRlYXRoR3JvdXBIaW50KHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgYSxcbiAgICAgIGwgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKHQpLCBjID0gdS5uZXh0KCk7ICFjLmRvbmU7IGMgPSB1Lm5leHQoKSkge1xuICAgICAgICB2YXIgZiA9IGMudmFsdWUsXG4gICAgICAgICAgZCA9IERlYWRTZWxlY3RVdGlscy5nZXRBbGxNYXRjaFRpbGVzKGYpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHkgPSAoaSA9IHZvaWQgMCwgX192YWx1ZXMoZCkpLCBoID0geS5uZXh0KCk7ICFoLmRvbmU7IGggPSB5Lm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHAgPSBoLnZhbHVlLFxuICAgICAgICAgICAgICB2ID0gdGhpcy5pc0RlYXRoR3JvdXAocCwgZSk7XG4gICAgICAgICAgICBsLnB1c2goe1xuICAgICAgICAgICAgICB0aWxlMTogcFswXSxcbiAgICAgICAgICAgICAgdGlsZTI6IHBbMV0sXG4gICAgICAgICAgICAgIHByaW9yaXR5OiB2XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBoICYmICFoLmRvbmUgJiYgKGEgPSB5LnJldHVybikgJiYgYS5jYWxsKHkpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChuID0gdS5yZXR1cm4pICYmIG4uY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobC5sZW5ndGggPD0gMCkgcmV0dXJuIFtdO1xuICAgIGwuc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgcmV0dXJuIGUucHJpb3JpdHkgLSB0LnByaW9yaXR5O1xuICAgIH0pO1xuICAgIHZhciBEID0gbFswXS5wcmlvcml0eSxcbiAgICAgIGcgPSBsLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5wcmlvcml0eSA9PT0gRDtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJhbmRvbUhpbnRUaWxlKGcpO1xuICB9XG4gIG5vbkRlYXRoR3JvdXBIaW50KHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgYSxcbiAgICAgIGwgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKHQpLCBjID0gdS5uZXh0KCk7ICFjLmRvbmU7IGMgPSB1Lm5leHQoKSkge1xuICAgICAgICB2YXIgZiA9IGMudmFsdWUsXG4gICAgICAgICAgZCA9IERlYWRTZWxlY3RVdGlscy5nZXRBbGxNYXRjaFRpbGVzKGYpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHkgPSAoaSA9IHZvaWQgMCwgX192YWx1ZXMoZCkpLCBoID0geS5uZXh0KCk7ICFoLmRvbmU7IGggPSB5Lm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHAgPSBoLnZhbHVlLFxuICAgICAgICAgICAgICB2ID0gdGhpcy5pc0RlYXRoR3JvdXAocCwgZSk7XG4gICAgICAgICAgICBsLnB1c2goe1xuICAgICAgICAgICAgICB0aWxlMTogcFswXSxcbiAgICAgICAgICAgICAgdGlsZTI6IHBbMV0sXG4gICAgICAgICAgICAgIHByaW9yaXR5OiB2XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBoICYmICFoLmRvbmUgJiYgKGEgPSB5LnJldHVybikgJiYgYS5jYWxsKHkpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChuID0gdS5yZXR1cm4pICYmIG4uY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobC5sZW5ndGggPD0gMCkgcmV0dXJuIFtdO1xuICAgIGwuc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgcmV0dXJuIHQucHJpb3JpdHkgLSBlLnByaW9yaXR5O1xuICAgIH0pO1xuICAgIHZhciBEID0gbFswXS5wcmlvcml0eSxcbiAgICAgIGcgPSBsLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5wcmlvcml0eSA9PT0gRDtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJhbmRvbUhpbnRUaWxlKGcpO1xuICB9XG4gIGlzRGVhdGhHcm91cCh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICB1ID0gX19yZWFkKHQsIDIpLFxuICAgICAgYyA9IHVbMF0sXG4gICAgICBmID0gdVsxXSxcbiAgICAgIHMgPSAwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBkID0gX192YWx1ZXMoZS5sZXZlbEFsbERlYXRoUGFpcnMpLCB5ID0gZC5uZXh0KCk7ICF5LmRvbmU7IHkgPSBkLm5leHQoKSkge1xuICAgICAgICB2YXIgaCA9IHkudmFsdWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgcCA9IChpID0gdm9pZCAwLCBfX3ZhbHVlcyhoKSksIHYgPSBwLm5leHQoKTsgIXYuZG9uZTsgdiA9IHAubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgRCA9IHYudmFsdWU7XG4gICAgICAgICAgICBpZiAoRC5pc0VxdWFsKHtcbiAgICAgICAgICAgICAgdGlsZTFJZDogYy5pZCxcbiAgICAgICAgICAgICAgdGlsZTJJZDogZi5pZFxuICAgICAgICAgICAgfSkpIHJldHVybiBzID0gMjtcbiAgICAgICAgICAgIChELmNvbnRhaW5zVGlsZShjLmlkKSB8fCBELmNvbnRhaW5zVGlsZShmLmlkKSkgJiYgKHMgPSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2ICYmICF2LmRvbmUgJiYgKGEgPSBwLnJldHVybikgJiYgYS5jYWxsKHApO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgeSAmJiAheS5kb25lICYmIChuID0gZC5yZXR1cm4pICYmIG4uY2FsbChkKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcztcbiAgfVxuICBkZWF0aFJhdGVIaW50KHQsIGUpIHtcbiAgICB2YXIgciwgbjtcbiAgICByZXR1cm4gKG51bGwgIT09IChuID0gbnVsbCA9PT0gKHIgPSBFeHRyYWN0Tm9ybWFsTGV2ZWxzLmdldEluc3RhbmNlKCkuZ2V0RGF0YSgpKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmRpZURpbWVuc2lvblZhbHVlKSAmJiB2b2lkIDAgIT09IG4gPyBuIDogMSkgPj0gdGhpcy5kZWF0aExpbWl0ID8gdGhpcy5kZWF0aEdyb3VwSGludCh0LCBlKSA6IHRoaXMubm9uRGVhdGhHcm91cEhpbnQodCwgZSk7XG4gIH1cbn0iXX0=
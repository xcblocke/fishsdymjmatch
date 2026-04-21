
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_deathAnalyze/Scripts/AvoidDeadHitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6357c3H6DNCgYSdoGOIiPCs', 'AvoidDeadHitTrait');
// subpackages/l_deathAnalyze/Scripts/AvoidDeadHitTrait.ts

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
var AvoidDeadHitTrait = /** @class */ (function (_super) {
    __extends(AvoidDeadHitTrait, _super);
    function AvoidDeadHitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AvoidDeadHitTrait.prototype, "deathLimit", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.deathLimit) && void 0 !== e ? e : 3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AvoidDeadHitTrait.prototype, "strategy", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.strategy) && void 0 !== e ? e : u.NonDeathGroupHint;
        },
        enumerable: false,
        configurable: true
    });
    AvoidDeadHitTrait.prototype.onIptHitTips_findHint = function (t, e) {
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
                        returnVal: a,
                        isBreak: true
                    });
                }
            }
        }
        else
            e();
    };
    AvoidDeadHitTrait.prototype.randomHintTile = function (t) {
        if (t.length <= 0)
            return [];
        var e = t[Math.floor(Math.random() * t.length)];
        return [e.tile1, e.tile2];
    };
    AvoidDeadHitTrait.prototype.findHintTile = function (t, e) {
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
    AvoidDeadHitTrait.prototype.deathGroupHint = function (t, e) {
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
    AvoidDeadHitTrait.prototype.nonDeathGroupHint = function (t, e) {
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
    AvoidDeadHitTrait.prototype.isDeathGroup = function (t, e) {
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
    AvoidDeadHitTrait.prototype.deathRateHint = function (t, e) {
        var r, n;
        return (null !== (n = null === (r = ExtractNormalLevels_1.default.getInstance().getData()) || void 0 === r ? void 0 : r.dieDimensionValue) && void 0 !== n ? n : 1) >= this.deathLimit ? this.deathGroupHint(t, e) : this.nonDeathGroupHint(t, e);
    };
    AvoidDeadHitTrait.traitKey = "AvoidDeadHit";
    AvoidDeadHitTrait = __decorate([
        mj.trait,
        mj.class("AvoidDeadHitTrait")
    ], AvoidDeadHitTrait);
    return AvoidDeadHitTrait;
}(Trait_1.default));
exports.default = AvoidDeadHitTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RlYXRoQW5hbHl6ZS9TY3JpcHRzL0F2b2lkRGVhZEhpdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpR0FBNEY7QUFDNUYsZ0VBQTJEO0FBQzNELHFEQUFvRDtBQUNwRCxzRUFBaUU7QUFDakUsSUFBSyxDQUlKO0FBSkQsV0FBSyxDQUFDO0lBQ0osbURBQXFCLENBQUE7SUFDckIsNkNBQWtCLENBQUE7SUFDbEIsMkNBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpJLENBQUMsS0FBRCxDQUFDLFFBSUw7QUFHRDtJQUErQyxxQ0FBSztJQUFwRDs7SUF5TUEsQ0FBQztJQXZNQyxzQkFBSSx5Q0FBVTthQUFkO1lBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0SCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHVDQUFRO2FBQVo7WUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENB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dHJhY3ROb3JtYWxMZXZlbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0Tm9ybWFsTGV2ZWxzJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBEZWFkU2VsZWN0VXRpbHMgfSBmcm9tICcuL0RlYWRTZWxlY3RVdGlscyc7XG5pbXBvcnQgRGVhdGhBbmFseXNlck1nciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0RlYXRoQW5hbHlzZXJNZ3InO1xuZW51bSB1IHtcbiAgTm9uRGVhdGhHcm91cEhpbnQgPSAxLFxuICBEZWF0aEdyb3VwSGludCA9IDIsXG4gIERlYXRoUmF0ZUhpbnQgPSAzLFxufVxuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJBdm9pZERlYWRIaXRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZvaWREZWFkSGl0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQXZvaWREZWFkSGl0XCI7XG4gIGdldCBkZWF0aExpbWl0KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZGVhdGhMaW1pdCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDM7XG4gIH1cbiAgZ2V0IHN0cmF0ZWd5KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuc3RyYXRlZ3kpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiB1Lk5vbkRlYXRoR3JvdXBIaW50O1xuICB9XG4gIG9uSXB0SGl0VGlwc19maW5kSGludCh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBuID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJEZWF0aEFuYWx5c2VyVHJhaXRcIik7XG4gICAgaWYgKG4gJiYgbi5nZXRJbnN0YW5jZSgpICYmIG4uZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQpIHtcbiAgICAgIHZhciBpID0gRGVhdGhBbmFseXNlck1nci5pbnN0YW5jZS5hbmFseXplQ2FyZFBhaXIobnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nYW1lQ29udGV4dCk7XG4gICAgICBpZiAoaS5sZXZlbEFsbERlYXRoUGFpcnMubGVuZ3RoIDw9IDApIGUoKTtlbHNlIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmZpbmRIaW50VGlsZSh0LmFyZ3NbMF0sIGkpO1xuICAgICAgICBpZiAoIWEgfHwgYS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlKHtcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgIHJldHVyblZhbDogYSxcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgcmFuZG9tSGludFRpbGUodCkge1xuICAgIGlmICh0Lmxlbmd0aCA8PSAwKSByZXR1cm4gW107XG4gICAgdmFyIGUgPSB0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHQubGVuZ3RoKV07XG4gICAgcmV0dXJuIFtlLnRpbGUxLCBlLnRpbGUyXTtcbiAgfVxuICBmaW5kSGludFRpbGUodCwgZSkge1xuICAgIHN3aXRjaCAodGhpcy5zdHJhdGVneSkge1xuICAgICAgY2FzZSB1Lk5vbkRlYXRoR3JvdXBIaW50OlxuICAgICAgICByZXR1cm4gdGhpcy5ub25EZWF0aEdyb3VwSGludCh0LCBlKTtcbiAgICAgIGNhc2UgdS5EZWF0aEdyb3VwSGludDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVhdGhHcm91cEhpbnQodCwgZSk7XG4gICAgICBjYXNlIHUuRGVhdGhSYXRlSGludDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVhdGhSYXRlSGludCh0LCBlKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGRlYXRoR3JvdXBIaW50KHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgYSxcbiAgICAgIGwgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKHQpLCBjID0gdS5uZXh0KCk7ICFjLmRvbmU7IGMgPSB1Lm5leHQoKSkge1xuICAgICAgICB2YXIgZiA9IGMudmFsdWUsXG4gICAgICAgICAgZCA9IERlYWRTZWxlY3RVdGlscy5nZXRBbGxNYXRjaFRpbGVzKGYpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHkgPSAoaSA9IHZvaWQgMCwgX192YWx1ZXMoZCkpLCBoID0geS5uZXh0KCk7ICFoLmRvbmU7IGggPSB5Lm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHAgPSBoLnZhbHVlLFxuICAgICAgICAgICAgICB2ID0gdGhpcy5pc0RlYXRoR3JvdXAocCwgZSk7XG4gICAgICAgICAgICBsLnB1c2goe1xuICAgICAgICAgICAgICB0aWxlMTogcFswXSxcbiAgICAgICAgICAgICAgdGlsZTI6IHBbMV0sXG4gICAgICAgICAgICAgIHByaW9yaXR5OiB2XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBoICYmICFoLmRvbmUgJiYgKGEgPSB5LnJldHVybikgJiYgYS5jYWxsKHkpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChuID0gdS5yZXR1cm4pICYmIG4uY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobC5sZW5ndGggPD0gMCkgcmV0dXJuIFtdO1xuICAgIGwuc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgcmV0dXJuIGUucHJpb3JpdHkgLSB0LnByaW9yaXR5O1xuICAgIH0pO1xuICAgIHZhciBEID0gbFswXS5wcmlvcml0eSxcbiAgICAgIGcgPSBsLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5wcmlvcml0eSA9PT0gRDtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJhbmRvbUhpbnRUaWxlKGcpO1xuICB9XG4gIG5vbkRlYXRoR3JvdXBIaW50KHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgYSxcbiAgICAgIGwgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKHQpLCBjID0gdS5uZXh0KCk7ICFjLmRvbmU7IGMgPSB1Lm5leHQoKSkge1xuICAgICAgICB2YXIgZiA9IGMudmFsdWUsXG4gICAgICAgICAgZCA9IERlYWRTZWxlY3RVdGlscy5nZXRBbGxNYXRjaFRpbGVzKGYpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHkgPSAoaSA9IHZvaWQgMCwgX192YWx1ZXMoZCkpLCBoID0geS5uZXh0KCk7ICFoLmRvbmU7IGggPSB5Lm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIHAgPSBoLnZhbHVlLFxuICAgICAgICAgICAgICB2ID0gdGhpcy5pc0RlYXRoR3JvdXAocCwgZSk7XG4gICAgICAgICAgICBsLnB1c2goe1xuICAgICAgICAgICAgICB0aWxlMTogcFswXSxcbiAgICAgICAgICAgICAgdGlsZTI6IHBbMV0sXG4gICAgICAgICAgICAgIHByaW9yaXR5OiB2XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBoICYmICFoLmRvbmUgJiYgKGEgPSB5LnJldHVybikgJiYgYS5jYWxsKHkpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChuID0gdS5yZXR1cm4pICYmIG4uY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobC5sZW5ndGggPD0gMCkgcmV0dXJuIFtdO1xuICAgIGwuc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgcmV0dXJuIHQucHJpb3JpdHkgLSBlLnByaW9yaXR5O1xuICAgIH0pO1xuICAgIHZhciBEID0gbFswXS5wcmlvcml0eSxcbiAgICAgIGcgPSBsLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdC5wcmlvcml0eSA9PT0gRDtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJhbmRvbUhpbnRUaWxlKGcpO1xuICB9XG4gIGlzRGVhdGhHcm91cCh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICB1ID0gX19yZWFkKHQsIDIpLFxuICAgICAgYyA9IHVbMF0sXG4gICAgICBmID0gdVsxXSxcbiAgICAgIHMgPSAwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBkID0gX192YWx1ZXMoZS5sZXZlbEFsbERlYXRoUGFpcnMpLCB5ID0gZC5uZXh0KCk7ICF5LmRvbmU7IHkgPSBkLm5leHQoKSkge1xuICAgICAgICB2YXIgaCA9IHkudmFsdWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgcCA9IChpID0gdm9pZCAwLCBfX3ZhbHVlcyhoKSksIHYgPSBwLm5leHQoKTsgIXYuZG9uZTsgdiA9IHAubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgRCA9IHYudmFsdWU7XG4gICAgICAgICAgICBpZiAoRC5pc0VxdWFsKHtcbiAgICAgICAgICAgICAgdGlsZTFJZDogYy5pZCxcbiAgICAgICAgICAgICAgdGlsZTJJZDogZi5pZFxuICAgICAgICAgICAgfSkpIHJldHVybiBzID0gMjtcbiAgICAgICAgICAgIChELmNvbnRhaW5zVGlsZShjLmlkKSB8fCBELmNvbnRhaW5zVGlsZShmLmlkKSkgJiYgKHMgPSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2ICYmICF2LmRvbmUgJiYgKGEgPSBwLnJldHVybikgJiYgYS5jYWxsKHApO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgeSAmJiAheS5kb25lICYmIChuID0gZC5yZXR1cm4pICYmIG4uY2FsbChkKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcztcbiAgfVxuICBkZWF0aFJhdGVIaW50KHQsIGUpIHtcbiAgICB2YXIgciwgbjtcbiAgICByZXR1cm4gKG51bGwgIT09IChuID0gbnVsbCA9PT0gKHIgPSBFeHRyYWN0Tm9ybWFsTGV2ZWxzLmdldEluc3RhbmNlKCkuZ2V0RGF0YSgpKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmRpZURpbWVuc2lvblZhbHVlKSAmJiB2b2lkIDAgIT09IG4gPyBuIDogMSkgPj0gdGhpcy5kZWF0aExpbWl0ID8gdGhpcy5kZWF0aEdyb3VwSGludCh0LCBlKSA6IHRoaXMubm9uRGVhdGhHcm91cEhpbnQodCwgZSk7XG4gIH1cbn0iXX0=
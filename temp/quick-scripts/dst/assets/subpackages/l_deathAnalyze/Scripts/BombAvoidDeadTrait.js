
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_deathAnalyze/Scripts/BombAvoidDeadTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8da69ySi1dFbq2W/TM1nFoG', 'BombAvoidDeadTrait');
// subpackages/l_deathAnalyze/Scripts/BombAvoidDeadTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractNormalLevels_1 = require("../../../Scripts/core/extractQuestion/ExtractNormalLevels");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DeathAnalyserMgr_1 = require("../../../Scripts/DeathAnalyserMgr");
var u;
(function (u) {
    u[u["NonDeathGroup"] = 1] = "NonDeathGroup";
    u[u["DeathGroup"] = 2] = "DeathGroup";
    u[u["DeathRate"] = 3] = "DeathRate";
})(u || (u = {}));
var BombAvoidDeadTrait = /** @class */ (function (_super) {
    __extends(BombAvoidDeadTrait, _super);
    function BombAvoidDeadTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BombAvoidDeadTrait.prototype, "deathLimit", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.deathLimit) && void 0 !== e ? e : 3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BombAvoidDeadTrait.prototype, "strategy", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.strategy) && void 0 !== e ? e : u.NonDeathGroup;
        },
        enumerable: false,
        configurable: true
    });
    BombAvoidDeadTrait.prototype.onBombCdTp_filterList = function (t, e) {
        var r = this, n = (null == t ? void 0 : t.beforReturnVal) || [];
        n.push({
            filter: function (t, e, n) {
                return r.filter(t, e, n);
            }
        });
        e({
            returnVal: n
        });
    };
    BombAvoidDeadTrait.prototype.filter = function (t, e, r) {
        var n = mj.getClassByName("DeathAnalyserTrait");
        if (!n || !n.getInstance() || !n.getInstance().eventEnabled)
            return [false, 999];
        var i = DeathAnalyserMgr_1.default.instance.analyzeCardPair(t);
        if (i.levelAllDeathPairs.length <= 0)
            return [false, 999];
        if (this.isDeathGroup([e, r], i)) {
            return [true, this.getPriority()];
        }
        return [false, 999];
    };
    BombAvoidDeadTrait.prototype.getPriority = function () {
        var t, e;
        switch (this.strategy) {
            case u.NonDeathGroup:
                return 999;
            case u.DeathGroup:
                return 0;
            case u.DeathRate:
                return (null !== (e = null === (t = ExtractNormalLevels_1.default.getInstance().getData()) || void 0 === t ? void 0 : t.dieDimensionValue) && void 0 !== e ? e : 1) >= this.deathLimit ? 0 : 999;
        }
        return 999;
    };
    BombAvoidDeadTrait.prototype.isDeathGroup = function (t, e) {
        var r, n, i, a, u = __read(t, 2), c = u[0], f = u[1];
        try {
            for (var s = __values(e.levelAllDeathPairs), d = s.next(); !d.done; d = s.next()) {
                var y = d.value;
                try {
                    for (var h = (i = void 0, __values(y)), p = h.next(); !p.done; p = h.next())
                        if (p.value.isEqual({
                            tile1Id: c.id,
                            tile2Id: f.id
                        }))
                            return true;
                }
                catch (t) {
                    i = {
                        error: t
                    };
                }
                finally {
                    try {
                        p && !p.done && (a = h.return) && a.call(h);
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
                d && !d.done && (n = s.return) && n.call(s);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return false;
    };
    BombAvoidDeadTrait.traitKey = "BombAvoidDead";
    BombAvoidDeadTrait = __decorate([
        mj.trait,
        mj.class("BombAvoidDeadTrait")
    ], BombAvoidDeadTrait);
    return BombAvoidDeadTrait;
}(Trait_1.default));
exports.default = BombAvoidDeadTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RlYXRoQW5hbHl6ZS9TY3JpcHRzL0JvbWJBdm9pZERlYWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUdBQTRGO0FBQzVGLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFDakUsSUFBSyxDQUlKO0FBSkQsV0FBSyxDQUFDO0lBQ0osMkNBQWlCLENBQUE7SUFDakIscUNBQWMsQ0FBQTtJQUNkLG1DQUFhLENBQUE7QUFDZixDQUFDLEVBSkksQ0FBQyxLQUFELENBQUMsUUFJTDtBQUdEO0lBQWdELHNDQUFLO0lBQXJEOztJQXFGQSxDQUFDO0lBbkZDLHNCQUFJLDBDQUFVO2FBQWQ7WUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RILENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksd0NBQVE7YUFBWjtZQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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QkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQW5GTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQURmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0FxRnRDO0lBQUQseUJBQUM7Q0FyRkQsQUFxRkMsQ0FyRitDLGVBQUssR0FxRnBEO2tCQXJGb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3ROb3JtYWxMZXZlbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0Tm9ybWFsTGV2ZWxzJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgRGVhdGhBbmFseXNlck1nciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0RlYXRoQW5hbHlzZXJNZ3InO1xuZW51bSB1IHtcbiAgTm9uRGVhdGhHcm91cCA9IDEsXG4gIERlYXRoR3JvdXAgPSAyLFxuICBEZWF0aFJhdGUgPSAzLFxufVxuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJCb21iQXZvaWREZWFkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvbWJBdm9pZERlYWRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJCb21iQXZvaWREZWFkXCI7XG4gIGdldCBkZWF0aExpbWl0KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZGVhdGhMaW1pdCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDM7XG4gIH1cbiAgZ2V0IHN0cmF0ZWd5KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuc3RyYXRlZ3kpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiB1Lk5vbkRlYXRoR3JvdXA7XG4gIH1cbiAgb25Cb21iQ2RUcF9maWx0ZXJMaXN0KHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMsXG4gICAgICBuID0gKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuYmVmb3JSZXR1cm5WYWwpIHx8IFtdO1xuICAgIG4ucHVzaCh7XG4gICAgICBmaWx0ZXI6IGZ1bmN0aW9uICh0LCBlLCBuKSB7XG4gICAgICAgIHJldHVybiByLmZpbHRlcih0LCBlLCBuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogblxuICAgIH0pO1xuICB9XG4gIGZpbHRlcih0LCBlLCByKSB7XG4gICAgdmFyIG4gPSBtai5nZXRDbGFzc0J5TmFtZShcIkRlYXRoQW5hbHlzZXJUcmFpdFwiKTtcbiAgICBpZiAoIW4gfHwgIW4uZ2V0SW5zdGFuY2UoKSB8fCAhbi5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCkgcmV0dXJuIFtmYWxzZSwgOTk5XTtcbiAgICB2YXIgaSA9IERlYXRoQW5hbHlzZXJNZ3IuaW5zdGFuY2UuYW5hbHl6ZUNhcmRQYWlyKHQpO1xuICAgIGlmIChpLmxldmVsQWxsRGVhdGhQYWlycy5sZW5ndGggPD0gMCkgcmV0dXJuIFtmYWxzZSwgOTk5XTtcbiAgICBpZiAodGhpcy5pc0RlYXRoR3JvdXAoW2UsIHJdLCBpKSkge1xuICAgICAgcmV0dXJuIFt0cnVlLCB0aGlzLmdldFByaW9yaXR5KCldO1xuICAgIH1cbiAgICByZXR1cm4gW2ZhbHNlLCA5OTldO1xuICB9XG4gIGdldFByaW9yaXR5KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHN3aXRjaCAodGhpcy5zdHJhdGVneSkge1xuICAgICAgY2FzZSB1Lk5vbkRlYXRoR3JvdXA6XG4gICAgICAgIHJldHVybiA5OTk7XG4gICAgICBjYXNlIHUuRGVhdGhHcm91cDpcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICBjYXNlIHUuRGVhdGhSYXRlOlxuICAgICAgICByZXR1cm4gKG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSBFeHRyYWN0Tm9ybWFsTGV2ZWxzLmdldEluc3RhbmNlKCkuZ2V0RGF0YSgpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmRpZURpbWVuc2lvblZhbHVlKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMSkgPj0gdGhpcy5kZWF0aExpbWl0ID8gMCA6IDk5OTtcbiAgICB9XG4gICAgcmV0dXJuIDk5OTtcbiAgfVxuICBpc0RlYXRoR3JvdXAodCwgZSkge1xuICAgIHZhciByLFxuICAgICAgbixcbiAgICAgIGksXG4gICAgICBhLFxuICAgICAgdSA9IF9fcmVhZCh0LCAyKSxcbiAgICAgIGMgPSB1WzBdLFxuICAgICAgZiA9IHVbMV07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhlLmxldmVsQWxsRGVhdGhQYWlycyksIGQgPSBzLm5leHQoKTsgIWQuZG9uZTsgZCA9IHMubmV4dCgpKSB7XG4gICAgICAgIHZhciB5ID0gZC52YWx1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBoID0gKGkgPSB2b2lkIDAsIF9fdmFsdWVzKHkpKSwgcCA9IGgubmV4dCgpOyAhcC5kb25lOyBwID0gaC5uZXh0KCkpIGlmIChwLnZhbHVlLmlzRXF1YWwoe1xuICAgICAgICAgICAgdGlsZTFJZDogYy5pZCxcbiAgICAgICAgICAgIHRpbGUySWQ6IGYuaWRcbiAgICAgICAgICB9KSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwICYmICFwLmRvbmUgJiYgKGEgPSBoLnJldHVybikgJiYgYS5jYWxsKGgpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZCAmJiAhZC5kb25lICYmIChuID0gcy5yZXR1cm4pICYmIG4uY2FsbChzKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=
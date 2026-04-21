
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hardLevel/Scripts/HardLevelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52a2aqdEuJH/qHQw7/NZUax', 'HardLevelTrait');
// subpackages/l_hardLevel/Scripts/HardLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var HardLevelTrait = /** @class */ (function (_super) {
    __extends(HardLevelTrait, _super);
    function HardLevelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardLevelTrait.prototype.onLoad = function () {
        var t, r, a, i, n, o, l, u, c, s, v, p, d;
        _super.prototype.onLoad.call(this);
        var f = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.startLevel) && void 0 !== r ? r : 10, y = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 10, h = null !== (o = null === (n = this._traitData) || void 0 === n ? void 0 : n.hardMod) && void 0 !== o ? o : 0, _ = null !== (u = null === (l = this._traitData) || void 0 === l ? void 0 : l.expertMod) && void 0 !== u ? u : 5, T = null === (s = null === (c = this._traitData) || void 0 === c ? void 0 : c.useFixedLevel) || void 0 === s || s, k = null !== (p = null === (v = this._traitData) || void 0 === v ? void 0 : v.levelDataPath) && void 0 !== p ? p : "config/specialLevels/special_levels_travel", g = (null === (d = this._traitData) || void 0 === d ? void 0 : d.levelDataBundle) || "mainRes";
        this._config = {
            startLevel: f,
            interval: y,
            hardMods: Array.isArray(h) ? h : [h],
            expertMods: Array.isArray(_) ? _ : [_],
            useFixedLevel: T,
            levelDataPath: k,
            levelDataBundle: g
        };
    };
    HardLevelTrait.prototype.onTravelHardLv_getDataCfg = function (e, t) {
        if (this.checkGameMode()) {
            var r = this._config, a = r.levelDataPath, i = r.levelDataBundle;
            if (a) {
                t({
                    returnVal: {
                        dataPath: a,
                        bundleName: i
                    },
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    HardLevelTrait.prototype.onExtractTool_isHardUI = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], a = this.checkIsHardLevel(r);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: a
            });
        }
        else
            t();
    };
    HardLevelTrait.prototype.onExtractTool_isExpertUI = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], a = this.checkIsExpertLevel(r);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: a
            });
        }
        else
            t();
    };
    HardLevelTrait.prototype.onExtractTool_isHardUseFix = function (e, t) {
        if (this.checkGameMode()) {
            e.args[0];
            var r = this._config.useFixedLevel;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r
            });
        }
        else
            t();
    };
    HardLevelTrait.prototype.onTLGameModel_isHardLv = function (e, t) {
        var r = e.args[0];
        if (this.checkTravelActivity(r)) {
            var a = this.checkIsHardLevel(r) || this.checkIsExpertLevel(r);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: a
            });
        }
        else
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: false
            });
    };
    HardLevelTrait.prototype.checkTravelActivity = function (e) {
        var t, r, a = this._traitData.travelActivitys || ["Yoga", "Flip", "Color"], i = TravelGameModel_1.default.getInstance(), n = i.getCurJourney();
        if (!n)
            return false;
        var l = i.getLevelById(e, n);
        if (!l || !l.playType)
            return false;
        try {
            for (var u = __values(l.playType), s = u.next(); !s.done; s = u.next()) {
                var v = s.value, p = this.journeyTypeToString(v);
                if (p && a.includes(p))
                    return true;
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (r = u.return) && r.call(u);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return false;
    };
    HardLevelTrait.prototype.onExtractTool_isTravelHard = function (e, t) {
        if (this.checkGameMode()) {
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: true
            });
        }
        else {
            t();
        }
    };
    HardLevelTrait.prototype.checkIsHardLevel = function (e) {
        var t = this._config, r = t.startLevel, a = t.interval, i = t.hardMods;
        if (e < r)
            return false;
        var n = e % a;
        return i.includes(n);
    };
    HardLevelTrait.prototype.checkIsExpertLevel = function (e) {
        var t = this._config, r = t.startLevel, a = t.interval, i = t.expertMods;
        if (e < r)
            return false;
        var n = e % a;
        return i.includes(n);
    };
    HardLevelTrait.traitKey = "HardLevel";
    HardLevelTrait = __decorate([
        mj.trait,
        mj.class("HardLevelTrait")
    ], HardLevelTrait);
    return HardLevelTrait;
}(ExtractTrait_1.default));
exports.default = HardLevelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhcmRMZXZlbC9TY3JpcHRzL0hhcmRMZXZlbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsOEVBQXdGO0FBQ3hGLDBGQUFxRjtBQUdyRjtJQUE0QyxrQ0FBWTtJQUF4RDs7SUFrSkEsQ0FBQztJQWhKQywrQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDcEgsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUNoSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzlHLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDaEgsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUNqSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyw0Q0FBNEMsRUFDL0os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QUNELHlDQUFnQixHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0QsMkNBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFDbEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFoSk0sdUJBQVEsR0FBRyxXQUFXLENBQUM7SUFEWCxjQUFjO1FBRmxDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0FrSmxDO0lBQUQscUJBQUM7Q0FsSkQsQUFrSkMsQ0FsSjJDLHNCQUFZLEdBa0p2RDtrQkFsSm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBUcmF2ZWxHYW1lTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSGFyZExldmVsVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhcmRMZXZlbFRyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJIYXJkTGV2ZWxcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciB0LCByLCBhLCBpLCBuLCBvLCBsLCB1LCBjLCBzLCB2LCBwLCBkO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBmID0gbnVsbCAhPT0gKHIgPSBudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5zdGFydExldmVsKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMTAsXG4gICAgICB5ID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5pbnRlcnZhbCkgJiYgdm9pZCAwICE9PSBpID8gaSA6IDEwLFxuICAgICAgaCA9IG51bGwgIT09IChvID0gbnVsbCA9PT0gKG4gPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uaGFyZE1vZCkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDAsXG4gICAgICBfID0gbnVsbCAhPT0gKHUgPSBudWxsID09PSAobCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBsID8gdm9pZCAwIDogbC5leHBlcnRNb2QpICYmIHZvaWQgMCAhPT0gdSA/IHUgOiA1LFxuICAgICAgVCA9IG51bGwgPT09IChzID0gbnVsbCA9PT0gKGMgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYyA/IHZvaWQgMCA6IGMudXNlRml4ZWRMZXZlbCkgfHwgdm9pZCAwID09PSBzIHx8IHMsXG4gICAgICBrID0gbnVsbCAhPT0gKHAgPSBudWxsID09PSAodiA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB2ID8gdm9pZCAwIDogdi5sZXZlbERhdGFQYXRoKSAmJiB2b2lkIDAgIT09IHAgPyBwIDogXCJjb25maWcvc3BlY2lhbExldmVscy9zcGVjaWFsX2xldmVsc190cmF2ZWxcIixcbiAgICAgIGcgPSAobnVsbCA9PT0gKGQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZCA/IHZvaWQgMCA6IGQubGV2ZWxEYXRhQnVuZGxlKSB8fCBcIm1haW5SZXNcIjtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBzdGFydExldmVsOiBmLFxuICAgICAgaW50ZXJ2YWw6IHksXG4gICAgICBoYXJkTW9kczogQXJyYXkuaXNBcnJheShoKSA/IGggOiBbaF0sXG4gICAgICBleHBlcnRNb2RzOiBBcnJheS5pc0FycmF5KF8pID8gXyA6IFtfXSxcbiAgICAgIHVzZUZpeGVkTGV2ZWw6IFQsXG4gICAgICBsZXZlbERhdGFQYXRoOiBrLFxuICAgICAgbGV2ZWxEYXRhQnVuZGxlOiBnXG4gICAgfTtcbiAgfVxuICBvblRyYXZlbEhhcmRMdl9nZXREYXRhQ2ZnKGUsIHQpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gdGhpcy5fY29uZmlnLFxuICAgICAgICBhID0gci5sZXZlbERhdGFQYXRoLFxuICAgICAgICBpID0gci5sZXZlbERhdGFCdW5kbGU7XG4gICAgICBpZiAoYSkge1xuICAgICAgICB0KHtcbiAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgIGRhdGFQYXRoOiBhLFxuICAgICAgICAgICAgYnVuZGxlTmFtZTogaVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkV4dHJhY3RUb29sX2lzSGFyZFVJKGUsIHQpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gZS5hcmdzWzBdLFxuICAgICAgICBhID0gdGhpcy5jaGVja0lzSGFyZExldmVsKHIpO1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBhXG4gICAgICB9KTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uRXh0cmFjdFRvb2xfaXNFeHBlcnRVSShlLCB0KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgciA9IGUuYXJnc1swXSxcbiAgICAgICAgYSA9IHRoaXMuY2hlY2tJc0V4cGVydExldmVsKHIpO1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBhXG4gICAgICB9KTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uRXh0cmFjdFRvb2xfaXNIYXJkVXNlRml4KGUsIHQpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIGUuYXJnc1swXTtcbiAgICAgIHZhciByID0gdGhpcy5fY29uZmlnLnVzZUZpeGVkTGV2ZWw7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25UTEdhbWVNb2RlbF9pc0hhcmRMdihlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmFyZ3NbMF07XG4gICAgaWYgKHRoaXMuY2hlY2tUcmF2ZWxBY3Rpdml0eShyKSkge1xuICAgICAgdmFyIGEgPSB0aGlzLmNoZWNrSXNIYXJkTGV2ZWwocikgfHwgdGhpcy5jaGVja0lzRXhwZXJ0TGV2ZWwocik7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IGFcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgY2hlY2tUcmF2ZWxBY3Rpdml0eShlKSB7XG4gICAgdmFyIHQsXG4gICAgICByLFxuICAgICAgYSA9IHRoaXMuX3RyYWl0RGF0YS50cmF2ZWxBY3Rpdml0eXMgfHwgW1wiWW9nYVwiLCBcIkZsaXBcIiwgXCJDb2xvclwiXSxcbiAgICAgIGkgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIG4gPSBpLmdldEN1ckpvdXJuZXkoKTtcbiAgICBpZiAoIW4pIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbCA9IGkuZ2V0TGV2ZWxCeUlkKGUsIG4pO1xuICAgIGlmICghbCB8fCAhbC5wbGF5VHlwZSkgcmV0dXJuIGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciB1ID0gX192YWx1ZXMobC5wbGF5VHlwZSksIHMgPSB1Lm5leHQoKTsgIXMuZG9uZTsgcyA9IHUubmV4dCgpKSB7XG4gICAgICAgIHZhciB2ID0gcy52YWx1ZSxcbiAgICAgICAgICBwID0gdGhpcy5qb3VybmV5VHlwZVRvU3RyaW5nKHYpO1xuICAgICAgICBpZiAocCAmJiBhLmluY2x1ZGVzKHApKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmIChyID0gdS5yZXR1cm4pICYmIHIuY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgb25FeHRyYWN0VG9vbF9pc1RyYXZlbEhhcmQoZSwgdCkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBjaGVja0lzSGFyZExldmVsKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX2NvbmZpZyxcbiAgICAgIHIgPSB0LnN0YXJ0TGV2ZWwsXG4gICAgICBhID0gdC5pbnRlcnZhbCxcbiAgICAgIGkgPSB0LmhhcmRNb2RzO1xuICAgIGlmIChlIDwgcikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBuID0gZSAlIGE7XG4gICAgcmV0dXJuIGkuaW5jbHVkZXMobik7XG4gIH1cbiAgY2hlY2tJc0V4cGVydExldmVsKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX2NvbmZpZyxcbiAgICAgIHIgPSB0LnN0YXJ0TGV2ZWwsXG4gICAgICBhID0gdC5pbnRlcnZhbCxcbiAgICAgIGkgPSB0LmV4cGVydE1vZHM7XG4gICAgaWYgKGUgPCByKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG4gPSBlICUgYTtcbiAgICByZXR1cm4gaS5pbmNsdWRlcyhuKTtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_staticLevel/Scripts/StaticLevelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0b44Pq5HRFcKHYjeMz9PqJ', 'StaticLevelTrait');
// subpackages/l_staticLevel/Scripts/StaticLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var ExtractStatic_1 = require("../../../Scripts/core/extractQuestion/ExtractStatic");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var f = {
    Flower: 35,
    Season: 36,
    Yoga: 37,
    Bomb: 38,
    TravelEgypt: 39,
    Rank: 50
};
var StaticLevelTrait = /** @class */ (function (_super) {
    __extends(StaticLevelTrait, _super);
    function StaticLevelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaticLevelTrait.prototype.onLoad = function () {
        var e, r, a, o = this;
        _super.prototype.onLoad.call(this);
        this._config = {
            dataPath: "byteData/static/" + (null === (e = this._traitData) || void 0 === e ? void 0 : e.dataPath),
            bundleName: null !== (a = null === (r = this._traitData) || void 0 === r ? void 0 : r.bundleName) && void 0 !== a ? a : "mainRes"
        };
        ExtractStatic_1.default.getInstance().loadData(null, function () {
            o.eventEnabled = false;
        });
    };
    StaticLevelTrait.prototype.onExtractTool_canUseStatic = function (t, e) {
        if (this.checkGameMode() && ExtractStatic_1.default.getInstance().isDataLoaded()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    StaticLevelTrait.prototype.onExtractStatic_getPatch = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: [this._config.dataPath, this._config.bundleName]
        });
    };
    StaticLevelTrait.prototype.onIptSetLv_reGenFaces = function (t, e) {
        var r;
        if (this.checkGameMode()) {
            var a = t.ins, o = t.args[0].levelData;
            if (o.isNewGame && !o.isRestart && ExtractTool_1.default.getInstance().canUseStaticContentByLevelID(o.levelId)) {
                var n = a.tileMapObject, l = this.collectOriginalCardIds(n.mapLayers());
                if (0 !== l.size) {
                    for (var s = Array.from({
                        length: 34
                    }, function (t, e) {
                        return e;
                    }), f = s.length - 1; f > 0; f--) {
                        var p = Math.floor(Math.random() * (f + 1));
                        r = __read([s[p], s[f]], 2), s[f] = r[0], s[p] = r[1];
                    }
                    var d = {};
                    Array.from(l).sort(function (t, e) {
                        return t - e;
                    }).forEach(function (t, e) {
                        d[t] = s[e % 34];
                    });
                    n.mapLayers().forEach(function (t) {
                        t.allCards.forEach(function (t) {
                            l.has(t.cardId) && n.changeTileResId(t.id, d[t.cardId]);
                        });
                    });
                    if (this.isNext()) {
                        e();
                    }
                    else {
                        e({
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            isBreak: true
                        });
                    }
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    StaticLevelTrait.prototype.isNext = function () {
        return false;
    };
    StaticLevelTrait.prototype.collectOriginalCardIds = function (t) {
        var e = new Set(), r = new Set(Object.values(f));
        t.forEach(function (t) {
            t.allCards.forEach(function (t) {
                !r.has(t.cardId) && t.resId >= 0 && t.resId <= 33 && e.add(t.cardId);
            });
        });
        return e;
    };
    StaticLevelTrait.traitKey = "StaticLevel";
    __decorate([
        mj.traitEvent("StaticLvTt_isNext")
    ], StaticLevelTrait.prototype, "isNext", null);
    StaticLevelTrait = __decorate([
        mj.trait,
        mj.class("StaticLevelTrait")
    ], StaticLevelTrait);
    return StaticLevelTrait;
}(ExtractTrait_1.default));
exports.default = StaticLevelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N0YXRpY0xldmVsL1NjcmlwdHMvU3RhdGljTGV2ZWxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXdGO0FBQ3hGLDhEQUF5RDtBQUN6RCxxRkFBZ0Y7QUFDaEYsaUZBQTRFO0FBQzVFLElBQUksQ0FBQyxHQUFHO0lBQ04sTUFBTSxFQUFFLEVBQUU7SUFDVixNQUFNLEVBQUUsRUFBRTtJQUNWLElBQUksRUFBRSxFQUFFO0lBQ1IsSUFBSSxFQUFFLEVBQUU7SUFDUixXQUFXLEVBQUUsRUFBRTtJQUNmLElBQUksRUFBRSxFQUFFO0NBQ1QsQ0FBQztBQUdGO0lBQThDLG9DQUFZO0lBQTFEOztJQXdGQSxDQUFDO0lBdEZDLGlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUM7UUFDWCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixRQUFRLEVBQUUsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDckcsVUFBVSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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QUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdEZNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBMEVoQztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7a0RBR2xDO0lBN0VrQixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBd0ZwQztJQUFELHVCQUFDO0NBeEZELEFBd0ZDLENBeEY2QyxzQkFBWSxHQXdGekQ7a0JBeEZvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmltcG9ydCBFeHRyYWN0U3RhdGljIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFN0YXRpYyc7XG5pbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG52YXIgZiA9IHtcbiAgRmxvd2VyOiAzNSxcbiAgU2Vhc29uOiAzNixcbiAgWW9nYTogMzcsXG4gIEJvbWI6IDM4LFxuICBUcmF2ZWxFZ3lwdDogMzksXG4gIFJhbms6IDUwXG59O1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTdGF0aWNMZXZlbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNMZXZlbFRyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTdGF0aWNMZXZlbFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsXG4gICAgICByLFxuICAgICAgYSxcbiAgICAgIG8gPSB0aGlzO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIGRhdGFQYXRoOiBcImJ5dGVEYXRhL3N0YXRpYy9cIiArIChudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5kYXRhUGF0aCksXG4gICAgICBidW5kbGVOYW1lOiBudWxsICE9PSAoYSA9IG51bGwgPT09IChyID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmJ1bmRsZU5hbWUpICYmIHZvaWQgMCAhPT0gYSA/IGEgOiBcIm1haW5SZXNcIlxuICAgIH07XG4gICAgRXh0cmFjdFN0YXRpYy5nZXRJbnN0YW5jZSgpLmxvYWREYXRhKG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG8uZXZlbnRFbmFibGVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbiAgb25FeHRyYWN0VG9vbF9jYW5Vc2VTdGF0aWModCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSAmJiBFeHRyYWN0U3RhdGljLmdldEluc3RhbmNlKCkuaXNEYXRhTG9hZGVkKCkpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25FeHRyYWN0U3RhdGljX2dldFBhdGNoKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IFt0aGlzLl9jb25maWcuZGF0YVBhdGgsIHRoaXMuX2NvbmZpZy5idW5kbGVOYW1lXVxuICAgIH0pO1xuICB9XG4gIG9uSXB0U2V0THZfcmVHZW5GYWNlcyh0LCBlKSB7XG4gICAgdmFyIHI7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgYSA9IHQuaW5zLFxuICAgICAgICBvID0gdC5hcmdzWzBdLmxldmVsRGF0YTtcbiAgICAgIGlmIChvLmlzTmV3R2FtZSAmJiAhby5pc1Jlc3RhcnQgJiYgRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5jYW5Vc2VTdGF0aWNDb250ZW50QnlMZXZlbElEKG8ubGV2ZWxJZCkpIHtcbiAgICAgICAgdmFyIG4gPSBhLnRpbGVNYXBPYmplY3QsXG4gICAgICAgICAgbCA9IHRoaXMuY29sbGVjdE9yaWdpbmFsQ2FyZElkcyhuLm1hcExheWVycygpKTtcbiAgICAgICAgaWYgKDAgIT09IGwuc2l6ZSkge1xuICAgICAgICAgIGZvciAodmFyIHMgPSBBcnJheS5mcm9tKHtcbiAgICAgICAgICAgICAgbGVuZ3RoOiAzNFxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICB9KSwgZiA9IHMubGVuZ3RoIC0gMTsgZiA+IDA7IGYtLSkge1xuICAgICAgICAgICAgdmFyIHAgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZiArIDEpKTtcbiAgICAgICAgICAgIHIgPSBfX3JlYWQoW3NbcF0sIHNbZl1dLCAyKSwgc1tmXSA9IHJbMF0sIHNbcF0gPSByWzFdO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZCA9IHt9O1xuICAgICAgICAgIEFycmF5LmZyb20obCkuc29ydChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIHQgLSBlO1xuICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgICAgIGRbdF0gPSBzW2UgJSAzNF07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbi5tYXBMYXllcnMoKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0LmFsbENhcmRzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgbC5oYXModC5jYXJkSWQpICYmIG4uY2hhbmdlVGlsZVJlc0lkKHQuaWQsIGRbdC5jYXJkSWRdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh0aGlzLmlzTmV4dCgpKSB7XG4gICAgICAgICAgICBlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUoe1xuICAgICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlN0YXRpY0x2VHRfaXNOZXh0XCIpXG4gIGlzTmV4dCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29sbGVjdE9yaWdpbmFsQ2FyZElkcyh0KSB7XG4gICAgdmFyIGUgPSBuZXcgU2V0KCksXG4gICAgICByID0gbmV3IFNldChPYmplY3QudmFsdWVzKGYpKTtcbiAgICB0LmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQuYWxsQ2FyZHMuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAhci5oYXModC5jYXJkSWQpICYmIHQucmVzSWQgPj0gMCAmJiB0LnJlc0lkIDw9IDMzICYmIGUuYWRkKHQuY2FyZElkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBlO1xuICB9XG59Il19
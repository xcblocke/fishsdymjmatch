
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2EarlyStarBaseCard/Scripts/Tile2EarlyStarBaseCardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5be48Aec4pFHqjQgmf/aRHX', 'Tile2EarlyStarBaseCardTrait');
// subpackages/l_tile2EarlyStarBaseCard/Scripts/Tile2EarlyStarBaseCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var FlowerStarConfigUtil_1 = require("../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil");
var h = ["gym2", "farmproduce", "livingroom", "countrylife", "music", "puzzles", "bakery", "bags", "easter", "pets"];
var d = ["W", "b", "t"];
var Tile2EarlyStarBaseCardTrait = /** @class */ (function (_super) {
    __extends(Tile2EarlyStarBaseCardTrait, _super);
    function Tile2EarlyStarBaseCardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._resolvedThemes = null;
        return _this;
    }
    Tile2EarlyStarBaseCardTrait.prototype.getSuitGroupCountFromContext = function (t) {
        var e, r, a = t.ins;
        if (a && "function" == typeof a.getSuitGroupCount)
            return Math.min(3, Math.max(1, a.getSuitGroupCount()));
        var o = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.suitGroupCount) && void 0 !== r ? r : 1;
        return Math.min(3, Math.max(1, o));
    };
    Tile2EarlyStarBaseCardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.shuffledThemeNames && 0 !== this.localData.shuffledThemeNames.length || (this.localData.shuffledThemeNames = this.shuffleArray(__spreadArrays(h)));
        this.localData.usedCount = Math.max(0, Math.floor(Number(this.localData.usedCount) || 0));
        this.saveLocalData();
        this.addRoyalBundlesToLoader();
    };
    Tile2EarlyStarBaseCardTrait.prototype.getResolvedThemes = function () {
        if (this._resolvedThemes)
            return this._resolvedThemes;
        var t = FlowerStarConfigUtil_1.FlowerStarConfigUtil.getStarList(), e = new Map(t.map(function (t) {
            return [t.name, t];
        }));
        this._resolvedThemes = this.localData.shuffledThemeNames.map(function (t) {
            return e.get(t);
        }).filter(function (t) {
            return !!t;
        });
        return this._resolvedThemes;
    };
    Tile2EarlyStarBaseCardTrait.prototype.addRoyalBundlesToLoader = function () {
        var t = LowPriorityBundleLoader_1.default.getInstance(), e = this.getResolvedThemes();
        new Set(e.filter(function (t) {
            return !t.isLocal;
        }).map(function (t) {
            return t.bundle;
        })).forEach(function (e) {
            return t.addTask(e, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
        });
    };
    Tile2EarlyStarBaseCardTrait.prototype.onTile2Star_drawLevel = function (t, e) {
        var r = this.getSuitGroupCountFromContext(t);
        if (this.localData.usedCount + r > 10)
            e();
        else {
            for (var a = t.args[0], o = [], n = 0; n < r; n++) {
                var i = this.localData.usedCount + n, s = this.pickReadyThemeAt(i);
                if (!s) {
                    e();
                    return;
                }
                o.push(s);
            }
            var u = this.drawRandomSuits(r);
            if (u.length < r)
                e();
            else {
                var f = u.map(function (t, e) {
                    return {
                        suit: t,
                        themeId: o[e].name,
                        bundle: o[e].bundle
                    };
                }), c = o.map(function (t) {
                    return t.name;
                });
                this.localData.usedCount = this.localData.usedCount + r;
                this.saveLocalData();
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: {
                        forLevelId: a,
                        entries: f,
                        themeIds: c
                    }
                });
            }
        }
    };
    Tile2EarlyStarBaseCardTrait.prototype.drawRandomSuits = function (t) {
        for (var e = __spreadArrays(d), r = [], a = 0; a < t && e.length > 0; a++) {
            var o = Math.floor(Math.random() * e.length);
            r.push(e[o]);
            e.splice(o, 1);
        }
        return r;
    };
    Tile2EarlyStarBaseCardTrait.prototype.pickReadyThemeAt = function (t) {
        var e, r, a = this.getResolvedThemes();
        if (t >= a.length)
            return null;
        var o = a[t];
        if (this.isBundleReady(o))
            return o;
        for (var n = t + 1; n < a.length; n++)
            if (this.isBundleReady(a[n])) {
                var s = this.localData.shuffledThemeNames;
                e = __read([a[n], a[t]], 2), a[t] = e[0], a[n] = e[1];
                r = __read([s[n], s[t]], 2), s[t] = r[0], s[n] = r[1];
                this.localData.shuffledThemeNames = s;
                this.saveLocalData();
                return a[t];
            }
        return o;
    };
    Tile2EarlyStarBaseCardTrait.prototype.isBundleReady = function (t) {
        return !!t.isLocal || LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(t.bundle);
    };
    Tile2EarlyStarBaseCardTrait.prototype.shuffleArray = function (t) {
        for (var e, r = t.length - 1; r > 0; r--) {
            var a = Math.floor(Math.random() * (r + 1));
            e = __read([t[a], t[r]], 2), t[r] = e[0], t[a] = e[1];
        }
        return t;
    };
    Tile2EarlyStarBaseCardTrait.prototype.saveLocalData = function () {
        this.localData.shuffledThemeNames = this.localData.shuffledThemeNames;
        this.localData.usedCount = this.localData.usedCount;
    };
    Tile2EarlyStarBaseCardTrait.traitKey = "Tile2EarlyStarBaseCard";
    Tile2EarlyStarBaseCardTrait = __decorate([
        mj.trait,
        mj.class("Tile2EarlyStarBaseCardTrait")
    ], Tile2EarlyStarBaseCardTrait);
    return Tile2EarlyStarBaseCardTrait;
}(Trait_1.default));
exports.default = Tile2EarlyStarBaseCardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyRWFybHlTdGFyQmFzZUNhcmQvU2NyaXB0cy9UaWxlMkVhcmx5U3RhckJhc2VDYXJkVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYscUdBQWdJO0FBQ2hJLGlHQUFnRztBQUNoRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3JILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUd4QjtJQUF5RCwrQ0FBSztJQUE5RDtRQUFBLHFFQXVIQztRQXRIQyxxQkFBZSxHQUFHLElBQUksQ0FBQzs7SUFzSHpCLENBQUM7SUFwSEMsa0VBQTRCLEdBQTVCLFVBQTZCLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1osSUFBSSxDQUFDLElBQUksVUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDLGlCQUFpQjtZQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxL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QUN4QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsbURBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztJQUN0RCxDQUFDO0lBcEhNLG9DQUFRLEdBQUcsd0JBQXdCLENBQUM7SUFGeEIsMkJBQTJCO1FBRi9DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztPQUNuQiwyQkFBMkIsQ0F1SC9DO0lBQUQsa0NBQUM7Q0F2SEQsQUF1SEMsQ0F2SHdELGVBQUssR0F1SDdEO2tCQXZIb0IsMkJBQTJCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlciwgeyBFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9Mb3dQcmlvcml0eUJ1bmRsZUxvYWRlcic7XG5pbXBvcnQgeyBGbG93ZXJTdGFyQ29uZmlnVXRpbCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0Zsb3dlclN0YXJDb25maWdVdGlsJztcbnZhciBoID0gW1wiZ3ltMlwiLCBcImZhcm1wcm9kdWNlXCIsIFwibGl2aW5ncm9vbVwiLCBcImNvdW50cnlsaWZlXCIsIFwibXVzaWNcIiwgXCJwdXp6bGVzXCIsIFwiYmFrZXJ5XCIsIFwiYmFnc1wiLCBcImVhc3RlclwiLCBcInBldHNcIl07XG52YXIgZCA9IFtcIldcIiwgXCJiXCIsIFwidFwiXTtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJFYXJseVN0YXJCYXNlQ2FyZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkVhcmx5U3RhckJhc2VDYXJkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9yZXNvbHZlZFRoZW1lcyA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGlsZTJFYXJseVN0YXJCYXNlQ2FyZFwiO1xuICBnZXRTdWl0R3JvdXBDb3VudEZyb21Db250ZXh0KHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIsXG4gICAgICBhID0gdC5pbnM7XG4gICAgaWYgKGEgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBhLmdldFN1aXRHcm91cENvdW50KSByZXR1cm4gTWF0aC5taW4oMywgTWF0aC5tYXgoMSwgYS5nZXRTdWl0R3JvdXBDb3VudCgpKSk7XG4gICAgdmFyIG8gPSBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnN1aXRHcm91cENvdW50KSAmJiB2b2lkIDAgIT09IHIgPyByIDogMTtcbiAgICByZXR1cm4gTWF0aC5taW4oMywgTWF0aC5tYXgoMSwgbykpO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5zaHVmZmxlZFRoZW1lTmFtZXMgJiYgMCAhPT0gdGhpcy5sb2NhbERhdGEuc2h1ZmZsZWRUaGVtZU5hbWVzLmxlbmd0aCB8fCAodGhpcy5sb2NhbERhdGEuc2h1ZmZsZWRUaGVtZU5hbWVzID0gdGhpcy5zaHVmZmxlQXJyYXkoWy4uLmhdKSk7XG4gICAgdGhpcy5sb2NhbERhdGEudXNlZENvdW50ID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihOdW1iZXIodGhpcy5sb2NhbERhdGEudXNlZENvdW50KSB8fCAwKSk7XG4gICAgdGhpcy5zYXZlTG9jYWxEYXRhKCk7XG4gICAgdGhpcy5hZGRSb3lhbEJ1bmRsZXNUb0xvYWRlcigpO1xuICB9XG4gIGdldFJlc29sdmVkVGhlbWVzKCkge1xuICAgIGlmICh0aGlzLl9yZXNvbHZlZFRoZW1lcykgcmV0dXJuIHRoaXMuX3Jlc29sdmVkVGhlbWVzO1xuICAgIHZhciB0ID0gRmxvd2VyU3RhckNvbmZpZ1V0aWwuZ2V0U3Rhckxpc3QoKSxcbiAgICAgIGUgPSBuZXcgTWFwKHQubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBbdC5uYW1lLCB0XTtcbiAgICAgIH0pKTtcbiAgICB0aGlzLl9yZXNvbHZlZFRoZW1lcyA9IHRoaXMubG9jYWxEYXRhLnNodWZmbGVkVGhlbWVOYW1lcy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBlLmdldCh0KTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiAhIXQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVkVGhlbWVzO1xuICB9XG4gIGFkZFJveWFsQnVuZGxlc1RvTG9hZGVyKCkge1xuICAgIHZhciB0ID0gTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIGUgPSB0aGlzLmdldFJlc29sdmVkVGhlbWVzKCk7XG4gICAgbmV3IFNldChlLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuICF0LmlzTG9jYWw7XG4gICAgfSkubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5idW5kbGU7XG4gICAgfSkpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiB0LmFkZFRhc2soZSwgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdENhcmRYaW5neXVuSHVhUGFpKTtcbiAgICB9KTtcbiAgfVxuICBvblRpbGUyU3Rhcl9kcmF3TGV2ZWwodCwgZSkge1xuICAgIHZhciByID0gdGhpcy5nZXRTdWl0R3JvdXBDb3VudEZyb21Db250ZXh0KHQpO1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS51c2VkQ291bnQgKyByID4gMTApIGUoKTtlbHNlIHtcbiAgICAgIGZvciAodmFyIGEgPSB0LmFyZ3NbMF0sIG8gPSBbXSwgbiA9IDA7IG4gPCByOyBuKyspIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmxvY2FsRGF0YS51c2VkQ291bnQgKyBuLFxuICAgICAgICAgIHMgPSB0aGlzLnBpY2tSZWFkeVRoZW1lQXQoaSk7XG4gICAgICAgIGlmICghcykge1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgby5wdXNoKHMpO1xuICAgICAgfVxuICAgICAgdmFyIHUgPSB0aGlzLmRyYXdSYW5kb21TdWl0cyhyKTtcbiAgICAgIGlmICh1Lmxlbmd0aCA8IHIpIGUoKTtlbHNlIHtcbiAgICAgICAgdmFyIGYgPSB1Lm1hcChmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgc3VpdDogdCxcbiAgICAgICAgICAgICAgdGhlbWVJZDogb1tlXS5uYW1lLFxuICAgICAgICAgICAgICBidW5kbGU6IG9bZV0uYnVuZGxlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGMgPSBvLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQubmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEudXNlZENvdW50ID0gdGhpcy5sb2NhbERhdGEudXNlZENvdW50ICsgcjtcbiAgICAgICAgdGhpcy5zYXZlTG9jYWxEYXRhKCk7XG4gICAgICAgIGUoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgZm9yTGV2ZWxJZDogYSxcbiAgICAgICAgICAgIGVudHJpZXM6IGYsXG4gICAgICAgICAgICB0aGVtZUlkczogY1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRyYXdSYW5kb21TdWl0cyh0KSB7XG4gICAgZm9yICh2YXIgZSA9IFsuLi5kXSwgciA9IFtdLCBhID0gMDsgYSA8IHQgJiYgZS5sZW5ndGggPiAwOyBhKyspIHtcbiAgICAgIHZhciBvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZS5sZW5ndGgpO1xuICAgICAgci5wdXNoKGVbb10pO1xuICAgICAgZS5zcGxpY2UobywgMSk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG4gIHBpY2tSZWFkeVRoZW1lQXQodCkge1xuICAgIHZhciBlLFxuICAgICAgcixcbiAgICAgIGEgPSB0aGlzLmdldFJlc29sdmVkVGhlbWVzKCk7XG4gICAgaWYgKHQgPj0gYS5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgIHZhciBvID0gYVt0XTtcbiAgICBpZiAodGhpcy5pc0J1bmRsZVJlYWR5KG8pKSByZXR1cm4gbztcbiAgICBmb3IgKHZhciBuID0gdCArIDE7IG4gPCBhLmxlbmd0aDsgbisrKSBpZiAodGhpcy5pc0J1bmRsZVJlYWR5KGFbbl0pKSB7XG4gICAgICB2YXIgcyA9IHRoaXMubG9jYWxEYXRhLnNodWZmbGVkVGhlbWVOYW1lcztcbiAgICAgIGUgPSBfX3JlYWQoW2Fbbl0sIGFbdF1dLCAyKSwgYVt0XSA9IGVbMF0sIGFbbl0gPSBlWzFdO1xuICAgICAgciA9IF9fcmVhZChbc1tuXSwgc1t0XV0sIDIpLCBzW3RdID0gclswXSwgc1tuXSA9IHJbMV07XG4gICAgICB0aGlzLmxvY2FsRGF0YS5zaHVmZmxlZFRoZW1lTmFtZXMgPSBzO1xuICAgICAgdGhpcy5zYXZlTG9jYWxEYXRhKCk7XG4gICAgICByZXR1cm4gYVt0XTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgaXNCdW5kbGVSZWFkeSh0KSB7XG4gICAgcmV0dXJuICEhdC5pc0xvY2FsIHx8IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuaXNCdW5kbGVQcmVMb2FkZWQodC5idW5kbGUpO1xuICB9XG4gIHNodWZmbGVBcnJheSh0KSB7XG4gICAgZm9yICh2YXIgZSwgciA9IHQubGVuZ3RoIC0gMTsgciA+IDA7IHItLSkge1xuICAgICAgdmFyIGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAociArIDEpKTtcbiAgICAgIGUgPSBfX3JlYWQoW3RbYV0sIHRbcl1dLCAyKSwgdFtyXSA9IGVbMF0sIHRbYV0gPSBlWzFdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuICBzYXZlTG9jYWxEYXRhKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLnNodWZmbGVkVGhlbWVOYW1lcyA9IHRoaXMubG9jYWxEYXRhLnNodWZmbGVkVGhlbWVOYW1lcztcbiAgICB0aGlzLmxvY2FsRGF0YS51c2VkQ291bnQgPSB0aGlzLmxvY2FsRGF0YS51c2VkQ291bnQ7XG4gIH1cbn0iXX0=
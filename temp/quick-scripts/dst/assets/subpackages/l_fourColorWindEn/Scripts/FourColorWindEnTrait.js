
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_fourColorWindEn/Scripts/FourColorWindEnTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ec47ZImIhI+KNLvUTE12FR', 'FourColorWindEnTrait');
// subpackages/l_fourColorWindEn/Scripts/FourColorWindEnTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var FourColorWindEnTrait = /** @class */ (function (_super) {
    __extends(FourColorWindEnTrait, _super);
    function FourColorWindEnTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FourColorWindEnTrait_1 = FourColorWindEnTrait;
    FourColorWindEnTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FourColorWindEnTrait.prototype._getFlowerSeriesID = function () {
        var r, t, e;
        try {
            var o = null === (r = mj.getClassByName("FlowerCardSeriesTrait")) || void 0 === r ? void 0 : r.getInstance();
            return o && o.eventEnabled && null !== (e = null === (t = o.getCurrentModeSeriesId) || void 0 === t ? void 0 : t.call(o)) && void 0 !== e ? e : -1;
        }
        catch (r) {
            return -1;
        }
    };
    FourColorWindEnTrait.prototype.onMainGameCtrl_initRes = function (r, t) {
        try {
            if (this._getFlowerSeriesID() <= 0) {
                var o = r.ins;
                if (o && "function" == typeof o.addPreloadRes) {
                    var n = FourColorWindEnTrait_1.BUNDLE_NAME + ":atlas/cardIcon";
                    o.addPreloadRes("SpriteAtlas", n);
                }
            }
        }
        catch (r) {
            console.error("[" + FourColorWindEnTrait_1.traitKey + "] 预加载图集失败: " + (null == r ? void 0 : r.message));
        }
        t();
    };
    FourColorWindEnTrait.prototype.onCardRepNonUs_tarResCfg = function (r, t) {
        var o, n;
        try {
            var i = null === (o = r.args) || void 0 === o ? void 0 : o[0], l = null === (n = r.args) || void 0 === n ? void 0 : n[1];
            if (FourColorWindEnTrait_1.WIND_CARDS.includes(i)) {
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        bundleName: FourColorWindEnTrait_1.BUNDLE_NAME,
                        path: l
                    }
                });
                return;
            }
            t();
        }
        catch (r) {
            console.error("[" + FourColorWindEnTrait_1.traitKey + "] 劫持资源配置失败: " + (null == r ? void 0 : r.message));
            t();
        }
    };
    FourColorWindEnTrait.prototype.onCardUtil_atlasPathBundle = function (r, t) {
        var o;
        try {
            var n = null === (o = r.args) || void 0 === o ? void 0 : o[0];
            if (FourColorWindEnTrait_1.WIND_CARDS.includes(n)) {
                var i = "atlas/cardIcon/" + n;
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: i,
                        bundleName: FourColorWindEnTrait_1.BUNDLE_NAME,
                        fromAtlas: true
                    }
                });
                return;
            }
            t();
        }
        catch (r) {
            console.error("[" + FourColorWindEnTrait_1.traitKey + "] 劫持图片失败: " + (null == r ? void 0 : r.message));
            t();
        }
    };
    var FourColorWindEnTrait_1;
    FourColorWindEnTrait.traitKey = "FourColorWindEn";
    FourColorWindEnTrait.BUNDLE_NAME = "l_fourColorWindEn";
    FourColorWindEnTrait.WIND_CARDS = ["Z_dong", "Z_nan", "Z_xi", "Z_bei"];
    FourColorWindEnTrait = FourColorWindEnTrait_1 = __decorate([
        mj.trait,
        mj.class("FourColorWindEnTrait")
    ], FourColorWindEnTrait);
    return FourColorWindEnTrait;
}(Trait_1.default));
exports.default = FourColorWindEnTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZvdXJDb2xvcldpbmRFbi9TY3JpcHRzL0ZvdXJDb2xvcldpbmRFblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBd0Y7QUFDeEYsZ0VBQTJEO0FBRzNEO0lBQWtELHdDQUFLO0lBQXZEOztJQTJFQSxDQUFDOzZCQTNFb0Isb0JBQW9CO0lBSXZDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxpREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0csT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEo7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDWDtJQUNILENBQUM7SUFDRCxxREFBc0IsR0FBdEIsVUFB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LENBQUM7d0JBQ1AsVUFBVSxFQUFFLHNCQUFvQixDQUFDLFdBQVc7d0JBQzVDLFNBQVMsRUFBRSxJQUFJO3FCQUNoQjtpQkFDRixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNSO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsc0JBQW9CLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNyRyxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7SUF6RU0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUM3QixnQ0FBVyxHQUFHLG1CQUFtQixDQUFDO0lBQ2xDLCtCQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUh0QyxvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBMkV4QztJQUFELDJCQUFDO0NBM0VELEFBMkVDLENBM0VpRCxlQUFLLEdBMkV0RDtrQkEzRW9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZvdXJDb2xvcldpbmRFblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3VyQ29sb3JXaW5kRW5UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGb3VyQ29sb3JXaW5kRW5cIjtcbiAgc3RhdGljIEJVTkRMRV9OQU1FID0gXCJsX2ZvdXJDb2xvcldpbmRFblwiO1xuICBzdGF0aWMgV0lORF9DQVJEUyA9IFtcIlpfZG9uZ1wiLCBcIlpfbmFuXCIsIFwiWl94aVwiLCBcIlpfYmVpXCJdO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgX2dldEZsb3dlclNlcmllc0lEKCkge1xuICAgIHZhciByLCB0LCBlO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbyA9IG51bGwgPT09IChyID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJGbG93ZXJDYXJkU2VyaWVzVHJhaXRcIikpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIHJldHVybiBvICYmIG8uZXZlbnRFbmFibGVkICYmIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSBvLmdldEN1cnJlbnRNb2RlU2VyaWVzSWQpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuY2FsbChvKSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IC0xO1xuICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfaW5pdFJlcyhyLCB0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLl9nZXRGbG93ZXJTZXJpZXNJRCgpIDw9IDApIHtcbiAgICAgICAgdmFyIG8gPSByLmlucztcbiAgICAgICAgaWYgKG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBvLmFkZFByZWxvYWRSZXMpIHtcbiAgICAgICAgICB2YXIgbiA9IEZvdXJDb2xvcldpbmRFblRyYWl0LkJVTkRMRV9OQU1FICsgXCI6YXRsYXMvY2FyZEljb25cIjtcbiAgICAgICAgICBvLmFkZFByZWxvYWRSZXMoXCJTcHJpdGVBdGxhc1wiLCBuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBGb3VyQ29sb3JXaW5kRW5UcmFpdC50cmFpdEtleSArIFwiXSDpooTliqDovb3lm77pm4blpLHotKU6IFwiICsgKG51bGwgPT0gciA/IHZvaWQgMCA6IHIubWVzc2FnZSkpO1xuICAgIH1cbiAgICB0KCk7XG4gIH1cbiAgb25DYXJkUmVwTm9uVXNfdGFyUmVzQ2ZnKHIsIHQpIHtcbiAgICB2YXIgbywgbjtcbiAgICB0cnkge1xuICAgICAgdmFyIGkgPSBudWxsID09PSAobyA9IHIuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogb1swXSxcbiAgICAgICAgbCA9IG51bGwgPT09IChuID0gci5hcmdzKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuWzFdO1xuICAgICAgaWYgKEZvdXJDb2xvcldpbmRFblRyYWl0LldJTkRfQ0FSRFMuaW5jbHVkZXMoaSkpIHtcbiAgICAgICAgdCh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgICBidW5kbGVOYW1lOiBGb3VyQ29sb3JXaW5kRW5UcmFpdC5CVU5ETEVfTkFNRSxcbiAgICAgICAgICAgIHBhdGg6IGxcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0KCk7XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIEZvdXJDb2xvcldpbmRFblRyYWl0LnRyYWl0S2V5ICsgXCJdIOWKq+aMgei1hOa6kOmFjee9ruWksei0pTogXCIgKyAobnVsbCA9PSByID8gdm9pZCAwIDogci5tZXNzYWdlKSk7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIG9uQ2FyZFV0aWxfYXRsYXNQYXRoQnVuZGxlKHIsIHQpIHtcbiAgICB2YXIgbztcbiAgICB0cnkge1xuICAgICAgdmFyIG4gPSBudWxsID09PSAobyA9IHIuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogb1swXTtcbiAgICAgIGlmIChGb3VyQ29sb3JXaW5kRW5UcmFpdC5XSU5EX0NBUkRTLmluY2x1ZGVzKG4pKSB7XG4gICAgICAgIHZhciBpID0gXCJhdGxhcy9jYXJkSWNvbi9cIiArIG47XG4gICAgICAgIHQoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgcGF0aDogaSxcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IEZvdXJDb2xvcldpbmRFblRyYWl0LkJVTkRMRV9OQU1FLFxuICAgICAgICAgICAgZnJvbUF0bGFzOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdCgpO1xuICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBGb3VyQ29sb3JXaW5kRW5UcmFpdC50cmFpdEtleSArIFwiXSDliqvmjIHlm77niYflpLHotKU6IFwiICsgKG51bGwgPT0gciA/IHZvaWQgMCA6IHIubWVzc2FnZSkpO1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dynamicRateShow/Scripts/RandDynRateShowTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b60056nqYhIJ6nd5t/n/5VM', 'RandDynRateShowTrait');
// subpackages/l_dynamicRateShow/Scripts/RandDynRateShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var RandDynRateShowTrait = /** @class */ (function (_super) {
    __extends(RandDynRateShowTrait, _super);
    function RandDynRateShowTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RandDynRateShowTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._traitData;
    };
    RandDynRateShowTrait.prototype.onDynRateShow_getRateTxt = function (t, e) {
        var r = __read(t.args, 3), a = r[0], o = r[1], i = r[2], c = this._traitData;
        if (void 0 === c.experimentType || c.experimentType === a) {
            var u = c.rateTextKeys;
            if (u && 0 !== u.length) {
                var p = u[Math.floor(Math.random() * u.length)], h = I18NStrings_1.default.get(p, "You beat {0} of players!"), f = o.toFixed(2) + "%";
                h.includes("{0}") && (h = h.replace("{0}", f));
                h.includes("{1}") && (h = h.replace("{1}", (100 * i).toFixed(1) + "%"));
                h = h.replace(f, "<color=#00ff00>" + f + "</color>");
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: h
                });
            }
            else
                e();
        }
        else
            e();
    };
    RandDynRateShowTrait.traitKey = "RandDynRateShow";
    RandDynRateShowTrait = __decorate([
        mj.trait,
        mj.class("RandDynRateShowTrait")
    ], RandDynRateShowTrait);
    return RandDynRateShowTrait;
}(Trait_1.default));
exports.default = RandDynRateShowTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2R5bmFtaWNSYXRlU2hvdy9TY3JpcHRzL1JhbmREeW5SYXRlU2hvd1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLDJFQUFzRTtBQUd0RTtJQUFrRCx3Q0FBSztJQUF2RDs7SUE2QkEsQ0FBQztJQTNCQyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2xCLENBQUM7SUFDRCx1REFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RCLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUMsY0FBYyxLQUFLLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzdDLENBQUMsR0FBRyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsMEJBQTBCLENBQUMsRUFDbEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUN6QixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7Z0JBQ3JELENBQUMsQ0FBQztvQkFDQSxPQUFPLEVBQUUsSUFBSTtvQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtvQkFDMUMsU0FBUyxFQUFFLENBQUM7aUJBQ2IsQ0FBQyxDQUFDO2FBQ0o7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBM0JNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQTZCeEM7SUFBRCwyQkFBQztDQTdCRCxBQTZCQyxDQTdCaUQsZUFBSyxHQTZCdEQ7a0JBN0JvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSYW5kRHluUmF0ZVNob3dUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZER5blJhdGVTaG93VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmFuZER5blJhdGVTaG93XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl90cmFpdERhdGE7XG4gIH1cbiAgb25EeW5SYXRlU2hvd19nZXRSYXRlVHh0KHQsIGUpIHtcbiAgICB2YXIgciA9IF9fcmVhZCh0LmFyZ3MsIDMpLFxuICAgICAgYSA9IHJbMF0sXG4gICAgICBvID0gclsxXSxcbiAgICAgIGkgPSByWzJdLFxuICAgICAgYyA9IHRoaXMuX3RyYWl0RGF0YTtcbiAgICBpZiAodm9pZCAwID09PSBjLmV4cGVyaW1lbnRUeXBlIHx8IGMuZXhwZXJpbWVudFR5cGUgPT09IGEpIHtcbiAgICAgIHZhciB1ID0gYy5yYXRlVGV4dEtleXM7XG4gICAgICBpZiAodSAmJiAwICE9PSB1Lmxlbmd0aCkge1xuICAgICAgICB2YXIgcCA9IHVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdS5sZW5ndGgpXSxcbiAgICAgICAgICBoID0gSTE4TlN0cmluZ3MuZ2V0KHAsIFwiWW91IGJlYXQgezB9IG9mIHBsYXllcnMhXCIpLFxuICAgICAgICAgIGYgPSBvLnRvRml4ZWQoMikgKyBcIiVcIjtcbiAgICAgICAgaC5pbmNsdWRlcyhcInswfVwiKSAmJiAoaCA9IGgucmVwbGFjZShcInswfVwiLCBmKSk7XG4gICAgICAgIGguaW5jbHVkZXMoXCJ7MX1cIikgJiYgKGggPSBoLnJlcGxhY2UoXCJ7MX1cIiwgKDEwMCAqIGkpLnRvRml4ZWQoMSkgKyBcIiVcIikpO1xuICAgICAgICBoID0gaC5yZXBsYWNlKGYsIFwiPGNvbG9yPSMwMGZmMDA+XCIgKyBmICsgXCI8L2NvbG9yPlwiKTtcbiAgICAgICAgZSh7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgcmV0dXJuVmFsOiBoXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19
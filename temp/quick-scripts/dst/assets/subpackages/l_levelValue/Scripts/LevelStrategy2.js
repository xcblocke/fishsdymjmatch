
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_levelValue/Scripts/LevelStrategy2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '749dbGu8yxG25jkGyUHf9p+', 'LevelStrategy2');
// subpackages/l_levelValue/Scripts/LevelStrategy2.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelStrategy2 = void 0;
var Common_1 = require("../../../Scripts/types/Common");
var FactoryLevelValue_1 = require("../../../Scripts/FactoryLevelValue");
var LevelStrategyBase_1 = require("../../../Scripts/LevelStrategyBase");
var LevelStrategy2 = /** @class */ (function (_super) {
    __extends(LevelStrategy2, _super);
    function LevelStrategy2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Level2";
        _this.desc = "关卡值=x*Percentile(期望时长)+y*Percentile(理论通关率)";
        return _this;
    }
    LevelStrategy2.prototype.calculateLevelValue = function (e) {
        var t = Common_1.getPercentileKey("predictTime"), r = Common_1.getPercentileKey("rateSuccess"), o = this.getStrategyParam(), n = o.x, i = void 0 === n ? 0.5 : n, a = o.y, l = void 0 === a ? 0.5 : a;
        return e.levels.map(function (e) {
            var o, n;
            return i * (null !== (o = e[t]) && void 0 !== o ? o : 1) + l * (null !== (n = e[r]) && void 0 !== n ? n : 1);
        });
    };
    LevelStrategy2 = __decorate([
        FactoryLevelValue_1.levelStrategy("Level2")
    ], LevelStrategy2);
    return LevelStrategy2;
}(LevelStrategyBase_1.LevelStrategyBase));
exports.LevelStrategy2 = LevelStrategy2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xldmVsVmFsdWUvU2NyaXB0cy9MZXZlbFN0cmF0ZWd5Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFpRTtBQUNqRSx3RUFBbUU7QUFDbkUsd0VBQXVFO0FBRXZFO0lBQW9DLGtDQUFpQjtJQUFyRDtRQUFBLHFFQWdCQztRQWZDLFVBQUksR0FBRyxRQUFRLENBQUM7UUFDaEIsVUFBSSxHQUFHLDRDQUE0QyxDQUFDOztJQWN0RCxDQUFDO0lBYkMsNENBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcseUJBQWdCLENBQUMsYUFBYSxDQUFDLEVBQ3JDLENBQUMsR0FBRyx5QkFBZ0IsQ0FBQyxhQUFhLENBQUMsRUFDbkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDUCxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ1AsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0csQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBZlUsY0FBYztRQUQxQixpQ0FBYSxDQUFDLFFBQVEsQ0FBQztPQUNYLGNBQWMsQ0FnQjFCO0lBQUQscUJBQUM7Q0FoQkQsQUFnQkMsQ0FoQm1DLHFDQUFpQixHQWdCcEQ7QUFoQlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQZXJjZW50aWxlS2V5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy90eXBlcy9Db21tb24nO1xuaW1wb3J0IHsgbGV2ZWxTdHJhdGVneSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRmFjdG9yeUxldmVsVmFsdWUnO1xuaW1wb3J0IHsgTGV2ZWxTdHJhdGVneUJhc2UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0xldmVsU3RyYXRlZ3lCYXNlJztcbkBsZXZlbFN0cmF0ZWd5KFwiTGV2ZWwyXCIpXG5leHBvcnQgY2xhc3MgTGV2ZWxTdHJhdGVneTIgZXh0ZW5kcyBMZXZlbFN0cmF0ZWd5QmFzZSB7XG4gIG5hbWUgPSBcIkxldmVsMlwiO1xuICBkZXNjID0gXCLlhbPljaHlgLw9eCpQZXJjZW50aWxlKOacn+acm+aXtumVvykreSpQZXJjZW50aWxlKOeQhuiuuumAmuWFs+eOhylcIjtcbiAgY2FsY3VsYXRlTGV2ZWxWYWx1ZShlKSB7XG4gICAgdmFyIHQgPSBnZXRQZXJjZW50aWxlS2V5KFwicHJlZGljdFRpbWVcIiksXG4gICAgICByID0gZ2V0UGVyY2VudGlsZUtleShcInJhdGVTdWNjZXNzXCIpLFxuICAgICAgbyA9IHRoaXMuZ2V0U3RyYXRlZ3lQYXJhbSgpLFxuICAgICAgbiA9IG8ueCxcbiAgICAgIGkgPSB2b2lkIDAgPT09IG4gPyAwLjUgOiBuLFxuICAgICAgYSA9IG8ueSxcbiAgICAgIGwgPSB2b2lkIDAgPT09IGEgPyAwLjUgOiBhO1xuICAgIHJldHVybiBlLmxldmVscy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvLCBuO1xuICAgICAgcmV0dXJuIGkgKiAobnVsbCAhPT0gKG8gPSBlW3RdKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogMSkgKyBsICogKG51bGwgIT09IChuID0gZVtyXSkgJiYgdm9pZCAwICE9PSBuID8gbiA6IDEpO1xuICAgIH0pO1xuICB9XG59Il19
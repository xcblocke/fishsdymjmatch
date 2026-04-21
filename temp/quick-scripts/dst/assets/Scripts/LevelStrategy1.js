
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LevelStrategy1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27113Z5WulP6p7MB/aAfIVj', 'LevelStrategy1');
// Scripts/LevelStrategy1.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelStrategy1 = void 0;
var Common_1 = require("./types/Common");
var FactoryLevelValue_1 = require("./FactoryLevelValue");
var LevelStrategyBase_1 = require("./LevelStrategyBase");
var LevelStrategy1 = /** @class */ (function (_super) {
    __extends(LevelStrategy1, _super);
    function LevelStrategy1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Level1";
        _this.desc = "关卡值 = 指定参数在题库中的百分位数";
        return _this;
    }
    LevelStrategy1.prototype.calculateLevelValue = function (e) {
        var t = this.getStrategyParam().x, o = void 0 === t ? "predictTime" : t, n = Common_1.getPercentileKey(o);
        return e.levels.map(function (e) {
            var t;
            return null !== (t = e[n]) && void 0 !== t ? t : 1;
        });
    };
    LevelStrategy1 = __decorate([
        FactoryLevelValue_1.levelStrategy("Level1")
    ], LevelStrategy1);
    return LevelStrategy1;
}(LevelStrategyBase_1.LevelStrategyBase));
exports.LevelStrategy1 = LevelStrategy1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xldmVsU3RyYXRlZ3kxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQWtEO0FBQ2xELHlEQUFvRDtBQUNwRCx5REFBd0Q7QUFFeEQ7SUFBb0Msa0NBQWlCO0lBQXJEO1FBQUEscUVBWUM7UUFYQyxVQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2hCLFVBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFVL0IsQ0FBQztJQVRDLDRDQUFtQixHQUFuQixVQUFvQixDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsRUFDL0IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3BDLENBQUMsR0FBRyx5QkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUM3QixJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBWFUsY0FBYztRQUQxQixpQ0FBYSxDQUFDLFFBQVEsQ0FBQztPQUNYLGNBQWMsQ0FZMUI7SUFBRCxxQkFBQztDQVpELEFBWUMsQ0FabUMscUNBQWlCLEdBWXBEO0FBWlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQZXJjZW50aWxlS2V5IH0gZnJvbSAnLi90eXBlcy9Db21tb24nO1xuaW1wb3J0IHsgbGV2ZWxTdHJhdGVneSB9IGZyb20gJy4vRmFjdG9yeUxldmVsVmFsdWUnO1xuaW1wb3J0IHsgTGV2ZWxTdHJhdGVneUJhc2UgfSBmcm9tICcuL0xldmVsU3RyYXRlZ3lCYXNlJztcbkBsZXZlbFN0cmF0ZWd5KFwiTGV2ZWwxXCIpXG5leHBvcnQgY2xhc3MgTGV2ZWxTdHJhdGVneTEgZXh0ZW5kcyBMZXZlbFN0cmF0ZWd5QmFzZSB7XG4gIG5hbWUgPSBcIkxldmVsMVwiO1xuICBkZXNjID0gXCLlhbPljaHlgLwgPSDmjIflrprlj4LmlbDlnKjpopjlupPkuK3nmoTnmb7liIbkvY3mlbBcIjtcbiAgY2FsY3VsYXRlTGV2ZWxWYWx1ZShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldFN0cmF0ZWd5UGFyYW0oKS54LFxuICAgICAgbyA9IHZvaWQgMCA9PT0gdCA/IFwicHJlZGljdFRpbWVcIiA6IHQsXG4gICAgICBuID0gZ2V0UGVyY2VudGlsZUtleShvKTtcbiAgICByZXR1cm4gZS5sZXZlbHMubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIHJldHVybiBudWxsICE9PSAodCA9IGVbbl0pICYmIHZvaWQgMCAhPT0gdCA/IHQgOiAxO1xuICAgIH0pO1xuICB9XG59Il19
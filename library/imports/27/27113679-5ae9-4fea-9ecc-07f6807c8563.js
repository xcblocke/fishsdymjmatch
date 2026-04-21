"use strict";
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
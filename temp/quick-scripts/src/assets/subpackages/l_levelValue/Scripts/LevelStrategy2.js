"use strict";
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
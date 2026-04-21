"use strict";
cc._RF.push(module, 'edfabN4zwJInYmKmd4+k03+', 'DDAStrategy2');
// subpackages/l_dda2/Scripts/DDAStrategy2.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDAStrategy2 = void 0;
var IDynamicCurve_1 = require("../../../Scripts/types/IDynamicCurve");
var FactoryDDA_1 = require("../../../Scripts/FactoryDDA");
var DDAStrategyBase_1 = require("../../../Scripts/DDAStrategyBase");
var DDAStrategy2 = /** @class */ (function (_super) {
    __extends(DDAStrategy2, _super);
    function DDAStrategy2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "DDA2";
        _this.desc = "之前连续x关都不能首次挑战通关【用了洗牌/有过restart】,则本关默认选通关率=1的关";
        return _this;
    }
    DDAStrategy2.prototype.filter = function (t) {
        var e = this.getStrategyParam().x, r = void 0 === e ? 3 : e, o = t.extractModel.getLastLevelRecord(r);
        if (o.length < r)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        for (var n = 0; n < o.length; n++) {
            var i = o[n];
            if (i.replay <= 0 && i.shuffle <= 0)
                return [IDynamicCurve_1.EDDAFilter.NONE, null];
        }
        var c = t.levels.filter(function (t) {
            return 1 === t.rateSuccess;
        });
        if (c.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var u = c[Math.floor(Math.random() * c.length)];
        return [IDynamicCurve_1.EDDAFilter.LEVEL, u];
    };
    DDAStrategy2 = __decorate([
        FactoryDDA_1.ddaStrategy(1)
    ], DDAStrategy2);
    return DDAStrategy2;
}(DDAStrategyBase_1.DDAStrategyBase));
exports.DDAStrategy2 = DDAStrategy2;

cc._RF.pop();
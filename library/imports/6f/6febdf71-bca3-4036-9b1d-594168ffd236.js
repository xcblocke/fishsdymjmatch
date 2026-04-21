"use strict";
cc._RF.push(module, '6febd9xvKNANpsdWUFo/9I2', 'DDAStrategy3');
// subpackages/l_dda3/Scripts/DDAStrategy3.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDAStrategy3 = void 0;
var IDynamicCurve_1 = require("../../../Scripts/types/IDynamicCurve");
var DDAStrategyBase_1 = require("../../../Scripts/DDAStrategyBase");
var FactoryDDA_1 = require("../../../Scripts/FactoryDDA");
var Common_1 = require("../../../Scripts/types/Common");
var DDAStrategy3 = /** @class */ (function (_super) {
    __extends(DDAStrategy3, _super);
    function DDAStrategy3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "DDA3";
        _this.desc = "每累计出现x次关卡时长<y秒失败，则本关只从时长处于最高{z}分位的关里挑。";
        return _this;
    }
    DDAStrategy3.prototype.filter = function (t) {
        if (t.levels.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var e = this.getStrategyParam(), r = e.x, o = void 0 === r ? 3 : r, n = e.y, i = void 0 === n ? 240 : n, c = e.z, s = void 0 === c ? 10 : c, p = t.extractModel, f = Common_1.getCustomDataKey(this.name, [o, i, s]);
        if (p.getCachedData(f, 0) < o)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var y = Common_1.getPercentileKey("predictTime"), l = 1 - s / 100, d = t.levels.filter(function (t) {
            return t[y] >= l;
        });
        if (d.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var D = d[Math.floor(Math.random() * d.length)];
        return [IDynamicCurve_1.EDDAFilter.LEVEL, D];
    };
    DDAStrategy3 = __decorate([
        FactoryDDA_1.ddaStrategy(1)
    ], DDAStrategy3);
    return DDAStrategy3;
}(DDAStrategyBase_1.DDAStrategyBase));
exports.DDAStrategy3 = DDAStrategy3;

cc._RF.pop();
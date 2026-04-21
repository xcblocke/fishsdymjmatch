"use strict";
cc._RF.push(module, 'febf2RRXCpDW7kvsZPMtD76', 'DDAStrategy4');
// subpackages/l_dda4/Scripts/DDAStrategy4.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDAStrategy4 = void 0;
var IDynamicCurve_1 = require("../../../Scripts/types/IDynamicCurve");
var Common_1 = require("../../../Scripts/types/Common");
var DDAStrategyBase_1 = require("../../../Scripts/DDAStrategyBase");
var FactoryDDA_1 = require("../../../Scripts/FactoryDDA");
var DDAStrategy4 = /** @class */ (function (_super) {
    __extends(DDAStrategy4, _super);
    function DDAStrategy4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "DDA4";
        _this.desc = "之前连续x关>=y秒通关，则本关只从通关时长处于最低z分位的关卡里挑。";
        return _this;
    }
    DDAStrategy4.prototype.filter = function (t) {
        if (t.levels.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var e = this.getStrategyParam(), r = e.x, o = void 0 === r ? 3 : r, n = e.y, i = void 0 === n ? 60 : n, s = e.z, u = void 0 === s ? 10 : s, p = t.extractModel.getLastLevelRecord(o);
        if (p.length < o)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        for (var f = 0; f < p.length; f++) {
            if (p[f].passTime < i)
                return [IDynamicCurve_1.EDDAFilter.NONE, null];
        }
        var l = Common_1.getPercentileKey("predictTime"), y = u / 100, d = t.levels.filter(function (t) {
            return t[l] <= y;
        });
        if (d.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var D = d[Math.floor(Math.random() * d.length)];
        return [IDynamicCurve_1.EDDAFilter.LEVEL, D];
    };
    DDAStrategy4 = __decorate([
        FactoryDDA_1.ddaStrategy(1)
    ], DDAStrategy4);
    return DDAStrategy4;
}(DDAStrategyBase_1.DDAStrategyBase));
exports.DDAStrategy4 = DDAStrategy4;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'e987dPRL65K54vBX21Zu67Q', 'DDAStrategy1');
// subpackages/l_dda1/Scripts/DDAStrategy1.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDAStrategy1 = void 0;
var IDynamicCurve_1 = require("../../../Scripts/types/IDynamicCurve");
var FactoryDDA_1 = require("../../../Scripts/FactoryDDA");
var DDAStrategyBase_1 = require("../../../Scripts/DDAStrategyBase");
var DDAStrategy1 = /** @class */ (function (_super) {
    __extends(DDAStrategy1, _super);
    function DDAStrategy1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "DDA1";
        _this.desc = "上关连续死了>=x次，则本关默认选通关率=1的关。";
        return _this;
    }
    DDAStrategy1.prototype.filter = function (t) {
        var e = this.getStrategyParam().x, r = void 0 === e ? 3 : e, o = t.extractModel.getLastLevelRecord();
        if (o.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        if (o[0].replay < r)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var n = t.levels.filter(function (t) {
            return 1 === t.rateSuccess;
        });
        if (n.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        var i = n[Math.floor(Math.random() * n.length)];
        return [IDynamicCurve_1.EDDAFilter.LEVEL, i];
    };
    DDAStrategy1 = __decorate([
        FactoryDDA_1.ddaStrategy(1)
    ], DDAStrategy1);
    return DDAStrategy1;
}(DDAStrategyBase_1.DDAStrategyBase));
exports.DDAStrategy1 = DDAStrategy1;

cc._RF.pop();
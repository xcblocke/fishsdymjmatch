"use strict";
cc._RF.push(module, '6ad09t5/gBAUY8WILrQXwlK', 'DDAStrategy0');
// Scripts/DDAStrategy0.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDAStrategy0 = void 0;
var IDynamicCurve_1 = require("./types/IDynamicCurve");
var FactoryDDA_1 = require("./FactoryDDA");
var DDAStrategyBase_1 = require("./DDAStrategyBase");
var DDAStrategy0 = /** @class */ (function (_super) {
    __extends(DDAStrategy0, _super);
    function DDAStrategy0() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "DDA0";
        _this.desc = "最近x关不重复";
        return _this;
    }
    DDAStrategy0.prototype.filter = function (e) {
        var t = this.getStrategyParam().x, o = void 0 === t ? 100 : t, n = e.extractModel.getLastLevelRecord(o).map(function (e) {
            return e.levelData.index;
        });
        if (n.length <= 0)
            return [IDynamicCurve_1.EDDAFilter.NONE, null];
        e.levels = e.levels.filter(function (e) {
            return !n.includes(e.index);
        });
        return [IDynamicCurve_1.EDDAFilter.FILTER, null];
    };
    DDAStrategy0 = __decorate([
        FactoryDDA_1.ddaStrategy(999999)
    ], DDAStrategy0);
    return DDAStrategy0;
}(DDAStrategyBase_1.DDAStrategyBase));
exports.DDAStrategy0 = DDAStrategy0;

cc._RF.pop();
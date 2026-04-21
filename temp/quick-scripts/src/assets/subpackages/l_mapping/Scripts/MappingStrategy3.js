"use strict";
cc._RF.push(module, '81a0dAQzLtMxqldV2IX2ibR', 'MappingStrategy3');
// subpackages/l_mapping/Scripts/MappingStrategy3.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingStrategy3 = void 0;
var Common_1 = require("../../../Scripts/types/Common");
var FactoryMapping_1 = require("../../../Scripts/FactoryMapping");
var MappingStrategyBase_1 = require("../../../Scripts/MappingStrategyBase");
var MappingStrategy3 = /** @class */ (function (_super) {
    __extends(MappingStrategy3, _super);
    function MappingStrategy3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Mapping3";
        _this.desc = "受限随机策略";
        return _this;
    }
    MappingStrategy3.prototype.mapping = function (t) {
        var e, r = t.levels, n = t.capability;
        if (!r || 0 === r.length)
            return null;
        for (var o = this.getStrategyParam(), i = o.x, p = void 0 === i ? 0.1 : i, c = o.y, s = void 0 === c ? 0.1 : c, u = Math.max(0, n - p), l = Math.min(1, n + s), y = [], g = 0; g < r.length; g++) {
            var f = null !== (e = r[g][Common_1.LevelValueKey]) && void 0 !== e ? e : 0;
            f >= u && f <= l && y.push(r[g]);
        }
        return 0 === y.length ? null : y[Math.floor(Math.random() * y.length)];
    };
    MappingStrategy3 = __decorate([
        FactoryMapping_1.mappingStrategy("Mapping3")
    ], MappingStrategy3);
    return MappingStrategy3;
}(MappingStrategyBase_1.MappingStrategyBase));
exports.MappingStrategy3 = MappingStrategy3;

cc._RF.pop();
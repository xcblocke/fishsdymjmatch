"use strict";
cc._RF.push(module, 'abd41XmVp1E8oXdZjRfIbF8', 'MappingStrategy2');
// subpackages/l_mapping/Scripts/MappingStrategy2.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingStrategy2 = void 0;
var Common_1 = require("../../../Scripts/types/Common");
var FactoryMapping_1 = require("../../../Scripts/FactoryMapping");
var MappingStrategyBase_1 = require("../../../Scripts/MappingStrategyBase");
var MappingStrategy2 = /** @class */ (function (_super) {
    __extends(MappingStrategy2, _super);
    function MappingStrategy2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Mapping2";
        _this.desc = "高精确度反向匹配策略";
        return _this;
    }
    MappingStrategy2.prototype.mapping = function (t) {
        var e, r, n = t.levels, o = t.capability;
        if (!n || 0 === n.length)
            return null;
        for (var i = n[0], p = Math.abs((null !== (e = n[0][Common_1.LevelValueKey]) && void 0 !== e ? e : 0) + o - 1), c = 1; c < n.length; c++) {
            var s = null !== (r = n[c][Common_1.LevelValueKey]) && void 0 !== r ? r : 0, u = Math.abs(s + o - 1);
            if (u < p) {
                p = u;
                i = n[c];
            }
        }
        return i;
    };
    MappingStrategy2 = __decorate([
        FactoryMapping_1.mappingStrategy("Mapping2")
    ], MappingStrategy2);
    return MappingStrategy2;
}(MappingStrategyBase_1.MappingStrategyBase));
exports.MappingStrategy2 = MappingStrategy2;

cc._RF.pop();
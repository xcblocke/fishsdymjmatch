"use strict";
cc._RF.push(module, '85a22KHVqhN0LQ73msAn0Fa', 'MappingStrategy1');
// Scripts/MappingStrategy1.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingStrategy1 = void 0;
var Common_1 = require("./types/Common");
var FactoryMapping_1 = require("./FactoryMapping");
var MappingStrategyBase_1 = require("./MappingStrategyBase");
var MappingStrategy1 = /** @class */ (function (_super) {
    __extends(MappingStrategy1, _super);
    function MappingStrategy1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Mapping1";
        _this.desc = "高精确度匹配策略";
        return _this;
    }
    MappingStrategy1.prototype.mapping = function (e) {
        var t, o, n = e.levels, i = e.capability;
        if (!n || 0 === n.length)
            return null;
        for (var r = n[0], l = Math.abs((null !== (t = n[0][Common_1.LevelValueKey]) && void 0 !== t ? t : 0) - i), s = 1; s < n.length; s++) {
            var c = null !== (o = n[s][Common_1.LevelValueKey]) && void 0 !== o ? o : 0, u = Math.abs(c - i);
            if (u < l) {
                l = u;
                r = n[s];
            }
        }
        return r;
    };
    MappingStrategy1 = __decorate([
        FactoryMapping_1.mappingStrategy("Mapping1")
    ], MappingStrategy1);
    return MappingStrategy1;
}(MappingStrategyBase_1.MappingStrategyBase));
exports.MappingStrategy1 = MappingStrategy1;

cc._RF.pop();
"use strict";
cc._RF.push(module, '08de0Vl5khHgrSkpLA+L41F', 'MappingStrategy4');
// subpackages/l_mapping/Scripts/MappingStrategy4.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappingStrategy4 = void 0;
var Common_1 = require("../../../Scripts/types/Common");
var FactoryMapping_1 = require("../../../Scripts/FactoryMapping");
var MappingStrategyBase_1 = require("../../../Scripts/MappingStrategyBase");
var MappingStrategy4 = /** @class */ (function (_super) {
    __extends(MappingStrategy4, _super);
    function MappingStrategy4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Mapping4";
        _this.desc = "无视能力值随机策略";
        return _this;
    }
    MappingStrategy4.prototype.mapping = function (t) {
        var e, r, n = t.levels;
        if (!n || 0 === n.length)
            return null;
        var o = t.extractModel.getLastLevelRecord();
        if (o.length <= 0)
            return null;
        for (var i = o[0], p = this.getStrategyParam(), c = p.x, s = void 0 === c ? 0.25 : c, u = p.y, l = void 0 === u ? 0.25 : u, y = null !== (e = i.levelData[Common_1.LevelValueKey]) && void 0 !== e ? e : 0, g = y - s, f = y + l, v = [], d = 0; d < n.length; d++) {
            var h = null !== (r = n[d][Common_1.LevelValueKey]) && void 0 !== r ? r : 0;
            (h < g && h >= 0 || h > f && h <= 1) && v.push(n[d]);
        }
        return 0 === v.length ? null : v[Math.floor(Math.random() * v.length)];
    };
    MappingStrategy4 = __decorate([
        FactoryMapping_1.mappingStrategy("Mapping4")
    ], MappingStrategy4);
    return MappingStrategy4;
}(MappingStrategyBase_1.MappingStrategyBase));
exports.MappingStrategy4 = MappingStrategy4;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'de1faj2k/ZHQqfpKJlkLPJB', 'CapabilityStrategy4');
// subpackages/l_capability/Scripts/CapabilityStrategy4.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStrategy4 = void 0;
var FactoryCapability_1 = require("../../../Scripts/FactoryCapability");
var CapabilityStrategyBase_1 = require("../../../Scripts/CapabilityStrategyBase");
var CapabilityStrategy4 = /** @class */ (function (_super) {
    __extends(CapabilityStrategy4, _super);
    function CapabilityStrategy4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Capability4";
        _this.desc = "用户能力值 = win ? (x*(1-lastCapability)) : (y*lastCapability)";
        return _this;
    }
    CapabilityStrategy4.prototype.updateCapability = function (t) {
        var e = this.getCapability(t), i = t.win, r = this.getStrategyParam(), a = r.x, o = void 0 === a ? 0.5 : a, n = r.y, c = i ? o * (1 - e) : (void 0 === n ? -0.5 : n) * e;
        isNaN(c) && (c = t.defaultCapability);
        this.setCapability(t, c);
    };
    CapabilityStrategy4 = __decorate([
        FactoryCapability_1.capabilityStrategy("Capability4")
    ], CapabilityStrategy4);
    return CapabilityStrategy4;
}(CapabilityStrategyBase_1.CapabilityStrategyBase));
exports.CapabilityStrategy4 = CapabilityStrategy4;

cc._RF.pop();
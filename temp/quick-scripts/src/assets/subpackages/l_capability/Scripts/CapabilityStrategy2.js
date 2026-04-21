"use strict";
cc._RF.push(module, 'a0f149gVzhNn6lIIPRbXj0h', 'CapabilityStrategy2');
// subpackages/l_capability/Scripts/CapabilityStrategy2.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStrategy2 = void 0;
var FactoryCapability_1 = require("../../../Scripts/FactoryCapability");
var CapabilityStrategyBase_1 = require("../../../Scripts/CapabilityStrategyBase");
var CapabilityStrategy2 = /** @class */ (function (_super) {
    __extends(CapabilityStrategy2, _super);
    function CapabilityStrategy2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Capability2";
        _this.desc = "用户能力值=Sigmoid(x*ln(首次通关数/理论首次通关数))";
        return _this;
    }
    CapabilityStrategy2.prototype.updateCapability = function (t) {
        var e = t.extractModel, i = e.getFirstPassCount(t.win), r = e.getExpectedFirstPassCount(), a = t.defaultCapability, o = this.getStrategyParam().x, n = void 0 === o ? 0.5 : o;
        i > 0 && r > 0 && (a = CapabilityStrategyBase_1.sigmoid(n * Math.log(i / r)));
        this.setCapability(t, a);
    };
    CapabilityStrategy2 = __decorate([
        FactoryCapability_1.capabilityStrategy("Capability2")
    ], CapabilityStrategy2);
    return CapabilityStrategy2;
}(CapabilityStrategyBase_1.CapabilityStrategyBase));
exports.CapabilityStrategy2 = CapabilityStrategy2;

cc._RF.pop();
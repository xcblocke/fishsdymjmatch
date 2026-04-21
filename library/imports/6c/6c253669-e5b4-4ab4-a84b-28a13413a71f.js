"use strict";
cc._RF.push(module, '6c253Zp5bRKtKhLKKE0E6cf', 'CapabilityStrategy3');
// subpackages/l_capability/Scripts/CapabilityStrategy3.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStrategy3 = void 0;
var FactoryCapability_1 = require("../../../Scripts/FactoryCapability");
var CapabilityStrategyBase_1 = require("../../../Scripts/CapabilityStrategyBase");
var CapabilityStrategy3 = /** @class */ (function (_super) {
    __extends(CapabilityStrategy3, _super);
    function CapabilityStrategy3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Capability3";
        _this.desc = "用户能力值=Sigmoid(x*ln(总时长/总消除数)+y*ln(首次通关数/理论首次通关数))";
        return _this;
    }
    CapabilityStrategy3.prototype.updateCapability = function (t) {
        var e = t.extractModel, i = e.getAllGameTime(), r = e.getAllClearCount(), a = e.getFirstPassCount(t.win), o = e.getExpectedFirstPassCount(), n = t.defaultCapability, p = this.getStrategyParam(), s = p.x, y = void 0 === s ? -0.05 : s, l = p.y, u = void 0 === l ? 0.05 : l;
        i > 0 && r > 0 && a > 0 && o > 0 && (n = CapabilityStrategyBase_1.sigmoid(y * Math.log(i / r) + u * Math.log(a / o)));
        this.setCapability(t, n);
    };
    CapabilityStrategy3 = __decorate([
        FactoryCapability_1.capabilityStrategy("Capability3")
    ], CapabilityStrategy3);
    return CapabilityStrategy3;
}(CapabilityStrategyBase_1.CapabilityStrategyBase));
exports.CapabilityStrategy3 = CapabilityStrategy3;

cc._RF.pop();
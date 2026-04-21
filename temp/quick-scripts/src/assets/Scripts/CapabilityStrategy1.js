"use strict";
cc._RF.push(module, '2f4ebkUQV1CdqWVTkHhDPoJ', 'CapabilityStrategy1');
// Scripts/CapabilityStrategy1.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStrategy1 = void 0;
var FactoryCapability_1 = require("./FactoryCapability");
var CapabilityStrategyBase_1 = require("./CapabilityStrategyBase");
var CapabilityStrategy1 = /** @class */ (function (_super) {
    __extends(CapabilityStrategy1, _super);
    function CapabilityStrategy1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Capability1";
        _this.desc = "用户能力值=Sigmoid(x*ln(总时长/总消除数))";
        return _this;
    }
    CapabilityStrategy1.prototype.updateCapability = function (e) {
        var t = e.extractModel, o = t.getAllGameTime(), n = t.getAllClearCount(), i = this.getStrategyParam().x, r = void 0 === i ? -0.166 : i, a = e.defaultCapability;
        o > 0 && n > 0 && (a = CapabilityStrategyBase_1.sigmoid(r * Math.log(o / n)));
        this.setCapability(e, a);
    };
    CapabilityStrategy1 = __decorate([
        FactoryCapability_1.capabilityStrategy("Capability1")
    ], CapabilityStrategy1);
    return CapabilityStrategy1;
}(CapabilityStrategyBase_1.CapabilityStrategyBase));
exports.CapabilityStrategy1 = CapabilityStrategy1;

cc._RF.pop();
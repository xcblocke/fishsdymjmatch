
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/CapabilityStrategy1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0NhcGFiaWxpdHlTdHJhdGVneTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBeUQ7QUFDekQsbUVBQTJFO0FBRTNFO0lBQXlDLHVDQUFzQjtJQUEvRDtRQUFBLHFFQWFDO1FBWkMsVUFBSSxHQUFHLGFBQWEsQ0FBQztRQUNyQixVQUFJLEdBQUcsK0JBQStCLENBQUM7O0lBV3pDLENBQUM7SUFWQyw4Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUN0QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEVBQ3hCLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLEVBQzdCLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzdCLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFDMUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLGdDQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBWlUsbUJBQW1CO1FBRC9CLHNDQUFrQixDQUFDLGFBQWEsQ0FBQztPQUNyQixtQkFBbUIsQ0FhL0I7SUFBRCwwQkFBQztDQWJELEFBYUMsQ0Fid0MsK0NBQXNCLEdBYTlEO0FBYlksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FwYWJpbGl0eVN0cmF0ZWd5IH0gZnJvbSAnLi9GYWN0b3J5Q2FwYWJpbGl0eSc7XG5pbXBvcnQgeyBzaWdtb2lkLCBDYXBhYmlsaXR5U3RyYXRlZ3lCYXNlIH0gZnJvbSAnLi9DYXBhYmlsaXR5U3RyYXRlZ3lCYXNlJztcbkBjYXBhYmlsaXR5U3RyYXRlZ3koXCJDYXBhYmlsaXR5MVwiKVxuZXhwb3J0IGNsYXNzIENhcGFiaWxpdHlTdHJhdGVneTEgZXh0ZW5kcyBDYXBhYmlsaXR5U3RyYXRlZ3lCYXNlIHtcbiAgbmFtZSA9IFwiQ2FwYWJpbGl0eTFcIjtcbiAgZGVzYyA9IFwi55So5oi36IO95Yqb5YC8PVNpZ21vaWQoeCpsbijmgLvml7bplb8v5oC75raI6Zmk5pWwKSlcIjtcbiAgdXBkYXRlQ2FwYWJpbGl0eShlKSB7XG4gICAgdmFyIHQgPSBlLmV4dHJhY3RNb2RlbCxcbiAgICAgIG8gPSB0LmdldEFsbEdhbWVUaW1lKCksXG4gICAgICBuID0gdC5nZXRBbGxDbGVhckNvdW50KCksXG4gICAgICBpID0gdGhpcy5nZXRTdHJhdGVneVBhcmFtKCkueCxcbiAgICAgIHIgPSB2b2lkIDAgPT09IGkgPyAtMC4xNjYgOiBpLFxuICAgICAgYSA9IGUuZGVmYXVsdENhcGFiaWxpdHk7XG4gICAgbyA+IDAgJiYgbiA+IDAgJiYgKGEgPSBzaWdtb2lkKHIgKiBNYXRoLmxvZyhvIC8gbikpKTtcbiAgICB0aGlzLnNldENhcGFiaWxpdHkoZSwgYSk7XG4gIH1cbn0iXX0=
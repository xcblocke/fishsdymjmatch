
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_capability/Scripts/CapabilityStrategy2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcGFiaWxpdHkvU2NyaXB0cy9DYXBhYmlsaXR5U3RyYXRlZ3kyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQXdFO0FBQ3hFLGtGQUEwRjtBQUUxRjtJQUF5Qyx1Q0FBc0I7SUFBL0Q7UUFBQSxxRUFhQztRQVpDLFVBQUksR0FBRyxhQUFhLENBQUM7UUFDckIsVUFBSSxHQUFHLG9DQUFvQyxDQUFDOztJQVc5QyxDQUFDO0lBVkMsOENBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFDcEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQzlCLENBQUMsR0FBRyxDQUFDLENBQUMseUJBQXlCLEVBQUUsRUFDakMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFDdkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsRUFDN0IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLGdDQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBWlUsbUJBQW1CO1FBRC9CLHNDQUFrQixDQUFDLGFBQWEsQ0FBQztPQUNyQixtQkFBbUIsQ0FhL0I7SUFBRCwwQkFBQztDQWJELEFBYUMsQ0Fid0MsK0NBQXNCLEdBYTlEO0FBYlksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FwYWJpbGl0eVN0cmF0ZWd5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9GYWN0b3J5Q2FwYWJpbGl0eSc7XG5pbXBvcnQgeyBzaWdtb2lkLCBDYXBhYmlsaXR5U3RyYXRlZ3lCYXNlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9DYXBhYmlsaXR5U3RyYXRlZ3lCYXNlJztcbkBjYXBhYmlsaXR5U3RyYXRlZ3koXCJDYXBhYmlsaXR5MlwiKVxuZXhwb3J0IGNsYXNzIENhcGFiaWxpdHlTdHJhdGVneTIgZXh0ZW5kcyBDYXBhYmlsaXR5U3RyYXRlZ3lCYXNlIHtcbiAgbmFtZSA9IFwiQ2FwYWJpbGl0eTJcIjtcbiAgZGVzYyA9IFwi55So5oi36IO95Yqb5YC8PVNpZ21vaWQoeCpsbijpppbmrKHpgJrlhbPmlbAv55CG6K666aaW5qyh6YCa5YWz5pWwKSlcIjtcbiAgdXBkYXRlQ2FwYWJpbGl0eSh0KSB7XG4gICAgdmFyIGUgPSB0LmV4dHJhY3RNb2RlbCxcbiAgICAgIGkgPSBlLmdldEZpcnN0UGFzc0NvdW50KHQud2luKSxcbiAgICAgIHIgPSBlLmdldEV4cGVjdGVkRmlyc3RQYXNzQ291bnQoKSxcbiAgICAgIGEgPSB0LmRlZmF1bHRDYXBhYmlsaXR5LFxuICAgICAgbyA9IHRoaXMuZ2V0U3RyYXRlZ3lQYXJhbSgpLngsXG4gICAgICBuID0gdm9pZCAwID09PSBvID8gMC41IDogbztcbiAgICBpID4gMCAmJiByID4gMCAmJiAoYSA9IHNpZ21vaWQobiAqIE1hdGgubG9nKGkgLyByKSkpO1xuICAgIHRoaXMuc2V0Q2FwYWJpbGl0eSh0LCBhKTtcbiAgfVxufSJdfQ==
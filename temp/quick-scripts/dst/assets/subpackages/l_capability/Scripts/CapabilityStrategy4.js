
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_capability/Scripts/CapabilityStrategy4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcGFiaWxpdHkvU2NyaXB0cy9DYXBhYmlsaXR5U3RyYXRlZ3k0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQXdFO0FBQ3hFLGtGQUFpRjtBQUVqRjtJQUF5Qyx1Q0FBc0I7SUFBL0Q7UUFBQSxxRUFjQztRQWJDLFVBQUksR0FBRyxhQUFhLENBQUM7UUFDckIsVUFBSSxHQUFHLDJEQUEyRCxDQUFDOztJQVlyRSxDQUFDO0lBWEMsOENBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1QsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDUCxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ1AsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RCxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQWJVLG1CQUFtQjtRQUQvQixzQ0FBa0IsQ0FBQyxhQUFhLENBQUM7T0FDckIsbUJBQW1CLENBYy9CO0lBQUQsMEJBQUM7Q0FkRCxBQWNDLENBZHdDLCtDQUFzQixHQWM5RDtBQWRZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhcGFiaWxpdHlTdHJhdGVneSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRmFjdG9yeUNhcGFiaWxpdHknO1xuaW1wb3J0IHsgQ2FwYWJpbGl0eVN0cmF0ZWd5QmFzZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ2FwYWJpbGl0eVN0cmF0ZWd5QmFzZSc7XG5AY2FwYWJpbGl0eVN0cmF0ZWd5KFwiQ2FwYWJpbGl0eTRcIilcbmV4cG9ydCBjbGFzcyBDYXBhYmlsaXR5U3RyYXRlZ3k0IGV4dGVuZHMgQ2FwYWJpbGl0eVN0cmF0ZWd5QmFzZSB7XG4gIG5hbWUgPSBcIkNhcGFiaWxpdHk0XCI7XG4gIGRlc2MgPSBcIueUqOaIt+iDveWKm+WAvCA9IHdpbiA/ICh4KigxLWxhc3RDYXBhYmlsaXR5KSkgOiAoeSpsYXN0Q2FwYWJpbGl0eSlcIjtcbiAgdXBkYXRlQ2FwYWJpbGl0eSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldENhcGFiaWxpdHkodCksXG4gICAgICBpID0gdC53aW4sXG4gICAgICByID0gdGhpcy5nZXRTdHJhdGVneVBhcmFtKCksXG4gICAgICBhID0gci54LFxuICAgICAgbyA9IHZvaWQgMCA9PT0gYSA/IDAuNSA6IGEsXG4gICAgICBuID0gci55LFxuICAgICAgYyA9IGkgPyBvICogKDEgLSBlKSA6ICh2b2lkIDAgPT09IG4gPyAtMC41IDogbikgKiBlO1xuICAgIGlzTmFOKGMpICYmIChjID0gdC5kZWZhdWx0Q2FwYWJpbGl0eSk7XG4gICAgdGhpcy5zZXRDYXBhYmlsaXR5KHQsIGMpO1xuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_capability/Scripts/CapabilityStrategy3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcGFiaWxpdHkvU2NyaXB0cy9DYXBhYmlsaXR5U3RyYXRlZ3kzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQXdFO0FBQ3hFLGtGQUEwRjtBQUUxRjtJQUF5Qyx1Q0FBc0I7SUFBL0Q7UUFBQSxxRUFrQkM7UUFqQkMsVUFBSSxHQUFHLGFBQWEsQ0FBQztRQUNyQixVQUFJLEdBQUcsbURBQW1ELENBQUM7O0lBZ0I3RCxDQUFDO0lBZkMsOENBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFDcEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFDdEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDOUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyx5QkFBeUIsRUFBRSxFQUNqQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUN2QixDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQzNCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNQLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzVCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNQLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsZ0NBQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBakJVLG1CQUFtQjtRQUQvQixzQ0FBa0IsQ0FBQyxhQUFhLENBQUM7T0FDckIsbUJBQW1CLENBa0IvQjtJQUFELDBCQUFDO0NBbEJELEFBa0JDLENBbEJ3QywrQ0FBc0IsR0FrQjlEO0FBbEJZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhcGFiaWxpdHlTdHJhdGVneSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRmFjdG9yeUNhcGFiaWxpdHknO1xuaW1wb3J0IHsgc2lnbW9pZCwgQ2FwYWJpbGl0eVN0cmF0ZWd5QmFzZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ2FwYWJpbGl0eVN0cmF0ZWd5QmFzZSc7XG5AY2FwYWJpbGl0eVN0cmF0ZWd5KFwiQ2FwYWJpbGl0eTNcIilcbmV4cG9ydCBjbGFzcyBDYXBhYmlsaXR5U3RyYXRlZ3kzIGV4dGVuZHMgQ2FwYWJpbGl0eVN0cmF0ZWd5QmFzZSB7XG4gIG5hbWUgPSBcIkNhcGFiaWxpdHkzXCI7XG4gIGRlc2MgPSBcIueUqOaIt+iDveWKm+WAvD1TaWdtb2lkKHgqbG4o5oC75pe26ZW/L+aAu+a2iOmZpOaVsCkreSpsbijpppbmrKHpgJrlhbPmlbAv55CG6K666aaW5qyh6YCa5YWz5pWwKSlcIjtcbiAgdXBkYXRlQ2FwYWJpbGl0eSh0KSB7XG4gICAgdmFyIGUgPSB0LmV4dHJhY3RNb2RlbCxcbiAgICAgIGkgPSBlLmdldEFsbEdhbWVUaW1lKCksXG4gICAgICByID0gZS5nZXRBbGxDbGVhckNvdW50KCksXG4gICAgICBhID0gZS5nZXRGaXJzdFBhc3NDb3VudCh0LndpbiksXG4gICAgICBvID0gZS5nZXRFeHBlY3RlZEZpcnN0UGFzc0NvdW50KCksXG4gICAgICBuID0gdC5kZWZhdWx0Q2FwYWJpbGl0eSxcbiAgICAgIHAgPSB0aGlzLmdldFN0cmF0ZWd5UGFyYW0oKSxcbiAgICAgIHMgPSBwLngsXG4gICAgICB5ID0gdm9pZCAwID09PSBzID8gLTAuMDUgOiBzLFxuICAgICAgbCA9IHAueSxcbiAgICAgIHUgPSB2b2lkIDAgPT09IGwgPyAwLjA1IDogbDtcbiAgICBpID4gMCAmJiByID4gMCAmJiBhID4gMCAmJiBvID4gMCAmJiAobiA9IHNpZ21vaWQoeSAqIE1hdGgubG9nKGkgLyByKSArIHUgKiBNYXRoLmxvZyhhIC8gbykpKTtcbiAgICB0aGlzLnNldENhcGFiaWxpdHkodCwgbik7XG4gIH1cbn0iXX0=
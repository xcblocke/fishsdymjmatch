
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_capabilityChange/Scripts/CapabilityChangeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08b947ZtalDX5x+Or6W/p47', 'CapabilityChangeTrait');
// subpackages/l_capabilityChange/Scripts/CapabilityChangeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var CapabilityChangeTrait = /** @class */ (function (_super) {
    __extends(CapabilityChangeTrait, _super);
    function CapabilityChangeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CapabilityChangeTrait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            logBase: null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.logBase) && void 0 !== e ? e : 1.2
        };
    };
    CapabilityChangeTrait.prototype.onExtNormLv_getLogBase = function (t, r) {
        if (this.checkGameMode()) {
            var e = this._config.logBase;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    CapabilityChangeTrait.traitKey = "CapabilityChange";
    CapabilityChangeTrait = __decorate([
        mj.trait,
        mj.class("CapabilityChangeTrait")
    ], CapabilityChangeTrait);
    return CapabilityChangeTrait;
}(ExtractTrait_1.default));
exports.default = CapabilityChangeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcGFiaWxpdHlDaGFuZ2UvU2NyaXB0cy9DYXBhYmlsaXR5Q2hhbmdlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUF5RDtBQUN6RCw4RUFBd0Y7QUFHeEY7SUFBbUQseUNBQVk7SUFBL0Q7O0lBbUJBLENBQUM7SUFqQkMsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7U0FDdEgsQ0FBQztJQUNKLENBQUM7SUFDRCxzREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDN0IsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWpCTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRGxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0FtQnpDO0lBQUQsNEJBQUM7Q0FuQkQsQUFtQkMsQ0FuQmtELHNCQUFZLEdBbUI5RDtrQkFuQm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0VHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9FeHRyYWN0VHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDYXBhYmlsaXR5Q2hhbmdlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcGFiaWxpdHlDaGFuZ2VUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2FwYWJpbGl0eUNoYW5nZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHIsIGU7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgbG9nQmFzZTogbnVsbCAhPT0gKGUgPSBudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5sb2dCYXNlKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMS4yXG4gICAgfTtcbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRMb2dCYXNlKHQsIHIpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciBlID0gdGhpcy5fY29uZmlnLmxvZ0Jhc2U7XG4gICAgICByKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IGVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSByKCk7XG4gIH1cbn0iXX0=
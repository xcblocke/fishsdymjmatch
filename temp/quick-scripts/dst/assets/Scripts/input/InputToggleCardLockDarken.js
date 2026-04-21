
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputToggleCardLockDarken.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adb57g+lb9JuYKmGSyIqoql', 'InputToggleCardLockDarken');
// Scripts/input/InputToggleCardLockDarken.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CardLockDarkenEffect_1 = require("../CardLockDarkenEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputToggleCardLockDarken = /** @class */ (function (_super) {
    __extends(InputToggleCardLockDarken, _super);
    function InputToggleCardLockDarken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputToggleCardLockDarken.prototype.excute = function (e) {
        var t = e.enabled;
        this.pushToggleCardLockDarkenEffect(t);
    };
    InputToggleCardLockDarken.prototype.pushToggleCardLockDarkenEffect = function (e) {
        var t = new CardLockDarkenEffect_1.CardLockDarkenEffect({
            isAutoMerge: !e
        });
        this.pushEffect(t);
    };
    __decorate([
        mj.traitEvent("IptTglLock_exec")
    ], InputToggleCardLockDarken.prototype, "excute", null);
    return InputToggleCardLockDarken;
}(InputBase_1.InputBase));
exports.default = InputToggleCardLockDarken;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VG9nZ2xlQ2FyZExvY2tEYXJrZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUErRDtBQUMvRCxvREFBbUQ7QUFDbkQ7SUFBdUQsNkNBQVM7SUFBaEU7O0lBWUEsQ0FBQztJQVZDLDBDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNsQixJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELGtFQUE4QixHQUE5QixVQUErQixDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLElBQUksMkNBQW9CLENBQUM7WUFDL0IsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUNoQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFURDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7MkRBSWhDO0lBT0gsZ0NBQUM7Q0FaRCxBQVlDLENBWnNELHFCQUFTLEdBWS9EO2tCQVpvQix5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkTG9ja0RhcmtlbkVmZmVjdCB9IGZyb20gJy4uL0NhcmRMb2NrRGFya2VuRWZmZWN0JztcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRUb2dnbGVDYXJkTG9ja0RhcmtlbiBleHRlbmRzIElucHV0QmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VGdsTG9ja19leGVjXCIpXG4gIGV4Y3V0ZShlKSB7XG4gICAgdmFyIHQgPSBlLmVuYWJsZWQ7XG4gICAgdGhpcy5wdXNoVG9nZ2xlQ2FyZExvY2tEYXJrZW5FZmZlY3QodCk7XG4gIH1cbiAgcHVzaFRvZ2dsZUNhcmRMb2NrRGFya2VuRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBDYXJkTG9ja0RhcmtlbkVmZmVjdCh7XG4gICAgICBpc0F1dG9NZXJnZTogIWVcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QodCk7XG4gIH1cbn0iXX0=
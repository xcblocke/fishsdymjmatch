
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputToggleShowLockMask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7caa2/QxU5M36iwrTmkgvG9', 'InputToggleShowLockMask');
// Scripts/input/InputToggleShowLockMask.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ToggleShowLockMaskEffect_1 = require("../ToggleShowLockMaskEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputToggleShowLockMask = /** @class */ (function (_super) {
    __extends(InputToggleShowLockMask, _super);
    function InputToggleShowLockMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputToggleShowLockMask.prototype.excute = function (e) {
        var t = e.enabled;
        this.pushToggleShowLockMaskEffect(t);
    };
    InputToggleShowLockMask.prototype.pushToggleShowLockMaskEffect = function (e) {
        var t = new ToggleShowLockMaskEffect_1.ToggleShowLockMaskEffect({
            enabled: e
        });
        this.pushEffect(t);
    };
    __decorate([
        mj.traitEvent("IptTglMask_exec")
    ], InputToggleShowLockMask.prototype, "excute", null);
    return InputToggleShowLockMask;
}(InputBase_1.InputBase));
exports.default = InputToggleShowLockMask;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VG9nZ2xlU2hvd0xvY2tNYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RUFBdUU7QUFDdkUsb0RBQW1EO0FBQ25EO0lBQXFELDJDQUFTO0lBQTlEOztJQVlBLENBQUM7SUFWQyx3Q0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDbEIsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCw4REFBNEIsR0FBNUIsVUFBNkIsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxJQUFJLG1EQUF3QixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBVEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO3lEQUloQztJQU9ILDhCQUFDO0NBWkQsQUFZQyxDQVpvRCxxQkFBUyxHQVk3RDtrQkFab0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9nZ2xlU2hvd0xvY2tNYXNrRWZmZWN0IH0gZnJvbSAnLi4vVG9nZ2xlU2hvd0xvY2tNYXNrRWZmZWN0JztcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRUb2dnbGVTaG93TG9ja01hc2sgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIklwdFRnbE1hc2tfZXhlY1wiKVxuICBleGN1dGUoZSkge1xuICAgIHZhciB0ID0gZS5lbmFibGVkO1xuICAgIHRoaXMucHVzaFRvZ2dsZVNob3dMb2NrTWFza0VmZmVjdCh0KTtcbiAgfVxuICBwdXNoVG9nZ2xlU2hvd0xvY2tNYXNrRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBUb2dnbGVTaG93TG9ja01hc2tFZmZlY3Qoe1xuICAgICAgZW5hYmxlZDogZVxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdCh0KTtcbiAgfVxufSJdfQ==
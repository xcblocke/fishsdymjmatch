"use strict";
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
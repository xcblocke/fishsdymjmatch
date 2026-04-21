"use strict";
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
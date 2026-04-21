"use strict";
cc._RF.push(module, '4c3dfEarvVOKqj3a/pmUty4', 'InputTouchCancel');
// Scripts/input/InputTouchCancel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBaseTouchCancel_1 = require("../inputbase/InputBaseTouchCancel");
var InputTouchCancel = /** @class */ (function (_super) {
    __extends(InputTouchCancel, _super);
    function InputTouchCancel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTouchCancel.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
    };
    return InputTouchCancel;
}(InputBaseTouchCancel_1.default));
exports.default = InputTouchCancel;

cc._RF.pop();
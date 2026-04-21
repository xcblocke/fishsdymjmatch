"use strict";
cc._RF.push(module, 'ccf8fLEo6JNoqu49nb/B7pt', 'InputRemoveLockMask');
// Scripts/input/InputRemoveLockMask.ts

Object.defineProperty(exports, "__esModule", { value: true });
var RemoveLockMaskEffect_1 = require("../RemoveLockMaskEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputRemoveLockMask = /** @class */ (function (_super) {
    __extends(InputRemoveLockMask, _super);
    function InputRemoveLockMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputRemoveLockMask.prototype.excute = function () {
        this.pushRemoveLockMaskEffect();
    };
    InputRemoveLockMask.prototype.pushRemoveLockMaskEffect = function () {
        var e = new RemoveLockMaskEffect_1.RemoveLockMaskEffect({});
        this.pushEffect(e);
    };
    return InputRemoveLockMask;
}(InputBase_1.InputBase));
exports.default = InputRemoveLockMask;

cc._RF.pop();
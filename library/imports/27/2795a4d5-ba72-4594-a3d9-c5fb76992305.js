"use strict";
cc._RF.push(module, '2795aTVunJFlKPZxft2mSMF', 'InputBaseTouchCancel');
// Scripts/inputbase/InputBaseTouchCancel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputBaseTouchCancel = /** @class */ (function (_super) {
    __extends(InputBaseTouchCancel, _super);
    function InputBaseTouchCancel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputBaseTouchCancel.prototype.excute = function () {
        if (this.gameContext.touchData.isValid) {
            var e = this.gameContext.getTileMapObject().deleteLastActionId();
            this.gameContext.touchModifier.modifyTouchCancel();
            this.pushTouchCancelEffect(e);
        }
    };
    return InputBaseTouchCancel;
}(InputBase_1.InputBase));
exports.default = InputBaseTouchCancel;

cc._RF.pop();
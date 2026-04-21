"use strict";
cc._RF.push(module, '8585cyHfC5FEZaQPmrwUMU1', 'InputOpenGenerateState');
// Scripts/input/InputOpenGenerateState.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputOpenGenerateState = /** @class */ (function (_super) {
    __extends(InputOpenGenerateState, _super);
    function InputOpenGenerateState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputOpenGenerateState.prototype.excute = function (e) {
        if (e.openGenerateState) {
            this.gameContext.setOpenGenerateState(true);
        }
        else {
            this.gameContext.setOpenGenerateState(false);
        }
    };
    return InputOpenGenerateState;
}(InputBase_1.InputBase));
exports.default = InputOpenGenerateState;

cc._RF.pop();
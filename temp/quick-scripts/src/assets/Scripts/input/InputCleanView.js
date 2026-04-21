"use strict";
cc._RF.push(module, 'b350dPrYkRFVboAszGZPIQK', 'InputCleanView');
// Scripts/input/InputCleanView.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCleanView = void 0;
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var CleanViewEffect_1 = require("../CleanViewEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputCleanView = /** @class */ (function (_super) {
    __extends(InputCleanView, _super);
    function InputCleanView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputCleanView.prototype.excute = function () {
        var e = new CleanViewEffect_1.CleanViewEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    return InputCleanView;
}(InputBase_1.InputBase));
exports.InputCleanView = InputCleanView;

cc._RF.pop();
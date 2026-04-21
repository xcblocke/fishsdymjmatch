"use strict";
cc._RF.push(module, '37569DPAxVMQY1qdzN9egEp', 'InputGameActive');
// Scripts/input/InputGameActive.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputGameActive = /** @class */ (function (_super) {
    __extends(InputGameActive, _super);
    function InputGameActive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputGameActive.prototype.excute = function () {
        this.doGameTiles();
    };
    InputGameActive.prototype.doGameTiles = function () { };
    __decorate([
        mj.traitEvent("IptGameAct_doGTiles")
    ], InputGameActive.prototype, "doGameTiles", null);
    return InputGameActive;
}(InputBase_1.InputBase));
exports.default = InputGameActive;

cc._RF.pop();
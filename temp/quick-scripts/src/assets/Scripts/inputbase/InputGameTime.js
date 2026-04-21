"use strict";
cc._RF.push(module, 'c9e11GkSyJIKYslFAgZmGJ3', 'InputGameTime');
// Scripts/inputbase/InputGameTime.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputGameTime = /** @class */ (function (_super) {
    __extends(InputGameTime, _super);
    function InputGameTime() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ignoreLog = true;
        return _this;
    }
    InputGameTime.prototype.excute = function (e) {
        this.gameController.gameTimeData.time = e.time;
    };
    __decorate([
        mj.traitEvent("IptGameTime_exec")
    ], InputGameTime.prototype, "excute", null);
    return InputGameTime;
}(InputBase_1.InputBase));
exports.default = InputGameTime;

cc._RF.pop();
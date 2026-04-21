"use strict";
cc._RF.push(module, '9baddJlMD1IHp1i4usMdyYq', 'InputUserOperate');
// Scripts/input/InputUserOperate.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputUserOperate = /** @class */ (function (_super) {
    __extends(InputUserOperate, _super);
    function InputUserOperate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputUserOperate.prototype.excute = function () {
        this.gameContext.getGameData().updateLastOpTime();
    };
    return InputUserOperate;
}(InputBase_1.InputBase));
exports.default = InputUserOperate;

cc._RF.pop();
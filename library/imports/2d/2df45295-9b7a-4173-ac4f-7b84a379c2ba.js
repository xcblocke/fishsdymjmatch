"use strict";
cc._RF.push(module, '2df45KVm3pBc6xPe4SjecK6', 'InputTile2InitViewFinish');
// Scripts/input/InputTile2InitViewFinish.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2InitViewFinish = /** @class */ (function (_super) {
    __extends(InputTile2InitViewFinish, _super);
    function InputTile2InitViewFinish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2InitViewFinish.prototype.excute = function () {
        mj.EventManager.emit(Config_1.HIDELOADING, this);
    };
    return InputTile2InitViewFinish;
}(InputBase_1.InputBase));
exports.default = InputTile2InitViewFinish;

cc._RF.pop();
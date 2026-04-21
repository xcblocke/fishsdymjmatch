"use strict";
cc._RF.push(module, '879demOGKlCGYaSr519tM9O', 'InputTouchMove');
// Scripts/input/InputTouchMove.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBaseTouchMove_1 = require("../inputbase/InputBaseTouchMove");
var InputTouchMove = /** @class */ (function (_super) {
    __extends(InputTouchMove, _super);
    function InputTouchMove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTouchMove.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
    };
    InputTouchMove.prototype.runStartMove = function (t) {
        _super.prototype.runStartMove.call(this, t);
        this.onStartMove(t);
    };
    InputTouchMove.prototype.onStartMove = function () { };
    __decorate([
        mj.traitEvent("IptTchMove_startMove")
    ], InputTouchMove.prototype, "onStartMove", null);
    return InputTouchMove;
}(InputBaseTouchMove_1.default));
exports.default = InputTouchMove;

cc._RF.pop();
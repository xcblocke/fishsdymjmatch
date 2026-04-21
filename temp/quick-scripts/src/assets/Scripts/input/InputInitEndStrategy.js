"use strict";
cc._RF.push(module, 'e81fc1NbixJLKDQGNIWIlyQ', 'InputInitEndStrategy');
// Scripts/input/InputInitEndStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputInitEndStrategy = void 0;
var InputBase_1 = require("../inputbase/InputBase");
var InputInitEndStrategy = /** @class */ (function (_super) {
    __extends(InputInitEndStrategy, _super);
    function InputInitEndStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputInitEndStrategy.prototype.excute = function (e) {
        var t = e.endStrategy;
        this.gameContext.endStrategy.initEndStrategy(t);
    };
    return InputInitEndStrategy;
}(InputBase_1.InputBase));
exports.InputInitEndStrategy = InputInitEndStrategy;

cc._RF.pop();
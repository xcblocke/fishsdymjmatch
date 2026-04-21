"use strict";
cc._RF.push(module, 'ee73b4LsJlLHa3bLcGX7vM3', 'InputStartInit');
// Scripts/inputbase/InputStartInit.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var StartInitEffect_1 = require("../StartInitEffect");
var InputBase_1 = require("./InputBase");
var InputStartInit = /** @class */ (function (_super) {
    __extends(InputStartInit, _super);
    function InputStartInit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputStartInit.prototype.excute = function () {
        this.pushStartInitEffect();
    };
    InputStartInit.prototype.pushStartInitEffect = function () {
        var e = new StartInitEffect_1.StartInitEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Serial);
    };
    return InputStartInit;
}(InputBase_1.InputBase));
exports.default = InputStartInit;

cc._RF.pop();
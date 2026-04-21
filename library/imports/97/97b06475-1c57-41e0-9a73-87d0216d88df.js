"use strict";
cc._RF.push(module, '97b06R1HFdB4Jpzh9AhbYjf', 'InputAddPropOff3h');
// Scripts/input/InputAddPropOff3h.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var AddPropOff3hEffect_1 = require("../AddPropOff3hEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputAddPropOff3h = /** @class */ (function (_super) {
    __extends(InputAddPropOff3h, _super);
    function InputAddPropOff3h() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputAddPropOff3h.prototype.excute = function (e) {
        this.pushEffect(new AddPropOff3hEffect_1.AddPropOff3hEffect({
            action: e.type
        }), BehaviorsEnum_1.EInsertType.Parallel);
    };
    return InputAddPropOff3h;
}(InputBase_1.InputBase));
exports.default = InputAddPropOff3h;

cc._RF.pop();
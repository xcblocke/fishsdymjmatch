"use strict";
cc._RF.push(module, '45c72NsRKNApJHuRHRUDPN/', 'InputTile2SetSlotType');
// Scripts/input/InputTile2SetSlotType.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2SetSlotType = /** @class */ (function (_super) {
    __extends(InputTile2SetSlotType, _super);
    function InputTile2SetSlotType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2SetSlotType.prototype.excute = function (e) {
        this.gameContext.setTile2SlotType(e.slotType);
    };
    return InputTile2SetSlotType;
}(InputBase_1.InputBase));
exports.default = InputTile2SetSlotType;

cc._RF.pop();
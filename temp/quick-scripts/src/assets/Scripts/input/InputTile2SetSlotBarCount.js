"use strict";
cc._RF.push(module, 'a9e03Z6lmhG7aFGiLZKmnA5', 'InputTile2SetSlotBarCount');
// Scripts/input/InputTile2SetSlotBarCount.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2SetSlotBarCount = /** @class */ (function (_super) {
    __extends(InputTile2SetSlotBarCount, _super);
    function InputTile2SetSlotBarCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2SetSlotBarCount.prototype.excute = function (e) {
        var t = e.slotBarCount || 4;
        this.gameContext.tile2SlotBarModifier.initSlotBar(t);
    };
    return InputTile2SetSlotBarCount;
}(InputBase_1.InputBase));
exports.default = InputTile2SetSlotBarCount;

cc._RF.pop();
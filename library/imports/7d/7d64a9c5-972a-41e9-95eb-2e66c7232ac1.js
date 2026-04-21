"use strict";
cc._RF.push(module, '7d64anFlypB6ZXrLmbHIyrB', 'InputTile2BaseTouchCancel');
// Scripts/inputbase/InputTile2BaseTouchCancel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./InputBase");
var InputTile2BaseTouchCancel = /** @class */ (function (_super) {
    __extends(InputTile2BaseTouchCancel, _super);
    function InputTile2BaseTouchCancel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2BaseTouchCancel.prototype.excute = function () {
        if (!this.gameContext.tile2ResultChecker.checkIsDead())
            if (this.gameContext.tile2TouchData.tileId) {
                this.gameContext.getTileMapObject().deleteLastActionId();
                this.gameContext.tile2TouchData.isMoving && this.runResetMove();
                this.gameContext.tile2TouchData.clear();
            }
            else
                this.gameContext.tile2TouchData.clear();
    };
    InputTile2BaseTouchCancel.prototype.runResetMove = function () { };
    return InputTile2BaseTouchCancel;
}(InputBase_1.InputBase));
exports.default = InputTile2BaseTouchCancel;

cc._RF.pop();
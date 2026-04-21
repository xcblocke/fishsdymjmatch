"use strict";
cc._RF.push(module, '80261F8L3dLP5EjASZyHeNU', 'InputTile2TouchCancel');
// Scripts/input/InputTile2TouchCancel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var Tile2ResetMoveEffect_1 = require("../Tile2ResetMoveEffect");
var InputTile2BaseTouchCancel_1 = require("../inputbase/InputTile2BaseTouchCancel");
var InputTile2TouchCancel = /** @class */ (function (_super) {
    __extends(InputTile2TouchCancel, _super);
    function InputTile2TouchCancel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2TouchCancel.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
    };
    InputTile2TouchCancel.prototype.runResetMove = function () {
        _super.prototype.runResetMove.call(this);
        var t = this.gameContext.tile2TouchData.tileId;
        if (this.gameContext.getTileMapObject().getTileObject(t)) {
            var o = new Tile2ResetMoveEffect_1.Tile2ResetMoveEffect({
                tileId: t
            });
            this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
        }
    };
    return InputTile2TouchCancel;
}(InputTile2BaseTouchCancel_1.default));
exports.default = InputTile2TouchCancel;

cc._RF.pop();
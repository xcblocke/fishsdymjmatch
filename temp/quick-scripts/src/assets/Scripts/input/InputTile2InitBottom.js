"use strict";
cc._RF.push(module, '0c5b6qGaiZGYZMC5clkAUq7', 'InputTile2InitBottom');
// Scripts/input/InputTile2InitBottom.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var Tile2InitBottomEffect_1 = require("../Tile2InitBottomEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2InitBottom = /** @class */ (function (_super) {
    __extends(InputTile2InitBottom, _super);
    function InputTile2InitBottom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2InitBottom.prototype.excute = function () {
        var e = this.gameContext.getGameData().getShuffleNums(), t = this.gameContext.getGameData().getHitTipsNums(), o = this.gameContext.getGameData().getRevertNums();
        this.pushEffect(new Tile2InitBottomEffect_1.Tile2InitBottomEffect({
            shuffleNum: e,
            hitTipsNum: t,
            revertNum: o
        }), BehaviorsEnum_1.EInsertType.Root);
    };
    return InputTile2InitBottom;
}(InputBase_1.InputBase));
exports.default = InputTile2InitBottom;

cc._RF.pop();
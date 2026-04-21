"use strict";
cc._RF.push(module, '88e20vbLkxNnIreECpfPeuo', 'InputTile2InitTop');
// Scripts/input/InputTile2InitTop.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var Tile2InitTopEffect_1 = require("../Tile2InitTopEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2InitTop = /** @class */ (function (_super) {
    __extends(InputTile2InitTop, _super);
    function InputTile2InitTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2InitTop.prototype.excute = function () {
        var e = this.gameContext.getGameData(), t = e.getLevelId(), o = this.gameContext.getTileMapObject().getCanMatchCardPairNum(), n = e.getScore(), i = this.gameContext.tile2ComboChecker.checkIsComboState(e.getComboNum());
        this.pushEffect(new Tile2InitTopEffect_1.Tile2InitTopEffect({
            level: t,
            matchNum: o,
            score: n,
            isCombo: i
        }), BehaviorsEnum_1.EInsertType.Root);
    };
    return InputTile2InitTop;
}(InputBase_1.InputBase));
exports.default = InputTile2InitTop;

cc._RF.pop();
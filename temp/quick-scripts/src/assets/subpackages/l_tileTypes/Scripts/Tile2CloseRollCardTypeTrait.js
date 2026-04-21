"use strict";
cc._RF.push(module, '79154WHxZ1Ev64C0F+JlYPK', 'Tile2CloseRollCardTypeTrait');
// subpackages/l_tileTypes/Scripts/Tile2CloseRollCardTypeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2CloseRollCardTypeTrait = /** @class */ (function (_super) {
    __extends(Tile2CloseRollCardTypeTrait, _super);
    function Tile2CloseRollCardTypeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2CloseRollCardTypeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2CloseRollCardTypeTrait.prototype.onT2GameCtrl_getTileTypes = function (t, e) {
        t.beforReturnVal && (t.beforReturnVal = t.beforReturnVal.replace(new RegExp(TileTypeEnum_1.ETileType.RollCard, "g"), ""));
        e({
            returnVal: t.beforReturnVal
        });
    };
    Tile2CloseRollCardTypeTrait.traitKey = "Tile2CloseRollCardType";
    Tile2CloseRollCardTypeTrait = __decorate([
        mj.trait,
        mj.class("Tile2CloseRollCardTypeTrait")
    ], Tile2CloseRollCardTypeTrait);
    return Tile2CloseRollCardTypeTrait;
}(Trait_1.default));
exports.default = Tile2CloseRollCardTypeTrait;

cc._RF.pop();
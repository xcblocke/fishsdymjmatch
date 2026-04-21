"use strict";
cc._RF.push(module, 'a0ae9yr4nNMFJRPda6VBcoM', 'Tile2OpenTile4');
// subpackages/l_opentile4/Scripts/Tile2OpenTile4.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2OpenTile4 = /** @class */ (function (_super) {
    __extends(Tile2OpenTile4, _super);
    function Tile2OpenTile4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2OpenTile4.prototype.onT2GameCtrl_gT2SlotT = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: GameTypeEnums_1.ETile2SlotType.Slot4
        });
    };
    Tile2OpenTile4.traitKey = "Tile2OpenTile4";
    Tile2OpenTile4 = __decorate([
        mj.trait,
        mj.class("Tile2OpenTile4")
    ], Tile2OpenTile4);
    return Tile2OpenTile4;
}(Trait_1.default));
exports.default = Tile2OpenTile4;

cc._RF.pop();
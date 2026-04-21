"use strict";
cc._RF.push(module, '72f35oHC+hCqIQl+q8VjfOe', 'Tile2FlowerNotRightClearTrait');
// subpackages/l_flowerClearTile2/Scripts/Tile2FlowerNotRightClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2FlowerNotRightClearTrait = /** @class */ (function (_super) {
    __extends(Tile2FlowerNotRightClearTrait, _super);
    function Tile2FlowerNotRightClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2FlowerNotRightClearTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2FlowerNotRightClearTrait.prototype.onT2FlowerClr_clearCon = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: {
                notRightClearEnable: this.traitData.notRightClearEnable || false
            }
        });
    };
    Tile2FlowerNotRightClearTrait.traitKey = "Tile2FlowerNotRightClear";
    Tile2FlowerNotRightClearTrait = __decorate([
        mj.trait,
        mj.class("Tile2FlowerNotRightClearTrait")
    ], Tile2FlowerNotRightClearTrait);
    return Tile2FlowerNotRightClearTrait;
}(Trait_1.default));
exports.default = Tile2FlowerNotRightClearTrait;

cc._RF.pop();
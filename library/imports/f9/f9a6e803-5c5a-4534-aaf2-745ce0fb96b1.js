"use strict";
cc._RF.push(module, 'f9a6egDXFpFNKrydFzg+5ax', 'Tile2FlowerStepClearTrait');
// subpackages/l_flowerClearTile2/Scripts/Tile2FlowerStepClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2FlowerStepClearTrait = /** @class */ (function (_super) {
    __extends(Tile2FlowerStepClearTrait, _super);
    function Tile2FlowerStepClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2FlowerStepClearTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2FlowerStepClearTrait.prototype.onT2FlowerClr_clearCon = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: {
                stepCount: this.traitData.stepCount || 0
            }
        });
    };
    Tile2FlowerStepClearTrait.traitKey = "Tile2FlowerStepClear";
    Tile2FlowerStepClearTrait = __decorate([
        mj.trait,
        mj.class("Tile2FlowerStepClearTrait")
    ], Tile2FlowerStepClearTrait);
    return Tile2FlowerStepClearTrait;
}(Trait_1.default));
exports.default = Tile2FlowerStepClearTrait;

cc._RF.pop();
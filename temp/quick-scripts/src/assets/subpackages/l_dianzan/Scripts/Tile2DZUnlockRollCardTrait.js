"use strict";
cc._RF.push(module, 'c09e2QePkxHUqoFVpUEBLND', 'Tile2DZUnlockRollCardTrait');
// subpackages/l_dianzan/Scripts/Tile2DZUnlockRollCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2DZUnlockRollCardTrait = /** @class */ (function (_super) {
    __extends(Tile2DZUnlockRollCardTrait, _super);
    function Tile2DZUnlockRollCardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DZUnlockRollCardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2DZUnlockRollCardTrait.prototype.onT2DianZCheck_isChkDZState = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: true
        });
    };
    Tile2DZUnlockRollCardTrait.traitKey = "Tile2DZUnlockRollCard";
    Tile2DZUnlockRollCardTrait = __decorate([
        mj.trait,
        mj.class("Tile2DZUnlockRollCardTrait")
    ], Tile2DZUnlockRollCardTrait);
    return Tile2DZUnlockRollCardTrait;
}(Trait_1.default));
exports.default = Tile2DZUnlockRollCardTrait;

cc._RF.pop();
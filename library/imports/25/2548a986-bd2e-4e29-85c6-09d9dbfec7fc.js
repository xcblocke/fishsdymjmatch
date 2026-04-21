"use strict";
cc._RF.push(module, '2548amGvS5OKYXGCdnb/sf8', 'Tile2MagnetTimeDownTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetTimeDownTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2MagnetTimeDownTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetTimeDownTrait, _super);
    function Tile2MagnetTimeDownTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetTimeDownTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetTimeDownTrait.prototype.onTile2MagnetBhv_downTime = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.traitData.downTime || 5
        });
    };
    Tile2MagnetTimeDownTrait.prototype.onTile2Magnet_slotLimit = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.traitData.slotBarLimit || 3
        });
    };
    Tile2MagnetTimeDownTrait.traitKey = "Tile2MagnetTimeDown";
    Tile2MagnetTimeDownTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetTimeDownTrait")
    ], Tile2MagnetTimeDownTrait);
    return Tile2MagnetTimeDownTrait;
}(Trait_1.default));
exports.default = Tile2MagnetTimeDownTrait;

cc._RF.pop();
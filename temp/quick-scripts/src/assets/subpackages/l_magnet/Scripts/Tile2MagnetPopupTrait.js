"use strict";
cc._RF.push(module, 'f9706Ph9ZVGE4KvQDX9jhCo', 'Tile2MagnetPopupTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetPopupTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2MagnetPopupTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetPopupTrait, _super);
    function Tile2MagnetPopupTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetPopupTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetPopupTrait.prototype.onTile2Magnet_popCnt = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.traitData.popupCount || 2
        });
    };
    Tile2MagnetPopupTrait.traitKey = "Tile2MagnetPopup";
    Tile2MagnetPopupTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetPopupTrait")
    ], Tile2MagnetPopupTrait);
    return Tile2MagnetPopupTrait;
}(Trait_1.default));
exports.default = Tile2MagnetPopupTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '79980Wi+xpOWL+szrp62ITQ', 'Tile2MagnetMatchesTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetMatchesTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2MagnetMatchesTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetMatchesTrait, _super);
    function Tile2MagnetMatchesTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetMatchesTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetMatchesTrait.prototype.onT2MagnetChk_magnetCnt = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this.traitData.matchPair || 1
        });
    };
    Tile2MagnetMatchesTrait.traitKey = "Tile2MagnetMatches";
    Tile2MagnetMatchesTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetMatchesTrait")
    ], Tile2MagnetMatchesTrait);
    return Tile2MagnetMatchesTrait;
}(Trait_1.default));
exports.default = Tile2MagnetMatchesTrait;

cc._RF.pop();
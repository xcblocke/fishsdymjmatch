"use strict";
cc._RF.push(module, '75df6Do6FpF9ZPRTlZuVqK7', 'Tile2MagnetPopLimitTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetPopLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2MagnetPopLimitTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetPopLimitTrait, _super);
    function Tile2MagnetPopLimitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetPopLimitTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetPopLimitTrait.prototype.isPreconMet = function () {
        return true === this.localData.isUsedRevive;
    };
    Tile2MagnetPopLimitTrait.prototype.onT2Revive_used = function (t, e) {
        this.localData.isUsedRevive || (this.localData.isUsedRevive = true);
        e();
    };
    Tile2MagnetPopLimitTrait.prototype.onTile2Magnet_preMet = function (t, e) {
        t.beforReturnVal && (t.beforReturnVal = this.isPreconMet());
        e({
            returnVal: t.beforReturnVal
        });
    };
    Tile2MagnetPopLimitTrait.prototype.onT2MagSlotStep_preMet = function (t, e) {
        t.beforReturnVal && (t.beforReturnVal = this.isPreconMet());
        e({
            returnVal: t.beforReturnVal
        });
    };
    Tile2MagnetPopLimitTrait.traitKey = "Tile2MagnetPopLimit";
    Tile2MagnetPopLimitTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetPopLimitTrait")
    ], Tile2MagnetPopLimitTrait);
    return Tile2MagnetPopLimitTrait;
}(Trait_1.default));
exports.default = Tile2MagnetPopLimitTrait;

cc._RF.pop();
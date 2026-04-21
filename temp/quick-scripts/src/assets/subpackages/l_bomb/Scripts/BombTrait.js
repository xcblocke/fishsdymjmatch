"use strict";
cc._RF.push(module, '50d6dkyD5lFqbU/S9M/dvpE', 'BombTrait');
// subpackages/l_bomb/Scripts/BombTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BombTrait = /** @class */ (function (_super) {
    __extends(BombTrait, _super);
    function BombTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BombTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BombTrait.prototype.onMainGameCtrl_getTile = function (t, e) {
        t.args[0].getLevelId() >= this._traitData.level && this._traitData.level > 0 && (t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.Bomb);
        e({
            returnVal: t.beforReturnVal
        });
    };
    BombTrait.traitKey = "Bomb";
    BombTrait = __decorate([
        mj.trait,
        mj.class("BombTrait")
    ], BombTrait);
    return BombTrait;
}(Trait_1.default));
exports.default = BombTrait;

cc._RF.pop();
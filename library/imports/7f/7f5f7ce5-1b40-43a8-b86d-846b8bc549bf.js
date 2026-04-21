"use strict";
cc._RF.push(module, '7f5f7zlG0BDqLhthGuLxUm/', 'Tile2FreeReviveNumTrait');
// subpackages/l_tile2FreeReviveNum/Scripts/Tile2FreeReviveNumTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2FreeReviveNumTrait = /** @class */ (function (_super) {
    __extends(Tile2FreeReviveNumTrait, _super);
    function Tile2FreeReviveNumTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2FreeReviveNumTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2FreeReviveNumTrait.prototype.onT2GD_getFrRvInitCnt = function (t, e) {
        var r;
        if (void 0 === (null === (r = this.traitData) || void 0 === r ? void 0 : r.freeCount))
            e();
        else {
            var i = Number(this.traitData.freeCount);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: i
            });
        }
    };
    Tile2FreeReviveNumTrait.traitKey = "Tile2FreeReviveNum";
    Tile2FreeReviveNumTrait = __decorate([
        mj.trait,
        mj.class("Tile2FreeReviveNumTrait")
    ], Tile2FreeReviveNumTrait);
    return Tile2FreeReviveNumTrait;
}(Trait_1.default));
exports.default = Tile2FreeReviveNumTrait;

cc._RF.pop();
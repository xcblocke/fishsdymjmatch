"use strict";
cc._RF.push(module, '27f569ZfshBLIIkt0Jzkh3B', 'TileTypesTrait');
// subpackages/l_tileTypes/Scripts/TileTypesTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TileTypesTrait = /** @class */ (function (_super) {
    __extends(TileTypesTrait, _super);
    function TileTypesTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileTypesTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTile2Event();
    };
    TileTypesTrait.prototype.registerTile2Event = function () {
        this.registerEvent([{
                event: "T2GameCtrl_getTileTypes",
                type: 2
            }]);
    };
    TileTypesTrait.prototype.onMainGameCtrl_getTile = function (t, e) {
        t.args[0].getLevelId() >= this._traitData.level && (t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.RollCard);
        e({
            returnVal: t.beforReturnVal
        });
    };
    TileTypesTrait.prototype.onT2GameCtrl_getTileTypes = function (t, e) {
        t.args[0].getLevelId() >= this._traitData.level && (t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.RollCard);
        e({
            returnVal: t.beforReturnVal
        });
    };
    TileTypesTrait.traitKey = "TileTypes";
    TileTypesTrait = __decorate([
        mj.trait,
        mj.class("TileTypesTrait")
    ], TileTypesTrait);
    return TileTypesTrait;
}(Trait_1.default));
exports.default = TileTypesTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '70ca5b+28tI35RT6Q7g7+aB', 'DaxiaoTravelTrait');
// subpackages/l_daxiaotravel/Scripts/DaxiaoTravelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DaxiaoTravelTrait = /** @class */ (function (_super) {
    __extends(DaxiaoTravelTrait, _super);
    function DaxiaoTravelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoTravelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DaxiaoTravelTrait.prototype.onTravelGaCtl_gTileTypes = function (t, e) {
        t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DaxiaoCard;
        e({
            returnVal: t.beforReturnVal
        });
    };
    DaxiaoTravelTrait.prototype.onDaxiaoCardType_getCount = function (t, e) {
        e({
            returnVal: this._traitData.count || 0,
            returnType: TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    DaxiaoTravelTrait.prototype.onIptInCollectCd_cTileTypes = function (t, e) {
        var r = t.beforReturnVal || "";
        e({
            returnVal: r = r.replace(TileTypeEnum_1.ETileType.DaxiaoCard, "")
        });
    };
    DaxiaoTravelTrait.prototype.onDaxiaoCardType_cenRange = function (t, e) {
        e({
            returnVal: this._traitData.cenRange || [3, 3],
            isBreak: true
        });
    };
    DaxiaoTravelTrait.prototype.onDaxiaoCardType_cInCenter = function (t, e) {
        e({
            returnVal: this._traitData.cInCenter || false,
            isBreak: true
        });
    };
    DaxiaoTravelTrait.traitKey = "DaxiaoTravel";
    DaxiaoTravelTrait = __decorate([
        mj.trait,
        mj.class("DaxiaoTravelTrait")
    ], DaxiaoTravelTrait);
    return DaxiaoTravelTrait;
}(Trait_1.default));
exports.default = DaxiaoTravelTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'cd2abXY/aJI7Yh7OAU9pMfp', 'DaxiaoDailyTrait');
// subpackages/l_daxiaodaily/Scripts/DaxiaoDailyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DaxiaoDailyTrait = /** @class */ (function (_super) {
    __extends(DaxiaoDailyTrait, _super);
    function DaxiaoDailyTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoDailyTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DaxiaoDailyTrait.prototype.onDailyChCtrl_getTileTypes = function (t, r) {
        t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DaxiaoCard;
        r({
            returnVal: t.beforReturnVal
        });
    };
    DaxiaoDailyTrait.prototype.onDaxiaoCardType_getCount = function (t, r) {
        r({
            returnVal: this._traitData.count || 0,
            returnType: TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    DaxiaoDailyTrait.prototype.onDaxiaoCardType_cenRange = function (t, r) {
        r({
            returnVal: this._traitData.cenRange || [3, 3],
            isBreak: true
        });
    };
    DaxiaoDailyTrait.prototype.onDaxiaoCardType_cInCenter = function (t, r) {
        r({
            returnVal: this._traitData.cInCenter || false,
            isBreak: true
        });
    };
    DaxiaoDailyTrait.traitKey = "DaxiaoDaily";
    DaxiaoDailyTrait = __decorate([
        mj.trait,
        mj.class("DaxiaoDailyTrait")
    ], DaxiaoDailyTrait);
    return DaxiaoDailyTrait;
}(Trait_1.default));
exports.default = DaxiaoDailyTrait;

cc._RF.pop();
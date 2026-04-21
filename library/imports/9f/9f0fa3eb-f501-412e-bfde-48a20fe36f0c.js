"use strict";
cc._RF.push(module, '9f0faPr9QFBLr/eSKIP428M', 'DaxiaoNormalTrait');
// subpackages/l_daxiaonormal/Scripts/DaxiaoNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DaxiaoNormalTrait = /** @class */ (function (_super) {
    __extends(DaxiaoNormalTrait, _super);
    function DaxiaoNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoNormalTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.gameEndCount || (this.localData.gameEndCount = 0);
    };
    DaxiaoNormalTrait.prototype.getNeedCount = function () {
        return this._traitData.needCount || 6;
    };
    DaxiaoNormalTrait.prototype.onMainGameCtrl_getTile = function (t, e) {
        if (this.localData.gameEndCount < this.getNeedCount())
            e();
        else {
            this.localData.gameEndCount = -1;
            t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.DaxiaoCard;
            e({
                returnVal: t.beforReturnVal
            });
        }
    };
    DaxiaoNormalTrait.prototype.isTile2Mode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    DaxiaoNormalTrait.prototype.onDaxiaoCardType_getCount = function (t, e) {
        if (this.isTile2Mode())
            e();
        else {
            e({
                returnVal: this._traitData.count || 0,
                returnType: TraitCallbackReturnType.jump,
                isBreak: true
            });
        }
    };
    DaxiaoNormalTrait.prototype.onGsListener_onGameEnd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal) {
            this.localData.gameEndCount = this.localData.gameEndCount + 1;
            e();
        }
        else
            e();
    };
    DaxiaoNormalTrait.prototype.onDaxiaoCardType_cenRange = function (t, e) {
        if (this.isTile2Mode()) {
            e();
        }
        else {
            e({
                returnVal: this._traitData.cenRange || [3, 3],
                isBreak: true
            });
        }
    };
    DaxiaoNormalTrait.prototype.onDaxiaoCardType_cInCenter = function (t, e) {
        if (this.isTile2Mode()) {
            e();
        }
        else {
            e({
                returnVal: this._traitData.cInCenter || false,
                isBreak: true
            });
        }
    };
    DaxiaoNormalTrait.traitKey = "DaxiaoNormal";
    DaxiaoNormalTrait = __decorate([
        mj.trait,
        mj.class("DaxiaoNormalTrait")
    ], DaxiaoNormalTrait);
    return DaxiaoNormalTrait;
}(Trait_1.default));
exports.default = DaxiaoNormalTrait;

cc._RF.pop();
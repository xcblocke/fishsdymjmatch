"use strict";
cc._RF.push(module, '0c3870iFTdCx6Vty0o4eaDl', 'Tile2StaLvTNormalTrait');
// subpackages/l_tile2StaLvTNormal/Scripts/Tile2StaLvTNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2StaLvTNormalTrait = /** @class */ (function (_super) {
    __extends(Tile2StaLvTNormalTrait, _super);
    function Tile2StaLvTNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2StaLvTNormalTrait.prototype.isSupportMode = function (t) {
        return t === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2StaLvTNormalTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._fileName = this._traitData.fileName || "";
    };
    Tile2StaLvTNormalTrait.prototype.onT2StaLvT_normFile = function (t, e) {
        if (this.checkGameMode() && this._fileName) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._fileName
            });
        }
        else {
            e();
        }
    };
    Tile2StaLvTNormalTrait.traitKey = "Tile2StaLvTNormal";
    Tile2StaLvTNormalTrait = __decorate([
        mj.trait,
        mj.class("Tile2StaLvTNormalTrait")
    ], Tile2StaLvTNormalTrait);
    return Tile2StaLvTNormalTrait;
}(ExtractTrait_1.default));
exports.default = Tile2StaLvTNormalTrait;

cc._RF.pop();
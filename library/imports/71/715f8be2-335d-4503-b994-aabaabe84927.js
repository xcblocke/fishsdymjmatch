"use strict";
cc._RF.push(module, '715f8viM11FA7mUqrqr6Ekn', 'Tile2StaLvTHardTrait');
// subpackages/l_tile2StaLvTHard/Scripts/Tile2StaLvTHardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2StaLvTHardTrait = /** @class */ (function (_super) {
    __extends(Tile2StaLvTHardTrait, _super);
    function Tile2StaLvTHardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2StaLvTHardTrait.prototype.isSupportMode = function (t) {
        return t === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2StaLvTHardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._fileName = this._traitData.fileName || "";
    };
    Tile2StaLvTHardTrait.prototype.onT2StaLvT_hardFile = function (t, e) {
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
    Tile2StaLvTHardTrait.traitKey = "Tile2StaLvTHard";
    Tile2StaLvTHardTrait = __decorate([
        mj.trait,
        mj.class("Tile2StaLvTHardTrait")
    ], Tile2StaLvTHardTrait);
    return Tile2StaLvTHardTrait;
}(ExtractTrait_1.default));
exports.default = Tile2StaLvTHardTrait;

cc._RF.pop();
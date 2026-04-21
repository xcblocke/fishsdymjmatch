"use strict";
cc._RF.push(module, 'fbf15Jmg29A+ot+fA9A42Bv', 'Tile2StaLvTEasyTrait');
// subpackages/l_tile2StaLvTEasy/Scripts/Tile2StaLvTEasyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2StaLvTEasyTrait = /** @class */ (function (_super) {
    __extends(Tile2StaLvTEasyTrait, _super);
    function Tile2StaLvTEasyTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2StaLvTEasyTrait.prototype.isSupportMode = function (t) {
        return t === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2StaLvTEasyTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._fileName = this._traitData.fileName || "";
    };
    Tile2StaLvTEasyTrait.prototype.onT2StaLvT_easyFile = function (t, e) {
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
    Tile2StaLvTEasyTrait.traitKey = "Tile2StaLvTEasy";
    Tile2StaLvTEasyTrait = __decorate([
        mj.trait,
        mj.class("Tile2StaLvTEasyTrait")
    ], Tile2StaLvTEasyTrait);
    return Tile2StaLvTEasyTrait;
}(ExtractTrait_1.default));
exports.default = Tile2StaLvTEasyTrait;

cc._RF.pop();
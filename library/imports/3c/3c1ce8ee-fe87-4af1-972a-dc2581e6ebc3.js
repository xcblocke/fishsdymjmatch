"use strict";
cc._RF.push(module, '3c1ceju/odK8Zcq3CWB5uvD', 'Tile2SurvivalNoFCTrait');
// subpackages/l_survivalNoFC/Scripts/Tile2SurvivalNoFCTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SurvivalNoFCAdjustTrait_1 = require("./SurvivalNoFCAdjustTrait");
var Tile2SurvivalNoFCTrait = /** @class */ (function (_super) {
    __extends(Tile2SurvivalNoFCTrait, _super);
    function Tile2SurvivalNoFCTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2SurvivalNoFCTrait.prototype.onLoad = function () {
        var e = this;
        _super.prototype.onLoad.call(this);
        Promise.resolve().then(function () {
            e.registerEvent([{
                    event: "AllClearTt_isSurAc"
                }]);
        });
    };
    Tile2SurvivalNoFCTrait.prototype.onAllClearTt_isSurAc = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var r;
            r = !(!this._config || 0 === this._config.length) && this.canActive();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.jump,
                returnVal: r
            });
        }
        else
            e();
    };
    Tile2SurvivalNoFCTrait.prototype.onSurvNoFCTrait_canActive = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var r;
            r = !(!this._config || 0 === this._config.length) && this.canActive();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.jump,
                returnVal: r
            });
        }
        else
            e();
    };
    Tile2SurvivalNoFCTrait.traitKey = "Tile2SurvivalNoFC";
    Tile2SurvivalNoFCTrait = __decorate([
        mj.trait,
        mj.class("Tile2SurvivalNoFCTrait")
    ], Tile2SurvivalNoFCTrait);
    return Tile2SurvivalNoFCTrait;
}(SurvivalNoFCAdjustTrait_1.default));
exports.default = Tile2SurvivalNoFCTrait;

cc._RF.pop();
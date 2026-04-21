"use strict";
cc._RF.push(module, '9bd66k8btZIP5i8fpWupgfl', 'SurvivalNoFCTrait');
// subpackages/l_survivalNoFC/Scripts/SurvivalNoFCTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SurvivalNoFCTrait = /** @class */ (function (_super) {
    __extends(SurvivalNoFCTrait, _super);
    function SurvivalNoFCTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurvivalNoFCTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SurvivalNoFCTrait.prototype.onGsListener_onSurvivalGame = function (t, e) {
        this.canActive() && UserModel_1.default.getInstance().getCurrentGameData().setHasBrokenCombo(true);
        e();
    };
    SurvivalNoFCTrait.prototype.canActive = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    SurvivalNoFCTrait.traitKey = "SurvivalNoFC";
    __decorate([
        mj.traitEvent("SurvNoFCTrait_canActive")
    ], SurvivalNoFCTrait.prototype, "canActive", null);
    SurvivalNoFCTrait = __decorate([
        mj.trait,
        mj.class("SurvivalNoFCTrait")
    ], SurvivalNoFCTrait);
    return SurvivalNoFCTrait;
}(Trait_1.default));
exports.default = SurvivalNoFCTrait;

cc._RF.pop();
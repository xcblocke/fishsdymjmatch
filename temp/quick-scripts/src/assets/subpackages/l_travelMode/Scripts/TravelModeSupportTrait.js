"use strict";
cc._RF.push(module, 'f268bcq1dZAPrcHN0CQ4nJG', 'TravelModeSupportTrait');
// subpackages/l_travelMode/Scripts/TravelModeSupportTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelModeSupportTrait = /** @class */ (function (_super) {
    __extends(TravelModeSupportTrait, _super);
    function TravelModeSupportTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelModeSupportTrait.prototype.onExtractTool_isSupCapUp = function (t, r) {
        if (t.args[0] !== GameTypeEnums_1.MjGameType.Travel) {
            r();
        }
        else {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: true
            });
        }
    };
    TravelModeSupportTrait.traitKey = "TravelModeSupport";
    TravelModeSupportTrait = __decorate([
        mj.trait,
        mj.class("TravelModeSupportTrait")
    ], TravelModeSupportTrait);
    return TravelModeSupportTrait;
}(Trait_1.default));
exports.default = TravelModeSupportTrait;

cc._RF.pop();
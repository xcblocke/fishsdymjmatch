"use strict";
cc._RF.push(module, 'bb6e987PapDM61IGLLHaV1+', 'AgeSurveyNoRewardTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyNoRewardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyNoRewardTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyNoRewardTrait, _super);
    function AgeSurveyNoRewardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AgeSurveyNoRewardTrait.prototype.onAgeSrvMgr_isCanReward = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: false
        });
    };
    AgeSurveyNoRewardTrait.traitKey = "AgeSurveyNoReward";
    AgeSurveyNoRewardTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyNoRewardTrait")
    ], AgeSurveyNoRewardTrait);
    return AgeSurveyNoRewardTrait;
}(Trait_1.default));
exports.default = AgeSurveyNoRewardTrait;

cc._RF.pop();
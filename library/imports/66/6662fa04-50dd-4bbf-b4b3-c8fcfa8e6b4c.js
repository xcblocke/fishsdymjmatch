"use strict";
cc._RF.push(module, '6662foEUN1Lv7SzyPz6jmtM', 'AgeSurveyRdmDisableTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyRdmDisableTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyRdmDisableTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyRdmDisableTrait, _super);
    function AgeSurveyRdmDisableTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AgeSurveyRdmDisableTrait.prototype.onAgeSrvMgr_isShuffle = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: false
        });
    };
    AgeSurveyRdmDisableTrait.traitKey = "AgeSurveyRdmDisable";
    AgeSurveyRdmDisableTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyRdmDisableTrait")
    ], AgeSurveyRdmDisableTrait);
    return AgeSurveyRdmDisableTrait;
}(Trait_1.default));
exports.default = AgeSurveyRdmDisableTrait;

cc._RF.pop();
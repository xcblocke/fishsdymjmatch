"use strict";
cc._RF.push(module, '5ff4dUMm8JCHqAFLTfSH8Oq', 'AgeSurveyAgeDataTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyAgeDataTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyAgeDataTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyAgeDataTrait, _super);
    function AgeSurveyAgeDataTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ageConfigs = [];
        return _this;
    }
    AgeSurveyAgeDataTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._ageConfigs = (null === (e = this._traitData) || void 0 === e ? void 0 : e.ageConfigs) || [];
    };
    AgeSurveyAgeDataTrait.prototype.onAgeSrvMgr_getAgeRanges = function (t, e) {
        var r, o, i = null !== (o = null === (r = t.args) || void 0 === r ? void 0 : r[0]) && void 0 !== o ? o : 0;
        if (this._ageConfigs && 0 !== this._ageConfigs.length) {
            var n = this._ageConfigs.find(function (t) {
                return t.surveyIndex === i;
            });
            if (n) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: n.ageRanges
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    AgeSurveyAgeDataTrait.traitKey = "AgeSurveyAgeData";
    AgeSurveyAgeDataTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyAgeDataTrait")
    ], AgeSurveyAgeDataTrait);
    return AgeSurveyAgeDataTrait;
}(Trait_1.default));
exports.default = AgeSurveyAgeDataTrait;

cc._RF.pop();
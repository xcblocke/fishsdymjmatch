"use strict";
cc._RF.push(module, '0f8555mfTVGDJKkegX/SW9F', 'AgeSurveyDescI18nTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyDescI18nTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyDescI18nTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyDescI18nTrait, _super);
    function AgeSurveyDescI18nTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._descI18nIds = [];
        return _this;
    }
    AgeSurveyDescI18nTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._descI18nIds = (null === (e = this._traitData) || void 0 === e ? void 0 : e.descI18nIds) || [];
    };
    AgeSurveyDescI18nTrait.prototype.onAgeSrvMgr_descI18nIds = function (t, e) {
        if (!this._descI18nIds || "string" == typeof this._descI18nIds && !this._descI18nIds || Array.isArray(this._descI18nIds) && 0 === this._descI18nIds.length) {
            e();
        }
        else {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._descI18nIds
            });
        }
    };
    AgeSurveyDescI18nTrait.traitKey = "AgeSurveyDescI18n";
    AgeSurveyDescI18nTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyDescI18nTrait")
    ], AgeSurveyDescI18nTrait);
    return AgeSurveyDescI18nTrait;
}(Trait_1.default));
exports.default = AgeSurveyDescI18nTrait;

cc._RF.pop();
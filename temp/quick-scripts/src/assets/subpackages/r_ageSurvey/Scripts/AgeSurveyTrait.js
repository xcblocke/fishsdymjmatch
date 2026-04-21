"use strict";
cc._RF.push(module, '128a5zAt8VFrpQN1mNyOUxF', 'AgeSurveyTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AgeSurveyManager_1 = require("./AgeSurveyManager");
var AgeSurveyTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyTrait, _super);
    function AgeSurveyTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AgeSurveyTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        var o = (null === (e = this._traitData) || void 0 === e ? void 0 : e.configs) || [], i = (null === (r = this._traitData) || void 0 === r ? void 0 : r.descI18nIds) || [];
        AgeSurveyManager_1.default.getInstance().setConfigs(o, i);
    };
    AgeSurveyTrait.prototype.onGuideBhv_start = function (t, e) {
        this.showOnGuideStart();
        e();
    };
    AgeSurveyTrait.prototype.onTile2GuideBhv_start = function (t, e) {
        this.showOnGuideStart();
        e();
    };
    AgeSurveyTrait.prototype.showOnGuideStart = function () {
        AgeSurveyManager_1.default.getInstance().tryShowNextSurvey(0);
    };
    AgeSurveyTrait.prototype.onLoginM_showLoad = function (t, e) {
        e();
        this.showOnLoading();
    };
    AgeSurveyTrait.prototype.showOnLoading = function () {
        AgeSurveyManager_1.default.getInstance().tryShowNextSurvey(1);
    };
    AgeSurveyTrait.traitKey = "AgeSurvey";
    __decorate([
        mj.traitEvent("AgeSurvey_showOnGuide")
    ], AgeSurveyTrait.prototype, "showOnGuideStart", null);
    __decorate([
        mj.traitEvent("AgeSurvey_showOnLoading")
    ], AgeSurveyTrait.prototype, "showOnLoading", null);
    AgeSurveyTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyTrait")
    ], AgeSurveyTrait);
    return AgeSurveyTrait;
}(Trait_1.default));
exports.default = AgeSurveyTrait;

cc._RF.pop();
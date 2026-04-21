"use strict";
cc._RF.push(module, 'fa7d5UEII1Par+o6QviSTuo', 'AgeSurveyPopOnHallTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyPopOnHallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AgeSurveyModel_1 = require("./AgeSurveyModel");
var AgeSurveyManager_1 = require("./AgeSurveyManager");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyPopOnHallTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyPopOnHallTrait, _super);
    function AgeSurveyPopOnHallTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._minGameCount = 5;
        return _this;
    }
    AgeSurveyPopOnHallTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._minGameCount = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.minGameCount) && void 0 !== r ? r : 5;
    };
    AgeSurveyPopOnHallTrait.prototype.onAgeSurvey_showOnGuide = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    AgeSurveyPopOnHallTrait.prototype.onAgeSurvey_showOnLoading = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    AgeSurveyPopOnHallTrait.prototype.onAgeSrvMgr_isNeedChkGuide = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: false,
            isBreak: true
        });
    };
    AgeSurveyPopOnHallTrait.prototype.onHallVw_onPopView = function (t, e) {
        this.checkAndShowSurvey(function () {
            e();
        });
    };
    AgeSurveyPopOnHallTrait.prototype.onAgeSurveyCtl_viewDidLoad = function (t, e) {
        var r, o;
        e();
        var i = null !== (o = null === (r = t.ins.args) || void 0 === r ? void 0 : r.surveyIndex) && void 0 !== o ? o : 0;
        AgeSurveyModel_1.default.getInstance().setClosed(i, true);
    };
    AgeSurveyPopOnHallTrait.prototype.checkAndShowSurvey = function (t) {
        var e, r, o = AgeSurveyModel_1.default.getInstance();
        if (!o.isCompleted(0) && !o.isClosed(0)) {
            if (((null === (r = null === (e = UserModel_1.default.getInstance()) || void 0 === e ? void 0 : e.normalData) || void 0 === r ? void 0 : r.getLevelId()) || 0) < this._minGameCount) {
                t(false);
                return;
            }
        }
        AgeSurveyManager_1.default.getInstance().tryShowNextSurvey(0, function () {
            t(true);
        }) || t(false);
    };
    AgeSurveyPopOnHallTrait.traitKey = "AgeSurveyPopOnHall";
    AgeSurveyPopOnHallTrait.nextTimeOut = -1;
    AgeSurveyPopOnHallTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyPopOnHallTrait")
    ], AgeSurveyPopOnHallTrait);
    return AgeSurveyPopOnHallTrait;
}(Trait_1.default));
exports.default = AgeSurveyPopOnHallTrait;

cc._RF.pop();
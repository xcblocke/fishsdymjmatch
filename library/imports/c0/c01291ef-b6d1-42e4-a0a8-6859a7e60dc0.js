"use strict";
cc._RF.push(module, 'c0129HvttFC5KCoaFmn5g3A', 'AgeSurveyController');
// subpackages/r_ageSurvey/Scripts/AgeSurveyController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var AgeSurveyView_1 = require("./AgeSurveyView");
var AgeSurveyModel_1 = require("./AgeSurveyModel");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var DGamePageShow_1 = require("../../../Scripts/dot/DGamePageShow");
var AgeSurveyController = /** @class */ (function (_super) {
    __extends(AgeSurveyController, _super);
    function AgeSurveyController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = AgeSurveyView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "r_ageSurvey";
        return _this;
    }
    AgeSurveyController.prototype.getMessageListeners = function () {
        return {};
    };
    AgeSurveyController.prototype.getArgs = function () {
        return this.args;
    };
    AgeSurveyController.prototype.initDependRes = function () { };
    AgeSurveyController.prototype.viewDidLoad = function () {
        var e;
        _super.prototype.viewDidLoad.call(this);
        var r = this.getArgs(), o = false !== (null == r ? void 0 : r.shuffle), i = null !== (e = null == r ? void 0 : r.autoCloseTime) && void 0 !== e ? e : 0;
        this.viewDoAction("initData", (null == r ? void 0 : r.ageRanges) || [], o, null == r ? void 0 : r.descI18nId, i);
        this.reportShow();
    };
    AgeSurveyController.prototype.onAgeSelected = function (t) {
        var e, r = this.getArgs(), o = null !== (e = null == r ? void 0 : r.surveyIndex) && void 0 !== e ? e : 0, i = AgeSurveyModel_1.default.getInstance();
        i.setSelectedAge(o, t);
        i.setCompleted(o, true);
        this.reportAgeSelect(t);
        if (null == r ? void 0 : r.rewardConfig) {
            this.showRewardView();
        }
        else {
            this.closeAndCallback();
        }
    };
    AgeSurveyController.prototype.onCloseClick = function () {
        var t, e = this.getArgs(), r = null !== (t = null == e ? void 0 : e.surveyIndex) && void 0 !== t ? t : 0;
        AgeSurveyModel_1.default.getInstance().setClosed(r, true);
        this.reportClose();
        this.closeAndCallback();
    };
    AgeSurveyController.prototype.showRewardView = function () {
        var t, e = this.getArgs(), r = null == e ? void 0 : e.onClose;
        this.close();
        ControllerManager_1.default.getInstance().pushViewByController("AgeSurveyRewardController", {
            rewardConfig: null == e ? void 0 : e.rewardConfig,
            surveyIndex: null !== (t = null == e ? void 0 : e.surveyIndex) && void 0 !== t ? t : 0,
            onClose: r
        });
    };
    AgeSurveyController.prototype.closeAndCallback = function () {
        var t = this.getArgs(), e = null == t ? void 0 : t.onClose;
        this.close();
        null == e || e();
    };
    AgeSurveyController.prototype.reportShow = function () {
        var t, e, r = null !== (e = null === (t = this.getArgs()) || void 0 === t ? void 0 : t.surveyIndex) && void 0 !== e ? e : 0;
        DGameBtnClick_1.DotGameBtnClick.dotAgeSurveyShow(r);
        var o = 0 === r ? DGamePageShow_1.EPageShowType.AgeSurveyPage1 : DGamePageShow_1.EPageShowType.AgeSurveyPage2;
        DGamePageShow_1.DotGamePageShow.dot(o);
    };
    AgeSurveyController.prototype.reportAgeSelect = function (t) {
        var e, r, o = null !== (r = null === (e = this.getArgs()) || void 0 === e ? void 0 : e.surveyIndex) && void 0 !== r ? r : 0;
        DGameBtnClick_1.DotGameBtnClick.dotAgeSelect(o, t);
    };
    AgeSurveyController.prototype.reportClose = function () {
        var t, e, r = null !== (e = null === (t = this.getArgs()) || void 0 === t ? void 0 : t.surveyIndex) && void 0 !== e ? e : 0;
        DGameBtnClick_1.DotGameBtnClick.dotAgeSurveyClose(r);
    };
    __decorate([
        mj.traitEvent("AgeSurveyCtl_viewDidLoad")
    ], AgeSurveyController.prototype, "viewDidLoad", null);
    AgeSurveyController = __decorate([
        mj.class("AgeSurveyController")
    ], AgeSurveyController);
    return AgeSurveyController;
}(ViewController_1.default));
exports.default = AgeSurveyController;

cc._RF.pop();
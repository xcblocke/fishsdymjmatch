"use strict";
cc._RF.push(module, 'fe295KYMCJChp48Bl3LVoVB', 'AgeSurveyRewardController');
// subpackages/r_ageSurvey/Scripts/AgeSurveyRewardController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var AgeSurveyRewardView_1 = require("./AgeSurveyRewardView");
var AgeSurveyRewardController = /** @class */ (function (_super) {
    __extends(AgeSurveyRewardController, _super);
    function AgeSurveyRewardController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = AgeSurveyRewardView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "r_ageSurvey";
        return _this;
    }
    AgeSurveyRewardController.prototype.getMessageListeners = function () {
        return {};
    };
    AgeSurveyRewardController.prototype.initDependRes = function () { };
    AgeSurveyRewardController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        var e = this.args;
        this.viewDoAction("initData", e);
    };
    AgeSurveyRewardController.prototype.closeAndCallback = function () {
        var t = this.args, e = null == t ? void 0 : t.onClose;
        this.close();
        null == e || e();
    };
    AgeSurveyRewardController = __decorate([
        mj.class("AgeSurveyRewardController")
    ], AgeSurveyRewardController);
    return AgeSurveyRewardController;
}(ViewController_1.default));
exports.default = AgeSurveyRewardController;

cc._RF.pop();
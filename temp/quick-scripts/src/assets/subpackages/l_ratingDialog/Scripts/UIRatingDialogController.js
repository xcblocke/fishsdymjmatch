"use strict";
cc._RF.push(module, 'dc10187H/RLaZYuQnTyy1v1', 'UIRatingDialogController');
// subpackages/l_ratingDialog/Scripts/UIRatingDialogController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var UIRatingDialog_1 = require("./UIRatingDialog");
var UIRatingDialogController = /** @class */ (function (_super) {
    __extends(UIRatingDialogController, _super);
    function UIRatingDialogController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = UIRatingDialog_1.UIRatingDialog;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    UIRatingDialogController.prototype.initDependRes = function () { };
    UIRatingDialogController.prototype.getMessageListeners = function () {
        return {};
    };
    UIRatingDialogController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.rootView.zIndex = 10000;
    };
    UIRatingDialogController.prototype.viewDidShow = function (e) {
        _super.prototype.viewDidShow.call(this, e);
    };
    UIRatingDialogController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    __decorate([
        mj.traitEvent("UIRatingDlgCtrl_initRes")
    ], UIRatingDialogController.prototype, "initDependRes", null);
    UIRatingDialogController = __decorate([
        mj.class("UIRatingDialogController")
    ], UIRatingDialogController);
    return UIRatingDialogController;
}(ViewController_1.default));
exports.default = UIRatingDialogController;

cc._RF.pop();
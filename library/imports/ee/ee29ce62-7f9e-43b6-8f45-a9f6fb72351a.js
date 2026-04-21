"use strict";
cc._RF.push(module, 'ee29c5if55Dto9Fqfb7cjUa', 'UISettingsDialogController');
// subpackages/l_settingsDialog/Scripts/UISettingsDialogController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var UIResetSkinBtn_1 = require("./UIResetSkinBtn");
var UISettingsDialog_1 = require("./UISettingsDialog");
var UISettingsDialogController = /** @class */ (function (_super) {
    __extends(UISettingsDialogController, _super);
    function UISettingsDialogController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = UISettingsDialog_1.UISettingsDialog;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    UISettingsDialogController.prototype.initDependRes = function () {
        this.showResetSkinBtn() && this.addPreloadRes("Prefab", UIResetSkinBtn_1.UIResetSkinBtn.getUrl());
    };
    UISettingsDialogController.prototype.showResetSkinBtn = function () {
        return false;
    };
    UISettingsDialogController.prototype.getMessageListeners = function () {
        return {};
    };
    UISettingsDialogController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.rootView.zIndex = 10000;
    };
    UISettingsDialogController.prototype.viewDidShow = function (e) {
        _super.prototype.viewDidShow.call(this, e);
        DGameBtnClick_1.DotGameBtnClick.dotSetting(DGameBtnClick_1.EGameSettingClickType.InGameSetting_DialogDisplayed);
    };
    UISettingsDialogController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    __decorate([
        mj.traitEvent("UISetDlgCtrl_initDRes")
    ], UISettingsDialogController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("UISetDlgCtrl_showRstSkin")
    ], UISettingsDialogController.prototype, "showResetSkinBtn", null);
    UISettingsDialogController = __decorate([
        mj.class("UISettingsDialogController")
    ], UISettingsDialogController);
    return UISettingsDialogController;
}(ViewController_1.default));
exports.default = UISettingsDialogController;

cc._RF.pop();
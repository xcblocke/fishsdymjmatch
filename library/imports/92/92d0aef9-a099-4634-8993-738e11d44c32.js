"use strict";
cc._RF.push(module, '92d0a75oJlGNImTc44R1Ewy', 'UISettingsHomeController');
// subpackages/l_settingsHome/Scripts/UISettingsHomeController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var UserInfoManager_1 = require("../../../Scripts/gamePlay/base/user/UserInfoManager");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SettingsHomeTrait_1 = require("./SettingsHomeTrait");
var UISettingsHome_1 = require("./UISettingsHome");
var UISettingsHomeController = /** @class */ (function (_super) {
    __extends(UISettingsHomeController, _super);
    function UISettingsHomeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = UISettingsHome_1.UISettingsHome;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    UISettingsHomeController.prototype.initDependRes = function () {
        SettingsHomeTrait_1.default.getInstance().isUseSimpleUI() && (this.bundleName = "l_settingsHome");
    };
    UISettingsHomeController.prototype.getMessageListeners = function () {
        return {};
    };
    UISettingsHomeController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.rootView.zIndex = 10000;
        this.refreshAvatorAndNickname();
    };
    UISettingsHomeController.prototype.onUIEnable = function () {
        _super.prototype.onUIEnable.call(this);
    };
    UISettingsHomeController.prototype.refreshAvatorAndNickname = function () {
        var t = this, e = UserModel_1.default.getInstance().getAvatarId() || 1, i = UserModel_1.default.getInstance().getFrameId() || 1;
        UserInfoManager_1.default.getInstance().loadUserAvatarAndFrame(e, i, this).then(function (e) {
            var i = e.avatar, n = e.frame;
            t.viewDoAction("refreshAvator", {
                avatarSprite: i,
                frameSprite: n
            });
        });
    };
    UISettingsHomeController.prototype.viewDidShow = function (e) {
        _super.prototype.viewDidShow.call(this, e);
        DGameBtnClick_1.DotGameBtnClick.dotSetting(DGameBtnClick_1.EGameSettingClickType.HomePageSetting_DialogDisplayed);
    };
    UISettingsHomeController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    __decorate([
        mj.traitEvent("UISetHomeCtrl_initDRes")
    ], UISettingsHomeController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("UISetHomeCtrl_onUIEnable")
    ], UISettingsHomeController.prototype, "onUIEnable", null);
    UISettingsHomeController = __decorate([
        mj.class("UISettingsHomeController")
    ], UISettingsHomeController);
    return UISettingsHomeController;
}(ViewController_1.default));
exports.default = UISettingsHomeController;

cc._RF.pop();
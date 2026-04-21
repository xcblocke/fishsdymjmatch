
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsHome/Scripts/UISettingsHomeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzSG9tZS9TY3JpcHRzL1VJU2V0dGluZ3NIb21lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLHVGQUFrRjtBQUNsRixvRUFBNEY7QUFDNUYsc0VBQWlFO0FBQ2pFLHlEQUFvRDtBQUNwRCxtREFBa0Q7QUFFbEQ7SUFBc0QsNENBQWM7SUFBcEU7UUFBQSxxRUF1Q0M7UUF0Q0MsZUFBUyxHQUFHLCtCQUFjLENBQUM7UUFDM0IsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDOztJQXFDNUIsQ0FBQztJQW5DQyxnREFBYSxHQUFiO1FBQ0UsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUNELHNEQUFtQixHQUFuQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELDhDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkNBQVUsR0FBVjtRQUNFLGlCQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELDJEQUF3QixHQUF4QjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQzlDLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMvRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUU7Z0JBQzlCLFlBQVksRUFBRSxDQUFDO2dCQUNmLFdBQVcsRUFBRSxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsOENBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQywrQkFBZSxDQUFDLFVBQVUsQ0FBQyxxQ0FBcUIsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDRCw4Q0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBbENEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztpRUFHdkM7SUFVRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7OERBR3pDO0lBbEJrQix3QkFBd0I7UUFENUMsRUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztPQUNoQix3QkFBd0IsQ0F1QzVDO0lBQUQsK0JBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q3FELHdCQUFjLEdBdUNuRTtrQkF2Q29CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IFVzZXJJbmZvTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdXNlci9Vc2VySW5mb01hbmFnZXInO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFR2FtZVNldHRpbmdDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgU2V0dGluZ3NIb21lVHJhaXQgZnJvbSAnLi9TZXR0aW5nc0hvbWVUcmFpdCc7XG5pbXBvcnQgeyBVSVNldHRpbmdzSG9tZSB9IGZyb20gJy4vVUlTZXR0aW5nc0hvbWUnO1xuQG1qLmNsYXNzKFwiVUlTZXR0aW5nc0hvbWVDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVNldHRpbmdzSG9tZUNvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IFVJU2V0dGluZ3NIb21lO1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLkFMRVJUO1xuICBAbWoudHJhaXRFdmVudChcIlVJU2V0SG9tZUN0cmxfaW5pdERSZXNcIilcbiAgaW5pdERlcGVuZFJlcygpIHtcbiAgICBTZXR0aW5nc0hvbWVUcmFpdC5nZXRJbnN0YW5jZSgpLmlzVXNlU2ltcGxlVUkoKSAmJiAodGhpcy5idW5kbGVOYW1lID0gXCJsX3NldHRpbmdzSG9tZVwiKTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMucm9vdFZpZXcuekluZGV4ID0gMTAwMDA7XG4gICAgdGhpcy5yZWZyZXNoQXZhdG9yQW5kTmlja25hbWUoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlVJU2V0SG9tZUN0cmxfb25VSUVuYWJsZVwiKVxuICBvblVJRW5hYmxlKCkge1xuICAgIHN1cGVyLm9uVUlFbmFibGUuY2FsbCh0aGlzKTtcbiAgfVxuICByZWZyZXNoQXZhdG9yQW5kTmlja25hbWUoKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEF2YXRhcklkKCkgfHwgMSxcbiAgICAgIGkgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRGcmFtZUlkKCkgfHwgMTtcbiAgICBVc2VySW5mb01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5sb2FkVXNlckF2YXRhckFuZEZyYW1lKGUsIGksIHRoaXMpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBpID0gZS5hdmF0YXIsXG4gICAgICAgIG4gPSBlLmZyYW1lO1xuICAgICAgdC52aWV3RG9BY3Rpb24oXCJyZWZyZXNoQXZhdG9yXCIsIHtcbiAgICAgICAgYXZhdGFyU3ByaXRlOiBpLFxuICAgICAgICBmcmFtZVNwcml0ZTogblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgdmlld0RpZFNob3coZSkge1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgZSk7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdFNldHRpbmcoRUdhbWVTZXR0aW5nQ2xpY2tUeXBlLkhvbWVQYWdlU2V0dGluZ19EaWFsb2dEaXNwbGF5ZWQpO1xuICB9XG4gIHZpZXdEaWRIaWRlKCkge1xuICAgIHN1cGVyLnZpZXdEaWRIaWRlLmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=
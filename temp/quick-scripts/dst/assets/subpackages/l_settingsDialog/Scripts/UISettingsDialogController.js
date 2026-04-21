
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsDialog/Scripts/UISettingsDialogController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzRGlhbG9nL1NjcmlwdHMvVUlTZXR0aW5nc0RpYWxvZ0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFnRztBQUNoRyxvRUFBNEY7QUFDNUYsbURBQWtEO0FBQ2xELHVEQUFzRDtBQUV0RDtJQUF3RCw4Q0FBYztJQUF0RTtRQUFBLHFFQXlCQztRQXhCQyxlQUFTLEdBQUcsbUNBQWdCLENBQUM7UUFDN0IsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDOztJQXVCNUIsQ0FBQztJQXJCQyxrREFBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsK0JBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxxREFBZ0IsR0FBaEI7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCx3REFBbUIsR0FBbkI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxnREFBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELGdEQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsK0JBQWUsQ0FBQyxVQUFVLENBQUMscUNBQXFCLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0QsZ0RBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQXBCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7bUVBR3RDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO3NFQUd6QztJQVZrQiwwQkFBMEI7UUFEOUMsRUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztPQUNsQiwwQkFBMEIsQ0F5QjlDO0lBQUQsaUNBQUM7Q0F6QkQsQUF5QkMsQ0F6QnVELHdCQUFjLEdBeUJyRTtrQkF6Qm9CLDBCQUEwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFR2FtZVNldHRpbmdDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCB7IFVJUmVzZXRTa2luQnRuIH0gZnJvbSAnLi9VSVJlc2V0U2tpbkJ0bic7XG5pbXBvcnQgeyBVSVNldHRpbmdzRGlhbG9nIH0gZnJvbSAnLi9VSVNldHRpbmdzRGlhbG9nJztcbkBtai5jbGFzcyhcIlVJU2V0dGluZ3NEaWFsb2dDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVNldHRpbmdzRGlhbG9nQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gVUlTZXR0aW5nc0RpYWxvZztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5BTEVSVDtcbiAgQG1qLnRyYWl0RXZlbnQoXCJVSVNldERsZ0N0cmxfaW5pdERSZXNcIilcbiAgaW5pdERlcGVuZFJlcygpIHtcbiAgICB0aGlzLnNob3dSZXNldFNraW5CdG4oKSAmJiB0aGlzLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgVUlSZXNldFNraW5CdG4uZ2V0VXJsKCkpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVUlTZXREbGdDdHJsX3Nob3dSc3RTa2luXCIpXG4gIHNob3dSZXNldFNraW5CdG4oKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHN1cGVyLnZpZXdEaWRMb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yb290Vmlldy56SW5kZXggPSAxMDAwMDtcbiAgfVxuICB2aWV3RGlkU2hvdyhlKSB7XG4gICAgc3VwZXIudmlld0RpZFNob3cuY2FsbCh0aGlzLCBlKTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90U2V0dGluZyhFR2FtZVNldHRpbmdDbGlja1R5cGUuSW5HYW1lU2V0dGluZ19EaWFsb2dEaXNwbGF5ZWQpO1xuICB9XG4gIHZpZXdEaWRIaWRlKCkge1xuICAgIHN1cGVyLnZpZXdEaWRIaWRlLmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=
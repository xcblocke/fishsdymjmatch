
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_ratingDialog/Scripts/UIRatingDialogController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhdGluZ0RpYWxvZy9TY3JpcHRzL1VJUmF0aW5nRGlhbG9nQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLG1EQUFrRDtBQUVsRDtJQUFzRCw0Q0FBYztJQUFwRTtRQUFBLHFFQWtCQztRQWpCQyxlQUFTLEdBQUcsK0JBQWMsQ0FBQztRQUMzQixjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7O0lBZ0I1QixDQUFDO0lBZEMsZ0RBQWEsR0FBYixjQUFpQixDQUFDO0lBQ2xCLHNEQUFtQixHQUFuQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELDhDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsOENBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsOENBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztpRUFDdkI7SUFKQyx3QkFBd0I7UUFENUMsRUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztPQUNoQix3QkFBd0IsQ0FrQjVDO0lBQUQsK0JBQUM7Q0FsQkQsQUFrQkMsQ0FsQnFELHdCQUFjLEdBa0JuRTtrQkFsQm9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgVUlSYXRpbmdEaWFsb2cgfSBmcm9tICcuL1VJUmF0aW5nRGlhbG9nJztcbkBtai5jbGFzcyhcIlVJUmF0aW5nRGlhbG9nQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlSYXRpbmdEaWFsb2dDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBVSVJhdGluZ0RpYWxvZztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5BTEVSVDtcbiAgQG1qLnRyYWl0RXZlbnQoXCJVSVJhdGluZ0RsZ0N0cmxfaW5pdFJlc1wiKVxuICBpbml0RGVwZW5kUmVzKCkge31cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgdmlld0RpZExvYWQoKSB7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnJvb3RWaWV3LnpJbmRleCA9IDEwMDAwO1xuICB9XG4gIHZpZXdEaWRTaG93KGUpIHtcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMsIGUpO1xuICB9XG4gIHZpZXdEaWRIaWRlKCkge1xuICAgIHN1cGVyLnZpZXdEaWRIaWRlLmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=
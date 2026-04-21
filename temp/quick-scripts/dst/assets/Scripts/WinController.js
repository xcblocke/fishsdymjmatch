
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/WinController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e135ek1vMJHPruuwJdJQbkd', 'WinController');
// Scripts/WinController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var WinView_1 = require("./WinView");
var WinController = /** @class */ (function (_super) {
    __extends(WinController, _super);
    function WinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = WinView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        return _this;
    }
    WinController.prototype.initDependRes = function () { };
    WinController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    WinController.prototype.viewDidShow = function (t) {
        t = t || this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("showWinView", t);
    };
    WinController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    __decorate([
        mj.traitEvent("WinCtrl_initRes")
    ], WinController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("WinCtrl_viewShow")
    ], WinController.prototype, "viewDidShow", null);
    WinController = __decorate([
        mj.class("WinController")
    ], WinController);
    return WinController;
}(ViewController_1.default));
exports.default = WinController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1dpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFQUFpRjtBQUNqRixxQ0FBZ0M7QUFFaEM7SUFBMkMsaUNBQWM7SUFBekQ7UUFBQSxxRUFpQkM7UUFoQkMsZUFBUyxHQUFHLGlCQUFPLENBQUM7UUFDcEIsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDOztJQWU1QixDQUFDO0lBYkMscUNBQWEsR0FBYixjQUFpQixDQUFDO0lBQ2xCLG1DQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsbUNBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQVpEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztzREFDZjtJQUtsQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7b0RBS2pDO0lBYmtCLGFBQWE7UUFEakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7T0FDTCxhQUFhLENBaUJqQztJQUFELG9CQUFDO0NBakJELEFBaUJDLENBakIwQyx3QkFBYyxHQWlCeEQ7a0JBakJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgV2luVmlldyBmcm9tICcuL1dpblZpZXcnO1xuQG1qLmNsYXNzKFwiV2luQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gV2luVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5QQU5FTDtcbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5DdHJsX2luaXRSZXNcIilcbiAgaW5pdERlcGVuZFJlcygpIHt9XG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHN1cGVyLnZpZXdEaWRMb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJXaW5DdHJsX3ZpZXdTaG93XCIpXG4gIHZpZXdEaWRTaG93KHQpIHtcbiAgICB0ID0gdCB8fCB0aGlzLmFyZ3M7XG4gICAgc3VwZXIudmlld0RpZFNob3cuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dXaW5WaWV3XCIsIHQpO1xuICB9XG4gIHZpZXdEaWRIaWRlKCkge1xuICAgIHN1cGVyLnZpZXdEaWRIaWRlLmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=
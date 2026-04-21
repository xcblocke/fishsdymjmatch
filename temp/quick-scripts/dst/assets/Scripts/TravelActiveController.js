
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TravelActiveController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ab7eXjFI9JuoLERpYrHT1L', 'TravelActiveController');
// Scripts/TravelActiveController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var TravelActiveView_1 = require("./view/TravelActiveView");
var TravelActiveController = /** @class */ (function (_super) {
    __extends(TravelActiveController, _super);
    function TravelActiveController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TravelActiveView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "mainRes";
        return _this;
    }
    TravelActiveController.prototype.initDependRes = function () { };
    TravelActiveController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("viewDidLoad", this.args);
    };
    TravelActiveController.prototype.viewDidShow = function (t) {
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("viewDidShow", null != t ? t : this.args);
    };
    TravelActiveController = __decorate([
        mj.class("TravelActiveController")
    ], TravelActiveController);
    return TravelActiveController;
}(ViewController_1.default));
exports.default = TravelActiveController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RyYXZlbEFjdGl2ZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFQUFpRjtBQUNqRiw0REFBdUQ7QUFFdkQ7SUFBb0QsMENBQWM7SUFBbEU7UUFBQSxxRUFhQztRQVpDLGVBQVMsR0FBRywwQkFBZ0IsQ0FBQztRQUM3QixjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsZ0JBQVUsR0FBRyxTQUFTLENBQUM7O0lBVXpCLENBQUM7SUFUQyw4Q0FBYSxHQUFiLGNBQWlCLENBQUM7SUFDbEIsNENBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCw0Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFaa0Isc0JBQXNCO1FBRDFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FhMUM7SUFBRCw2QkFBQztDQWJELEFBYUMsQ0FibUQsd0JBQWMsR0FhakU7a0JBYm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4vZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IFRyYXZlbEFjdGl2ZVZpZXcgZnJvbSAnLi92aWV3L1RyYXZlbEFjdGl2ZVZpZXcnO1xuQG1qLmNsYXNzKFwiVHJhdmVsQWN0aXZlQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhdmVsQWN0aXZlQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gVHJhdmVsQWN0aXZlVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5QQU5FTDtcbiAgYnVuZGxlTmFtZSA9IFwibWFpblJlc1wiO1xuICBpbml0RGVwZW5kUmVzKCkge31cbiAgdmlld0RpZExvYWQoKSB7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInZpZXdEaWRMb2FkXCIsIHRoaXMuYXJncyk7XG4gIH1cbiAgdmlld0RpZFNob3codCkge1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgdCk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJ2aWV3RGlkU2hvd1wiLCBudWxsICE9IHQgPyB0IDogdGhpcy5hcmdzKTtcbiAgfVxufSJdfQ==
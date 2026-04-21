
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicRevive/Scripts/ClassicReviveController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '613f2fC2rdGPp//CnaiYr1V', 'ClassicReviveController');
// subpackages/l_classicRevive/Scripts/ClassicReviveController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ClassicReviveView_1 = require("./ClassicReviveView");
var ClassicReviveController = /** @class */ (function (_super) {
    __extends(ClassicReviveController, _super);
    function ClassicReviveController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ClassicReviveView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "l_classicRevive";
        return _this;
    }
    ClassicReviveController.prototype.viewDidShow = function (t) {
        t = null != t ? t : this.args;
        _super.prototype.viewDidShow.call(this, t);
    };
    ClassicReviveController.prototype.onUIDestroy = function () {
        _super.prototype.onUIDestroy.call(this);
    };
    ClassicReviveController = __decorate([
        mj.class("ClassicReviveController")
    ], ClassicReviveController);
    return ClassicReviveController;
}(ViewController_1.default));
exports.default = ClassicReviveController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNSZXZpdmUvU2NyaXB0cy9DbGFzc2ljUmV2aXZlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLHlEQUFvRDtBQUVwRDtJQUFxRCwyQ0FBYztJQUFuRTtRQUFBLHFFQVdDO1FBVkMsZUFBUyxHQUFHLDJCQUFpQixDQUFDO1FBQzlCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLGlCQUFpQixDQUFDOztJQVFqQyxDQUFDO0lBUEMsNkNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlCLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCw2Q0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBVmtCLHVCQUF1QjtRQUQzQyxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBVzNDO0lBQUQsOEJBQUM7Q0FYRCxBQVdDLENBWG9ELHdCQUFjLEdBV2xFO2tCQVhvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0NvbnRyb2xsZXIsIHsgdmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9jb250cm9sbGVyL1ZpZXdDb250cm9sbGVyJztcbmltcG9ydCBDbGFzc2ljUmV2aXZlVmlldyBmcm9tICcuL0NsYXNzaWNSZXZpdmVWaWV3JztcbkBtai5jbGFzcyhcIkNsYXNzaWNSZXZpdmVDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc2ljUmV2aXZlQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gQ2xhc3NpY1Jldml2ZVZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuUEFORUw7XG4gIGJ1bmRsZU5hbWUgPSBcImxfY2xhc3NpY1Jldml2ZVwiO1xuICB2aWV3RGlkU2hvdyh0KSB7XG4gICAgdCA9IG51bGwgIT0gdCA/IHQgOiB0aGlzLmFyZ3M7XG4gICAgc3VwZXIudmlld0RpZFNob3cuY2FsbCh0aGlzLCB0KTtcbiAgfVxuICBvblVJRGVzdHJveSgpIHtcbiAgICBzdXBlci5vblVJRGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicOver/Scripts/ClassicWinController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '758aaurcapHc4FUjoDxfer9', 'ClassicWinController');
// subpackages/l_classicOver/Scripts/ClassicWinController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ClassicWinView_1 = require("./ClassicWinView");
var ClassicWinController = /** @class */ (function (_super) {
    __extends(ClassicWinController, _super);
    function ClassicWinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ClassicWinView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "l_classicOver";
        return _this;
    }
    ClassicWinController.prototype.viewDidShow = function (t) {
        t = t || this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("showView", t.data);
    };
    ClassicWinController = __decorate([
        mj.class("ClassicWinController")
    ], ClassicWinController);
    return ClassicWinController;
}(ViewController_1.default));
exports.default = ClassicWinController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNPdmVyL1NjcmlwdHMvQ2xhc3NpY1dpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFnRztBQUNoRyxtREFBOEM7QUFFOUM7SUFBa0Qsd0NBQWM7SUFBaEU7UUFBQSxxRUFTQztRQVJDLGVBQVMsR0FBRyx3QkFBYyxDQUFDO1FBQzNCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLGVBQWUsQ0FBQzs7SUFNL0IsQ0FBQztJQUxDLDBDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBUmtCLG9CQUFvQjtRQUR4QyxFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBU3hDO0lBQUQsMkJBQUM7Q0FURCxBQVNDLENBVGlELHdCQUFjLEdBUy9EO2tCQVRvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0NvbnRyb2xsZXIsIHsgdmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9jb250cm9sbGVyL1ZpZXdDb250cm9sbGVyJztcbmltcG9ydCBDbGFzc2ljV2luVmlldyBmcm9tICcuL0NsYXNzaWNXaW5WaWV3JztcbkBtai5jbGFzcyhcIkNsYXNzaWNXaW5Db250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc2ljV2luQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gQ2xhc3NpY1dpblZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuUEFORUw7XG4gIGJ1bmRsZU5hbWUgPSBcImxfY2xhc3NpY092ZXJcIjtcbiAgdmlld0RpZFNob3codCkge1xuICAgIHQgPSB0IHx8IHRoaXMuYXJncztcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2hvd1ZpZXdcIiwgdC5kYXRhKTtcbiAgfVxufSJdfQ==
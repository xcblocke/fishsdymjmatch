
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_boxReward/Scripts/NormalBoxController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d57b6KqWdE+6+Gx0IX1s0/', 'NormalBoxController');
// subpackages/l_boxReward/Scripts/NormalBoxController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var BoxOpenUI_1 = require("./BoxOpenUI");
var NormalBoxController = /** @class */ (function (_super) {
    __extends(NormalBoxController, _super);
    function NormalBoxController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = BoxOpenUI_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "mainRes";
        return _this;
    }
    NormalBoxController.prototype.initDependRes = function () { };
    NormalBoxController.prototype.viewDidShow = function (e) {
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("showBoxOpenUI", null != e ? e : this.args);
    };
    NormalBoxController = __decorate([
        mj.class("NormalBoxController")
    ], NormalBoxController);
    return NormalBoxController;
}(ViewController_1.default));
exports.default = NormalBoxController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JveFJld2FyZC9TY3JpcHRzL05vcm1hbEJveENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFnRztBQUNoRyx5Q0FBb0M7QUFFcEM7SUFBaUQsdUNBQWM7SUFBL0Q7UUFBQSxxRUFTQztRQVJDLGVBQVMsR0FBRyxtQkFBUyxDQUFDO1FBQ3RCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLFNBQVMsQ0FBQzs7SUFNekIsQ0FBQztJQUxDLDJDQUFhLEdBQWIsY0FBaUIsQ0FBQztJQUNsQix5Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFSa0IsbUJBQW1CO1FBRHZDLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0FTdkM7SUFBRCwwQkFBQztDQVRELEFBU0MsQ0FUZ0Qsd0JBQWMsR0FTOUQ7a0JBVG9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IEJveE9wZW5VSSBmcm9tICcuL0JveE9wZW5VSSc7XG5AbWouY2xhc3MoXCJOb3JtYWxCb3hDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWxCb3hDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBCb3hPcGVuVUk7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuQUxFUlQ7XG4gIGJ1bmRsZU5hbWUgPSBcIm1haW5SZXNcIjtcbiAgaW5pdERlcGVuZFJlcygpIHt9XG4gIHZpZXdEaWRTaG93KGUpIHtcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMsIGUpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2hvd0JveE9wZW5VSVwiLCBudWxsICE9IGUgPyBlIDogdGhpcy5hcmdzKTtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskBannerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7bf14DBm5JHmZkDdHj9vMJ0', 'TaskBannerController');
// subpackages/l_task/Scripts/TaskBannerController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var TaskBannerView_1 = require("./view/TaskBannerView");
var TaskBannerController = /** @class */ (function (_super) {
    __extends(TaskBannerController, _super);
    function TaskBannerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TaskBannerView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    TaskBannerController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        var a = null == e ? void 0 : e.data;
        this.viewDoAction("show", a);
    };
    TaskBannerController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
        this.close();
    };
    TaskBannerController = __decorate([
        mj.class("TaskBannerController")
    ], TaskBannerController);
    return TaskBannerController;
}(ViewController_1.default));
exports.default = TaskBannerController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrQmFubmVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLHdEQUFtRDtBQUVuRDtJQUFrRCx3Q0FBYztJQUFoRTtRQUFBLHFFQWFDO1FBWkMsZUFBUyxHQUFHLHdCQUFjLENBQUM7UUFDM0IsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDOztJQVc1QixDQUFDO0lBVkMsMENBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELDBDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFaa0Isb0JBQW9CO1FBRHhDLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FheEM7SUFBRCwyQkFBQztDQWJELEFBYUMsQ0FiaUQsd0JBQWMsR0FhL0Q7a0JBYm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IFRhc2tCYW5uZXJWaWV3IGZyb20gJy4vdmlldy9UYXNrQmFubmVyVmlldyc7XG5AbWouY2xhc3MoXCJUYXNrQmFubmVyQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0Jhbm5lckNvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IFRhc2tCYW5uZXJWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLkFMRVJUO1xuICB2aWV3RGlkU2hvdyhlKSB7XG4gICAgZSA9IGUgfHwgdGhpcy5hcmdzO1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgZSk7XG4gICAgdmFyIGEgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmRhdGE7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJzaG93XCIsIGEpO1xuICB9XG4gIHZpZXdEaWRIaWRlKCkge1xuICAgIHN1cGVyLnZpZXdEaWRIaWRlLmNhbGwodGhpcyk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG59Il19
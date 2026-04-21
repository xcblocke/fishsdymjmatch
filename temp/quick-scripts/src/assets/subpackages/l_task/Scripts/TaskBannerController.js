"use strict";
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
"use strict";
cc._RF.push(module, '8dff1Z02btBV4jY2rgodUix', 'TaskAutoPopTrait');
// subpackages/l_task/Scripts/TaskAutoPopTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TaskModel_1 = require("./model/TaskModel");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var TaskData_1 = require("./TaskData");
var TaskAutoPopTrait = /** @class */ (function (_super) {
    __extends(TaskAutoPopTrait, _super);
    function TaskAutoPopTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    TaskAutoPopTrait_1 = TaskAutoPopTrait;
    TaskAutoPopTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    TaskAutoPopTrait.prototype.onHallVw_onPopView = function (t, e) {
        this.showPopView(function (t) {
            e({
                isBreak: t
            });
        });
    };
    TaskAutoPopTrait.prototype.showPopView = function (t) {
        var e = this.showTaskMainUI();
        null == t || t(e);
    };
    TaskAutoPopTrait.prototype.showTaskMainUI = function (t) {
        if (t === void 0) { t = null; }
        var e = TaskModel_1.TaskModel.getInstance();
        if (!e.isTaskOpen())
            return false;
        if (true !== this._config.firstAutoPop)
            return false;
        if (e.isFirstHomeShow())
            return false;
        try {
            ControllerManager_1.default.getInstance().pushViewByController("TaskController", {
                from: TaskData_1.ETaskUIType.Home,
                onClose: t
            });
            return true;
        }
        catch (t) {
            console.error("[" + TaskAutoPopTrait_1.traitKey + "] 弹出任务主界面失败: " + (null == t ? void 0 : t.message));
        }
        return false;
    };
    var TaskAutoPopTrait_1;
    TaskAutoPopTrait.traitKey = "TaskAutoPop";
    __decorate([
        mj.traitEvent("TaskAutoPopT_showPopVw")
    ], TaskAutoPopTrait.prototype, "showPopView", null);
    TaskAutoPopTrait = TaskAutoPopTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskAutoPopTrait")
    ], TaskAutoPopTrait);
    return TaskAutoPopTrait;
}(Trait_1.default));
exports.default = TaskAutoPopTrait;

cc._RF.pop();
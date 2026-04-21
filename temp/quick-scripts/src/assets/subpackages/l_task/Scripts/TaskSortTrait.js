"use strict";
cc._RF.push(module, 'fc1f3H4gpBNeYvl0ICQ0iwP', 'TaskSortTrait');
// subpackages/l_task/Scripts/TaskSortTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskModel_1 = require("./model/TaskModel");
var TaskSortTrait = /** @class */ (function (_super) {
    __extends(TaskSortTrait, _super);
    function TaskSortTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskSortTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskSortTrait.prototype.onTaskModel_sort = function (t, e) {
        var a = t.args[0], o = this.sortTasks(a);
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: o
        });
    };
    TaskSortTrait.prototype.sortTasks = function (t) {
        var e = TaskModel_1.TaskModel.getInstance(), a = __spreadArrays(e.getTaskData().listTaskType), o = t || e.getCurrentStage(), i = e.getStageData(o);
        if (!i)
            return a;
        a.sort(function (t, e) {
            return (i.taskCompleteList.includes(t) ? 1 : 0) - (i.taskCompleteList.includes(e) ? 1 : 0);
        });
        return a;
    };
    TaskSortTrait.traitKey = "TaskSort";
    TaskSortTrait = __decorate([
        mj.trait,
        mj.class("TaskSortTrait")
    ], TaskSortTrait);
    return TaskSortTrait;
}(Trait_1.default));
exports.default = TaskSortTrait;

cc._RF.pop();
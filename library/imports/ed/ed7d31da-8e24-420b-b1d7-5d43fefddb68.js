"use strict";
cc._RF.push(module, 'ed7d3HajiRCC7HXXUP+/dto', 'TaskStageProgressTrait');
// subpackages/l_task/Scripts/TaskStageProgressTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskModel_1 = require("./model/TaskModel");
var TaskStageProgressTrait = /** @class */ (function (_super) {
    __extends(TaskStageProgressTrait, _super);
    function TaskStageProgressTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskStageProgressTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskStageProgressTrait.prototype.onTaskView_calcStgProg = function (t, e) {
        var a = t.args[0], o = this.calculateProgressByTaskCount(a);
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: o
        });
    };
    TaskStageProgressTrait.prototype.calculateProgressByTaskCount = function () {
        var t, e = TaskModel_1.TaskModel.getInstance(), a = e.getCurrentStage(), o = (e.getTaskData().listTaskType || []).length, i = e.getStageData(a), r = (null === (t = null == i ? void 0 : i.taskCompleteList) || void 0 === t ? void 0 : t.length) || 0, n = 0;
        a > 1 && (n = e.STAGE_WEIGHTS[a - 2]);
        if (a >= 1 && a <= 3 && o > 0) {
            var s = r / o, c = a > 1 ? e.STAGE_WEIGHTS[a - 2] : 0;
            n += s * (e.STAGE_WEIGHTS[a - 1] - c);
        }
        return n;
    };
    TaskStageProgressTrait.traitKey = "TaskStageProgress";
    TaskStageProgressTrait = __decorate([
        mj.trait,
        mj.class("TaskStageProgressTrait")
    ], TaskStageProgressTrait);
    return TaskStageProgressTrait;
}(Trait_1.default));
exports.default = TaskStageProgressTrait;

cc._RF.pop();
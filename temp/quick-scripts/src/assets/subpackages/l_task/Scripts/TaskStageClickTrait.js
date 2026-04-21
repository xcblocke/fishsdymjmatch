"use strict";
cc._RF.push(module, 'f6d4aV09whCvJ34FnYzWTZp', 'TaskStageClickTrait');
// subpackages/l_task/Scripts/TaskStageClickTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskModel_1 = require("./model/TaskModel");
var TaskStageClickTrait = /** @class */ (function (_super) {
    __extends(TaskStageClickTrait, _super);
    function TaskStageClickTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskStageClickTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskStageClickTrait.prototype.onTaskView_stageBtnClick = function (t, e) {
        var a = t.args[0];
        if (TaskModel_1.TaskModel.getInstance().getCurrentStage() > a) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    TaskStageClickTrait.traitKey = "TaskStageClick";
    TaskStageClickTrait = __decorate([
        mj.trait,
        mj.class("TaskStageClickTrait")
    ], TaskStageClickTrait);
    return TaskStageClickTrait;
}(Trait_1.default));
exports.default = TaskStageClickTrait;

cc._RF.pop();
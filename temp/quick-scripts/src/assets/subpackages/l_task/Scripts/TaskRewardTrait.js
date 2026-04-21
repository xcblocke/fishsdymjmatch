"use strict";
cc._RF.push(module, 'cd229GQxsJJGYWsxE+NFRNX', 'TaskRewardTrait');
// subpackages/l_task/Scripts/TaskRewardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskModel_1 = require("./model/TaskModel");
var TaskData_1 = require("./TaskData");
var TaskRewardTrait = /** @class */ (function (_super) {
    __extends(TaskRewardTrait, _super);
    function TaskRewardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskRewardTrait_1 = TaskRewardTrait;
    TaskRewardTrait.prototype.onTaskTrait_checkNeedBlock = function (t, e) {
        try {
            var o = TaskModel_1.TaskModel.getInstance(), i = o.getCurrentStage(), r = o.getStageData(i);
            if (r && r.stageState === TaskData_1.ETaskStageState.Wait) {
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
            else {
                e();
            }
        }
        catch (t) {
            console.error("[" + TaskRewardTrait_1.traitKey + "] 劫持checkNeedBlock失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskRewardTrait.prototype.onTaskView_shouldShowAnim = function (t, e) {
        try {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        catch (t) {
            console.error("[" + TaskRewardTrait_1.traitKey + "] 劫持shouldShowAnim失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var TaskRewardTrait_1;
    TaskRewardTrait.traitKey = "TaskReward";
    TaskRewardTrait = TaskRewardTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskRewardTrait")
    ], TaskRewardTrait);
    return TaskRewardTrait;
}(Trait_1.default));
exports.default = TaskRewardTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'e48d56Th8lHtq5RfEsWAQfq', 'TaskNewGameRewardTrait');
// subpackages/l_task/Scripts/TaskNewGameRewardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskModel_1 = require("./model/TaskModel");
var TaskData_1 = require("./TaskData");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TaskNewGameRewardTrait = /** @class */ (function (_super) {
    __extends(TaskNewGameRewardTrait, _super);
    function TaskNewGameRewardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskNewGameRewardTrait_1 = TaskNewGameRewardTrait;
    TaskNewGameRewardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskNewGameRewardTrait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Normal) {
                e();
                return;
            }
            var o = TaskModel_1.TaskModel.getInstance();
            if (!o.isTaskOpen()) {
                e();
                return;
            }
            o.hasWaitingReward() && this.pushController("TaskController", {
                from: TaskData_1.ETaskUIType.Result
            });
            e();
        }
        catch (t) {
            console.error("[" + TaskNewGameRewardTrait_1.traitKey + "] 检查待领奖状态失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskNewGameRewardTrait.prototype.onTaskTrait_showTask = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal) {
            var a = t.args[0];
            a && a();
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    var TaskNewGameRewardTrait_1;
    TaskNewGameRewardTrait.traitKey = "TaskNewGameReward";
    TaskNewGameRewardTrait = TaskNewGameRewardTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskNewGameRewardTrait")
    ], TaskNewGameRewardTrait);
    return TaskNewGameRewardTrait;
}(Trait_1.default));
exports.default = TaskNewGameRewardTrait;

cc._RF.pop();
"use strict";
cc._RF.push(module, '1ab89tH+8ZOcIAhWx3+/H58', 'TaskDailyResetTrait');
// subpackages/l_task/Scripts/TaskDailyResetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TaskModel_1 = require("./model/TaskModel");
var TaskUtils_1 = require("./TaskUtils");
var TaskDailyResetTrait = /** @class */ (function (_super) {
    __extends(TaskDailyResetTrait, _super);
    function TaskDailyResetTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskDailyResetTrait_1 = TaskDailyResetTrait;
    TaskDailyResetTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskDailyResetTrait.prototype.onTaskModel_resetTask = function (t, e) {
        var o, i;
        try {
            var r = TaskModel_1.TaskModel.getInstance(), n = null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.t) && void 0 !== i ? i : 1, l = r.isAllTasksCompleted();
            if (1 === n) {
                if (!this.isFirstTask()) {
                    e();
                    return;
                }
                if (l) {
                    e();
                    return;
                }
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: false
                });
                return;
            }
            if (l) {
                e();
                return;
            }
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        catch (t) {
            console.error("[" + TaskDailyResetTrait_1.traitKey + "] 处理跨天刷新检查失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskDailyResetTrait.prototype.isFirstTask = function () {
        var t = UserModel_1.default.getInstance().getInstallTime(), e = TaskModel_1.TaskModel.getInstance().localData.lastTime;
        return !this.isEmpty(t) && !this.isEmpty(e) && TaskUtils_1.TaskUtils.isSameDay(t, e);
    };
    TaskDailyResetTrait.prototype.isEmpty = function (t) {
        return null == t || "" === t;
    };
    var TaskDailyResetTrait_1;
    TaskDailyResetTrait.traitKey = "TaskDailyReset";
    TaskDailyResetTrait = TaskDailyResetTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskDailyResetTrait")
    ], TaskDailyResetTrait);
    return TaskDailyResetTrait;
}(Trait_1.default));
exports.default = TaskDailyResetTrait;

cc._RF.pop();
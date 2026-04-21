"use strict";
cc._RF.push(module, '5f6721WIftIj5Ub0pi5UMqq', 'TaskStageRewardsTrait');
// subpackages/l_task/Scripts/TaskStageRewardsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskStageRewardsTrait = /** @class */ (function (_super) {
    __extends(TaskStageRewardsTrait, _super);
    function TaskStageRewardsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    TaskStageRewardsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    TaskStageRewardsTrait.prototype.onTaskTrait_getStageRews = function (t, e) {
        if (this._config.stageRewards) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this._config.stageRewards
            });
        }
        else {
            e();
        }
    };
    TaskStageRewardsTrait.traitKey = "TaskStageRewards";
    TaskStageRewardsTrait = __decorate([
        mj.trait,
        mj.class("TaskStageRewardsTrait")
    ], TaskStageRewardsTrait);
    return TaskStageRewardsTrait;
}(Trait_1.default));
exports.default = TaskStageRewardsTrait;

cc._RF.pop();
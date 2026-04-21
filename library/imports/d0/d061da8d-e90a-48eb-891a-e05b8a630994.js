"use strict";
cc._RF.push(module, 'd061dqN6QpI64ka4FuKYwmU', 'TaskCompleteTrait');
// subpackages/l_task/Scripts/TaskCompleteTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskCompleteTrait = /** @class */ (function (_super) {
    __extends(TaskCompleteTrait, _super);
    function TaskCompleteTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskCompleteTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskCompleteTrait.prototype.onTaskTrait_getProgChg = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: null
        });
    };
    TaskCompleteTrait.traitKey = "TaskComplete";
    TaskCompleteTrait = __decorate([
        mj.trait,
        mj.class("TaskCompleteTrait")
    ], TaskCompleteTrait);
    return TaskCompleteTrait;
}(Trait_1.default));
exports.default = TaskCompleteTrait;

cc._RF.pop();
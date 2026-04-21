"use strict";
cc._RF.push(module, '7fd8cDJlEJB2pcTNJQ708ek', 'TaskOpenTrait');
// subpackages/l_task/Scripts/TaskOpenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskOpenTrait = /** @class */ (function (_super) {
    __extends(TaskOpenTrait, _super);
    function TaskOpenTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    TaskOpenTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    TaskOpenTrait.prototype.onTaskTrait_getOpenCond = function (t, e) {
        if (this._config.openCondition) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this._config.openCondition
            });
        }
        else {
            e();
        }
    };
    TaskOpenTrait.traitKey = "TaskOpen";
    TaskOpenTrait = __decorate([
        mj.trait,
        mj.class("TaskOpenTrait")
    ], TaskOpenTrait);
    return TaskOpenTrait;
}(Trait_1.default));
exports.default = TaskOpenTrait;

cc._RF.pop();
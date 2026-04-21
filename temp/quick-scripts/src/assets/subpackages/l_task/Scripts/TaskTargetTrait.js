"use strict";
cc._RF.push(module, 'a9c3aEV+WxJl6JdwFqUhP0/', 'TaskTargetTrait');
// subpackages/l_task/Scripts/TaskTargetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TaskTargetTrait = /** @class */ (function (_super) {
    __extends(TaskTargetTrait, _super);
    function TaskTargetTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    TaskTargetTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    TaskTargetTrait.prototype.onTaskModel_randomTask = function (t, e) {
        var a = t.beforReturnVal;
        if (a && 0 !== a.size && this.adjustTaskInfoMap(a)) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: a
            });
        }
        else {
            e();
        }
    };
    TaskTargetTrait.prototype.adjustTaskInfoMap = function (t) {
        var e = this;
        if (!this._config.targetValue)
            return false;
        var a = 0;
        t.forEach(function (t, o) {
            var i = o.toString(), r = e._config.targetValue[i];
            if (!r)
                return false;
            if (!Array.isArray(r) || 3 !== r.length)
                return false;
            __spreadArrays(t.taskMax);
            t.taskMax = __spreadArrays(r);
            t.taskMin = [0, r[0], r[1]];
            a++;
        });
        return a > 0;
    };
    TaskTargetTrait.traitKey = "TaskTarget";
    TaskTargetTrait = __decorate([
        mj.trait,
        mj.class("TaskTargetTrait")
    ], TaskTargetTrait);
    return TaskTargetTrait;
}(Trait_1.default));
exports.default = TaskTargetTrait;

cc._RF.pop();
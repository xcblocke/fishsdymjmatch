"use strict";
cc._RF.push(module, '9d6d5Ma+m9JW4fiZQmispFT', 'TaskClearListTrait');
// subpackages/l_task/Scripts/TaskClearListTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TaskClearListTrait = /** @class */ (function (_super) {
    __extends(TaskClearListTrait, _super);
    function TaskClearListTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskClearListTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskClearListTrait.prototype.onTaskUtils_random = function (t, e) {
        var a, o;
        t.args[0] = null !== (o = null === (a = this._traitData) || void 0 === a ? void 0 : a.list) && void 0 !== o ? o : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
        e();
    };
    TaskClearListTrait.traitKey = "TaskClearList";
    TaskClearListTrait = __decorate([
        mj.trait,
        mj.class("TaskClearListTrait")
    ], TaskClearListTrait);
    return TaskClearListTrait;
}(Trait_1.default));
exports.default = TaskClearListTrait;

cc._RF.pop();
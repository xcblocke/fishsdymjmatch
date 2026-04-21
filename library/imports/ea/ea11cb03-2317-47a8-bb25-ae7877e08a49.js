"use strict";
cc._RF.push(module, 'ea11csDIxdHqLslrnh34IpJ', 'TaskAutoCloseTrait');
// subpackages/l_task/Scripts/TaskAutoCloseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TaskAutoCloseTrait = /** @class */ (function (_super) {
    __extends(TaskAutoCloseTrait, _super);
    function TaskAutoCloseTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TaskAutoCloseTrait.prototype, "autoCloseDelay", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.autoCloseDelay) && void 0 !== e ? e : 1.8;
        },
        enumerable: false,
        configurable: true
    });
    TaskAutoCloseTrait.prototype.onTaskReward_hidePanel = function (t, e) {
        if (UserModel_1.default.getInstance().isInGameView()) {
            var a = 1000 * this.autoCloseDelay;
            setTimeout(function () {
                ControllerManager_1.default.getInstance().closeViewByName("TaskController");
            }, a);
        }
        e();
    };
    TaskAutoCloseTrait.traitKey = "TaskAutoClose";
    TaskAutoCloseTrait = __decorate([
        mj.trait,
        mj.class("TaskAutoCloseTrait")
    ], TaskAutoCloseTrait);
    return TaskAutoCloseTrait;
}(Trait_1.default));
exports.default = TaskAutoCloseTrait;

cc._RF.pop();
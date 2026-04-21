"use strict";
cc._RF.push(module, 'fedf3mO/WZA9LqPZsvzyQBt', 'TaskBannerCloseTrait');
// subpackages/l_task/Scripts/TaskBannerCloseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var TaskBannerCloseTrait = /** @class */ (function (_super) {
    __extends(TaskBannerCloseTrait, _super);
    function TaskBannerCloseTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskBannerCloseTrait_1 = TaskBannerCloseTrait;
    TaskBannerCloseTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskBannerCloseTrait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            ControllerManager_1.default.getInstance().closeViewByName("TaskBannerController");
            e();
        }
        catch (t) {
            console.error("[" + TaskBannerCloseTrait_1.traitKey + "] 关闭TaskBanner失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var TaskBannerCloseTrait_1;
    TaskBannerCloseTrait.traitKey = "TaskBannerClose";
    TaskBannerCloseTrait = TaskBannerCloseTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskBannerCloseTrait")
    ], TaskBannerCloseTrait);
    return TaskBannerCloseTrait;
}(Trait_1.default));
exports.default = TaskBannerCloseTrait;

cc._RF.pop();
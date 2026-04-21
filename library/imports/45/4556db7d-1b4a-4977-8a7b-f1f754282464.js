"use strict";
cc._RF.push(module, '4556dt9G0pJd4p78fdUKCRk', 'TaskBoxTipTrait');
// subpackages/l_task/Scripts/TaskBoxTipTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Config_1 = require("../../../Scripts/Config");
var TaskBoxTipTrait = /** @class */ (function (_super) {
    __extends(TaskBoxTipTrait, _super);
    function TaskBoxTipTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskBoxTipTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
        return _t;
    };
    TaskBoxTipTrait.prototype.onTopTouchStart = function () {
        this._traitData.clickClose && this.dispatchEvent("removeTaskBoxTips");
    };
    TaskBoxTipTrait.traitKey = "TaskBoxTip";
    TaskBoxTipTrait = __decorate([
        mj.trait,
        mj.class("TaskBoxTipTrait")
    ], TaskBoxTipTrait);
    return TaskBoxTipTrait;
}(Trait_1.default));
exports.default = TaskBoxTipTrait;

cc._RF.pop();
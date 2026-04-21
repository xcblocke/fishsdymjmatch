"use strict";
cc._RF.push(module, '2e5d7o3GuNLdraXppvnDpka', 'TaskClearTargetTrait');
// subpackages/l_task/Scripts/TaskClearTargetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TaskModel_1 = require("./model/TaskModel");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var TaskClearTargetTrait = /** @class */ (function (_super) {
    __extends(TaskClearTargetTrait, _super);
    function TaskClearTargetTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskClearTargetTrait_1 = TaskClearTargetTrait;
    TaskClearTargetTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskClearTargetTrait.prototype.isTaskCard = function (t) {
        var e = TaskModel_1.TaskModel.getInstance();
        return !!e && e.getTaskCardResName() === t;
    };
    TaskClearTargetTrait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var o;
        try {
            var i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
            if (this.isTaskCard(i)) {
                var r = CardUtil_1.default.getFullPath(i), s = CardUtil_1.default.getCardBundleName(i), l = CardUtil_1.default.fromAtlas(i);
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: r,
                        bundleName: s,
                        fromAtlas: l
                    }
                });
                return;
            }
            e();
        }
        catch (t) {
            console.error("[" + TaskClearTargetTrait_1.traitKey + "] 劫持失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var TaskClearTargetTrait_1;
    TaskClearTargetTrait.traitKey = "TaskClearTarget";
    TaskClearTargetTrait = TaskClearTargetTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskClearTargetTrait")
    ], TaskClearTargetTrait);
    return TaskClearTargetTrait;
}(Trait_1.default));
exports.default = TaskClearTargetTrait;

cc._RF.pop();
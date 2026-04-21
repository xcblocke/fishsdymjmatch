"use strict";
cc._RF.push(module, '44378paZnVL3b/BoiZQlnLL', 'TaskLockTrait');
// subpackages/l_task/Scripts/TaskLockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TaskModel_1 = require("./model/TaskModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TaskLockTrait = /** @class */ (function (_super) {
    __extends(TaskLockTrait, _super);
    function TaskLockTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    TaskLockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "Tile2WinVw_show"
            }]);
        this._config = this._traitData || {};
    };
    TaskLockTrait.prototype.sendTaskRedDotNotify = function () {
        mj.EventManager.emit("RedDot_addNotify", GameTypeEnums_1.ERedDotType.Task);
    };
    TaskLockTrait.prototype.onTaskTrait_canShowTaskBtn = function (t, e) {
        if (this._config.isShowLockBtn) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    TaskLockTrait.prototype.onWinVw_showWinVw = function (t, e) {
        try {
            var a = UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1, o = TaskModel_1.TaskModel.getInstance();
            if (!o.isTaskOpen()) {
                e();
                return;
            }
            a === o.openCondition().level && this.sendTaskRedDotNotify();
        }
        catch (t) { }
        e();
    };
    TaskLockTrait.prototype.onTile2WinVw_show = function (t, e) {
        try {
            var a = UserModel_1.default.getInstance().getMainGameData().getLevelId() - 1, o = TaskModel_1.TaskModel.getInstance();
            if (!o.isTaskOpen()) {
                e();
                return;
            }
            a === o.openCondition().level && this.sendTaskRedDotNotify();
        }
        catch (t) { }
        e();
    };
    TaskLockTrait.prototype.onTaskModel_hasRedPoint = function (t, e) {
        try {
            var a = TaskModel_1.TaskModel.getInstance(), o = {
                show: true,
                type: GameTypeEnums_1.ERedDotType.Task
            };
            mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [o]);
            if (!o.show) {
                e();
                return;
            }
            if (a.isFirstHomeShow()) {
                e();
                return;
            }
            if (UserModel_1.default.getInstance().getMainGameData().getLevelId() > a.openCondition().level) {
                this.sendTaskRedDotNotify();
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: true
                });
                return;
            }
        }
        catch (t) { }
        e();
    };
    TaskLockTrait.traitKey = "TaskLock";
    TaskLockTrait = __decorate([
        mj.trait,
        mj.class("TaskLockTrait")
    ], TaskLockTrait);
    return TaskLockTrait;
}(Trait_1.default));
exports.default = TaskLockTrait;

cc._RF.pop();
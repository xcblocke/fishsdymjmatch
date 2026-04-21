
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskDailyResetTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ab89tH+8ZOcIAhWx3+/H58', 'TaskDailyResetTrait');
// subpackages/l_task/Scripts/TaskDailyResetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TaskModel_1 = require("./model/TaskModel");
var TaskUtils_1 = require("./TaskUtils");
var TaskDailyResetTrait = /** @class */ (function (_super) {
    __extends(TaskDailyResetTrait, _super);
    function TaskDailyResetTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskDailyResetTrait_1 = TaskDailyResetTrait;
    TaskDailyResetTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskDailyResetTrait.prototype.onTaskModel_resetTask = function (t, e) {
        var o, i;
        try {
            var r = TaskModel_1.TaskModel.getInstance(), n = null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.t) && void 0 !== i ? i : 1, l = r.isAllTasksCompleted();
            if (1 === n) {
                if (!this.isFirstTask()) {
                    e();
                    return;
                }
                if (l) {
                    e();
                    return;
                }
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: false
                });
                return;
            }
            if (l) {
                e();
                return;
            }
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        catch (t) {
            console.error("[" + TaskDailyResetTrait_1.traitKey + "] 处理跨天刷新检查失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskDailyResetTrait.prototype.isFirstTask = function () {
        var t = UserModel_1.default.getInstance().getInstallTime(), e = TaskModel_1.TaskModel.getInstance().localData.lastTime;
        return !this.isEmpty(t) && !this.isEmpty(e) && TaskUtils_1.TaskUtils.isSameDay(t, e);
    };
    TaskDailyResetTrait.prototype.isEmpty = function (t) {
        return null == t || "" === t;
    };
    var TaskDailyResetTrait_1;
    TaskDailyResetTrait.traitKey = "TaskDailyReset";
    TaskDailyResetTrait = TaskDailyResetTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskDailyResetTrait")
    ], TaskDailyResetTrait);
    return TaskDailyResetTrait;
}(Trait_1.default));
exports.default = TaskDailyResetTrait;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrRGFpbHlSZXNldFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSwrQ0FBOEM7QUFDOUMseUNBQXdDO0FBR3hDO0lBQWlELHVDQUFLO0lBQXREOztJQWlEQSxDQUFDOzRCQWpEb0IsbUJBQW1CO0lBRXRDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxtREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLHFCQUFTLENBQUMsV0FBVyxFQUFFLEVBQzdCLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDeEcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO29CQUN2QixDQUFDLEVBQUUsQ0FBQztvQkFDSixPQUFPO2lCQUNSO2dCQUNELElBQUksQ0FBQyxFQUFFO29CQUNMLENBQUMsRUFBRSxDQUFDO29CQUNKLE9BQU87aUJBQ1I7Z0JBQ0QsQ0FBQyxDQUFDO29CQUNBLE9BQU8sRUFBRSxJQUFJO29CQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO29CQUMxQyxTQUFTLEVBQUUsS0FBSztpQkFDakIsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxFQUFFO2dCQUNMLENBQUMsRUFBRSxDQUFDO2dCQUNKLE9BQU87YUFDUjtZQUNELENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLHFCQUFtQixDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4RyxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUM5QyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELHFDQUFPLEdBQVAsVUFBUSxDQUFDO1FBQ1AsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7SUEvQ00sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQURoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBaUR2QztJQUFELDBCQUFDO0NBakRELEFBaURDLENBakRnRCxlQUFLLEdBaURyRDtrQkFqRG9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgVGFza01vZGVsIH0gZnJvbSAnLi9tb2RlbC9UYXNrTW9kZWwnO1xuaW1wb3J0IHsgVGFza1V0aWxzIH0gZnJvbSAnLi9UYXNrVXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUYXNrRGFpbHlSZXNldFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrRGFpbHlSZXNldFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRhc2tEYWlseVJlc2V0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblRhc2tNb2RlbF9yZXNldFRhc2sodCwgZSkge1xuICAgIHZhciBvLCBpO1xuICAgIHRyeSB7XG4gICAgICB2YXIgciA9IFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgICBuID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAobyA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby50KSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMSxcbiAgICAgICAgbCA9IHIuaXNBbGxUYXNrc0NvbXBsZXRlZCgpO1xuICAgICAgaWYgKDEgPT09IG4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RUYXNrKCkpIHtcbiAgICAgICAgICBlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsKSB7XG4gICAgICAgICAgZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobCkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBUYXNrRGFpbHlSZXNldFRyYWl0LnRyYWl0S2V5ICsgXCJdIOWkhOeQhui3qOWkqeWIt+aWsOajgOafpeWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIGlzRmlyc3RUYXNrKCkge1xuICAgIHZhciB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0SW5zdGFsbFRpbWUoKSxcbiAgICAgIGUgPSBUYXNrTW9kZWwuZ2V0SW5zdGFuY2UoKS5sb2NhbERhdGEubGFzdFRpbWU7XG4gICAgcmV0dXJuICF0aGlzLmlzRW1wdHkodCkgJiYgIXRoaXMuaXNFbXB0eShlKSAmJiBUYXNrVXRpbHMuaXNTYW1lRGF5KHQsIGUpO1xuICB9XG4gIGlzRW1wdHkodCkge1xuICAgIHJldHVybiBudWxsID09IHQgfHwgXCJcIiA9PT0gdDtcbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskNewGameRewardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e48d56Th8lHtq5RfEsWAQfq', 'TaskNewGameRewardTrait');
// subpackages/l_task/Scripts/TaskNewGameRewardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskModel_1 = require("./model/TaskModel");
var TaskData_1 = require("./TaskData");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TaskNewGameRewardTrait = /** @class */ (function (_super) {
    __extends(TaskNewGameRewardTrait, _super);
    function TaskNewGameRewardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskNewGameRewardTrait_1 = TaskNewGameRewardTrait;
    TaskNewGameRewardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskNewGameRewardTrait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Normal) {
                e();
                return;
            }
            var o = TaskModel_1.TaskModel.getInstance();
            if (!o.isTaskOpen()) {
                e();
                return;
            }
            o.hasWaitingReward() && this.pushController("TaskController", {
                from: TaskData_1.ETaskUIType.Result
            });
            e();
        }
        catch (t) {
            console.error("[" + TaskNewGameRewardTrait_1.traitKey + "] 检查待领奖状态失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskNewGameRewardTrait.prototype.onTaskTrait_showTask = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal) {
            var a = t.args[0];
            a && a();
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    var TaskNewGameRewardTrait_1;
    TaskNewGameRewardTrait.traitKey = "TaskNewGameReward";
    TaskNewGameRewardTrait = TaskNewGameRewardTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskNewGameRewardTrait")
    ], TaskNewGameRewardTrait);
    return TaskNewGameRewardTrait;
}(Trait_1.default));
exports.default = TaskNewGameRewardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrTmV3R2FtZVJld2FyZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLCtDQUE4QztBQUM5Qyx1Q0FBeUM7QUFDekMsc0VBQWlFO0FBQ2pFLHdGQUFvRjtBQUdwRjtJQUFvRCwwQ0FBSztJQUF6RDs7SUFtQ0EsQ0FBQzsrQkFuQ29CLHNCQUFzQjtJQUV6Qyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsdURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUk7WUFDRixJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDdEUsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLEdBQUcscUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUNuQixDQUFDLEVBQUUsQ0FBQztnQkFDSixPQUFPO2FBQ1I7WUFDRCxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFO2dCQUM1RCxJQUFJLEVBQUUsc0JBQVcsQ0FBQyxNQUFNO2FBQ3pCLENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDO1NBQ0w7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLHdCQUFzQixDQUFDLFFBQVEsR0FBRyxlQUFlLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDMUcsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCxxREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDVCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDOztJQWpDTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FtQzFDO0lBQUQsNkJBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ21ELGVBQUssR0FtQ3hEO2tCQW5Db0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IFRhc2tNb2RlbCB9IGZyb20gJy4vbW9kZWwvVGFza01vZGVsJztcbmltcG9ydCB7IEVUYXNrVUlUeXBlIH0gZnJvbSAnLi9UYXNrRGF0YSc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRhc2tOZXdHYW1lUmV3YXJkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tOZXdHYW1lUmV3YXJkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGFza05ld0dhbWVSZXdhcmRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG8gPSBUYXNrTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGlmICghby5pc1Rhc2tPcGVuKCkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvLmhhc1dhaXRpbmdSZXdhcmQoKSAmJiB0aGlzLnB1c2hDb250cm9sbGVyKFwiVGFza0NvbnRyb2xsZXJcIiwge1xuICAgICAgICBmcm9tOiBFVGFza1VJVHlwZS5SZXN1bHRcbiAgICAgIH0pO1xuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBUYXNrTmV3R2FtZVJld2FyZFRyYWl0LnRyYWl0S2V5ICsgXCJdIOajgOafpeW+hemihuWllueKtuaAgeWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uVGFza1RyYWl0X3Nob3dUYXNrKHQsIGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICB2YXIgYSA9IHQuYXJnc1swXTtcbiAgICAgIGEgJiYgYSgpO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==
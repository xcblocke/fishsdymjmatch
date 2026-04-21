
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskRewardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd229GQxsJJGYWsxE+NFRNX', 'TaskRewardTrait');
// subpackages/l_task/Scripts/TaskRewardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskModel_1 = require("./model/TaskModel");
var TaskData_1 = require("./TaskData");
var TaskRewardTrait = /** @class */ (function (_super) {
    __extends(TaskRewardTrait, _super);
    function TaskRewardTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskRewardTrait_1 = TaskRewardTrait;
    TaskRewardTrait.prototype.onTaskTrait_checkNeedBlock = function (t, e) {
        try {
            var o = TaskModel_1.TaskModel.getInstance(), i = o.getCurrentStage(), r = o.getStageData(i);
            if (r && r.stageState === TaskData_1.ETaskStageState.Wait) {
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
            else {
                e();
            }
        }
        catch (t) {
            console.error("[" + TaskRewardTrait_1.traitKey + "] 劫持checkNeedBlock失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    TaskRewardTrait.prototype.onTaskView_shouldShowAnim = function (t, e) {
        try {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        catch (t) {
            console.error("[" + TaskRewardTrait_1.traitKey + "] 劫持shouldShowAnim失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var TaskRewardTrait_1;
    TaskRewardTrait.traitKey = "TaskReward";
    TaskRewardTrait = TaskRewardTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskRewardTrait")
    ], TaskRewardTrait);
    return TaskRewardTrait;
}(Trait_1.default));
exports.default = TaskRewardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrUmV3YXJkVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsK0NBQThDO0FBQzlDLHVDQUE2QztBQUc3QztJQUE2QyxtQ0FBSztJQUFsRDs7SUFpQ0EsQ0FBQzt3QkFqQ29CLGVBQWU7SUFFbEMsb0RBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxFQUM3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxLQUFLLDBCQUFlLENBQUMsSUFBSSxFQUFFO2dCQUM5QyxDQUFDLENBQUM7b0JBQ0EsT0FBTyxFQUFFLElBQUk7b0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07b0JBQzFDLFNBQVMsRUFBRSxJQUFJO2lCQUNoQixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLGlCQUFlLENBQUMsUUFBUSxHQUFHLHdCQUF3QixHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzVHLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsbURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUk7WUFDRixDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxpQkFBZSxDQUFDLFFBQVEsR0FBRyx3QkFBd0IsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM1RyxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7SUEvQk0sd0JBQVEsR0FBRyxZQUFZLENBQUM7SUFEWixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0FpQ25DO0lBQUQsc0JBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQzRDLGVBQUssR0FpQ2pEO2tCQWpDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgeyBUYXNrTW9kZWwgfSBmcm9tICcuL21vZGVsL1Rhc2tNb2RlbCc7XG5pbXBvcnQgeyBFVGFza1N0YWdlU3RhdGUgfSBmcm9tICcuL1Rhc2tEYXRhJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGFza1Jld2FyZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrUmV3YXJkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGFza1Jld2FyZFwiO1xuICBvblRhc2tUcmFpdF9jaGVja05lZWRCbG9jayh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvID0gVGFza01vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICAgIGkgPSBvLmdldEN1cnJlbnRTdGFnZSgpLFxuICAgICAgICByID0gby5nZXRTdGFnZURhdGEoaSk7XG4gICAgICBpZiAociAmJiByLnN0YWdlU3RhdGUgPT09IEVUYXNrU3RhZ2VTdGF0ZS5XYWl0KSB7XG4gICAgICAgIGUoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgVGFza1Jld2FyZFRyYWl0LnRyYWl0S2V5ICsgXCJdIOWKq+aMgWNoZWNrTmVlZEJsb2Nr5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25UYXNrVmlld19zaG91bGRTaG93QW5pbSh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBUYXNrUmV3YXJkVHJhaXQudHJhaXRLZXkgKyBcIl0g5Yqr5oyBc2hvdWxkU2hvd0FuaW3lpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskStageProgressTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed7d3HajiRCC7HXXUP+/dto', 'TaskStageProgressTrait');
// subpackages/l_task/Scripts/TaskStageProgressTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskModel_1 = require("./model/TaskModel");
var TaskStageProgressTrait = /** @class */ (function (_super) {
    __extends(TaskStageProgressTrait, _super);
    function TaskStageProgressTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskStageProgressTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskStageProgressTrait.prototype.onTaskView_calcStgProg = function (t, e) {
        var a = t.args[0], o = this.calculateProgressByTaskCount(a);
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: o
        });
    };
    TaskStageProgressTrait.prototype.calculateProgressByTaskCount = function () {
        var t, e = TaskModel_1.TaskModel.getInstance(), a = e.getCurrentStage(), o = (e.getTaskData().listTaskType || []).length, i = e.getStageData(a), r = (null === (t = null == i ? void 0 : i.taskCompleteList) || void 0 === t ? void 0 : t.length) || 0, n = 0;
        a > 1 && (n = e.STAGE_WEIGHTS[a - 2]);
        if (a >= 1 && a <= 3 && o > 0) {
            var s = r / o, c = a > 1 ? e.STAGE_WEIGHTS[a - 2] : 0;
            n += s * (e.STAGE_WEIGHTS[a - 1] - c);
        }
        return n;
    };
    TaskStageProgressTrait.traitKey = "TaskStageProgress";
    TaskStageProgressTrait = __decorate([
        mj.trait,
        mj.class("TaskStageProgressTrait")
    ], TaskStageProgressTrait);
    return TaskStageProgressTrait;
}(Trait_1.default));
exports.default = TaskStageProgressTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrU3RhZ2VQcm9ncmVzc1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLCtDQUE4QztBQUc5QztJQUFvRCwwQ0FBSztJQUF6RDs7SUE4QkEsQ0FBQztJQTVCQyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsdURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDZEQUE0QixHQUE1QjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxFQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQ3JCLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFDckcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNSLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ1gsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBNUJNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFEbkIsc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQThCMUM7SUFBRCw2QkFBQztDQTlCRCxBQThCQyxDQTlCbUQsZUFBSyxHQThCeEQ7a0JBOUJvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IHsgVGFza01vZGVsIH0gZnJvbSAnLi9tb2RlbC9UYXNrTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUYXNrU3RhZ2VQcm9ncmVzc1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrU3RhZ2VQcm9ncmVzc1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRhc2tTdGFnZVByb2dyZXNzXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblRhc2tWaWV3X2NhbGNTdGdQcm9nKHQsIGUpIHtcbiAgICB2YXIgYSA9IHQuYXJnc1swXSxcbiAgICAgIG8gPSB0aGlzLmNhbGN1bGF0ZVByb2dyZXNzQnlUYXNrQ291bnQoYSk7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiBvXG4gICAgfSk7XG4gIH1cbiAgY2FsY3VsYXRlUHJvZ3Jlc3NCeVRhc2tDb3VudCgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSBUYXNrTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIGEgPSBlLmdldEN1cnJlbnRTdGFnZSgpLFxuICAgICAgbyA9IChlLmdldFRhc2tEYXRhKCkubGlzdFRhc2tUeXBlIHx8IFtdKS5sZW5ndGgsXG4gICAgICBpID0gZS5nZXRTdGFnZURhdGEoYSksXG4gICAgICByID0gKG51bGwgPT09ICh0ID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS50YXNrQ29tcGxldGVMaXN0KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lmxlbmd0aCkgfHwgMCxcbiAgICAgIG4gPSAwO1xuICAgIGEgPiAxICYmIChuID0gZS5TVEFHRV9XRUlHSFRTW2EgLSAyXSk7XG4gICAgaWYgKGEgPj0gMSAmJiBhIDw9IDMgJiYgbyA+IDApIHtcbiAgICAgIHZhciBzID0gciAvIG8sXG4gICAgICAgIGMgPSBhID4gMSA/IGUuU1RBR0VfV0VJR0hUU1thIC0gMl0gOiAwO1xuICAgICAgbiArPSBzICogKGUuU1RBR0VfV0VJR0hUU1thIC0gMV0gLSBjKTtcbiAgICB9XG4gICAgcmV0dXJuIG47XG4gIH1cbn0iXX0=
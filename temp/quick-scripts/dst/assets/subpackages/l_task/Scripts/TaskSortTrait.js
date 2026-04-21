
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskSortTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc1f3H4gpBNeYvl0ICQ0iwP', 'TaskSortTrait');
// subpackages/l_task/Scripts/TaskSortTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskModel_1 = require("./model/TaskModel");
var TaskSortTrait = /** @class */ (function (_super) {
    __extends(TaskSortTrait, _super);
    function TaskSortTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskSortTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskSortTrait.prototype.onTaskModel_sort = function (t, e) {
        var a = t.args[0], o = this.sortTasks(a);
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: o
        });
    };
    TaskSortTrait.prototype.sortTasks = function (t) {
        var e = TaskModel_1.TaskModel.getInstance(), a = __spreadArrays(e.getTaskData().listTaskType), o = t || e.getCurrentStage(), i = e.getStageData(o);
        if (!i)
            return a;
        a.sort(function (t, e) {
            return (i.taskCompleteList.includes(t) ? 1 : 0) - (i.taskCompleteList.includes(e) ? 1 : 0);
        });
        return a;
    };
    TaskSortTrait.traitKey = "TaskSort";
    TaskSortTrait = __decorate([
        mj.trait,
        mj.class("TaskSortTrait")
    ], TaskSortTrait);
    return TaskSortTrait;
}(Trait_1.default));
exports.default = TaskSortTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrU29ydFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLCtDQUE4QztBQUc5QztJQUEyQyxpQ0FBSztJQUFoRDs7SUF5QkEsQ0FBQztJQXZCQyw4QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsd0NBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxpQ0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULElBQUksQ0FBQyxHQUFHLHFCQUFTLENBQUMsV0FBVyxFQUFFLEVBQzdCLENBQUMsa0JBQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUNyQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFDNUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdGLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdkJNLHNCQUFRLEdBQUcsVUFBVSxDQUFDO0lBRFYsYUFBYTtRQUZqQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO09BQ0wsYUFBYSxDQXlCakM7SUFBRCxvQkFBQztDQXpCRCxBQXlCQyxDQXpCMEMsZUFBSyxHQXlCL0M7a0JBekJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IFRhc2tNb2RlbCB9IGZyb20gJy4vbW9kZWwvVGFza01vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGFza1NvcnRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1NvcnRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUYXNrU29ydFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25UYXNrTW9kZWxfc29ydCh0LCBlKSB7XG4gICAgdmFyIGEgPSB0LmFyZ3NbMF0sXG4gICAgICBvID0gdGhpcy5zb3J0VGFza3MoYSk7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiBvXG4gICAgfSk7XG4gIH1cbiAgc29ydFRhc2tzKHQpIHtcbiAgICB2YXIgZSA9IFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgYSA9IFsuLi5lLmdldFRhc2tEYXRhKCkubGlzdFRhc2tUeXBlXSxcbiAgICAgIG8gPSB0IHx8IGUuZ2V0Q3VycmVudFN0YWdlKCksXG4gICAgICBpID0gZS5nZXRTdGFnZURhdGEobyk7XG4gICAgaWYgKCFpKSByZXR1cm4gYTtcbiAgICBhLnNvcnQoZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgIHJldHVybiAoaS50YXNrQ29tcGxldGVMaXN0LmluY2x1ZGVzKHQpID8gMSA6IDApIC0gKGkudGFza0NvbXBsZXRlTGlzdC5pbmNsdWRlcyhlKSA/IDEgOiAwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYTtcbiAgfVxufSJdfQ==
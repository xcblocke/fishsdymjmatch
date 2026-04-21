
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskAutoPopTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8dff1Z02btBV4jY2rgodUix', 'TaskAutoPopTrait');
// subpackages/l_task/Scripts/TaskAutoPopTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TaskModel_1 = require("./model/TaskModel");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var TaskData_1 = require("./TaskData");
var TaskAutoPopTrait = /** @class */ (function (_super) {
    __extends(TaskAutoPopTrait, _super);
    function TaskAutoPopTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    TaskAutoPopTrait_1 = TaskAutoPopTrait;
    TaskAutoPopTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    TaskAutoPopTrait.prototype.onHallVw_onPopView = function (t, e) {
        this.showPopView(function (t) {
            e({
                isBreak: t
            });
        });
    };
    TaskAutoPopTrait.prototype.showPopView = function (t) {
        var e = this.showTaskMainUI();
        null == t || t(e);
    };
    TaskAutoPopTrait.prototype.showTaskMainUI = function (t) {
        if (t === void 0) { t = null; }
        var e = TaskModel_1.TaskModel.getInstance();
        if (!e.isTaskOpen())
            return false;
        if (true !== this._config.firstAutoPop)
            return false;
        if (e.isFirstHomeShow())
            return false;
        try {
            ControllerManager_1.default.getInstance().pushViewByController("TaskController", {
                from: TaskData_1.ETaskUIType.Home,
                onClose: t
            });
            return true;
        }
        catch (t) {
            console.error("[" + TaskAutoPopTrait_1.traitKey + "] 弹出任务主界面失败: " + (null == t ? void 0 : t.message));
        }
        return false;
    };
    var TaskAutoPopTrait_1;
    TaskAutoPopTrait.traitKey = "TaskAutoPop";
    __decorate([
        mj.traitEvent("TaskAutoPopT_showPopVw")
    ], TaskAutoPopTrait.prototype, "showPopView", null);
    TaskAutoPopTrait = TaskAutoPopTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskAutoPopTrait")
    ], TaskAutoPopTrait);
    return TaskAutoPopTrait;
}(Trait_1.default));
exports.default = TaskAutoPopTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrQXV0b1BvcFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsK0NBQThDO0FBQzlDLDBGQUFxRjtBQUNyRix1Q0FBeUM7QUFHekM7SUFBOEMsb0NBQUs7SUFBbkQ7UUFBQSxxRUFtQ0M7UUFsQ0MsYUFBTyxHQUFHLEVBQUUsQ0FBQzs7SUFrQ2YsQ0FBQzt5QkFuQ29CLGdCQUFnQjtJQUduQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCw2Q0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDMUIsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNELHlDQUFjLEdBQWQsVUFBZSxDQUFRO1FBQVIsa0JBQUEsRUFBQSxRQUFRO1FBQ3JCLElBQUksQ0FBQyxHQUFHLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNsQyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNyRCxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN0QyxJQUFJO1lBQ0YsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3JFLElBQUksRUFBRSxzQkFBVyxDQUFDLElBQUk7Z0JBQ3RCLE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsa0JBQWdCLENBQUMsUUFBUSxHQUFHLGVBQWUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNyRztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7SUFoQ00seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFhaEM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3VEQUl2QztJQWxCa0IsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQW1DcEM7SUFBRCx1QkFBQztDQW5DRCxBQW1DQyxDQW5DNkMsZUFBSyxHQW1DbEQ7a0JBbkNvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVGFza01vZGVsIH0gZnJvbSAnLi9tb2RlbC9UYXNrTW9kZWwnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IHsgRVRhc2tVSVR5cGUgfSBmcm9tICcuL1Rhc2tEYXRhJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGFza0F1dG9Qb3BUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0F1dG9Qb3BUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2NvbmZpZyA9IHt9O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRhc2tBdXRvUG9wXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl90cmFpdERhdGEgfHwge307XG4gIH1cbiAgb25IYWxsVndfb25Qb3BWaWV3KHQsIGUpIHtcbiAgICB0aGlzLnNob3dQb3BWaWV3KGZ1bmN0aW9uICh0KSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrQXV0b1BvcFRfc2hvd1BvcFZ3XCIpXG4gIHNob3dQb3BWaWV3KHQpIHtcbiAgICB2YXIgZSA9IHRoaXMuc2hvd1Rhc2tNYWluVUkoKTtcbiAgICBudWxsID09IHQgfHwgdChlKTtcbiAgfVxuICBzaG93VGFza01haW5VSSh0ID0gbnVsbCkge1xuICAgIHZhciBlID0gVGFza01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKCFlLmlzVGFza09wZW4oKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0cnVlICE9PSB0aGlzLl9jb25maWcuZmlyc3RBdXRvUG9wKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGUuaXNGaXJzdEhvbWVTaG93KCkpIHJldHVybiBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRhc2tDb250cm9sbGVyXCIsIHtcbiAgICAgICAgZnJvbTogRVRhc2tVSVR5cGUuSG9tZSxcbiAgICAgICAgb25DbG9zZTogdFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgVGFza0F1dG9Qb3BUcmFpdC50cmFpdEtleSArIFwiXSDlvLnlh7rku7vliqHkuLvnlYzpnaLlpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXX0=
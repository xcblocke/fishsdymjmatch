
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskBannerCloseTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrQmFubmVyQ2xvc2VUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDBGQUFxRjtBQUdyRjtJQUFrRCx3Q0FBSztJQUF2RDs7SUFjQSxDQUFDOzZCQWRvQixvQkFBb0I7SUFFdkMscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHFEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJO1lBQ0YsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDeEUsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsc0JBQW9CLENBQUMsUUFBUSxHQUFHLG9CQUFvQixHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzdHLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDOztJQVpNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQWN4QztJQUFELDJCQUFDO0NBZEQsQUFjQyxDQWRpRCxlQUFLLEdBY3REO2tCQWRvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUYXNrQmFubmVyQ2xvc2VUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0Jhbm5lckNsb3NlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGFza0Jhbm5lckNsb3NlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25OZXdHYW1lKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jbG9zZVZpZXdCeU5hbWUoXCJUYXNrQmFubmVyQ29udHJvbGxlclwiKTtcbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgVGFza0Jhbm5lckNsb3NlVHJhaXQudHJhaXRLZXkgKyBcIl0g5YWz6ZetVGFza0Jhbm5lcuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19
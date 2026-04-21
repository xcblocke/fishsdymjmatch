
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskAutoCloseTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea11csDIxdHqLslrnh34IpJ', 'TaskAutoCloseTrait');
// subpackages/l_task/Scripts/TaskAutoCloseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TaskAutoCloseTrait = /** @class */ (function (_super) {
    __extends(TaskAutoCloseTrait, _super);
    function TaskAutoCloseTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TaskAutoCloseTrait.prototype, "autoCloseDelay", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.autoCloseDelay) && void 0 !== e ? e : 1.8;
        },
        enumerable: false,
        configurable: true
    });
    TaskAutoCloseTrait.prototype.onTaskReward_hidePanel = function (t, e) {
        if (UserModel_1.default.getInstance().isInGameView()) {
            var a = 1000 * this.autoCloseDelay;
            setTimeout(function () {
                ControllerManager_1.default.getInstance().closeViewByName("TaskController");
            }, a);
        }
        e();
    };
    TaskAutoCloseTrait.traitKey = "TaskAutoClose";
    TaskAutoCloseTrait = __decorate([
        mj.trait,
        mj.class("TaskAutoCloseTrait")
    ], TaskAutoCloseTrait);
    return TaskAutoCloseTrait;
}(Trait_1.default));
exports.default = TaskAutoCloseTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrQXV0b0Nsb3NlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFxRjtBQUNyRixnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBR2pFO0lBQWdELHNDQUFLO0lBQXJEOztJQWVBLENBQUM7SUFiQyxzQkFBSSw4Q0FBYzthQUFsQjtZQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDNUgsQ0FBQzs7O09BQUE7SUFDRCxtREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ25DLFVBQVUsQ0FBQztnQkFDVCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDtRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQWJNLDJCQUFRLEdBQUcsZUFBZSxDQUFDO0lBRGYsa0JBQWtCO1FBRnRDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQWV0QztJQUFELHlCQUFDO0NBZkQsQUFlQyxDQWYrQyxlQUFLLEdBZXBEO2tCQWZvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGFza0F1dG9DbG9zZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQXV0b0Nsb3NlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGFza0F1dG9DbG9zZVwiO1xuICBnZXQgYXV0b0Nsb3NlRGVsYXkoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5hdXRvQ2xvc2VEZWxheSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDEuODtcbiAgfVxuICBvblRhc2tSZXdhcmRfaGlkZVBhbmVsKHQsIGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNJbkdhbWVWaWV3KCkpIHtcbiAgICAgIHZhciBhID0gMTAwMCAqIHRoaXMuYXV0b0Nsb3NlRGVsYXk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jbG9zZVZpZXdCeU5hbWUoXCJUYXNrQ29udHJvbGxlclwiKTtcbiAgICAgIH0sIGEpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbn0iXX0=
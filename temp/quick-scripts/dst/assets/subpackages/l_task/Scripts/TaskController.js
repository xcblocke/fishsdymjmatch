
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73778yiOpRJNpMPRmG2fxFw', 'TaskController');
// subpackages/l_task/Scripts/TaskController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var TaskView_1 = require("./view/TaskView");
var TaskModel_1 = require("./model/TaskModel");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var TaskData_1 = require("./TaskData");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TaskController = /** @class */ (function (_super) {
    __extends(TaskController, _super);
    function TaskController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TaskView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this._model = null;
        return _this;
    }
    TaskController.prototype.initDependRes = function () { };
    TaskController.prototype.viewDidLoad = function () {
        var e, a;
        _super.prototype.viewDidLoad.call(this);
        this._model = TaskModel_1.TaskModel.getInstance();
        if (!this._model.isInitialized()) {
            var o = mj.getClassByName("TaskTrait");
            (null === (e = null == o ? void 0 : o.getInstance()) || void 0 === e ? void 0 : e.eventEnabled) && (null === (a = null == o ? void 0 : o.getInstance()) || void 0 === a || a.initTask());
        }
    };
    TaskController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this._model.updateFirstHomeShow();
        var a = (null == e ? void 0 : e.from) || TaskData_1.ETaskUIType.Home;
        this._model.setOpenFrom(a);
        mj.EventManager.emit(GameEvent_1.EGameEvent.RedDot_clearNotify, GameTypeEnums_1.ERedDotType.Task);
        this.dispatchEvent("updateTaskRedDot");
        DGameBtnClick_1.DotGameBtnClick.dotDailyTask(DGameBtnClick_1.EDailyTaskClickType.DialogDisplayed);
        this._model.checkAndInitTask();
        this.refreshTaskList();
    };
    TaskController.prototype.refreshTaskList = function () {
        this.viewDoAction("refreshTaskList");
    };
    TaskController.prototype.getMessageListeners = function () {
        var _t = {};
        _t.removeTaskBoxTips = this.onRemoveTaskBoxTips.bind(this);
        _t.openTaskReward = this.onOpenTaskReward.bind(this);
        return _t;
    };
    TaskController.prototype.onRemoveTaskBoxTips = function () {
        this.viewDoAction("removeTaskBoxTips");
    };
    TaskController.prototype.onOpenTaskReward = function (t) {
        this.viewDoAction("openTaskRewardUI", t);
    };
    TaskController.prototype.onUIDestroy = function () {
        _super.prototype.onUIDestroy.call(this);
    };
    __decorate([
        mj.traitEvent("TaskCtrl_initRes")
    ], TaskController.prototype, "initDependRes", null);
    TaskController = __decorate([
        mj.class("TaskController")
    ], TaskController);
    return TaskController;
}(ViewController_1.default));
exports.default = TaskController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLDRDQUF1QztBQUN2QywrQ0FBOEM7QUFDOUMsb0VBQTBGO0FBQzFGLHVDQUF5QztBQUN6QywyRUFBMkU7QUFDM0Usd0ZBQXFGO0FBRXJGO0lBQTRDLGtDQUFjO0lBQTFEO1FBQUEscUVBNkNDO1FBNUNDLGVBQVMsR0FBRyxrQkFBUSxDQUFDO1FBQ3JCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixZQUFNLEdBQUcsSUFBSSxDQUFDOztJQTBDaEIsQ0FBQztJQXhDQyxzQ0FBYSxHQUFiLGNBQWlCLENBQUM7SUFDbEIsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzFMO0lBQ0gsQ0FBQztJQUNELG9DQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksc0JBQVcsQ0FBQyxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsc0JBQVUsQ0FBQyxrQkFBa0IsRUFBRSwyQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2QywrQkFBZSxDQUFDLFlBQVksQ0FBQyxtQ0FBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCx3Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCw0Q0FBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxFQUFFLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsNENBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvQ0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBdkNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQzt1REFDaEI7SUFMQyxjQUFjO1FBRGxDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7T0FDTixjQUFjLENBNkNsQztJQUFELHFCQUFDO0NBN0NELEFBNkNDLENBN0MyQyx3QkFBYyxHQTZDekQ7a0JBN0NvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgVGFza1ZpZXcgZnJvbSAnLi92aWV3L1Rhc2tWaWV3JztcbmltcG9ydCB7IFRhc2tNb2RlbCB9IGZyb20gJy4vbW9kZWwvVGFza01vZGVsJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRURhaWx5VGFza0NsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IHsgRVRhc2tVSVR5cGUgfSBmcm9tICcuL1Rhc2tEYXRhJztcbmltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgRVJlZERvdFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLmNsYXNzKFwiVGFza0NvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBUYXNrVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5BTEVSVDtcbiAgX21vZGVsID0gbnVsbDtcbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrQ3RybF9pbml0UmVzXCIpXG4gIGluaXREZXBlbmRSZXMoKSB7fVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICB2YXIgZSwgYTtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX21vZGVsID0gVGFza01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKCF0aGlzLl9tb2RlbC5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHZhciBvID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJUYXNrVHJhaXRcIik7XG4gICAgICAobnVsbCA9PT0gKGUgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZXZlbnRFbmFibGVkKSAmJiAobnVsbCA9PT0gKGEgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLmdldEluc3RhbmNlKCkpIHx8IHZvaWQgMCA9PT0gYSB8fCBhLmluaXRUYXNrKCkpO1xuICAgIH1cbiAgfVxuICB2aWV3RGlkU2hvdyhlKSB7XG4gICAgZSA9IGUgfHwgdGhpcy5hcmdzO1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgZSk7XG4gICAgdGhpcy5fbW9kZWwudXBkYXRlRmlyc3RIb21lU2hvdygpO1xuICAgIHZhciBhID0gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZnJvbSkgfHwgRVRhc2tVSVR5cGUuSG9tZTtcbiAgICB0aGlzLl9tb2RlbC5zZXRPcGVuRnJvbShhKTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFR2FtZUV2ZW50LlJlZERvdF9jbGVhck5vdGlmeSwgRVJlZERvdFR5cGUuVGFzayk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFwidXBkYXRlVGFza1JlZERvdFwiKTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90RGFpbHlUYXNrKEVEYWlseVRhc2tDbGlja1R5cGUuRGlhbG9nRGlzcGxheWVkKTtcbiAgICB0aGlzLl9tb2RlbC5jaGVja0FuZEluaXRUYXNrKCk7XG4gICAgdGhpcy5yZWZyZXNoVGFza0xpc3QoKTtcbiAgfVxuICByZWZyZXNoVGFza0xpc3QoKSB7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJyZWZyZXNoVGFza0xpc3RcIik7XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX3QgPSB7fTtcbiAgICBfdC5yZW1vdmVUYXNrQm94VGlwcyA9IHRoaXMub25SZW1vdmVUYXNrQm94VGlwcy5iaW5kKHRoaXMpO1xuICAgIF90Lm9wZW5UYXNrUmV3YXJkID0gdGhpcy5vbk9wZW5UYXNrUmV3YXJkLmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIG9uUmVtb3ZlVGFza0JveFRpcHMoKSB7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJyZW1vdmVUYXNrQm94VGlwc1wiKTtcbiAgfVxuICBvbk9wZW5UYXNrUmV3YXJkKHQpIHtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcIm9wZW5UYXNrUmV3YXJkVUlcIiwgdCk7XG4gIH1cbiAgb25VSURlc3Ryb3koKSB7XG4gICAgc3VwZXIub25VSURlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==
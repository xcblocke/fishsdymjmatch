"use strict";
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/view/TaskView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '033dd+qcmNNS4zhL0FEJEzm', 'TaskView');
// subpackages/l_task/Scripts/view/TaskView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var UIView_1 = require("../../../../Scripts/framework/ui/UIView");
var TaskModel_1 = require("../model/TaskModel");
var TaskData_1 = require("../TaskData");
var TaskListView_1 = require("./TaskListView");
var TaskRewardView_1 = require("./TaskRewardView");
var TaskTipView_1 = require("./TaskTipView");
var TaskBoxTipView_1 = require("./TaskBoxTipView");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var TaskView = /** @class */ (function (_super) {
    __extends(TaskView, _super);
    function TaskView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._contentNode = null;
        _this._topNode = null;
        _this._closeBtn = null;
        _this._scrollView = null;
        _this._progressBar = null;
        _this._stageBtn1 = null;
        _this._stageBtn2 = null;
        _this._stageBtn3 = null;
        _this._stageBtn1Select = null;
        _this._stageBtn2Select = null;
        _this._stageBtn3Select = null;
        _this._btn2Lock = null;
        _this._btn3Lock = null;
        _this._boxOpen1 = null;
        _this._boxOpen2 = null;
        _this._boxOpen3 = null;
        _this._boxClose1 = null;
        _this._boxClose2 = null;
        _this._boxClose3 = null;
        _this._taskListView = null;
        _this._taskRewardUI = null;
        _this._taskRewardUILoading = false;
        _this._taskTipUI = null;
        _this._taskTipUILoading = false;
        _this._taskBoxTipsNode = null;
        _this._taskDataList = [];
        _this._currentStage = 0;
        return _this;
    }
    TaskView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUI();
        this.registerEvents();
    };
    TaskView.prototype.initUI = function () {
        var t, e, a;
        this._contentNode = this.node.getChildByName("content");
        this._topNode = cc.find("content/top", this.node);
        this._closeBtn = null === (t = cc.find("content/top/btn_close", this.node)) || void 0 === t ? void 0 : t.getComponent(cc.Button);
        this._scrollView = null === (e = cc.find("content/scrollView", this.node)) || void 0 === e ? void 0 : e.getComponent(cc.ScrollView);
        this._progressBar = null === (a = cc.find("content/progressBar", this.node)) || void 0 === a ? void 0 : a.getComponent(cc.ProgressBar);
        this._stageBtn1 = cc.find("content/btns/btn1", this.node);
        this._stageBtn2 = cc.find("content/btns/btn2", this.node);
        this._stageBtn3 = cc.find("content/btns/btn3", this.node);
        this._stageBtn1Select = cc.find("content/btns/btn1_select", this.node);
        this._stageBtn2Select = cc.find("content/btns/btn2_select", this.node);
        this._stageBtn3Select = cc.find("content/btns/btn3_select", this.node);
        this._btn2Lock = cc.find("content/btns/btn2_lock", this.node);
        this._btn3Lock = cc.find("content/btns/btn3_lock", this.node);
        this._boxOpen1 = cc.find("content/box/sp_box_open1", this.node);
        this._boxOpen2 = cc.find("content/box/sp_box_open2", this.node);
        this._boxOpen3 = cc.find("content/box/sp_box_open3", this.node);
        this._boxClose1 = cc.find("content/box/btn_box_close1", this.node);
        this._boxClose2 = cc.find("content/box/btn_box_close2", this.node);
        this._boxClose3 = cc.find("content/box/btn_box_close3", this.node);
        this.initTaskListView();
        this.setStageBtnI18N();
    };
    TaskView.prototype.setStageBtnI18N = function () {
        this.setButtonI18N(this._stageBtn1, 1);
        this.setButtonI18N(this._stageBtn2, 2);
        this.setButtonI18N(this._stageBtn3, 3);
        this.setButtonI18N(this._stageBtn1Select, 1);
        this.setButtonI18N(this._stageBtn2Select, 2);
        this.setButtonI18N(this._stageBtn3Select, 3);
    };
    TaskView.prototype.setButtonI18N = function (t, e) {
        if (t && cc.isValid(t)) {
            var a = cc.find("Background/label", t);
            a && I18NStrings_1.default.setText(a, "", "DailyQuest_UI_Phase", [e]);
        }
    };
    TaskView.prototype.initTaskListView = function () {
        this._scrollView && (this._taskListView = this._scrollView.addComponent(TaskListView_1.default));
    };
    TaskView.prototype.registerEvents = function () {
        var t = this;
        this._closeBtn && this.OnButtonClick(this._closeBtn.node, this.onCloseBtnClick.bind(this));
        this._stageBtn1 && this.OnButtonClick(this._stageBtn1, function () {
            return t.onStageBtnClick(1);
        });
        this._stageBtn2 && this.OnButtonClick(this._stageBtn2, function () {
            return t.onStageBtnClick(2);
        });
        this._stageBtn3 && this.OnButtonClick(this._stageBtn3, function () {
            return t.onStageBtnClick(3);
        });
        this._stageBtn1Select && this.OnButtonClick(this._stageBtn1Select, function () {
            return t.onStageBtnClick(1);
        });
        this._stageBtn2Select && this.OnButtonClick(this._stageBtn2Select, function () {
            return t.onStageBtnClick(2);
        });
        this._stageBtn3Select && this.OnButtonClick(this._stageBtn3Select, function () {
            return t.onStageBtnClick(3);
        });
        this._btn2Lock && this.addButtonClickEvent(this._btn2Lock, function () {
            return t.onLockClick(2);
        });
        this._btn3Lock && this.addButtonClickEvent(this._btn3Lock, function () {
            return t.onLockClick(3);
        });
        this._boxOpen1 && this.OnButtonClick(this._boxOpen1, function () {
            return t.onBoxOpenClick(1);
        });
        this._boxOpen2 && this.OnButtonClick(this._boxOpen2, function () {
            return t.onBoxOpenClick(2);
        });
        this._boxOpen3 && this.OnButtonClick(this._boxOpen3, function () {
            return t.onBoxOpenClick(3);
        });
        this._boxClose1 && this.OnButtonClick(this._boxClose1, function () {
            return t.onBoxCloseClick(1);
        });
        this._boxClose2 && this.OnButtonClick(this._boxClose2, function () {
            return t.onBoxCloseClick(2);
        });
        this._boxClose3 && this.OnButtonClick(this._boxClose3, function () {
            return t.onBoxCloseClick(3);
        });
    };
    TaskView.prototype.addButtonClickEvent = function (t, e, a) {
        if (a === void 0) { a = {}; }
        t && this.OnButtonClick(t, Object.assign({
            func: e
        }, a));
    };
    TaskView.prototype.loadTaskData = function () {
        var t = TaskModel_1.TaskModel.getInstance();
        0 === this._currentStage && (this._currentStage = t.getCurrentStage());
        this.checkAndAutoReceiveStageReward();
        this.updateStageProgress();
        this._taskDataList = this.prepareTaskData();
        this._taskListView && this._taskListView.refreshList(this._taskDataList);
        this.updateStageButtonState();
    };
    TaskView.prototype.prepareTaskData = function () {
        var t, e, a = TaskModel_1.TaskModel.getInstance(), o = this._currentStage;
        if (!a.getStageData(o))
            return [];
        var i = [], r = a.getTaskSort(o);
        try {
            for (var n = __values(r), l = n.next(); !l.done; l = n.next()) {
                var c = l.value, u = a.getTaskInfo(c);
                if (u && u.taskId && 0 !== u.taskId.length) {
                    var d = o - 1, f = u.taskId[d] || u.taskId[0], h = a.getTaskConfig(f);
                    if (h) {
                        var g = u.taskMax[d] || h.TaskValue2, T = Math.min(u.taskProgress, g), y = u.taskProgress >= g, k = {
                            taskType: c,
                            taskId: f,
                            taskDesc: h.TaskDes || "任务" + c,
                            currentProgress: T,
                            targetProgress: g,
                            isCompleted: y,
                            canReceiveReward: false,
                            targetCardId: u.targetValue
                        };
                        i.push(k);
                    }
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (e = n.return) && e.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return i;
    };
    TaskView.prototype.calculateStageProgress = function () {
        var t, e, a, o, i = TaskModel_1.TaskModel.getInstance(), r = Object.keys(i.getTaskData().dictTaskProgress), n = [0, 0, 0];
        try {
            for (var l = __values(r), c = l.next(); !c.done; c = l.next()) {
                var u = c.value, d = parseInt(u);
                if ((m = i.getTaskInfo(d)) && m.taskMax && m.taskMax.length >= 3) {
                    n[0] += m.taskMax[0] || 0;
                    n[1] += (m.taskMax[1] || 0) - (m.taskMax[0] || 0);
                    n[2] += (m.taskMax[2] || 0) - (m.taskMax[1] || 0);
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (e = l.return) && e.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var f = 0, h = i.getCurrentStage();
        h > 1 && (f = i.STAGE_WEIGHTS[h - 2]);
        if (h >= 1 && h <= 3) {
            var g = 0, T = n[h - 1];
            try {
                for (var y = __values(r), k = y.next(); !k.done; k = y.next()) {
                    var m;
                    u = k.value, d = parseInt(u);
                    if ((m = i.getTaskInfo(d)) && m.taskMax) {
                        var _ = m.taskProgress || 0, v = h - 1, w = v > 0 && m.taskMax[v - 1] || 0, C = m.taskMax[v] || 0;
                        g += Math.max(0, Math.min(_ - w, C - w));
                    }
                }
            }
            catch (t) {
                a = {
                    error: t
                };
            }
            finally {
                try {
                    k && !k.done && (o = y.return) && o.call(y);
                }
                finally {
                    if (a)
                        throw a.error;
                }
            }
            if (T > 0) {
                var b = g / T, I = h > 1 ? i.STAGE_WEIGHTS[h - 2] : 0;
                f += b * (i.STAGE_WEIGHTS[h - 1] - I);
            }
        }
        return f;
    };
    TaskView.prototype.updateStageProgress = function (t, e) {
        if (t === void 0) { t = false; }
        if (e === void 0) { e = 0.3; }
        var a = this;
        return new Promise(function (o) {
            var i = TaskModel_1.TaskModel.getInstance(), r = a.calculateStageProgress(i.getCurrentStage());
            if (a._progressBar) {
                var n = Math.min(1, Math.max(0, r));
                if (t) {
                    var s = a._progressBar.progress;
                    a.playProgressBarAnimation(s, n, e).then(function () {
                        o();
                    });
                }
                else {
                    a._progressBar.progress = n;
                    o();
                }
            }
            else
                o();
        });
    };
    TaskView.prototype.playProgressBarAnimation = function (t, e, a) {
        var o = this;
        return new Promise(function (i) {
            if (o._progressBar && t !== e) {
                var r = {
                    value: t
                };
                cc.tween(r).to(a, {
                    value: e
                }, {
                    easing: "sineInOut",
                    progress: function (t, e, a, i) {
                        var r = t + (e - t) * i;
                        o._progressBar && cc.isValid(o._progressBar.node) && (o._progressBar.progress = r);
                        return r;
                    }
                }).call(function () {
                    o._progressBar && cc.isValid(o._progressBar.node) && (o._progressBar.progress = e);
                    i();
                }).start();
            }
            else
                i();
        });
    };
    TaskView.prototype.shouldShowProgressAnimation = function () {
        return true;
    };
    TaskView.prototype.checkAndAutoReceiveStageReward = function () {
        var t = this, e = TaskModel_1.TaskModel.getInstance(), a = e.getCurrentStage(), o = e.getStageData(a);
        if (o && o.stageState === TaskData_1.ETaskStageState.Wait) {
            if (this.shouldShowProgressAnimation()) {
                this.updateStageProgress(true, 0.5).then(function () {
                    t.openTaskRewardUI(a);
                });
            }
            else {
                this.openTaskRewardUI(a);
            }
            return true;
        }
        return false;
    };
    TaskView.prototype.onCloseBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotDailyTask(DGameBtnClick_1.EDailyTaskClickType.Closed);
        this.delegate.close();
    };
    TaskView.prototype.refreshTaskList = function () {
        this.loadTaskData();
    };
    TaskView.prototype.advanceToNextStage = function () {
        var t = TaskModel_1.TaskModel.getInstance();
        this._currentStage = t.getCurrentStage();
        this.loadTaskData();
    };
    TaskView.prototype.onStageBtnClick = function (t) {
        this.stageBtnCanClick(t) && this.switchToStage(t);
    };
    TaskView.prototype.stageBtnCanClick = function (t) {
        return this._currentStage !== t;
    };
    TaskView.prototype.onLockClick = function (t) {
        this.openTaskTipUI(t);
    };
    TaskView.prototype.onBoxOpenClick = function (t) {
        var e = TaskModel_1.TaskModel.getInstance();
        if (e) {
            var a = e.getStageData(t);
            a && a.stageState === TaskData_1.ETaskStageState.Wait && e.getStageBoxId(t) && this.openTaskRewardUI(t);
        }
    };
    TaskView.prototype.openTaskRewardUI = function (t) {
        var e = this;
        if (cc.isValid(this._taskRewardUI))
            this.showTaskReward(t);
        else {
            if (this._taskRewardUILoading)
                return;
            this._taskRewardUILoading = true;
            TaskRewardView_1.default.createUI().then(function (a) {
                e._taskRewardUILoading = false;
                if (cc.isValid(e.node)) {
                    e.node.addChild(a);
                    e._taskRewardUI = a;
                    e.showTaskReward(t);
                }
            }).catch(function () {
                e._taskRewardUILoading = false;
            });
        }
    };
    TaskView.prototype.showTaskReward = function (t) {
        var e, a = null === (e = this._taskRewardUI) || void 0 === e ? void 0 : e.getComponent(TaskRewardView_1.default);
        if (a && cc.isValid(this._taskRewardUI)) {
            a.delegate = this.delegate;
            this._taskRewardUI.active = true;
            a.showTaskReward(t);
        }
    };
    TaskView.prototype.openTaskTipUI = function (t) {
        var e = this;
        if (cc.isValid(this._taskTipUI))
            this.showTaskTip(t);
        else {
            if (this._taskTipUILoading)
                return;
            this._taskTipUILoading = true;
            TaskTipView_1.default.createUI().then(function (a) {
                e._taskTipUILoading = false;
                if (cc.isValid(e.node)) {
                    e.node.addChild(a);
                    e._taskTipUI = a;
                    e.showTaskTip(t);
                }
            }).catch(function () {
                e._taskTipUILoading = false;
            });
        }
    };
    TaskView.prototype.showTaskTip = function (t) {
        var e, a = null === (e = this._taskTipUI) || void 0 === e ? void 0 : e.getComponent(TaskTipView_1.default);
        if (a && cc.isValid(this._taskTipUI)) {
            var o = Math.max(t - 1, 1), i = I18NStrings_1.default.get("DailyQuest_UI_Phase_Lock", "Complete Stage {0} to unlock new quests"), r = I18NStrings_1.default.stringFormat(i, o);
            a.showTip(r);
        }
    };
    TaskView.prototype.onBoxCloseClick = function (t) {
        var e = TaskModel_1.TaskModel.getInstance();
        DGameBtnClick_1.DotGameBtnClick.dotDailyTask(DGameBtnClick_1.EDailyTaskClickType.StageTreasureChest, t);
        var a = null;
        if (1 === t) {
            a = this._boxClose1;
        }
        else {
            if (2 === t) {
                a = this._boxClose2;
            }
            else {
                3 === t && (a = this._boxClose3);
            }
        }
        if (cc.isValid(a)) {
            var o = a.convertToWorldSpaceAR(cc.v2(0, 0)), i = cc.v3(o.x, o.y, 0), r = e.getStageBoxData(t);
            r && this.showTaskBoxTips(i, r);
        }
    };
    TaskView.prototype.switchToStage = function (t) {
        this._currentStage = t;
        this.updateStageButtonState();
        this.loadTaskData();
    };
    TaskView.prototype.updateStageButtonState = function () {
        var t = TaskModel_1.TaskModel.getInstance();
        if (t) {
            var e = t.getCurrentStage(), a = 1 === this._currentStage;
            this._stageBtn1 && (this._stageBtn1.active = !a);
            this._stageBtn1Select && (this._stageBtn1Select.active = a);
            var o = 2 > e, i = 2 === this._currentStage && !o;
            this._stageBtn2 && (this._stageBtn2.active = !i && !o);
            this._stageBtn2Select && (this._stageBtn2Select.active = i);
            this._btn2Lock && (this._btn2Lock.active = o);
            var r = 3 > e, n = 3 === this._currentStage && !r;
            this._stageBtn3 && (this._stageBtn3.active = !n && !r);
            this._stageBtn3Select && (this._stageBtn3Select.active = n);
            this._btn3Lock && (this._btn3Lock.active = r);
            this.updateBoxState();
        }
    };
    TaskView.prototype.updateBoxState = function () {
        var t = TaskModel_1.TaskModel.getInstance();
        if (t) {
            var e = t.getStageData(1);
            if (e) {
                var a = e.stageState === TaskData_1.ETaskStageState.Finish;
                this._boxOpen1 && (this._boxOpen1.active = a);
                this._boxClose1 && (this._boxClose1.active = !a);
            }
            var o = t.getStageData(2);
            if (o) {
                var i = o.stageState === TaskData_1.ETaskStageState.Finish;
                this._boxOpen2 && (this._boxOpen2.active = i);
                this._boxClose2 && (this._boxClose2.active = !i);
            }
            var r = t.getStageData(3);
            if (r) {
                var n = r.stageState === TaskData_1.ETaskStageState.Finish;
                this._boxOpen3 && (this._boxOpen3.active = n);
                this._boxClose3 && (this._boxClose3.active = !n);
            }
        }
    };
    TaskView.prototype.showTaskBoxTips = function (t, e) {
        var a = this;
        this.removeTaskBoxTips();
        TaskBoxTipView_1.default.createUI().then(function (o) {
            if (cc.isValid(a.node)) {
                var i = a.node, r = i.convertToNodeSpaceAR(t);
                o.parent = i;
                o.setPosition(r.x, r.y + 100);
                var n = o.getComponent(TaskBoxTipView_1.default);
                n.initBoxReward(e);
                n.playIn();
                a._taskBoxTipsNode = o;
            }
        }).catch(function (t) {
            console.error("[TaskView] 创建宝箱提示失败: " + ((null == t ? void 0 : t.message) || "TaskBoxTipView加载失败"));
        });
    };
    TaskView.prototype.removeTaskBoxTips = function () {
        cc.isValid(this._taskBoxTipsNode) && this._taskBoxTipsNode.destroy();
        this._taskBoxTipsNode = null;
    };
    TaskView.prototype.getTaskListView = function () {
        return this._taskListView;
    };
    TaskView.prototype.onDestroy = function () {
        this.removeTaskBoxTips();
        _super.prototype.onDestroy.call(this);
    };
    TaskView.prefabUrl = "prefabs/task/Task";
    __decorate([
        mj.traitEvent("TaskView_initUI")
    ], TaskView.prototype, "initUI", null);
    __decorate([
        mj.traitEvent("TaskView_addLockBtn")
    ], TaskView.prototype, "addButtonClickEvent", null);
    __decorate([
        mj.traitEvent("TaskView_calcStgProg")
    ], TaskView.prototype, "calculateStageProgress", null);
    __decorate([
        mj.traitEvent("TaskView_shouldShowAnim")
    ], TaskView.prototype, "shouldShowProgressAnimation", null);
    __decorate([
        mj.traitEvent("TaskView_autoReceive")
    ], TaskView.prototype, "checkAndAutoReceiveStageReward", null);
    __decorate([
        mj.traitEvent("TaskView_stageBtnClick")
    ], TaskView.prototype, "stageBtnCanClick", null);
    __decorate([
        mj.traitEvent("TaskView_onDestroy")
    ], TaskView.prototype, "onDestroy", null);
    TaskView = __decorate([
        mj.class
    ], TaskView);
    return TaskView;
}(UIView_1.default));
exports.default = TaskView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy92aWV3L1Rhc2tWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBeUU7QUFDekUsa0VBQTZEO0FBQzdELGdEQUErQztBQUMvQyx3Q0FBOEM7QUFDOUMsK0NBQTBDO0FBQzFDLG1EQUE4QztBQUM5Qyw2Q0FBd0M7QUFDeEMsbURBQThDO0FBQzlDLHVFQUE2RjtBQUU3RjtJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQStlQztRQTllQyxrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixzQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLDBCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQix1QkFBaUIs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QUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztvREFHdkM7SUE4SkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDOzZDQUluQztJQTlla0IsUUFBUTtRQUQ1QixFQUFFLENBQUMsS0FBSztPQUNZLFFBQVEsQ0ErZTVCO0lBQUQsZUFBQztDQS9lRCxBQStlQyxDQS9lcUMsZ0JBQU0sR0ErZTNDO2tCQS9lb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCB7IFRhc2tNb2RlbCB9IGZyb20gJy4uL21vZGVsL1Rhc2tNb2RlbCc7XG5pbXBvcnQgeyBFVGFza1N0YWdlU3RhdGUgfSBmcm9tICcuLi9UYXNrRGF0YSc7XG5pbXBvcnQgVGFza0xpc3RWaWV3IGZyb20gJy4vVGFza0xpc3RWaWV3JztcbmltcG9ydCBUYXNrUmV3YXJkVmlldyBmcm9tICcuL1Rhc2tSZXdhcmRWaWV3JztcbmltcG9ydCBUYXNrVGlwVmlldyBmcm9tICcuL1Rhc2tUaXBWaWV3JztcbmltcG9ydCBUYXNrQm94VGlwVmlldyBmcm9tICcuL1Rhc2tCb3hUaXBWaWV3JztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRURhaWx5VGFza0NsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIF9jb250ZW50Tm9kZSA9IG51bGw7XG4gIF90b3BOb2RlID0gbnVsbDtcbiAgX2Nsb3NlQnRuID0gbnVsbDtcbiAgX3Njcm9sbFZpZXcgPSBudWxsO1xuICBfcHJvZ3Jlc3NCYXIgPSBudWxsO1xuICBfc3RhZ2VCdG4xID0gbnVsbDtcbiAgX3N0YWdlQnRuMiA9IG51bGw7XG4gIF9zdGFnZUJ0bjMgPSBudWxsO1xuICBfc3RhZ2VCdG4xU2VsZWN0ID0gbnVsbDtcbiAgX3N0YWdlQnRuMlNlbGVjdCA9IG51bGw7XG4gIF9zdGFnZUJ0bjNTZWxlY3QgPSBudWxsO1xuICBfYnRuMkxvY2sgPSBudWxsO1xuICBfYnRuM0xvY2sgPSBudWxsO1xuICBfYm94T3BlbjEgPSBudWxsO1xuICBfYm94T3BlbjIgPSBudWxsO1xuICBfYm94T3BlbjMgPSBudWxsO1xuICBfYm94Q2xvc2UxID0gbnVsbDtcbiAgX2JveENsb3NlMiA9IG51bGw7XG4gIF9ib3hDbG9zZTMgPSBudWxsO1xuICBfdGFza0xpc3RWaWV3ID0gbnVsbDtcbiAgX3Rhc2tSZXdhcmRVSSA9IG51bGw7XG4gIF90YXNrUmV3YXJkVUlMb2FkaW5nID0gZmFsc2U7XG4gIF90YXNrVGlwVUkgPSBudWxsO1xuICBfdGFza1RpcFVJTG9hZGluZyA9IGZhbHNlO1xuICBfdGFza0JveFRpcHNOb2RlID0gbnVsbDtcbiAgX3Rhc2tEYXRhTGlzdCA9IFtdO1xuICBfY3VycmVudFN0YWdlID0gMDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy90YXNrL1Rhc2tcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGFza1ZpZXdfaW5pdFVJXCIpXG4gIGluaXRVSSgpIHtcbiAgICB2YXIgdCwgZSwgYTtcbiAgICB0aGlzLl9jb250ZW50Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XG4gICAgdGhpcy5fdG9wTm9kZSA9IGNjLmZpbmQoXCJjb250ZW50L3RvcFwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX2Nsb3NlQnRuID0gbnVsbCA9PT0gKHQgPSBjYy5maW5kKFwiY29udGVudC90b3AvYnRuX2Nsb3NlXCIsIHRoaXMubm9kZSkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgdGhpcy5fc2Nyb2xsVmlldyA9IG51bGwgPT09IChlID0gY2MuZmluZChcImNvbnRlbnQvc2Nyb2xsVmlld1wiLCB0aGlzLm5vZGUpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcbiAgICB0aGlzLl9wcm9ncmVzc0JhciA9IG51bGwgPT09IChhID0gY2MuZmluZChcImNvbnRlbnQvcHJvZ3Jlc3NCYXJcIiwgdGhpcy5ub2RlKSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgIHRoaXMuX3N0YWdlQnRuMSA9IGNjLmZpbmQoXCJjb250ZW50L2J0bnMvYnRuMVwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX3N0YWdlQnRuMiA9IGNjLmZpbmQoXCJjb250ZW50L2J0bnMvYnRuMlwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX3N0YWdlQnRuMyA9IGNjLmZpbmQoXCJjb250ZW50L2J0bnMvYnRuM1wiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX3N0YWdlQnRuMVNlbGVjdCA9IGNjLmZpbmQoXCJjb250ZW50L2J0bnMvYnRuMV9zZWxlY3RcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9zdGFnZUJ0bjJTZWxlY3QgPSBjYy5maW5kKFwiY29udGVudC9idG5zL2J0bjJfc2VsZWN0XCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fc3RhZ2VCdG4zU2VsZWN0ID0gY2MuZmluZChcImNvbnRlbnQvYnRucy9idG4zX3NlbGVjdFwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX2J0bjJMb2NrID0gY2MuZmluZChcImNvbnRlbnQvYnRucy9idG4yX2xvY2tcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9idG4zTG9jayA9IGNjLmZpbmQoXCJjb250ZW50L2J0bnMvYnRuM19sb2NrXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fYm94T3BlbjEgPSBjYy5maW5kKFwiY29udGVudC9ib3gvc3BfYm94X29wZW4xXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fYm94T3BlbjIgPSBjYy5maW5kKFwiY29udGVudC9ib3gvc3BfYm94X29wZW4yXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fYm94T3BlbjMgPSBjYy5maW5kKFwiY29udGVudC9ib3gvc3BfYm94X29wZW4zXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fYm94Q2xvc2UxID0gY2MuZmluZChcImNvbnRlbnQvYm94L2J0bl9ib3hfY2xvc2UxXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fYm94Q2xvc2UyID0gY2MuZmluZChcImNvbnRlbnQvYm94L2J0bl9ib3hfY2xvc2UyXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fYm94Q2xvc2UzID0gY2MuZmluZChcImNvbnRlbnQvYm94L2J0bl9ib3hfY2xvc2UzXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5pbml0VGFza0xpc3RWaWV3KCk7XG4gICAgdGhpcy5zZXRTdGFnZUJ0bkkxOE4oKTtcbiAgfVxuICBzZXRTdGFnZUJ0bkkxOE4oKSB7XG4gICAgdGhpcy5zZXRCdXR0b25JMThOKHRoaXMuX3N0YWdlQnRuMSwgMSk7XG4gICAgdGhpcy5zZXRCdXR0b25JMThOKHRoaXMuX3N0YWdlQnRuMiwgMik7XG4gICAgdGhpcy5zZXRCdXR0b25JMThOKHRoaXMuX3N0YWdlQnRuMywgMyk7XG4gICAgdGhpcy5zZXRCdXR0b25JMThOKHRoaXMuX3N0YWdlQnRuMVNlbGVjdCwgMSk7XG4gICAgdGhpcy5zZXRCdXR0b25JMThOKHRoaXMuX3N0YWdlQnRuMlNlbGVjdCwgMik7XG4gICAgdGhpcy5zZXRCdXR0b25JMThOKHRoaXMuX3N0YWdlQnRuM1NlbGVjdCwgMyk7XG4gIH1cbiAgc2V0QnV0dG9uSTE4Tih0LCBlKSB7XG4gICAgaWYgKHQgJiYgY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdmFyIGEgPSBjYy5maW5kKFwiQmFja2dyb3VuZC9sYWJlbFwiLCB0KTtcbiAgICAgIGEgJiYgSTE4TlN0cmluZ3Muc2V0VGV4dChhLCBcIlwiLCBcIkRhaWx5UXVlc3RfVUlfUGhhc2VcIiwgW2VdKTtcbiAgICB9XG4gIH1cbiAgaW5pdFRhc2tMaXN0VmlldygpIHtcbiAgICB0aGlzLl9zY3JvbGxWaWV3ICYmICh0aGlzLl90YXNrTGlzdFZpZXcgPSB0aGlzLl9zY3JvbGxWaWV3LmFkZENvbXBvbmVudChUYXNrTGlzdFZpZXcpKTtcbiAgfVxuICByZWdpc3RlckV2ZW50cygpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5fY2xvc2VCdG4gJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2Nsb3NlQnRuLm5vZGUsIHRoaXMub25DbG9zZUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX3N0YWdlQnRuMSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fc3RhZ2VCdG4xLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5vblN0YWdlQnRuQ2xpY2soMSk7XG4gICAgfSk7XG4gICAgdGhpcy5fc3RhZ2VCdG4yICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9zdGFnZUJ0bjIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0Lm9uU3RhZ2VCdG5DbGljaygyKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zdGFnZUJ0bjMgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX3N0YWdlQnRuMywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQub25TdGFnZUJ0bkNsaWNrKDMpO1xuICAgIH0pO1xuICAgIHRoaXMuX3N0YWdlQnRuMVNlbGVjdCAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fc3RhZ2VCdG4xU2VsZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5vblN0YWdlQnRuQ2xpY2soMSk7XG4gICAgfSk7XG4gICAgdGhpcy5fc3RhZ2VCdG4yU2VsZWN0ICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9zdGFnZUJ0bjJTZWxlY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0Lm9uU3RhZ2VCdG5DbGljaygyKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zdGFnZUJ0bjNTZWxlY3QgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX3N0YWdlQnRuM1NlbGVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQub25TdGFnZUJ0bkNsaWNrKDMpO1xuICAgIH0pO1xuICAgIHRoaXMuX2J0bjJMb2NrICYmIHRoaXMuYWRkQnV0dG9uQ2xpY2tFdmVudCh0aGlzLl9idG4yTG9jaywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQub25Mb2NrQ2xpY2soMik7XG4gICAgfSk7XG4gICAgdGhpcy5fYnRuM0xvY2sgJiYgdGhpcy5hZGRCdXR0b25DbGlja0V2ZW50KHRoaXMuX2J0bjNMb2NrLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5vbkxvY2tDbGljaygzKTtcbiAgICB9KTtcbiAgICB0aGlzLl9ib3hPcGVuMSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fYm94T3BlbjEsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0Lm9uQm94T3BlbkNsaWNrKDEpO1xuICAgIH0pO1xuICAgIHRoaXMuX2JveE9wZW4yICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9ib3hPcGVuMiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQub25Cb3hPcGVuQ2xpY2soMik7XG4gICAgfSk7XG4gICAgdGhpcy5fYm94T3BlbjMgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2JveE9wZW4zLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5vbkJveE9wZW5DbGljaygzKTtcbiAgICB9KTtcbiAgICB0aGlzLl9ib3hDbG9zZTEgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2JveENsb3NlMSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQub25Cb3hDbG9zZUNsaWNrKDEpO1xuICAgIH0pO1xuICAgIHRoaXMuX2JveENsb3NlMiAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fYm94Q2xvc2UyLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5vbkJveENsb3NlQ2xpY2soMik7XG4gICAgfSk7XG4gICAgdGhpcy5fYm94Q2xvc2UzICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9ib3hDbG9zZTMsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0Lm9uQm94Q2xvc2VDbGljaygzKTtcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tWaWV3X2FkZExvY2tCdG5cIilcbiAgYWRkQnV0dG9uQ2xpY2tFdmVudCh0LCBlLCBhID0ge30pIHtcbiAgICB0ICYmIHRoaXMuT25CdXR0b25DbGljayh0LCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGZ1bmM6IGVcbiAgICB9LCBhKSk7XG4gIH1cbiAgbG9hZFRhc2tEYXRhKCkge1xuICAgIHZhciB0ID0gVGFza01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgMCA9PT0gdGhpcy5fY3VycmVudFN0YWdlICYmICh0aGlzLl9jdXJyZW50U3RhZ2UgPSB0LmdldEN1cnJlbnRTdGFnZSgpKTtcbiAgICB0aGlzLmNoZWNrQW5kQXV0b1JlY2VpdmVTdGFnZVJld2FyZCgpO1xuICAgIHRoaXMudXBkYXRlU3RhZ2VQcm9ncmVzcygpO1xuICAgIHRoaXMuX3Rhc2tEYXRhTGlzdCA9IHRoaXMucHJlcGFyZVRhc2tEYXRhKCk7XG4gICAgdGhpcy5fdGFza0xpc3RWaWV3ICYmIHRoaXMuX3Rhc2tMaXN0Vmlldy5yZWZyZXNoTGlzdCh0aGlzLl90YXNrRGF0YUxpc3QpO1xuICAgIHRoaXMudXBkYXRlU3RhZ2VCdXR0b25TdGF0ZSgpO1xuICB9XG4gIHByZXBhcmVUYXNrRGF0YSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUsXG4gICAgICBhID0gVGFza01vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICBvID0gdGhpcy5fY3VycmVudFN0YWdlO1xuICAgIGlmICghYS5nZXRTdGFnZURhdGEobykpIHJldHVybiBbXTtcbiAgICB2YXIgaSA9IFtdLFxuICAgICAgciA9IGEuZ2V0VGFza1NvcnQobyk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyhyKSwgbCA9IG4ubmV4dCgpOyAhbC5kb25lOyBsID0gbi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBsLnZhbHVlLFxuICAgICAgICAgIHUgPSBhLmdldFRhc2tJbmZvKGMpO1xuICAgICAgICBpZiAodSAmJiB1LnRhc2tJZCAmJiAwICE9PSB1LnRhc2tJZC5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgZCA9IG8gLSAxLFxuICAgICAgICAgICAgZiA9IHUudGFza0lkW2RdIHx8IHUudGFza0lkWzBdLFxuICAgICAgICAgICAgaCA9IGEuZ2V0VGFza0NvbmZpZyhmKTtcbiAgICAgICAgICBpZiAoaCkge1xuICAgICAgICAgICAgdmFyIGcgPSB1LnRhc2tNYXhbZF0gfHwgaC5UYXNrVmFsdWUyLFxuICAgICAgICAgICAgICBUID0gTWF0aC5taW4odS50YXNrUHJvZ3Jlc3MsIGcpLFxuICAgICAgICAgICAgICB5ID0gdS50YXNrUHJvZ3Jlc3MgPj0gZyxcbiAgICAgICAgICAgICAgayA9IHtcbiAgICAgICAgICAgICAgICB0YXNrVHlwZTogYyxcbiAgICAgICAgICAgICAgICB0YXNrSWQ6IGYsXG4gICAgICAgICAgICAgICAgdGFza0Rlc2M6IGguVGFza0RlcyB8fCBcIuS7u+WKoVwiICsgYyxcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvZ3Jlc3M6IFQsXG4gICAgICAgICAgICAgICAgdGFyZ2V0UHJvZ3Jlc3M6IGcsXG4gICAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IHksXG4gICAgICAgICAgICAgICAgY2FuUmVjZWl2ZVJld2FyZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdGFyZ2V0Q2FyZElkOiB1LnRhcmdldFZhbHVlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpLnB1c2goayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGwgJiYgIWwuZG9uZSAmJiAoZSA9IG4ucmV0dXJuKSAmJiBlLmNhbGwobik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrVmlld19jYWxjU3RnUHJvZ1wiKVxuICBjYWxjdWxhdGVTdGFnZVByb2dyZXNzKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIGEsXG4gICAgICBvLFxuICAgICAgaSA9IFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgciA9IE9iamVjdC5rZXlzKGkuZ2V0VGFza0RhdGEoKS5kaWN0VGFza1Byb2dyZXNzKSxcbiAgICAgIG4gPSBbMCwgMCwgMF07XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyhyKSwgYyA9IGwubmV4dCgpOyAhYy5kb25lOyBjID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBjLnZhbHVlLFxuICAgICAgICAgIGQgPSBwYXJzZUludCh1KTtcbiAgICAgICAgaWYgKChtID0gaS5nZXRUYXNrSW5mbyhkKSkgJiYgbS50YXNrTWF4ICYmIG0udGFza01heC5sZW5ndGggPj0gMykge1xuICAgICAgICAgIG5bMF0gKz0gbS50YXNrTWF4WzBdIHx8IDA7XG4gICAgICAgICAgblsxXSArPSAobS50YXNrTWF4WzFdIHx8IDApIC0gKG0udGFza01heFswXSB8fCAwKTtcbiAgICAgICAgICBuWzJdICs9IChtLnRhc2tNYXhbMl0gfHwgMCkgLSAobS50YXNrTWF4WzFdIHx8IDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAoZSA9IGwucmV0dXJuKSAmJiBlLmNhbGwobCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGYgPSAwLFxuICAgICAgaCA9IGkuZ2V0Q3VycmVudFN0YWdlKCk7XG4gICAgaCA+IDEgJiYgKGYgPSBpLlNUQUdFX1dFSUdIVFNbaCAtIDJdKTtcbiAgICBpZiAoaCA+PSAxICYmIGggPD0gMykge1xuICAgICAgdmFyIGcgPSAwLFxuICAgICAgICBUID0gbltoIC0gMV07XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciB5ID0gX192YWx1ZXMociksIGsgPSB5Lm5leHQoKTsgIWsuZG9uZTsgayA9IHkubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIG07XG4gICAgICAgICAgdSA9IGsudmFsdWUsIGQgPSBwYXJzZUludCh1KTtcbiAgICAgICAgICBpZiAoKG0gPSBpLmdldFRhc2tJbmZvKGQpKSAmJiBtLnRhc2tNYXgpIHtcbiAgICAgICAgICAgIHZhciBfID0gbS50YXNrUHJvZ3Jlc3MgfHwgMCxcbiAgICAgICAgICAgICAgdiA9IGggLSAxLFxuICAgICAgICAgICAgICB3ID0gdiA+IDAgJiYgbS50YXNrTWF4W3YgLSAxXSB8fCAwLFxuICAgICAgICAgICAgICBDID0gbS50YXNrTWF4W3ZdIHx8IDA7XG4gICAgICAgICAgICBnICs9IE1hdGgubWF4KDAsIE1hdGgubWluKF8gLSB3LCBDIC0gdykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICBhID0ge1xuICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGsgJiYgIWsuZG9uZSAmJiAobyA9IHkucmV0dXJuKSAmJiBvLmNhbGwoeSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGEpIHRocm93IGEuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChUID4gMCkge1xuICAgICAgICB2YXIgYiA9IGcgLyBULFxuICAgICAgICAgIEkgPSBoID4gMSA/IGkuU1RBR0VfV0VJR0hUU1toIC0gMl0gOiAwO1xuICAgICAgICBmICs9IGIgKiAoaS5TVEFHRV9XRUlHSFRTW2ggLSAxXSAtIEkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZjtcbiAgfVxuICB1cGRhdGVTdGFnZVByb2dyZXNzKHQgPSBmYWxzZSwgZSA9IDAuMykge1xuICAgIHZhciBhID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBpID0gVGFza01vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICAgIHIgPSBhLmNhbGN1bGF0ZVN0YWdlUHJvZ3Jlc3MoaS5nZXRDdXJyZW50U3RhZ2UoKSk7XG4gICAgICBpZiAoYS5fcHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgdmFyIG4gPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCByKSk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgdmFyIHMgPSBhLl9wcm9ncmVzc0Jhci5wcm9ncmVzcztcbiAgICAgICAgICBhLnBsYXlQcm9ncmVzc0JhckFuaW1hdGlvbihzLCBuLCBlKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG8oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhLl9wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IG47XG4gICAgICAgICAgbygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgbygpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlQcm9ncmVzc0JhckFuaW1hdGlvbih0LCBlLCBhKSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoaSkge1xuICAgICAgaWYgKG8uX3Byb2dyZXNzQmFyICYmIHQgIT09IGUpIHtcbiAgICAgICAgdmFyIHIgPSB7XG4gICAgICAgICAgdmFsdWU6IHRcbiAgICAgICAgfTtcbiAgICAgICAgY2MudHdlZW4ocikudG8oYSwge1xuICAgICAgICAgIHZhbHVlOiBlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwic2luZUluT3V0XCIsXG4gICAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uICh0LCBlLCBhLCBpKSB7XG4gICAgICAgICAgICB2YXIgciA9IHQgKyAoZSAtIHQpICogaTtcbiAgICAgICAgICAgIG8uX3Byb2dyZXNzQmFyICYmIGNjLmlzVmFsaWQoby5fcHJvZ3Jlc3NCYXIubm9kZSkgJiYgKG8uX3Byb2dyZXNzQmFyLnByb2dyZXNzID0gcik7XG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG8uX3Byb2dyZXNzQmFyICYmIGNjLmlzVmFsaWQoby5fcHJvZ3Jlc3NCYXIubm9kZSkgJiYgKG8uX3Byb2dyZXNzQmFyLnByb2dyZXNzID0gZSk7XG4gICAgICAgICAgaSgpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgfSBlbHNlIGkoKTtcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tWaWV3X3Nob3VsZFNob3dBbmltXCIpXG4gIHNob3VsZFNob3dQcm9ncmVzc0FuaW1hdGlvbigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tWaWV3X2F1dG9SZWNlaXZlXCIpXG4gIGNoZWNrQW5kQXV0b1JlY2VpdmVTdGFnZVJld2FyZCgpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBlID0gVGFza01vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICBhID0gZS5nZXRDdXJyZW50U3RhZ2UoKSxcbiAgICAgIG8gPSBlLmdldFN0YWdlRGF0YShhKTtcbiAgICBpZiAobyAmJiBvLnN0YWdlU3RhdGUgPT09IEVUYXNrU3RhZ2VTdGF0ZS5XYWl0KSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRTaG93UHJvZ3Jlc3NBbmltYXRpb24oKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YWdlUHJvZ3Jlc3ModHJ1ZSwgMC41KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0Lm9wZW5UYXNrUmV3YXJkVUkoYSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGVuVGFza1Jld2FyZFVJKGEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBvbkNsb3NlQnRuQ2xpY2soKSB7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdERhaWx5VGFzayhFRGFpbHlUYXNrQ2xpY2tUeXBlLkNsb3NlZCk7XG4gICAgdGhpcy5kZWxlZ2F0ZS5jbG9zZSgpO1xuICB9XG4gIHJlZnJlc2hUYXNrTGlzdCgpIHtcbiAgICB0aGlzLmxvYWRUYXNrRGF0YSgpO1xuICB9XG4gIGFkdmFuY2VUb05leHRTdGFnZSgpIHtcbiAgICB2YXIgdCA9IFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMuX2N1cnJlbnRTdGFnZSA9IHQuZ2V0Q3VycmVudFN0YWdlKCk7XG4gICAgdGhpcy5sb2FkVGFza0RhdGEoKTtcbiAgfVxuICBvblN0YWdlQnRuQ2xpY2sodCkge1xuICAgIHRoaXMuc3RhZ2VCdG5DYW5DbGljayh0KSAmJiB0aGlzLnN3aXRjaFRvU3RhZ2UodCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrVmlld19zdGFnZUJ0bkNsaWNrXCIpXG4gIHN0YWdlQnRuQ2FuQ2xpY2sodCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50U3RhZ2UgIT09IHQ7XG4gIH1cbiAgb25Mb2NrQ2xpY2sodCkge1xuICAgIHRoaXMub3BlblRhc2tUaXBVSSh0KTtcbiAgfVxuICBvbkJveE9wZW5DbGljayh0KSB7XG4gICAgdmFyIGUgPSBUYXNrTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIGEgPSBlLmdldFN0YWdlRGF0YSh0KTtcbiAgICAgIGEgJiYgYS5zdGFnZVN0YXRlID09PSBFVGFza1N0YWdlU3RhdGUuV2FpdCAmJiBlLmdldFN0YWdlQm94SWQodCkgJiYgdGhpcy5vcGVuVGFza1Jld2FyZFVJKHQpO1xuICAgIH1cbiAgfVxuICBvcGVuVGFza1Jld2FyZFVJKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fdGFza1Jld2FyZFVJKSkgdGhpcy5zaG93VGFza1Jld2FyZCh0KTtlbHNlIHtcbiAgICAgIGlmICh0aGlzLl90YXNrUmV3YXJkVUlMb2FkaW5nKSByZXR1cm47XG4gICAgICB0aGlzLl90YXNrUmV3YXJkVUlMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIFRhc2tSZXdhcmRWaWV3LmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAoYSkge1xuICAgICAgICBlLl90YXNrUmV3YXJkVUlMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGUubm9kZSkpIHtcbiAgICAgICAgICBlLm5vZGUuYWRkQ2hpbGQoYSk7XG4gICAgICAgICAgZS5fdGFza1Jld2FyZFVJID0gYTtcbiAgICAgICAgICBlLnNob3dUYXNrUmV3YXJkKHQpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuX3Rhc2tSZXdhcmRVSUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzaG93VGFza1Jld2FyZCh0KSB7XG4gICAgdmFyIGUsXG4gICAgICBhID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90YXNrUmV3YXJkVUkpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q29tcG9uZW50KFRhc2tSZXdhcmRWaWV3KTtcbiAgICBpZiAoYSAmJiBjYy5pc1ZhbGlkKHRoaXMuX3Rhc2tSZXdhcmRVSSkpIHtcbiAgICAgIGEuZGVsZWdhdGUgPSB0aGlzLmRlbGVnYXRlO1xuICAgICAgdGhpcy5fdGFza1Jld2FyZFVJLmFjdGl2ZSA9IHRydWU7XG4gICAgICBhLnNob3dUYXNrUmV3YXJkKHQpO1xuICAgIH1cbiAgfVxuICBvcGVuVGFza1RpcFVJKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fdGFza1RpcFVJKSkgdGhpcy5zaG93VGFza1RpcCh0KTtlbHNlIHtcbiAgICAgIGlmICh0aGlzLl90YXNrVGlwVUlMb2FkaW5nKSByZXR1cm47XG4gICAgICB0aGlzLl90YXNrVGlwVUlMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIFRhc2tUaXBWaWV3LmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAoYSkge1xuICAgICAgICBlLl90YXNrVGlwVUlMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGUubm9kZSkpIHtcbiAgICAgICAgICBlLm5vZGUuYWRkQ2hpbGQoYSk7XG4gICAgICAgICAgZS5fdGFza1RpcFVJID0gYTtcbiAgICAgICAgICBlLnNob3dUYXNrVGlwKHQpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuX3Rhc2tUaXBVSUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzaG93VGFza1RpcCh0KSB7XG4gICAgdmFyIGUsXG4gICAgICBhID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90YXNrVGlwVUkpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q29tcG9uZW50KFRhc2tUaXBWaWV3KTtcbiAgICBpZiAoYSAmJiBjYy5pc1ZhbGlkKHRoaXMuX3Rhc2tUaXBVSSkpIHtcbiAgICAgIHZhciBvID0gTWF0aC5tYXgodCAtIDEsIDEpLFxuICAgICAgICBpID0gSTE4TlN0cmluZ3MuZ2V0KFwiRGFpbHlRdWVzdF9VSV9QaGFzZV9Mb2NrXCIsIFwiQ29tcGxldGUgU3RhZ2UgezB9IHRvIHVubG9jayBuZXcgcXVlc3RzXCIpLFxuICAgICAgICByID0gSTE4TlN0cmluZ3Muc3RyaW5nRm9ybWF0KGksIG8pO1xuICAgICAgYS5zaG93VGlwKHIpO1xuICAgIH1cbiAgfVxuICBvbkJveENsb3NlQ2xpY2sodCkge1xuICAgIHZhciBlID0gVGFza01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdERhaWx5VGFzayhFRGFpbHlUYXNrQ2xpY2tUeXBlLlN0YWdlVHJlYXN1cmVDaGVzdCwgdCk7XG4gICAgdmFyIGEgPSBudWxsO1xuICAgIGlmICgxID09PSB0KSB7XG4gICAgICBhID0gdGhpcy5fYm94Q2xvc2UxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoMiA9PT0gdCkge1xuICAgICAgICBhID0gdGhpcy5fYm94Q2xvc2UyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgMyA9PT0gdCAmJiAoYSA9IHRoaXMuX2JveENsb3NlMyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjYy5pc1ZhbGlkKGEpKSB7XG4gICAgICB2YXIgbyA9IGEuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSxcbiAgICAgICAgaSA9IGNjLnYzKG8ueCwgby55LCAwKSxcbiAgICAgICAgciA9IGUuZ2V0U3RhZ2VCb3hEYXRhKHQpO1xuICAgICAgciAmJiB0aGlzLnNob3dUYXNrQm94VGlwcyhpLCByKTtcbiAgICB9XG4gIH1cbiAgc3dpdGNoVG9TdGFnZSh0KSB7XG4gICAgdGhpcy5fY3VycmVudFN0YWdlID0gdDtcbiAgICB0aGlzLnVwZGF0ZVN0YWdlQnV0dG9uU3RhdGUoKTtcbiAgICB0aGlzLmxvYWRUYXNrRGF0YSgpO1xuICB9XG4gIHVwZGF0ZVN0YWdlQnV0dG9uU3RhdGUoKSB7XG4gICAgdmFyIHQgPSBUYXNrTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICBpZiAodCkge1xuICAgICAgdmFyIGUgPSB0LmdldEN1cnJlbnRTdGFnZSgpLFxuICAgICAgICBhID0gMSA9PT0gdGhpcy5fY3VycmVudFN0YWdlO1xuICAgICAgdGhpcy5fc3RhZ2VCdG4xICYmICh0aGlzLl9zdGFnZUJ0bjEuYWN0aXZlID0gIWEpO1xuICAgICAgdGhpcy5fc3RhZ2VCdG4xU2VsZWN0ICYmICh0aGlzLl9zdGFnZUJ0bjFTZWxlY3QuYWN0aXZlID0gYSk7XG4gICAgICB2YXIgbyA9IDIgPiBlLFxuICAgICAgICBpID0gMiA9PT0gdGhpcy5fY3VycmVudFN0YWdlICYmICFvO1xuICAgICAgdGhpcy5fc3RhZ2VCdG4yICYmICh0aGlzLl9zdGFnZUJ0bjIuYWN0aXZlID0gIWkgJiYgIW8pO1xuICAgICAgdGhpcy5fc3RhZ2VCdG4yU2VsZWN0ICYmICh0aGlzLl9zdGFnZUJ0bjJTZWxlY3QuYWN0aXZlID0gaSk7XG4gICAgICB0aGlzLl9idG4yTG9jayAmJiAodGhpcy5fYnRuMkxvY2suYWN0aXZlID0gbyk7XG4gICAgICB2YXIgciA9IDMgPiBlLFxuICAgICAgICBuID0gMyA9PT0gdGhpcy5fY3VycmVudFN0YWdlICYmICFyO1xuICAgICAgdGhpcy5fc3RhZ2VCdG4zICYmICh0aGlzLl9zdGFnZUJ0bjMuYWN0aXZlID0gIW4gJiYgIXIpO1xuICAgICAgdGhpcy5fc3RhZ2VCdG4zU2VsZWN0ICYmICh0aGlzLl9zdGFnZUJ0bjNTZWxlY3QuYWN0aXZlID0gbik7XG4gICAgICB0aGlzLl9idG4zTG9jayAmJiAodGhpcy5fYnRuM0xvY2suYWN0aXZlID0gcik7XG4gICAgICB0aGlzLnVwZGF0ZUJveFN0YXRlKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUJveFN0YXRlKCkge1xuICAgIHZhciB0ID0gVGFza01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKHQpIHtcbiAgICAgIHZhciBlID0gdC5nZXRTdGFnZURhdGEoMSk7XG4gICAgICBpZiAoZSkge1xuICAgICAgICB2YXIgYSA9IGUuc3RhZ2VTdGF0ZSA9PT0gRVRhc2tTdGFnZVN0YXRlLkZpbmlzaDtcbiAgICAgICAgdGhpcy5fYm94T3BlbjEgJiYgKHRoaXMuX2JveE9wZW4xLmFjdGl2ZSA9IGEpO1xuICAgICAgICB0aGlzLl9ib3hDbG9zZTEgJiYgKHRoaXMuX2JveENsb3NlMS5hY3RpdmUgPSAhYSk7XG4gICAgICB9XG4gICAgICB2YXIgbyA9IHQuZ2V0U3RhZ2VEYXRhKDIpO1xuICAgICAgaWYgKG8pIHtcbiAgICAgICAgdmFyIGkgPSBvLnN0YWdlU3RhdGUgPT09IEVUYXNrU3RhZ2VTdGF0ZS5GaW5pc2g7XG4gICAgICAgIHRoaXMuX2JveE9wZW4yICYmICh0aGlzLl9ib3hPcGVuMi5hY3RpdmUgPSBpKTtcbiAgICAgICAgdGhpcy5fYm94Q2xvc2UyICYmICh0aGlzLl9ib3hDbG9zZTIuYWN0aXZlID0gIWkpO1xuICAgICAgfVxuICAgICAgdmFyIHIgPSB0LmdldFN0YWdlRGF0YSgzKTtcbiAgICAgIGlmIChyKSB7XG4gICAgICAgIHZhciBuID0gci5zdGFnZVN0YXRlID09PSBFVGFza1N0YWdlU3RhdGUuRmluaXNoO1xuICAgICAgICB0aGlzLl9ib3hPcGVuMyAmJiAodGhpcy5fYm94T3BlbjMuYWN0aXZlID0gbik7XG4gICAgICAgIHRoaXMuX2JveENsb3NlMyAmJiAodGhpcy5fYm94Q2xvc2UzLmFjdGl2ZSA9ICFuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2hvd1Rhc2tCb3hUaXBzKHQsIGUpIHtcbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgdGhpcy5yZW1vdmVUYXNrQm94VGlwcygpO1xuICAgIFRhc2tCb3hUaXBWaWV3LmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAobykge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoYS5ub2RlKSkge1xuICAgICAgICB2YXIgaSA9IGEubm9kZSxcbiAgICAgICAgICByID0gaS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0KTtcbiAgICAgICAgby5wYXJlbnQgPSBpO1xuICAgICAgICBvLnNldFBvc2l0aW9uKHIueCwgci55ICsgMTAwKTtcbiAgICAgICAgdmFyIG4gPSBvLmdldENvbXBvbmVudChUYXNrQm94VGlwVmlldyk7XG4gICAgICAgIG4uaW5pdEJveFJld2FyZChlKTtcbiAgICAgICAgbi5wbGF5SW4oKTtcbiAgICAgICAgYS5fdGFza0JveFRpcHNOb2RlID0gbztcbiAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltUYXNrVmlld10g5Yib5bu65a6d566x5o+Q56S65aSx6LSlOiBcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIlRhc2tCb3hUaXBWaWV35Yqg6L295aSx6LSlXCIpKTtcbiAgICB9KTtcbiAgfVxuICByZW1vdmVUYXNrQm94VGlwcygpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX3Rhc2tCb3hUaXBzTm9kZSkgJiYgdGhpcy5fdGFza0JveFRpcHNOb2RlLmRlc3Ryb3koKTtcbiAgICB0aGlzLl90YXNrQm94VGlwc05vZGUgPSBudWxsO1xuICB9XG4gIGdldFRhc2tMaXN0VmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza0xpc3RWaWV3O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGFza1ZpZXdfb25EZXN0cm95XCIpXG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbW92ZVRhc2tCb3hUaXBzKCk7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=
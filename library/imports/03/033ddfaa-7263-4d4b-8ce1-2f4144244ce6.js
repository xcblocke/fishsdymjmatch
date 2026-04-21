"use strict";
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_taskRewardProg/Scripts/TaskRewardProgTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db61fi994JETYY/2viQ6J/0', 'TaskRewardProgTrait');
// subpackages/r_taskRewardProg/Scripts/TaskRewardProgTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskBoxLightView_1 = require("./TaskBoxLightView");
var TaskTrailView_1 = require("./TaskTrailView");
var TaskItemLightView_1 = require("./TaskItemLightView");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var TaskRewardProgTrait = /** @class */ (function (_super) {
    __extends(TaskRewardProgTrait, _super);
    function TaskRewardProgTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["r_taskRewardProg:prefabs/TaskTrail", "r_taskRewardProg:prefabs/TaskBoxLight", "r_taskRewardProg:prefabs/TaskItemLight", "r_taskRewardProg:prefabs/TaskTrailEff"];
        _this.LIST_RENDER_DELAY = 0.33;
        return _this;
    }
    TaskRewardProgTrait_1 = TaskRewardProgTrait;
    TaskRewardProgTrait.prototype.onTaskCtrl_initRes = function (e, t) {
        var i = e.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        t();
    };
    TaskRewardProgTrait.prototype.onTaskView_calcStgProg = function (e, t) {
        var i = this.getTaskModel();
        if (i && i.hasWaitingReward()) {
            var n = e.args[0];
            if (i && i.STAGE_WEIGHTS) {
                var o = n > 1 ? i.STAGE_WEIGHTS[n - 2] : 0;
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: o
                });
            }
            else
                t();
        }
        else
            t();
    };
    TaskRewardProgTrait.prototype.onTaskItemVw_updProg = function (e, t) {
        var i = e.ins, n = this.getTaskModel();
        if (n && n.hasWaitingReward()) {
            var o = this.getBannerTaskData();
            if (o && i._data) {
                if (i._data.taskType === o.taskType) {
                    if (!cc.isValid(i._cellUI)) {
                        t();
                        return;
                    }
                    var r = cc.find("content/lb_progress", i._cellUI);
                    if (r) {
                        var a = r.getComponent(cc.Label);
                        a && (a.string = "0/" + i._data.targetProgress);
                    }
                    var l = cc.find("content/progressBar", i._cellUI);
                    if (l) {
                        var c = l.getComponent(cc.ProgressBar);
                        c && (c.progress = 0);
                    }
                    t({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    TaskRewardProgTrait.prototype.onTaskItemVw_updBtnSt = function (e, t) {
        var i = e.ins, n = this.getTaskModel();
        if (n && n.hasWaitingReward()) {
            var o = this.getBannerTaskData();
            if (o && i._data) {
                if (i._data.taskType === o.taskType) {
                    if (!cc.isValid(i._cellUI)) {
                        t();
                        return;
                    }
                    var r = cc.find("content/btn_play", i._cellUI);
                    cc.isValid(r) && (r.active = false);
                    var a = cc.find("content/sp_done", i._cellUI);
                    cc.isValid(a) && (a.active = false);
                    t({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    TaskRewardProgTrait.prototype.onTaskView_autoReceive = function (e, t) {
        var i, n = this.getTaskModel();
        if (n && n.hasWaitingReward()) {
            var o = e.ins, r = (null === (i = null == n ? void 0 : n.getCurrentStage) || void 0 === i ? void 0 : i.call(n)) || 1;
            if (cc.isValid(o) && cc.isValid(o.node)) {
                t({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: true
                });
                this.playCompleteAnimationSequence(o, r);
            }
            else
                t();
        }
        else
            t();
    };
    TaskRewardProgTrait.prototype.playCompleteAnimationSequence = function (e, t) {
        var i = this;
        this.checkNodeValid(e) && e.scheduleOnce(function () {
            i.playAnimationSteps(e, t);
        }, this.LIST_RENDER_DELAY);
    };
    TaskRewardProgTrait.prototype.playAnimationSteps = function (e, t) {
        var i = this;
        this.checkNodeValid(e) && this.playRecentCompletedTaskAnimation(e, function () {
            i.onLightAnimComplete(e, t);
        });
    };
    TaskRewardProgTrait.prototype.onLightAnimComplete = function (e, t) {
        var i = this;
        this.checkNodeValid(e) && this.playTrailAnimation(e, t, function () {
            i.onTrailAnimComplete(e, t);
        });
    };
    TaskRewardProgTrait.prototype.onTrailAnimComplete = function (e, t) {
        var i = this;
        this.checkNodeValid(e) && this.playBoxAnimation(e, t, function () {
            i.onBoxAnimComplete(e, t);
        });
    };
    TaskRewardProgTrait.prototype.onBoxAnimComplete = function (e, t) {
        this.checkNodeValid(e) && this.dispatchEvent("openTaskReward", t);
    };
    TaskRewardProgTrait.prototype.playRecentCompletedTaskAnimation = function (e, t) {
        try {
            if (!this.checkNodeValid(e)) {
                null == t || t();
                return;
            }
            var n = this.getBannerTaskData();
            if (!n) {
                null == t || t();
                return;
            }
            this.playTaskLightAnimation(e, n, t);
        }
        catch (e) {
            console.error("[" + TaskRewardProgTrait_1.traitKey + "] 播放发光动画失败: " + (null == e ? void 0 : e.message));
            null == t || t();
        }
    };
    TaskRewardProgTrait.prototype.playTaskLightAnimation = function (e, t, i) {
        var n = this.findTaskItemView(e, t.taskType);
        if (n && cc.isValid(n.node)) {
            TaskItemLightView_1.default.playProgressAnimationFor(n, t.oldProgress, t.newProgress, t.targetProgress, i);
        }
        else {
            null == i || i();
        }
    };
    TaskRewardProgTrait.prototype.playTrailAnimation = function (e, t, i) {
        var n = this;
        if (this.checkNodeValid(e)) {
            var o = e.createUISync(TaskTrailView_1.default);
            if (cc.isValid(o)) {
                e.node.addChild(o);
                var r = o.getComponent(TaskTrailView_1.default);
                if (r)
                    r.playBatchTrailAnimation(e, t, function () {
                        cc.isValid(o) && o.destroy();
                        null == i || i();
                    }, function (t) {
                        n.onTrailStep(e, t);
                    });
                else {
                    o.destroy();
                    null == i || i();
                }
            }
            else
                null == i || i();
        }
        else
            null == i || i();
    };
    TaskRewardProgTrait.prototype.onTrailStep = function (e, t) {
        if (this.checkNodeValid(e)) {
            var i = cc.find("content/progressBar", e.node);
            if (cc.isValid(i)) {
                var n = i.getComponent(cc.ProgressBar);
                if (n) {
                    var o = n.progress, r = Math.min(1, o + t);
                    this.playProgressBarAnimation(n, o, r, 0.3);
                }
            }
        }
    };
    TaskRewardProgTrait.prototype.playProgressBarAnimation = function (e, t, i, n) {
        if (e && cc.isValid(e.node) && t !== i) {
            var o = {
                value: t
            };
            cc.tween(o).to(n, {
                value: i
            }, {
                easing: "sineInOut",
                progress: function (t, i, n, o) {
                    var r = t + (i - t) * o;
                    e && cc.isValid(e.node) && (e.progress = r);
                    return r;
                }
            }).call(function () {
                e && cc.isValid(e.node) && (e.progress = i);
            }).start();
        }
    };
    TaskRewardProgTrait.prototype.playBoxAnimation = function (e, t, i) {
        var n;
        if (this.checkNodeValid(e)) {
            var o = e.node.getChildByName("TaskBoxLightView");
            if (!cc.isValid(o)) {
                o = e.createUISync(TaskBoxLightView_1.default);
                cc.isValid(o) && e.node.addChild(o);
            }
            if (cc.isValid(o)) {
                null === (n = o.getComponent(TaskBoxLightView_1.default)) || void 0 === n || n.playAnimation(e, t, function () {
                    cc.isValid(o) && o.destroy();
                    null == i || i();
                });
            }
            else {
                null == i || i();
            }
        }
        else
            null == i || i();
    };
    TaskRewardProgTrait.prototype.getTaskModel = function () {
        var e = mj.getClassByName("TaskModel");
        return null == e ? void 0 : e.getInstance();
    };
    TaskRewardProgTrait.prototype.getBannerTaskData = function () {
        var e = this.getTaskModel();
        if (!e)
            return null;
        if (!UserModel_1.default.getInstance().isInGameView())
            return this.getLatestTaskData(e);
        var t = e.bannerDataForAnimation;
        return t ? {
            taskType: t.taskType,
            taskId: t.taskId,
            oldProgress: 0,
            newProgress: t.currentProgress,
            targetProgress: t.targetProgress
        } : null;
    };
    TaskRewardProgTrait.prototype.checkNodeValid = function (e) {
        return cc.isValid(e) && cc.isValid(e.node);
    };
    TaskRewardProgTrait.prototype.getLatestTaskData = function (e) {
        var t;
        try {
            var n = null === (t = e.getStageData) || void 0 === t ? void 0 : t.call(e, 3);
            return 2 === (null == n ? void 0 : n.stageState) ? null : this.getCompletedTaskData(e);
        }
        catch (e) {
            console.error("[" + TaskRewardProgTrait_1.traitKey + "] 获取最新任务数据失败: " + (null == e ? void 0 : e.message));
            return null;
        }
    };
    TaskRewardProgTrait.prototype.getCompletedTaskData = function (e) {
        var t;
        try {
            var n = e.cacheBannerInfo;
            if (!n)
                return null;
            null !== (t = new Map(e.taskProgressChangesInGame).get(n.taskType)) && void 0 !== t || n.minValue;
            return n.minValue === n.maxValue ? null : {
                taskType: n.taskType,
                taskId: n.taskId,
                oldProgress: 0,
                newProgress: n.maxValue,
                targetProgress: n.maxValue
            };
        }
        catch (e) {
            console.error("[" + TaskRewardProgTrait_1.traitKey + "] 获取已完成任务数据失败: " + (null == e ? void 0 : e.message));
            return null;
        }
    };
    TaskRewardProgTrait.prototype.findTaskItemView = function (e, t) {
        try {
            var i = e._taskListView, n = null == i ? void 0 : i._tableView, o = e._taskDataList;
            if (!n || !o)
                return null;
            var r = o.findIndex(function (e) {
                return e.taskType === t;
            });
            if (r < 0)
                return null;
            var a = n.getCellByIndex(r);
            return cc.isValid(a) ? a.getComponent("TaskItemView") : null;
        }
        catch (e) {
            return null;
        }
    };
    var TaskRewardProgTrait_1;
    TaskRewardProgTrait.traitKey = "TaskRewardProg";
    TaskRewardProgTrait = TaskRewardProgTrait_1 = __decorate([
        mj.trait,
        mj.class("TaskRewardProgTrait")
    ], TaskRewardProgTrait);
    return TaskRewardProgTrait;
}(Trait_1.default));
exports.default = TaskRewardProgTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3Rhc2tSZXdhcmRQcm9nL1NjcmlwdHMvVGFza1Jld2FyZFByb2dUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4Rix1REFBa0Q7QUFDbEQsaURBQTRDO0FBQzVDLHlEQUFvRDtBQUNwRCxzRUFBaUU7QUFHakU7SUFBaUQsdUNBQUs7SUFBdEQ7UUFBQSxxRUFvUkM7UUFuUkMsZ0JBQVUsR0FBRyxDQUFDLG9DQUFvQyxFQUFFLHVDQUF1QyxFQUFFLHdDQUF3QyxFQUFFLHVDQUF1QyxDQUFDLENBQUM7UUFDaEwsdUJBQWlCLEdBQUcsSUFBSSxDQUFDOztJQWtSM0IsQ0FBQzs0QkFwUm9CLG1CQUFtQjtJQUl0QyxnREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELG9EQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFO2dCQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFD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QW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBUYXNrQm94TGlnaHRWaWV3IGZyb20gJy4vVGFza0JveExpZ2h0Vmlldyc7XG5pbXBvcnQgVGFza1RyYWlsVmlldyBmcm9tICcuL1Rhc2tUcmFpbFZpZXcnO1xuaW1wb3J0IFRhc2tJdGVtTGlnaHRWaWV3IGZyb20gJy4vVGFza0l0ZW1MaWdodFZpZXcnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGFza1Jld2FyZFByb2dUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1Jld2FyZFByb2dUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgcmVxdWlyZVJlcyA9IFtcInJfdGFza1Jld2FyZFByb2c6cHJlZmFicy9UYXNrVHJhaWxcIiwgXCJyX3Rhc2tSZXdhcmRQcm9nOnByZWZhYnMvVGFza0JveExpZ2h0XCIsIFwicl90YXNrUmV3YXJkUHJvZzpwcmVmYWJzL1Rhc2tJdGVtTGlnaHRcIiwgXCJyX3Rhc2tSZXdhcmRQcm9nOnByZWZhYnMvVGFza1RyYWlsRWZmXCJdO1xuICBMSVNUX1JFTkRFUl9ERUxBWSA9IDAuMzM7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGFza1Jld2FyZFByb2dcIjtcbiAgb25UYXNrQ3RybF9pbml0UmVzKGUsIHQpIHtcbiAgICB2YXIgaSA9IGUuaW5zO1xuICAgIG51bGwgPT0gaSB8fCBpLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgdGhpcy5yZXF1aXJlUmVzKTtcbiAgICB0KCk7XG4gIH1cbiAgb25UYXNrVmlld19jYWxjU3RnUHJvZyhlLCB0KSB7XG4gICAgdmFyIGkgPSB0aGlzLmdldFRhc2tNb2RlbCgpO1xuICAgIGlmIChpICYmIGkuaGFzV2FpdGluZ1Jld2FyZCgpKSB7XG4gICAgICB2YXIgbiA9IGUuYXJnc1swXTtcbiAgICAgIGlmIChpICYmIGkuU1RBR0VfV0VJR0hUUykge1xuICAgICAgICB2YXIgbyA9IG4gPiAxID8gaS5TVEFHRV9XRUlHSFRTW24gLSAyXSA6IDA7XG4gICAgICAgIHQoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIHJldHVyblZhbDogb1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvblRhc2tJdGVtVndfdXBkUHJvZyhlLCB0KSB7XG4gICAgdmFyIGkgPSBlLmlucyxcbiAgICAgIG4gPSB0aGlzLmdldFRhc2tNb2RlbCgpO1xuICAgIGlmIChuICYmIG4uaGFzV2FpdGluZ1Jld2FyZCgpKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuZ2V0QmFubmVyVGFza0RhdGEoKTtcbiAgICAgIGlmIChvICYmIGkuX2RhdGEpIHtcbiAgICAgICAgaWYgKGkuX2RhdGEudGFza1R5cGUgPT09IG8udGFza1R5cGUpIHtcbiAgICAgICAgICBpZiAoIWNjLmlzVmFsaWQoaS5fY2VsbFVJKSkge1xuICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgciA9IGNjLmZpbmQoXCJjb250ZW50L2xiX3Byb2dyZXNzXCIsIGkuX2NlbGxVSSk7XG4gICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIHZhciBhID0gci5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgYSAmJiAoYS5zdHJpbmcgPSBcIjAvXCIgKyBpLl9kYXRhLnRhcmdldFByb2dyZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGwgPSBjYy5maW5kKFwiY29udGVudC9wcm9ncmVzc0JhclwiLCBpLl9jZWxsVUkpO1xuICAgICAgICAgIGlmIChsKSB7XG4gICAgICAgICAgICB2YXIgYyA9IGwuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgICAgIGMgJiYgKGMucHJvZ3Jlc3MgPSAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdCh7XG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB0KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25UYXNrSXRlbVZ3X3VwZEJ0blN0KGUsIHQpIHtcbiAgICB2YXIgaSA9IGUuaW5zLFxuICAgICAgbiA9IHRoaXMuZ2V0VGFza01vZGVsKCk7XG4gICAgaWYgKG4gJiYgbi5oYXNXYWl0aW5nUmV3YXJkKCkpIHtcbiAgICAgIHZhciBvID0gdGhpcy5nZXRCYW5uZXJUYXNrRGF0YSgpO1xuICAgICAgaWYgKG8gJiYgaS5fZGF0YSkge1xuICAgICAgICBpZiAoaS5fZGF0YS50YXNrVHlwZSA9PT0gby50YXNrVHlwZSkge1xuICAgICAgICAgIGlmICghY2MuaXNWYWxpZChpLl9jZWxsVUkpKSB7XG4gICAgICAgICAgICB0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciByID0gY2MuZmluZChcImNvbnRlbnQvYnRuX3BsYXlcIiwgaS5fY2VsbFVJKTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKHIpICYmIChyLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgICAgICB2YXIgYSA9IGNjLmZpbmQoXCJjb250ZW50L3NwX2RvbmVcIiwgaS5fY2VsbFVJKTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKGEpICYmIChhLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgICAgICB0KHtcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvblRhc2tWaWV3X2F1dG9SZWNlaXZlKGUsIHQpIHtcbiAgICB2YXIgaSxcbiAgICAgIG4gPSB0aGlzLmdldFRhc2tNb2RlbCgpO1xuICAgIGlmIChuICYmIG4uaGFzV2FpdGluZ1Jld2FyZCgpKSB7XG4gICAgICB2YXIgbyA9IGUuaW5zLFxuICAgICAgICByID0gKG51bGwgPT09IChpID0gbnVsbCA9PSBuID8gdm9pZCAwIDogbi5nZXRDdXJyZW50U3RhZ2UpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuY2FsbChuKSkgfHwgMTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG8pICYmIGNjLmlzVmFsaWQoby5ub2RlKSkge1xuICAgICAgICB0KHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheUNvbXBsZXRlQW5pbWF0aW9uU2VxdWVuY2Uobywgcik7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgcGxheUNvbXBsZXRlQW5pbWF0aW9uU2VxdWVuY2UoZSwgdCkge1xuICAgIHZhciBpID0gdGhpcztcbiAgICB0aGlzLmNoZWNrTm9kZVZhbGlkKGUpICYmIGUuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGkucGxheUFuaW1hdGlvblN0ZXBzKGUsIHQpO1xuICAgIH0sIHRoaXMuTElTVF9SRU5ERVJfREVMQVkpO1xuICB9XG4gIHBsYXlBbmltYXRpb25TdGVwcyhlLCB0KSB7XG4gICAgdmFyIGkgPSB0aGlzO1xuICAgIHRoaXMuY2hlY2tOb2RlVmFsaWQoZSkgJiYgdGhpcy5wbGF5UmVjZW50Q29tcGxldGVkVGFza0FuaW1hdGlvbihlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpLm9uTGlnaHRBbmltQ29tcGxldGUoZSwgdCk7XG4gICAgfSk7XG4gIH1cbiAgb25MaWdodEFuaW1Db21wbGV0ZShlLCB0KSB7XG4gICAgdmFyIGkgPSB0aGlzO1xuICAgIHRoaXMuY2hlY2tOb2RlVmFsaWQoZSkgJiYgdGhpcy5wbGF5VHJhaWxBbmltYXRpb24oZSwgdCwgZnVuY3Rpb24gKCkge1xuICAgICAgaS5vblRyYWlsQW5pbUNvbXBsZXRlKGUsIHQpO1xuICAgIH0pO1xuICB9XG4gIG9uVHJhaWxBbmltQ29tcGxldGUoZSwgdCkge1xuICAgIHZhciBpID0gdGhpcztcbiAgICB0aGlzLmNoZWNrTm9kZVZhbGlkKGUpICYmIHRoaXMucGxheUJveEFuaW1hdGlvbihlLCB0LCBmdW5jdGlvbiAoKSB7XG4gICAgICBpLm9uQm94QW5pbUNvbXBsZXRlKGUsIHQpO1xuICAgIH0pO1xuICB9XG4gIG9uQm94QW5pbUNvbXBsZXRlKGUsIHQpIHtcbiAgICB0aGlzLmNoZWNrTm9kZVZhbGlkKGUpICYmIHRoaXMuZGlzcGF0Y2hFdmVudChcIm9wZW5UYXNrUmV3YXJkXCIsIHQpO1xuICB9XG4gIHBsYXlSZWNlbnRDb21wbGV0ZWRUYXNrQW5pbWF0aW9uKGUsIHQpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmNoZWNrTm9kZVZhbGlkKGUpKSB7XG4gICAgICAgIG51bGwgPT0gdCB8fCB0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBuID0gdGhpcy5nZXRCYW5uZXJUYXNrRGF0YSgpO1xuICAgICAgaWYgKCFuKSB7XG4gICAgICAgIG51bGwgPT0gdCB8fCB0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucGxheVRhc2tMaWdodEFuaW1hdGlvbihlLCBuLCB0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgVGFza1Jld2FyZFByb2dUcmFpdC50cmFpdEtleSArIFwiXSDmkq3mlL7lj5HlhYnliqjnlLvlpLHotKU6IFwiICsgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUubWVzc2FnZSkpO1xuICAgICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICB9XG4gIH1cbiAgcGxheVRhc2tMaWdodEFuaW1hdGlvbihlLCB0LCBpKSB7XG4gICAgdmFyIG4gPSB0aGlzLmZpbmRUYXNrSXRlbVZpZXcoZSwgdC50YXNrVHlwZSk7XG4gICAgaWYgKG4gJiYgY2MuaXNWYWxpZChuLm5vZGUpKSB7XG4gICAgICBUYXNrSXRlbUxpZ2h0Vmlldy5wbGF5UHJvZ3Jlc3NBbmltYXRpb25Gb3IobiwgdC5vbGRQcm9ncmVzcywgdC5uZXdQcm9ncmVzcywgdC50YXJnZXRQcm9ncmVzcywgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bGwgPT0gaSB8fCBpKCk7XG4gICAgfVxuICB9XG4gIHBsYXlUcmFpbEFuaW1hdGlvbihlLCB0LCBpKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIGlmICh0aGlzLmNoZWNrTm9kZVZhbGlkKGUpKSB7XG4gICAgICB2YXIgbyA9IGUuY3JlYXRlVUlTeW5jKFRhc2tUcmFpbFZpZXcpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgZS5ub2RlLmFkZENoaWxkKG8pO1xuICAgICAgICB2YXIgciA9IG8uZ2V0Q29tcG9uZW50KFRhc2tUcmFpbFZpZXcpO1xuICAgICAgICBpZiAocikgci5wbGF5QmF0Y2hUcmFpbEFuaW1hdGlvbihlLCB0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2MuaXNWYWxpZChvKSAmJiBvLmRlc3Ryb3koKTtcbiAgICAgICAgICBudWxsID09IGkgfHwgaSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIG4ub25UcmFpbFN0ZXAoZSwgdCk7XG4gICAgICAgIH0pO2Vsc2Uge1xuICAgICAgICAgIG8uZGVzdHJveSgpO1xuICAgICAgICAgIG51bGwgPT0gaSB8fCBpKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBudWxsID09IGkgfHwgaSgpO1xuICAgIH0gZWxzZSBudWxsID09IGkgfHwgaSgpO1xuICB9XG4gIG9uVHJhaWxTdGVwKGUsIHQpIHtcbiAgICBpZiAodGhpcy5jaGVja05vZGVWYWxpZChlKSkge1xuICAgICAgdmFyIGkgPSBjYy5maW5kKFwiY29udGVudC9wcm9ncmVzc0JhclwiLCBlLm5vZGUpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgICAgdmFyIG4gPSBpLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgdmFyIG8gPSBuLnByb2dyZXNzLFxuICAgICAgICAgICAgciA9IE1hdGgubWluKDEsIG8gKyB0KTtcbiAgICAgICAgICB0aGlzLnBsYXlQcm9ncmVzc0JhckFuaW1hdGlvbihuLCBvLCByLCAwLjMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBsYXlQcm9ncmVzc0JhckFuaW1hdGlvbihlLCB0LCBpLCBuKSB7XG4gICAgaWYgKGUgJiYgY2MuaXNWYWxpZChlLm5vZGUpICYmIHQgIT09IGkpIHtcbiAgICAgIHZhciBvID0ge1xuICAgICAgICB2YWx1ZTogdFxuICAgICAgfTtcbiAgICAgIGNjLnR3ZWVuKG8pLnRvKG4sIHtcbiAgICAgICAgdmFsdWU6IGlcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiLFxuICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKHQsIGksIG4sIG8pIHtcbiAgICAgICAgICB2YXIgciA9IHQgKyAoaSAtIHQpICogbztcbiAgICAgICAgICBlICYmIGNjLmlzVmFsaWQoZS5ub2RlKSAmJiAoZS5wcm9ncmVzcyA9IHIpO1xuICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9XG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZSAmJiBjYy5pc1ZhbGlkKGUubm9kZSkgJiYgKGUucHJvZ3Jlc3MgPSBpKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHBsYXlCb3hBbmltYXRpb24oZSwgdCwgaSkge1xuICAgIHZhciBuO1xuICAgIGlmICh0aGlzLmNoZWNrTm9kZVZhbGlkKGUpKSB7XG4gICAgICB2YXIgbyA9IGUubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRhc2tCb3hMaWdodFZpZXdcIik7XG4gICAgICBpZiAoIWNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgbyA9IGUuY3JlYXRlVUlTeW5jKFRhc2tCb3hMaWdodFZpZXcpO1xuICAgICAgICBjYy5pc1ZhbGlkKG8pICYmIGUubm9kZS5hZGRDaGlsZChvKTtcbiAgICAgIH1cbiAgICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIG51bGwgPT09IChuID0gby5nZXRDb21wb25lbnQoVGFza0JveExpZ2h0VmlldykpIHx8IHZvaWQgMCA9PT0gbiB8fCBuLnBsYXlBbmltYXRpb24oZSwgdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQobykgJiYgby5kZXN0cm95KCk7XG4gICAgICAgICAgbnVsbCA9PSBpIHx8IGkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudWxsID09IGkgfHwgaSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBudWxsID09IGkgfHwgaSgpO1xuICB9XG4gIGdldFRhc2tNb2RlbCgpIHtcbiAgICB2YXIgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiVGFza01vZGVsXCIpO1xuICAgIHJldHVybiBudWxsID09IGUgPyB2b2lkIDAgOiBlLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgZ2V0QmFubmVyVGFza0RhdGEoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldFRhc2tNb2RlbCgpO1xuICAgIGlmICghZSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKCFVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0luR2FtZVZpZXcoKSkgcmV0dXJuIHRoaXMuZ2V0TGF0ZXN0VGFza0RhdGEoZSk7XG4gICAgdmFyIHQgPSBlLmJhbm5lckRhdGFGb3JBbmltYXRpb247XG4gICAgcmV0dXJuIHQgPyB7XG4gICAgICB0YXNrVHlwZTogdC50YXNrVHlwZSxcbiAgICAgIHRhc2tJZDogdC50YXNrSWQsXG4gICAgICBvbGRQcm9ncmVzczogMCxcbiAgICAgIG5ld1Byb2dyZXNzOiB0LmN1cnJlbnRQcm9ncmVzcyxcbiAgICAgIHRhcmdldFByb2dyZXNzOiB0LnRhcmdldFByb2dyZXNzXG4gICAgfSA6IG51bGw7XG4gIH1cbiAgY2hlY2tOb2RlVmFsaWQoZSkge1xuICAgIHJldHVybiBjYy5pc1ZhbGlkKGUpICYmIGNjLmlzVmFsaWQoZS5ub2RlKTtcbiAgfVxuICBnZXRMYXRlc3RUYXNrRGF0YShlKSB7XG4gICAgdmFyIHQ7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBuID0gbnVsbCA9PT0gKHQgPSBlLmdldFN0YWdlRGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYWxsKGUsIDMpO1xuICAgICAgcmV0dXJuIDIgPT09IChudWxsID09IG4gPyB2b2lkIDAgOiBuLnN0YWdlU3RhdGUpID8gbnVsbCA6IHRoaXMuZ2V0Q29tcGxldGVkVGFza0RhdGEoZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRhc2tSZXdhcmRQcm9nVHJhaXQudHJhaXRLZXkgKyBcIl0g6I635Y+W5pyA5paw5Lu75Yqh5pWw5o2u5aSx6LSlOiBcIiArIChudWxsID09IGUgPyB2b2lkIDAgOiBlLm1lc3NhZ2UpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBnZXRDb21wbGV0ZWRUYXNrRGF0YShlKSB7XG4gICAgdmFyIHQ7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBuID0gZS5jYWNoZUJhbm5lckluZm87XG4gICAgICBpZiAoIW4pIHJldHVybiBudWxsO1xuICAgICAgbnVsbCAhPT0gKHQgPSBuZXcgTWFwKGUudGFza1Byb2dyZXNzQ2hhbmdlc0luR2FtZSkuZ2V0KG4udGFza1R5cGUpKSAmJiB2b2lkIDAgIT09IHQgfHwgbi5taW5WYWx1ZTtcbiAgICAgIHJldHVybiBuLm1pblZhbHVlID09PSBuLm1heFZhbHVlID8gbnVsbCA6IHtcbiAgICAgICAgdGFza1R5cGU6IG4udGFza1R5cGUsXG4gICAgICAgIHRhc2tJZDogbi50YXNrSWQsXG4gICAgICAgIG9sZFByb2dyZXNzOiAwLFxuICAgICAgICBuZXdQcm9ncmVzczogbi5tYXhWYWx1ZSxcbiAgICAgICAgdGFyZ2V0UHJvZ3Jlc3M6IG4ubWF4VmFsdWVcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRhc2tSZXdhcmRQcm9nVHJhaXQudHJhaXRLZXkgKyBcIl0g6I635Y+W5bey5a6M5oiQ5Lu75Yqh5pWw5o2u5aSx6LSlOiBcIiArIChudWxsID09IGUgPyB2b2lkIDAgOiBlLm1lc3NhZ2UpKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBmaW5kVGFza0l0ZW1WaWV3KGUsIHQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGkgPSBlLl90YXNrTGlzdFZpZXcsXG4gICAgICAgIG4gPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLl90YWJsZVZpZXcsXG4gICAgICAgIG8gPSBlLl90YXNrRGF0YUxpc3Q7XG4gICAgICBpZiAoIW4gfHwgIW8pIHJldHVybiBudWxsO1xuICAgICAgdmFyIHIgPSBvLmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS50YXNrVHlwZSA9PT0gdDtcbiAgICAgIH0pO1xuICAgICAgaWYgKHIgPCAwKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBhID0gbi5nZXRDZWxsQnlJbmRleChyKTtcbiAgICAgIHJldHVybiBjYy5pc1ZhbGlkKGEpID8gYS5nZXRDb21wb25lbnQoXCJUYXNrSXRlbVZpZXdcIikgOiBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufSJdfQ==
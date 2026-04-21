import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import TaskBoxLightView from './TaskBoxLightView';
import TaskTrailView from './TaskTrailView';
import TaskItemLightView from './TaskItemLightView';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("TaskRewardProgTrait")
export default class TaskRewardProgTrait extends Trait {
  requireRes = ["r_taskRewardProg:prefabs/TaskTrail", "r_taskRewardProg:prefabs/TaskBoxLight", "r_taskRewardProg:prefabs/TaskItemLight", "r_taskRewardProg:prefabs/TaskTrailEff"];
  LIST_RENDER_DELAY = 0.33;
  static traitKey = "TaskRewardProg";
  onTaskCtrl_initRes(e, t) {
    var i = e.ins;
    null == i || i.addPreloadRes("Prefab", this.requireRes);
    t();
  }
  onTaskView_calcStgProg(e, t) {
    var i = this.getTaskModel();
    if (i && i.hasWaitingReward()) {
      var n = e.args[0];
      if (i && i.STAGE_WEIGHTS) {
        var o = n > 1 ? i.STAGE_WEIGHTS[n - 2] : 0;
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: o
        });
      } else t();
    } else t();
  }
  onTaskItemVw_updProg(e, t) {
    var i = e.ins,
      n = this.getTaskModel();
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
            returnType: TraitCallbackReturnType.return
          });
        } else t();
      } else t();
    } else t();
  }
  onTaskItemVw_updBtnSt(e, t) {
    var i = e.ins,
      n = this.getTaskModel();
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
            returnType: TraitCallbackReturnType.return
          });
        } else t();
      } else t();
    } else t();
  }
  onTaskView_autoReceive(e, t) {
    var i,
      n = this.getTaskModel();
    if (n && n.hasWaitingReward()) {
      var o = e.ins,
        r = (null === (i = null == n ? void 0 : n.getCurrentStage) || void 0 === i ? void 0 : i.call(n)) || 1;
      if (cc.isValid(o) && cc.isValid(o.node)) {
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: true
        });
        this.playCompleteAnimationSequence(o, r);
      } else t();
    } else t();
  }
  playCompleteAnimationSequence(e, t) {
    var i = this;
    this.checkNodeValid(e) && e.scheduleOnce(function () {
      i.playAnimationSteps(e, t);
    }, this.LIST_RENDER_DELAY);
  }
  playAnimationSteps(e, t) {
    var i = this;
    this.checkNodeValid(e) && this.playRecentCompletedTaskAnimation(e, function () {
      i.onLightAnimComplete(e, t);
    });
  }
  onLightAnimComplete(e, t) {
    var i = this;
    this.checkNodeValid(e) && this.playTrailAnimation(e, t, function () {
      i.onTrailAnimComplete(e, t);
    });
  }
  onTrailAnimComplete(e, t) {
    var i = this;
    this.checkNodeValid(e) && this.playBoxAnimation(e, t, function () {
      i.onBoxAnimComplete(e, t);
    });
  }
  onBoxAnimComplete(e, t) {
    this.checkNodeValid(e) && this.dispatchEvent("openTaskReward", t);
  }
  playRecentCompletedTaskAnimation(e, t) {
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
    } catch (e) {
      console.error("[" + TaskRewardProgTrait.traitKey + "] 播放发光动画失败: " + (null == e ? void 0 : e.message));
      null == t || t();
    }
  }
  playTaskLightAnimation(e, t, i) {
    var n = this.findTaskItemView(e, t.taskType);
    if (n && cc.isValid(n.node)) {
      TaskItemLightView.playProgressAnimationFor(n, t.oldProgress, t.newProgress, t.targetProgress, i);
    } else {
      null == i || i();
    }
  }
  playTrailAnimation(e, t, i) {
    var n = this;
    if (this.checkNodeValid(e)) {
      var o = e.createUISync(TaskTrailView);
      if (cc.isValid(o)) {
        e.node.addChild(o);
        var r = o.getComponent(TaskTrailView);
        if (r) r.playBatchTrailAnimation(e, t, function () {
          cc.isValid(o) && o.destroy();
          null == i || i();
        }, function (t) {
          n.onTrailStep(e, t);
        });else {
          o.destroy();
          null == i || i();
        }
      } else null == i || i();
    } else null == i || i();
  }
  onTrailStep(e, t) {
    if (this.checkNodeValid(e)) {
      var i = cc.find("content/progressBar", e.node);
      if (cc.isValid(i)) {
        var n = i.getComponent(cc.ProgressBar);
        if (n) {
          var o = n.progress,
            r = Math.min(1, o + t);
          this.playProgressBarAnimation(n, o, r, 0.3);
        }
      }
    }
  }
  playProgressBarAnimation(e, t, i, n) {
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
  }
  playBoxAnimation(e, t, i) {
    var n;
    if (this.checkNodeValid(e)) {
      var o = e.node.getChildByName("TaskBoxLightView");
      if (!cc.isValid(o)) {
        o = e.createUISync(TaskBoxLightView);
        cc.isValid(o) && e.node.addChild(o);
      }
      if (cc.isValid(o)) {
        null === (n = o.getComponent(TaskBoxLightView)) || void 0 === n || n.playAnimation(e, t, function () {
          cc.isValid(o) && o.destroy();
          null == i || i();
        });
      } else {
        null == i || i();
      }
    } else null == i || i();
  }
  getTaskModel() {
    var e = mj.getClassByName("TaskModel");
    return null == e ? void 0 : e.getInstance();
  }
  getBannerTaskData() {
    var e = this.getTaskModel();
    if (!e) return null;
    if (!UserModel.getInstance().isInGameView()) return this.getLatestTaskData(e);
    var t = e.bannerDataForAnimation;
    return t ? {
      taskType: t.taskType,
      taskId: t.taskId,
      oldProgress: 0,
      newProgress: t.currentProgress,
      targetProgress: t.targetProgress
    } : null;
  }
  checkNodeValid(e) {
    return cc.isValid(e) && cc.isValid(e.node);
  }
  getLatestTaskData(e) {
    var t;
    try {
      var n = null === (t = e.getStageData) || void 0 === t ? void 0 : t.call(e, 3);
      return 2 === (null == n ? void 0 : n.stageState) ? null : this.getCompletedTaskData(e);
    } catch (e) {
      console.error("[" + TaskRewardProgTrait.traitKey + "] 获取最新任务数据失败: " + (null == e ? void 0 : e.message));
      return null;
    }
  }
  getCompletedTaskData(e) {
    var t;
    try {
      var n = e.cacheBannerInfo;
      if (!n) return null;
      null !== (t = new Map(e.taskProgressChangesInGame).get(n.taskType)) && void 0 !== t || n.minValue;
      return n.minValue === n.maxValue ? null : {
        taskType: n.taskType,
        taskId: n.taskId,
        oldProgress: 0,
        newProgress: n.maxValue,
        targetProgress: n.maxValue
      };
    } catch (e) {
      console.error("[" + TaskRewardProgTrait.traitKey + "] 获取已完成任务数据失败: " + (null == e ? void 0 : e.message));
      return null;
    }
  }
  findTaskItemView(e, t) {
    try {
      var i = e._taskListView,
        n = null == i ? void 0 : i._tableView,
        o = e._taskDataList;
      if (!n || !o) return null;
      var r = o.findIndex(function (e) {
        return e.taskType === t;
      });
      if (r < 0) return null;
      var a = n.getCellByIndex(r);
      return cc.isValid(a) ? a.getComponent("TaskItemView") : null;
    } catch (e) {
      return null;
    }
  }
}
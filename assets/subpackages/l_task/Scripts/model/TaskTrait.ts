import Trait from '../../../../Scripts/framework/trait/Trait';
import HallTaskBtn from './HallTaskBtn';
import { TaskModel } from './TaskModel';
import { ETaskType, ETaskStageState, ETaskUIType } from '../TaskData';
import { EGameEvent } from '../../../../Scripts/simulator/constant/GameEvent';
import UserModel from '../../../../Scripts/gamePlay/user/UserModel';
import GameUtils from '../../../../Scripts/core/simulator/util/GameUtils';
@mj.trait
@mj.class("TaskTrait")
export default class TaskTrait extends Trait {
  _config = {};
  _isTaskButtonCreated = false;
  _hallParentNode = null;
  _hallTaskBtnInstance = null;
  static traitKey = "Task";
  static nextTimeOut = -1;
  onLoad() {
    super.onLoad.call(this);
    this._config = this._traitData || {};
    mj.EventManager.on(EGameEvent.TileMapObject_OnClear, this.onTileMapObjectClear, this);
    this.registerEvent([{
      event: "HallCtl_initRes"
    }, {
      event: "GameData_chgRevert"
    }, {
      event: "Tile2WinVw_popNextView",
      priority: 60
    }]);
  }
  onHallCtl_initRes(t, e) {
    e();
    t.ins.addPreloadRes("Prefab", ["mainRes:prefabs/task/HallTaskBtn"]);
  }
  getMessageListeners() {
    var _t = {};
    _t.updateTaskRedDot = this.updateRedDot.bind(this);
    return _t;
  }
  @mj.traitEvent("TaskTrait_getStageRews")
  getStageRewards() {
    return this._config.stageRewards || [];
  }
  @mj.traitEvent("TaskTrait_getOpenCond")
  getOpenCondition() {
    return this._config.openCondition || {};
  }
  @mj.traitEvent("TaskTrait_getFstRndFlg")
  getFirstRandomFlag() {
    var t;
    return null !== (t = this._config.firstRandomFlag) && void 0 !== t ? t : 0;
  }
  initTask() {
    var t,
      e,
      a = TaskModel.getInstance();
    if (!a.isInitialized()) {
      var o = this.getStageRewards(),
        i = this.getOpenCondition(),
        r = this.getFirstRandomFlag();
      if (3 !== o.length) return;
      a.configure({
        openCondition: {
          level: null !== (t = null == i ? void 0 : i.level) && void 0 !== t ? t : 10,
          day: null !== (e = null == i ? void 0 : i.day) && void 0 !== e ? e : 0
        },
        firstRandomFlag: null != r ? r : 0,
        stageBoxIds: o
      });
      a.initialize();
    }
  }
  onHallVw_initBtns(t, e) {
    var a;
    this._hallParentNode = null === (a = t.ins) || void 0 === a ? void 0 : a.node;
    this.initTask();
    TaskModel.getInstance().checkAndInitTask();
    if (this.canShowTaskButton()) {
      this.createHallButton(this._hallParentNode);
      TaskModel.getInstance().autoReceiveReward();
    }
    e();
  }
  @mj.traitEvent("TaskTrait_canShowTaskBtn")
  canShowTaskButton() {
    return TaskModel.getInstance().isTaskOpen();
  }
  updateItemTaskProgress(t, e = 1) {
    if (TaskModel.getInstance().isTaskOpen()) {
      var a = TaskModel.getInstance();
      a.isItemInTaskValue1(ETaskType.UseItem, t) && a.updateTaskProgress(ETaskType.UseItem, e);
    }
  }
  onHallVw_updateUI(t, e) {
    this.initTask();
    this.canShowTaskButton() && !this._isTaskButtonCreated && this._hallParentNode && this.createHallButton(this._hallParentNode);
    this._hallTaskBtnInstance && this.updateHallButtonShow();
    e();
  }
  createHallButton(t) {
    var e = this;
    if (cc.isValid(t)) {
      this._isTaskButtonCreated = true;
      HallTaskBtn.createUI().then(function (a) {
        if (cc.isValid(a) && cc.isValid(t)) {
          t.addChild(a);
          e._hallTaskBtnInstance = a.getComponent(HallTaskBtn);
          e.updateHallButtonShow();
        }
      }).catch(function (t) {
        e._isTaskButtonCreated = false;
        console.error("[" + TaskTrait.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallTaskBtn按钮加载失败"));
      });
    }
  }
  updateHallButtonShow() {
    if (cc.isValid(this._hallTaskBtnInstance)) {
      this.updateRedDot();
      this._hallTaskBtnInstance.updateLock();
    }
  }
  updateRedDot() {
    if (cc.isValid(this._hallTaskBtnInstance)) {
      var t = TaskModel.getInstance().hasRedPoint();
      this._hallTaskBtnInstance.updateRedDot(t);
    }
  }
  onGameData_chgShuffle(t, e) {
    var o;
    try {
      if (!TaskModel.getInstance().isTaskOpen()) {
        e();
        return;
      }
      if ((null === (o = t.args) || void 0 === o ? void 0 : o[0]) >= 0) {
        e();
        return;
      }
      var i = TaskModel.getInstance();
      if (!i.isItemInTaskValue1(ETaskType.UseItem, 1001)) {
        e();
        return;
      }
      i.updateTaskProgress(ETaskType.UseItem, 1);
      e();
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] 洗牌道具任务更新失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onGameData_chgHitTips(t, e) {
    var o;
    try {
      if (!TaskModel.getInstance().isTaskOpen()) {
        e();
        return;
      }
      if ((null === (o = t.args) || void 0 === o ? void 0 : o[0]) >= 0) {
        e();
        return;
      }
      var i = TaskModel.getInstance();
      if (!i.isItemInTaskValue1(ETaskType.UseItem, 1002)) {
        e();
        return;
      }
      i.updateTaskProgress(ETaskType.UseItem, 1);
      e();
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] 提示道具任务更新失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onGameData_chgRevert(t, e) {
    var o;
    try {
      if (!TaskModel.getInstance().isTaskOpen()) {
        e();
        return;
      }
      if ((null === (o = t.args) || void 0 === o ? void 0 : o[0]) >= 0) {
        e();
        return;
      }
      var i = TaskModel.getInstance();
      if (!i.isItemInTaskValue1(ETaskType.UseItem, 1003)) {
        e();
        return;
      }
      i.updateTaskProgress(ETaskType.UseItem, 1);
      e();
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] 撤销道具任务更新失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onTileMapObjectClear(t) {
    try {
      this.initTask();
      if (!TaskModel.getInstance().isTaskOpen()) return;
      if (!Array.isArray(t) || 0 === t.length) return;
      var e = TaskModel.getInstance(),
        o = e.getTaskInfo(ETaskType.ClearMahjong);
      if (!o || void 0 === o.targetValue) return;
      if (!e.isTaskRangeMatch(ETaskType.ClearMahjong)) return;
      var i = o.targetValue;
      if (!t.some(function (t) {
        return t && t.cardId === i;
      })) return;
      var r = UserModel.getInstance().getCurrentGameType();
      e.addPendingClearCount(1, r);
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] 麻将消除任务累积失败: " + (null == t ? void 0 : t.message));
    }
  }
  handleWinPopNextView(t, e) {
    this.initTask();
    try {
      if (!TaskModel.getInstance().isTaskOpen()) {
        e();
        return true;
      }
      TaskModel.getInstance().checkAndInitTask();
      var o = TaskModel.getInstance(),
        i = UserModel.getInstance().getMainGameData().getLevelId();
      o.updateTaskProgress(ETaskType.FinishXLevel, i - 1);
      o.updateTaskProgress(ETaskType.FinishLevel, 1);
      var r = UserModel.getInstance().getCurrentGameType();
      o.commitPendingClearCount(r);
      t.args[0] = t.args[0] || {};
      var n = t.args[0],
        s = this.prepareBannerData(),
        p = o.hasFinishStage;
      o.bannerDataForAnimation = s;
      p && (t.args[0].hasTaskReward = true);
      o.hasFinishStage = false;
      o.cacheBannerInfo = null;
      o.updateTaskProgressBaseline();
      if (!s && !p) {
        e();
        return true;
      }
      if (s) {
        this.showTaskBanner(n, e, s, p);
        return false;
      }
      if (p) {
        this.showTask(e);
        return false;
      }
      e();
      return true;
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] 胜利界面弹窗处理失败: " + (null == t ? void 0 : t.message));
      e();
      return true;
    }
  }
  @mj.traitEvent("TaskTrait_checkNeedBlock")
  checkNeedBlock() {
    return GameUtils.isRatingDialogReady();
  }
  onWinVw_popNextView(t, e) {
    try {
      this.handleWinPopNextView(t, e);
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] 主线模式胜利界面处理异常: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  prepareBannerData() {
    try {
      var t = TaskModel.getInstance().getStageData(3);
      return (null == t ? void 0 : t.stageState) === ETaskStageState.Finish ? null : this.getCompletedTask() || this.getProgressChangedTask();
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] 准备Banner数据失败: " + (null == t ? void 0 : t.message));
      return null;
    }
  }
  getCompletedTask() {
    var t, e;
    try {
      var o = TaskModel.getInstance(),
        i = o.cacheBannerInfo,
        r = new Map(o.taskProgressChangesInGame);
      if (!i) return null;
      var n = i;
      if (n.taskType === ETaskType.FinishXLevel && UserModel.getInstance().getMainGameData().getLevelId() - 1 !== n.maxValue) return null;
      var s = o.getTaskConfig(n.taskId),
        p = null !== (t = r.get(n.taskType)) && void 0 !== t ? t : n.minValue;
      return n.minValue === n.maxValue ? null : {
        taskType: n.taskType,
        taskId: n.taskId,
        taskDesc: (null == s ? void 0 : s.TaskDes) || "任务" + n.taskType,
        currentProgress: n.maxValue,
        targetProgress: n.maxValue,
        isCompleted: true,
        targetCardId: (null === (e = o.getTaskInfo(n.taskType)) || void 0 === e ? void 0 : e.targetValue) || 0,
        oldProgress: p
      };
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] 获取已完成任务Banner失败: " + (null == t ? void 0 : t.message));
      return null;
    }
  }
  @mj.traitEvent("TaskTrait_getProgChg")
  getProgressChangedTask() {
    try {
      var t = TaskModel.getInstance(),
        e = t.getCurrentStage(),
        o = new Map(t.taskProgressChangesInGame);
      if (0 === o.size) return null;
      var i = t.getStageData(e),
        r = Array.from(o.keys()).filter(function (t) {
          return !(null == i ? void 0 : i.taskCompleteList.includes(t)) && t !== ETaskType.FinishXLevel;
        });
      if (0 === r.length) return null;
      for (var n = 0; n < r.length; n++) {
        var s = r[n],
          p = t.getTaskInfo(s);
        if (p && p.taskId && 0 !== p.taskId.length) {
          var u = o.get(s) || 0,
            d = p.taskProgress;
          if (u !== d) {
            var f = e - 1,
              h = p.taskId[f] || p.taskId[0],
              g = p.taskMax[f] || 0,
              T = t.getTaskConfig(h);
            if (T) {
              var y = p.taskProgress >= g;
              return {
                taskType: s,
                taskId: h,
                taskDesc: T.TaskDes || "任务" + s,
                currentProgress: d,
                targetProgress: g,
                isCompleted: y,
                targetCardId: p.targetValue || 0,
                oldProgress: u
              };
            }
          }
        }
      }
      return null;
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] 获取进度变化任务Banner失败: " + (null == t ? void 0 : t.message));
      return null;
    }
  }
  onTLWinVw_popNextView(t, e) {
    try {
      this.handleWinPopNextView(t, e);
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] 旅行模式胜利界面处理异常: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onDCWinVw_popNextView(t, e) {
    try {
      this.handleWinPopNextView(t, e);
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] 每日挑战胜利界面处理异常: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onTile2WinVw_popNextView(t, e) {
    try {
      this.handleWinPopNextView(t, e);
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] tile2模式胜利界面处理异常: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  onGsListener_onReplayGame(t, e) {
    try {
      var o = TaskModel.getInstance();
      o.clearPendingClearCount();
      o.cacheBannerInfo = null;
      e();
    } catch (t) {
      console.error("[" + TaskTrait.traitKey + "] 重新开始游戏处理失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
  @mj.traitEvent("TaskTrait_showTask")
  showTask(t, e = false) {
    this.pushController("TaskController", {
      from: ETaskUIType.Result,
      isGlobal: e
    }, function (e) {
      if (cc.isValid(e)) {
        var a = e.onUIDestroy.bind(e);
        e.onUIDestroy = function () {
          a();
          t();
        };
      } else t();
    });
  }
  @mj.traitEvent("TaskTrait_showBanner")
  showTaskBanner(t, e, a, o) {
    var i = this;
    this.pushController("TaskBannerController", {
      data: a,
      isShowAction: false,
      noBlock: !this.checkNeedBlock(),
      bgStyle: {
        blackOpacity: 0
      }
    }, function (t) {
      if (cc.isValid(t)) {
        var a = t.onUIDestroy.bind(t);
        t.onUIDestroy = function () {
          a();
          if (o) {
            i.showTask(e);
          } else {
            e();
          }
        };
      } else if (o) {
        i.showTask(e);
      } else {
        e();
      }
    });
  }
}
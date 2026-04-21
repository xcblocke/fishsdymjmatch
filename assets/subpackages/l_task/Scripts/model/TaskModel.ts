import { ETaskUIType, createDefaultTaskStage, ETaskType, ETaskStageState } from '../TaskData';
import { EGetItemReasonId, EItemId } from '../../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../../Scripts/gamePlay/user/UserModel';
import { DataReader } from '../../../../Scripts/framework/data/DataReader';
import { ConfigType } from '../../../../Scripts/gamePlay/base/data/ConfigType';
import Model from '../../../../Scripts/framework/data/Model';
import { DotGameUnlock, EFuncUnlockType } from '../../../../Scripts/gamePlay/dot/DGameUnlock';
import { DotGameGetItem } from '../../../../Scripts/gamePlay/dot/DGameGetItem';
import { TaskUtils } from '../TaskUtils';
import CardUtil from '../../../../Scripts/gamePlay/user/CardUtil';
import { GameInteraction } from '../../../../Scripts/GameInteraction/GameInteraction';
import { ItemTypeKey, EItemType } from '../../../../Scripts/user/IUserData';
import GameUtils from '../../../../Scripts/core/simulator/util/GameUtils';
@mj.class("TaskModel")
export class TaskModel extends Model {
  STAGE_WEIGHTS = [0.18, 0.6, 1];
  _firstRandomFlag = 0;
  _stageBoxIds = [];
  _dictGroupTask = new Map();
  _isInitialized = false;
  hasFinishStage = false;
  cacheBannerInfo = null;
  taskProgressChangesInGame = new Map();
  bannerDataForAnimation = null;
  _openFrom = ETaskUIType.Home;
  constructor() {
    super();
    TaskUtils.isLocalEmpty(this.localData.isFirstHomeShow) && (this.localData.isFirstHomeShow = false);
    TaskUtils.isLocalEmpty(this.localData.isFirstTaskIntervention) && (this.localData.isFirstTaskIntervention = false);
    TaskUtils.isLocalEmpty(this.localData.lastTime) && (this.localData.lastTime = 0);
    TaskUtils.isLocalEmpty(this.localData.taskStage) && (this.localData.taskStage = 1);
    TaskUtils.isLocalEmpty(this.localData.pendingClearCount) && this.clearPendingClearCount();
    TaskUtils.isLocalEmpty(this.localData.listTaskType) && (this.localData.listTaskType = []);
    TaskUtils.isLocalEmpty(this.localData.dictStageState) && (this.localData.dictStageState = {});
    TaskUtils.isLocalEmpty(this.localData.dictTaskProgress) && (this.localData.dictTaskProgress = {});
  }
  setStageStateData(t, e) {
    this.localData.dictStageState[t] = e;
    this.localData.dictStageState = this.localData.dictStageState;
  }
  setTaskProgressData(t, e) {
    this.localData.dictTaskProgress[t] = e;
    this.localData.dictTaskProgress = this.localData.dictTaskProgress;
  }
  setTaskTypeList(t) {
    this.localData.listTaskType = t;
    this.localData.listTaskType = this.localData.listTaskType;
  }
  initialize() {
    if (!this._isInitialized) try {
      this.preInitTasks();
      if (0 === Object.keys(this.localData.dictStageState).length) {
        this.initTasks();
      } else {
        TaskUtils.checkDataIntegrity(this.localData) && this.initTasks();
      }
      this.updateTaskProgressBaseline();
      this._isInitialized = true;
    } catch (t) {}
  }
  isInitialized() {
    return this._isInitialized;
  }
  preInitTasks() {
    var t, e;
    this._dictGroupTask.clear();
    var a = DataReader.getTypeList(ConfigType.task, "TaskPhase", 1);
    if (0 !== a.length) try {
      for (var o = __values(a), i = o.next(); !i.done; i = o.next()) {
        var r = i.value;
        if (1 === r.RandomFlag) {
          this._dictGroupTask.has(r.TaskType) || this._dictGroupTask.set(r.TaskType, []);
          this._dictGroupTask.get(r.TaskType).push(r.TaskKey);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        i && !i.done && (e = o.return) && e.call(o);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  getTaskData() {
    return this.localData;
  }
  configure(t) {
    void 0 !== t.openCondition && (this._taskOpenCondition = t.openCondition);
    void 0 !== t.firstRandomFlag && (this._firstRandomFlag = t.firstRandomFlag);
    void 0 !== t.stageBoxIds && (this._stageBoxIds = [...t.stageBoxIds]);
  }
  openCondition() {
    return this._taskOpenCondition || {
      level: 0,
      day: 0
    };
  }
  isTaskOpen() {
    if (!this._taskOpenCondition) return false;
    var t = UserModel.getInstance().getMainGameData().getLevelId(),
      e = UserModel.getInstance().getGameActiveDays() || 1,
      a = this._taskOpenCondition,
      o = 0 === a.level || t > a.level,
      i = 0 === a.day || e >= a.day,
      r = o && i;
    r && DotGameUnlock.dotByType(EFuncUnlockType.Task);
    return r;
  }
  checkAndInitTask() {
    if (this.resetTaskData()) {
      this.autoReceiveReward();
      this.initTasks();
      this.localData.isFirstTaskIntervention || (this.cacheBannerInfo = null);
    } else {
      this.refreshTaskState();
      this.updateTaskProgressBaseline();
    }
  }
  @mj.traitEvent("TaskModel_resetTask")
  resetTaskData() {
    var t = Date.now(),
      e = this.localData.lastTime;
    return !TaskUtils.isSameDay(e, t);
  }
  initTasks() {
    if (!(this._dictGroupTask.size < 3)) {
      this.localData.lastTime = Date.now();
      this.localData.taskStage = 1;
      for (var t = {}, e = 1; e <= 3; e++) t[e] = createDefaultTaskStage();
      this.localData.dictStageState = t;
      this.localData.dictStageState = this.localData.dictStageState;
      this.clearCache();
      var a = this.initTasksFirstOpen();
      a || (a = this.initTasksNormal());
      if (a) {
        this.refreshTaskState();
        this.updateTaskProgressBaseline();
      }
    }
  }
  validateFirstTaskCondition() {
    if (this.localData.isFirstTaskIntervention) return null;
    var t = DataReader.getTypeList(ConfigType.task, "RandomFlag", this._firstRandomFlag).filter(function (t) {
      return 1 === t.TaskPhase;
    });
    return 0 === t.length ? null : t;
  }
  calculateExcludedTypes(t) {
    var e = [...t];
    if (t.includes(ETaskType.FinishLevel)) {
      e.push(ETaskType.FinishXLevel);
    } else {
      t.includes(ETaskType.FinishXLevel) && e.push(ETaskType.FinishLevel);
    }
    return e;
  }
  selectTaskTypes(t) {
    var e = Array.from(new Set(t.map(function (t) {
        return t.TaskType;
      }))).slice(0, 3),
      a = Array.from(this._dictGroupTask.keys()),
      o = this.calculateExcludedTypes(e),
      i = a.filter(function (t) {
        return !o.includes(t);
      }),
      r = Math.max(0, 3 - e.length);
    TaskUtils.shuffleArray(i);
    var n = i.slice(0, r),
      s = [...e, ...n];
    if (s.length < 3) {
      console.error("[TaskModel] 首次任务类型不足3个：固定" + e.length + "个，随机" + n.length + "个");
      return [];
    }
    return s;
  }
  buildTaskInfo(t, e) {
    var a = [],
      o = [],
      i = [],
      r = e;
    a.push(r.TaskKey);
    o.push(0);
    i.push(r.TaskValue2);
    for (;;) {
      var n = this.getNextTask(r);
      if (!n) break;
      a.push(n.TaskKey);
      o.push(i[i.length - 1]);
      i.push(n.TaskValue2);
      r = n;
    }
    var s = 0;
    t === ETaskType.FinishXLevel && (s = UserModel.getInstance().getMainGameData().getLevelId() - 1);
    var l = -1;
    t === ETaskType.ClearMahjong && (l = TaskUtils.randomSelectTargetValue(e));
    return {
      taskId: a,
      taskProgress: s,
      taskMin: o,
      taskMax: i,
      targetValue: l
    };
  }
  buildTaskInfosForTypes(t, e) {
    var a,
      o,
      i = new Map(),
      r = Array.from(new Set(e.map(function (t) {
        return t.TaskType;
      }))),
      s = function s(t) {
        var a = null;
        if (r.includes(t)) {
          var o = e.filter(function (e) {
            return e.TaskType === t;
          });
          o.length > 0 && (a = o[0]);
        } else {
          var n = l._dictGroupTask.get(t);
          if (n && n.length > 0) {
            TaskUtils.shuffleArray(n);
            a = l.getTaskConfig(n[0]);
          }
        }
        if (!a) return "continue";
        var s = l.buildTaskInfo(t, a);
        i.set(t, s);
      },
      l = this;
    try {
      for (var c = __values(t), p = c.next(); !p.done; p = c.next()) s(p.value);
    } catch (t) {
      a = {
        error: t
      };
    } finally {
      try {
        p && !p.done && (o = c.return) && o.call(c);
      } finally {
        if (a) throw a.error;
      }
    }
    return i;
  }
  saveTaskInfos(t) {
    var e = Array.from(t.keys());
    this.setTaskTypeList(e);
    var a = {};
    t.forEach(function (t, e) {
      a[e] = t;
    });
    this.localData.dictTaskProgress = a;
    this.localData.dictTaskProgress = this.localData.dictTaskProgress;
  }
  initTasksFirstOpen() {
    var t = this.validateFirstTaskCondition();
    if (!t) return false;
    var e = this.selectTaskTypes(t);
    if (e.length < 3) return false;
    var a = this.buildTaskInfosForTypes(e, t);
    if (a.size < 3) return false;
    this.saveTaskInfos(a);
    this.localData.isFirstTaskIntervention = true;
    return true;
  }
  @mj.traitEvent("TaskModel_randomTask")
  buildRandomTaskInfos(t) {
    var e,
      a,
      o = new Map();
    try {
      for (var i = __values(t), r = i.next(); !r.done; r = i.next()) {
        var s = r.value,
          l = this._dictGroupTask.get(s);
        if (l && 0 !== l.length) {
          TaskUtils.shuffleArray(l);
          var c = this.getTaskConfig(l[0]);
          if (c) {
            var p = this.buildTaskInfo(s, c);
            o.set(s, p);
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        r && !r.done && (a = i.return) && a.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  initTasksNormal() {
    var t = Array.from(this._dictGroupTask.keys());
    TaskUtils.shuffleArray(t);
    var e = [t[0], t[1], t[2]],
      a = this.buildRandomTaskInfos(e);
    if (a.size < 3) return false;
    this.saveTaskInfos(a);
    return true;
  }
  refreshTaskState() {
    var t = false,
      e = this.localData.taskStage,
      a = this.localData.dictStageState[e],
      o = false;
    for (var i in this.localData.dictTaskProgress) {
      var r = parseInt(i),
        n = this.localData.dictTaskProgress[r];
      if (!a.taskCompleteList.includes(r)) {
        var s = false;
        if (r === ETaskType.FinishXLevel) {
          var l = UserModel.getInstance().getMainGameData().getLevelId();
          n.taskProgress = l - 1;
          s = true;
        }
        if (n.taskProgress >= n.taskMax[e - 1]) {
          t = true;
          if (!a.taskCompleteList.includes(r)) {
            a.taskCompleteList.push(r);
            o = true;
          }
          n.taskProgress = n.taskMax[e - 1];
          s = true;
          this.cacheBannerInfo = {
            taskType: r,
            taskId: n.taskId[e - 1],
            minValue: n.taskMin[e - 1],
            maxValue: n.taskMax[e - 1]
          };
        }
        s && this.setTaskProgressData(r, n);
      }
    }
    o && this.setStageStateData(e, a);
    t && this.checkStageComplete();
  }
  isTaskRangeMatch(t) {
    var e = this.localData.dictTaskProgress[t];
    if (!e) return false;
    var a = this.localData.taskStage,
      o = e.taskId[a - 1],
      i = this.getTaskConfig(o);
    if (!i || !i.TaskRange) return true;
    var r = UserModel.getInstance().getCurrentGameType(),
      n = i.TaskRange;
    if (!Array.isArray(n) || 0 === n.length) return false;
    var s = TaskUtils.gameTypeToNumber(r);
    return n.includes(s);
  }
  @mj.traitEvent("TaskModel_updateProg")
  updateTaskProgress(t, e) {
    var a = this.localData.dictTaskProgress[t];
    if (!a) return false;
    if (!this.isTaskRangeMatch(t)) return false;
    var o = this.localData.taskStage,
      i = this.localData.dictStageState[o];
    if (o >= 3 && (null == i ? void 0 : i.stageState) === ETaskStageState.Finish) return false;
    if (i.taskCompleteList.includes(t)) return false;
    var r = a.taskProgress;
    this.taskProgressChangesInGame.has(t) || this.taskProgressChangesInGame.set(t, r);
    if (t === ETaskType.FinishXLevel) {
      a.taskProgress = e;
    } else {
      a.taskProgress += e;
    }
    var n = false,
      s = false,
      l = a.taskMax[o - 1];
    if (a.taskProgress >= l) {
      n = true;
      if (!i.taskCompleteList.includes(t)) {
        i.taskCompleteList.push(t);
        s = true;
      }
      a.taskProgress = l;
      this.cacheBannerInfo = {
        taskType: t,
        taskId: a.taskId[o - 1],
        minValue: a.taskMin[o - 1],
        maxValue: l
      };
    }
    var p = a.taskProgress !== r;
    this.setTaskProgressData(t, a);
    s && this.setStageStateData(o, i);
    n && this.checkStageComplete();
    return p;
  }
  addPendingClearCount(t, e) {
    this.localData.pendingClearCount || this.clearPendingClearCount();
    var a = TaskUtils.gameTypeToNumber(e);
    if (0 !== a) {
      this.localData.pendingClearCount[a] = (this.localData.pendingClearCount[a] || 0) + t;
      this.localData.pendingClearCount = this.localData.pendingClearCount;
    }
  }
  commitPendingClearCount(t) {
    this.localData.pendingClearCount || this.clearPendingClearCount();
    var e = TaskUtils.gameTypeToNumber(t);
    if (0 !== e) {
      var a = this.localData.pendingClearCount[e] || 0;
      a > 0 && this.updateTaskProgress(ETaskType.ClearMahjong, a);
      this.clearPendingClearCount();
    }
  }
  clearPendingClearCount() {
    this.localData.pendingClearCount = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };
    this.localData.pendingClearCount = this.localData.pendingClearCount;
  }
  clearTaskProgressChanges() {
    this.taskProgressChangesInGame.clear();
  }
  updateTaskProgressBaseline() {
    for (var t in this.localData.dictTaskProgress) {
      var e = parseInt(t),
        a = this.getTaskInfo(e);
      a && a.taskProgress > 0 && this.taskProgressChangesInGame.set(e, a.taskProgress);
    }
  }
  getPendingClearCount(t) {
    if (!this.localData.pendingClearCount) return 0;
    var e = TaskUtils.gameTypeToNumber(t);
    return 0 === e ? 0 : this.localData.pendingClearCount[e] || 0;
  }
  checkStageComplete() {
    var t = this.localData.taskStage,
      e = this.localData.dictStageState[t];
    if (e.stageState === ETaskStageState.Doing && 3 === e.taskCompleteList.length) {
      e.stageState = ETaskStageState.Wait;
      this.hasFinishStage = true;
      this.setStageStateData(t, e);
    }
  }
  autoReceiveReward(t = true) {
    for (var e = false, a = 1; a <= 3; a++) {
      var o = this.localData.dictStageState[a];
      if (o && o.stageState === ETaskStageState.Wait) {
        e = true;
        this.triggerStageReward(a);
        o.stageState = ETaskStageState.Finish;
        this.setStageStateData(a, o);
        this.localData.taskStage++;
        this.localData.taskStage > 3 && (this.localData.taskStage = 3);
        this.hasFinishStage = false;
      }
    }
    if (e) {
      this.clearCache();
      this.updateTaskProgressBaseline();
    }
  }
  triggerStageReward(t, e = 1) {
    var a = UserModel.getInstance().isInGameView(),
      o = this.getStageBoxData(t);
    if (o && o.Counts) for (var i = o.Items || [], r = o.Counts || [], n = e > 1 ? EGetItemReasonId.DailyTaskAd : EGetItemReasonId.DailyTask, s = e > 1 ? "每日任务奖励_看广告翻倍_完成阶段" + t : "每日任务奖励_完成阶段" + t, l = 0; l < i.length; l++) {
      var c = i[l],
        d = r[l];
      if (!(d <= 0)) {
        e > 1 && (d *= e - 1);
        if (a) {
          var f = UserModel.getInstance().getCurrentGameType(),
            h = {
              inputType: GameUtils.getInputAddPropType(f),
              propType: ItemTypeKey[c],
              num: d,
              reasonId: n,
              reasonInfo: s
            };
          GameInteraction.input(h);
        } else this.addItem(c, d, n, s);
      }
    }
  }
  addItem(t, e, a, o) {
    var i,
      r,
      n = UserModel.getInstance().getCurrentGameData();
    if (t === EItemType.Shuffle) {
      n.changeShuffleNums(e);
      r = n.getShuffleNums();
      i = EItemId.Shuffle;
    } else if (t === EItemType.Hint) {
      n.changeHitTipsNums(e);
      r = n.getHitTipsNums();
      i = EItemId.Hint;
    } else {
      if (t !== EItemType.Undo) return;
      n.changeRevertNums(e);
      r = n.getRevertNums();
      i = EItemId.Revert;
    }
    DotGameGetItem.dotGetItem(n, {
      itemId: i,
      number: e,
      afterNum: r,
      reasonId: a,
      reasonInfo: o
    });
  }
  nextStage(t) {
    var e = this.localData.dictStageState[t];
    if (e && e.stageState === ETaskStageState.Wait) {
      e.stageState = ETaskStageState.Finish;
      this.setStageStateData(t, e);
      this.localData.taskStage++;
      this.localData.taskStage > 3 && (this.localData.taskStage = 3);
      this.clearCache();
      this.refreshTaskState();
      this.updateTaskProgressBaseline();
      this.dispatchEvent("updateTaskRedDot");
    }
  }
  getTaskConfig(t) {
    return DataReader.getByKey(ConfigType.task, t) || null;
  }
  getNextTask(t) {
    return -1 === t.TaskQuest ? null : this.getTaskConfig(t.TaskQuest);
  }
  getStageBoxId(t) {
    return this._stageBoxIds[t - 1] || null;
  }
  getStageBoxData(t) {
    var e = this.getStageBoxId(t);
    if (!e) return null;
    try {
      return DataReader.getByKey(ConfigType.reward_config, e) || null;
    } catch (t) {
      return null;
    }
  }
  getCurrentStage() {
    return this.localData.taskStage;
  }
  getStageData(t) {
    return this.localData.dictStageState[t] || null;
  }
  getTaskInfo(t) {
    return this.localData.dictTaskProgress[t] || null;
  }
  @mj.traitEvent("TaskModel_sort")
  getTaskSort(t) {
    var e = this,
      a = [...this.localData.listTaskType],
      o = t || this.getCurrentStage(),
      i = this.getStageData(o);
    if (!i) return a;
    a.sort(function (t, a) {
      var r = i.taskCompleteList.includes(t) ? 1 : 0,
        n = i.taskCompleteList.includes(a) ? 1 : 0;
      if (r !== n) return r - n;
      var s = e.localData.dictTaskProgress[t],
        l = e.localData.dictTaskProgress[a];
      if (!s || !l) return e.localData.listTaskType.indexOf(t) - e.localData.listTaskType.indexOf(a);
      var c = o - 1;
      return (s.taskId[c] || s.taskId[0] || 0) - (l.taskId[c] || l.taskId[0] || 0);
    });
    return a;
  }
  @mj.traitEvent("TaskModel_hasRedPoint")
  hasRedPoint() {
    return this.hasWaitingReward();
  }
  hasWaitingReward() {
    var t = this.getCurrentStage(),
      e = this.getStageData(t);
    return (null == e ? void 0 : e.stageState) === ETaskStageState.Wait;
  }
  getCardResNameByCardId(t) {
    var e,
      a = CardUtil.getConfigName();
    return null === (e = DataReader.getTypeList(a, "cardId", t)[0]) || void 0 === e ? void 0 : e.resName;
  }
  updateFirstHomeShow() {
    this.localData.isFirstHomeShow = true;
  }
  isFirstHomeShow() {
    return this.localData.isFirstHomeShow;
  }
  clearCache() {
    this.hasFinishStage = false;
    this.cacheBannerInfo = null;
    this.clearTaskProgressChanges();
  }
  isItemInTaskValue1(t, e) {
    var a = this.getTaskInfo(t);
    if (!a || !a.taskId || 0 === a.taskId.length) return false;
    var o = this.getCurrentStage() - 1,
      i = a.taskId[o] || a.taskId[0],
      r = this.getTaskConfig(i);
    return !(!r || !r.TaskValue1) && r.TaskValue1.includes(e);
  }
  setOpenFrom(t) {
    this._openFrom = t;
  }
  getOpenFrom() {
    return this._openFrom;
  }
  isAllTasksCompleted() {
    var t = this.getCurrentStage(),
      e = this.getStageData(t);
    return t >= 3 && (null == e ? void 0 : e.stageState) === ETaskStageState.Finish;
  }
  getTaskTargetCardId(t) {
    var e = this.getTaskInfo(t);
    return e && e.targetValue ? e.targetValue : 1;
  }
  getTaskCardResName() {
    var t,
      e = mj.getClassByName("TaskTrait");
    if (!(null === (t = null == e ? void 0 : e.getInstance()) || void 0 === t ? void 0 : t.eventEnabled)) return "";
    var a = this.getTaskTargetCardId(ETaskType.ClearMahjong);
    return this.getCardResNameByCardId(a);
  }
}
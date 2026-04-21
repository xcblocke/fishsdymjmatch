import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import PushManager from '../../../Scripts/gamePlay/base/push/PushManager';
var p = {
  pushHour: 20,
  opewaynum: "mbdailytask1",
  taskType: "mbdailytask01"
};
@mj.trait
@mj.class("DailyTaskPushTrait")
export default class DailyTaskPushTrait extends Trait {
  _config = p;
  _isPushLinkJump = false;
  _lastPushCheckTime = 0;
  static traitKey = "DailyTaskPush";
  onLoad() {
    super.onLoad.call(this);
    if (this._traitData) {
      void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
      void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
      void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
    }
  }
  getConfig() {
    return this._config;
  }
  isBeforePushTime() {
    return new Date().getHours() < this._config.pushHour;
  }
  canSendPush() {
    return !!this.isBeforePushTime();
  }
  getTaskModel() {
    var t = mj.getClassByName("TaskModel");
    return null == t ? void 0 : t.getInstance();
  }
  isDailyTaskCompleted() {
    var t,
      e,
      i = this.getTaskModel();
    if (!i) return true;
    if (!i.isTaskOpen || !i.isTaskOpen()) return false;
    var a = i.getCurrentStage(),
      n = (i.getTaskData().listTaskType || []).length,
      o = i.getStageData(a),
      r = (null === (t = null == o ? void 0 : o.taskCompleteList) || void 0 === t ? void 0 : t.length) || 0;
    return ((null === (e = i.localData) || void 0 === e ? void 0 : e.taskStage) || 1) >= 3 && r >= n;
  }
  onLoginM_enterGame(t, e) {
    var i = PushManager.getInstance().getOpenAppOpeway();
    i && i.opewaynum === this._config.opewaynum && (this._isPushLinkJump = true);
    e();
  }
  onHallVw_onPopView(t, e) {
    var i;
    if (this._isPushLinkJump) {
      this._isPushLinkJump = false;
      var a = mj.getClassByName("TaskTrait");
      if (null === (i = null == a ? void 0 : a.getInstance()) || void 0 === i ? void 0 : i.eventEnabled) {
        this.showTaskMainUI(1, function (t) {
          e({
            isBreak: t
          });
        });
        return;
      }
    }
    e();
  }
  onGameUI_onLoad(t, e) {
    var i;
    if (this._isPushLinkJump) {
      this._isPushLinkJump = false;
      var a = mj.getClassByName("TaskTrait");
      (null === (i = null == a ? void 0 : a.getInstance()) || void 0 === i ? void 0 : i.eventEnabled) && this.showTaskMainUI(2, function (t) {
        e({
          isBreak: t
        });
      });
    }
    e();
  }
  @mj.traitEvent("DailyTaskPush_showTaskVw")
  showTaskMainUI(t, e) {
    ControllerManager.getInstance().pushViewByController("TaskController", {
      from: t
    });
    null == e || e(true);
  }
  onTaskModel_updateProg(t, e) {
    if (t.beforReturnVal) {
      var i = Date.now();
      if (Math.abs(i - this._lastPushCheckTime) < 2000) e();else {
        this._lastPushCheckTime = i;
        this.checkAndTriggerPush();
        e();
      }
    } else e();
  }
  checkAndTriggerPush() {
    if (this.isDailyTaskCompleted()) {
      this.removePush();
    } else {
      this.canSendPush() && this.sendPush();
    }
  }
  sendPush() {
    var t = this.getConfig(),
      e = PushManager.getInstance().getPushTimestamp(t.pushHour);
    PushManager.getInstance().sendGamePush({
      opewaynum: t.opewaynum,
      taskType: t.taskType,
      sendTime: e
    }, {
      keyNum: "daily"
    });
  }
  removePush() {
    PushManager.getInstance().sendGamePushRemoved(this.getConfig().opewaynum);
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
import PushManager from '../../../Scripts/gamePlay/base/push/PushManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
var p = {
  pushHour: 12,
  maxLifecycleDays: 7,
  triggerStartDay: 3,
  opewaynum: "mjcdqzh1",
  taskType: "mjcdqzh01"
};
@mj.trait
@mj.class("NewUserChurnPushTrait")
export default class NewUserChurnPushTrait extends Trait {
  _config = p;
  static traitKey = "NewUserChurnPush";
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  onLoad() {
    super.onLoad.call(this);
    this.isLocalEmpty(this.localData.visitRecord) && (this.localData.visitRecord = {});
    if (this._traitData) {
      void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
      void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
      void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
      void 0 !== this._traitData.maxLifecycleDays && (this._config.maxLifecycleDays = this._traitData.maxLifecycleDays);
      void 0 !== this._traitData.triggerStartDay && (this._config.triggerStartDay = this._traitData.triggerStartDay);
    }
  }
  getConfig() {
    return this._config;
  }
  getUserModel() {
    return UserModel.getInstance();
  }
  getActiveDays() {
    return this.getUserModel().getGameActiveDays() || 1;
  }
  recordTodayVisit() {
    var t = this.getActiveDays();
    if (!this.localData.visitRecord[t]) {
      this.localData.visitRecord[t] = true;
      this.localData.visitRecord = this.localData.visitRecord;
    }
  }
  checkFirstDayVisitSecondDayMissed() {
    var t = this.localData.visitRecord,
      e = true === t[1],
      i = true !== t[2];
    return e && i;
  }
  isWithinLifecycle() {
    return this.getActiveDays() <= this._config.maxLifecycleDays;
  }
  isBeforePushTime() {
    return new Date().getHours() < this._config.pushHour;
  }
  canTriggerPush() {
    var t = this.getActiveDays();
    return !(!this.isWithinLifecycle() || t < this._config.triggerStartDay || !this.checkFirstDayVisitSecondDayMissed() || !this.isBeforePushTime());
  }
  onPushMgr_init(t, e) {
    this.recordTodayVisit();
    this.checkAndTriggerPush();
    e();
  }
  onLoginM_enterGame(t, e) {
    var i = PushManager.getInstance().getOpenAppOpeway();
    if (i && i.opewaynum === this._config.opewaynum) {
      JumpManager.getInstance().jumpToGame();
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
  checkAndTriggerPush() {
    if (this.canTriggerPush()) {
      this.sendPush();
    } else {
      this.cancelPush();
    }
  }
  sendPush() {
    var t = this.getConfig(),
      e = PushManager.getInstance().getPushTimestamp(t.pushHour);
    this.getActiveDays();
    PushManager.getInstance().sendGamePush({
      opewaynum: t.opewaynum,
      taskType: t.taskType,
      sendTime: e
    });
  }
  cancelPush() {
    PushManager.getInstance().sendGamePushRemoved(this._config.opewaynum);
  }
}
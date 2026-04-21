import Trait from '../../../Scripts/framework/trait/Trait';
import PushManager from '../../../Scripts/gamePlay/base/push/PushManager';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
var c = {
  remainDaysThreshold: 4,
  pushHour: 14,
  opewaynum: "mblxdays1",
  taskType: "mblxdays01"
};
@mj.trait
@mj.class("TravelDaysPushTrait")
export default class TravelDaysPushTrait extends Trait {
  _config = Object.assign({}, c);
  _lastSession = -1;
  static traitKey = "TravelDaysPush";
  onLoad() {
    super.onLoad.call(this);
    if (this._traitData) {
      void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
      void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
      void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
      void 0 !== this._traitData.remainDaysThreshold && (this._config.remainDaysThreshold = this._traitData.remainDaysThreshold);
    }
  }
  getConfig() {
    return this._config;
  }
  getTravelGameModel() {
    var t = mj.getClassByName("TravelGameModel");
    return null == t ? void 0 : t.getInstance();
  }
  isTravelActive() {
    var t,
      e = this.getTravelGameModel();
    return e && (null === (t = e.isSessionActive) || void 0 === t ? void 0 : t.call(e)) || false;
  }
  getCurrentSession() {
    var t,
      e = this.getTravelGameModel();
    return e && (null === (t = e.getCurSession) || void 0 === t ? void 0 : t.call(e)) || -1;
  }
  getRemainDays() {
    var t,
      e = this.getTravelGameModel();
    if (!e) return -1;
    var r = null === (t = e.getRemainTime) || void 0 === t ? void 0 : t.call(e);
    return void 0 === r || r < 0 ? -1 : Math.ceil(r / 86400);
  }
  checkNewSession() {
    var t = this.getCurrentSession();
    if (t !== this._lastSession) {
      this._lastSession = t;
      return true;
    }
    return false;
  }
  onLoginM_enterGame(t, e) {
    var r = PushManager.getInstance().getOpenAppOpeway();
    if (r && r.opewaynum === this._config.opewaynum) {
      if (!this.isTravelActive()) {
        e();
        return;
      }
      JumpManager.getInstance().jumpToTravelMap();
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
  onHallVw_updateUI(t, e) {
    this.checkAndTriggerPush();
    e();
  }
  checkAndTriggerPush() {
    if (this.checkNewSession()) this.removePush();else if (this.isTravelActive()) {
      var t = this.getRemainDays();
      if (!(t < 0)) {
        t <= this.getConfig().remainDaysThreshold && this.sendPush();
      }
    }
  }
  sendPush() {
    var t = this.getConfig(),
      e = PushManager.getInstance().getPushTimestamp(t.pushHour);
    PushManager.getInstance().sendGamePush({
      opewaynum: t.opewaynum,
      taskType: t.taskType,
      sendTime: e
    });
  }
  removePush() {
    PushManager.getInstance().sendGamePushRemoved(this.getConfig().opewaynum);
  }
}
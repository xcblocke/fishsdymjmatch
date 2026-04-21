import Trait from '../../../Scripts/framework/trait/Trait';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
import PushManager from '../../../Scripts/gamePlay/base/push/PushManager';
@mj.trait
@mj.class("DailyChallengePushTrait")
export default class DailyChallengePushTrait extends Trait {
  _pushHour = 21;
  _opewaynum = "mjdailytz1";
  _taskType = "mjdailytz01";
  _isDailyUnlocked = false;
  static traitKey = "DailyChallengePush";
  onLoad() {
    super.onLoad.call(this);
    if (this._traitData) {
      void 0 !== this._traitData.Time && (this._pushHour = this._traitData.Time);
      void 0 !== this._traitData.PlanCode && (this._opewaynum = this._traitData.PlanCode);
      void 0 !== this._traitData.StrategyCode && (this._taskType = this._traitData.StrategyCode);
    }
  }
  getDailyModel() {
    var t = mj.getClassByName("DailyModel");
    return null == t ? void 0 : t.getInstance();
  }
  getDailyTrait() {
    var t = mj.getClassByName("DailyTrait");
    return null == t ? void 0 : t.getInstance();
  }
  isDailyChallengeUnlocked() {
    var t, e;
    return null !== (e = null === (t = this.getDailyModel()) || void 0 === t ? void 0 : t.isOpen()) && void 0 !== e && e;
  }
  isTodayChallengeCompleted() {
    var t = this.getDailyModel();
    if (!t) return true;
    var e = t.getToday();
    return !((null == e ? void 0 : e.id) && (null == e ? void 0 : e.day)) || 3 === t.getDayStatus(e.id, e.day);
  }
  canSendPush() {
    if (!this.isDailyChallengeUnlocked()) return false;
    this._isDailyUnlocked = true;
    return !(new Date().getHours() >= this._pushHour || this.isTodayChallengeCompleted());
  }
  onPushMgr_init(t, e) {
    this._isDailyUnlocked = this.isDailyChallengeUnlocked();
    this.tryTriggerPush();
    e();
  }
  onHallVw_updateUI(t, e) {
    this._isDailyUnlocked || this.tryTriggerPush();
    e();
  }
  onWinVw_showWinVw(t, e) {
    if (this._isDailyUnlocked) e();else {
      var i = this.getDailyTrait();
      if (null == i ? void 0 : i.isOpenDaily()) {
        this._isDailyUnlocked = true;
        this.tryTriggerPush();
      }
      e();
    }
  }
  onDCWinVw_showWinVw(t, e) {
    this.isTodayChallengeCompleted() && PushManager.getInstance().sendGamePushRemoved(this._opewaynum);
    e();
  }
  onLoginM_enterGame(t, e) {
    var i = PushManager.getInstance().getOpenAppOpeway();
    if ((null == i ? void 0 : i.opewaynum) !== this._opewaynum) e();else {
      JumpManager.getInstance().jumpToDailyChallenge();
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
  tryTriggerPush() {
    if (this.canSendPush()) {
      var t = PushManager.getInstance().getPushTimestamp(this._pushHour);
      PushManager.getInstance().sendGamePush({
        opewaynum: this._opewaynum,
        taskType: this._taskType,
        sendTime: t
      }, {
        keyNum: "today"
      });
    }
  }
}
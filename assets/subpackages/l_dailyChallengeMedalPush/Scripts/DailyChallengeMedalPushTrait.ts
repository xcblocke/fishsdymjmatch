import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
import PushManager from '../../../Scripts/gamePlay/base/push/PushManager';
@mj.trait
@mj.class("DailyChallengeMedalPushTrait")
export default class DailyChallengeMedalPushTrait extends Trait {
  _config = {
    progressThreshold: 0.5,
    maxConsecutiveDays: 7,
    minTriggerIntervalDays: 3,
    pushHour: 21,
    opewaynum: "mbtzmedal1",
    taskType: "mbtzmedal01"
  };
  static traitKey = "DailyChallengeMedalPush";
  onLoad() {
    super.onLoad.call(this);
    if (this._traitData) {
      void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
      void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
      void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
      void 0 !== this._traitData.progressThreshold && (this._config.progressThreshold = this._traitData.progressThreshold);
      void 0 !== this._traitData.maxConsecutiveDays && (this._config.maxConsecutiveDays = this._traitData.maxConsecutiveDays);
      void 0 !== this._traitData.minTriggerIntervalDays && (this._config.minTriggerIntervalDays = this._traitData.minTriggerIntervalDays);
    }
  }
  getDailyModel() {
    var t = mj.getClassByName("DailyModel");
    return null == t ? void 0 : t.getInstance();
  }
  getCurrentDailyId() {
    var t = this.getDailyModel();
    if (!t) return 0;
    var e = t.getToday();
    return (null == e ? void 0 : e.id) || 0;
  }
  getMonthTotalDays() {
    var t = new Date();
    return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
  }
  getCompletedDays() {
    var t,
      e,
      r = this.getDailyModel();
    if (!r) return 0;
    var a = this.getCurrentDailyId();
    if (0 === a) return 0;
    var o = r.getMonthData(a);
    if (!o || 0 === o.length) return 0;
    var i = 0;
    try {
      for (var s = __values(o), l = s.next(); !l.done; l = s.next()) 3 === l.value.status && i++;
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        l && !l.done && (e = s.return) && e.call(s);
      } finally {
        if (t) throw t.error;
      }
    }
    return i;
  }
  hasMonthMedal() {
    var t = this.getDailyModel();
    if (!t) return false;
    var e = this.getCurrentDailyId();
    return 0 !== e && t.isMonthCompleted(e);
  }
  onPushMgr_init(t, e) {
    this.checkAndTriggerPush();
    e();
  }
  onDCWinCtrl_viewShow(t, e) {
    this.checkAndTriggerPush();
    e();
  }
  onBadgeMode_addBadge(t, e) {
    var r,
      a = null === (r = t.args) || void 0 === r ? void 0 : r[0];
    if (a) {
      var o = DataReader.getByKey(ConfigType.item_config, a);
      if (5 === (o ? o.Type : 0)) {
        this.hasMonthMedal() && this.cancelPush();
        e();
      } else e();
    } else e();
  }
  getPushTimestamp() {
    var t = new Date(),
      e = new Date(t.getFullYear(), t.getMonth(), t.getDate(), this._config.pushHour, 0, 0, 0);
    t.getTime() > e.getTime() && e.setDate(e.getDate() + 1);
    return e.getTime();
  }
  checkProgressThreshold(t, e) {
    return !(e <= 0) && t >= Math.floor(e * this._config.progressThreshold);
  }
  sendPush() {
    var t = this.getPushTimestamp();
    PushManager.getInstance().sendGamePush({
      opewaynum: this._config.opewaynum,
      taskType: this._config.taskType,
      sendTime: t
    }, {
      keyNum: "progress_" + Math.floor(100 * this._config.progressThreshold)
    });
  }
  cancelPush() {
    PushManager.getInstance().sendGamePushRemoved(this._config.opewaynum);
  }
  checkAndTriggerPush() {
    if (this.hasMonthMedal()) this.cancelPush();else {
      var t = this.getCompletedDays(),
        e = this.getMonthTotalDays();
      this.checkProgressThreshold(t, e) && this.sendPush();
    }
  }
  onLoginM_enterGame(t, e) {
    var r = PushManager.getInstance().getOpenAppOpeway();
    if (r && r.opewaynum === this._config.opewaynum) {
      this.showPopView(function (t) {
        e({
          isBreak: t
        });
      });
    } else {
      e();
    }
  }
  @mj.traitEvent("DCMedalPush_showPopVw")
  showPopView(t) {
    JumpManager.getInstance().jumpToDailyChallenge();
    null == t || t(true);
  }
}
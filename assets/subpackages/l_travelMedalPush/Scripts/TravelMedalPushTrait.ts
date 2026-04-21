import Trait from '../../../Scripts/framework/trait/Trait';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
import PushManager from '../../../Scripts/gamePlay/base/push/PushManager';
@mj.trait
@mj.class("TravelMedalPushTrait")
export default class TravelMedalPushTrait extends Trait {
  _config = {
    pushHour: 19,
    opewaynum: "mblxmedal1",
    taskType: "mblxmedal01",
    medalTriggers: [{
      medalLevel: 7,
      triggerLevels: [4]
    }, {
      medalLevel: 41,
      triggerLevels: [22, 35]
    }, {
      medalLevel: 91,
      triggerLevels: [65, 84]
    }]
  };
  static traitKey = "TravelMedalPush";
  onLoad() {
    super.onLoad.call(this);
    if (this._traitData) {
      void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
      void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
      void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
      void 0 !== this._traitData.medalTriggers && (this._config.medalTriggers = this._traitData.medalTriggers);
    }
  }
  getTravelGameData() {
    var e = mj.getClassByName("TravelGameData");
    return null == e ? void 0 : e.getInstance();
  }
  getCurrentLevel() {
    var e,
      t = this.getTravelGameData();
    return (null === (e = null == t ? void 0 : t.getLevelId) || void 0 === e ? void 0 : e.call(t)) || 0;
  }
  getPushTimestamp() {
    var e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), this._config.pushHour, 0, 0, 0);
    e.getTime() > t.getTime() && t.setDate(t.getDate() + 1);
    return t.getTime();
  }
  checkTriggerLevel(e) {
    var t, r;
    try {
      for (var a = __values(this._config.medalTriggers), n = a.next(); !n.done; n = a.next()) {
        var i = n.value;
        if (i.triggerLevels.includes(e)) return i.medalLevel;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        n && !n.done && (r = a.return) && r.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
    return 0;
  }
  checkMedalLevel(e) {
    var t, r;
    try {
      for (var a = __values(this._config.medalTriggers), n = a.next(); !n.done; n = a.next()) {
        var i = n.value;
        if (i.medalLevel === e) return i.medalLevel;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        n && !n.done && (r = a.return) && r.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
    return 0;
  }
  sendPush(e) {
    var t = this.getPushTimestamp();
    PushManager.getInstance().sendGamePush({
      opewaynum: this._config.opewaynum,
      taskType: this._config.taskType,
      sendTime: t
    }, {
      keyNum: e.toString()
    });
  }
  cancelPush() {
    PushManager.getInstance().sendGamePushRemoved(this._config.opewaynum);
  }
  onTLWinCtrl_viewShow(e, t) {
    if (this._config) {
      var r = this.getCurrentLevel() - 1;
      if (this.checkMedalLevel(r) > 0) {
        this.cancelPush();
        t();
      } else {
        var a = this.checkTriggerLevel(r);
        a > 0 && this.sendPush(a);
        t();
      }
    } else t();
  }
  onLoginM_enterGame(e, t) {
    var r = PushManager.getInstance().getOpenAppOpeway();
    if (r && r.opewaynum === this._config.opewaynum) {
      if (!JumpManager.getInstance().jumpToTravelGame()) {
        t();
        return;
      }
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else t();
  }
}
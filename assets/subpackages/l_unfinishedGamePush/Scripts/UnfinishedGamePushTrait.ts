import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
import PushManager from '../../../Scripts/gamePlay/base/push/PushManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
var f = {
  pushHour: 18,
  noVisitMinutes: 30,
  opewaynum: "mjunfinished1",
  taskType: "mjunfinished01"
};
@mj.trait
@mj.class("UnfinishedGamePushTrait")
export default class UnfinishedGamePushTrait extends Trait {
  _config = f;
  static traitKey = "UnfinishedGamePush";
  onLoad() {
    super.onLoad.call(this);
    if (this._traitData) {
      void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
      void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
      void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
      void 0 !== this._traitData.noVisitMinutes && (this._config.noVisitMinutes = this._traitData.noVisitMinutes);
    }
  }
  getConfig() {
    return this._config;
  }
  getUserModel() {
    return UserModel.getInstance();
  }
  isToday(e) {
    if (!e || e <= 0) return false;
    var t = new Date(),
      r = new Date(e);
    return t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth() && t.getDate() === r.getDate();
  }
  hasNormalUnfinishedGame() {
    var e = this.getUserModel().normalData,
      t = e.getLevelData();
    if (!t || "" === t) return false;
    var r = e.getStartGameTime();
    return this.isToday(r);
  }
  hasTravelUnfinishedGame() {
    var e = this.getUserModel().travelData,
      t = e.getLevelData();
    if (!t || "" === t) return false;
    var r = e.getStartGameTime();
    return this.isToday(r);
  }
  checkTodayUnfinishedGame(e) {
    var t = e !== MjGameType.Normal && this.hasNormalUnfinishedGame(),
      r = e !== MjGameType.Travel && this.hasTravelUnfinishedGame();
    return {
      hasUnfinished: t || r,
      priorityNormal: t
    };
  }
  isBeforePushTime() {
    return new Date().getHours() < this._config.pushHour;
  }
  hasVisitedWithinNoVisitWindow() {
    var e = this.getUserModel().getAppStartTime();
    if (!e || e <= 0) return false;
    var t = new Date(),
      r = new Date(t.getFullYear(), t.getMonth(), t.getDate(), this._config.pushHour, 0, 0, 0);
    return e >= r.getTime() - 60000 * this._config.noVisitMinutes && e <= r.getTime();
  }
  canSendPush() {
    if (!this.isBeforePushTime()) return {
      canSend: false,
      priorityNormal: false
    };
    var e = this.checkTodayUnfinishedGame();
    return e.hasUnfinished ? this.hasVisitedWithinNoVisitWindow() ? {
      canSend: false,
      priorityNormal: false
    } : {
      canSend: true,
      priorityNormal: e.priorityNormal
    } : {
      canSend: false,
      priorityNormal: false
    };
  }
  onIptSetLv_selEnterAnim(e, t) {
    var r = this.getUserModel().getCurrentGameType();
    if (r === MjGameType.Normal || r === MjGameType.Travel) {
      var i = __read(e.args, 2);
      i[0], i[1];
      this.checkAndTriggerPush();
      t();
    } else t();
  }
  onGsListener_onGameEnd(e, t) {
    var r = this.getUserModel().getCurrentGameType();
    if (r === MjGameType.Normal || r === MjGameType.Travel) {
      if (this.checkTodayUnfinishedGame(r).hasUnfinished) {
        this.checkAndTriggerPush();
      } else {
        this.cancelPush();
      }
      t();
    } else t();
  }
  onLoginM_enterGame(e, t) {
    var r = PushManager.getInstance().getOpenAppOpeway();
    if (r && r.opewaynum === this._config.opewaynum) {
      var i = this.checkTodayUnfinishedGame();
      if (i.hasUnfinished) {
        if (i.priorityNormal) {
          JumpManager.getInstance().jumpToGame();
        } else {
          JumpManager.getInstance().jumpToTravelGame();
        }
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
        return;
      }
    }
    t();
  }
  checkAndTriggerPush() {
    this.canSendPush().canSend && this.sendPush();
  }
  sendPush() {
    var e = this.getConfig(),
      t = PushManager.getInstance().getPushTimestamp(e.pushHour);
    PushManager.getInstance().sendGamePush({
      opewaynum: e.opewaynum,
      taskType: e.taskType,
      sendTime: t
    }, {
      keyNum: "unfinished"
    });
  }
  cancelPush() {
    PushManager.getInstance().sendGamePushRemoved(this._config.opewaynum);
  }
}
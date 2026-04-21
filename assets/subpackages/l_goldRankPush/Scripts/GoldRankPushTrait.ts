import Trait from '../../../Scripts/framework/trait/Trait';
import PushManager from '../../../Scripts/gamePlay/base/push/PushManager';
import { EVT_MSG_KEY_EVENT_HIDE } from '../../../Scripts/Config';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
var c = {
  pushHour: 17,
  opewaynum: "mbgqgoldrank1",
  taskType: "mbgqgoldrank01"
};
@mj.trait
@mj.class("GoldRankPushTrait")
export default class GoldRankPushTrait extends Trait {
  _config = c;
  static traitKey = "GoldRankPush";
  onLoad() {
    super.onLoad.call(this);
    if (this._traitData) {
      void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
      void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
      void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
    }
  }
  getMessageListeners() {
    var _t = {};
    _t[EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
    return _t;
  }
  onGameHide() {
    this.checkAndTriggerPush();
  }
  getConfig() {
    return this._config;
  }
  getRankModel() {
    var t = mj.getClassByName("RankModel");
    return null == t ? void 0 : t.getInstance();
  }
  hasParticipatedInActivity() {
    var t = this.getRankModel();
    return !!t && !(!t.hasOpeningActivity || !t.hasOpeningActivity());
  }
  isActivityEnded() {
    var t = this.getRankModel();
    return !t || !!t.isNowActivityFinished && t.isNowActivityFinished();
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
  onPushMgr_init(t, e) {
    this.checkAndTriggerPush();
    e();
  }
  checkAndTriggerPush() {
    this.isActivityEnded() || this.hasParticipatedInActivity() && this.sendPush();
  }
  sendPush() {
    var t = this.getConfig(),
      e = PushManager.getInstance().getPushTimestamp(t.pushHour);
    PushManager.getInstance().sendGamePush({
      opewaynum: t.opewaynum,
      taskType: t.taskType,
      sendTime: e
    }, {
      keyNum: "participated"
    });
  }
}
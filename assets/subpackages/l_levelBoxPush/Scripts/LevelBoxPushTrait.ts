import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import PushManager from '../../../Scripts/gamePlay/base/push/PushManager';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
var h = {
  progressThresholds: [0.5, 0.8],
  pushHour: 13,
  opewaynum: "mbgqbox1",
  taskType: "mbgqbox01"
};
@mj.trait
@mj.class("LevelBoxPushTrait")
export default class LevelBoxPushTrait extends Trait {
  _config = Object.assign({}, h);
  _lastRewardCount = -1;
  static traitKey = "LevelBoxPush";
  onLoad() {
    super.onLoad.call(this);
    if (this._traitData) {
      void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
      void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
      void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
      void 0 !== this._traitData.progressThresholds && (this._config.progressThresholds = this._traitData.progressThresholds);
    }
  }
  getConfig() {
    return this._config;
  }
  getNormalBoxTrait() {
    var t = mj.getClassByName("NormalBoxTrait"),
      e = null == t ? void 0 : t.getInstance();
    return e && true === e.eventEnabled ? e : null;
  }
  getLevelBoxTrait() {
    var t = mj.getClassByName("LevelBoxTrait"),
      e = null == t ? void 0 : t.getInstance();
    return e && true === e.eventEnabled ? e : null;
  }
  getActiveBoxTrait() {
    var t = this.getNormalBoxTrait();
    if (t) return {
      trait: t,
      name: "NormalBox"
    };
    var e = this.getLevelBoxTrait();
    return e ? {
      trait: e,
      name: "LevelBox"
    } : null;
  }
  getBoxProgressInfo() {
    var t,
      e,
      r = this.getActiveBoxTrait();
    if (!r) return null;
    var o = r.trait,
      n = (r.name, null === (t = o.getBoxTargetProgress) || void 0 === t ? void 0 : t.call(o)),
      a = null === (e = o.getRemainingProgress) || void 0 === e ? void 0 : e.call(o);
    return void 0 === n || void 0 === a ? null : n < 0 ? null : {
      currentProgress: n - a,
      boxLimit: n,
      cycleId: n
    };
  }
  checkNewBoxCycle(t) {
    if (-1 === this._lastRewardCount) {
      this._lastRewardCount = t;
      return false;
    }
    if (t !== this._lastRewardCount) {
      this._lastRewardCount = t;
      return true;
    }
    return false;
  }
  onLoginM_enterGame(t, e) {
    var r = PushManager.getInstance().getOpenAppOpeway();
    if (r && r.opewaynum === this._config.opewaynum) {
      JumpManager.getInstance().jumpToGame();
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
  onBeforeWinBhv_doOthLgc(t, e) {
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Normal) {
      this.checkAndTriggerPush();
      e();
    } else e();
  }
  onLevelBoxMdl_setNewBox(t, e) {
    this.removePush();
    e();
  }
  checkAndTriggerPush() {
    var t = this.getBoxProgressInfo();
    if (t) {
      var e = t.currentProgress,
        r = t.boxLimit,
        o = t.cycleId;
      this.checkNewBoxCycle(o);
      if (!(r <= 0)) {
        for (var n = this.getConfig(), a = false, i = 0, s = 0; s < n.progressThresholds.length; s++) {
          var u = n.progressThresholds[s];
          if (e >= Math.ceil(r * u)) {
            a = true;
            i = s;
          }
        }
        a && this.sendPush(i);
      }
    }
  }
  sendPush(t) {
    var e = this.getConfig(),
      r = PushManager.getInstance().getPushTimestamp(e.pushHour);
    PushManager.getInstance().sendGamePush({
      opewaynum: e.opewaynum,
      taskType: e.taskType,
      sendTime: r
    }, {
      keyNum: t.toString()
    });
  }
  removePush() {
    PushManager.getInstance().sendGamePushRemoved(this.getConfig().opewaynum);
  }
}
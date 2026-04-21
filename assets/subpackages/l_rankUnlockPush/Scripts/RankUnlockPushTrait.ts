import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import PushManager from '../../../Scripts/gamePlay/base/push/PushManager';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
var c = {
  progressThreshold: 0.8,
  pushHour: 17,
  opewaynum: "mbgqgoldunlock1",
  taskType: "mbgqgoldunlock01"
};
@mj.trait
@mj.class("RankUnlockPushTrait")
export default class RankUnlockPushTrait extends Trait {
  _config = c;
  static traitKey = "RankUnlockPush";
  onLoad() {
    super.onLoad.call(this);
    this.registerTile2Event();
    if (this._traitData) {
      void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
      void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
      void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
      void 0 !== this._traitData.progressThreshold && (this._config.progressThreshold = this._traitData.progressThreshold);
    }
  }
  registerTile2Event() {
    var e,
      t,
      r,
      n = null === (e = this._traitData.events) || void 0 === e ? void 0 : e.find(function (e) {
        return "BeforeWinBhv_doOthLgc" === e.event;
      }),
      o = null !== (t = null == n ? void 0 : n.priority) && void 0 !== t ? t : 0,
      i = null !== (r = null == n ? void 0 : n.type) && void 0 !== r ? r : 2;
    this.registerEvent([{
      event: "Tile2BfWinBhv_doOthLgc",
      priority: o,
      type: i
    }]);
  }
  getConfig() {
    return this._config;
  }
  getRankUnlockLevel() {
    var e,
      t = mj.getClassByName("RankTrait");
    if (t && t.getInstance()) {
      var r = t.getInstance(),
        n = (null === (e = r.getLimitLevel) || void 0 === e ? void 0 : e.call(r)) || 0;
      if ("number" == typeof n && n > 0) return n;
    }
    this.eventEnabled = false;
    return 0;
  }
  onLoginM_enterGame(e, t) {
    var r = PushManager.getInstance().getOpenAppOpeway();
    if (r && r.opewaynum === this._config.opewaynum) {
      JumpManager.getInstance().jumpToGame();
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else t();
  }
  onBeforeWinBhv_doOthLgc(e, t) {
    this.handleWinEvent();
    t();
  }
  onTile2BfWinBhv_doOthLgc(e, t) {
    this.handleWinEvent();
    t();
  }
  handleWinEvent() {
    var e = UserModel.getInstance().getCurrentGameType();
    e !== MjGameType.Normal && e !== MjGameType.Tile2Normal || this.checkAndTriggerPush();
  }
  checkAndTriggerPush() {
    var e = this.getRankUnlockLevel(),
      t = UserModel.getInstance(),
      r = t.getCurrentGameType() === MjGameType.Tile2Normal ? MjGameType.Tile2Normal : MjGameType.Normal,
      n = t.getGameDataByGameType(r).getLevelId();
    if (n > e) this.removePush();else {
      var o = this.getConfig().progressThreshold;
      n - 1 < Math.ceil(e * o) || this.sendPush();
    }
  }
  sendPush() {
    var e = this.getConfig(),
      t = PushManager.getInstance().getPushTimestamp(e.pushHour),
      r = this.getRankUnlockLevel(),
      n = e.progressThreshold;
    PushManager.getInstance().sendGamePush({
      opewaynum: e.opewaynum,
      taskType: e.taskType,
      sendTime: t
    }, {
      keyNum: "unlock_" + r + "_" + n
    });
  }
  removePush() {
    PushManager.getInstance().sendGamePushRemoved(this.getConfig().opewaynum);
  }
}
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { EVT_MSG_HALL_FORCE_UPDATE } from '../../../Scripts/base/event/EventDefine';
@mj.trait
@mj.class("RankPatch1Trait")
export default class RankPatch1Trait extends Trait {
  _rankTrait = null;
  _openActTimer = -1;
  static traitKey = "RankPatch1";
  onRankTrait_startEnterHall(t, e) {
    e();
    this._rankTrait = t.ins;
  }
  onRankBtn_updateAll(t, e) {
    this._rankTrait, e();
  }
  onRankBtn_closeOutCD(t, e) {
    var r, n;
    e({
      returnType: TraitCallbackReturnType.jump
    });
    this.tryExecuteHomeRankPipeline(null === (n = null === (r = t.ins) || void 0 === r ? void 0 : r.node) || void 0 === n ? void 0 : n.parent);
  }
  onRankBtn_finishCD(t, e) {
    var r, n;
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
    this.tryExecuteHomeRankPipeline(null === (n = null === (r = t.ins) || void 0 === r ? void 0 : r.node) || void 0 === n ? void 0 : n.parent);
  }
  tryExecuteHomeRankPipeline(t, e) {
    var r = this;
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.None) {
      this.clearOpenActTimer();
      this._openActTimer = setTimeout(function () {
        if (r._rankTrait && r.isRankOpen() && r.checkIfOpenNewActivity(r._rankTrait.getRankModel())) {
          r._rankTrait.executeHomeRankPipeline(t);
          null == e || e();
          r.dispatchEvent(EVT_MSG_HALL_FORCE_UPDATE);
          r.clearOpenActTimer();
        }
      }, 1100);
    }
  }
  clearOpenActTimer() {
    if (-1 !== this._openActTimer) {
      clearTimeout(this._openActTimer);
      this._openActTimer = -1;
    }
  }
  checkIfOpenNewActivity(t) {
    var e = Date.now();
    return t.localData.curActStartTime < 0 || e >= t.localData.nextActStartTime || Math.abs(t.localData.nextActStartTime - e) < 1100;
  }
  onRankModel_checkOpen(t, e) {
    var r = t.ins,
      n = this.checkIfOpenNewActivity(r);
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: n
    });
  }
  onRankVw_closeOutCD(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
    this.dispatchEvent("msg_removeRankBoxTips");
    var r = t.ins;
    this.tryExecuteHomeRankPipeline(null, function () {
      if (cc.isValid(r)) {
        r.updateLabels();
        r.updateCountdown();
        r.initRank123();
        r.refreshList();
      }
    });
  }
  onRankVw_finishCD(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
    this.dispatchEvent("msg_removeRankBoxTips");
    var r = t.ins;
    this.tryExecuteHomeRankPipeline(null, function () {
      if (cc.isValid(r)) {
        r.updateLabels();
        r.updateCountdown();
        r.initRank123();
        r.refreshList();
      }
    });
  }
  isRankOpen() {
    var t, e;
    return !!this._rankTrait && UserModel.getInstance().getMainGameData().getLevelId() > ((null === (e = (t = this._rankTrait).getLimitLevel) || void 0 === e ? void 0 : e.call(t)) || 0);
  }
}
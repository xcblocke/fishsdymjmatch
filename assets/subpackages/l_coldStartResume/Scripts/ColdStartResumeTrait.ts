import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ColdStartResumeTrait")
export default class ColdStartResumeTrait extends Trait {
  _timeHours = 24;
  _lastQuitAppTime = 0;
  _normalLastQuitTime = 0;
  _tile2LastQuitTime = 0;
  static traitKey = "ColdStartResume";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this._timeHours = this._traitData.timeHours || 24;
    var a = UserModel.getInstance();
    this._normalLastQuitTime = (null === (e = a.normalData.localData) || void 0 === e ? void 0 : e.lastUpdateTime) || 0;
    this._tile2LastQuitTime = (null === (r = a.tile2NormalData.localData) || void 0 === r ? void 0 : r.lastUpdateTime) || 0;
  }
  onLoginM_enterGame(t, e) {
    if (this._timeHours <= 0) e();else {
      var r = UserModel.getInstance().getMainGameType();
      this._lastQuitAppTime = r === MjGameType.Tile2Normal ? this._tile2LastQuitTime : this._normalLastQuitTime;
      if (this.shouldResumeGame()) {
        e({
          isBreak: true
        });
      } else {
        e();
      }
    }
  }
  onMainGameCtrl_vwLoad(t, e) {
    var r = UserModel.getInstance().getCurrentGameType();
    if (r === MjGameType.Normal || r === MjGameType.Tile2Normal) {
      this.localData.isInLevelGame = true;
    } else {
      this.localData.isInLevelGame = false;
    }
    e();
  }
  onUISetBtnBack_onBtnClk(t, e) {
    this.localData.isInLevelGame = false;
    e();
  }
  shouldResumeGame() {
    try {
      var t = UserModel.getInstance(),
        e = t.getGameDataByGameType(t.getMainGameType()),
        a = e.getLevelData();
      if (!this.localData.isInLevelGame) return false;
      if (!a || "" === a) return false;
      var i = e.getClearTileCount();
      if (this._traitData.isSkipCount) ;else if (0 === i) return false;
      var o = this._lastQuitAppTime || 0;
      return !!o && !(Date.now() - o > 3600000 * this._timeHours);
    } catch (t) {
      console.error("[" + ColdStartResumeTrait.traitKey + "] 检查续关条件异常: " + t.message);
      return false;
    }
  }
}
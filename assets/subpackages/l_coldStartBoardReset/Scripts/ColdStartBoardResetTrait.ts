import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
@mj.trait
@mj.class("ColdStartBoardResetTrait")
export default class ColdStartBoardResetTrait extends Trait {
  _timeHours = 24;
  _lastQuitAppTime = 0;
  _useRestart = false;
  _shouldReset = false;
  static traitKey = "ColdStartBoardReset";
  onLoad() {
    var e;
    super.onLoad.call(this);
    this._timeHours = void 0 !== this._traitData.timeHours ? this._traitData.timeHours : 0;
    this._useRestart = true === this._traitData.useRestart;
    var r = UserModel.getInstance().normalData;
    this._lastQuitAppTime = (null === (e = r.localData) || void 0 === e ? void 0 : e.lastUpdateTime) || 0;
  }
  onLoginM_enterGame(t, e) {
    if (this.shouldResetBoard()) {
      if (this._useRestart) {
        this._shouldReset = true;
      } else {
        this.resetBoardData();
      }
      e();
    } else e();
  }
  onIptInitView_pushEff(t, e) {
    if (this._useRestart && this._shouldReset) {
      if (this.isNormalGameType()) {
        GameInteraction.input({
          inputType: EGameInputEnum.Restart,
          dieResult: 0
        });
        this._shouldReset = false;
      }
      e();
    } else e();
  }
  shouldResetBoard() {
    try {
      var t = UserModel.getInstance().normalData.getLevelData();
      if (!t || "" === t) return false;
      if (0 === this._timeHours) return true;
      var e = this._lastQuitAppTime || 0;
      return !!e && !(Date.now() - e < 3600000 * this._timeHours);
    } catch (t) {
      console.error("[" + ColdStartBoardResetTrait.traitKey + "] 检查重置条件异常: " + t.message);
      return false;
    }
  }
  resetBoardData() {
    try {
      UserModel.getInstance().normalData.resetGameData();
    } catch (t) {
      console.error("[" + ColdStartBoardResetTrait.traitKey + "] 重置牌局数据异常: " + t.message);
    }
  }
  isNormalGameType() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Normal;
  }
}
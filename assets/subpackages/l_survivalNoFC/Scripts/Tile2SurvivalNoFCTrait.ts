import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import SurvivalNoFCAdjustTrait from './SurvivalNoFCAdjustTrait';
@mj.trait
@mj.class("Tile2SurvivalNoFCTrait")
export default class Tile2SurvivalNoFCTrait extends SurvivalNoFCAdjustTrait {
  static traitKey = "Tile2SurvivalNoFC";
  onLoad() {
    var e = this;
    super.onLoad.call(this);
    Promise.resolve().then(function () {
      e.registerEvent([{
        event: "AllClearTt_isSurAc"
      }]);
    });
  }
  onAllClearTt_isSurAc(t, e) {
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal) {
      var r;
      r = !(!this._config || 0 === this._config.length) && this.canActive();
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.jump,
        returnVal: r
      });
    } else e();
  }
  onSurvNoFCTrait_canActive(t, e) {
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal) {
      var r;
      r = !(!this._config || 0 === this._config.length) && this.canActive();
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.jump,
        returnVal: r
      });
    } else e();
  }
}
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ClassicDayScoreTrait")
export default class ClassicDayScoreTrait extends Trait {
  static traitKey = "ClassicDayScore";
  onLoad() {
    var r, e;
    super.onLoad.call(this);
    this._config = {
      batchRate: null !== (r = this._traitData.batchRate) && void 0 !== r ? r : 1,
      dayRate: null !== (e = this._traitData.dayRate) && void 0 !== e ? e : 0.5
    };
  }
  onScoreMod_batchRate(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config.batchRate
    });
  }
  onScoreMod_dayMul(t, r) {
    var e = UserModel.getInstance().getGameActiveDays() || 1,
      a = Math.log(Math.E + e * this._config.dayRate);
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: a
    });
  }
}
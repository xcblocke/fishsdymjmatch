import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ValentineOpenLvLimitTrait")
export default class ValentineOpenLvLimitTrait extends Trait {
  static traitKey = "ValentineOpenLvLimit";
  get openLv() {
    return null != this._traitData.openLv ? this._traitData.openLv : 3;
  }
  onValModel_isActOpen(t, e) {
    var r = t.ins.isInActivityTime(),
      n = this.isValentineLvOpen();
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r && n
    });
  }
  isValentineLvOpen() {
    return UserModel.getInstance().getGameDataByGameType(MjGameType.Normal).getLevelId() >= this.openLv;
  }
}
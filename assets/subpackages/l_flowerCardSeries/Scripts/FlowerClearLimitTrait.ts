import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.trait
@mj.class("FlowerClearLimitTrait")
export default class FlowerClearLimitTrait extends Trait {
  static traitKey = "FlowerClearLimit";
  onLoad() {
    super.onLoad.call(this);
  }
  onFlowerCS_isOpenCEff(e, t) {
    var r,
      a,
      o,
      i,
      n = null !== (a = null === (r = e.ins) || void 0 === r ? void 0 : r._currentGameType) && void 0 !== a ? a : null === (i = null === (o = UserModel.getInstance()) || void 0 === o ? void 0 : o.getCurrentGameType) || void 0 === i ? void 0 : i.call(o);
    if (n === MjGameType.Normal) {
      var c = UserModel.getInstance().normalData.getLevelId();
      if (GameUtils.isTypeHardLevel(n, c)) {
        t();
      } else {
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: false
        });
      }
    } else t();
  }
}
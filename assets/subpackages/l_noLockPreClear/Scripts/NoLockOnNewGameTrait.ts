import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("NoLockOnNewGameTrait")
export default class NoLockOnNewGameTrait extends Trait {
  static traitKey = "NoLockOnNewGame";
  onLoad() {
    super.onLoad.call(this);
  }
  onNoLockPreClr_isEnabled(t, r) {
    var e,
      o = null === (e = UserModel.getInstance()) || void 0 === e ? void 0 : e.getCurrentGameData();
    if (o) {
      if (0 !== o.getClearTileCount()) {
        r();
      } else {
        r({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: true
        });
      }
    } else {
      r();
    }
  }
}
import { HIDELOADING } from '../../../Scripts/Config';
import Trait from '../../../Scripts/framework/trait/Trait';
import { DotGamePageShow, EPageShowType } from '../../../Scripts/dot/DGamePageShow';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("HallTrait")
export default class HallTrait extends Trait {
  static traitKey = "Hall";
  onLoad() {
    super.onLoad.call(this);
  }
  isGuidePass() {
    var t,
      e,
      o = UserModel.getInstance(),
      r = null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : 1;
    return o.getTotalGames() >= r;
  }
  onLoginM_enterGame(t, e) {
    // Disable hall redirect on startup; keep default login flow entering game directly.
    e();
  }
  onUISetDlg_adjustPH(t, e) {
    e();
  }
}
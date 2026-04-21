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
    var o,
      r = this;
    if (null === (o = this.traitData) || void 0 === o ? void 0 : o.isGuideColdStartBack) {
      var n = mj.getClassByName("GuideTrait"),
        a = UserModel.getInstance();
      if (n && n.getInstance() && true === n.getInstance().eventEnabled && !a.isGuideFinished() && 1 == a.getTotalGames()) {
        e();
        return;
      }
    }
    if (this.isGuidePass()) {
      DotGamePageShow.dot(EPageShowType.LoadingToMainPage);
      this.pushController("HallController", {
        isReplace: true
      }, function () {
        r.dispatchEvent(HIDELOADING);
      });
      e({
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
  onUISetDlg_adjustPH(t, e) {
    e();
  }
}
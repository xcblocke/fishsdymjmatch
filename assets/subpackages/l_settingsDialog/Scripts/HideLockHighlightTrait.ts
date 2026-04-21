import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("HideLockHighlightTrait")
export default class HideLockHighlightTrait extends Trait {
  static traitKey = "HideLockHighlight";
  onLoad() {
    super.onLoad.call(this);
    UserModel.getInstance().setLockHighlightEnabled(false);
  }
  onUISetDlg_adjustPH(t, e) {
    var i = t.ins;
    if (cc.isValid(i)) {
      var o = i.getLockHighlightSwitchNode();
      cc.isValid(o) && (o.active = false);
    }
    e();
  }
}
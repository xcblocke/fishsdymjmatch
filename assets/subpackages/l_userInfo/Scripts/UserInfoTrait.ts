import Trait from '../../../Scripts/framework/trait/Trait';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("UserInfoTrait")
export default class UserInfoTrait extends Trait {
  static traitKey = "UserInfo";
  onLoad() {
    super.onLoad.call(this);
  }
  onUISetHome_openUserInfo(e, t) {
    if (this.traitData.isOpenSetting) {
      ControllerManager.getInstance().pushViewByController("UserInfoController");
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      var r = e.ins;
      r && cc.isValid(r.node) && r.delegate && r.delegate.close();
      ControllerManager.getInstance().pushViewByController("UserInfoController");
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
  onUISetHomeCtrl_onUIEnable(e, t) {
    var r = e.ins;
    r && cc.isValid(r.rootView) && r.refreshAvatorAndNickname();
    t();
  }
}
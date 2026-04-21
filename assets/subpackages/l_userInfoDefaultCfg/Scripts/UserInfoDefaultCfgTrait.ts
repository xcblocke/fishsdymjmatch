import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("UserInfoDefaultCfgTrait")
export default class UserInfoDefaultCfgTrait extends Trait {
  static traitKey = "UserInfoDefaultCfg";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this._config = {
      defaultAvatarId: null === (e = this._traitData) || void 0 === e ? void 0 : e.defaultAvatarId,
      defaultFrameId: null === (r = this._traitData) || void 0 === r ? void 0 : r.defaultFrameId
    };
  }
  onInfoMgr_setDefAvatar(t, e) {
    if (void 0 !== this._config.defaultAvatarId) {
      var r = UserModel.getInstance().getAvatarId();
      r && 0 !== r || UserModel.getInstance().setAvatarId(this._config.defaultAvatarId);
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
  onInfoMgr_setDefFrame(t, e) {
    if (void 0 !== this._config.defaultFrameId) {
      var r = UserModel.getInstance().getFrameId();
      r && 0 !== r || UserModel.getInstance().setFrameId(this._config.defaultFrameId);
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
}
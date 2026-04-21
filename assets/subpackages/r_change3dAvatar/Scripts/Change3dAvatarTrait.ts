import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Change3dAvatarTrait")
export default class Change3dAvatarTrait extends Trait {
  static traitKey = "Change3dAvatar";
  onLoad() {
    super.onLoad.call(this);
  }
  onUICellItem_getDftIconBdNm(t, r) {
    r();
  }
  onInfoMgr_getDftIconBdNm(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: "r_change3dAvatar"
    });
  }
}
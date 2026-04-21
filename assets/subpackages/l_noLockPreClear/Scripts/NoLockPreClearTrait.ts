import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("NoLockPreClearTrait")
export default class NoLockPreClearTrait extends Trait {
  static traitKey = "NoLockPreClear";
  onLoad() {
    super.onLoad.call(this);
  }
  @mj.traitEvent("NoLockPreClr_isEnabled")
  isIgnoreLockEnabled() {
    return false;
  }
  onIptTchStart_Lock(t, r) {
    if (this.isIgnoreLockEnabled()) {
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      r();
    }
  }
  onComboChk_canBreakCb(t, r) {
    if (this.isIgnoreLockEnabled()) {
      r({
        returnType: TraitCallbackReturnType.jump,
        returnVal: false
      });
    } else {
      r();
    }
  }
}
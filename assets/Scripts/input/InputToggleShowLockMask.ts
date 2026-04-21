import { ToggleShowLockMaskEffect } from '../ToggleShowLockMaskEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputToggleShowLockMask extends InputBase {
  @mj.traitEvent("IptTglMask_exec")
  excute(e) {
    var t = e.enabled;
    this.pushToggleShowLockMaskEffect(t);
  }
  pushToggleShowLockMaskEffect(e) {
    var t = new ToggleShowLockMaskEffect({
      enabled: e
    });
    this.pushEffect(t);
  }
}